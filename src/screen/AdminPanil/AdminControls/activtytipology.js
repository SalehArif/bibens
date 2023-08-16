import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
    Modal,
  } from 'react-native';
  
import React, { useState, } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
  
const Activtytipology = (props) => {

  const [tipology, setTipology] = useState(["Pub","Wellness","Course", "Sport","Meditation","Theater","Restaurant","Type","Cinema","Games"])
  const [newTipology, setNewTipology] = useState("");
  const [pressed,setPressed] = useState(false);

  return (
    <Modal   
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
            props.setVisible(false);
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={[styles.HeadingText, {textAlign:"left" ,marginTop:20}]}>MANAGE ACTIVITIES TIPOLOGY</Text>
                <TouchableOpacity
                onPress={() => props.setVisible(false)}
                style={{ position: 'absolute', top: 20, right: 20, elevation: 2,padding: 5, backgroundColor:"rgba(179,179,180,255)",  }}>
                <MaterialCommunityIcons name={'close-thick'} size={18}/>
                </TouchableOpacity>
                <ScrollView>
                    <TouchableOpacity style={{flexDirection:"row", alignItems:"center", marginTop:20}}
                        onPress={()=>setPressed(!pressed)}
                    >
                            <Ionicons name='md-add-circle' size={24} color={"black"} />
                            <Text style={[styles.HeadingText, {fontSize:16 ,marginLeft:5}]} >Add new tipology</Text>
                    </TouchableOpacity>
                    <View style={{marginTop:10}}>
                        {
                            pressed ? 
                            
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", backgroundColor:"rgba(255, 255, 255, 0.5)", width:"95%", borderRadius:10, paddingHorizontal:10, marginVertical: 5 }}>
                            <TextInput
                                placeholder="Enter new tipology"
                                value={newTipology}
                                placeholderTextColor='#747688'

                                onChangeText={value => {
                                    setNewTipology(value);
                                }}
                                underlineColorAndroid="transparent"
                                autoCapitalize="words"
                                style={styles.input}
                            />
                            <TouchableOpacity style={{marginHorizontal:10}} onPress={()=> {
                                if( newTipology !== ""){
                                    setTipology(state => [newTipology.trim(), ...state])
                                    setPressed(false)
                                    setNewTipology("")
                                }
                                } }>
                                <Ionicons name='md-add-circle' size={24} color={"black"} />
                                <Text style={[styles.HeadingText, {fontSize:14, lineHeight:17 }]} >Add</Text>
                            </TouchableOpacity>
                        </View>
                        :null
                        }
                        {	tipology.map((val,ind)=>
                            <View key={ind} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", backgroundColor:"rgba(57, 57, 61, 0.24)", width:"95%", borderRadius:10, paddingHorizontal:10, paddingVertical:5, marginVertical: 5 }}>
                                <Text style={{fontSize:18, fontWeight:"600", color:"black", marginLeft:5}}>{val}</Text>
                                <TouchableOpacity style={{ alignItems:"center", justifyContent:"center", marginRight:5 }}
                                    onPress={()=> setTipology(tipology.filter((val,index)=> index!==ind))}
                                >
                                        <MaterialCommunityIcons name='trash-can' size={18} color={"black"} />
                                        <Text style={[styles.HeadingText, {fontSize:14, lineHeight:17 }]} >Delete</Text>
                                </TouchableOpacity>
                            </View>
                        )

                        }
                    </View>
                <TouchableOpacity
                    style={[{marginTop:20, paddingLeft:17, width:"65%", height:50, borderRadius:10, alignSelf:"center"}]}
                    onPress={() => { props.setVisible(false); }}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['#2FC598', '#149AD4']}
                        style={styles.gradient1}>
                        <Text style={[styles.textStyle, {fontFamily:"Poppins", fontWeight:"bold" ,color:"white", textAlign:"center"}]}>Confirm</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    </Modal>
  )
}

export default Activtytipology

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor:"rgba(0,0,0,0.7)"
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
    HeadingText: {
        // marginBottom: 10,
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
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
    input: {
        width: '75%',
        // paddingLeft: 15,
        justifyContent: 'center',
        height: 40,
        fontSize: 18,
        lineHeight:22,
        fontWeight: 'bold',
      },
})