/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
// import ViewMoreText from 'react-native-view-more-text';
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
// import RangeSlider from 'rn-range-slider';
import { Slider } from '@miblanchard/react-native-slider';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ViewMoreText from 'react-native-view-more-text';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-modern-datepicker';
import Menu from '../../../component/menu/Topmenu1';
import LinearGradient from 'react-native-linear-gradient';
import { RadioButton } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Event = ({ navigation }) => {
  const [event, setEvent] = useState(true);
  const [activity, setActivity] = useState(false);
  const [activityDetails, setActivityDetails] = useState(false);
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalActivityFilter, setActivityFilterVisible] = useState(false);
  const [modalShare, setModalShare] = useState(false);
  const [modalContect, setModalContect] = useState(false);
  const [modalUsetProfile, setModalUsetProfile] = useState(false);
  const [modalOpps, setModalOopsle] = useState(false);
  const [isSelected, setIsSelected] = useState('');
  const [date, setDate] = useState(new Date())
  const [modalSearch, setModalModalSearch] = useState(false);
  const [popup, setPopup] = useState(false);
  const [checked, setChecked] = useState('tikok');
  const [showProfdiscription, setShowProfdiscription] = useState(false);
  const [location, setLocation] = useState(
    {
      lat: 37.78825,
      lng: -122.4324,
    }
  );
  const [locationName, setLocationName] = useState();
  const [showMap, setShowMap] = useState(true);
  const [showMap1, setShowMap1] = useState(false);
  const [showMap2, setShowMap2] = useState(false);
  const [mapModal, setMapModal] = useState(false);
  const [sliderRow, setSlider] = useState(
    {
      value: 20,
    });
    const [favCheq, setFavCheq] = useState(new Array(20).fill(false));
    const setFavorite = (index) => {
      var temp = favCheq;
      temp[index] = !temp[index];
      setFavCheq(temp);
    }


  // This useEffect is used to Show popup after 9 seconds
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPopup(true);
  //   }, 9000);
  // }, []);

  useEffect(() => {
    eventHandler()
  }, []);
  // const eventCheq = (value) => {
  //   let x = value
  //   setChecked({ isFocused: true }, value)
  // }
  const eventHandler = () => {
    setEvent(true);
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
    // setEvent(false);
    setActivityDetails(true);
  };
  const logoutHandler = () => {
    setModalOopsle(false);
    setModalVisible(false);
    setActivityDetails(false);
    setEvent(true);
    navigation.navigate('OwnerLogin');
  };
  const reviewHandler = () => {
    setModalShare(!activityDetails);
    // setActivityDetails(false)
    navigation.navigate('Review')
  }



  const map1Handler = () => {
    setShowMap1(false)
    setShowMap2(false)
    setShowMap(true, { isFocused: true })
    setShowMap({ isFocused: true })
  }
  const map2Handler = () => {
    setShowMap(false)
    setShowMap2(false)
    setShowMap1(true, { isFocused: true })
    setShowMap1({ isFocused: true })
  }
  const map3Handler = () => {
    setShowMap(false)
    setShowMap1(false)
    setShowMap2(true, { isFocused: true })
    setShowMap2({ isFocused: true })
  }

  return (
    <View style={styles.main}>
            <View
        // onPress={eventHandler} 
        style={styles.topSec}>
        <TouchableOpacity style={styles.inputMain}
          onPress={() => setModalModalSearch(true)}
        >
          <Feather name={'search'} size={25} color={'#2B2B2B'} style={{ marginRight: 10 }} />
          {/* <Image
            source={require('../../../Assets/search.png')}
            
          /> */}
          <View>
            <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 20, color: '#28282B' }}>{"Search"}</Text>
            <Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 20, color: '#28282B' }}><MaterialIcons name={'location-pin'} size={15} color={'#28282B'} />{"Current Location"}</Text>
          </View>
        </TouchableOpacity>
        {/* Shaheen */}
        <View style={{
          height: 29,
          width: 1,
          backgroundColor: '#C4C4C4', marginRight: 15

        }}></View>
        {event ? (
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}>
            {/* <Image
              source={require('../../../Assets/menu.png')}
            /> */}
                <Ionicons name='menu' size={25} />
          </TouchableOpacity>
        ) : null}

        {activity ? (
          <TouchableOpacity
            onPress={() => setActivityFilterVisible(!modalActivityFilter)}>
            {/* <Image
              source={require('../../../Assets/menu.png')} /> */}
                <Ionicons name='menu' size={25} />
          </TouchableOpacity>
        ) : null}
      </View>
      {/* -------Search Profile -------- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSearch}
        onRequestClose={() => {
          setModalModalSearch(!modalSearch)
        }}>
        <View style={styles.SearchView}>
          <View style={styles.SearchModal}>
            <View style={styles.topSecS}>
              <View style={styles.inputMainS}>
                {/* <Image
                  source={require('../../../Assets/search.png')}
                  style={{ marginRight: 10 }}
                /> */}
                <Ionicons name='search' size={25} style={{ marginRight: 10 }} />
                <TextInput
                  placeholder="Search by Location"
                  placeholderTextColor='#747688'
                  value={search}
                  onChangeText={value => {
                    setSearch(value);
                  }}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  style={styles.inputS}
                /></View>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}>
                {/* <Image
                  source={require('../../../Assets/menu.png')}
                /> */}
                <Ionicons name='menu' size={25} />
              </TouchableOpacity>
            </View>
            <View style={styles.borderBtm} />
            <View style={styles.topSecS}>
              <View style={styles.inputMainS}>
                {/* <Image
                  source={require('../../../Assets/search.png')}
                  style={{ marginRight: 10 }} /> */}
                <Ionicons name='search' size={25} style={{ marginRight: 10 }} />
                <GooglePlacesAutocomplete
                  autoFocus={true}
                  placeholder='Search'
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                  }}
                  query={{
                    key: 'AIzaSyAaONPFyunxhNO1fyj8KWqQ8JWR709qkZY',
                    language: 'en',
                  }}
                  style={styles.inputS}
                />
              </View>
              <TouchableOpacity>
                <AntDesign
                  name={'menu-fold'}
                  size={25}
                  color={'transparent'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={[styles.btn, { width: '35%', height: 43, }]}
            onPress={() => setModalModalSearch(!modalSearch)}>
            <LinearGradient
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0, y: 0.9 }}
              colors={['#33CC8F', '#28CCF2']}
              style={styles.gradient1}>
              <Ionicons
                name={'search'}
                size={25}
                color={'#28282B'}
                // style={{ paddingHorizontal: 10 }}
                style={{position:'absolute',left:15}}
              />
              <Text style={[styles.btntextS,{alignSelf:'center', marginLeft:10}]}>SEARCH</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* Middle Section */}
      <View style={styles.middleSec}>
        <View style={[styles.tabMain, { marginBottom: 10 }]}>
          <TouchableOpacity isFocused
            onPress={eventHandler} style={[styles.btn1, {
              borderBottomColor: event.isFocused
                ? '#22AEB3'
                : '#28282B',
              borderBottomWidth: 1,
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
        {event ? (
          <ScrollView style={{ width: '100%', }} contentContainerStyle={{paddingBottom: 30}}>

            <TouchableOpacity style={styles.card}
              onPress={() => navigation.navigate('EventDetail')}>
              <View style={styles.heart}>
                {favCheq[0] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(0)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(0)}>
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
              <View
              // style={{ padding: 10 }}
              >
                <Text style={styles.headingText}>
                  Friday Night Show - 212
                </Text>
                <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Via Alfonso Paltrinieri</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}>15 Dec</Text>
                  <Text style={styles.disText}>15 km</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}
              onPress={() => navigation.navigate('Event1')}>
              <View style={styles.heart}>
                {favCheq[1] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(1)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(1)}>
                    <Ionicons
                      name={'heart-outline'}
                      size={30}
                      color={'#D7D7D7'} />
                  </TouchableOpacity>
                }
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
              onPress={activityDetailsHandler}
              style={styles.card}>
              <View style={styles.heart}>
                {favCheq[2] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(2)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(2)}>
                    <Ionicons
                      name={'heart-outline'}
                      size={30}
                      color={'#D7D7D7'} />
                  </TouchableOpacity>
                }
              </View>
              <Image source={require('../../../Assets/image35.png')} style={styles.img} />
              <View  >

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
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Pringnao MO</Text>
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
                {favCheq[3] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(3)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(3)}>
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
              <View  >
                <Text style={styles.headingText}>Friday Night Show</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />MO</Text>
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

            <TouchableOpacity style={styles.card}>
              <View style={styles.heart}>
              {favCheq[4] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(4)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(4)}>
                    <Ionicons
                      name={'heart-outline'}
                      size={30}
                      color={'#D7D7D7'} />
                  </TouchableOpacity>
                }
              </View>
              <Image
                source={require('../../../Assets/2.png')}
                style={[styles.img]}
              />
              <View  >
                <Text style={styles.headingText}>Paintball</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />via MO</Text>
                  <Text style={styles.disText}>10 Dec to 30 Mar</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}>Type : Sports</Text>
                  <Text style={styles.disText}>8m</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={activityDetailsHandler}
              style={styles.card}>
              <View style={styles.heart}>
              {favCheq[5] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(5)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(5)}>
                    <Ionicons
                      name={'heart-outline'}
                      size={30}
                      color={'#D7D7D7'} />
                  </TouchableOpacity>
                }
              </View>
              <Image
                source={require('../../../Assets/3.png')}
                style={styles.img}
              />
              <View  >

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
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Pringnao MO</Text>
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
              {favCheq[6] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(6)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(6)}>
                    <Ionicons
                      name={'heart-outline'}
                      size={30}
                      color={'#D7D7D7'} />
                  </TouchableOpacity>
                }
              </View>
              <Image
                source={require('../../../Assets/4.png')}
                style={[styles.img]}
              />
              <View  >
                <Text style={styles.headingText}>Riding Club</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Miami MO</Text>
                  <Text style={styles.disText}>10 Dec to 30 Mar</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}>Type : Race</Text>
                  <Text style={styles.disText}>8m</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={activityDetailsHandler}
              style={styles.card}>
              <View style={styles.heart}>
              {favCheq[7] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(7)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(7)}>
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
              <View  >

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
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Pringnao MO</Text>
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
            <TouchableOpacity
              onPress={activityDetailsHandler}
              style={styles.card}>
              <View style={styles.heart}>
              {favCheq[8] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(8)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(8)}>
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
              <View  >

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
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Pringnao MO</Text>
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
              {favCheq[9] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(9)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(9)}>
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
              <View  >
                <Text style={styles.headingText}>Night Show - 212</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />MO</Text>
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
        {/* ----Activity---- */}
        {activity ? (
          <ScrollView contentContainerStyle={{paddingBottom: 30}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ActivityDetail')}
              style={styles.card}>
              <View style={styles.heart}>
              {favCheq[10] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(10)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(10)}>
                    <Ionicons
                      name={'heart-outline'}
                      size={30}
                      color={'#D7D7D7'} />
                  </TouchableOpacity>
                }
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
            <TouchableOpacity
              onPress={() => navigation.navigate('ActivityDetail2')}
              style={styles.card}>
              <View style={styles.heart}>
              {favCheq[11] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(11)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(11)}>
                    <Ionicons
                      name={'heart-outline'}
                      size={30}
                      color={'#D7D7D7'} />
                  </TouchableOpacity>
                }
              </View>
              <Image
                source={require('../../../Assets/3.png')}
                style={[styles.img]}
              />
              <View  >
                <Text style={styles.headingText}>Corso di Pilates</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Modena MO</Text>
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
            <TouchableOpacity style={styles.card}>
              <View style={styles.heart}>
              {favCheq[12] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(12)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(12)}>
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
              <View  >
                <Text style={styles.headingText}>Corso di Chitarra</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Modena MO</Text>
                  <Text style={styles.disText}>10 Dec to 30 Mar</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}>Tipologia : Corso</Text>
                  <Text style={styles.disText}>8m</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View style={styles.heart}>
              {favCheq[13] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(13)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(13)}>
                    <Ionicons
                      name={'heart-outline'}
                      size={30}
                      color={'#D7D7D7'} />
                  </TouchableOpacity>
                }
              </View>
              <Image
                source={require('../../../Assets/1.png')}
                style={[styles.img]}
              />
              <View  >
                <Text style={styles.headingText}>Night Show - 212</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />MO</Text>
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
            <TouchableOpacity
              onPress={activityDetailsHandler}
              style={styles.card}>
              <View style={styles.heart}>
              {favCheq[14] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(14)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(14)}>
                    <Ionicons
                      name={'heart-outline'}
                      size={30}
                      color={'#D7D7D7'} />
                  </TouchableOpacity>
                }
              </View>
              <Image
                source={require('../../../Assets/4.png')}
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
            <View style={styles.card}>
              <View style={styles.heart}>
              {favCheq[15] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(15)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(15)}>
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
              <View  >
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
            <TouchableOpacity style={styles.card}>
              <View style={styles.heart}>
              {favCheq[16] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(16)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(16)}>
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
              <View  >
                <Text style={styles.headingText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Castelfranco MO</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />MO</Text>
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
            <TouchableOpacity style={styles.card}>
              <View style={styles.heart}>
              {favCheq[17] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(17)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(17)}>
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
              <View  >
                <Text style={styles.headingText}>Night Show - 212</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />MO</Text>
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
            <TouchableOpacity style={styles.card}>
              <View style={styles.heart}>
              {favCheq[18] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(18)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(18)}>
                    <Ionicons
                      name={'heart-outline'}
                      size={30}
                      color={'#D7D7D7'} />
                  </TouchableOpacity>
                }
              </View>
              <Image
                source={require('../../../Assets/2.png')}
                style={[styles.img]}
              />
              <View  >
                <Text style={styles.headingText}>Night Show - 212</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />MO</Text>
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
            <TouchableOpacity style={styles.card}>
              <View style={styles.heart}>
              {favCheq[19] ? <TouchableOpacity
                  styles={{ paddingVertical: 20, zIndex: 5 }}
                  onPress={() => setFavorite(19)}>
                  <Ionicons
                    name={'heart'}
                    size={30}
                    color={'#EE1F1F'} />
                </TouchableOpacity>
                  :
                  <TouchableOpacity
                    styles={{ paddingVertical: 20, zIndex: 5 }}
                    onPress={() => setFavorite(19)}>
                    <Ionicons
                      name={'heart-outline'}
                      size={30}
                      color={'#D7D7D7'} />
                  </TouchableOpacity>
                }
              </View>
              <Image
                source={require('../../../Assets/1.png')}
                style={[styles.img]}
              />
              <View  >
                <Text style={styles.headingText}>Night Show - 212</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />MO</Text>
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

      {/* filter event -------- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={[styles.centeredView]}>
          <ScrollView
            style={styles.modalView}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.closeBox}>
              <Ionicons name={'close'} size={30} color={'black'} />
            </TouchableOpacity>

            <Text style={styles.modalHeadingText}>Categories Filter</Text>

            {/* -----------Cheq Boxes --------- */}
            <View style={{ flexDirection: 'row', paddingVertical: 13 }}>
              <View style={styles.checkboxSect}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    boxStyle={{ color: '#ffffff ' }}
                    tintColors={{ true: '#000000', false: '#000000' }}
                    onValueChange={setIsSelected}
                    style={styles.checkbox}
                    color="white"
                  />
                  <Text style={styles.checkboxText}>Outdoor</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    boxStyle={{ backgroundColor: '#000000 ' }}
                    tintColors={{ true: '#000000', false: '#000000' }}
                    onValueChange={setIsSelected}
                    style={styles.checkbox}
                    color="#000000"
                  />
                  <Text style={styles.checkboxText}>Sports</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    tintColors={{ true: '#000000', false: '#000000' }}

                    onValueChange={setIsSelected}
                    style={styles.checkbox}
                    color="white"
                  />
                  <Text style={styles.checkboxText}>Family</Text>
                </View>
              </View>

              {/* ------------------- */}
              <View style={styles.checkboxSect}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    tintColors={{ true: '#000000', false: '#000000' }}
                    onValueChange={setIsSelected}
                    style={styles.checkbox}
                    color="white"
                  />
                  <Text style={styles.checkboxText}>Music</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    tintColors={{ true: '#000000', false: '#000000' }}
                    onValueChange={setIsSelected}
                    style={styles.checkbox}
                    color="white"
                  />
                  <Text style={styles.checkboxText}>Nightlife</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    tintColors={{ true: '#000000', false: '#000000' }}
                    onValueChange={setIsSelected}
                    style={styles.checkbox}
                    color="white"
                  />
                  <Text style={styles.checkboxText}>Wine and Food</Text>
                </View>
              </View>
            </View>
            {/* ------------ */}
            <Text style={styles.modalHeadingText}>Filter By Date</Text>
            <DatePicker
              mode="calendar"
              date={date}
              options={{
                backgroundColor: '#D9D9D9',
                textHeaderColor: '#000000',
                textDefaultColor: '#383838',
                selectedTextColor: '#fff',
                mainColor: '#000000',
                textSecondaryColor: '#000000',
                // borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              onDateChange={setDate}
            />
            <Text style={styles.modalHeadingText}>Sort By</Text>
            <View style={styles.checkboxSect}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  tintColors={{ true: '#000000', false: '#000000' }}
                  onValueChange={setIsSelected}
                  style={styles.checkbox}
                  color="#D9D9D9"
                  backgroundColor="#D9D9D9"
                />
                <Text style={styles.checkboxText}>Date</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  tintColors={{ true: '#000000', false: '#000000' }}
                  onValueChange={setIsSelected}
                  style={styles.checkbox}
                  color="white"
                />
                <Text style={styles.checkboxText}>Alphabetical</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  tintColors={{ true: '#000000', false: '#000000' }}
                  onValueChange={setIsSelected}
                  style={styles.checkbox}
                  color="white"
                />
                <Text style={styles.checkboxText}>Distance</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                marginVertical: 10,
              }}>
              <Text style={styles.modalHeadingText}>Search By Distance</Text>
              <Text
                style={[
                  styles.modalHeadingText,
                  { backgroundColor: '#72727233', padding: 5, borderRadius: 10 },
                ]}>
                {sliderRow.value} km
              </Text>
            </View>
            <View  style={{width:"95%"}}>
              <Slider
                value={sliderRow.value}
                minimumValue={0}
                maximumValue={50}
                step={5}
                thumbTintColor={'#FFFFFF'}
                trackStyle={height = 20}
                onValueChange={value => setSlider({ value })}
              />
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                <Text style={styles.modalHeadingText}>0</Text>
                <Text style={styles.modalHeadingText}>10</Text>
                <Text style={styles.modalHeadingText}>20</Text>
                <Text style={styles.modalHeadingText}>30</Text>
                <Text style={styles.modalHeadingText}>40</Text>
                <Text style={styles.modalHeadingText}>50</Text>
              </View>
              {/* <Text style={styles.modalHeadingText}>{'0           10          20        30        40        50'}</Text> */}
            </View>
            {/* <View style={styles.bar}>
              <Image
                source={require('../../../Assets/bar.png')}
              />
              <View style={styles.inerCircle}></View>
            </View> */}
            <TouchableOpacity
              style={[styles.btn, { marginTop: 15, marginBottom: 20 }]}
              onPress={() => setModalVisible(!modalVisible)}>
              <LinearGradient
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.9 }}
                colors={['#33CC8F', '#28CCF2']}
                style={styles.gradient}>
                <Text style={[styles.btntext]}>Apply Filters</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
      {/* filter Activity -------- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalActivityFilter}
        onRequestClose={() => {
          setActivityFilterVisible(!modalActivityFilter);
        }}>
        <View style={[styles.centeredView, { justifyContent: 'center', alignItems: 'center' }]}>
          <View style={[styles.modalView, { height: '70%' }]}>
            <TouchableOpacity
              onPress={() => setActivityFilterVisible(!modalActivityFilter)}
              style={styles.closeBox}>
              <Ionicons name={'close'} size={30} color={'black'} />
            </TouchableOpacity>

            <Text style={styles.modalHeadingText}>Categories Filter</Text>

            {/* -----------Cheq Boxes --------- */}
            <View style={{ flexDirection: 'row', paddingVertical: 13 }}>
              <View style={styles.checkboxSect}>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    tintColors={{ true: '#000000', false: '#000000' }}
                    onValueChange={setIsSelected}
                    style={styles.checkbox}
                    color="#000000"
                  />
                  <Text style={styles.checkboxText}>Outdoor</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={isSelected}
                    tintColors={{ true: 'black', false: '#000000' }}
                    onValueChange={setIsSelected}
                    style={styles.checkbox}
                    color="#000000"
                  />
                  <Text style={styles.checkboxText}>Sports</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    tintColors={{ true: '#000000', false: '#000000' }}
                    value={isSelected}
                    onValueChange={setIsSelected}
                    style={styles.checkbox}
                    color="white"
                  />
                  <Text style={styles.checkboxText}>Family</Text>
                </View>
              </View>
            </View>

            <Text style={styles.modalHeadingText}>Sort By</Text>
            <View style={styles.checkboxSect}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  tintColors={{ true: '#000000', false: '#000000' }}
                  onValueChange={setIsSelected}
                  style={styles.checkbox}
                  color="#D9D9D9"
                  backgroundColor="#D9D9D9"
                />
                <Text style={styles.checkboxText}>Date</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  tintColors={{ true: '#000000', false: '#000000' }}
                  onValueChange={setIsSelected}
                  style={styles.checkbox}
                  color="white"
                />
                <Text style={styles.checkboxText}>Alphabetical</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  tintColors={{ true: '#000000', false: '#000000' }}
                  onValueChange={setIsSelected}
                  style={styles.checkbox}
                  color="white"
                />
                <Text style={styles.checkboxText}>Distance</Text>
              </View>
            </View>

            <Text style={[styles.modalHeadingText, { paddingTop: 20 }]}>
              Availability
            </Text>
            <View style={[styles.checkboxSect, { width: '90%' }]}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  tintColors={{ true: '#000000', false: '#000000' }}
                  onValueChange={setIsSelected}
                  style={styles.checkbox}
                  color="#D9D9D9"
                  backgroundColor="#D9D9D9"
                />
                <Text style={styles.checkboxText}>
                  Only show availbale Activities
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                marginVertical: 10,
              }}>
              <Text style={styles.modalHeadingText}>Search By Distance</Text>
              <Text
                style={[
                  styles.modalHeadingText,
                  { backgroundColor: '#72727233', padding: 5, borderRadius: 10 },
                ]}>
                {sliderRow.value} km
              </Text>
            </View>
            <View>
              <Slider
                value={sliderRow.value}
                minimumValue={0}
                maximumValue={50}
                step={5}
                thumbTintColor={'#FFFFFF'}
                trackStyle={height = 20}
                onValueChange={value => setSlider({ value })}
              />
              
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                <Text style={styles.modalHeadingText}>0</Text>
                <Text style={styles.modalHeadingText}>10</Text>
                <Text style={styles.modalHeadingText}>20</Text>
                <Text style={styles.modalHeadingText}>30</Text>
                <Text style={styles.modalHeadingText}>40</Text>
                <Text style={styles.modalHeadingText}>50</Text>
              </View>
              {/* <Text style={styles.modalHeadingText}>{'0           10          20        30        40        50'}</Text> */}
            </View>
            <TouchableOpacity
              style={[styles.btn, { marginTop: 15 }]}
              onPress={() => setActivityFilterVisible(!modalActivityFilter)}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.5 }}
                colors={['#33CC8F', '#28CCF2']}
                style={styles.gradient}>
                <Text style={[styles.btntext]}>Apply Filters</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* userEventProfile -------- */}
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
            <Text style={styles.disText}>kristian</Text>
            <Text style={[styles.modalHeadingText, { color: 'white' }]}>
              Name{' '}
            </Text>
            <Text style={styles.disText}>Bell</Text>

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
                    onPress={() => setShowProfdiscription(false)}>
                    <Text style={[styles.btntext, { color: '#56D4FA' }]}>See Less</Text>
                  </TouchableOpacity>
                </View>
              </View>
              :
              <View>
                <TouchableOpacity
                  onPress={() => setShowProfdiscription(true)}>
                  <Text style={[styles.btntext, { color: '#56D4FA' }]}>See Details</Text>
                </TouchableOpacity>
                <Text style={[styles.modalHeadingText, { color: 'white' }]}>
                  Description{' '}
                </Text>
              </View>
            }

            <TextInput
              // placeholder="Description"
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
                          onPress={()=> navigation.navigate('OwnerEventDetail')}
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
                    onPress={() => navigation.navigate('OwnerEvent1')}
                  >
                    <View style={styles.heart}>
                      <TouchableOpacity
                        styles={{ paddingVertical: 20, zIndex: 5 }}
                      >
                        <Ionicons
                          name={'heart-outline'}
                          size={30}
                          color={'#D7D7D7'} />
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
                    onPress={() => navigation.navigate('OwnerEvent1')}

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
                    <Image source={require('../../../Assets/image35.png')} style={styles.img} />
                    <View  >

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
                        <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Pringnao MO</Text>
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
                    onPress={() => navigation.navigate('OwnerActivityDetail1')}
                    style={styles.card}>
                    <View style={styles.heart}>
                      <TouchableOpacity
                        styles={{ paddingVertical: 20, zIndex: 5 }}
                      // onPress={() => setActivityDetails(false)}
                      >
                        <Ionicons
                          name={'heart-outline'}
                          size={30}
                          color={'#D7D7D7'} />
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
                  <TouchableOpacity style={styles.card}>
                    <View style={styles.heart}>
                      <TouchableOpacity
                        styles={{ paddingVertical: 20, zIndex: 5 }}   >
                        <Ionicons
                          name={'heart-outline'}
                          size={30}
                          color={'#D7D7D7'} />
                      </TouchableOpacity>
                    </View>
                    <Image
                      source={require('../../../Assets/3.png')}
                      style={[styles.img]}
                    />
                    <View  >
                      <Text style={styles.headingText}>Corso di Pilates</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.disText}><MaterialIcons name={'location-pin'} size={13} color={'white'} />Modena MO</Text>
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
      {/* POp up modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={popup}
        onRequestClose={() => { setPopup(!popup) }}>
        <View style={[styles.centeredView]}>
          <View style={[styles.findView,
          { margin: 0, justifyContent: 'center', alignItems: 'center' }]} >
            <Text style={[styles.btntext, { color: '#000000' }]}>How did you find Bibens?</Text>
            {/* <View style={[styles.rdioflex]}>
              <RadioButton
                value="tikok"
                status={checked === 'tikok' ? 'checked' : 'unchecked'}
                onPress={() => eventCheq('tikok')}
                color="#25B3AF"
              />
              <Text style={[styles.radioText, {
                color: checked.isFocused
                  ? '#22AEB3'
                  : '#000000',

              }]}>Tik Tok</Text>
            </View>
            <View style={[styles.rdioflex]}>
              <RadioButton
                value="instagram"
                status={checked === 'instagram' ? 'checked' : 'unchecked'}
                onPress={() => eventCheq('instagram')}
                // onPress={() => setChecked('instagram')}
                color="#25B3AF"
              />
              <Text style={[styles.radioText, {
                color: checked.isFocused
                  ? '#22AEB3'
                  : '#000000',

              }]}>Instagram</Text>
            </View> */}
            <View style={[styles.rdioflex]}>
              <RadioButton
                value="tiktok"
                status={checked === 'tiktok' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('tiktok')}
                color="#25B3AF"
              />
              <Text style={styles.radioText}>Tik Tok</Text>
            </View>
            <View style={[styles.rdioflex]}>
              <RadioButton
                value="instagram"
                status={checked === 'instagram' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('instagram')}
                color="#25B3AF"
              />
              <Text style={styles.radioText}>Instagram</Text>
            </View>
            <View style={[styles.rdioflex]}>
              <RadioButton
                value="facebook"
                status={checked === 'facebook' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('facebook')}
                color="#25B3AF"
              />
              <Text style={styles.radioText}>Facebook</Text>
            </View>
            <View style={[styles.rdioflex]}>
              <RadioButton
                value="playStore"
                status={checked === 'playStore' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('playStore')}
                color="#25B3AF"
              />
              <Text style={styles.radioText}>App Store or Play Store</Text>
            </View>
            <View style={[styles.rdioflex]}>
              <RadioButton
                value="internet"
                status={checked === 'internet' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('internet')}
                color="#25B3AF"
              />
              <Text style={styles.radioText}>Internet in General</Text>
            </View>
            <View style={[styles.rdioflex]}>
              <RadioButton
                value="friends"
                status={checked === 'friends' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('friends')}
                color="#25B3AF"
              />
              <Text style={styles.radioText}>Friends / Word of Mouth</Text>
            </View>
            <View style={[styles.rdioflex]}>
              <RadioButton
                value="flyers"
                status={checked === 'flyers' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('flyers')}
                color="#25B3AF"
              />
              <Text style={styles.radioText}>Flyers</Text>
            </View>
            <View style={[styles.rdioflex]}>
              <RadioButton
                value="others"
                status={checked === 'others' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('others')}
                color="#25B3AF"
              />
              <Text style={styles.radioText}>Others</Text>
            </View>
            <TouchableOpacity
              style={[styles.btn, { width: '40%', height: 42, borderRadius: 10, marginTop: 15, }]}
              onPress={() => {
                setPopup(!popup);
              }}>
              <LinearGradient
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.9 }}
                colors={['#33CC8F', '#28CCF2']}
                style={styles.gradient}>
                <Text style={[styles.btntext, { fontSize: 16, color: 'white' }]}>
                  Sign in
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Map Modal open */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={mapModal}
        onRequestClose={() => { setMapModal(!mapModal) }}>
        <View style={[styles.centeredView]}>
          <View style={[styles.modalView2, { padding: 0 }]}>
            <View style={styles.topsec}>
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
                <View style={[styles.innseserch,]}>
                  <Image
                    source={require('../../../Assets/search.png')}
                    style={{ margin: 10 }}
                  />

                  <GooglePlacesAutocomplete
                    autoFocus={false}
                    fetchDetails={true}
                    placeholder={'Discoteca\nModena '}
                    onPress={(data, details = null) => {
                      // 'details' is provided when fetchDetails = true
                      setLocation(details.geometry.location);
                      setLocationName(details.geometry);
                    }}
                    query={{
                      key: 'AIzaSyAaONPFyunxhNO1fyj8KWqQ8JWR709qkZY',
                      language: 'en',
                    }}
                    GooglePlacesDetailsQuery={{
                      fields: 'geometry'
                    }}
                    styles={{
                      textInputContainer: {
                        backgroundColor: '#EFEFEF',
                      },
                      textInput: {
                        color: '#5d5d5d',
                        fontSize: 14,
                        backgroundColor: '#EFEFEF',
                      },
                      predefinedPlacesDescription: {
                        color: '#EFEFEF',
                        backgroundColor: '#EFEFEF',
                      },
                    }}
                  />
                  {/* </View> */}
                  {/* <Image
                    source={require('../../../Assets/menu.png')}
                    style={{ margin: 10, }}
                  /> */}
                <Ionicons name='menu' size={25} style={{margin:10}} />
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
                    : '58%',
                },
                {
                  height: showMap.isFocused
                    ? '57%'
                    : '57%',
                },
                {
                  height: showMap2.isFocused
                    ? '57%'
                    : '57%',
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
                      title={"Friday Night show -212"}
                      description={"Via Alfonso"} />
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
                      title={"Corso di Pilates"}
                      description={"Corso"} />
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
                      title={"Castelfranco MO"}
                      description={"Sport"} />
                  </MapView>
                </View>

                <View style={[styles.tabMain, {
                  position: 'absolute',
                  bottom: 20,
                  width: '40%',
                  left: '30%',
                  borderRadius: 20,
                  backgroundColor: '#C6C4C5'
                }]}>
                  <TouchableOpacity

                    onPress={eventHandler} style={[styles.tabs, {
                      backgroundColor: event.isFocused
                        ? '#28CCF2'
                        : '#C6C4C5',
                      // borderBottomWidth: 1,
                      // isFocused
                    }]}>
                    <Text style={[styles.tabMap,]}>Events</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={activityHandler} style={[styles.tabs, {
                    backgroundColor: activity.isFocused
                      ? '#28CCF2'
                      : '#C6C4C5',
                  }]}>
                    <Text style={[styles.tabMap,]}>Activities</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {showMap
                ? <View style={[styles.bottomSec]}>
                  <View style={[{ paddingHorizontal: 30, width: '100%', }]}>
                    <Text style={styles.headingText}>
                      Friday Night show -212 </Text>
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
                        <Text style={styles.discriptionText}>
                          Serata divertente e coinvolgente, con ospiti e show.
                          Cena spettacolo animata.
                          Bar premium, con gli artisti internazionali dello Show Dinner.
                          Ingresso .....
                        </Text>

                        <TouchableOpacity
                          onPress={() => setMapModal(!mapModal)}

                          style={[styles.btn, { width: '70%' }]}>
                          <LinearGradient
                            start={{ x: 0, y: 0.2 }}
                            end={{ x: 0, y: 0.9 }}
                            colors={['#33CC8F', '#28CCF2']}
                            style={styles.gradient1}>
                            <Text style={[styles.nextBtnText]}>See details</Text>

                          </LinearGradient>
                        </TouchableOpacity>

                      </View>
                      <View style={{ width: '30%' }}>
                        <Image
                          source={require('../../../Assets/image46.png')}
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
                        <Text style={styles.discriptionText}>
                          Red Maple Ranch delle giornate e serate mondane, dove puoi
                          beccare fagia...
                        </Text>

                        <TouchableOpacity
                          onPress={() => setMapModal(!mapModal)}

                          style={[styles.btn, { width: '70%' }]}>
                          <LinearGradient
                            start={{ x: 0, y: 0.2 }}
                            end={{ x: 0, y: 0.9 }}
                            colors={['#33CC8F', '#28CCF2']}
                            style={styles.gradient1}>
                            <Text style={[styles.nextBtnText]}>See details</Text>

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
                        <Text style={styles.discriptionText}>
                          Corso di Pilates delle giornate e serate mondane, dove puoi
                          beccare fagia...
                        </Text>

                        <TouchableOpacity
                          onPress={() => setMapModal(!mapModal)}

                          style={[styles.btn, { width: '70%' }]}>
                          <LinearGradient
                            start={{ x: 0, y: 0.2 }}
                            end={{ x: 0, y: 0.9 }}
                            colors={['#33CC8F', '#28CCF2']}
                            style={styles.gradient1}>
                            <Text style={[styles.nextBtnText]}>See details</Text>

                          </LinearGradient>
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
          </View>
        </View>
      </Modal >
    </View >
  );
};

export default Event;

const styles = StyleSheet.create({
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
  discriptionText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
  topsec: {
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
  main: {
    backgroundColor: '#28282B',
    height: '100%',
  },
  topSec: {
    // height: '6%',
    flexDirection: 'row',
    width: '90%',
    marginTop: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 13,
    // backgroundColor: 'white',
    alignSelf: 'center',
    elevation: 5,
  },
  innseserch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    width: '85%',
    borderRadius: 15,
    paddingHorizontal: 12

  },
  // ----------------
  SearchView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#00000090',
  },
  SearchModal: {
    margin: 18,
    // backgroundColor: 'red',
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 25,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // width: '100%',
  },
  inputMainS: {
    width: '80%',
    flexDirection: 'row',
    //  borderRightWidth:2,
    //  borderRightColor:'red',
    alignItems: 'center',

  },
  topSecS: {
    // height: '10%',
    flexDirection: 'row',
    // width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    // alignContent: 'center',
    justifyContent: 'center',
    // marginVertical: 15,

    alignSelf: 'center',
  },

  inputS: {
    width: '80%',
    // justifyContent: 'center',
  },
  gradient1: {
    width: '100%',
    height: 43,
    padding: 8,
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  borderBtm: {
    borderBottomColor: '39393D',
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    width: '90%',
  },
  btntextS: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 27,
    textTransform: 'uppercase',
  },
  // -----------

  middleSec: {
    height: '84%',
  },
  bottemSec: {
    // height: '9%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: -10,
    left: 0,
    zIndex: 50
  },
  tabMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabs: {
    padding: 5,
    height: 37,
    width: '50%',
    borderRadius: 15,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // fontSize: 18,
    // fontWeight: '600',
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
    // textTransform: 'uppercase',
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
    marginHorizontal: 15,
    marginVertical: 4,
    position: 'relative',
    backgroundColor: '#39393D',
    borderRadius: 15,
  },
  img: {
    width: '100%',
    height: 210,
    borderRadius: 15,
    objectFit: 'cover',
    resizeMode: 'cover',
  },
  inputMain: {
    width: '80%',
    flexDirection: 'row',
    height: 51,
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
    padding: 15,
    margin: 16,
    // height: '100%',
    // width: '100%',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    paddingHorizontal: 15,
    shadowColor: '#000',
    // justifyContent:'center',
    alignSelf: 'center',
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
    // elevation:5,
    zIndex: 5
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
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9'
  },
  checkboxSect: {
    justifyContent: 'center',
    width: '50%',
  },
  checkbox: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: '#D9D9D9',
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
    borderRadius: 13,
    shadowColor: 'black',
    justifyContent: 'center',
    // alignItems: 'center',
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
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  bar: {

    position: 'relative',
    justifyContent: 'center',

  },
  inerCircle: {
    borderRadius: 50,
    width: 20,
    height: 20,
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
    zIndex: 50,
    position: 'absolute',
    left: 50,
    elevation: 50,
  },
  strightBar: {
    width: 1,
    height: 50,
    backgroundColor: '#D3D3D3'
  },
  // pop up 
  rdioflex: {
    marginTop: 15,
    width: '80%',
    backgroundColor: '#ABABAB8A',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8
  },
  radioText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
  },
  centeredView: {
    flex: 1,
    backgroundColor: '#00000090',
    justifyContent: 'center'
  },
  findView: {
    padding: 20,
    height: '70%',
    width: '80%',
    backgroundColor: '#D9D9D9',
    borderRadius: 40,
    // borderTopRightRadius: 60,
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

  btnText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    color: 'white',
  },
  serSec: {
    width: '100%',
    paddingHorizontal: 8,
    // marginTop: 15,
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 6,
    borderRadius: 20,
    // backgroundColor: '#EFEFEF',
    top: 10
  },
  innseserch: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#EFEFEF',
    width: '85%',
    borderRadius: 15,
  },
  tabMap: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  },
  nextBtnText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    color: '#000000',
  },
});
