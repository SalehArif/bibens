/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Menu from '../../../component/menu/Topmenu';

const PremiumVersion = ({ navigation }) => {
  const [openCard, setopenCard] = useState(true);
  const [openYearPlan, setopenYearPlan] = useState(false);
  const [openMonthPlan, setOpenMonthPlan] = useState(false);

  const [languageOpen, setLanguageOpen] = useState(false);
  const [appInfoSubOpen, setappInfoSubOpen] = useState(false);

  const cardHandler = () => {
    setopenCard(true);
    setopenYearPlan(false);
    setOpenMonthPlan(false);
  };
  const monthCardHandler = () => {
    setopenCard(false);
    setOpenMonthPlan(true);
    setopenYearPlan(false);
  };
  const yearCardHandler = () => {
    setopenCard(false);
    setopenYearPlan(true);
    setOpenMonthPlan(false);
  };

  return (
    <View style={{ backgroundColor: '#28282B' }}>
      {/* {settingOpen ? ( */}
      <View style={styles.settingsMenu}>
        <Text style={styles.HeadingText}>Premium Version</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Setting')}
          style={{ position: 'absolute', top: 20, left: 20 }}>
          <Ionicons name={'arrow-back'} size={25} color={'white'} />
        </TouchableOpacity>
        <View style={styles.borderBottem}></View>
        <Text
          style={[styles.HeadingText, { color: '#25B3AF', paddingVertical: 10 }]}>
          Available Plans
        </Text>
        {openCard ? (
          <ScrollView style={{ width: '100%' }}>
            <LinearGradient
              colors={['#FF74E0', '#6B1A99',]}
              start={{ x: 0.0, y: .80 }} end={{ x: 0, y: 0 }}
              style={[styles.cardsub]}>
              {/* <View style={styles.cardsub}> */}
              <View style={[styles.mainMenu, { padding: 7 }]}>
                <Text style={[styles.HeadingText, { color: '#7C27AD',paddingBottom:10 }]}>
                Business Plan
                </Text>
                <Text style={styles.balvaluetxt}>
                  {' Remove all the advertisements\nfrom your screens for one entire\nmonth!'}
                </Text>
                <Text style={styles.balvaluetxt}>activate now for</Text>
                <Text style={[styles.HeadingText,{paddingTop:10}]}>1€/<Text style={styles.balvaluetxt}>month</Text></Text>
                <TouchableOpacity
                  style={[styles.btn]}
                  // onPress={() => monthCardHandler()}
                  onPress={() => monthCardHandler()}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.9 }}
                    colors={['#7C27AD', '#F951D4']}
                    style={[styles.gradient,]}>
                    <Text style={[styles.btnText]}>
                      DETAILS AND ACTIVATION
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              {/* </View> */}
            </LinearGradient>

            <LinearGradient
              colors={['#00FFFF', '#2939CD',]}
              // start={{ x: 0, y: 0.1 }} end={{ x: 0, y: 0 }}
              start={{ x: 0.0, y: .80 }} end={{ x: 0, y: 0 }}
              style={[styles.cardsub]}>
              {/* <View style={styles.cardsub}> */}
              <View style={[styles.mainMenu,
              { padding: 7 }
              ]}>
                <Text style={[styles.HeadingText, { color: '#2939CD' }]}>
                  Premium Version
                </Text>
                <Text style={styles.balvaluetxt}>
                 {'Remove all the advertisements\nfrom your screens for one entire\nyear!'}
                </Text>
                <Text style={styles.balvaluetxt}>activate now for</Text>
                <Text style={[styles.HeadingText,{paddingTop:10}]}>8€/<Text style={styles.balvaluetxt}>anno</Text></Text>
                <TouchableOpacity
                  style={[styles.btn]}
                  onPress={() => yearCardHandler()}
                  colors={['#FF74E0', '#6B1A99',]}
                  start={{ x: 0.0, y: .80 }} end={{ x: 0, y: 0 }}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.5 }}
                    colors={['#2939CD', '#32C3D0E5']}
                    style={[styles.gradient,]}>
                    <Text style={[styles.btnText]}>
                      DETAILS AND ACTIVATION
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              {/* </View> */}
            </LinearGradient>
          </ScrollView>
        ) : null}

        {openMonthPlan ? (
          <LinearGradient
            style={[styles.cardsub]}
            colors={['#7C27AD', '#F951D4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.1, y: 1 }}>
            {/* <View style={[styles.cardsub]}> */}
            <View style={[styles.mainMenu, { padding: 7 }]}>
              <Text style={[styles.HeadingText, { color: '#7C27AD',paddingBottom:10 }]}>
                Premium Version
              </Text>
              <Text style={styles.balvaluetxt}>
                {'Remove all the advertisements\nfrom your screens for one entire\nmonth!'}
              </Text>
              <Text style={styles.balvaluetxt}>activate now for</Text>
              <Text style={[styles.HeadingText,{paddingTop:10}]}>1€/<Text style={styles.balvaluetxt}>month</Text></Text>
              <View style={styles.flex}>


                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => navigation.navigate('PaymentMethod')}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#7C27AD', '#F951D4']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>ACTIVE NOW</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => cardHandler()}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.6 }}
                    colors={['#7C27AD', '#F951D4']}
                    style={[styles.gradient,{borderRadius:10}]}>
                    <Text style={[styles.inputText]}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
          </LinearGradient>
        ) :
          null}
        {openYearPlan ? (
          <LinearGradient
            style={[styles.cardsub]}
            colors={['#2939CD', '#34DDE8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.1, y: 1 }}>
            <View style={[styles.mainMenu, { padding: 7 }]}>
              <Text style={[styles.HeadingText, { color: '#2939CD' }]}>
                Premium Version
              </Text>
              <Text style={styles.balvaluetxt}>
               {' Remove all the advertisements\nfrom your screens for one entire\nyear!'}
              </Text>
              <Text style={styles.balvaluetxt}>activate now for</Text>
              <Text style={[styles.HeadingText,{paddingTop:10}]}> 8€/<Text style={styles.balvaluetxt}>anno</Text></Text>
              <View style={styles.flex}>
                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => navigation.navigate('PaymentMethod')}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#2939CD', '#32C3D0E5']}
                    style={[styles.gradient,{borderRadius:10}]}>
                    <Text style={[styles.inputText]}>ACTIVE NOW</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => cardHandler()}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.6 }}
                    colors={['#2939CD', '#32C3D0E5']}
                    style={[styles.gradient, { padding: 10,borderRadius:10 }]}>
                    <Text style={[styles.inputText]}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
          </LinearGradient>
        ) :
          null}
      </View>
    </View>
  );
};

export default PremiumVersion;

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: '#00000090',
    height: '95%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#28CCF2',
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClose: {
    // backgroundColor: '#FF5757',
  },
  textStyle: {
    // backgroundColor:'red',
    color: 'white',
  },

  settingsMenu: {
    width: '100%',
    height: '100%',
    backgroundColor: '#28282B',
    // borderRadius: 20,
    paddingTop: 25,
    // justifyContent:'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
    bottom: 0,
  },

  HeadingText: {
    // marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '700',
  },

  BalanceText: {
    // marginBottom: 35,
    paddingLeft: 9,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },

  blueColor: {
    backgroundColor: '#28CCF2',
  },
  greenColor: {
    backgroundColor: '#75d481',
  },
  orangeColor: {
    backgroundColor: '#ed5f1e',
  },

  //
  flex: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // paddingVertical: 20
  },

  balvaluetxt: {
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    paddingBottom: 15,
  },

  // Button

  buttonConfrm: {
    alignSelf: 'center',
    marginVertical: 10,

    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 40,
    elevation: 2,
    color: '#28CCF2',
    backgroundColor: '#28CCF2',
  },

  closeBtn: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    width: 35,
    height: 35,
    // backgroundColor: '#28CCF2',
  },
  buttonText: {
    fontWeight: '900',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  canclebuttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  borderBottem: {
    borderBottemWidth: 4,
    borderColor: 'silver',
    borderBottem: 3,
    // borderColor: 'white',
    borderBottomWidth: 1,
    // alignSelf:'flex-end'
    paddingVertical: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottemSec: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  appInfoMenu: {
    // position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // margin: 20,
    backgroundColor: '#28282B',
    // borderRadius: 20,
    paddingTop: 25,
    // justifyContent:'center',
    alignItems: 'center',
    shadowColor: '#000',

    // position: 'relative',
    bottom: 0,
  },
  //   ---------------Model
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    // backgroundColor: '#7F000000',
    backgroundColor: 'transparent',
    // opacity: 0.6,
    // width:'95%',
    height: '90%',
  },
  modalView: {
    opacity: 1,
    zIndex: 2,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    height: '50%',
  },
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 22,
    // display: 'flex',
    width: '95%',
    // height:'90%'
  },
  btn1: {
    marginTop: 15,
    height: 40,
    // width: '70%',
    borderRadius: 15,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '600',
    // boxShadow: 0 10 35 rgba(111, 126, 201, 0.25),
    // background: linear-gradient(180deg, #1396D9 0%, #32CB90 100%),
  },
  btn1text: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: 'white',
  },
  modalHeadingText1: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 34,
    color: '#000000',
  },
  //   --------------Modal-------------------
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 22,
    // display: 'flex',
    width: '95%',
    // height:'90%'
  },
  modalView1: {
    margin: 20,
    backgroundColor: 'white',
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
    // height: '40%',
  },
  modalHeadingText1: {
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 38,
    /* identical to box height */

    color: '#FFFFFF',
  },
  activityEventSection1: {
    // borderLeftWidth: 3,
    alignItems: 'center',
    // backgroundColor: 'red',
    // borderLeftColor: 'white',
    // width: '24%',
    alignSelf: 'center',
    padding: 5,
  },
  circle: {
    height: 85,
    width: 85,
    backgroundColor: '#28CCF2',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  },
  btnCancle: {
    marginTop: 20,
    // height: 40,
    // width: '70%',
    padding: 10,
    borderRadius: 15,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
    paddingHorizontal: 5,
    color: 'white',
  },
  btnText:{
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
    color: 'white',
  },
  card: {
    margin: 20,
    // backgroundColor: '#6B1A99',
    borderRadius: 20,
    width: '80%',
    // borderColor: '#6B1A99',
    borderWidth: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    alignSelf: 'center',
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   // height: 2,
    // },
  },
  btn: {
    marginTop: 15,
    alignSelf: 'center',
    height: 30,
    width: '62%',
    borderRadius: 20,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    marginBottom: 10,
    justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    // backgroundColor:'red',
  },
  cardsub: {
    width: '90%', alignSelf: 'center', borderRadius: 20, margin: 10
  }
  ,
  mainMenu: {
    backgroundColor: '#28282B',
    margin: 15,
    borderRadius: 20
  }
});
