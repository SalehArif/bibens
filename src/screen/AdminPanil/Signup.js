/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BotmSec from '../../component/signup/signinbotmsec';
import LinearGradient from 'react-native-linear-gradient';

// import { signup } from '../navigation/auth'
// import {AuthContext} from '../navigation/auth';

const Signup = ({ navigation }) => {
  // const error =error.params
  // console.log(error, "phone")
  const [name, setName] = useState('');
  const [sName, setSName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [provence, setProvence] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [isSelected, setIsSelected] = useState('');

  const [role, setSelection] = useState(false);
  const [open, setOpen] = useState(false);
  // const {signup} = useContext(AuthContext);

  const [showError, setShowError] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [startDate, setStartDate] = useState();

  return (
    <View
      style={{
        backgroundColor: '#28282B',
        width: '100%',
        height: '100%',
        paddingTop: 25,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('AdminIntro')}>
        <Ionicons
          name={'md-arrow-back-sharp'}
          size={30}
          color={'white'}
          style={{ paddingLeft: 20, paddingBottom: 15 }}
        />
      </TouchableOpacity>
      {/* {showError ? ( */}
      <View style={{ color: '#28282B' }}>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            // width:'100%',
            padding: 15,
            margin: 15,
            position: 'relative',
            backgroundColor: '#39393D',
            borderRadius: 15,
          }}>
          <Image
            source={require('../../Assets/Rectangle.png')}
            style={{ width: 160, height: 267 }}
          />
          <View style={{ width: '50%', padding: 15 }}>
            <Text style={styles.signupText}>Sign up as Standard user</Text>
            <TouchableOpacity
              onPress={() => setShowLogin(true)}
              style={styles.btn1}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#28CCF2', '#33CC8F']}
                style={styles.gradient}>
                {/* <Text style={[styles.btntext, { paddingRight: 30 }]}>Sign in</Text> */}
                <Text style={[styles.btn1text,]}>SIGN UP</Text>

              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            // width:'100%',
            padding: 15,
            margin: 15,
            position: 'relative',
            backgroundColor: '#39393D',
            borderRadius: 15,
          }}>
          <Image
            source={require('../../Assets/bartender.png')}
            style={{ width: 160, height: 267 }}
          />
          <View style={{ width: '50%', padding: 15 }}>
            <Text style={styles.signupText}> {" Sign up as\n Event Organizer or\n Activity Owner"}</Text>
            <TouchableOpacity
              onPress={() => setShowLogin(true)}
              style={styles.btn1}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#28CCF2', '#33CC8F']}
                style={styles.gradient}>
                {/* <Text style={[styles.btntext, { paddingRight: 30 }]}>Sign in</Text> */}
                <Text style={[styles.btn1text,]}>SIGN UP</Text>

              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <BotmSec navigation={navigation} />
      </View>

      {showLogin ? (
        <View
          style={{
            backgroundColor: '#28282B',
            height: '100%',
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}>
          <View
            style={{
              paddingVertical: 15,
              // justifyContent: 'space-between',
              // alignContent: 'center',
              alignItems: 'center',
              // flexDirection: 'row',
              // width:'70%',
              paddingTop: 25,
              position: 'relative',
            }}>
            <TouchableOpacity
              onPress={
                () => setShowLogin(!showLogin)
              }
              style={{ top: 25, position: 'absolute', left: 25 }}
            >
              <Ionicons
                name={'md-arrow-back-sharp'}
                size={25}
                color={'white'}
              />
            </TouchableOpacity>
            <Text style={styles.headingText}>Sign up as User</Text>
          </View>

          <View style={styles.inputMain}>
            <Image
              source={require('../../Assets/Profile.png')}
              style={styles.image}
            />
            <TextInput
              placeholder="Name"
              value={name}
              placeholderTextColor='#747688'

              onChangeText={value => {
                setName(value);
              }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>
          <View style={styles.inputMain}>
            <Image
              source={require('../../Assets/Profile.png')}
              style={styles.image}
            />
            <TextInput
              placeholder="Surname"
              value={sName}
              placeholderTextColor='#747688'

              onChangeText={value => {
                setSName(value);
              }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>
          <View style={[styles.inputMain, { paddingLeft: 13 }]}>
            <Image
              source={require('../../Assets/calander.png')}
              style={[styles.image, { width: 23, height: 23 }]}
            />
            <TextInput
              placeholder="Date of Birth"
              value={dob}
              placeholderTextColor='#747688'

              mode="flat"
              onChangeText={value => {
                setDob(value);
              }}
              // placeholderTextColor="white"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              style={styles.input}
            /></View>
          <View style={[styles.inputMain, { paddingLeft: 10 }]}>
            <Image
              source={require('../../Assets/mail.png')}
              style={[styles.image, { width: 28, height: 20 }]}
            />
            <TextInput
              placeholderTextColor='#747688'
              placeholder="Email address"
              value={email}
              mode="flat"
              onChangeText={value => {
                setEmail(value);
              }}
              // placeholderTextColor='#747688'
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              style={styles.input}
            /></View>

          <View style={styles.inputMain}>
            <Image
              source={require('../../Assets/phone.png')}
              style={[styles.image, , { width: 21 }]}
            />

            <TextInput
              placeholder="Phone number (facoltative)"
              value={phone}
              placeholderTextColor='#747688'
              keyboardType="numeric"
              onChangeText={value => {
                setPhone(value);
              }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              // defaultValue={text}
              style={styles.input}
            /></View>
          <View style={styles.inputMain}>
            <Image
              source={require('../../Assets/provence.png')}
              style={[styles.image, { width: 23 }]}
            />
            <TextInput
              placeholder="Province"
              value={provence}
              placeholderTextColor='#747688'

              onChangeText={value => {
                setProvence(value);
              }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>
          <View style={styles.inputMain}>
            <Image
              source={require('../../Assets/Lock.png')}
              style={styles.image}
            />
            <TextInput
              placeholder="Password"
              value={password}
              // keyboardType="password"
              placeholderTextColor='#747688'
              // type="pasword"
              secureTextEntry
              onChangeText={value => {
                setPassword(value);
              }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              // textAlignVertical="top"
              style={styles.input}
            />
          </View>
          <View style={styles.inputMain}>
            <Image
              source={require('../../Assets/Lock.png')}
              style={styles.image}
            />
            <TextInput
              placeholder="Confirm password"
              value={cPassword}
              // keyboardType="password"
              // type="pasword"
              placeholderTextColor='#747688'
              secureTextEntry
              onChangeText={value => {
                setCPassword(value);
              }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              // textAlignVertical="top"
              style={styles.input}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setIsSelected}
              style={styles.checkbox}
              tintColors={{ true: 'white', false: 'white' }}
            // color="white"
            />
            <Text style={styles.checkboxText}>
              Privacy policy and terms of use...
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.btn, { alignSelf: 'center', height: 58 ,width:'70%'}]}
            onPress={() => navigation.navigate('AdminEvent')}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1.7 }}
              colors={['#28CCF2', '#33CC8F']}
              style={styles.gradient}>
              {/* <Text style={[styles.btntext, { paddingRight: 30 }]}>Sign in</Text> */}
              <Text style={[styles.btn1text,]}>SIGN UP</Text>

              <Ionicons
                name={'md-arrow-forward-circle'}
                size={35}
                color={'#28282B'}
                style={{ paddingLeft: 50, position: 'absolute', right: 20 }}
              />
            </LinearGradient>
          </TouchableOpacity>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {/*  */}

            {/* {password == null ||
            name == null ||
            email == null ||
            role == null ||
            password.length < 6 ? (
              <TouchableOpacity
                disabled
                // onPress={() => onpresssnull()}
                style={[styles.btn, {backgroundColor: 'silver'}]}>
                <Text style={[styles.text, {color: '#29292C'}]}>SIGN UP</Text>
                <Ionicons
                  name={'md-arrow-forward-circle'}
                  size={30}
                  color={'#28282B'}
                  style={{paddingLeft: 50, position: 'absolute', right: 30}}
                />
              </TouchableOpacity>
            ) : ( */}
            <TouchableOpacity
            //  onPress={() => onpresss()} style={styles.btn}
            >
              <Ionicons
                name={'md-arrow-forward-circle'}
                size={30}
                color={'#28282B'}
                style={{ paddingLeft: 50, position: 'absolute', right: 30 }}
              />
            </TouchableOpacity>
            {/* )} */}
            <BotmSec navigation={navigation} />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  headingText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    paddingBottom: 20,
    color: 'white',
    alignSelf: 'center',
  },
  checkboxContainer: {
    // display:'flex'
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
  },
  checkbox: {
    alignSelf: 'center',
    color: 'white',
    // backgroundColor: 'white',
  },
  checkboxText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 23,

  },
  btn: {
    marginTop: 15,
    height: 58,
    width: '80%',
    borderRadius: 10,
    shadowColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    marginTop: 15,
    height: 40,
    // width: '70%',
    borderRadius: 10,
    shadowColor: 'black',
    // backgroundColor: '#28CCF2',
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
    letterSpacing: 1,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: '#29292C',
  },
  signupText: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 34,
    // paddingHorizontal: 5,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
  inputMain: {
    width: '88%',
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 15,
    marginVertical: 6,
    paddingHorizontal: 19,
    alignItems: 'center',

  },
  input: {
    width: '88%',
    paddingLeft: 15,
    justifyContent: 'center',
    height: 54,
    fontSize: 18,
    fontWeight: '400'
  },
  image: {
    height: 20,
    width: 17
  },
  gradient: {
    width: '100%',
    height: '100%',
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 13,
  },

});
