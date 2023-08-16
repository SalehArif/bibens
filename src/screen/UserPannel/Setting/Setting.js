/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Menu from '../../../component/menu/Topmenu';
import LinearGradient from 'react-native-linear-gradient';

const Setting = ({ navigation }) => {
  const [modalShare, setModalShare] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={{ backgroundColor: '#28282B' }}>
      <View style={styles.settingsMenu}>
        <Text style={styles.HeadingText}>Settings</Text>
        <View style={styles.borderBottem}></View>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            paddingHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}></TouchableOpacity>
        <View style={{ width: '90%' }}>
          <TouchableOpacity
            style={[styles.curnt_Bal_main]}
            onPress={() => navigation.navigate('AppInfo')}>
            <Entypo name={'info-with-circle'} size={30} color={'#25B3AF'} />
            <Text style={styles.BalanceText}>App Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.curnt_Bal_main]}
            onPress={() => setLanguageOpen(!languageOpen)}>
            <MaterialCommunityIcons name={'web'} size={30} color={'#25B3AF'} />
            <Text style={styles.BalanceText}>Language</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.curnt_Bal_main]}
            onPress={() => navigation.navigate('PremiumVersion')}>
            <EvilIcons name={'star'} size={30} color={'#25B3AF'} />
            <Text style={styles.BalanceText}>Premium Version</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.curnt_Bal_main]}
            onPress={() => navigation.navigate('PaymentMethod')}>
            <MaterialIcons name={'credit-card'} size={30} color={'#25B3AF'} />
            <Text style={styles.BalanceText}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.curnt_Bal_main]}
            onPress={() => navigation.navigate('Messages')}>
            <Image
              source={require('../../../Assets/text.png')}
              style={[styles.img, { height: 30, width: 30 }]}
            />
            <Text style={styles.BalanceText}>Message </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.curnt_Bal_main]}
            onPress={() => navigation.navigate('IstIntro')}
          >
            <MaterialIcons name={'logout'} size={30} color={'#25B3AF'} />
            <Text style={styles.BalanceText}>Log Out </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.curnt_Bal_main]}
            onPress={() => setModalShare(!modalShare)}>
            <MaterialIcons
              name={'person-outline'}
              size={30}
              color={'#25B3AF'}
            />
            <Text style={styles.BalanceText}>Delete Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottemSec}>
          <Menu navigation={navigation} />
        </View>
      </View>
      {/* ------Delete profile model------- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalShare}
        onRequestClose={() => {
          setModalShare(!modalShare);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeadingText1}>BEFORE YOU GO..</Text>
            <View style={[styles.mainMenu, { padding: 7 }]}>
              <Text
                style={[styles.BalanceText, { color: 'black', paddingBottom: 9 }]}>
                Do you want continue and cancel your profile definetly?
              </Text>
              <Text style={[styles.BalanceText, { color: 'black', paddingBottom: 6 }]}>
                After deleted, you’ll lost all the information present in your
                profile (favorites, researches etc)
              </Text>

              <TouchableOpacity
                onPress={() => setModalShare(!modalShare)}
                style={styles.btn1}>
                <LinearGradient
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 0, y: 0.9 }}
                  colors={['#33CC8F', '#28CCF2']}
                  style={[
                    styles.gradient,
                    { justifyContent: 'center', alignSelf: 'center', },
                  ]}>
                  <Text style={[styles.btn1text]}>Cancel</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalShare(!modalShare)}
                style={[styles.btn1,]}>
                <LinearGradient
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 0, y: 0.9 }}
                  colors={['#C32D2DD6', '#C32D2DD6']}
                  style={[
                    styles.gradient,
                    { justifyContent: 'center', alignSelf: 'center', },
                  ]}>
                  <Text style={[styles.btn1text]}>Delete</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* ------Language model------- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={languageOpen}
        onRequestClose={() => { setLanguageOpen(!languageOpen) }}>
        <View style={styles.settingsMenu}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setLanguageOpen(!languageOpen)}>
            <Ionicons name={'arrow-back'} size={30} color={'white'} />
          </TouchableOpacity>
          <Text style={styles.HeadingText}>Language</Text>
          <View style={styles.borderBottem}></View>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              paddingHorizontal: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}></TouchableOpacity>

          <View style={{ width: '90%' }}>
            <View style={[styles.rdioflex]}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
                color="#25B3AF"
              />
              <Text style={styles.radioText}>English</Text>
            </View>

            <View style={styles.rdioflex}>
              <RadioButton
                buttonColor={'#2196f3'}
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
                color="#25B3AF"
                style={{ paddingVertical: 20 }}
              />
              <Text style={styles.radioText}>Italian</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  modalText: {
    marginBottom: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 9,
    lineHeight: 27,
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
  textStyle: {
    // backgroundColor:'red',
    color: 'white',
  },

  settingsMenu: {
    width: '100%',
    height: '100%',
    backgroundColor: '#28282B',
    paddingTop: 25,
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
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '700',
  },

  BalanceText: {
    // marginBottom: 35,
    paddingLeft: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },

  curnt_Bal_main: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    width: '100%',
  },
  closeBtn: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    width: 35,
    height: 35,
    // backgroundColor: '#28CCF2',
  },

  radioText: {
    paddingLeft: 9,
    // textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  borderBottem: {
    borderBottemWidth: 4,
    borderColor: '#454545',
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

  //   ---------------Model
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000090',
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
    backgroundColor: '#00000090',
  },
  btn1: {
    marginTop: 15,
    height: 40,
    width: 150,
    borderRadius: 15,
    shadowColor: 'black',
    // backgroundColor: '#28CCF2',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
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
  rdioflex: {
    marginTop: 20,

    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    // padding:20,
  },
});
