import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
    Modal,
    ScrollView,
    TextInput
  } from 'react-native';
  
  import React, { useState, useContext, useEffect } from 'react';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import { Divider } from 'react-native-paper';
  import LinearGradient from 'react-native-linear-gradient';
  
  const Filters = ( props ) => {
    const [eventCategories,setEventCategories] = useState(["Outdoor", "Family", "Sports", "Outdoor","Family", "Sports", "Outdoor", "Family", "Sports", "Family", "Sports"])
    const [activityCategories,setActivityCategories] = useState(["Sports", "Outdoor", "Family", "Sports", "Family", "Sports", "Outdoor", "Family", "Outdoor",])
    const [newEventCategory, setNewEventCategory] = useState("");
    const [newActivityCategory, setNewActivityCategory] = useState("");
    const [pressed,setPressed] = useState(false);
    const [pressed1,setPressed1] = useState(false);

    return (
    <Modal   
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
            props.setModalVisible(false);
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={[styles.HeadingText, ]}>MANAGE FILTERS</Text>
                <TouchableOpacity
                onPress={() => props.setModalVisible(false)}
                style={{ position: 'absolute', top: 20, right: 20, elevation: 2,padding: 5, backgroundColor:"rgba(179,179,180,255)",  }}>
                    <MaterialCommunityIcons name={'close-thick'} size={18}/>
                </TouchableOpacity>
                <ScrollView>
                <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingTop:20}}>
                    <Text style={styles.HeadingText}>Event categories Filter</Text>
                    <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}
                     onPress={()=>setPressed(!pressed)}
                     >
                        <Text style={[styles.HeadingText, {marginRight:5}]} >Add</Text>
                        <Ionicons name='md-add-circle' size={24} color={"black"} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{flexDirection:"row", flexWrap:"wrap",}}>
                    {pressed ? 
                        <View style={{width:"45%",flexDirection:"row",alignItems:"center", backgroundColor:"rgba(255, 255, 255, 0.5)",borderRadius:10, marginVertical: 5 }}>
                            <TouchableOpacity style={{marginHorizontal:10}} onPress={()=> {
                                if( newEventCategory !== ""){
                                    setEventCategories(state => [newEventCategory.trim(), ...state])
                                    setPressed(false)
                                    setNewEventCategory("")
                                }
                                } }>
                                <Ionicons name='md-add-circle' size={24} color={"black"} />
                                {/* <Text style={[styles.HeadingText, {fontSize:14, lineHeight:17 }]} >Add</Text> */}
                            </TouchableOpacity>
                            <TextInput
                            placeholder="Event"
                            value={newEventCategory}
                            placeholderTextColor='#747688'

                            onChangeText={value => {
                                setNewEventCategory(value);
                            }}
                            underlineColorAndroid="transparent"
                            autoCapitalize="words"
                            style={styles.input}
                        />
                        </View>
                    :null
                    }
                    { eventCategories.map((val,ind)=> 
                        <TouchableOpacity key={ind} style={{flexDirection:"row", alignItems:"center", width:"45%", marginVertical:2,}}
                        onPress={()=> setEventCategories(eventCategories.filter((val,index)=> index!==ind))}
                        >
                            <MaterialCommunityIcons name='trash-can' size={28} color={"black"} />
                            <Text style={[styles.HeadingText,{ marginLeft:5 ,fontSize:18}]} >{val}</Text>
                        </TouchableOpacity>
                    )}
                    </View>
                </ScrollView>
                <Divider horizontalInset style={{ marginVertical:20, backgroundColor:"white"}} />
                <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                    <Text style={styles.HeadingText}>Activity categories Filter</Text>
                    <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}
                     onPress={()=>setPressed1(!pressed1)}
                    >
                        <Text style={[styles.HeadingText, {marginRight:5}]} >Add</Text>
                        <Ionicons name='md-add-circle' size={24} color={"black"} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{flexDirection:"row", flexWrap:"wrap",}}>
                    {pressed1 ? 
                        <View style={{width:"45%",flexDirection:"row",alignItems:"center", backgroundColor:"rgba(255, 255, 255, 0.5)",borderRadius:10, marginVertical: 5 }}>
                            <TouchableOpacity style={{marginHorizontal:10}} onPress={()=> {
                                if( newActivityCategory !== ""){
                                    setActivityCategories(state => [newActivityCategory.trim(), ...state])
                                    setPressed1(false)
                                    setNewActivityCategory("")
                                }
                                } }>
                                <Ionicons name='md-add-circle' size={24} color={"black"} />
                                {/* <Text style={[styles.HeadingText, {fontSize:14, lineHeight:17 }]} >Add</Text> */}
                            </TouchableOpacity>
                            <TextInput
                            placeholder="Activity"
                            value={newActivityCategory}
                            placeholderTextColor='#747688'

                            onChangeText={value => {
                                setNewActivityCategory(value);
                            }}
                            underlineColorAndroid="transparent"
                            autoCapitalize="words"
                            style={styles.input}
                        />
                        </View>
                    :null
                    }
                        { activityCategories.map((val,ind)=> 
                        <TouchableOpacity key={ind} style={{flexDirection:"row", alignItems:"center", width:"45%", marginVertical:2,}}
                        onPress={()=> setActivityCategories(activityCategories.filter((val,index)=> index!==ind))}
                        >
                            <MaterialCommunityIcons name='trash-can' size={28} color={"black"} />
                            <Text style={[styles.HeadingText, ,{marginLeft:5, fontSize:18}]} >{val}</Text>
                        </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={[{marginTop:20, paddingLeft:17, width:"65%", height:50, borderRadius:10, alignSelf:"center"}]}
                    onPress={() => { props.setModalVisible(false); }}>
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
    );
  };
  
  export default Filters;
  
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
  });
  