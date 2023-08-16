import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView
} from 'react-native';

import React, { useState, useContext, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OwnerStats = ({ navigation }) => {
  const stats = [
    ["EVENTS PUBLISHED",156],
    ["ACTIVITIES PUBLISHED",2],
    ["EVENTS VISUALIZ.",85004585],
    ["ACTIVITIES VISUALIZ.",6158135151],
  ]


  return (
    <View style={ styles.Menu}>
        <View style={{flexDirection:"row", marginLeft:10}}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            // style={{ position: 'absolute', top: 20, left: 20 }}
            >
            <Ionicons name={'arrow-back'} size={25} color={'white'} />
            </TouchableOpacity>
            <View>
                <Text style={[styles.HeadingText,{textAlign:"left",color:"rgb(34, 174, 179)",paddingLeft:5}]}>Owner Statistics</Text>
                <View style={[styles.borderBottem,{width:"150%",borderBottomColor:"rgb(34, 174, 179)"}]}></View>
            </View>
        </View>
      <ScrollView style={{width:"100%"}}>
        <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", marginVertical:40, marginHorizontal: 20}}>
            <Image style={{width:100,height:100}} source={require('../../../Assets/pr1.png')}/>
            <View style={{alignItems:"center", marginHorizontal:10}}>
                <Text style={styles.text}>David deep</Text>
                <Text style={styles.subText}>21 March, 2022</Text>
            </View>
        </View>
        <Text style={[styles.HeadingText,{color:"rgb(34, 174, 179)"}]}>Subscription:</Text>
        
        <View style={{justifyContent:"center", alignItems:"center", marginVertical:15}}>
            <Text style={[styles.HeadingText, styles.planPill]}>Manager Plan</Text>
        </View>

        {/* Styles for different plans */}
        {/* <View style={{justifyContent:"center", alignItems:"center", marginVertical:15}}>
            <Text style={[styles.HeadingText, styles.planPill,{backgroundColor:"#202020",borderColor:"#676767",}]}>No Plan</Text>
        </View>
        <View style={{justifyContent:"center", alignItems:"center", marginVertical:15}}>
            <Text style={[styles.HeadingText, styles.planPill,{backgroundColor:"#391b43",borderColor:"#bb57de",}]}>Business Plan</Text>
        </View>
        <View style={{justifyContent:"center", alignItems:"center", marginVertical:15}}>
            <Text style={[styles.HeadingText, styles.planPill,{backgroundColor:"#102a3d",borderColor:"#4084b6",}]}>Basic Plan</Text>
        </View>
        <View style={{justifyContent:"center", alignItems:"center", marginVertical:15}}>
            <Text style={[styles.HeadingText, styles.planPill,{backgroundColor:"#452f14",borderColor:"#e29942",}]}>Business Plan</Text>
        </View> */}
        {
            stats.map((val,index)=> 
                <View key={index} style={{flexDirection:"row", width:"90%", marginLeft:20, paddingHorizontal:10, paddingVertical:5, justifyContent:"space-between", marginVertical:10, borderRadius:8, backgroundColor:"rgba(171, 171, 171, 0.13)"}}>
                    <Text style={[styles.HeadingText,{color:"rgb(34, 174, 179)",fontWeight:"600",fontSize:20,lineHeight:30}]}>{val[0]}</Text>
                    <Text style={[styles.HeadingText,{color:"rgb(34, 174, 179)",fontWeight:"600",fontSize:20,lineHeight:30}]}>{val[1]}</Text>
                </View>
            )
        }
    </ScrollView >
    </View>
  );
};

export default OwnerStats;

const styles = StyleSheet.create({
Menu: {
    flex:1,
    backgroundColor: '#28282B',
    paddingTop: 25,
    // paddingLeft:10
    },
    
  borderBottem: {
    borderBottomWidth: 4,
    borderColor: 'silver',
    borderBottem: 3,
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    margin: 10,
    height: 45,
    width: '90%',
    borderRadius: 15,
    // borderColor: 'white',
    // borderWidth: 2,
    // shadowColor: 'black',
    backgroundColor: '#D3D3D3',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#6F7EC9',shadowOffset: {
      width: 0,
      height: 12,
    },shadowOpacity: 0.58,shadowRadius: 16, elevation:24
  },
  btntext1: {
    lineHeight: 27,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20, 
    fontWeight: '600',
  },
    HeadingText: {
    // marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '700',
  },
  bottemSec: {
    // height: '9%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: -10,
    left: 0,
    zIndex: 50
  },
  text:{
    fontSize:20, fontWeight:400, color:"white"
    },
    subText:{
        fontSize:15, fontWeight:400, color:"white"
    },
    planPill:{fontSize:22,backgroundColor:"#122f12",borderWidth:3, borderColor:"#41B93E", borderRadius:40, width:"50%", paddingHorizontal:15,}
});
