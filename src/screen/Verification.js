/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
// import { useState } from 'react/cjs/react.production.min';
import firestore from '@react-native-firebase/firestore';
import Otpbox from '../component/Otp';

const Verification = ({navigation, route}) => {
  const phone = route.params;

  // const otpInput = useRef(null);
  const [otp, setOtp] = useState();
  const [data, setData] = useState('');
  console.log(phone, 'phone');

  // useEffect(() => {
  //     const subscriber = firestore()

  //         .collection('Users')
  //         .onSnapshot(querySnapshot => {
  //             const requestList = [];
  //             querySnapshot.forEach(documentSnapshot => {
  //                 documentSnapshot.data().phone === phone

  //                     ? requestList.push({
  //                         ...documentSnapshot.data(),
  //                         key: documentSnapshot.id,
  //                     })
  //                     : null;
  //             });
  //             setData(requestList);
  //         }); return () => { subscriber() };
  // }, []);
  const otpInput = useRef(null);
  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue('1234');
  };

  return (
    <View style={{backgroundColor: '#28CCF2', width: '100%', height: '100%'}}>
      <View
        style={{
            position:'absolute',
            bottom:0,
            left:0,
            right:0,
          backgroundColor: 'white',
          height: '90%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Text
          style={{
            color: 'white',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          Sign up
        </Text>
        {/* <Text style={{ color: '#28CCF2', alignSelf: 'flex-start', fontSize: 24, padding: 20, fontWeight: '500' }}>
                    Login
                </Text> */}
        {/* <TextInput
                    placeholder="optp"
                    // value={email}

                    // onChangeText={(value) => {
                    //     setEmail(value)
                    // }}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    textAlignVertical="top"
                    style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center', width: '80%', height: 50, backgroundColor: '#fff', alignSelf: 'center', borderWidth: 0.3, elevation: 5, borderRadius: 40, paddingHorizontal: 19 }} /> */}

        <View
          style={{
            alignSelf: 'center',
            height: '20%',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#28CCF2',
              fontSize: 36,
              fontWeight: '400',
              letterSpacing: 3,
              textAlign:'center',
            //   width:'70%',
            }}>
            {' '}
            Enter your verification code:
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Text
            style={{
              paddingVertical: 10,
              color: '#28CCF2',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            We've sent a verification code to

          </Text>
          <View style={{flexDirection: 'row', paddingBottom: 22}}>
            <Text style={{color: '#28CCF2', fontSize: 22}}>
              {phone}
              {/* +1 (347) 439-0075. */}
            </Text>
          </View>
          <Text style={{color: '#28CCF2', fontSize: 18, paddingVertical: 10}}>
            Enter code:
          </Text>
          {/*  */}

          <Otpbox />
          {/*  */}
          {/* <View style={styles.container}>
            <Text style={styles.text}>Enter OTP password</Text>
          </View> */}

          <TouchableOpacity
            style={{
                // marginHorizontal:30,
                marginVertical:30,
              height: 60,
              width: '70%',
              borderRadius: 50,
              shadowColor: 'black',
              backgroundColor: '#28CCF2',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            // onPress={clearText}
            onPress={() => navigation.navigate('Spots')}>
            <Text style={{color: 'white', fontWeight: '700'}}>Verify</Text>
          </TouchableOpacity>
         
          <Text style={{color: '#28CCF2', fontSize: 18, paddingVertical: 10}}>
                Send the code again
          </Text>
          <Text style={{color: '#28CCF2', fontSize: 18, paddingVertical: 10}}>
          Change phone number
          </Text>
          {/* <View
            style={{
              paddingVertical: 10,
              color: 'silver',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
                
            <Text>Send the code again</Text>
            <TouchableOpacity
            //   onPress={() => navigation.navigate('Register')}
              style={{}}>
              <Text style={{color: '#28CCF2', paddingLeft: 4}}>0.59</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({});
