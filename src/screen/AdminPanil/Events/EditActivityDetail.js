/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';

import DeleteEvent from '../../../component/event/deleteModal';

const EditActivityDetail = ({ navigation }) => {
    const [event, setEvent] = useState(true);
    const [activity, setActivity] = useState(false);
    const [modalUsetProfile, setModalUsetProfile] = useState(false);
    const [search, setSearch] = useState();
    const [openDiscription, setOpendiscription] = useState(false);
    const [modalShare, setModalShare] = useState(false);
    const [modalContect, setModalContect] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const [showMap1, setShowMap1] = useState(false);
    const [showMap2, setShowMap2] = useState(true);
    const [modalOpps, setModalOopsle] = useState(false);
    const [mapModal, setMapModal] = useState(false);
    const [showProfdiscription, setShowProfdiscription] = useState(false);
    const [location, setLocation] = useState(
        {
            lat: 37.95825,
            lng: -122.5324,
        }
    );
    const [locationName, setLocationName] = useState();
    const [modalVisible, setModalVisible] = React.useState(false);


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
    }

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
                        size={25}
                        color={'white'} />
                </TouchableOpacity>
            </View>

            <Image
                source={require('../../../Assets/2.png')}
                style={[styles.img, { zIndex: 0 }]}
            />

            <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems:"flex-end",
                        }}>
                <TouchableOpacity
                    onPress={()=> navigation.navigate("AdminCreateEventDetail", {  EventName: event? "Event":"Activity" })}
                    style={{marginHorizontal:5, alignItems:"center"}}
                >
                    <Feather name={'edit'} color="white" size={25}/>
                    <Text style={{color:"white"}}>Edit</Text>
                </TouchableOpacity>
                <Text style={{color:"white", fontSize:40}}>|</Text>
                <TouchableOpacity 
                style={{marginHorizontal:5}}
                onPress={()=> setModalVisible(true)}
                >
                    <MaterialCommunityIcons name={'trash-can'} color="white" size={25}/>
                    <Text style={{color:"white"}}>Delete</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 20, width: '90%' }}>
                <Text style={styles.headingText}>Paintball</Text>

                <Text style={styles.disText} numberOfLines={2}>
                    Il Paintball vi mette a disposizione tutte le attrezzature per provare
                    l’emozionante sport del Paintball. Vieni a sfidare i tuoi
                    amici nel nostro campo scenario. Tra fortini, torrette e
                </Text>
                <TouchableOpacity
                    style={{}}
                    onPress={() => setOpendiscription(!openDiscription)}
                ><Text style={[styles.headingText, { width: 75, color: '#56D4FA', padding: 0, borderBottomColor: '#56D4FA', borderBottomWidth: 1, }]}>{'See All'}</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', paddingVertical: 10, }}>
                    <Text style={styles.headingText}>Luogo:</Text>
                    <Text style={[styles.disText,{marginLeft:10}]}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Via Prati, 5, 41013 Castelfranco Emilia MO</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    // backgroundColor:'red',width:'100%'
                }}>
                    <Text style={styles.headingText}>Data di inizio attività:</Text>
                    <Text style={[styles.disText,]}>18 Mar 2022</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, }}>
                    <Text style={styles.headingText}>Data di fine attività:</Text>
                    <Text style={[styles.disText,]}>25 Nov 2022</Text>
                </View>


                <Text style={styles.headingText}> Basato su 34 Recensioni:</Text>
                <Text style={styles.disText}>
                    {`Domenica	09:30 - 18
Lunedì	18:30 - 20
Martedì
Chiuso
Mercoledì	18:30 - 20
Giovedì	Chiuso
Venerdì	18:30 - 20
Sabato	Chiuso`}
                </Text>

                <Text style={[styles.headingText, { paddingVertical: 10 }]}>
                    {' '}
                    Recensioni
                </Text>
                <View style={styles.reviewSec}>
                    <View>
                        <View style={{flexDirection:"row", alignItems:"center"}} >
                            <Text style={[styles.headingText,{marginRight:5}]}>4.5/5</Text>
                            <FontAwesome name='star' size={18} color={"#FFCE31"} />
                        </View>
                        <Text style={styles.disText}>Basato su 34 Recensioni</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Review')}>
                        <Text style={{ color: '#56D4FA',marginRight:10 }}> Apri</Text>
                    </TouchableOpacity>
                </View>

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
                            style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 50, borderColor: '#19A2C9', borderWidth: 3 }}
                        /> */}
                        <Image
                            source={require('../../../Assets/pr1.png')}
                            style={{ width: 50, height: 50, marginRight: 7 }}
                        />
                        <Text style={styles.headingText}>David deep</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("AdminOrganizor")}
                    >
                        <Text style={{ color: '#56D4FA',marginRight:10 }}> See Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* -------userEventProfile -------- */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalUsetProfile}
                onRequestClose={() => {
                    setModalUsetProfile(!modalUsetProfile);
                }}>
                <View style={styles.centeredView2}>
                    <ScrollView style={styles.modalView2}>
                        <TouchableOpacity
                            onPress={() => setModalUsetProfile(!modalUsetProfile)}>
                            <Ionicons
                                name={'md-arrow-back-sharp'}
                                size={30}
                                color={'white'}
                            />
                        </TouchableOpacity>
                        <Image
                            source={require('../../../Assets/pr1.png')}
                            style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 50, borderColor: '#19A2C9', borderWidth: 3 }}
                        />

                        <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                            Company name{' '}
                        </Text>
                        <Text style={styles.disText}>Daniele</Text>
                        <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                            Name{' '}
                        </Text>
                        <Text style={styles.disText}>Daniele Rossi</Text>
                        {showProfdiscription ?
                            <View>
                                <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                                    Email address{' '}
                                </Text>
                                <Text style={styles.disText}>Kris@gmail.com</Text>
                                <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                                    Phone Number
                                </Text>
                                <Text style={styles.disText}>+01234567891..</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                                        Description{' '}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => setShowProfdiscription(!showProfdiscription)}>
                                        <Text style={[styles.btntext, { color: '#56D4FA' }]}>See Less</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                            <View>
                                <TouchableOpacity
                                    onPress={() => setShowProfdiscription(!showProfdiscription)}>
                                    <Text style={[styles.btntext, { color: '#56D4FA' }]}>See Details</Text>
                                </TouchableOpacity>
                                <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                                    Description{' '}
                                </Text>
                            </View>
                        }
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
                                { backgroundColor: '#39393D', width: '100%', height: 170 },
                            ]}
                        />
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
                            {/* ------ */}
                            {event ? (
                                <ScrollView>
                                    <TouchableOpacity
                                        style={styles.card}>
                                        <View style={styles.heart}>
                                            <View style={[styles.heart, { backgroundColor: '#24BDDF', padding: 0, height: 25 }]}>
                                                <TouchableOpacity
                                                    styles={{ zIndex: 5 }}
                                                // onPress={() => setActivityDetails(false)}
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
                                            source={require('../../../Assets/image46.png')}
                                            style={styles.img}
                                        />
                                        <View  >
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
                                    <TouchableOpacity style={styles.card}
                                        onPress={() => navigation.navigate('AdminEvent1')}
                                    >
                                        <View style={styles.heart}>
                                            <TouchableOpacity
                                                styles={{ paddingVertical: 20, zIndex: 5 }}
                                            >
                                                <Ionicons
                                                    name={'heart'}
                                                    size={30}
                                                    color={'#EE1F1F'} />
                                            </TouchableOpacity>
                                        </View>
                                        <Image
                                            source={require('../../../Assets/1.png')}
                                            style={styles.img}
                                        />
                                        <View
                                        // style={{ padding: 10 }}
                                        >
                                            <Text style={styles.headingText}>
                                                Saturday Night Party
                                            </Text>
                                            <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Modena MO</Text>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                }}>
                                                <Text style={styles.disText}>25 Mar</Text>
                                                <Text style={styles.disText}>15 km</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('AdminEvent1')}

                                        style={styles.card}>
                                        <View style={styles.heart}>
                                            <TouchableOpacity
                                                styles={{ paddingVertical: 20, zIndex: 5 }}
                                            >
                                                <Ionicons name={'heart'} size={30} color={'#EE1F1F'} />
                                            </TouchableOpacity>
                                        </View>
                                        <Image source={require('../../../Assets/image35.png')} style={styles.img} />
                                        <View>
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
                                </ScrollView>
                            ) : null}
                            {/* -------- */}
                            {activity ? (
                                <ScrollView>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('AdminActivityDetail')}
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
                                            source={require('../../../Assets/2.png')}
                                            style={styles.img}
                                        />
                                        <View  >
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                }}>
                                                <Text style={styles.headingText}>Paintball</Text>
                                                <Text style={styles.disText}>4.9 <FontAwesome5 name={"star"} size={15} color={'#FFCE31'} /></Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                }}>
                                                <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Castelfranco MO</Text>
                                                <Text style={styles.disText}>18 Mar - 25 Nov</Text>
                                            </View>

                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                }}>
                                                <Text style={styles.disText}>Type : Sport</Text>
                                                <Text style={styles.disText}> 4 km</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.card}
                                        onPress={() => navigation.navigate('AdminActivityDetail2')}>
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
                                            source={require('../../../Assets/3.png')}
                                            style={[styles.img]}
                                        />
                                        <View  >
                                            <Text style={styles.headingText}>Paintball</Text>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                }}>
                                                <Text style={styles.disText}>Modena MO</Text>
                                                <Text style={styles.disText}>12 Dic - 18 Mar</Text>
                                            </View>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                }}>
                                                <Text style={styles.disText}>Type : Corso</Text>
                                                <Text style={styles.disText}> 4 km</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>
                            ) : null}
                        </View>
                    </ScrollView>
                </View>
            </Modal>
            {/* ---------------Discription Popup-------------------- */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={openDiscription}
                onRequestClose={() => {
                    //   Alert.alert('Modal has been closed.');
                    setOpendiscription(!openDiscription);
                }}>

                <View style={[styles.centeredView, { justifyContent: 'flex-end' }]}>
                    <View style={[styles.discriptionView, { margin: 0, }]}>
                        <View style={[styles.backBtn, { top: 30, }]}>
                            <TouchableOpacity
                                // styles={{ paddingVertical: 20, zIndex: 5 }}
                                onPress={() => setOpendiscription(!openDiscription)}>
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
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image
                                    source={require('../../../Assets/search.png')}
                                    style={{ marginRight: 10 }}
                                />
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
                            </View>
                            <Image
                                source={require('../../../Assets/menu.png')}
                            // style={styles.img}
                            // style={{ paddingLeft: 15, paddingTop: 15 }}
                            />
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
                                showsUserLocation={true}
                                showsMyLocationButton={true}
                                followsUserLocation={true}
                                showsCompass={true}
                                region={{
                                    latitude: location.lat,
                                    longitude: location.lng,
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.0121,
                                }}
                                    >
                                <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map1Handler()}
                                    title={"Modena MO"}
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

                                <Marker coordinate={{ latitude: 37.65825, longitude: -122.4324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map3Handler()}
                                    title={"Castelfranco"}
                                    description={"modren Mo"} />
                                <Marker coordinate={{ latitude: 37.75825, longitude: -122.1324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map3Handler()}
                                    title={"Corso di Chitarra"}
                                    description={"Corso"} />
                                <Marker coordinate={{ latitude: 37.95825, longitude: -122.1324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map3Handler()}
                                    title={"Friday Night Show"}
                                    description={"pub"} />
                                <Marker coordinate={{ latitude: 37.95825, longitude: -122.5324 }}
                                    // pinColor={"purple"} // any color
                                    onPress={() => map3Handler()}
                                    title={"Paintball"}
                                    description={"Sport"} />
                            </MapView>

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
                                {/* <View style={styles.container}>

          </View> */}
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
                                        Ingresso ..
                                    </Text>

                                    <TouchableOpacity
                                        onPress={() => setShowMap(!showMap)}

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
                            <Text style={styles.headingText}> Paintball </Text>
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
                                        <Text style={styles.discriptionText}>Sport</Text>
                                    </View>
                                    <Text style={styles.discriptionTextB}>
                                        Il Paintball vi mette a disposizione tutte le attrezzature per provare
                                        l’emozionante sport del Paintball. Vieni a sfidare i tuoi
                                        amici nel nostro campo scenario. Tra fortini, torrette e
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
                                        source={require('../../../Assets/2.png')}
                                        style={{
                                            width: 120,
                                            height: '80%',
                                            borderRadius: 20,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    : null
                }
            </View>
        </Modal>
            {/* ------Shara model------- */ }
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalShare}
        onRequestClose={() => {
            //   Alert.alert('Modal has been closed.');
            setModalShare(!modalShare);
        }}>
        <View style={styles.centeredView1}>
            <View style={styles.modalView1}>
                <Text style={styles.modalHeadingText1}>Share By</Text>

                <View style={[styles.mainMenu, { padding: 7 }]}>
                    <TouchableOpacity
                        style={[
                            styles.activityEventSection1,
                            // {borderLeftWidth: 0},
                        ]}
                        onPress={() => navigation.navigate('Profilesidebar')}>
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
    {/* Contact model------- */ }
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
    {modalVisible ? <DeleteEvent setModalVisible={setModalVisible} />:null }
        </ScrollView >
    );
};

export default EditActivityDetail;

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
        borderRadius: 10,
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
    // btntext: {
    //     color: 'white',
    //     fontWeight: '400',
    //     fontSize: 18,
    //     lineHeight: 27,
    //      
    // },
    gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
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
        // height: '84%',
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
        //  
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
        // width: '100%',
        // height: '100%',
        // display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
    },
    bottomSec: {
        width: '100%',
        height: '45%',
        backgroundColor: '#28282B',
        // borderTopRadius: 30,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingTop: 30,
        justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
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
        // marginTop: 15,
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
        //  
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
        //  
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
        //  

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
})

