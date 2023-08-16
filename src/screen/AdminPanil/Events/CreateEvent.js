/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from '../../../component/menu/Topmenu2';
import LinearGradient from 'react-native-linear-gradient';



// import { signup } from '../navigation/auth'
// import {AuthContext} from '../navigation/auth';

const CreateEvent = ({ navigation }) => {
  // const error =error.params
  // console.log(error, "phone")

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
        // width: '100%',
        // height: '100%',
        // paddingTop: 25,
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
    <ScrollView contentContainerStyle={{paddingBottom: 60}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name={'md-arrow-back-sharp'}
          size={30}
          color={'white'}
          style={{ paddingLeft: 20, paddingBottom: 5 }}
        />
      </TouchableOpacity>
      {/* {showError ? ( */}
      <View style={{ color: '#28282B' }}>
        <View
          style={{
            // width:'100%',
            paddingVertical: 10,
            paddingHorizontal:15,
            marginHorizontal: 15,
            marginVertical: 5,
            position: 'relative',
            backgroundColor: '#39393D',
            borderRadius: 15,
          }}>
        <Text style={{fontSize:24, color:"white", fontWeight:"600", marginBottom:10, lineHeight:36, fontFamily:"Poppins", alignSelf:"center"}}>Events</Text>
        <View
        style={{
            alignItems: 'center',
            flexDirection: 'row',
            // width:'100%',
          }}>
          <Image
            source={require('../../../Assets/event.png')}
            style={{ width: 160, height: 230, borderRadius:20 }}
          />
          <View style={{ width: '50%', padding: 15 }}>
            <Text style={styles.signupText}>Create Events available just on specific dates</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AdminCreateEventDetail", {EventName: "Event"})}
              style={styles.btn1}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#28CCF2', '#33CC8F']}
                style={styles.gradient}>
                {/* <Text style={[styles.btntext, { paddingRight: 30 }]}>Sign in</Text> */}
                <Text style={[styles.btn1text,{color:"white"}]}>Create</Text>

              </LinearGradient>
            </TouchableOpacity>
          </View>

        </View>
        </View>
        <View
          style={{
            // width:'100%',
            paddingVertical: 10,
            paddingHorizontal:15,
            margin: 15,
            position: 'relative',
            backgroundColor: '#39393D',
            borderRadius: 15,
          }}>
         <Text style={{fontSize:24, color:"white", fontWeight:"600", marginBottom:10, lineHeight:36, fontFamily:"Poppins", alignSelf:"center"}}>Activities</Text>
        <View
        style={{
            alignItems: 'center',
            flexDirection: 'row',
            // width:'100%',
          }}>
          <Image
            source={require('../../../Assets/event1.png')}
            style={{ width: 160, height: 230, borderRadius:20 }}
          />
          <View style={{ width: '50%', padding: 15 }}>
            <Text style={styles.signupText}> {"Create free time Activities available all the year or just on specific season"}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AdminCreateEventDetail", {EventName: "Activity"})}
              style={styles.btn1}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#28CCF2', '#33CC8F']}
                style={styles.gradient}>
                {/* <Text style={[styles.btntext, { paddingRight: 30 }]}>Sign in</Text> */}
                <Text style={[styles.btn1text,{color:"white"}]}>Create</Text>

              </LinearGradient>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>

      {/* {showLogin ? (
        
      ) : null} */}
    </ScrollView>
    <View style={styles.bottemSec}>
        <Menu navigation={navigation} />
    </View>
    </View>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
    
    bottemSec: {
        width: '100%',
        // height: '45%',
        // backgroundColor: '#28282B',
        // borderTopRadius: 30,
        position: 'absolute',
        bottom: 0,
        left:20,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingTop: 30,
        justifyContent: 'center',
        zIndex:2
        // alignContent: 'center',
        // alignItems: 'center',
      },
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
    fontFamily:"Poppins",
    fontSize: 18,
    lineHeight: 27,
    color: '#29292C',
  },
  signupText: {
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 30,
    fontFamily:"Poppins",
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
    borderRadius: 20,
  },

});
