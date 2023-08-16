/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Alert,
  Modal,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Switch } from 'react-native-switch';


const Login = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPasssword, setCPasssword] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);

  // const {login} = useContext(AuthContext);

  const [openPass, setOpenPass] = useState(false);
  const [openVerification, setOpenVerification] = useState(false);
  const [openNewPass, setOpenNewPass] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // const emailHandler = (value) => {
  //     setEmail(value)

  // }
  const closeHandler = () => {
    setOpenPass(false);
    setOpenVerification(false);
    setOpenNewPass(false);
    setModalVisible(false);
    // login(email, password, navigation);
  };

  return (
    <View
      style={{
        backgroundColor: '#28282B',
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#28282B',
          height: '100%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 30,
          bottom: 0,
          width: '90%',
          // position: 'absolute',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('AdminIntro')}>
          <Ionicons
            name={'md-arrow-back-sharp'}
            size={30}
            color={'white'}
            style={{ paddingLeft: 20 }}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: '400',
            letterSpacing: 3,
            // alignSelf: 'center',
            // textAlign: 'center',
            paddingLeft: 20,
            marginTop: 40,
            marginBottom: 20,
          }}>
          Sign in
        </Text>
        {/* <Text style={styles.inputText}>Email address</Text> */}
        <View style={styles.inputMain}>
          <Image
            source={require('../../Assets/Profile.png')}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholderTextColor='#747688'
            placeholder="Employee ID"
            value={email}
            onChangeText={value => {
              setEmail(value);
            }}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            style={styles.input}
          />
        </View>
        <View style={styles.inputMain}>
          <Image
            source={require('../../Assets/Lock.png')}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="password"
            placeholderTextColor='#747688'
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            style={[styles.input, { width: '85%' }]}
          />
          <Image
            source={require('../../Assets/Hidden.png')}
          // style={{ backgroundColor:'red'}}
          />
        </View>
        <View
          style={{
            paddingVertical: 10,
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 10,
          }}>
          <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              activeText={''}
              inActiveText={''}
              backgroundActive={'#0a84ff'}
              // #30d158
              backgroundInactive={'gray'}
              circleActiveColor={'white'}
              circleInActiveColor={'white'}
              circleSize={25}
              // switchLeftPx={0.5}
              // switchRightPx={0.5}
              barHeight={26}
              switchWidthMultiplier={2.05} //2.25
          />
          <Text style={[styles.text, { color: 'white', paddingLeft:5 }]}>Remember me</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AdminEvent')}>
          <LinearGradient
            start={{ x: 0, y: 0.2 }}
            end={{ x: 0, y: 0.9 }}
            colors={['#33CC8F', '#28CCF2']}
            style={styles.gradient}>
            <Text style={[styles.btntext, { paddingRight: 30 }]}>Sign in</Text>
            <Ionicons
              name={'md-arrow-forward-circle'}
              size={30}
              color={'#28282B'}
              style={{ paddingLeft: 50, position: 'absolute', right: 20 }}
            />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setOpenPass(true);
          }}>
          <Text
            style={styles.text}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.butsec}>
          {/* <BotmSec /> */}
          <View
            style={{
              paddingVertical: 10,
              // color: 'silver',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('AdminSignup')}>
              <Text style={{ color: '#28CCF2', paddingLeft: 4 }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {openPass ? (
        <View
          style={{
            backgroundColor: '#28282B',
            width: '90%',
            height: '100%',
            position: 'absolute',
            top: 0,
          }}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => {
              setOpenPass(!openPass);
            }}>
            {/* <Ionicons name={'close'} size={30} color={'white'} /> */}
            <Ionicons
              name={'md-arrow-back-sharp'}
              size={30}
              color={'white'}
              style={{ paddingLeft: 30, paddingVertical: 20 }}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: '400',
              lineHeight: 31,
              padding: 20,
            }}>
            Reset Password
          </Text>

          <Text
            style={{
              width: '90%',
              color: 'white',
              fontSize: 18,
              fontWeight: '400',
              lineHeight: 25,
              paddingHorizontal: 20,
              // paddingVertical: 10,
              marginBottom: 30,
            }}>Please enter your email address to request a password reset.</Text>
          <View style={styles.inputMain}>
            <Image
              source={require('../../Assets/phone.png')}
              style={{ marginRight: 10 }}
            />
            <TextInput
              placeholder="Phone number"
              value={email}
              placeholderTextColor='#747688'
              onChangeText={value => {
                setEmail(value);
              }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              style={styles.input}
            /></View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setOpenVerification(true)}>
            <LinearGradient
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0, y: 0.9 }}
              colors={['#33CC8F', '#28CCF2']}
              style={styles.gradient}>
              <Text style={[styles.btntext, { paddingRight: 30 }]}>SEND</Text>
              <Ionicons
                name={'md-arrow-forward-circle'}
                size={30}
                color={'#28282B'}
                style={{ paddingLeft: 50, position: 'absolute', right: 20 }}
              />
            </LinearGradient>
          </TouchableOpacity>

        </View>
      ) : null}
      {openVerification ? (
        <View
          style={{
            backgroundColor: '#28282B',
            width: '90%',
            height: '100%',
            position: 'absolute',
            top: 0,
          }}>
          <TouchableOpacity
            style={styles.closeBtn}
            //   onPress={setOpenPass(false)}
            onPress={() => {
              setOpenVerification(!openVerification);
            }}>
            {/* <Ionicons name={'close'} size={30} color={'white'} /> */}
            <Ionicons
              name={'md-arrow-back-sharp'}
              size={25}
              color={'white'}
              style={{ paddingLeft: 20, paddingVertical: 20 }}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: '400',
              lineHeight: 31,
              // letterSpacing: 3,
              // alignSelf: 'center',
              // textAlign: 'center',
              padding: 20,
              // marginTop: 40,
              // marginBottom: 30,
            }}>
            Verification
          </Text>

          <Text
            style={{
              width: '90%',
              color: 'white',
              fontSize: 18,
              fontWeight: '400',
              lineHeight: 25,
              // letterSpacing: 3,
              // alignSelf: 'center',
              // textAlign: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,

              // marginTop: 40,
              marginBottom: 30,
            }}>
            Enter the verification code sent on your email address.
          </Text>
          <View style={styles.otpBoxesContainer}>
            {[0, 1, 2, 3].map((item, index) => (
              <TextInput
                placeholder="-"
                value={otp[index]}
                keyboardType="numeric"

                maxLength={1}
                autoFocus={index === 0 ? true : undefined}
                onChangeText={value => {
                  //   setOtp(otp.push(value));\
                  let duplicate = [...otp];
                  duplicate[index] = value;
                  setOtp(duplicate);
                }}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                style={styles.otpBox}
                key={index}
              />
            ))}
          </View>
          <TouchableOpacity
            style={[styles.btn, { height: 58, marginVertical: 20 }]}
            onPress={() => setOpenNewPass(true)}>
            <LinearGradient
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0, y: 0.9 }}
              colors={['#33CC8F', '#28CCF2']}
              style={styles.gradient}>
              <Text style={[styles.btntext, { paddingRight: 30 }]}>Continue</Text>
              <Ionicons
                name={'md-arrow-forward-circle'}
                size={35}
                color={'#28282B'}
                style={{ paddingLeft: 50, position: 'absolute', right: 20 }}
              />
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={{
              paddingVertical: 10,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{
              color: 'white', fontSize: 18,
              fontWeight: '400',
              lineHeight: 25,
            }}>Re-send code in </Text>
            <TouchableOpacity
              // onPress={() => navigation.navigate('Signup')}
              style={{}}>
              <Text style={{
                color: '#28CCF2', paddingLeft: 4, fontSize: 18,
                fontWeight: '400',
                lineHeight: 25,
              }}> 0:20</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {openNewPass ? (
        <View
          style={{
            backgroundColor: '#28282B',
            width: '90%',
            height: '100%',
            position: 'absolute',
            top: 0,
          }}>
          <TouchableOpacity
            style={styles.closeBtn}

            //   onPress={setOpenPass(false)}
            onPress={() => {
              setOpenNewPass(!openNewPass);
            }}>
            {/* <Ionicons name={'close'} size={30} color={'white'} /> */}
            <Ionicons
              name={'md-arrow-back-sharp'}
              size={25}
              color={'white'}
              style={{ paddingLeft: 20, paddingVertical: 20 }}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: '400',
              lineHeight: 31,
              padding: 20,
            }}>
            Reset Password
          </Text>

          <Text
            style={{
              width: '100%',
              color: 'white',
              fontSize: 18,
              fontWeight: '400',
              lineHeight: 25,

              paddingHorizontal: 20,
              paddingVertical: 10,

              // marginTop: 40,
              marginBottom: 30,
            }}>
            {'Please enter your new\npassword below to reset.'}
          </Text>
          <View style={styles.inputMain}>
            <Image
              source={require('../../Assets/Lock.png')}
              style={{ marginRight: 16 }}
            />
            <TextInput
              placeholder="Passsword"
              placeholderTextColor='#747688'
              value={password}
              onChangeText={value => {
                setPassword(value);
              }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              style={[styles.input, { width: '85%' }]}
            />
            <Image
              source={require('../../Assets/Hidden.png')}
            // style={{ backgroundColor:'red'}}
            />
          </View>
          <View style={styles.inputMain}>
            <Image
              source={require('../../Assets/Lock.png')}
              style={{ marginRight: 16 }}
            />
            <TextInput
              placeholder="Confirm Passsword"
              placeholderTextColor='#747688'
              value={cPasssword}
              onChangeText={value => {
                setCPasssword(value);
              }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              style={[styles.input, { width: '85%' }]}
            />
            <Image
              source={require('../../Assets/Hidden.png')}
            // style={{ backgroundColor:'red'}}
            />
          </View>
          <TouchableOpacity
            style={[styles.btn, { height: 58 }]}
            onPress={() => setModalVisible(true)}>
            <LinearGradient
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0, y: 0.9 }}
              colors={['#33CC8F', '#28CCF2']}
              style={styles.gradient}>
              <Text style={[styles.btntext, { paddingRight: 30 }]}>Close</Text>
              <Ionicons
                name={'md-arrow-forward-circle'}
                size={30}
                color={'#28282B'}
                style={{ paddingLeft: 50, position: 'absolute', right: 20 }}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      ) : null}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <LinearGradient
              style={styles.circle}
              start={{ x: 0, y: 0.1 }}
              end={{ x: 0, y: 0.8 }}
              colors={['#33CC8F', '#28CCF2']}>
              <Ionicons
                name={'ios-checkmark'}
                size={30}
                color={'white'}
              // style={{paddingLeft: 30}}
              />
            </LinearGradient>

            <Text style={styles.modalText}>Password reseted Successfully!</Text>
            <TouchableOpacity style={styles.btn} onPress={() => closeHandler()}>
              <LinearGradient
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.9 }}
                colors={['#33CC8F', '#28CCF2']}
                style={[
                  styles.gradient,
                  { justifyContent: 'center', alignSelf: 'center' },
                ]}>
                <Text style={[styles.textStyle, { paddingHorizontal: 20 }]}>
                  CLOSE
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  btn: {
    marginTop: 15,
    height: 50,
    width: '70%',
    borderRadius: 20,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btntext: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
  },
  inputMain: {
    width: '95%',
    flexDirection: 'row',
    // justifyContent:'center',
    // backgroundColor:'white'
    backgroundColor: '#fff',
    alignSelf: 'center',
    // borderWidth: 0.3,
    elevation: 5,
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 19,
    alignItems: 'center',

  },
  input: {
    width: '90%',

    justifyContent: 'center',
    height: 50,

  },
  inputText: {
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',

    color: '#28CCF2',
    fontSize: 18,

    paddingHorizontal: 59,
  },
  signInButton: {
    height: 50,
    width: '70%',
    borderRadius: 15,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    position: 'relative',
  },
  butsec: {
    justifyContent: 'center',
    alignItems: 'center',
    //   paddingTop:50,
    width: '90%',
    right: 20,
    position: 'absolute',
    bottom: 40,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    justifyContent: 'center',
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  circle: {
    width: 70,
    height: 70,
    backgroundColor: '#1498D7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    height: 50,
    width: '100%',
    borderRadius: 20,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // padding:20
  },
  textStyle: {
    color: '#FFFFFF',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    marginVertical: 25,
    textAlign: 'center',
    color: '#000000',
    fontWeight: '400',
    fontSize: 16,
  },
  otpBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpBox: {
    padding: 10,
    marginRight: 25,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ffffff',
    height: 55,
    width: 55,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: 24
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
  text: {
    paddingVertical: 10,
    // paddingRight: 50,
    color: '#28CCF2',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
