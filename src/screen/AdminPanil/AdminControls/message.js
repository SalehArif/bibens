import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    TextInput,
    Image,
    Modal,
    ScrollView
  } from 'react-native';
  
import React, { useState, useContext, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Switch } from 'react-native-switch';
import { Divider } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const Message = ({ navigation }) => {
	const [message,setMessage] = useState("")
	const [modalVisible, setModalVisible] = useState(false)
	const [ownerFilters,setOwnerFilters]  = useState(false)
	// const [visible, setVisible] = useState(false)
	const [checked, setChecked] = useState(new Array(16).fill(true))

	const [open, setOpen] = useState(false)

  const [isEnabled, setIsEnabled] = useState([true,true]);
  const toggleSwitch = (index) => {
    var tempArr = isEnabled;
    tempArr[index] = !tempArr[index]
    setIsEnabled([...tempArr]);
    // setIsEnabled(previousState => ([...previousState, ]));
  };
  const clickOnFilter = (index) => {
    var tempArr = checked;
    tempArr[index] = !tempArr[index]
    setChecked([...tempArr]);
  };
 
  return (
    <View style={styles.Menu}>
    <Text style={[styles.HeadingText,]}>Message</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: 'absolute', top: 20, left: 20 }}>
        <Ionicons name={'arrow-back'} size={25} color={'white'} />
      </TouchableOpacity>
      <Divider horizontalInset style={{height:1, marginTop:15}} />
      <View style={{marginLeft:15}}>
        <Text style={[styles.whiteText]}>Type your message</Text>
        <TextInput
            placeholder="Message......."
            value={message}
            placeholderTextColor='black'
            onChangeText={value => { setMessage(value) }}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            multiline={true}
            textAlignVertical="top"
            style={{ fontSize: 18,fontWeight: '300', paddingHorizontal:20, backgroundColor:"rgb(228, 223, 223)",  borderRadius:10, width:"90%", height:150, marginHorizontal:8, paddingVertical:20, paddingHorizontal:25}}
            />
        
        <Text style={[ styles.whiteText,{marginLeft:35}]}>Sent to</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", backgroundColor:"#39393D", width:"90%", height:40, marginLeft:15, paddingHorizontal:20, borderRadius:10}}>
            <Text style={{fontSize:16, fontWeight:"500", color:"white"}}>All Users</Text>
						<Switch
							onValueChange={()=> toggleSwitch(0)}
							value={isEnabled[0]}
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
				<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20}}>
					<Text style={[styles.whiteText, {marginTop:15}]}>Filter by:</Text>
					<TouchableOpacity
						style={[styles.btn,{width:'40%',height:38,borderRadius:10, marginRight:50}]}
						onPress={() => setModalVisible(true)}
						>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
							colors={['#33CC8F', '#28CCF2']}
							style={[styles.gradient,{ flexDirection:"row", alignItems:"center", justifyContent:"space-evenly",borderRadius:10} ]}>
							<Text style={[styles.inputText,{color:"black"}]}>Users</Text>
							<Ionicons
								name={'menu'}
								size={20}
								/>
						</LinearGradient>
					</TouchableOpacity>
				</View>
				<Divider horizontalInset style={{marginTop:15}} />
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", backgroundColor:"#39393D", width:"90%", height:40, marginLeft:15, paddingHorizontal:20, borderRadius:10, marginTop:30}}>
            <Text style={{fontSize:16, fontWeight:"500", color:"white"}}>All Owners</Text>
						<Switch
							onValueChange={()=> toggleSwitch(1)}
							value={isEnabled[1]}
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
				<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20}}>
					<Text style={[styles.whiteText, {marginTop:15}]}>Filter by:</Text>
					<TouchableOpacity
						style={[styles.btn,{width:'40%',height:38,borderRadius:10, marginRight:50}]}
						onPress={() => {setOwnerFilters(true); setModalVisible(true)}}
						>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
							colors={['#33CC8F', '#28CCF2']}
							style={[styles.gradient,{ flexDirection:"row", alignItems:"center", justifyContent:"space-evenly",borderRadius:10} ]}>
							<Text style={[styles.inputText,{color:"black"}]}>Owners</Text>
							<Ionicons
								name={'menu'}
								size={20}
								/>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			
			<View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
					// marginVertical:10,
					marginTop:40,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '8%',
        }}>
        <TouchableOpacity
          style={[{paddingHorizontal: 5, width: '45%', borderRadius: 10}]}
          onPress={() => {
            setOpen(!open);
          }}
					>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#2FC598', '#149AD4']}
            style={styles.gradient1}>
            <Text
              style={[
                styles.textStyle,
                {fontFamily: 'Poppins', fontWeight: 'bold', color: 'black'},
              ]}>
              Send Message
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{paddingHorizontal: 5, width: '45%', borderRadius: 10}]}
          onPress={() => {
            navigation.goBack();
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#2FC598', '#149AD4']}
            style={styles.gradient1}>
            <Text
              style={[
                styles.textStyle,
                {fontFamily: 'Poppins', fontWeight: 'bold', color: 'black'},
              ]}>
              Cancel
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      </View>

			{/* Filters Modal */}
		<Modal   
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(false);
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
			{/* Age Filters */}
			<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingTop:5}}>
				<Text style={[styles.HeadingText1, {textDecorationLine:"underline", marginBottom:10}]}>Sort By Age</Text>
				<TouchableOpacity
				onPress={() => setModalVisible(false)}
				style={{  elevation: 2,padding: 5, backgroundColor:"rgba(179,179,180,255)",  }}>
					<MaterialCommunityIcons name={'close-thick'} size={18}/>
				</TouchableOpacity>
			</View>
				<TouchableOpacity
				onPress={()=>clickOnFilter(0)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
						{
							checked[0] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1,{ marginLeft:5 ,fontSize:18}]} >20 - 30</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(1)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
						{
							checked[1] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1,{ marginLeft:5 ,fontSize:18}]} >30 - 40</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(2)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
						{
							checked[2] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1,{ marginLeft:5 ,fontSize:18}]} >40 - 50</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(3)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
						{
							checked[3] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1,{ marginLeft:5 ,fontSize:18}]} >50+</Text>
				</TouchableOpacity>

			{/* Plan Filters */}
			<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
					<Text style={[styles.HeadingText1, {textDecorationLine:"underline", marginVertical:10}]}>Sort By Plan:</Text>
			</View>
				<TouchableOpacity
				onPress={()=>clickOnFilter(4)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
					{
							checked[4] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
					}
						<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Basic Plan</Text>
				</TouchableOpacity>
				{
					ownerFilters ? 
					<TouchableOpacity
					onPress={()=>clickOnFilter(5)}
						style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
						{
							checked[5] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
							<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Manager Plan</Text>
					</TouchableOpacity>
					:null
				}
				{
					ownerFilters ? 
					<TouchableOpacity
					onPress={()=>clickOnFilter(6)}
						style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
						{
							checked[6] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
							<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Business Plan</Text>
					</TouchableOpacity>
					:null
				}

			{/* Province Filters */}
			<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
					<Text style={[styles.HeadingText1, {textDecorationLine:"underline", marginVertical:10}]}>Sort By Province:</Text>
			</View>
				<TouchableOpacity
				onPress={()=>clickOnFilter(7)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
					{
							checked[7] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Modena</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(8)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
					{
							checked[8] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Reggio Emilia</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(9)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
					{
							checked[9] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Bologna</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(10)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
						{
							checked[10] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Parma</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(11)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
						{
							checked[11] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Piacenza</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(12)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
					{
							checked[12] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Ferrara</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(13)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
					{
							checked[13] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Ravenna</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(14)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
					{
							checked[14] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Forlì-Cesena</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(15)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center", width:"45%", marginVertical:2,}}>
					{
							checked[15] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1, ,{marginLeft:5, fontSize:18}]} >Rimini</Text>
				</TouchableOpacity>
            </View>
        </View>
		</Modal>

		{/* Message Success Modal */}
		<Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          setOpen(!open);
        }}>
        <View style={styles.centeredView1}>
          <View style={styles.modalView1}>
            <View
              style={[
                styles.circle,
              ]}>
                 <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#33CC8F', '#28CCF2']}
                style={[
                  styles.gradient,{borderRadius:50}
                ]}>
              <Feather
                name={'check'}
                size={30}
                color={'white'}
                //   style={{top: 30, position: 'absolute', left: 25}}
              />
              </LinearGradient>
            </View>
            <View style={{}}>
              <Text style={{fontFamily:"Poppins", fontSize:18, fontWeight:"400", textAlign:"center", marginBottom:30}}>Message sent Succesfully!</Text>
            </View>

            <TouchableOpacity
              style={[styles.btn,{width:'80%',height:50}]}
              onPress={() => setOpen(!open)}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0.5}}
                colors={['#33CC8F', '#28CCF2']}
                style={[styles.gradient,]}>
                <Text style={[styles.canclebuttonText,]}>Close</Text>
              </LinearGradient>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    Menu: {
    //   width: '100%',
    //   height: '100%',
    flex:1,
      backgroundColor: '#28282B',
      // borderRadius: 20,
      paddingTop: 25,
      // justifyContent:'center',
    //   alignItems: 'center',
      elevation: 5,
    //   position: 'relative',
    //   bottom: 0,
      },
      HeadingText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 30,
      lineHeight: 45,
      fontWeight: '700',
    },
		whiteText: {
			fontFamily:"Poppins", 
			fontSize:18, 
			fontWeight:"500", 
			color:"white",
			marginLeft:15,
			marginBottom:10,
			marginTop:30
		},
		btn: {
			marginTop: 15,
			alignSelf: 'center',
			height: 30,
			width: '62%',
			borderRadius: 20,
			shadowColor: 'black',
			backgroundColor: '#28CCF2',
			marginBottom: 10,
			justifyContent: 'center',
		},
		gradient: {
			width: '100%',
			height: '100%',
			// textAlign: 'center',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			borderRadius: 20,
			// backgroundColor:'red',
		},
		gradient1: {
			width: '100%',
			height: '100%',
			flexDirection: 'row',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			alignSelf: 'center',
			borderRadius: 10,
		},
		inputText: {
			fontWeight: '700',
			fontSize: 18,
			lineHeight: 27,
			paddingHorizontal: 5,
			color: 'white',
		},
		textStyle: {
			color: 'white',
			fontWeight: 'bold',
			textAlign: 'center',
			fontSize: 16,
			lineHeight: 24,
			fontWeight: '400',
		},
		centeredView: {
			flex: 1,
			backgroundColor:"rgba(0,0,0,0.7)"
		},
		modalView: {
				// margin: 20,
				marginHorizontal:23,
				marginTop:20,
				backgroundColor: 'white',
				borderRadius: 32,
				paddingHorizontal: 20,
				paddingLeft: 40,
				paddingVertical: 20,
				backgroundColor:"rgba(217, 217, 217, 1)"
				// height:"90%"
		},
		centeredView1: {
			width: '100%',
			// height: '10%',`
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#00000090',
		},
		modalView1: {
			width: '70%',
			borderRadius: 20,
			backgroundColor: 'white',
			padding: 15,
			alignItems: 'center',
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			// shadowOpacity: 0.25,
			shadowRadius: 4,
			// elevation: 5
		},
    textStyle: {
			fontSize:18,
			lineHeight:22,
			fontWeight: 'bold',
			textAlign: 'center',
	},
	HeadingText1: {
		// marginBottom: 10,
		textAlign: 'center',
		color: 'black',
		fontSize: 18,
		lineHeight: 27,
		fontWeight: '600',
},
circle: {
	width: 50,
	height: 50,
	backgroundColor: '#28CCF2',
	borderRadius: 50,
	margin: 10,
	justifyContent: 'center',
	// alignItems: 'center',
},

canclebuttonText: {
	fontWeight: '400',
	lineHeight: 24,
	fontSize: 16,
	textAlign: 'center',
	color: 'white',
	letterSpacing: 1,
	textTransform: 'uppercase',
},
  });
  