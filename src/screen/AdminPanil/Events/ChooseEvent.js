import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const ChooseEvent = ({navigation}) => {
  const [event, setEvent] = React.useState(true);
  const [activity, setActivity] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selected, setSelected] = React.useState();

  React.useEffect(() => {
    eventHandler();
  }, []);
  const eventHandler = () => {
    setEvent(true);
    setActivity(false);
    setEvent({isFocused: true});
  };
  const activityHandler = () => {
    setActivity(true, {isFocused: true});
    setEvent(false, {isFocused: false});
    setActivity({isFocused: true});
  };

  return (
    <View style={styles.centeredView2}>
      <Text style={[styles.heading, {marginTop:10}]}>
        Select the activity you would like to sponsorize:
      </Text>
      <ScrollView style={styles.modalView2}>
        {/* 
					<TouchableOpacity
						onPress={()=> setSelected(-1)}
					>
						<LinearGradient
										start={{ x: 0, y: 0 }}
										end={{ x: 0, y: 1 }}
										colors={['#33CC8F','#28CCF2']}
										style={[styles.gradient,{ borderRadius:20, marginTop:40}]}>
									<AntDesign name='check' size={50} color={"white"} />
							</LinearGradient>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={()=> setSelected(0)}
					>
						<LinearGradient
										start={{ x: 0, y: 0 }}
										end={{ x: 0, y: 1 }}
										colors={['#BBB7B7','#BBB7B7']}
										style={[styles.gradient,{ borderRadius:20, marginTop:40}]}>
									<AntDesign name='check' size={50} color={"white"} />
							</LinearGradient>
					</TouchableOpacity>
					 */}

        <View style={styles.middleSec}>
          <View style={styles.tabMain}>
            <TouchableOpacity
              onPress={eventHandler}
              style={[
                styles.btn1,
                {
                  borderBottomColor: event.isFocused ? '#22AEB3' : '#28282B',
                  borderBottomWidth: 1,
                },
              ]}>
              <Text
                style={[
                  styles.btn1text,
                  {
                    color: event.isFocused ? '#22AEB3' : 'white',
                    // borderBottomWidth: 1,
                  },
                ]}>
                {' '}
                Events
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={activityHandler}
              style={[
                styles.btn1,
                {
                  borderBottomColor: activity.isFocused ? '#22AEB3' : '#28282B',
                  borderBottomWidth: 1,
                },
              ]}>
              <Text
                style={[
                  styles.btn1text,
                  {
                    color: activity.isFocused ? '#22AEB3' : 'white',
                    // borderBottomWidth: 1,
                  },
                ]}>
                Activities
              </Text>
            </TouchableOpacity>
          </View>
          {/* ------ */}
          {event ? (
            <ScrollView>
              <TouchableOpacity
                key={0}
                onPress={() => setSelected(0)}
                style={[styles.card, selected == 0 ? styles.border : null]}>
                <View style={styles.heart}>
                  <View
                    style={[
                      styles.heart,
                      {backgroundColor: '#24BDDF', padding: 0, height: 25},
                    ]}>
                    <TouchableOpacity styles={{zIndex: 5}}>
                      <Text
                        style={[
                          styles.disText,
                          {
                            color: 'white',
                            //  padding: 10
                          },
                        ]}>
                        New
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Image
                  source={require('../../../Assets/image46.png')}
                  style={styles.img}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={styles.headingText}>
                      Friday Night Show - 212
                    </Text>
                    <Text style={styles.disText}>
                      <MaterialIcons
                        name={'location-pin'}
                        size={13}
                        color={'white'}
                      />
                      Via Alfonso Paltrinieri
                    </Text>
                    <Text style={styles.disText}>15 Dec</Text>
                  </View>
                  {/* <View style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems:"flex-end"
					}}> */}
                  {selected == 0 ? (
                      <TouchableOpacity
                        style={{backgroundColor: '#2DC19D',borderRadius: 5, marginBottom:30, marginTop:5}}
                        onPress={() => setSelected(-1)}>
                        <AntDesign
                          name="check"
                          style={{
                            // backgroundColor: 'white',
                            width: '100%',
                            alignSelf: 'center',
                          }}
                          size={30}
                          color={'white'}
                        />
                      </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={{backgroundColor: '#BBB7B7', borderRadius: 5, marginBottom:30, marginTop:5}}
                      onPress={() => setSelected(0)}>
                      <AntDesign name="check" size={30}
					 	style={{
                            // backgroundColor: 'white',
                            width: '100%',
                            // alignSelf: 'center',
                          }} 
					  color={'white'} />
                    </TouchableOpacity>
                  )}
                  {/* </View> */}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.card, selected == 1 ? styles.border : null]}
                key={1}
                onPress={() => setSelected(1)}>
                <View style={styles.heart}>
                  <TouchableOpacity styles={{paddingVertical: 20, zIndex: 5}}>
                    <Ionicons name={'heart'} size={30} color={'#EE1F1F'} />
                  </TouchableOpacity>
                </View>
                <Image
                  source={require('../../../Assets/1.png')}
                  style={styles.img}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={styles.headingText}>Saturday Night Party</Text>
                    <Text style={styles.disText}>
                      <MaterialIcons
                        name={'location-pin'}
                        size={13}
                        color={'white'}
                      />
                      Modena MO
                    </Text>
                    <Text style={styles.disText}>25 Mar</Text>
                  </View>
                  {selected == 1 ? (
						<TouchableOpacity
						  style={{backgroundColor: '#2DC19D',borderRadius: 5, marginBottom:30, marginTop:5}}
						  onPress={() => setSelected(-1)}>
						  <AntDesign
							name="check"
							style={{
							  // backgroundColor: 'white',
							  width: '100%',
							  alignSelf: 'center',
							}}
							size={30}
							color={'white'}
						  />
						</TouchableOpacity>
					) : (
					  <TouchableOpacity
						style={{backgroundColor: '#BBB7B7', borderRadius: 5, marginBottom:30, marginTop:5}}
						onPress={() => setSelected(1)}>
						<AntDesign name="check" size={30}
						   style={{
							  // backgroundColor: 'white',
							  width: '100%',
							  // alignSelf: 'center',
							}} 
						color={'white'} />
					  </TouchableOpacity>
					)}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelected(2)}
                key={2}
                style={[styles.card, selected == 2 ? styles.border : null]}>
                <View style={styles.heart}>
                  <TouchableOpacity styles={{paddingVertical: 20, zIndex: 5}}>
                    <Ionicons name={'heart'} size={30} color={'#EE1F1F'} />
                  </TouchableOpacity>
                </View>
                <Image
                  source={require('../../../Assets/image35.png')}
                  style={styles.img}
                />
                <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                  <View>
                    <Text style={styles.headingText}>Red Maple Ranch</Text>
					<Text style={styles.disText}>Pringnao MO</Text>
                  </View>
				  {selected == 2 ? (
						<TouchableOpacity
						  style={{backgroundColor: '#2DC19D',borderRadius: 5, marginBottom:30, marginTop:5}}
						  onPress={() => setSelected(-1)}>
						  <AntDesign
							name="check"
							style={{
							  // backgroundColor: 'white',
							  width: '100%',
							  alignSelf: 'center',
							}}
							size={30}
							color={'white'}
						  />
						</TouchableOpacity>
					) : (
					  <TouchableOpacity
						style={{backgroundColor: '#BBB7B7', borderRadius: 5, marginBottom:30, marginTop:5}}
						onPress={() => setSelected(2)}>
						<AntDesign name="check" size={30}
						   style={{
							  // backgroundColor: 'white',
							  width: '100%',
							  // alignSelf: 'center',
							}} 
						color={'white'} />
					  </TouchableOpacity>
					)}
                </View>
              </TouchableOpacity>
            </ScrollView>
          ) : null}
          {/* -------- */}
          {activity ? (
            <ScrollView>
              <TouchableOpacity
                onPress={() => setSelected(0)}
                key={0}
                style={[styles.card, selected == 0 ? styles.border : null]}>
                <View style={styles.heart}>
                  <TouchableOpacity
                    styles={{paddingVertical: 20, zIndex: 5}}
                    // onPress={() => setActivityDetails(false)}
                  >
                    <Ionicons name={'heart'} size={30} color={'#EE1F1F'} />
                  </TouchableOpacity>
                </View>
                <Image
                  source={require('../../../Assets/2.png')}
                  style={styles.img}
                />
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.headingText}>Paintball</Text>
                    <Text style={styles.disText}>
                      4.9{' '}
                      <FontAwesome5 name={'star'} size={15} color={'#FFCE31'} />
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.disText}>
                      <MaterialIcons
                        name={'location-pin'}
                        size={13}
                        color={'white'}
                      />
                      Castelfranco MO
                    </Text>
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
                style={[styles.card, selected == 1 ? styles.border : null]}
                key={1}
                onPress={() => setSelected(1)}>
                <View style={styles.heart}>
                  <TouchableOpacity styles={{paddingVertical: 20, zIndex: 5}}>
                    <Ionicons name={'heart'} size={30} color={'#EE1F1F'} />
                  </TouchableOpacity>
                </View>
                <Image
                  source={require('../../../Assets/3.png')}
                  style={[styles.img]}
                />
                <View>
                  <Text style={styles.headingText}>Corso di Pilates</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.disText}>Modena MO</Text>
                    <Text style={styles.disText}>12 Dec - 18 Mar</Text>
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
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
			marginVertical:10,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '6%',
        }}>
        <TouchableOpacity
          style={[{paddingHorizontal: 5, width: '45%', borderRadius: 10}]}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#2FC598', '#149AD4']}
            style={styles.gradient1}>
            <Text
              style={[
                styles.textStyle,
                {fontFamily: 'Poppins', fontWeight: 'bold', color: 'white'},
              ]}>
              Confirm
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{paddingHorizontal: 5, width: '45%', borderRadius: 10}]}
          onPress={() => {
            navigation.goBack();
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#2FC598', '#149AD4']}
            style={styles.gradient1}>
            <Text
              style={[
                styles.textStyle,
                {fontFamily: 'Poppins', fontWeight: 'bold', color: 'white'},
              ]}>
              Cancel
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {borderRadius: 40, width: '80%', height: '45%'},
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                paddingHorizontal: 15,
                fontFamily: 'Poppins',
                marginVertical: 60,
				textAlign:"center"
              }}>
              Do you want to continue with the sponsorization of this{' '}
              {event ? 'event' : 'activity'}?
            </Text>
            <TouchableOpacity
              style={{width: '60%', height: '17%', marginVertical: '2%'}}
              onPress={() => navigation.navigate('AdminPaymentMethod')}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1.7}}
                colors={['#28CCF2', '#33CC8F']}
                style={styles.gradient}>
                <Text style={[styles.btn1text, {color: 'white'}]}>Confirm</Text>
              </LinearGradient>
              {/* <Text style={{textTransform: "uppercase", fontFamily:"Poppins", fontSize:16, fontWeight:"400"}}>go back</Text> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={[
                styles.gradient,
                {
                  width: '60%',
                  height: '17%',
                  backgroundColor: 'rgba(195,69,71,255)',
                  marginVertical: '2%',
                },
              ]}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontWeight: '400',
                  color: 'white',
                }}>
                cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChooseEvent;

const styles = StyleSheet.create({
  modalView2: {
    backgroundColor: '#28282B',
    paddingHorizontal: 15,
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
    backgroundColor: '#28282B',
  },
  middleSec: {
    height: '100%',
  },
  tabMain: {
    flexDirection: 'row',
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
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: '#25B3AF',
  },
  card: {
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 4,
    position: 'relative',
    backgroundColor: '#39393D',
    borderRadius: 15,
  },
  border: {
    borderColor: '#25B3AF',
    borderWidth: 5,
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
  disText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: 'silver',
  },

  headingText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
    color: 'white',
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 33,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    objectFit: 'cover',
    resizeMode: 'cover',
  },
  gradient1: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  modalView: {
    // margin: 20,
    marginHorizontal: 23,
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
});
