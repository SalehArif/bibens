/* eslint-disable prettier/prettier */
import React, { useState, useCallback, useEffect, useContext } from 'react';
// import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import TextInputField from '../../component/inputfield';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import SearchBar from "react-native-dynamic-search-bar";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Messages = ({ navigation }) => {


  return (
    <View style={styles.centeredView}>
      {/* <StatusBar
        backgroundColor={'#28282B'}
        translucent={false}
        barStyle="light-content"
      /> */}

      <View style={styles.modalView}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => navigation.navigate('OwnerSetting')}>
          <MaterialIcons name={'arrow-back'} size={30} color={'white'} />
        </TouchableOpacity>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text style={styles.HeadingText}>Messages</Text>
          <View style={styles.borderBottem}></View>

          <ScrollView>
            <TouchableOpacity
              style={[styles.curnt_Bal_main, { backgroundColor: 'transparent' }]}
            // onPress={() =>
            //   navigation.navigate('Chat', {id: item.recieverId})
            // }
            >
              <View
                style={{
                  backgroundColor: 'white',
                  height: 45,
                  width: 45,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 8,
                }}>
                <MaterialIcons name={'groups'} size={30} color={'#000'} />
              </View>
              <View style={{ width: '90%', padding: 6 }}>
                <Text style={[styles.balvaluetxt, { color: 'white' }]}>
                Follow these best practices for new sellers!
                  {/* {item?.recieverName}2345678uj */}
                </Text>
                <Text style={[styles.BalanceText, { color: 'white' }]}>
                  {/* {item?.text} */}
                  4 hours ago.
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={[
                  styles.curnt_Bal_main,
                  { justifyContent: 'center', alignItems: 'center', },
                ]}
              // onPress={() =>
              //   navigation.navigate('Chat', {id: item.recieverId})
              // }
              >
                <View style={{}}>
                  <MaterialIcons name={'chat'} size={35} color={'#000000'} />
                </View>
                <View style={{ width: '90%', paddingHorizontal: 6 }}>
                  <Text style={styles.balvaluetxt}>Your request is accepted for the project of logo designing.</Text>
                  <Text style={styles.BalanceText}>12 hours ago.</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.curnt_Bal_main, { justifyContent: 'center', alignItems: 'center' }]}
              // onPress={() =>
              //   navigation.navigate('Chat', {id: item.recieverId})
              // }
              >
                <View style={{}}>
                  <MaterialIcons name={'chat'} size={35} color={'#000000'} />
                </View>
                <View style={{ width: '90%', paddingHorizontal: 6 }}>
                  <Text style={styles.balvaluetxt}>Client give you rating, check here.</Text>
                  <Text style={styles.BalanceText}>12 hours ago.</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.curnt_Bal_main, { justifyContent: 'center', alignItems: 'center' },]}
              // onPress={() =>
              //   navigation.navigate('Chat', {id: item.recieverId})
              // }
              >
                <View style={{}}>
                  <MaterialIcons name={'chat'} size={35} color={'#000000'} />
                </View>
                <View style={{ width: '90%', paddingHorizontal: 6 }}>
                  <Text style={styles.balvaluetxt}>Your request is accepted for the project of logo designing. </Text>
                  <Text style={styles.BalanceText}>12 hours ago.</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    backgroundColor: '#28282B',
    // height: '50%',
    // flex: 1,
  },
  modalView: {
    paddingTop: 20,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#28282B',
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

  HeadingText: {
    marginBottom: 0,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 45,
  },

  borderBottem: {
    // borderBottemWidth: 4,
    borderColor: '#454545',
    borderBottem: 3,
    // borderColor: 'white',
    borderBottomWidth: 1,
    // alignSelf:'flex-end'
    paddingVertical: 10,
    width: '90%',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center'
  },
  modalText: {
    marginBottom: 35,
    textAlign: 'center',
    color: '#28CCF2',
    fontSize: 18,
  },
  BalanceText: {
    paddingTop: 5,
    // textAlign: "center",
    color: '#28282B',
    fontSize: 12,
    width: '100%',
    // backgroundColor:'red'
  },

  curnt_Bal_main: {
    padding: 10,
    // paddingLeft: 20,
    // paddingBottom: 10,
    flexDirection: 'row',
    // paddingBottom: 30,
    // paddingLeft:20,
    // alignItems: 'center',
    // justifyContent:'center',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    color: 'white',
    marginBottom: 5,
    // position: 'relative',
  },

  curnt_Bal_: {
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },


  // text
  Inner_box_Text: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 20,
  },

  balvaluetxt: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '400',
    paddingHorizontal: 5,
    // width:'0%',
    lineHeight: 22,

    // color: '#000000',
  },

  // Button

  closeBtn: {
    position: 'absolute',
    top: 10,
    left: 20,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    width: 40,
    height: 40,
    // marginRight: 20,
  },
});
