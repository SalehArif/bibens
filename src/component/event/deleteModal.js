import { StyleSheet, Modal, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DeleteEvent = (props) => {
//   const [modalVisible, setModalVisible] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  return (
    <View>
    <Modal
    transparent={true}
    visible={true}
    onRequestClose={() => {
    props.setModalVisible(false);
    }}
    >
    <View style={styles.centeredView}>
    <View style={[styles.modalView,{ borderRadius:40, width:"80%", height:"45%"}]}>
        <Text style={{fontWeight:"bold", fontSize:28, fontFamily:"Poppins", marginBottom:"4%", marginTop:10}}>Oops..</Text>
        <Text style={{fontWeight:"bold", fontSize:20, paddingHorizontal:15, fontFamily:"Poppins", marginBottom:10}}>Are you sure you want to continue and cancel this event from the App?</Text>
        <TouchableOpacity style={{width:"60%",height:"17%", marginVertical:"4%"}} 
        onPress={()=>props.setModalVisible(false)}>
            <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1.7 }}
            colors={['#28CCF2', '#33CC8F']}
            style={styles.gradient}>
            <Text style={[styles.btn1text,{color:"white"}]}>cancel</Text>
            </LinearGradient>
            {/* <Text style={{textTransform: "uppercase", fontFamily:"Poppins", fontSize:16, fontWeight:"400"}}>go back</Text> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setVisible(!visible)} style={[styles.gradient,{width:"60%",height:"17%",backgroundColor:"rgba(195,69,71,255)", marginVertical:"4%"}]}>
            <Text style={{textTransform: "uppercase", fontFamily:"Poppins", fontSize:16, fontWeight:"400", color:"white"}}>Delete</Text>
        </TouchableOpacity>
    </View>
    </View>
    </Modal>
    <Modal
    transparent={true}
    visible={visible}
    onRequestClose={() => {
    setVisible(!visible);
    }}
    >
    <View style={styles.centeredView}>
    <View style={[styles.modalView,{ borderRadius:40, width:"80%", height:"45%"}]}>
    <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['#33CC8F','#28CCF2']}
            style={[styles.gradient,{width:"35%", height:"35%", borderRadius:100, marginTop:40}]}>
            <AntDesign name='check' size={50} color={"white"} />
        </LinearGradient>
        <Text style={{fontWeight:"bold", fontSize:20, paddingHorizontal:15, fontFamily:"Poppins", marginVertical:20}}>Event cancelled Succesfully!</Text>
        <TouchableOpacity style={{width:"60%",height:"17%", marginTop:"10%"}} 
            onPress={() => {setVisible(!visible); props.setModalVisible(false) }}
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

export default DeleteEvent;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#28282B',
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    headingText: {
        fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        // textTransform: 'uppercase',
        // paddingTop: 20,
        color: 'white',
    },
    disText: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: 'silver',
    },
    
  modalView: {
    // margin: 20,
    marginHorizontal:23,
    // marginTop:50,
    backgroundColor: 'rgba(211, 211, 211, 1)',
    borderRadius: 20,
    alignItems: 'center',
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor:"rgba(0,0,0,0.7)"
  },
  
  discriptionView: {
    padding: 25,

    height: '95%',
    width: '100%',
    backgroundColor: '#28282B',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingHorizontal: 15,
    shadowColor: '#000',
    alignSelf: 'center',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

},
modalHeadingText1: {
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 38,
    color: '#FFFFFF',
},
backBtn: {
    height: 40,
    width: 40,
    borderRadius: 15,
    backgroundColor: '#28282B9C',
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 50,
    justifyContent: 'center',
    alignItems: 'center',
},

})