/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Easing,
  Animated,
  ImageBackground,
  Modal
  //  MotView, Easing
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BotmSec from '../../../component/signup/signupbotmSec';
import LinearGradient from 'react-native-linear-gradient';
{/* < ImageBackground source={require('../../../Assets/b.png')} */ }
function OwnerIntro({ navigation }) {
  const [logoIntro, setLogoIntro] = useState(true);
  const [intro, setIntro] = useState(false);
  const [intro2, setIntro2] = useState(false);
  const [intro3, setIntro3] = useState(false);
  const [intro4, setIntro4] = useState(false);
  const [openGust, setopenGust] = useState(false);

  const image = { uri: '../../../Assets/bibean.png' };


  let rotateValueHolder = new Animated.Value(0);

  const startImageRoatateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRoatateFunction());
  };


  // This useEffect isused for image roatation
  useEffect(() => {
    startImageRoatateFunction();
  }, []);

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const istHandler = () => {
    setIntro(true);
    setLogoIntro(false);
  };
  const secondHandler = () => {
    setIntro2(true);
    setIntro(false);
  };
  const thirdHandler = () => {
    setIntro3(true);
    setIntro2(false);
  };
  const fourthHandler = () => {
    setIntro4(true);
    setIntro3(false);
  };
  const nextHandler = () => {

    setopenGust(true);
    setIntro(false)
    setLogoIntro(false);
    setIntro2(false);
    setIntro4(false);
    setIntro3(false);
  };

  return (
    <View>
      <StatusBar
        backgroundColor={'black'}
        barStyle="light-content"
      />
      {logoIntro ? (
        <TouchableOpacity
        onPress={istHandler}
        
          style={{
            backgroundColor: 'black',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={istHandler}
            style={{ backgroundColor: 'black', borderRadius: 20 }}>
            <Animated.Image source={require('../../../Assets/bibean.png')}
              style={[{ width: 200, height: 200 }, { transform: [{ rotate: RotateData }] }]}>

            </Animated.Image>
            {/* <ImageBackground source={require('../../../Assets/b.png')} resizeMode="cover" 
            style={[{ width: 150, height: 150, position: 'absolute', backgroundColor:'black'}]}>
          </ImageBackground> */}


          <Image
           onPress={istHandler}
            source={require('../../../Assets/c.png')}
            tintColor={"black"}
            style={[{  width: 168, height: 168, position: 'absolute', backgroundColor:'black',top:'8%',left:'4%',borderRadius:90,}]}
          />
          <Image
           onPress={istHandler}
          source={require('../../../Assets/b.png')}
          style={[{  width: 105, height: 135, position: 'absolute', backgroundColor:'black',top:'14%',left:'14%',borderRadius:20}]}
        />
        </TouchableOpacity>
        </TouchableOpacity>
  ) : null
}
{
  intro ? (
    <View style={styles.topSec}>
      <View style={{ height: '100%', width: '100%', }}>
        <Image
          source={require('../../../Assets/image75.png')}
          style={{ width: '100%', height: '90%' }}
        />
      </View>
      <View style={styles.bottomSec}>
        <Text style={styles.headingText}>
          EVERYTHING FOR YOUR FREE TIME
        </Text>
        <Text style={styles.discriptionText}>
          {"Find the best events or activities\naround you with a simple tap.\nGet start some fun!"}
        </Text>
        <View style={styles.btnMain}>
          <TouchableOpacity style={styles.scipBtn} onPress={nextHandler}>
            <Text style={styles.nextBtnText}>skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={secondHandler} style={styles.nextBtn}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : null
}

{
  intro2 ? (
    <View style={styles.topSec}>
      <View style={{ height: '100%', width: '100%', }}>
        <Image
          source={require('../../../Assets/Progettosenza.png')}
          style={{ width: '100%', height: '70%' }}
        />
      </View>
      <View style={styles.bottomSec}>
        <Text style={styles.headingText}>Create an Event</Text>
        <Text style={styles.discriptionText}>
          {" Promote your event or your\nactivities and let the other users \nto find you using our Map."}
        </Text>
        <View style={styles.btnMain}>
          <TouchableOpacity style={styles.scipBtn} onPress={nextHandler}>
            <Text style={styles.nextBtnText}>skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={thirdHandler}
            style={styles.nextBtn}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) :
    null
}
{
  intro3 ? (
    <View style={styles.topSec}>
      <View style={{ height: '100%', width: '100%', }}>
        <Image source={require('../../../Assets/searchbr.png')}
          style={{ width: '90%', position: 'absolute', top: 20, alignSelf: 'center', zIndex: 20, }}
        />
        <Image source={require('../../../Assets/image26.png')}
          style={{ width: '100%', height: '85%' }}
        />
      </View>
      <View style={styles.bottomSec}>
        <Text style={styles.headingText}>Functionalities</Text>
        <Text style={styles.discriptionText}>
          {'Filter Events and activities by date,\ntype, distance or see them directly\non the map!'}
        </Text>
        <View style={styles.btnMain}>
          <TouchableOpacity style={styles.scipBtn} onPress={nextHandler}>
            <Text style={styles.nextBtnText}>skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={fourthHandler}
            style={styles.nextBtn}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) :
    null
}

{
  intro4 ? (
    <View style={styles.topSec}>
      <View
        style={{
          height: '100%',
          width: '100%',
        }}>
        <Image
          source={require('../../../Assets/image24.png')}
          style={{ width: '100%', height: '70%' }}
        />
      </View>
      <View style={styles.bottomSec}>
        <Text style={styles.headingText}>Create profile</Text>
        <Text style={styles.discriptionText}>
          {"Create your personal profile in few\nsecond and enjoy our App!"}
        </Text>
        <View style={styles.btnMain}>
          <TouchableOpacity
            style={styles.scipBtn}
          >
          </TouchableOpacity>
          <TouchableOpacity
            onPress={nextHandler}
            style={styles.nextBtn}>
            <Text style={styles.btnText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : null
}
{
  openGust ? (
    <View style={styles.topSec}>
      <View
        style={{
          height: '100%',
          width: '100%',
        }}>
        <Image
          source={require('../../../Assets/login.png')}
          style={{ width: '100%', height: '70%' }}
        />
      </View>
      <View
        style={[
          styles.bottomSec,
          { backgroundColor: '#28282B', paddingTop: 25 },
        ]}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('OwnerLogin')}>
          <LinearGradient
            start={{ x: 0, y: 0.2 }}
            end={{ x: 0, y: 0.9 }}
            colors={['#33CC8F', '#28CCF2']}
            style={styles.gradient}>
            <Text style={[styles.btntext, { paddingRight: 30 }]}>
              Sign in
            </Text>
            <Ionicons
              name={'md-arrow-forward-circle'}
              size={30}
              color={'#28282B'}
              style={{ paddingLeft: 50, position: 'absolute', right: 20 }}
            />
          </LinearGradient>
        </TouchableOpacity>

        <Text style={[styles.headingText, { color: 'white' }]}>OR</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('OwnerEvent')}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.2 }}
            colors={['#D3D3D3', '#D3D3D3']}
            style={styles.gradient}>
            <Text style={[styles.btntext, { paddingRight: 30 }]}>
              Continue as A Guest
            </Text>
            <Ionicons
              name={'md-arrow-forward-circle'}
              size={30}
              color={'#28282B'}
              style={{ paddingLeft: 50, position: 'absolute', right: 20 }}
            />
          </LinearGradient>
        </TouchableOpacity>



        <BotmSec navigation={navigation} />
      </View>
    </View>
  ) : null
}


    </View >
  );
}

export default OwnerIntro;

const styles = StyleSheet.create({
  topSec: {
    backgroundColor: '#28282B',
    alignContent: 'center',
    alignItems: 'center',
  },
  bottomSec: {
    width: '100%',
    height: '35%',
    backgroundColor: '#D3D3D3',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 30,
    alignItems: 'center',
  },
  headingText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: 2,
    textTransform: 'uppercase',
    paddingTop: 10,
    color: '#000000',
  },
  discriptionText: {
    letterSpacing: 2,
    paddingVertical: 20,
    fontWeight: '400',
    fontSize: 19,
    lineHeight: 32,
    textAlign: 'center',

    color: '#000000',
  },
  btnMain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
  nextBtn: {
    height: 42,
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: '#28282B',
    paddingHorizontal: 15,
    fontWeight: '700',
    shadowColor: 'black',
  },
  btnText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    color: 'white',
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
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    color: '#777676',
  },
  buttonRound: {
    color: '#28CCF2',
    borderRadius: 100,
    backgroundColor: 'white',
    padding: 10,
    margin: 30,
    fontWeight: '700',
  },
  ring: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderColor: 'tomato',
    borderWidth: 10,
  },
  smallCircleMain: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  smallCircleActive: {
    color: 'white',
    borderRadius: 100,
    backgroundColor: 'white',
    padding: 7,
    marginHorizontal: 2,
    fontWeight: '700',
  },
  smallCircle: {
    color: 'white',
    borderRadius: 100,
    border: '3px solid white',
    backgroundColor: 'white',
    marginHorizontal: 2,
    padding: 7,
    fontWeight: '700',
  },

  buttontext: {
    color: '#28CCF2',
    borderRadius: 30,
    backgroundColor: 'white',
    paddingHorizontal: 75,
    paddingVertical: 15,
    fontWeight: '700',
    shadowColor: 'black',
  },
  btn: {
    marginTop: 15,
    height: 60,
    width: '70%',
    borderRadius: 20,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    justifyContent: 'center',
  },
  btntext: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },


  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '40%',
    backgroundColor: 'yellow'
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


});
