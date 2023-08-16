import React,{ useState, useEffect } from 'react'
import { StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Switch } from 'react-native-switch';

import Menu from './menu/Topmenu1';
import DeleteEvent from './event/deleteModal';


const AdminOrganizor = ({ navigation, route }) => {
const [event, setEvent] = useState(true);
const [search, setSearch] = useState();
const [showProfdiscription, setShowProfdiscription] = useState(false);
const [activity, setActivity] = useState(false);
const [modalVisible, setModalVisible] = React.useState(false);

const [isEnabled, setIsEnabled] = useState(true);
const toggleSwitch = () => {setIsEnabled(previousState => !previousState);};

useEffect(() => {
    eventHandler()
}, []);
const eventHandler = () => {
    setEvent(true);
    setActivity(false);
    setEvent({ isFocused: true })
};
const activityHandler = () => {
    setActivity(true, { isFocused: true });
    setEvent(false, { isFocused: false });
    setActivity({ isFocused: true })
};

  return (
    <Modal
    animationType="slide"
    transparent={true}
    >
    <View style={styles.centeredView2}>
        <ScrollView style={styles.modalView2}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Ionicons
                        name={'md-arrow-back-sharp'}
                        size={30}
                        color={'white'}
                    />
                </TouchableOpacity>
                <View style={{alignItems:"center"}}>
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
                    <Text style={{color:"white", fontSize:15}}>Disable</Text>
                </View>
                {/* <TouchableOpacity
                    onPress={()=>navigation.navigate("AdminProfile")}
                    style={{alignItems:"center"}}
                >
                    <EvilIcons name='gear' color={"#25B3AF"} size={30} />
                </TouchableOpacity> */}
            </View>
            
            <Image
                source={require('../Assets/pr1.png')}
                style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 50, borderColor: '#19A2C9', borderWidth: 3 }}
            />

            <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                Company name{' '}
            </Text>
            <Text style={styles.disText}>Daniele</Text>
            <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                Name{' '}
            </Text>
            <Text style={styles.disText}>kristian</Text>
            <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                Email address{' '}
            </Text>
            <Text style={styles.disText}>Kris@gmail.com</Text>

            {showProfdiscription ?
                <View>
                    <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                        Phone Number
                    </Text>
                    <Text style={styles.disText}>+01234567891..</Text>
                        <TouchableOpacity
                            onPress={() => setShowProfdiscription(!showProfdiscription)}>
                            <Text style={[styles.btntext, { color: '#56D4FA' , textAlign:"right"}]}>See Less</Text>
                        </TouchableOpacity>
                </View>
                :
                <View>
                    <TouchableOpacity
                        onPress={() => setShowProfdiscription(!showProfdiscription)}>
                        <Text style={[styles.btntext, { color: '#56D4FA', textAlign:"right" }]}>See Details</Text>
                    </TouchableOpacity>
                </View>
            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                    Description{' '}
                </Text>
            </View>
            <TextInput
                value={search}
                placeholderTextColor='#747688'
                onChangeText={value => {
                    setSearch(value);
                }}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                style={[
                    styles.input,
                    { backgroundColor: '#39393D', width: '100%', height: 80 },
                ]}
            />
            {!showProfdiscription ? 
             <TouchableOpacity
                style={[{marginTop:15, width:"55%", height:35, borderRadius:10, alignSelf:"center"}]}
                onPress={() => { navigation.navigate("AdminStats") }}>
                <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#2FC598', '#149AD4']}
                style={styles.gradient1}>
                    <Text style={[styles.textStyle, { fontSize:20, fontFamily:"Poppins", fontWeight:"bold" ,color:"white"}]}>See Statistics</Text>
                </LinearGradient>
            </TouchableOpacity>
            : null
            }
            <View style={styles.middleSec}>
                <View style={styles.tabMain}>
                    <TouchableOpacity onPress={eventHandler} style={[styles.btn1, {
                        borderBottomColor: event.isFocused
                            ? '#22AEB3'
                            : '#28282B',
                        borderBottomWidth: 1,
                    }]}>
                        <Text style={[styles.btn1text, {
                            color: event.isFocused
                                ? '#22AEB3'
                                : 'white',
                            // borderBottomWidth: 1,
                        }]}> Events</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={activityHandler} style={[styles.btn1, {
                        borderBottomColor: activity.isFocused
                            ? '#22AEB3'
                            : '#28282B',
                        borderBottomWidth: 1,
                    }]}>
                        <Text style={[styles.btn1text, {
                            color: activity.isFocused
                                ? '#22AEB3'
                                : 'white',
                            // borderBottomWidth: 1,
                        }]}>Activities</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:20}}>
                {/* ------ */}
                {event ? (
                    <ScrollView>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={()=> navigation.navigate("AdminEditEventDetail")}
                            >
                            <View style={styles.heart}>
                                <View style={[styles.heart, { backgroundColor: '#24BDDF', padding: 0,  right:5, height: 30, width: 50 }]}>
                                    <TouchableOpacity
                                        styles={{ zIndex: 5 }}
                                    // onPress={() => navigation.navigate("AdminEditEventDetail")}
                                    >
                                        <Text style={[styles.disText, {
                                            color: 'white',
                                            //  padding: 10
                                        }]}>
                                            New
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Image
                                source={require('../Assets/image46.png')}
                                style={styles.img}
                            />
                            <View style={styles.heart}>
                                <TouchableOpacity
                                    style={[styles.btn, { alignSelf:"flex-start",zIndex: 5, padding: 0,position:"absolute", top:150,right:5, height: 25, width: 100}]}
                                    >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0, y: 1 }}
                                        colors={['#2936A1', '#32C3D0']}
                                        style={[styles.gradient]}>
                                        {/* <Text style={[styles.btn1text,{color:"white"}]}>Create</Text> */}
                                        <Text style={[styles.disText, {color: 'white',}]}>
                                            Basic Plan
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                <View>
                                    <Text style={styles.headingText}>Friday Night Show - 212</Text>
                                    <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Via Alfonso Paltrinieri</Text>
                                    <Text style={styles.disText}>15 Dec</Text>
                                </View>
                                <View style={{
                                    alignContent:"center"
                                    }}>
                                    <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems:"flex-end"
                                    }}>
                                        <TouchableOpacity
                                            onPress={()=> navigation.navigate("AdminCreateEventDetail", {  EventName: event? "Event":"Activity" })}
                                            style={{alignItems:"center", marginRight:5}}
                                        >
                                            <Feather name={'edit'} color="white" size={20}/>
                                            <Text style={{color:"white"}}>Edit</Text>
                                        </TouchableOpacity>
                                        <Text style={{color:"white", fontSize:40, marginHorizontal:5}}>|</Text>
                                        <TouchableOpacity style={{alignItems:"center"}} onPress={()=> setModalVisible(true)}>
                                            <MaterialCommunityIcons name={'trash-can'} color="white" size={20}/>
                                            <Text style={{color:"white"}}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[styles.disText, {textAlign:"right"}]}>8m</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}
                            onPress={() => navigation.navigate('AdminEditEvent1')}
                        >
                            <View style={styles.heart}>
                                <View style={[styles.heart, { backgroundColor: '#49494D', padding: 0, right:5, height: 40, width: 55 }]}>
                                    <TouchableOpacity
                                        styles={{ zIndex: 5 }}
                                    // onPress={() => navigation.navigate("AdminEditEventDetail")}
                                    >
                                        <Text style={[styles.disText, {
                                            color: 'white',
                                            //  padding: 10
                                        }]}>
                                            Closed
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Image
                                source={require('../Assets/1.png')}
                                style={styles.img}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                <View>
                                    <Text style={styles.headingText}>Saturday Night Party</Text>
                                    <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Modena MO</Text>
                                    <Text style={styles.disText}>25 Mar</Text>
                                </View>
                                <View style={{
                                    alignContent:"center"
                                    }}>
                                    <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems:"flex-end"
                                    }}>
                                        <TouchableOpacity
                                            onPress={()=> navigation.navigate("AdminCreateEventDetail", {  EventName: event? "Event":"Activity" })}
                                            style={{alignItems:"center", marginRight:5}}
                                        >
                                            <Feather name={'edit'} color="white" size={20}/>
                                            <Text style={{color:"white"}}>Edit</Text>
                                        </TouchableOpacity>
                                        <Text style={{color:"white", fontSize:40, marginHorizontal:5}}>|</Text>
                                        <TouchableOpacity style={{alignItems:"center"}}>
                                            <MaterialCommunityIcons name={'trash-can'} color="white" size={20}/>
                                            <Text style={{color:"white"}}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[styles.disText, {textAlign:"right"}]}>15 km</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AdminEditEvent1')}

                            style={[styles.card,{marginBottom:"30%"}]}>
                            <View style={styles.heart}>
                                <TouchableOpacity
                                    styles={{ paddingVertical: 20, zIndex: 5 }}
                                >
                                    <Ionicons name={'heart'} size={30} color={'#EE1F1F'} />
                                </TouchableOpacity>
                            </View>
                            <Image source={require('../Assets/image35.png')} style={styles.img} />
                            <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                <View>
                                    <Text style={styles.headingText}>Red Maple Ranch</Text>
                                    <Text style={styles.disText}>Pringnao MO</Text>
                                    <Text style={styles.disText}>Type : Pub</Text>
                                </View>
                                <View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems:"flex-end"
                                        }}>
                                        <TouchableOpacity
                                            onPress={()=> navigation.navigate("AdminCreateEventDetail", {  EventName: event? "Event":"Activity" })}
                                            style={{alignItems:"center", marginRight:5}}
                                        >
                                            <Feather name={'edit'} color="white" size={20}/>
                                            <Text style={{color:"white"}}>Edit</Text>
                                        </TouchableOpacity>
                                        <Text style={{color:"white", fontSize:40, marginHorizontal:5}}>|</Text>
                                        <TouchableOpacity style={{alignItems:"center"}}>
                                            <MaterialCommunityIcons name={'trash-can'} color="white" size={20}/>
                                            <Text style={{color:"white"}}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[styles.disText, {textAlign:"right"}]}>8m</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                ) : null}
                {/* -------- */}
                {activity ? (
                    <ScrollView>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AdminEditActivityDetail')}
                            style={styles.card}>
                            <View style={styles.heart}>
                                <TouchableOpacity
                                    styles={{ paddingVertical: 20, zIndex: 5 }}
                                // onPress={() => setActivityDetails(false)}
                                >
                                    <Ionicons
                                        name={'heart'}
                                        size={30}
                                        color={'#EE1F1F'} />
                                </TouchableOpacity>
                            </View>
                            <Image
                                source={require('../Assets/2.png')}
                                style={styles.img}
                            />
                            <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }} >
                                <View>
                                    <Text style={styles.headingText}>Paintball</Text>
                                    <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Castelfranco MO</Text>
                                    <Text style={styles.disText}>Type : Sport</Text>
                                </View>
                                <View>
                                <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems:"flex-end"
                                        }}>
                                        <TouchableOpacity
                                            onPress={()=> navigation.navigate("AdminCreateEventDetail", {  EventName: event? "Event":"Activity" })}
                                            style={{alignItems:"center", marginRight:5}}
                                        >
                                            <Feather name={'edit'} color="white" size={20}/>
                                            <Text style={{color:"white"}}>Edit</Text>
                                        </TouchableOpacity>
                                        <Text style={{color:"white", fontSize:40, marginHorizontal:5}}>|</Text>
                                        <TouchableOpacity style={{alignItems:"center"}}>
                                            <MaterialCommunityIcons name={'trash-can'} color="white" size={20}/>
                                            <Text style={{color:"white"}}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.disText}> 4 km</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.card,{marginBottom:"30%"}]}
                            onPress={() => navigation.navigate('AdminEditActivityDetail2')}>
                            <View style={styles.heart}>
                                <TouchableOpacity
                                    styles={{ paddingVertical: 20, zIndex: 5 }}   >
                                    <Ionicons
                                        name={'heart'}
                                        size={30}
                                        color={'#EE1F1F'} />
                                </TouchableOpacity>
                            </View>
                            <Image
                                source={require('../Assets/3.png')}
                                style={[styles.img]}
                            />
                            <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                <View>
                                    <Text style={styles.headingText}>Corso di Pilates</Text>
                                    <Text style={styles.disText}>Modena MO</Text>
                                    <Text style={styles.disText}>Type : Corso</Text>
                                </View>
                                <View>
                                <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems:"flex-end"
                                        }}>
                                        <TouchableOpacity
                                            onPress={()=> navigation.navigate("AdminCreateEventDetail", {  EventName: event? "Event":"Activity" })}
                                            style={{alignItems:"center", marginRight:5}}
                                        >
                                            <Feather name={'edit'} color="white" size={20}/>
                                            <Text style={{color:"white"}}>Edit</Text>
                                        </TouchableOpacity>
                                        <Text style={{color:"white", fontSize:40, marginHorizontal:5}}>|</Text>
                                        <TouchableOpacity style={{alignItems:"center"}}>
                                            <MaterialCommunityIcons name={'trash-can'} color="white" size={20}/>
                                            <Text style={{color:"white"}}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.disText}> 4 km</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                ) : null}
                </View>
            </View>
        </ScrollView>
        {modalVisible ? <DeleteEvent setModalVisible={setModalVisible} />:null }
        <View style={styles.bottemSec}>
            <Menu navigation={navigation} isEvent={ event ? true:false} />
        </View>
    </View>
</Modal>
  )
}

export default AdminOrganizor

const styles = StyleSheet.create({

    bottemSec: {
        // height: '9%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        // position: 'absolute',
        // bottom: -10,
        // left: 0,
        zIndex: 2
      },
    modalView1: {
        margin: 20,
        backgroundColor: '#39393D',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
    },
    activityEventSection1: {
        alignItems: 'center',
        alignSelf: 'center',
        padding: 5,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonClose: {
        // backgroundColor: '#2FC598',
        height: 43,
        borderRadius: 15,
        width: '30%',
        elevation: 2,
        alignSelf: 'center'
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

    // ------activity Section-------------
    mainMenu: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 40,
        marginVertical: 10,
    },
    activityEventSection: {
        alignItems: 'center',
        width: '24%',
        alignSelf: 'center',
        padding: 5,
    },
    actEventtext: {
        color: 'white',
    },
    reviewSec: {
        marginLeft: 16,
        flexDirection: 'row',
        padding: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        alignSelf: 'center',
        width: '100%',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    modalOop: {
        backgroundColor: 'white',
        borderRadius: 35,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '70%',
        height: '55%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    centeredOpp: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        backgroundColor: '#00000090',
    },
    // GRADIENT---------------

    btn: {
        marginTop: 5,
        height: 50,
        width: '60%',
        borderRadius: 15,
        shadowColor: 'black',
        backgroundColor: '#28CCF2',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    btntext: {
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 27,
        // textTransform: 'uppercase',
    },
    gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 15,
    },
    // disText: {
    //     fontWeight: '400',
    //     fontSize: 19,
    //     lineHeight: 27,
    //     color: 'white',
    // },
    disText: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: 'silver',
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        objectFit: 'cover',
        resizeMode: 'cover',
    },
    strightBar: {
        width: 1,
        height: 50,
        backgroundColor: '#D3D3D3'
    },
    //   ----------------------
    centeredView: {
        flex: 1,
        backgroundColor: '#00000090',
        justifyContent: 'center'
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

    // ----------userEventProfile-----------
    modalView2: {
        backgroundColor: '#28282B',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        height: '100%',
    },
    centeredView2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '100%',

    },
    modalHeadingText: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
        color: '#000000',
    },
    middleSec: {
        height: '100%',
    },

    tabMain: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabs: {
        marginTop: 15,
        height: 40,
        width: '50%',
        borderRadius: 15,
        shadowColor: 'black',
        backgroundColor: '#28CCF2',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: '600',
    },
    tabstext: {
        // textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
        color: '#25B3AF',
    }, btn1: {
        marginTop: 15,
        height: 40,
        width: '50%',
        shadowColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#25B3AF',
        borderBottomWidth: 1,
    },
    btn1text: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
        color: '#25B3AF',
    }, card: {
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 4,
        position: 'relative',
        backgroundColor: '#39393D',
        borderRadius: 15,
    },
    heart: {
        height: 40,
        width: 40,
        borderRadius: 15,
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Map------------
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: '#D3D3D3',
        // paddingBottom: 30
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    topSec: {
        backgroundColor: '#28282B',
        alignContent: 'center',
        alignItems: 'center',
    },
    bottomSec: {
        width: '100%',
        height: '45%',
        backgroundColor: '#28282B',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingTop: 30,
        justifyContent: 'center',
    },
    tabMap: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
        width: '40%',
        left: '25%',
        borderRadius: 20,
        backgroundColor: '#C6C4C5'
    },
    tabs: {
        height: 37,
        width: '50%',
        borderRadius: 15,
        shadowColor: 'black',
        backgroundColor: '#28CCF2',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabstext: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
        color: '#25B3AF',
    },

    btntext: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
    },


    headingText: {
        // fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        // textTransform: 'uppercase',
        // paddingTop: 20,
        color: 'white',
    },
    discriptionText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        color: 'white',
    },
    discriptionTextB: {
        // paddingHorizontal: 50,
        paddingVertical: 20,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        // display: 'flex',
        // alignItems: 'center',
        // textAlign: 'center',
        color: 'white',
    },
    btnMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 20,
        width: '90%',
    },
    scipBtn: {
        color: 'white',
        borderRadius: 15,
        backgroundColor: '#D3D3D3',
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontWeight: '700',
        shadowColor: 'black',
    },
    nextBtnText: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
        // textTransform: 'uppercase',

        color: '#000000',
    },

    btn: {
        marginTop: 15,
        height: 50,
        width: '20%',
        borderRadius: 20,
        shadowColor: 'black',
        backgroundColor: '#28CCF2',
        // textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    input: {
        // marginTop: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: 55,
        backgroundColor: '#EFEFEF',
        alignSelf: 'center',
        // borderWidth: 0.3,
        // elevation: 5,
        borderRadius: 15,
        // paddingHorizontal: 19,
    },
    inputText: {
        // marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        color: '#28CCF2',
        fontSiz: 18,

        paddingHorizontal: 59,
    },
    serSec: {
        width: '100%',
        paddingHorizontal: 8,
        marginTop: 15,
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 6,
        borderRadius: 20,
        // backgroundColor: '#EFEFEF',
    },
    innseserch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
        width: '85%',
        borderRadius: 15,

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
