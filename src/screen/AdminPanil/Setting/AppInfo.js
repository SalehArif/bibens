/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AppInfo = ({navigation}) => {
  const [settingOpen, setSettingOpen] = useState(true);
  const [appInfoOpen, setappInfoOpen] = useState(false);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [termOpen, setTermOpen] = useState(false);
  const [contectOpen, setContectOpen] = useState(false);

  const infoHandler = () => {
    setSettingOpen(true);
    setappInfoOpen(false);
    setPrivacyPolicyOpen(false);
    setTermOpen(false);
    setContectOpen(false);
    // console.log('--21,' , setSettingOpen(true))
  };
  return (
    <View>
      {settingOpen ? (
        <View style={styles.appInfoMenu}>
          <View style={{flexDirection: 'row', width: '100%', paddingLeft: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AdminSetting')}
              // onPress={() => setappInfoOpen(!appInfoOpen)}
            >
              <Ionicons
                name={'md-arrow-back-sharp'}
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
            <Text
              style={[styles.HeadingText, {alignSelf: 'center', width: '70%'}]}>
              App Info
            </Text>
          </View>

        
          <View style={styles.borderBottem}></View>
          <View style={{width: '85%',alignSelf:'center'}}>
            <TouchableOpacity
              style={[styles.curnt_Bal_main]}
              onPress={() => setappInfoOpen(!appInfoOpen)}
              // onPress={() => setappInfoOpen(true)}
            >
              <Image
                source={require('../../../Assets/app.png')}
                style={styles.img}
              />
              <Text style={styles.BalanceText}>App Version</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.curnt_Bal_main]}
              onPress={() => setPrivacyPolicyOpen(!privacyPolicyOpen)}>
              {/* <FontAwesome5 name={'coins'} size={40} color={'#25B3AF'} /> */}
              <Image
                source={require('../../../Assets/policy.png')}
                style={styles.img}
              />
             
              <Text style={styles.BalanceText}>Privacy Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.curnt_Bal_main]}
              // onPress={() => seTtermOpen(true)}
              onPress={() => setTermOpen(true)}>
             
             <Image
                source={require('../../../Assets/term.png')}
                style={styles.img}
              /> 
              <Text style={styles.BalanceText}>Terms Of Use</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.curnt_Bal_main]}
              onPress={() => setContectOpen(true)}>
             <Image
                source={require('../../../Assets/contact.png')}
                style={styles.img}
              />
              <Text style={styles.BalanceText}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {appInfoOpen ? (
        <View style={styles.appInfoMenu1}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <TouchableOpacity onPress={() => setappInfoOpen(!appInfoOpen)}>
              <Ionicons
                name={'md-arrow-back-sharp'}
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
            <Text
              style={[styles.HeadingText, {alignSelf: 'center', width: '70%'}]}>
              App Version
            </Text>
          </View>
          <View style={styles.borderBottem}></View>
          <View style={{width: '100%', paddingTop: 19,alignItems:'center'}}>
            <Text style={[styles.BalanceText]}>
              Paragraph Collection (Package Name: com.pritom.paragraph) is
              developed by Riyad-Pritom and the latest version of Paragraph
              Collection 2.0 was updated on October 11, 2015. Paragraph
              Collection is in the category of Education. You can check all apps
              from the developer of Paragraph Collection. Currently this app is
              for free. This app can be downloaded on Android 2.3.4+ on APKFab
              or Google Play. All APK/XAPK files on APKFab.com are original and
              100% safe with fast download. If you are looking for a paragraph
              app or paragraph collection or English paragraph, so you are in a
              right place. This paragraph app will help you to learn paragraph &
              to paragraph writing with easy grammar.
            </Text>
          </View>
        </View>
      ) : null}
      {privacyPolicyOpen ? (
        <View style={styles.appInfoMenu1}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <TouchableOpacity
              onPress={() => setPrivacyPolicyOpen(!privacyPolicyOpen)}>
              <Ionicons
                name={'md-arrow-back-sharp'}
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
            <Text
              style={[styles.HeadingText, {alignSelf: 'center', width: '70%'}]}>
              Privacy Policy
            </Text>
          </View>
          <View style={styles.borderBottem}></View>

          <View style={{width: '100%', paddingTop: 19}}>
            <Text style={styles.BalanceText}>
              Paragraph Collection (Package Name: com.pritom.paragraph) is
              developed by Riyad-Pritom and the latest version of Paragraph
              Collection 2.0 was updated on October 11, 2015. Paragraph
              Collection is in the category of Education. You can check all apps
              from the developer of Paragraph Collection. Currently this app is
              for free. This app can be downloaded on Android 2.3.4+ on APKFab
              or Google Play. All APK/XAPK files on APKFab.com are original and
              100% safe with fast download. If you are looking for a paragraph
              app or paragraph collection or English paragraph, so you are in a
              right place.
            </Text>
          </View>
        </View>
      ) : null}
      {termOpen ? (
        <View style={styles.appInfoMenu1}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <TouchableOpacity onPress={() => setTermOpen(!termOpen)}>
              <Ionicons
                name={'md-arrow-back-sharp'}
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
            <Text
              style={[styles.HeadingText, {alignSelf: 'center', width: '70%'}]}>
              App Version
            </Text>
          </View>
          <View style={styles.borderBottem}></View>

          <View style={{width: '100%', paddingTop: 19}}>
            <Text style={styles.BalanceText}>
              Paragraph Collection (Package Name: com.pritom.paragraph) is
              developed by Riyad-Pritom and the latest version of Paragraph
              Collection 2.0 was updated on October 11, 2015. Paragraph
              Collection is in the category of Education. You can check all apps
              from the developer of Paragraph Collection. Currently this app is
              for free. This app can be downloaded on Android 2.3.4+ on APKFab
              or Google Play. All APK/XAPK files on APKFab.com are original and
              100% safe with fast download. If you are looking for a paragraph
              app or paragraph collection or English paragraph, so you are in a
              right place. This paragraph app will help you to learn paragraph &
              to paragraph writing with easy
            </Text>
          </View>
        </View>
      ) : null}
      {contectOpen ? (
        <View style={styles.appInfoMenu1}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <TouchableOpacity onPress={() => setContectOpen(!contectOpen)}>
              <Ionicons
                name={'md-arrow-back-sharp'}
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
            <Text
              style={[styles.HeadingText, {alignSelf: 'center', width: '70%'}]}>
             Contact us
            </Text>
          </View>

          <View style={styles.borderBottem}></View>

          <View style={{width: '100%', paddingTop: 19}}>
            <Text style={styles.BalanceText}>
              Paragraph Collection (Package Name: com.pritom.paragraph) is
              developed by Riyad-Pritom and the latest version of Paragraph
              Collection 2.0 was updated on October 11, 2015. Paragraph
              Collection is in the category of Education. You can check all apps
              from the developer of Paragraph Collection. Currently this app is
              for free. This app can be downloaded on Android 2.3.4+ on APKFab
              or Google Play. All APK/XAPK files on APKFab.com are original and
              100% safe with fast download. If you are looking for a paragraph
              app or paragraph collection or English paragraph, so you are in a
              right place. This paragraph app will help you to learn paragraph &
              to paragraph writing with easy grammar. This paragraph in English
              app is specially for bengali, indian, pakistani, srilankan,
              nepali, bhutani, bangladeshi students. This app contains: 100+
              Paragraph Collection Paragraphs in English User Friendly Interface
              Easy to Use & Learn Optimized for Tablets So keep install and
              learning
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default AppInfo;

const styles = StyleSheet.create({
  centeredView: {
    // backgroundColor: '#00000090',
    height: '95%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  HeadingText: {
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '700',
  },
  BalanceText: {
    // marginBottom: 35,
    paddingLeft: 15,
    // alignSelf: 'center',
    color: 'white',
    fontSize: 18,
  },

  curnt_Bal_main: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 2,

    width: '100%',
  },
  curnt_Bal_: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#28CCF2',

    elevation: 2,
    borderRadius: 20,
    color: 'white',
    marginBottom: 15,
    width: '30%',
  },

  curnt_Bal: {
    padding: 15,
    flexDirection: 'row',
    // paddingBottom: 30,
    // paddingLeft:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28CCF2',
    // width: '100%',
    // borderWidth: 0.1,
    elevation: 2,
    borderRadius: 10,
    color: 'white',
    marginBottom: 15,
    width: '22%',
  },
  //
  flex: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // paddingVertical: 20
  },
  borderBottem: {
    borderBottemWidth: 4,
    borderColor: '#454545',
    borderBottem: 3,
    marginBottom: 30,
    borderBottomWidth: 1,
    // alignSelf:'flex-end'
    paddingVertical: 10,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  appInfoMenu: {
    // position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // margin: 20,
    backgroundColor: '#28282B',

    // borderRadius: 20,
    paddingTop: 25,
  },
  appInfoMenu1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#28282B',
    // borderRadius: 20,
    paddingTop: 25,
    paddingHorizontal: 25,
  },
});
