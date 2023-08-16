/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ViewMoreText from 'react-native-view-more-text';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Event1 = ({ navigation }) => {
    const [event, setEvent] = useState(true);
    const [activity, setActivity] = useState(false);
    const [search, setSearch] = useState();
    const [openDiscription, setOpendiscription] = useState(false);
    const [modalShare, setModalShare] = useState(false);
    const [modalContect, setModalContect] = useState(false);
    const [showMap, setShowMap] = useState(true);
    const [showMap1, setShowMap1] = useState(false);
    const [showMap2, setShowMap2] = useState(false);
    const [modalOpps, setModalOopsle] = useState(false);
    const [mapModal, setMapModal] = useState(false);
    const [showProfdiscription, setShowProfdiscription] = useState(false);
    const [location, setLocation] = useState(
        {
          lat: 37.78825,
          lng: -122.4324,
        }
      );
      const [locationName, setLocationName] = useState();
    
    
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
    const map1Handler = () => {
        setShowMap1(false)
        setShowMap2(false)
        setShowMap(true)
        setShowMap({ isFocused: true })
        console.log('im ahere 3',)
    }
    const map2Handler = () => {
        setShowMap(false)
        setShowMap2(false,)
        setShowMap1(true)
        setShowMap1({ isFocused: true })
        console.log('im ahere 2',)
    }
    const map3Handler = () => {
        setShowMap(false)
        setShowMap1(false)
        setShowMap2(true)
        setShowMap2({ isFocused: true })
        console.log("me here")
    }
    return (
        <ScrollView
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#28282B',
                position: 'absolute',
                top: 0,
                alignContent: 'center',
                zIndex: 33,
            }}>
            <View style={styles.backBtn}>
                <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => navigation.goBack()}>
                    <Ionicons
                        name={'md-arrow-back-sharp'}
                        size={30}
                        color={'white'} />
                </TouchableOpacity>
            </View>

            <Image
                source={require('../../../Assets/1.png')}
                style={[styles.img, { zIndex: 0 }]}
            />

            <View style={styles.mainMenu}>
                <TouchableOpacity
                    style={[styles.activityEventSection]}
                    onPress={() => setModalOopsle(!modalOpps)} >
                    {/* <Image source={require('../../../Assets/heart.png')} /> */}
                    <AntDesign name='heart' size={25} color={"red"} />
                    <Text style={styles.actEventtext}>Favourites</Text>
                </TouchableOpacity>
                <View style={styles.strightBar}></View>
                <TouchableOpacity
                    style={styles.activityEventSection}
                    onPress={() => setModalShare(!modalShare)}>
                    {/* <Image source={require('../../../Assets/share.png')} /> */}
                    <Feather name='share-2' size={25} color={"white"} />
                    <Text style={styles.actEventtext}>Share</Text>
                </TouchableOpacity>
                <View style={styles.strightBar}></View>
                <TouchableOpacity
                    style={styles.activityEventSection}
                    onPress={() => setMapModal(!mapModal)}>
                    {/* <Image source={require('../../../Assets/location.png')} /> */}
                    <Ionicons name='location-outline' size={25} color={"white"} />
                    <Text style={styles.actEventtext}>Map</Text>
                </TouchableOpacity>
                <View style={styles.strightBar}></View>
                <TouchableOpacity
                    style={styles.activityEventSection}
                    onPress={() => setModalContect(!modalContect)}>
                    {/* <Image
                        source={require('../../../Assets/call.png')}
                    style={[styles.img, { zIndex: 0 }]}
                    /> */}
                    <Ionicons name={'call'} size={25} color={'white'} />
                    <Text style={styles.actEventtext}>Contact</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 20, width: '90%' }}>
                <Text style={styles.headingText}>Saturday Night Party</Text>

                <Text style={styles.disText} numberOfLines={3}>
                    212 locale simbolo delle giornate e serate mondane a Modena, dove
                    la clientela si sente sempre a proprio agio. 212 di ispirazione
                    minimalista, acciaio e legno, arredamento contemporaneo
                    essenziale, giochi
                </Text>
                <TouchableOpacity
                    style={{}}
                    onPress={() => setOpendiscription(!openDiscription)}
                ><Text style={[styles.headingText, { width: 110, color: '#56D4FA', padding: 0, borderBottomColor: '#56D4FA', borderBottomWidth: 1, }]}>{'Mostra tutto'}</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', paddingVertical: 10, }}>
                    <Text style={styles.headingText}>Luogo: </Text>
                    <Text style={[styles.disText, { width: '80%', paddingHorizontal:10 }]}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Via Alfonso Paltrinieri, 1, 41122 Modena MO</Text>
                </View>
                <Text style={styles.headingText}> Date e Orari</Text>
                <Text style={styles.disText}> 25 Mar 22:30 - 03:00 </Text>
                <Text style={[styles.headingText, { paddingVertical: 10 }]}>
                    Organizer
                </Text>
                <View style={styles.reviewSec}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 7,
                        }}>
                        {/* <Image
                            source={require('../../../Assets/pr1.png')}
                            style={{ width: 50, height: 50,  marginRight: 7,alignSelf: 'center', borderRadius: 50, borderColor: '#19A2C9', borderWidth: 3 }}
                        /> */}
                        <Image
                            source={require('../../../Assets/pr1.png')}
                            style={{ width: 50, height: 50, marginRight: 7 }}
                        />
                        <Text style={styles.headingText}>David deep</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Organizor")}>
                        <Text style={{ color: '#56D4FA', marginRight:10 }}> See Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* ---------------Discription Popup-------------------- */}
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
            {/* Map Modal open */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={mapModal}
                onRequestClose={() => { setMapModal(!mapModal) }}>
                <View style={styles.topSec}>
                    <View style={[styles.serSec]}>
                        <TouchableOpacity
                            styles={{ width: '15%' }}
                            onPress={() => setMapModal(!mapModal)}>
                            <Ionicons
                                name={'md-arrow-back-sharp'}
                                size={30}
                                color={'white'}
                                style={{
                                    backgroundColor: '#28282BB2',
                                    borderRadius: 5,
                                    marginRight: 10,
                                }}
                            />
                        </TouchableOpacity>
                        <View style={styles.innseserch}>
                            {/* <Image
                                source={require('../../../Assets/search.png')}
                                style={{ marginRight: 10 }}
                            /> */}
                            <Feather name={'search'} size={25} color={'#2B2B2B'} style={{ marginRight: 10 }} />
                            <TextInput
                                placeholder={"Discoteca\nModena"}
                                value={search}
                                onChangeText={value => {
                                    setSearch(value);
                                }}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                                style={styles.input}
                            />
                            {/* <Image
                                source={require('../../../Assets/menu.png')}
                            /> */}
                            <Ionicons name='menu' size={25} />
                        </View>
                    </View>

                    <View
                        style={{
                            height: '100%',
                            width: '100%',
                        }}>
                        <View style={[styles.container, {
                            height: showMap1.isFocused
                                ? '57%'
                                : '100%',
                        },
                        {
                            height: showMap.isFocused
                                ? '57%'
                                : '100%',
                        },
                        {
                            height: showMap2.isFocused
                                ? '57%'
                                : '100%',
                        }]}>
                            <MapView
                                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                style={styles.map}
                                region={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.0121,
                                }}
                            >
                                <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map1Handler()}
                                    title={"Saturday Night Party"}
                                    description={"Riding school"} />
                                <Marker coordinate={{ latitude: 37.88825, longitude: -122.5324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map2Handler()}
                                    title={" Red Maple Ranch"}
                                    description={"Maneggio"} >

                                </Marker>
                                <Marker coordinate={{ latitude: 37.68825, longitude: -122.4324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map3Handler()}
                                    title={" Corso di Pilates."}
                                    description={"Corso"} />

                                <Marker coordinate={{ latitude: 37.68825, longitude: -122.4324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map3Handler()}
                                    title={"212 Moderen Ducento.."}
                                    description={"Riding School "} />

                                <Marker coordinate={{ latitude: 37.61825, longitude: -122.4324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map3Handler()}
                                    title={"Corso di Pilates"}
                                    description={"Corso"} />
                                <Marker coordinate={{ latitude: 37.74825, longitude: -122.1324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map3Handler()}
                                    title={"Corso di Chitarra"}
                                    description={"Corso"} />
                                <Marker coordinate={{ latitude: 37.95825, longitude: -122.1324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map3Handler()}
                                    title={"Friday Night Show"}
                                    description={"pub"} />
                                <Marker coordinate={{ latitude: 37.96825, longitude: -122.5324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map3Handler()}
                                    title={"Castelfranco MO"}
                                    description={"Sport"} />
                            </MapView>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                // onPress={() => navigation.navigate('Login')}
                                style={styles.btn}>
                                <Text style={[styles.nextBtnText]}>Events</Text>
                                <Ionicons
                                    name={'md-arrow-up-circle'}
                                    size={30}
                                    color={'#28282B'}
                                    style={{ paddingLeft: 10 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                // onPress={() => navigation.navigate('Login')}
                                style={styles.btn}>
                                <Text style={[styles.nextBtnText]}>Activities</Text>
                                <Ionicons
                                    name={'md-arrow-up-circle'}
                                    size={30}
                                    color={'#28282B'}
                                    style={{ paddingLeft: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.tabMap}>
                            <TouchableOpacity

                                onPress={eventHandler} style={[styles.tabs, {
                                    backgroundColor: event.isFocused
                                        ? '#28CCF2'
                                        : '#C6C4C5',
                                    // borderBottomWidth: 1,
                                    // isFocused
                                }]}>
                                <Text style={[styles.btntext,]}>Events</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={activityHandler} style={[styles.tabs, {
                                backgroundColor: activity.isFocused
                                    ? '#28CCF2'
                                    : '#C6C4C5',
                            }]}>
                                <Text style={[styles.btntext,]}>Activities</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {showMap
                        ? <View style={[styles.bottomSec]}>
                            <View
                                style={[
                                    {
                                        paddingHorizontal: 30,
                                        width: '100%',
                                    },
                                ]}>
                                <Text style={styles.headingText}>
                                    Saturday Night Party </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        paddingTop: 15,
                                    }}>
                                    <View style={{ width: '70%', paddingRight: 12 }}>
                                        <Text style={styles.discriptionText}><SimpleLineIcons name={'location-pin'} size={13} color={'white'} />Via Alfonso Paltrinieri, 1, 41122 Modena MO</Text>
                                        <View
                                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={styles.discriptionText}>25 Mar  </Text>
                                            <Text style={styles.discriptionText}>19:00 to 24:00</Text>
                                        </View>
                                        <Text style={styles.discriptionTextB}>
                                            Serata divertente e coinvolgente, con ospiti e show.
                                            Cena spettacolo animata.
                                            Bar premium, con gli artisti internazionali dello Show Dinner.
                                            Ingresso .....
                                        </Text>

                                        <TouchableOpacity
                                            onPress={() => setShowMap(!showMap)}
                                            style={[styles.btn, { width: '70%' }]}>
                                            <LinearGradient
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 0, y: 1 }}
                                            colors={['#2FC598', '#149AD4']}
                                            style={styles.gradient1}>
                                                <Text style={[styles.nextBtnText]}>START</Text>
                                                <Ionicons
                                                    name={'md-arrow-up-circle'}
                                                    size={30}
                                                    color={'#28282B'}
                                                    style={{ paddingLeft: 10 }}
                                                />
                                            </LinearGradient>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ width: '30%' }}>
                                        <Image
                                            source={require('../../../Assets/1.png')}
                                            style={{
                                                width: 120,
                                                height: '80%',
                                                borderRadius: 20,
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View> : null
                    }
                    {showMap1
                        ? <View style={[styles.bottomSec]}>
                            <View
                                style={[
                                    {
                                        paddingHorizontal: 30,
                                        width: '100%',
                                    },
                                ]}>
                                <Text style={styles.headingText}>
                                    Red Maple Ranch
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        paddingTop: 15,
                                    }}>
                                    <View style={{ width: '70%', paddingRight: 12 }}>
                                        <Text style={styles.discriptionText}><SimpleLineIcons name={'location-pin'} size={13} color={'white'} />Pringnao MO</Text>
                                        <View
                                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={styles.discriptionText}>10 Dec to </Text>
                                            <Text style={styles.discriptionText}>30 Mar</Text>
                                        </View>
                                        <View
                                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={styles.discriptionText}>Type :  </Text>
                                            <Text style={styles.discriptionText}>Maneggio</Text>
                                        </View>
                                        <Text style={styles.discriptionTextB}>
                                            Red Maple Ranch delle giornate e serate mondane, dove puoi
                                            beccare fagia...
                                        </Text>

                                        <TouchableOpacity
                                            onPress={() => setShowMap1(!showMap1)}

                                            style={[styles.btn, { width: '70%' }]}>
                                            <LinearGradient
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 0, y: 1 }}
                                            colors={['#2FC598', '#149AD4']}
                                            style={styles.gradient1}>
                                                <Text style={[styles.nextBtnText]}>START</Text>
                                                <Ionicons
                                                    name={'md-arrow-up-circle'}
                                                    size={30}
                                                    color={'#28282B'}
                                                    style={{ paddingLeft: 10 }}
                                                />
                                            </LinearGradient>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ width: '30%' }}>
                                        <Image
                                            source={require('../../../Assets/image36.png')}
                                            style={{
                                                width: 120,
                                                height: '80%',
                                                borderRadius: 20,
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View> : null
                    }
                    {showMap2
                        ? <View style={[styles.bottomSec]}>
                            <View
                                style={[
                                    {
                                        paddingHorizontal: 30,
                                        width: '100%',
                                    },
                                ]}>
                                <Text style={styles.headingText}>
                                    Corso di Pilates

                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        paddingTop: 15,
                                    }}>
                                    <View style={{ width: '70%', paddingRight: 12 }}>
                                        <Text style={styles.discriptionText}><SimpleLineIcons name={'location-pin'} size={13} color={'white'} />Modena MO</Text>
                                        <View
                                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={styles.discriptionText}>From :</Text>
                                            <Text style={styles.discriptionText}>12 D2c - 18 Mar</Text>
                                        </View>
                                        <View
                                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={styles.discriptionText}> </Text>
                                            <Text style={styles.discriptionText}>20:00 to 24:00</Text>
                                        </View>
                                        <View
                                            style={{ flexDirection: 'row', }}>
                                            <Text style={styles.discriptionText}>Type :</Text>
                                            <Text style={styles.discriptionText}>Corso</Text>
                                        </View>
                                        <Text style={styles.discriptionTextB}>
                                            Corso di Pilates delle giornate e serate mondane, dove puoi
                                            beccare fagia...
                                        </Text>

                                        <TouchableOpacity
                                            onPress={() => setShowMap2(!showMap2)}

                                            style={[styles.btn, { width: '70%' }]}>
                                            <Text style={[styles.nextBtnText]}>START</Text>
                                            <Ionicons
                                                name={'md-arrow-up-circle'}
                                                size={30}
                                                color={'#28282B'}
                                                style={{ paddingLeft: 10 }}
                                            />
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ width: '30%' }}>
                                        <Image
                                            source={require('../../../Assets/3.png')}
                                            style={{
                                                width: 120,
                                                height: '80%',
                                                borderRadius: 20,
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View> : null
                    }
                </View>
            </Modal>
            {/* ------Shara model------- */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalShare}
                onRequestClose={() => {
                    //   Alert.alert('Modal has been closed.');
                    setModalShare(!modalShare);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView1}>
                        <Text style={styles.modalHeadingText1}>Share By</Text>

                        <View style={[styles.mainMenu, { padding: 7 }]}>
                            <TouchableOpacity
                                style={[
                                    styles.activityEventSection1,
                                    // {borderLeftWidth: 0},
                                ]}
                            // onPress={() => navigation.navigate('Profilesidebar')}
                            >
                                {/* <Entypo name={'heart-outlined'} size={30} color={'white'} /> */}
                                <Image
                                    source={require('../../../Assets/whatsapp.png')}
                                    style={[
                                        // styles.img,
                                        { height: 40, width: 40 },
                                    ]}
                                />
                                <Text style={styles.actEventtext}>Whatsapp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.activityEventSection1]}>
                                <AntDesign name={'mail'} size={30} color={'#25B3AF'} />
                                <Text style={styles.actEventtext}> E-mail</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[styles.buttonClose,]}
                        onPress={() => setModalShare(!modalShare)}>
                        <LinearGradient
                            start={{ x: 0, y: 0.2 }}
                            end={{ x: 0, y: 0.9 }}
                            colors={['#33CC8F', '#28CCF2']}
                            style={styles.gradient}>
                            <Text style={[styles.textStyle]}>Close</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* ------Contact model------- */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalContect}
                onRequestClose={() => {
                    setModalContect(!modalContect);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView1}>
                        <Text style={styles.modalHeadingText1}>Contact by</Text>

                        <View style={[styles.mainMenu, { padding: 7 }]}>
                            <TouchableOpacity
                                style={[styles.activityEventSection1]}
                            // onPress={() => navigation.navigate('Profilesidebar')}
                            >
                                <Image
                                    source={require('../../../Assets/whatsapp.png')}
                                    style={[styles.img, { height: 40, width: 40 }]}
                                />
                                <Text style={styles.actEventtext}>Whatsapp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.activityEventSection1]}>
                                <AntDesign name={'mail'} size={30} color={'#25B3AF'} />
                                <Text style={styles.actEventtext}> E-mail</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.activityEventSection1]}>
                                <AntDesign name={'phone'} size={30} color={'#25B3AF'} />
                                <Text style={styles.actEventtext}> Phone</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.activityEventSection1]}>
                                <MaterialCommunityIcons
                                    name={'web'}
                                    size={30}
                                    color={'#25B3AF'}
                                />
                                <Text style={styles.actEventtext}> Website</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[styles.buttonClose,]}
                        onPress={() => setModalContect(!modalContect)}>
                        <LinearGradient
                            start={{ x: 0, y: 0.2 }}
                            end={{ x: 0, y: 0.9 }}
                            colors={['#33CC8F', '#28CCF2']}
                            style={styles.gradient}>
                            <Text style={[styles.textStyle]}>Close</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </Modal>
        </ScrollView>
    );
};

export default Event1;

const styles = StyleSheet.create({

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
        marginLeft: 10,
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
        height: '84%',
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
        justifyContent:"center",
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
      },
})

