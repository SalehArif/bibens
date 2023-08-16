/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Image
} from 'react-native';
import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const Topmenu = ({ navigation, guest, showLoginError }) => {
  const [modalSearch, setModalModalSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [keywords, setKeywords] = useState('');

  return (
    <View style={styles.mainMenu}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.5 }}
        colors={['#33CC8F', '#28CCF2']}
        style={[styles.gradient,{justifyContent:'space-around'}]}>
       
        <TouchableOpacity
          onPress={() => navigation.navigate('Event')}
          style={{ alignItems: 'center' }}>
           {/* <Image
            source={require('../../Assets/search.png')}
            style={{ width:25,height:25}}
          /> */}
           <Feather name={'search'} size={25} color={'#2B2B2B'} />
          <Text style={{ color: '#2B2B2B',alignSelf:'center' }}>Search</Text>
        </TouchableOpacity>
       
       
        <TouchableOpacity
          onPress={() => navigation.navigate('Map')}
          style={{ alignItems: 'center' }}>
          {/* <Image
                source={require('../../Assets/hb.png')}
                style={{ width:28,height:25}}
              /> */}
          <FontAwesome5 name={'map-marker-alt'} size={23} color={'#2B2B2B'} />
          <Text style={{ color: '#2B2B2B' }}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if(guest)
              showLoginError(true)
            else  
              navigation.navigate('Favorite')
          }
          }
          style={{ alignItems: 'center' }}>
          {/* <Image
                source={require('../../Assets/hb.png')}
                style={{ width:28,height:25}}
              /> */}
          <Feather name={'heart'} size={25} color={'#2B2B2B'} />
          <Text style={{ color: '#2B2B2B' }}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => 
            {if(guest)
                showLoginError(true)
              else  
                navigation.navigate('Profile')
            }}
          style={{ alignItems: 'center' }}>
          {/* <Image
                source={require('../../Assets/mu.png')}
                style={{ width:28,height:28}}
              /> */}
          <FontAwesome name='user-circle' size={30} color={'#2B2B2B'} />
          <Text style={{ color: '#2B2B2B' }}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => 
            {
              if(guest)
                showLoginError(true)
              else  
                navigation.navigate('Setting')
            }}
          // onPress={() => navigation.navigate('Setting')}
          style={{ alignItems: 'center' }}>
         {/* <Image
                source={require('../../Assets/st.png')}
              style={[styles.img, { zIndex: 0 }]}
              /> */}
          <AntDesign name='setting' size={30} color={'#2B2B2B'} />
          <Text style={{ color: '#2B2B2B' }}>Setting</Text>
        </TouchableOpacity>
      </LinearGradient>
    
    </View>
  );
};

export default Topmenu;

const styles = StyleSheet.create({
  mainMenu: {
    backgroundColor: '#1897C7',
    width: '90%',
    // alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'row',
    // padding: 8,
    position: 'absolute',
    bottom: 11,
    borderRadius: 40,
    // marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#00000090',
  },
  modalView: {
    margin: 18,
    backgroundColor: 'red',
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 25,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // width: '100%',
  },
 

  inputText: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    color: '#28CCF2',
    fontSiz: 18,
    // paddingHorizontal: 59,
  },

  // gradient
  btn: {
    marginTop: 13,
    height: 43,
    width: '35%',
    borderRadius: 10,
    // shadowColor: 'black',
    // backgroundColor: '#28CCF2',
    // textAlign: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignSelf: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btntext: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 27,
    textTransform: 'uppercase',
  },
  gradient: {
    width: '100%',
    height: '100%',
    padding: 8,
    // textAlign: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 35,
    flexDirection: 'row',
  },

 
});
