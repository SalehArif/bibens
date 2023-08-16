import { StyleSheet, Text, View, Modal, TouchableOpacity, FlatList, } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-switch';
import DatePicker from 'react-native-modern-datepicker';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Datepicker = ( props ) => {
	const [date, setDate] = useState();
	const [time, setTime] = useState({startHour:0,startMin:0,endHour:0,endMin:0});
	const [dates, setDates] = useState( props.date ?? []);

	const [open, setOpen] = React.useState(false);
	const [isdisabled, setDisabled] = useState(false);
	const [isEnabled, setIsEnabled] = useState(false);
	const [timechanged, settimechanged] = useState(false);
	const toggleSwitch = () => {setIsEnabled(previousState => !previousState); setDisabled(!isdisabled)};
	const [visible, setVisible] = React.useState(false);

  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={true}
    onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        props.setModalVisible(false);
    }}>
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Modal
            visible={open}
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                setOpen(!open);
            }}
            >
                    
            <View style={[styles.centeredView, {justifyContent: 'center'}]}>

            <View style={[styles.modalView, {paddingHorizontal:5, paddingVertical:5}]}>
            <View style={{flexDirection:"row", alignItems:"center", marginLeft:10, justifyContent:"space-between"}}>
                <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}>Select Date</Text>
                <TouchableOpacity
                style={[styles.button, {borderRadius:5, justifyContent:"center", padding:0 , width:"13%", margin:12}]}
                onPress={() => setOpen(!open)}>
                    <MaterialCommunityIcons name={'close-thick'} size={18}/>
                
                {/* <Text style={[styles.textStyle, {fontSize:18,}]}>X</Text> */}
                </TouchableOpacity>
            </View>
            <DatePicker
                mode='calendar'
                options={{
                // backgroundColor: '#090C08',
                textHeaderColor: '#000000',
                textDefaultColor: '#000000',
                selectedTextColor: '#fff',
                mainColor: '#000000',
                textSecondaryColor: '#000000',
                }}
                onSelectedChange={value => {
                    setDate(value)
                }}
            />
                <TouchableOpacity
                style={[{marginTop:0, paddingLeft:17, width:"65%", height:"10%", borderRadius:10, alignSelf:"center"}]}
                onPress={() => {
                    var months =  ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
                    var dates = date.split("/");
                    dates[1] =  months[parseInt(dates[1])-1]
                    setDate(dates)
                    setOpen(false)
                    
                    }}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#2FC598', '#149AD4']}
                    style={styles.gradient1}>
                    <Text style={[styles.textStyle, {fontFamily:"Poppins", fontWeight:"bold" ,color:"white"}]}>Select</Text>
                </LinearGradient>
                </TouchableOpacity>
                </View>
            </View>
            </Modal>
            <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                setVisible(!visible);
            }}
            >
            <View style={[styles.centeredView, {justifyContent: 'center'}]}>
            <View style={[styles.modalView, {paddingHorizontal:5, paddingVertical:5}]}>
                <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                <Text style={{ color:"black", fontSize: 22,fontWeight: 'bold', alignSelf:"flex-end", marginRight:50}}>Select Time</Text>
                <TouchableOpacity
                    style={[styles.button, {borderRadius:5, justifyContent:"center", alignSelf:"flex-end", padding:0 , width:"13%", margin:12}]}
                    onPress={() => setVisible(!visible)}>
                    <MaterialCommunityIcons name={'close-thick'} size={18}/>
                </TouchableOpacity>
                </View>
                <Text style={{ color:"black", fontSize: 18,fontWeight: 'bold', lineHeight:25, marginLeft:"5%", fontFamily:"Poppins", marginTop:"5%"}}>Starting Time:</Text>
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"2%"}}>
                <TextInput
                    placeholder="00"
                    value={time.startHour==0 ? "00":time.startHour.toString()}
                    placeholderTextColor='black'
                    keyboardType='numeric'
                    onChangeText={value => {
                        console.log(value)
                    if(parseInt(value)>=0 && parseInt(value)<24)
                        setTime( state => ({...state, startHour: parseInt(value)}));
                    else if(value=="" || isNaN(value))
                        setTime( state => ({...state, startHour: 0}));
                    else
                        setTime( state => ({...state, startHour: 0}));
                    }}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    style={{fontSize: 25,fontWeight: '500', paddingHorizontal:30, backgroundColor:"rgb(179,179,179)",  borderRadius:30, marginHorizontal:3, paddingVertical:5}}
                />
                <Text style={{ color:"black", fontSize: 30,fontWeight: 'bold', alignSelf:"center"}}>:</Text>
                <TextInput
                    placeholder="00"
                    value={time.startMin==0 ? "00":time.startMin.toString()}
                    placeholderTextColor='black'
                    keyboardType='numeric'
                    onChangeText={value => {
                    if(parseInt(value)>=0 && parseInt(value)<60)
                        setTime( state => ({...state, startMin: parseInt(value)}));
                    else if(value=="" || isNaN(value))
                        setTime( state => ({...state, startMin: 0}));
                    else
                        setTime( state => ({...state, startMin: 0}));
                    }}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    style={{fontSize: 25,fontWeight: '500', paddingHorizontal:30, backgroundColor:"rgb(179,179,179)",  borderRadius:30, marginHorizontal:3, paddingVertical:5}}
                />
                </View>
                <Text style={{ color:"black", fontSize: 18,fontWeight: 'bold', lineHeight:25, marginLeft:"5%", fontFamily:"Poppins", marginTop:"5%"}}>End Time:</Text>
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"2%"}}>
                <TextInput
                    placeholder="00"
                    value={time.endHour==0 ? "00":time.endHour.toString()}
                    placeholderTextColor='black'
                    keyboardType='numeric'
                    onChangeText={value => {
                    if(parseInt(value)>=0 && parseInt(value)<24)
                        setTime( state => ({...state, endHour: parseInt(value)}));
                    else if( value=="" || isNaN(value))
                        setTime( state => ({...state, endHour: 0}));
                    else
                        setTime( state => ({...state, endHour: 0}));
                    }}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    style={{fontSize: 25,fontWeight: '500', paddingHorizontal:30, backgroundColor:"rgb(179,179,179)", borderRadius:30, marginHorizontal:3, paddingVertical:5}}
                />
                <Text style={{ color:"black", fontSize: 30,fontWeight: 'bold', alignSelf:"center"}}>:</Text>
                <TextInput
                    placeholder="00"
                    value={time.endMin==0 ? "00":time.endMin.toString()}
                    placeholderTextColor='black'
                    keyboardType='numeric'
                    onChangeText={value => {
                    if(parseInt(value)>=0 && parseInt(value)<60)
                        setTime( state => ({...state, endMin: parseInt(value)}));
                    else if(value=="" || isNaN(value))
                        setTime( state => ({...state, endMin: 0}));
                    else
                        setTime( state => ({...state, endMin: 0}));
                    }}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    style={{fontSize: 25,fontWeight: '500', paddingHorizontal:30, backgroundColor:"rgb(179,179,179)",  borderRadius:30, marginHorizontal:3, paddingVertical:5}}
                />
                </View>
                <TouchableOpacity
                style={[styles.btn, { alignSelf: 'center', height: 58 ,width:'70%'}]}
                onPress={() => setVisible(!visible)}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#33CC8F','#28CCF2']}
                    style={styles.gradient}>
                    <Text style={[styles.btn1text,{color:"white"}]}>Select</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
            </View>
            </Modal>
        <TouchableOpacity
            style={[styles.button, {borderRadius:5, justifyContent:"center", padding:0 ,position:"absolute", right:0, width:"13%", height:40, margin:12}]}
            onPress={() => props.setModalVisible(false)}>
            <MaterialCommunityIcons name={'close-thick'} size={18}/>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.button, {marginTop:35, paddingLeft:17}]}
            onPress={() => setOpen(true)}>
            <Text style={styles.textStyle}>{date ? `${date[2]} ${date[1]} ${date[0]}`:"Select Date"}</Text>
            <Feather name={"calendar"} size={20} color={"black"} />
        </TouchableOpacity>
        <View
            style={[styles.button, {marginTop:12, paddingLeft:17}]}>
            <Text style={styles.textStyle}>All Day</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
                activeText={''}
                inActiveText={''}
                backgroundActive={'#30d158'}
                backgroundInactive={'gray'}
                circleActiveColor={'white'}
                circleInActiveColor={'white'}
                circleSize={25}
                // switchLeftPx={0.5}
                // switchRightPx={0.5}
                barHeight={26}
                switchWidthMultiplier={2.05} //2.25
            />
        </View>
        <TouchableOpacity
            style={[styles.button, 
            isdisabled ? {backgroundColor:"rgb(167,167,167)" ,marginTop:12, paddingLeft:17}:
            {marginTop:12, paddingLeft:17}
            ]}
            onPress={()=>{setVisible(true); settimechanged(true);}}
            disabled={isdisabled}
            >
            <Text style={[styles.textStyle, isdisabled ? { color:"rgba(0,0,0,0.25)"}:null]}>Start Time</Text>
            <Text style={[styles.textStyle, isdisabled ? { color:"rgba(0,0,0,0.25)"}:null]}>{time.startHour < 10 ? `0${time.startHour}`:time.startHour}:{time.startMin< 10 ? `0${time.startMin}`:time.startMin}</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.button,                 
            isdisabled ? {backgroundColor:"rgb(167,167,167)" ,marginTop:12, paddingLeft:17}:
            {marginTop:12, paddingLeft:17}]}
            onPress={()=>{setVisible(true); settimechanged(true);}}
            disabled={isdisabled}
            >
            <Text style={[styles.textStyle, isdisabled ? { color:"rgba(0,0,0,0.25)"}:null]}>End Time</Text>
            <Text style={[styles.textStyle, isdisabled ? { color:"rgba(0,0,0,0.25)"}:null]}>{time.endHour< 10 ? `0${time.endHour}`:time.endHour}:{time.endMin< 10 ? `0${time.endMin}`:time.endMin}</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[{marginTop:12, paddingLeft:17, width:"65%", height:50, borderRadius:10, alignSelf:"center"}]}
            onPress={() => {
                if(isEnabled)
                    setDates(state => ([...state, {date, timechanged,isEnabled}]))
                else
                    setDates(state => ([...state, {date,time, timechanged}]))
                    
            }}>
            <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['#2FC598', '#149AD4']}
            style={styles.gradient1}>
            <Text style={[styles.textStyle, {fontFamily:"Poppins", fontWeight:"bold" ,color:"white"}]}>Add Date</Text>
            <FontAwesome name={"plus"} size={20} color={"white"} />
            </LinearGradient>
        </TouchableOpacity>
        <Text style={{marginTop:12}}>{dates.length} Dates Selected</Text>
        <FlatList
            data={dates}
            style={{height:"30%"}}
            renderItem={({item,index})=> (
                <View style={{flexDirection:"row" ,justifyContent:"space-between", backgroundColor:"rgba(137, 137, 137, 0.5)", margin:10,padding:10, paddingLeft:"25%", borderRadius:5}}>
                    <View style={{ alignItems:"center", justifyContent:"center" }}>
                        <Text style={{color:"black", fontSize:18, fontWeight:"500", lineHeight:18,}}>{item.date[2]} {item.date[1]} {item.date[0]}</Text>
                        {!item.isEnabled ? (
                            <Text style={{color:"black", fontSize:18, fontWeight:"500", lineHeight:18,}}>{item.time.startHour < 10 ? `0${item.time.startHour}`:item.time.startHour}:{item.time.startMin < 10 ? `0${item.time.startMin}`: item.time.startMin} to {item.time.endHour < 10 ? `0${item.time.endHour}`:item.time.endHour}:{item.time.endMin < 10 ? `0${item.time.endMin}`:item.time.endMin}</Text>
                            ):<Text>All day</Text>}
                    </View>
                    <TouchableOpacity style={{alignItems:"center"}} onPress={()=> setDates(dates.filter((val,ind) => ind!=index))}>
                        <MaterialCommunityIcons name={"trash-can"} size={23} color={"black"} />
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
            keyExtractor={(item,index)=> index}
        />
        <TouchableOpacity
            style={[{marginTop:20, paddingLeft:17, width:"65%", height:50, borderRadius:10, alignSelf:"center"}]}
            onPress={() => { props.dates(dates); props.setModalVisible(false); }}>
            <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['#2FC598', '#149AD4']}
            style={styles.gradient1}>
            <Text style={[styles.textStyle, {fontFamily:"Poppins", fontWeight:"bold" ,color:"white"}]}>Update</Text>
            </LinearGradient>
        </TouchableOpacity>
        </View>
    </View>
    </Modal>
  )
}

export default Datepicker

const styles = StyleSheet.create({
	centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
    backgroundColor:"rgba(0,0,0,0.7)"
  },
  modalView: {
    // margin: 20,
    marginHorizontal:23,
    marginTop:50,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 35,
    // height:"90%"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2, 
    backgroundColor:"rgba(179,179,180,255)", 
    flexDirection:"row", 
    justifyContent:"space-between",
    alignItems:"center"
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontSize:18,
    lineHeight:22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
	gradient: {
    width: '100%',
    height: '100%',
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  gradient1: {
    width: '100%',
    height: '100%',
    flexDirection:"row",

    // textAlign: 'center',
    justifyContent:"space-evenly",
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
	btn1text: {
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '600',
    fontFamily:"Poppins",
    fontSize: 18,
    lineHeight: 27,
    color: '#29292C',
  },	
  btn: {
    marginTop: 15,
    height: 58,
    width: '80%',
    borderRadius: 10,
    shadowColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})