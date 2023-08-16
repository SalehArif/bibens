/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RadioButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const PaymentMethod = ({navigation}) => {
  const [ccNumber, setccNumber] = useState('');
  const [craditCardNumber, setCraditCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [zip, setZip] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{paddingTop: 25, left: 20}}>
        <Ionicons name={'arrow-back'} size={30} color={'white'} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 30,
        }}>
        <View
          style={[
            styles.rdioflex,
            // {paddingHorizontal:10}
          ]}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            // buttonColor={'#2196f3'}
            // buttonInnerColor={'#e74c3c'}
            // buttonColor={'white'}
            color="white"
          />

          <Image source={require('../../Assets/visa.png')} style={styles.img} />
        </View>
        <View style={styles.rdioflex}>
          <RadioButton
            buttonColor={'#2196f3'}
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color="white"
            style={{paddingVertical: 20}}
          />
          <Image
            source={require('../../Assets/master.png')}
            style={styles.img}
          />
        </View>
      </View>

      <Text style={styles.inputText}>Credit card number</Text>
      <TextInput
        // placeholder="CCN"
        value={ccNumber}
        // keyboardType="password"
        // type="pasword"
        secureTextEntry
        onChangeText={value => {
          setccNumber(value);
        }}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        // textAlignVertical="top"
        style={styles.input}
      />

      <Text style={styles.inputText}>Card holder name</Text>
      <TextInput
        // placeholder="Credit Card Number"
        value={craditCardNumber}
        onChangeText={value => {
          setCraditCardNumber(value);
        }}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        textAlignVertical="top"
        style={styles.input}
      />
      <Text style={styles.inputText}>
        CVV (3-digit card verification number)
      </Text>

      <TextInput
        // placeholder="cvv"
        value={cvv}
        onChangeText={value => {
          setCvv(value);
        }}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        textAlignVertical="top"
        style={styles.input}
      />
      <Text style={styles.inputText}>Valid till</Text>

      <TextInput
        // placeholder="valid till"
        value={zip}
        onChangeText={value => {
          setZip(value);
        }}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        textAlignVertical="top"
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setOpenModal(!openModal)}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0.5}}
          colors={['#33CC8F', '#28CCF2']}
          style={styles.gradient}>
          <Text style={[styles.btntext]}>SAVE</Text>
        </LinearGradient>
      </TouchableOpacity>
    
      {/* </View> */}
      {/* ------------- payment Modal---------- */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          setOpenModal(!openModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={[
                styles.circle,
                // {borderLeftWidth: 0},gradient
              ]}>
                 <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#33CC8F', '#28CCF2']}
                style={[
                  styles.gradient,{borderRadius:50}
                ]}>
              <Feather
                name={'check'}
                size={30}
                color={'white'}
                //   style={{top: 30, position: 'absolute', left: 25}}
              />
              </LinearGradient>
            </View>
            <View style={{}}>
              <Text style={{fontFamily:"Poppins", fontSize:18, fontWeight:"400", textAlign:"center", marginBottom:30}}>Payment made Succesfully!</Text>
              <Text style={{fontFamily:"Poppins", fontSize:18, fontWeight:"400", textAlign:"center", marginBottom:20}}>The selected plan is now Activated!</Text>
            </View>

            <TouchableOpacity
              style={[styles.btn,{width:'80%',height:50}]}
              onPress={() => {setOpenModal(!openModal); navigation.navigate({
                name: "Organizor", merge:true});} }>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0.5}}
                colors={['#33CC8F', '#28CCF2']}
                style={[styles.gradient,]}>
                <Text style={[styles.canclebuttonText,]}>Close</Text>
              </LinearGradient>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
      {/*  */}
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    // flex: 1,
    // justifyContent: 'flex-end',
    backgroundColor: '#28282B',
  },
  rdioflex: {
    marginTop: 20,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    width: '100%',
    // height: '10%',`
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000090',
  },
  modalView: {
    width: '60%',
    // height: '50%',
    borderRadius: 20,
    // borderTopRightRadius: 20,
    // margin: 20,
    backgroundColor: 'white',
    // borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#28CCF2',
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  HeadingText: {
    marginBottom: 30,
    textAlign: 'center',
    color: '#28CCF2',
    fontSize: 35,
  },
  input: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    alignSelf: 'center',
    // borderWidth: 0.3,
    elevation: 5,
    borderRadius: 15,
    paddingHorizontal: 19,
  },

  buttonCancle: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginVertical: 20,
    elevation: 2,
    backgroundColor: '#2DC19D',
    alignItems: 'center',
    alignSelf: 'center',
  },
  canclebuttonText: {
    fontWeight: '400',
    lineHeight: 24,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  inputText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 27,
    width: '90%',
    alignSelf: 'center',
  },

  // -----------------
  btn: {
    marginTop: 15,
    height: 50,
    width: '40%',
    borderRadius: 20,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btntext: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 27,
    textTransform: 'uppercase',
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
