import { StyleSheet, Modal, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Datepicker from '../../../component/event/datepicker';
import ActivityDatepicker from '../../../component/event/activityDatepicker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { Divider } from 'react-native-paper';

const CreateEventDetail = ({ route, navigation }) => {
    const [title, setTitle] = useState('');
    const [tipology, setTipology] = useState('');
    const [date, setDate] = useState();
    const [tags, setTags] = useState('');
    const [images, setImages] = useState();
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState("");
    
    const [modalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      if (route.params?.imageCount)
        setImages(route.params.imageCount)
      if(route.params?.tags)
        setTags(route.params.tags)
      if(route.params?.tipology)
        setTipology(route.params?.tipology)

    }, [route.params?.imageCount, route.params?.tags, route.params?.tipology]);

    // image, location, date, tags
  return (
    <View
        style={styles.container}>
        <View
        style={{
            alignItems: 'center',
            paddingTop: 25,
            position: 'relative',
        }}>
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ top: 25, position: 'absolute', left: 25 }}
        >
            <Ionicons
            name={'md-arrow-back-sharp'}
            size={25}
            color={'white'}
            />
        </TouchableOpacity>
        <Text style={styles.headingText}>Create { route.params?.EventName ?? "Event" }</Text>
        </View>

        <ScrollView>
        <View style={styles.inputMain}>
        <TextInput
            placeholder="Insert Title"
            value={title}
            placeholderTextColor='#747688'

            onChangeText={value => {
            setTitle(value);
            }}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            style={styles.input}
        />
        </View>
        <View style={styles.inputMain}>
            <TouchableOpacity style={[styles.input,{flexDirection:"row",justifyContent:"flex-start", alignItems:"center"}]} onPress={() => setModalVisible(true)}>
            {date && date[0].timechanged ? 
            <Text style={[{color:"#747688", fontSize:18}, date? {padding:5,backgroundColor:"rgba(151, 151, 151, 0.7)", borderRadius:20,color:"black"}:null]}>{date ? `${date[0].date[2]} ${date[0].date[1]} ${date[0].time.startHour < 10 ? `0${date[0].time.startHour}`:date[0].time.startHour}:${date[0].time.startMin < 10 ? `0${date[0].time.startMin}`:date[0].time.startMin} to ${date[0].time.endHour < 10 ? `0${date[0].time.endHour}`:date[0].time.endHour}:${date[0].time.endMin < 10 ? `0${date[0].time.endMin}`:date[0].time.endMin}`:"Date Time"}</Text>
            :
            <Text style={[{color:"#747688", fontSize:18}, date? {padding:5,backgroundColor:"rgba(151, 151, 151, 0.7)", borderRadius:20,color:"black"}:null]}>{date ? `${date[0].date[2]} ${date[0].date[1]} All day`:"Date Time"}</Text>
            }
            {date && date.length>1 ? <Text style={[{color:"black", fontSize:18}]}>{`+${date.length-1} more`}</Text>:null}
            </TouchableOpacity>
            {/* <Image
                source={require('../../../Assets/calander.png')}
                style={{ width: 23, height: 23 }}
            /> */}
            <MaterialCommunityIcons name='calendar-month' size={26} color={"black"} />

        </View>
        { route.params?.EventName == "Activity" ?
        <View style={styles.inputMain}>
            <TouchableOpacity style={[styles.input,{flexDirection:"row",justifyContent:"flex-start", alignItems:"center"}]} onPress={() => navigation.navigate("ActivtyTipology")}>
                <Text style={[{color:"#747688", fontSize:18}, tipology? {padding:5,backgroundColor:"rgba(151, 151, 151, 0.7)", borderRadius:20,color:"black"}:null]}>{tipology ? `${tipology}`:"Tiplogy of Activity"}</Text>
            </TouchableOpacity>
        </View> : null
        }
        <View style={styles.inputMain}>        
            <TouchableOpacity style={[styles.input,{flexDirection:"row",justifyContent:"flex-start", alignItems:"center"}]} onPress={()=> navigation.navigate("EventTags", {tags:tags})}>
            <Text style={[{fontSize:18}, tags && tags.length!==0 ? {padding:5,backgroundColor:"rgba(151, 151, 151, 0.7)", borderRadius:20,color:"#000000"}:{color:"#747688"}]}>{ tags && tags.length>0 ? `${tags[0]}`:"Insert Tags"}</Text>
            {tags && tags.length>1 ? <Text style={[{fontSize:18, color:"#000000"}, tags ? {marginHorizontal:5,padding:5,backgroundColor:"rgba(151, 151, 151, 0.7)", borderRadius:20}:null]}>{tags[1]}</Text>:null}
            {tags && tags.length>2 ? <Text style={[{fontSize:18,color:"#000000"}]}>+{tags.length-2} more</Text>:null}
            </TouchableOpacity>
        </View>
        <View style={styles.inputMain}>     
            <TouchableOpacity style={styles.input} onPress={()=> navigation.navigate("EventImages")}>
            <Text style={[{fontSize:18}, images ? {color:"#000000"}:{color:"#747688"}]}>{ images ? `${images} images selected`:"Insert Images"}</Text>
            </TouchableOpacity>
            <Feather name={'link'}color={"black"} size={24}/>
        </View>
        <View style={styles.inputMain}>        
            <TouchableOpacity style={styles.input} onPress={()=> setOpen(true)}>
            <Text style={[{fontSize:18}, location ? {color:"#000000"}:{color:"#747688"}]}>{ location ? `${location}`:"Insert Location"}</Text>
            </TouchableOpacity>
            <MaterialIcons name={'my-location'}color={"black"} size={24}/>
        </View>
        <View style={styles.inputMain}>
        <TextInput
            placeholderTextColor='#747688'
            placeholder="Whatsapp contact"
            value={whatsapp}
            mode="flat"
            keyboardType="phone-pad"
            onChangeText={value => {
            setWhatsapp(value);
            }}
            // placeholderTextColor='#747688'
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            style={styles.input}
        />
        <Image
            source={require('../../../Assets/whatsapp.png')}
            style={[styles.image, { width: 28, height: 28 }]}
        />
        </View>
        <View style={styles.inputMain}>        
        <TextInput
            placeholderTextColor='#747688'
            placeholder="Email"
            value={email}
            mode="flat"
            keyboardType="email-address"
            onChangeText={value => {
            setEmail(value);
            }}
            // placeholderTextColor='#747688'
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            style={styles.input}
        />
        {/* <Image
            source={require('../../../Assets/mail.png')}
            style={[styles.image, { width: 28, height: 20 }]}
        /> */}
        <MaterialIcons name='mail-outline' size={26} color={"black"} />
        </View>

        <View style={styles.inputMain}>
        <TextInput
            placeholder="Phone Number"
            value={phone}
            placeholderTextColor='#747688'
            keyboardType="phone-pad"
            onChangeText={value => {
            setPhone(value);
            }}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            // defaultValue={text}
            style={styles.input}
        />
        {/* <Image
            source={require('../../../Assets/phone.png')}
            style={{ width: 23, height:23 }}
        /> */}
        <Feather name='phone' size={23} color={"black"} />

        </View>
        <View style={styles.inputMain}>
        <TextInput
            placeholder="Website"
            value={website}
            placeholderTextColor='#747688'
            onChangeText={value => {
            setWebsite(value);
            }}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            style={styles.input}
        />
        <MaterialCommunityIcons name={'web'} color={"black"} size={24}/>
        </View>
        <View style={styles.inputMain}>
        <TextInput
            placeholder="Description"
            value={description}
            placeholderTextColor='#747688'
            textAlignVertical='top'
            multiline
            numberOfLines={4}
            onChangeText={value => {
            setDescription(value);
            }}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            style={[styles.input, {minHeight:150}]}
        />
        </View>

        <TouchableOpacity
        style={[styles.btn, { alignSelf: 'center', height: 58 ,width:'70%'}]}
        onPress={() => navigation.navigate('OwnerEvent')}>
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1.7 }}
            colors={['#28CCF2', '#33CC8F']}
            style={styles.gradient}>
            <Text style={[styles.btn1text,{color:"white"}]}>Create</Text>
        </LinearGradient>
        </TouchableOpacity>
        </ScrollView>
      { modalVisible && route.params.EventName=="Event" ? (<Datepicker setModalVisible={setModalVisible} dates={setDate} date={date} /> ):null}
      { modalVisible && route.params.EventName=="Activity" ? (<ActivityDatepicker setModalVisible={setModalVisible} dates={setDate} date={date} /> ):null }
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          setOpen(!open);
        }}
      >
        <View style={[styles.centeredView, {justifyContent:"center"}]}>
          <View style={[styles.modalView, {margin:5, paddingVertical:25}]}>
            <View style={[styles.inputMainS, {alignItems:"flex-start",justifyContent:"space-between",marginHorizontal:5}]}>
                <GooglePlacesAutocomplete
                  autoFocus={true}
                  fetchDetails={true}
                  placeholder='Search'
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setLocation(details.formatted_address);
                    // console.log(data, details);
                  }}
                  query={{
                    key: 'AIzaSyAaONPFyunxhNO1fyj8KWqQ8JWR709qkZY',
                    language: 'en',
                  }}
                  
                  GooglePlacesDetailsQuery={{
                    fields: ['geometry', 'formatted_address']

                  }}
                  style={styles.inputS}
                />
              <MaterialIcons name={"my-location"} color={"black"} size={26} />
              </View>
            <Divider horizontalInset style={{marginVertical:10}} />
            <TouchableOpacity onPress={()=>{ setOpen(false);}}>
              <Text style={{color:"black", fontSize:20, fontFamily:"Poppins"}}>{location ? location:""}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>

  )
}

export default CreateEventDetail

const styles = StyleSheet.create({
  inputMainS: {
    width: '95%',
    flexDirection: 'row',
    //  borderRightWidth:2,
    //  borderRightColor:'red',
    alignItems: 'center',

  },  
  inputS: {
    width: '100%', textInput: {color:"black", fontSize:20, fontFamily:"Poppins"}
    // justifyContent: 'center',
  },
  container:{
    backgroundColor: '#28282B',
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    },
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
  bottemSec: {
      width: '100%',
      // height: '45%',
      // backgroundColor: '#28282B',
      // borderTopRadius: 30,
      position: 'absolute',
      bottom: 0,
      left:20,
      borderTopLeftRadius: 60,
      borderTopRightRadius: 60,
      paddingTop: 30,
      justifyContent: 'center',
      zIndex:2
      // alignContent: 'center',
      // alignItems: 'center',
    },
  headingText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    paddingBottom: 20,
    color: 'white',
    alignSelf: 'center',
  },
  checkboxContainer: {
    // display:'flex'
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
  },
  checkbox: {
    alignSelf: 'center',
    color: 'white',
    // backgroundColor: 'white',
  },
  checkboxText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 23,

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
  btn1: {
    marginTop: 15,
    height: 40,
    // width: '70%',
    borderRadius: 10,
    shadowColor: 'black',
    // backgroundColor: '#28CCF2',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '600',
    // boxShadow: 0 10 35 rgba(111, 126, 201, 0.25),
    // background: linear-gradient(180deg, #1396D9 0%, #32CB90 100%),
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
  signupText: {
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 30,
    fontFamily:"Poppins",
    // paddingHorizontal: 5,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
  inputMain: {
    width: '88%',
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 15,
    marginVertical: 6,
    paddingHorizontal: 19,
    alignItems: 'center',

  },
  input: {
    width: '88%',
    // paddingLeft: 15,
    justifyContent: 'center',
    height: 54,
    fontSize: 18,
    fontWeight: '400'
  },
  image: {
    height: 20,
    width: 17
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

})