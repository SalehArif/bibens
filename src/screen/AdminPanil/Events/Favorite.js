/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../../component/menu/Topmenu2';


const Favorite = ({ navigation }) => {

    const [event, setEvent] = useState(false);
    const [activity, setActivity] = useState(true);
    const [activityDetails, setActivityDetails] = useState(false);
    const [favCheq, setFavCheq] = useState(true);
    useEffect(() => {
        activityHandler
    }, []);
    const eventHandler = () => {
        setEvent(true,);
        setActivity(false);
        setEvent({ isFocused: true })
        // setActivity({isFocused: false})
    };

    const activityHandler = () => {
        setActivity(true, { isFocused: true });
        setEvent(false, { isFocused: false });
        // setEvent({isFocused: false})
        setActivity({ isFocused: true })
    };

    const activityDetailsHandler = () => {
        setEvent(false);
        // setActivityDetails(true);
    };
    return (
        <View style={styles.main}>

            <Text style={styles.topHeading}>
                Favorites
            </Text>
            <View style={styles.middleSec}>
                <View style={styles.tabMain}>
                    <TouchableOpacity isFocused
                        active
                        onPress={eventHandler} style={[styles.btn1, {
                            borderBottomColor: event.isFocused
                                ? '#22AEB3'
                                : '#28282B',
                            borderBottomWidth: 1,
                            // isFocused
                        }]}>
                        <Text style={[styles.btn1text, {
                            color: event.isFocused
                                ? '#22AEB3'
                                : 'white',

                        }]}>Events</Text>
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

                        }]}>Activities</Text>
                    </TouchableOpacity>
                </View>
                {/* ----Events-- */}
                {event ? (
                    <ScrollView>
                        <TouchableOpacity
                            // onPress={activityDetailsHandler}
                            style={styles.card}>
                            <View style={styles.heart}>
                                {favCheq ? <TouchableOpacity
                                    styles={{ paddingVertical: 20, zIndex: 5 }}
                                    onPress={() => setFavCheq(!favCheq)}>
                                    <Ionicons
                                        name={'heart'}
                                        size={30}
                                        color={'#EE1F1F'} />
                                </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        styles={{ paddingVertical: 20, zIndex: 5 }}
                                        onPress={() => setFavCheq(!favCheq)}>
                                        <Ionicons
                                            name={'heart-outline'}
                                            size={30}
                                            color={'#D7D7D7'} />
                                    </TouchableOpacity>
                                }
                            </View>
                            <Image
                                source={require('../../../Assets/image46.png')}
                                style={styles.img}
                            />
                            <View style={{ padding: 15 }}>
                                <Text style={styles.headingText}>Friday Night Show - 212</Text>
                                <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Modena MO</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Text style={styles.disText}>15 Dec</Text>
                                    <Text style={styles.disText}>8m</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.heart}>
                                {favCheq ?
                                    <TouchableOpacity
                                        styles={{ paddingVertical: 20, zIndex: 5 }}
                                        onPress={() => setFavCheq(!favCheq)}>
                                        <Ionicons
                                            name={'heart'}
                                            size={30}
                                            color={'#EE1F1F'} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        styles={{ paddingVertical: 20, zIndex: 5 }}
                                        onPress={() => setFavCheq(!favCheq)}>
                                        <Ionicons
                                            name={'heart-outline'}
                                            size={30}
                                            color={'#D7D7D7'} />
                                    </TouchableOpacity>
                                }
                            </View>
                            <Image
                                source={require('../../../Assets/image36.png')}
                                style={styles.img}
                            />
                            <View style={{ padding: 15 }}>
                                <Text style={styles.headingText}>
                                    Sagra dell'uva e del lambrusco grasparossa di Castelvetro
                                </Text>
                                <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Castelvetro MO</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Text style={styles.disText}>16 Sept and 3 more...</Text>
                                    <Text style={styles.disText}>15 km</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                ) : null}
                {/* ----Activity---- */}
                {activity ? (
                    <ScrollView>
                        <TouchableOpacity
                            // onPress={activityDetailsHandler}
                            style={styles.card}>
                            <View style={styles.heart}>
                                {favCheq ? <TouchableOpacity
                                    styles={{ paddingVertical: 20, zIndex: 5 }}
                                    onPress={() => setFavCheq(!favCheq)}>
                                    <Ionicons
                                        name={'heart'}
                                        size={30}
                                        color={'#EE1F1F'} />
                                </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        styles={{ paddingVertical: 20, zIndex: 5 }}
                                        onPress={() => setFavCheq(!favCheq)}>
                                        <Ionicons
                                            name={'heart-outline'}
                                            size={30}
                                            color={'#D7D7D7'} />
                                    </TouchableOpacity>
                                }
                            </View>
                            <Image
                                source={require('../../../Assets/image35.png')}
                                style={styles.img}
                            />
                            <View style={{ padding: 15 }}>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Text style={styles.headingText}>Red Maple Ranch</Text>
                                    <Text style={styles.disText}>4.9 <FontAwesome5 name={"star"} size={15} color={'#FFCE31'} /></Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Text style={styles.disText}>Pringnao MO</Text>
                                    <Text style={styles.disText}>10 Dec to 30 Mar</Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Text style={styles.disText}>Type : Pub</Text>
                                    <Text style={styles.disText}>8m</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <View style={styles.heart}>
                                {favCheq ? <TouchableOpacity
                                    styles={{ paddingVertical: 20, zIndex: 5 }}
                                    onPress={() => setFavCheq(!favCheq)}>
                                    <Ionicons
                                        name={'heart'}
                                        size={30}
                                        color={'#EE1F1F'} />
                                </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        styles={{ paddingVertical: 20, zIndex: 5 }}
                                        onPress={() => setFavCheq(!favCheq)}>
                                        <Ionicons
                                            name={'heart-outline'}
                                            size={30}
                                            color={'#D7D7D7'} />
                                    </TouchableOpacity>
                                }
                            </View>
                            <Image
                                source={require('../../../Assets/image8.png')}
                                style={[styles.img]}
                            />
                            <View style={{ padding: 15 }}>
                                <Text style={styles.headingText}>Night Show - 212</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Text style={styles.disText}>MO</Text>
                                    <Text style={styles.disText}>10 Dec to 30 Mar</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Text style={styles.disText}>Type : Maneggio</Text>
                                    <Text style={styles.disText}>8m</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                ) : null}
            </View>
            {/* --------Botten Menu-------- */}
            <View style={styles.bottemSec}>
                <Menu navigation={navigation} />
            </View>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#28282B',
        height: '100%',
    },

    topHeading: {
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 45,
        color: '#FFFFFF',
        alignSelf: 'center',
        paddingVertical: 15,
    },
    middleSec: {
        height: '80%',
    },
    bottemSec: {
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
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
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
        color: '#25B3AF',
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
    heart: {
        height: 40,
        width: 40,
        borderRadius: 15,
        // backgroundColor: '#28282B9C',
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn1: {
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
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
        color: '#25B3AF',
    },
    headingText: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
        color: 'white',
    },
    disText: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: 'silver',
    },
    card: {
        padding: 10,
        margin: 15,
        position: 'relative',
        backgroundColor: '#39393D',
        borderRadius: 15,
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        objectFit: 'cover',
        resizeMode: 'cover',
    },
    inputMain: {
        width: '80%',
        flexDirection: 'row',
        //  borderRightWidth:2,
        //  borderRightColor:'red',
        alignItems: 'center',

    },
    input: {
        width: '100%',
        justifyContent: 'center',
        height: 55,

    },
    inputText: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        color: '#28CCF2',
        fontSiz: 18,
        paddingHorizontal: 59,
    },

    //   ---------------Model
    centeredView: {
        flex: 1,
        backgroundColor: '#00000090',
    },
    modalView: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
        height: '95%',
    },
    centeredView1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '95%',
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
    modalView2: {
        backgroundColor: '#28282B',
        padding: 35,
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
    },
    modalHeadingText1: {
        fontWeight: '700',
        fontSize: 25,
        lineHeight: 38,
        color: '#FFFFFF',
    },
    activityEventSection1: {
        alignItems: 'center',
        alignSelf: 'center',
        padding: 5,
    },
    modalHeadingText: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
        color: '#000000',
    },
    closeBox: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#72727233',
        borderRadius: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonClose: {
        backgroundColor: '#2FC598',
        borderRadius: 15,
        padding: 15,
        elevation: 2,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'center'
    },
    checkboxSect: {
        justifyContent: 'center',
        width: '50%',
    },
    checkbox: {
        alignSelf: 'center',
        color: 'white',
        backgroundColor: 'white',
    },
    checkboxText: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
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
        // borderLeftWidth: 3,
        alignItems: 'center',
        // borderLeftColor: 'white',
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
        // margin: 20,
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
        // textAlign: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
    },
    btntext: {
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 27,
        textTransform: 'uppercase',
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
    bar: {
        width: 264,
        height: 14,
        backgroundColor: '#000000',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        elevation: 3,
        // position:'relative'
    },
    inerCircle: {
        borderRadius: 50,
        width: 20,
        height: 20,
        backgroundColor: '#FFFFF',
        borderColor: 'black',
        borderWidth: 1,
        zIndex: 50,
        position: 'absolute',
        left: 90,
        elevation: 5,
    },
    strightBar: {
        width: 1,
        height: 50,
        backgroundColor: '#D3D3D3'
        // border: 1px solid #D3D3D3;
        // transform: rotate(-90deg);
    }
})



