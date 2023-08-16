import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Divider } from 'react-native-paper';

const EventImages = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false);
  const [image, setImage] = React.useState()
  const [title, setTitle] = React.useState()
  const [alert, showAlert] = React.useState(false)
  
  return (
        <View
            style={{
            backgroundColor: '#28282B',
            height: '100%',
            width: '100%',
            position: 'absolute',
            bottom: 0,
            }}>
            <View
            style={{
                alignItems: 'center',
                paddingTop: 25,
                position: 'relative',
            }}>
            <TouchableOpacity
                onPress={
                () => navigation.goBack()
                }
                style={{ top: 25, position: 'absolute', left: 25 }}
            >
                <Ionicons
                name={'md-arrow-back-sharp'}
                size={25}
                color={'white'}
                />
            </TouchableOpacity>
            <Text style={styles.headingText}>Insert/edit Image</Text>
            </View>
        <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
            <View>
            <TouchableOpacity
                onPress={
                () => navigation.goBack()
                }
                style={{borderWidth:1, borderColor:"white", alignSelf:"center", padding:5, borderRadius:10}}
            >
                <AntDesign
                name={'upload'}
                size={25}
                color={'white'}
                />
            </TouchableOpacity>
            <Text style={{color:"white"}}>Import from gallery</Text>
            </View>
            <View>
            <TouchableOpacity
                onPress={
                () => navigation.goBack()
                }
                style={{borderWidth:1, borderColor:"white", alignSelf:"center", padding:5, borderRadius:10}}
            >
                <MaterialIcons
                name={'library-add-check'}
                size={25}
                color={'white'}
                />
            </TouchableOpacity>
            <Text style={{color:"white"}}>Select from the app</Text>
            </View>
        </View>
        <Text style={{fontSize:18, color:"white", textAlign:"justify", padding:15}}>Suggestion: The first image will be showed on the app Homepage. it is reccomended to use a nice and celan image. If you dont have an image you can use one of our standard Photo.</Text>
        <Divider horizontalInset/>
        <View style={{flexDirection:"row", justifyContent:"space-around",flexWrap:"wrap", marginVertical: 20, marginHorizontal:20}}>
					<TouchableOpacity
						style={{flexDirection:"column" }}
            onPress={()=> {
              setImage(require("../../Assets/image1.png"))
              setTitle("image1.png")
              setVisible(true)
            }}
					>
            <Image source={require("../../Assets/image1.png")}
            style={styles.image}
            />
						<View style={{ flexDirection:"row", justifyContent:"space-evenly" }}>
							<Text style={{color:"white"}} >image1.png</Text>
							<MaterialCommunityIcons name={"trash-can"} size={20} color={"white"} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{flexDirection:"column" }}
            onPress={()=> {
              setImage(require("../../Assets/image2.png"))
              setTitle("image2.png")
              setVisible(true)
            }}
					>
            <Image source={require("../../Assets/image2.png")}
            style={styles.image}
            />
						<View style={{ flexDirection:"row", justifyContent:"space-evenly" }}>
							<Text style={{color:"white"}} >image2.png</Text>
							<MaterialCommunityIcons name={"trash-can"} size={20} color={"white"} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{flexDirection:"column" }}
            onPress={()=> {
              setImage(require("../../Assets/image3.png"))
              setTitle("image3.png")
              setVisible(true)
            }}
					>
            <Image source={require("../../Assets/image3.png")}
            style={styles.image}
            />
						<View style={{ flexDirection:"row", justifyContent:"space-evenly" }}>
							<Text style={{color:"white"}} >image3.png</Text>
							<MaterialCommunityIcons name={"trash-can"} size={20} color={"white"} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{flexDirection:"column" }}
            onPress={()=> {
              setImage(require("../../Assets/image4.png"))
              setTitle("image4.png")
              setVisible(true)
            }}
					>
            <Image source={require("../../Assets/image4.png")}
            style={styles.image}
            />
						<View style={{ flexDirection:"row", justifyContent:"space-evenly" }}>
							<Text style={{color:"white"}} >image4.png</Text>
							<MaterialCommunityIcons name={"trash-can"} size={20} color={"white"} />
						</View>
					</TouchableOpacity>
        </View>
        <TouchableOpacity
            style={[styles.btn, { alignSelf: 'center', height: 58 ,width:'70%'}]} 
            onPress={()=> navigation.navigate({name: "OwnerCreateEventDetail", params:{imageCount:4}, merge:true})}>
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1.7 }}
            colors={['#28CCF2', '#33CC8F']}
            style={styles.gradient}>
            <Text style={[styles.btn1text,{color:"white"}]}>Confirm</Text>
        </LinearGradient>
        </TouchableOpacity>
      <Modal
        visible={visible}
        transparent={true}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
        <View style={styles.centeredView}>
          <Text style={{color:"white", fontSize:20}}>{title}</Text>
          <Image source={image} style={[styles.image,{width:"90%", height:"45%"}]} />
          <TouchableOpacity 
          style={{position:"relative", left:"32%", bottom:"12%", borderRadius:10, padding:10, alignItems:"center", backgroundColor:"rgba(89,89,91,0.8)"}}
          onPress={()=>setModalVisible(true)}
          >
            <MaterialCommunityIcons name={"trash-can"} size={20} color={"white"} />
            <Text style={{fontSize:16,color:"white"}}>Delete</Text>
          </TouchableOpacity>
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
          <View style={[styles.modalView,{paddingVertical:20, borderRadius:40, width:"80%", height:"45%"}]}>
              <Text style={{fontWeight:"bold", fontSize:28, fontFamily:"Poppins", marginBottom:"4%"}}>Oops..</Text>
              <Text style={{fontWeight:"bold", fontSize:20, paddingHorizontal:15, fontFamily:"Poppins"}}>Do you want continue and cancel this picture?</Text>
              <TouchableOpacity style={{width:"60%",height:"17%", marginBottom:"4%", marginTop:80}} 
              onPress={()=>setModalVisible(!modalVisible)}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1.7 }}
                  colors={['#28CCF2', '#33CC8F']}
                  style={styles.gradient}>
                  <Text style={[styles.btn1text,{color:"white"}]}>go back</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={[styles.gradient,{width:"60%",height:"17%",backgroundColor:"rgba(195,69,71,255)", marginVertical:"4%"}]}>
                <Text style={{textTransform: "uppercase", fontFamily:"Poppins", fontSize:16, fontWeight:"400", color:"white"}}>Delete</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default EventImages

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor:"rgba(0,0,0,0.7)"
  },
  modalView: {
    // margin: 20,
    marginHorizontal:23,
    // marginTop:50,
    backgroundColor: 'rgba(211, 211, 211, 1)',
    borderRadius: 20,
    // paddingHorizontal: 20,
    // paddingVertical: 35,
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
		image:{ marginHorizontal:"2%",  marginVertical:"3%", paddingHorizontal:"2%", paddingVertical:"4%" },
    headingText: {
        fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 25,
        lineHeight: 27,
        // textTransform: 'uppercase',
        paddingBottom: 20,
        color: 'white',
        alignSelf: 'center',
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