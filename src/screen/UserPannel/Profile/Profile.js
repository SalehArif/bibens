/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-modern-datepicker';

const Profile = ({ navigation }) => {
  // const error =error.params

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showEdit, setShowEdit] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [updloadImgModel, setUpdloadImgModel] = useState(false);


  const openHandler = () => {
    setOpenModal(true)
    setUpdloadImgModel(false)
  }
  return (
    <ScrollView
      style={{
        backgroundColor: '#28282B',
        height: '100%',
        width: '100%',
      }}>
      {/* sucess Modal---------- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => { setOpenModal(!openModal) }}>
        <View style={styles.centeredView1}>
          <TouchableOpacity
            onPress={() => setOpenModal(!openModal)}
            style={{ position: 'absolute', top: 25, left: 25 }}>
            <Ionicons name={'arrow-back'} size={30} color={'white'} />
          </TouchableOpacity>
          <View style={[styles.modalView1,]}>
            {/* <Text style={styles.modalHeadingText1}>Share By1</Text> */}
            <View style={[styles.mainMenu, { padding: 7 }]}>
              <View
                style={[
                  styles.circle,
                  // {borderLeftWidth: 0},
                ]}>
                <LinearGradient
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 0, y: 0.9 }}
                  colors={['#33CC8F', '#28CCF2']}
                  style={[
                    styles.gradient,
                    { justifyContent: 'center', alignSelf: 'center', borderRadius: 50 },
                  ]}>
                  <Feather
                    name={'check'}
                    size={30}
                    color={'white'}
                  //   style={{top: 30, position: 'absolute', left: 25}}
                  />
                </LinearGradient>
              </View>
              <Text style={styles.actEventtext}>Updated Succesfully!</Text>

              <TouchableOpacity onPress={() => setOpenModal(!openModal)}
                style={[styles.btnCancle, { height: 42, width: 147 ,alignSelf: 'center'}]}>
                <LinearGradient
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 0, y: 0.9 }}
                  colors={['#33CC8F', '#28CCF2']}
                  style={[
                    styles.gradient,
                    { justifyContent: 'center', alignSelf: 'center' },
                  ]}>
                  <Text style={[styles.btntext1, { color: 'white' }]}>
                  Cancel
                  </Text>
                </LinearGradient>
                {/* <Text style={[styles.btntext1, { color: 'white' }]}>Cancel</Text> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* ------------------------ */}
      {
        showEdit ?
          <View
            style={{
              paddingVertical: 15,
              // color: 'silver',
              justifyContent: 'space-around',
              flexDirection: 'row',
              width: '100%',
              paddingTop: 25,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Event')}>
              <Ionicons
                name={'md-arrow-back-sharp'}
                size={30}
                color={'white'}
                style={{ marginLeft: -20, }}
              />
            </TouchableOpacity>

            <Image
              source={require('../../../Assets/pr1.png')}
              style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 50, borderColor: '#19A2C9', borderWidth: 3 }}
            />
            <TouchableOpacity onPress={() => setShowEdit(!showEdit)}>
              <Feather
                name={'settings'}
                size={30}
                color={'#25B3AF'}
              //   style={{top: 30, position: 'absolute', left: 25}}
              />
              <Text style={[styles.inputText, { color: 'white', width: '100%', fontWeight: '400' }]}>Edit</Text>
            </TouchableOpacity>
          </View>
          :
          <View
            style={{
              paddingVertical: 15,
              // color: 'silver',
              justifyContent: 'space-around',
              flexDirection: 'row',
              width: '90%',
              paddingTop: 25,
              alignSelf: 'center'
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '60%' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                <Ionicons
                  name={'md-arrow-back-sharp'}
                  size={30}
                  color={'white'}
                //   style={{top: 30, position: 'absolute', left: 25}}
                />
              </TouchableOpacity>
              <Image
                source={require('../../../Assets/pr1.png')}
                style={{ width: 100, height: 100, alignSelf: 'center', borderRadius: 50, borderColor: '#19A2C9', borderWidth: 3 }}
              />
            </View>

            <View style={{ width: '40%', justifyContent: 'flex-end', flex: 1 }}>
              <TouchableOpacity onPress={() => setUpdloadImgModel(!updloadImgModel)}>
                <View style={{ position: 'absolute', flexDirection: 'row', bottom: 0, left: 0 }} >
                  <Feather
                    name={'edit'}
                    size={18}
                    color={'white'}
                    style={{ marginRight: 2 }}
                  />
                  <Text style={[styles.inputText1, { color: 'white', justifyContent: 'flex-end', }]}>Edit Image</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
      }
      {/* ------ */}
      <Text style={[styles.inputText, { color: 'white' }]}>First Name</Text>
      <TextInput
        placeholder="kristian"
        value={firstName}
        onChangeText={value => { setFirstName(value) }}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        placeholderTextColor="white"
        style={styles.input}
      />
      <Text style={[styles.inputText, { color: 'white' }]}>Last Name</Text>

      <TextInput
        placeholder="Bell"
        value={lastName}
        onChangeText={value => {
          setLastName(value);
        }}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        style={styles.input}
      />
      <Text style={[styles.inputText, { color: 'white' }]}>Address</Text>

      <TextInput
        placeholder="13th street, New York,  USA"
        value={address}
        onChangeText={value => { setAddress(value) }}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        style={styles.input}
      />

      <Text style={[styles.inputText, { color: 'white' }]}>Date of Birth</Text>
      <TextInput
        placeholder="12-2-2001"
        value={dob}
        mode="flat"
        onChangeText={value => { setDob(value) }}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        style={styles.input}
      />
      <Text style={[styles.inputText, { color: 'white' }]}>Email address</Text>
      <TextInput
        placeholder="Kris@gmail.com"
        value={email}
        mode="flat"
        onChangeText={value => {
          setEmail(value);
        }}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        style={styles.input}
      />
      <Text style={[styles.inputText, { color: 'white' }]}>
        Phone Number:(Facoltative)
      </Text>

      <TextInput
        placeholder="+01234567891.."
        value={phone}
        keyboardType="numeric"
        onChangeText={value => {
          setPhone(value);
        }}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        // defaultValue={text}
        style={styles.input}
      />
      <Text style={[styles.subText]}>Subscription:</Text>
      <TouchableOpacity
        // onPress={() => onpresssnull()}
        style={[styles.planBtn]}>
        <Text style={[styles.btntext1, { color: 'white', fontSize: 22, fontWeight: '600', opacity: 1 }]}>Plan Business</Text>
      </TouchableOpacity>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {/*  */}

        {showEdit ? (
          <TouchableOpacity
            // onPress={() => setShowEdit(!showEdit)}
            onPress={() => navigation.navigate('PremiumVersion')}
            style={[styles.btn1,{marginTop:0}]}>
            <Text style={[styles.btntext, { marginBottom: 15 }]}>Upgrade Now!</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.btnMain}>
            <TouchableOpacity style={styles.btn} onPress={() => setOpenModal(!openModal)}>
              <LinearGradient
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.9 }}
                colors={['#33CC8F', '#28CCF2']}
                style={[styles.gradient, { justifyContent: 'center', alignSelf: 'center' }]}>
                <Text style={[styles.btntext1, { color: 'white' }]}>Update </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => setShowEdit(!showEdit)}>
              <LinearGradient
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.9 }}
                colors={['#33CC8F', '#28CCF2']}
                style={[styles.gradient, { justifyContent: 'center', alignSelf: 'center' },]}>
                <Text style={[styles.btntext1, { color: 'white' }]}>Cancel</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* Upload Image Modal---------- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={updloadImgModel}
        onRequestClose={() => { setUpdloadImgModel(!updloadImgModel) }}>
        <View style={[styles.centeredView1,]}>
          <TouchableOpacity
            onPress={() => setUpdloadImgModel(!updloadImgModel)}
            style={{ position: 'absolute', top: 25, left: 25 }}>
            <Ionicons name={'arrow-back'} size={30} color={'white'} />
          </TouchableOpacity>
          <View style={[styles.modalView1, { backgroundColor: '#28282B', margin: 0, padding: 0, justifyContent: 'flex-start', }]}>
            <TouchableOpacity
              onPress={() => openHandler()}
              style={[styles.btnCancle, { height: 61, width: '100%', marginTop: 0, }]}>
              <LinearGradient
                start={{ x: 0, y: 0.2 }}
                end={{ x: 0, y: 0.9 }}
                colors={['#33CC8F', '#28CCF2']}
                style={[
                  styles.gradient,
                  { justifyContent: 'center', alignSelf: 'center' },
                ]}>
                <Text style={[styles.btntext1, { color: 'white' }]}>
                  Insert / Edit Image
                </Text>
              </LinearGradient>
              {/* <Text style={[styles.btntext1, { color: 'white' }]}>Cancel</Text> */}
            </TouchableOpacity>

            <View style={[styles.mainMenu, { padding: 7 }]}>
              <TouchableOpacity>
                <Image
                  source={require('../../../Assets/upload.png')}
                  style={{ alignSelf: 'center' }}
                />
              </TouchableOpacity>
              <Image
                source={require('../../../Assets/up1.png')}
                style={{ width: 145, height: 135, alignSelf: 'center', borderRadius: 10, marginTop: 4 }}
              />
              <Text style={[styles.actEventtext, { color: '#FFFFFF', alignSelf: 'center' }]}>Image1.jpeg <Fontisto
                name={'trash'}
                size={18}
                color={'white'}
                style={{ marginRight: 2 }}
              /></Text>

              <TouchableOpacity
                onPress={() => openHandler()}
                style={[styles.btnCancle, { height: 42, width: 147, borderRadius: 10, }]}>
                <LinearGradient
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 0, y: 0.9 }}
                  colors={['#33CC8F', '#28CCF2']}
                  style={[
                    styles.gradient,
                    { justifyContent: 'center', alignSelf: 'center', borderRadius: 10, },
                  ]}>
                  <Text style={[styles.btntext1, { color: 'white' }]}>
                    Confirm
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView >
  );
};

export default Profile;

const styles = StyleSheet.create({
  headingText: {
    // fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
    color: 'white',
    alignSelf: 'center',
  },
  img: {
    width: 85,
    height: 85,
    borderRadius: 15,
    objectFit: 'cover',
    resizeMode: 'cover',
  },
  planBtn: {
    margin: 10,
    height: 45,
    width: '45%',
    borderRadius: 30,
    borderColor: '#F951D4',
    borderWidth: 2,
    shadowColor: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  btnMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    margin: 10,
    height: 48,
    width: '45%',
    borderRadius: 15,
    shadowColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '600',
  },

  btn1: {
    marginTop: 20,
    // height: 40,
    // width: '70%',
    borderRadius: 15,
    shadowColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCancle: {
    marginTop: 20,
    height: 40,
    // width: '70%',
    borderRadius: 15,
    shadowColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 38,
    paddingHorizontal: 27,
    paddingVertical: 7,
    color: 'white',
  },
  input: {
    paddingLeft: 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 50,
    backgroundColor: '#39393D',
    alignSelf: 'center',
    color: 'White',
    elevation: 5,
    borderRadius: 10,
  },
  inputText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
    // paddingHorizontal: 5,
    width: '85%',
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  btntext1: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: '#25B3AF',
    alignSelf: 'center',
    textAlign: 'center',
  },
  btntext: {
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 33,
    color: '#25B3AF',
    alignSelf: 'center',
    textAlign: 'center',
  },
  //   --------------Modal-------------------
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#00000090',
    width: '100%',
  },
  modalView1: {
    // height:'30%',
    margin: 20,
    backgroundColor: '#D9D9D9',
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
    width: '85%',
    height: '45%',
  },
  modalHeadingText1: {
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 38,
    color: '#FFFFFF',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
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
  actEventtext: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 30,
    color: '#000000'
  }
});
