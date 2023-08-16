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
import Filters from '../AdminControls/filters'; 
import Activtytipology from '../AdminControls/activtytipology';
import Menu from '../../../component/menu/Topmenu2'

const Profile = ({ navigation }) => {
  const [modalVisible,setModalVisible] = useState(false)
  const [visible,setVisible] = useState(false)


  return (
    <View style={ styles.Menu}>
      <Text style={[styles.HeadingText,]}>Admin Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: 20, left: 20 }}>
          <Ionicons name={'arrow-back'} size={25} color={'white'} />
        </TouchableOpacity>
        <View style={styles.borderBottem}></View>

      <ScrollView style={{width:"100%"}}>

      <TouchableOpacity style={[styles.btn,{marginTop:25}]}
        onPress={()=>navigation.navigate("AdminProfileMessage")}
      >
        <Text style={[styles.btntext1]}>Send a Message </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn]}
        onPress={()=>navigation.navigate("ManageUsers")}
      >
        <Text style={[styles.btntext1]}>Users Management</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn]}
        onPress={()=>navigation.navigate("ManageOwners")}
      >
        <Text style={[styles.btntext1]}>Owners Management</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn]}
        onPress={()=>navigation.navigate("GeneralStatistics")}
      >
        <Text style={[styles.btntext1]}>General Statistics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn]}
        onPress={()=>navigation.navigate("GeographicalStatistics")}
      >
        <Text style={[styles.btntext1, ]}>Geographic Statistics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn]}
        onPress={()=>setVisible(true)}
      >
        <Text style={[styles.btntext1]}>Manage Activities Tipology</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn]}
        onPress={()=>navigation.navigate("AdminImages")}
      >
        <Text style={[styles.btntext1]}>Standard images for Owners</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn]}
        onPress={()=> setModalVisible(true)}
      >
        <Text style={[styles.btntext1]}>Manage Filters</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn]}
        onPress={()=> navigation.navigate("AdminPremiumVersion")}
      >
        <Text style={[styles.btntext1]}>Premium management</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, {marginBottom:"20%"}]}
        onPress={()=>navigation.navigate("AdminControlPanel")}
      >
        <Text style={[styles.btntext1]}>Control Panel</Text>
      </TouchableOpacity>

      { modalVisible ? <Filters setModalVisible={setModalVisible} />: null}
      { visible ? <Activtytipology setVisible={setVisible} />: null}
    </ScrollView >
    <View style={styles.bottemSec}>
        <Menu navigation={navigation} />
    </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Menu: {
    width: '100%',
    height: '100%',
    backgroundColor: '#28282B',
    // borderRadius: 20,
    paddingTop: 25,
    // justifyContent:'center',
    alignItems: 'center',
    elevation: 5,
    position: 'relative',
    bottom: 0,
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
});
