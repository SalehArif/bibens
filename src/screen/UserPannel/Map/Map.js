/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LinearGradient from 'react-native-linear-gradient';

const Map = ({ navigation }) => {
  const [search, setSearch] = useState();
  const [modalSearch, setModalModalSearch] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showMap1, setShowMap1] = useState(false);
  const [showMap2, setShowMap2] = useState(false);
  const [event, setEvent] = useState(false);
  const [activity, setActivity] = useState(false);
  const [location, setLocation] = useState(
    {
      lat: 37.78825,
      lng: -122.4324,
    }
  );
  const [locationName, setLocationName] = useState();

  useEffect(() => {
    activityHandler()
    // map1Handler()
  }, []);
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
  const eventHandler = () => {
    setEvent({ isFocused: true })
    setActivity({ isFocused: false })
  };

  const activityHandler = () => {
    setActivity(true, { isFocused: true });
    setEvent(false, { isFocused: false });
    // setEvent({isFocused: false})
    setActivity({ isFocused: true })
  };
  return (
    <View
    // style={styles.topSec}
    >

      <View style={[styles.serSec]}>
        <TouchableOpacity
          styles={{ width: '15%', marginTop: 20, }}
          onPress={() => navigation.goBack()}>
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
            style={{ marginRight: 10, margin: 10 }}
          /> */}
          <Feather name={'search'} size={25} color={'#2B2B2B'} style={{ marginLeft: 10 }} />

          <GooglePlacesAutocomplete
            autoFocus={false}
            fetchDetails={true} 
            placeholder={'Search'}
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
            
            textInputProps = {{
              color: '#5d5d5d',
              paddingBottom:4,
              paddingTop:8,
              fontSize: 22,
              backgroundColor: '#EFEFEF',
            }}
            styles={{
              textInputContainer: {
                backgroundColor: '#EFEFEF',
              },
              predefinedPlacesDescription: {
                color: '#EFEFEF',
                backgroundColor: '#EFEFEF',
              },
            }}
          />
          <View style={{
            height: 29,
            width: 1,
            backgroundColor: '#C4C4C4', marginRight: 5
          }}></View>

          <Ionicons name='menu' size={25} style={{marginRight:10}} />
        </View>
      </View>
      
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'silver'
        }}>
        <View style={[styles.container,
        { height: showMap.isFocused ? '57%' : '100%' },
        { height: showMap1.isFocused ? '57%' : '100%' },
        { height: showMap2.isFocused ? '57%' : '100%' }]}>
          <MapView
            showsUserLocation={true}
            showsMyLocationButton={true}
            followsUserLocation={true}
            showsCompass={true}
            // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            // coordinate={location}
            region={{
              latitude: location.lat,
              longitude: location.lng,
              latitudeDelta: 0.075,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker coordinate={{ latitude: 37.78829, longitude: -122.4324 }}
              // pinColor={"purple"} // any color
              onPress={() => map1Handler()}
              title={"Modena MO"}
              description={"Riding school"} />
            <Marker coordinate={{ latitude: 37.79825, longitude: -122.4324 }}
              // pinColor={"purple"} // any color
              onPress={() => map2Handler()}
              title={" Red Maple Ranch"}
              description={"Maneggio"} >

            </Marker>
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
            <Marker coordinate={{ latitude: 34.1687502, longitude: 73.2214982 }}
              // pinColor={"purple"} // any color
              onPress={() => map3Handler()}
              title={"Car Show"}
              description={"Race"} />

          </MapView>
        </View>
        <View style={styles.tabMain}>
          <TouchableOpacity
            onPress={eventHandler} style={[styles.tabs, {
              backgroundColor: event.isFocused
                ? '#28CCF2'
                : '#C6C4C5',
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
          <View style={[{ paddingHorizontal: 30, width: '100%' }]}>
            <Text style={styles.headingText}>SAGRA DELL'UVA E DEL LAMBRUSCO GRASPAROSSA DI CASTELVETRO</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: 15,
              }}>
              <View style={{ width: '70%', paddingRight: 12 }}>
                    <View style={{justifyContent:"center", marginVertical:5}}>
                        <View style={{flexDirection:"row", alignItems:"center"}} >
                            <Text style={[styles.headingText,{marginRight:5, lineHeight:22}]}>4.5</Text>
                            <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                            <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                            <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                            <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                            <FontAwesome name={'star-o'} size={14} color={'#FFCE31'} />
                        </View>
                        <Text style={[styles.disText,{fontSize:14}]}>Based on 34 Reviews</Text>
                    </View>
                <Text style={styles.discriptionText}><SimpleLineIcons name={'location-pin'} size={13} color={'white'} /> Castellarano, MO</Text>
                <View
                  style={{ flexDirection: 'row', justifyContent:"space-evenly" }}>
                  <Text style={styles.discriptionText}>On 16 Sept </Text>
                  <Text style={styles.discriptionText}>from 19:00 to 24:00</Text>
                </View>
                
                <View
                  style={{ flexDirection: 'row', }}>
                  <Text style={styles.discriptionText}>Type :  </Text>
                  <Text style={styles.discriptionText}>Maneggio</Text>
                </View>

                <TouchableOpacity
                  onPress={() => navigation.navigate("EventDetail")}
                  style={[styles.btn, { width: '70%', height:40 }]}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#2FC598', '#149AD4']}
                    style={styles.gradient2}>
                        <Text style={[styles.nextBtnText]}>SEE DETAILS</Text>
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
      {showMap1 ?
        <View style={[styles.bottomSec]}>
          <View style={[{ paddingHorizontal: 30, width: '100%' }]}>
            <Text style={styles.headingText}>Red Maple Ranch</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: 15,
              }}>
              <View style={{ width: '70%', paddingRight: 12 }}>
                <View style={{justifyContent:"center", marginVertical:5}}>
                    <View style={{flexDirection:"row", alignItems:"center"}} >
                        <Text style={[styles.headingText,{marginRight:5, lineHeight:22}]}>4.5</Text>
                        <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                        <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                        <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                        <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                        <FontAwesome name={'star-o'} size={14} color={'#FFCE31'} />
                    </View>
                    <Text style={[styles.disText,{fontSize:14}]}>Based on 34 Reviews</Text>
                </View>
                <Text style={styles.discriptionText}><SimpleLineIcons name={'location-pin'} size={13} color={'white'} /> Pringnao MO</Text>
                <View
                  style={{ flexDirection: 'row', }}>
                  <Text style={styles.discriptionText}>From 10 Dec to </Text>
                  <Text style={styles.discriptionText}>30 Mar</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', }}>
                  <Text style={styles.discriptionText}>Type :  </Text>
                  <Text style={styles.discriptionText}>Maneggio</Text>
                </View>
                {/* <Text style={styles.discriptionTextB}>
                  Red Maple Ranch delle giornate e serate mondane, dove puoi
                  beccare fagia...
                </Text> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate("ActivityDetail")}
                  style={[styles.btn, { width: '70%', height:40 }]}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#2FC598', '#149AD4']}
                    style={styles.gradient2}>
                        <Text style={[styles.nextBtnText]}>SEE DETAILS</Text>
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
            style={[{ paddingHorizontal: 30, width: '100%', }]}>
            <Text style={styles.headingText}>
              212 Modena Duecentododici SOUP
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: 15,
              }}>
              <View style={{ width: '70%', paddingRight: 12 }}>
                  <View style={{justifyContent:"center", marginVertical:5}}>
                    <View style={{flexDirection:"row", alignItems:"center"}} >
                        <Text style={[styles.headingText,{marginRight:5, lineHeight:22}]}>4.5</Text>
                        <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                        <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                        <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                        <FontAwesome name={'star'} size={14} color={'#FFCE31'} style={{ marginRight: 6 }} />
                        <FontAwesome name={'star-o'} size={14} color={'#FFCE31'} />
                    </View>
                    <Text style={[styles.disText,{fontSize:14}]}>Based on 34 Reviews</Text>
                </View>
                <Text style={styles.discriptionText}><SimpleLineIcons name={'location-pin'} size={13} color={'white'} /> Modena MO</Text>
                <View
                  style={{ flexDirection: 'row',}}>
                  <Text style={styles.discriptionText}>From :</Text>
                  <Text style={styles.discriptionText}>16 Sept to 20 Sept </Text>
                </View>
                {/* <View
                  style={{ flexDirection: 'row',}}>
                  <Text style={styles.discriptionText}></Text>
                  <Text style={styles.discriptionText}>20:00 to 24:00</Text>
                </View> */}
                <View
                  style={{ flexDirection: 'row', }}>
                  <Text style={styles.discriptionText}>Type :</Text>
                  <Text style={styles.discriptionText}> Riding school</Text>
                </View>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Event1")}
                  style={[styles.btn, { width: '70%', height:40 }]}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#2FC598', '#149AD4']}
                    style={styles.gradient2}>
                        <Text style={[styles.nextBtnText]}>SEE DETAILS</Text>
                  </LinearGradient>
                </TouchableOpacity>

              </View>
              <View style={{ width: '30%' }}>
                <Image
                  source={require('../../../Assets/image8.png')}
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
                <Image
                  source={require('../../../Assets/search.png')}
                  style={{ marginRight: 10 }}
                />
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
                <Image
                  source={require('../../../Assets/menu.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.borderBtm} />
            <View style={styles.topSecS}>
              <View style={styles.inputMainS}>
                <Image
                  source={require('../../../Assets/search.png')}
                  style={{ marginRight: 10 }} />
                <GooglePlacesAutocomplete
                  autoFocus={false}
                  fetchDetails={true}
                  placeholder={'Discoteca\nModena'}
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
                style={{ position: 'absolute', left: 15 }}
              />
              <Text style={[styles.btntextS, { alignSelf: 'center' }]}>SEARCH</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  topSecS: {
    position: 'absolute',
    top: 10,
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
  btntextS: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 27,
    textTransform: 'uppercase',
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

  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  topSec: {
    // height: '6%',
    flexDirection: 'row',
    width: '85%',
    marginTop: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 13,
    alignSelf: 'center',
    elevation: 5,
    // position: 'absolute',
    // top: 20,
    justifyContent: 'space-around',
    zIndex: 6,
    borderRadius: 10,
  },
  // topSec: {
  //   backgroundColor: '#28282B',
  // },
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
  tabMain: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    width: '40%',
    left: '30%',
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
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: '#25B3AF',
  },

  btntext: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  },
  headingText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    color: 'white',
  },
  discriptionText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
  discriptionTextB: {
    paddingVertical: 20,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
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
    textTransform: 'uppercase',
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
  },
  inputText: {
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
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    zIndex: 6,
    borderRadius: 20,
    top: 15
  },
  innseserch: {
    flexDirection: 'row',
    backgroundColor: '#EFEFEF',
    width: '85%',
    borderRadius: 15,
alignItems:'center'
  },
  
  gradient2: {
    width: '100%',
    height: '100%',
    flexDirection:"row",
    justifyContent:"center",
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  disText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: 'silver',
}
});
