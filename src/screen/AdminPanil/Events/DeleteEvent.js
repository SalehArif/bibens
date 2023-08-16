import { StyleSheet, Modal, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DeleteEvent = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [openDiscription, setOpendiscription] = React.useState(false);

  return (
    <View
        style={styles.container}>
        <View
        style={{
            alignItems: 'center',
            paddingVertical: 25,
            position: 'relative',
        }}>
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ top: 25, position: 'absolute', left: 15 }}
        >
            <Ionicons
            name={'md-arrow-back-sharp'}
            size={25}
            color={'white'}
            />
        </TouchableOpacity>
        </View>
        <Image
            source={require('../../../Assets/Image42.png')}
            style={{marginVertical:10,height:"40%",width:"100%", alignSelf:"center"}}
        />
        <View style={{marginHorizontal:20}}>
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                <Text style={styles.headingText}>Friday Night Show - 212</Text>
                <TouchableOpacity style={{ alignItems:"center",}} onPress={()=> setModalVisible(!modalVisible)}>
                    <MaterialCommunityIcons name={'trash-can'} color="white" size={20}/>
                    <Text style={{color:"white"}}>Delete</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.disText,{marginVertical:5}]} numberOfLines={3}>
                212 locale simbolo delle giornate e serate mondane a Modena, dove
                la clientela si sente sempre a proprio agio. 212 di ispirazione
            </Text>
                <Text style={styles.headingText}>Days:</Text>
                <Text style={styles.disText}>Sunday 16–01 </Text>
                <Text style={styles.disText}>Monday 20–01</Text>
                <Text style={styles.disText}>Tuesday 15–01</Text>
                <Text style={styles.disText}>Wednsday All Day </Text>
                <Text style={styles.disText}>Thursday</Text>
                <View style={{ flexDirection: 'row', paddingVertical: 10, }}>
                    <Text style={styles.headingText}>Place: </Text>
                    <Text style={styles.disText}>
                        <Ionicons name='md-location-outline' size={16}/>
                        Via Alfonso Paltrinieri
                        </Text>
                </View>
                <TouchableOpacity
                    style={{width:"60%",height:"17%", marginVertical:"4%", alignSelf:"center", alignItems:"center"}}
                    onPress={() => setOpendiscription(!openDiscription)}
                >
                    <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1.7 }}
                  colors={['#28CCF2', '#33CC8F']}
                  style={[styles.gradient, {flexDirection:"row",justifyContent:"center"}]}>
                  <Text style={[styles.btn1text,{color:"white"}]}>
                    Show details
                  </Text>                 
                  <MaterialIcons name='keyboard-arrow-down' size={25} color={"white"} />
                </LinearGradient>
                </TouchableOpacity>
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={openDiscription}
        onRequestClose={() => { setOpendiscription(!openDiscription) }}>
        <View style={[styles.centeredView, { justifyContent: 'flex-end' }]}>
            <View style={[styles.discriptionView, { margin: 0, }]}>
                <View style={[styles.backBtn, { top: 30, }]}>
                    <TouchableOpacity onPress={() => setOpendiscription(!openDiscription)}>
                        <Ionicons
                            name={'md-arrow-back-sharp'}
                            size={25}
                            color={'white'} />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.modalHeadingText1, { alignSelf: 'center', paddingVertical: 12 }]}>
                    Description
                </Text>
                <Text style={[styles.disText, { width: '90%', alignSelf: 'center' }]}>
                    {"212 locale simbolo delle giornate e serate mondane a Modena, dove la clientela si sente sempre a proprio agio. 212 di ispirazione minimalista, acciaio e legno, arredamento contemporaneo essenziale, giochi di luce e trasparenze lo rendono unico e suggestivo. Il buon gusto e ad un'esperienza ventennale nel settore hanno saputo conquistare un posto importante nell'entertainment diurno e soprattutto notturno fuori dalla provincia di Modena. Venite a trovarci vi stuzzicheremo il palato e oltre! Garantisce tutti i giorni ospitalita' e un servizio sempre al top. "}
                </Text>
            </View>
        </View>
    </Modal>
        <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView,{ borderRadius:40, width:"80%", height:"45%"}]}>
              <Text style={{fontWeight:"bold", fontSize:28, fontFamily:"Poppins", marginBottom:"4%", marginTop:10}}>Oops..</Text>
              <Text style={{fontWeight:"bold", fontSize:20, paddingHorizontal:15, fontFamily:"Poppins", marginBottom:10}}>Are you sure you want to continue and cancel this event from the App?</Text>
              <TouchableOpacity style={{width:"60%",height:"17%", marginVertical:"4%"}} 
              onPress={()=>setModalVisible(!modalVisible)}>
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
                onPress={() => navigation.goBack()}
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

export default DeleteEvent

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