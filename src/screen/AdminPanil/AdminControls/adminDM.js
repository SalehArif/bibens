import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
    Modal,
    ScrollView
  } from 'react-native';
  
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const AdminDM = ({ navigation } ) => {
    const [modalVisible,setModalVisible] = useState(false)
	const [message,setMessage] = useState("")

  return (
    <View style={ styles.Menu}>
        <View style={{flexDirection:"row", justifyContent:"space-between", alignContent:"center", marginVertical:5}}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{  marginHorizontal:15}}
                        >
                <Ionicons name={'arrow-back'} size={25} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() => navigation.goBack()}
            style={{  marginHorizontal:15, alignItems:"center"}}>
                <MaterialCommunityIcons name={'history'} size={25} color={'white'} />
                <Text style={styles.subText} >History</Text>
            </TouchableOpacity>
        </View>
        <Text style={[styles.HeadingText, {fontSize:30 ,color:"#22AEB3", }]}>Message</Text>

        <View style={{flexDirection:"row", alignItems:"center", marginVertical:30, marginHorizontal: 20}}>
            <Image source={require('../../../Assets/Ellipse2.png')}/>
            <View style={{alignItems:"center", marginHorizontal:10}}>
                <Text style={styles.text}>David deep</Text>
                <Text style={styles.subText}>21 March, 2022</Text>
            </View>
        </View>

        <TextInput
        placeholder="Message......."
        value={message}
        placeholderTextColor='black'
        onChangeText={value => { setMessage(value) }}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        multiline={true}
        textAlignVertical="top"
        style={{ fontSize: 18,fontWeight: '300', paddingHorizontal:20, backgroundColor:"rgb(228, 223, 223)",  borderRadius:10, width:"90%", height:300, marginVertical:50, marginHorizontal:20, paddingVertical:20, paddingHorizontal:25}}
        />

        <TouchableOpacity
            style={[styles.btn,{width:'40%',height:40,borderRadius:10}]}
            onPress={() => setModalVisible(true)}
            >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#33CC8F', '#28CCF2']}
                style={[styles.gradient,{ flexDirection:"row", alignItems:"center", justifyContent:"space-evenly",borderRadius:10} ]}>
                <Text style={[styles.inputText,{color:"black"}]}>Send Message</Text>
            </LinearGradient>
        </TouchableOpacity>

        <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
        <View style={[styles.centeredView, {justifyContent:"center", alignItems:"center"}]}>
          <View style={[styles.modalView,{ alignItems:"center",borderRadius:40, width:"80%", height:"45%"}]}>
          <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={['#33CC8F','#28CCF2']}
                  style={[styles.gradient,{width:"35%", height:"35%", borderRadius:100, marginTop:40}]}>
                <AntDesign name='check' size={50} color={"white"} />
            </LinearGradient>
              <Text style={{fontWeight:"bold", fontSize:20, paddingHorizontal:15, fontFamily:"Poppins", marginVertical:20}}>Message sent Succesfully!</Text>
              <TouchableOpacity style={{width:"60%",height:"17%", marginTop:"10%"}} 
                onPress={() => setModalVisible(!modalVisible)}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={['#33CC8F','#28CCF2']}
                  style={styles.gradient}>
                  <Text style={[styles.btn1text,{color:"white"}]}>close</Text>
                </LinearGradient>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
    </View>
  )
}

export default AdminDM

const styles = StyleSheet.create({
	centeredView: {
        flex: 1,
        backgroundColor:"rgba(0,0,0,0.5)"
    },
modalView: {
        // margin: 20,
        marginHorizontal:23,
        marginTop:30,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 35,
        backgroundColor:"rgba(217, 217, 217, 1)"
        // height:"90%"
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
  Menu: {
    flex:1,
    backgroundColor: '#28282B',
    paddingTop: 25,
    elevation: 5,
},

btn: {
    margin: 10,
    height: 45,
    width: '90%',
    borderRadius: 15,
    backgroundColor: '#D3D3D3',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#6F7EC9',shadowOffset: {
    width: 0,
    height: 12,
    },shadowOpacity: 0.58,shadowRadius: 16, elevation:24
},
btntext: {
    lineHeight: 27,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20, 
    fontWeight: '600',
},
HeadingText: {
    // marginBottom: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '600',
},

HeadingText1: {
// marginBottom: 10,
textAlign: 'center',
color: 'black',
fontSize: 20,
lineHeight: 27,
fontWeight: '600',
},
gradient1: {
    width: '100%',
    height: '100%',
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
},  
textStyle: {
    fontSize:18,
    lineHeight:22,
    fontWeight: 'bold',
    textAlign: 'center',
},
text:{
    fontSize:20, fontWeight:400, color:"white"
},
subText:{
    fontSize:15, fontWeight:400, color:"white"
},

gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
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
inputText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
    paddingHorizontal: 5,
    color: 'white',
},
})