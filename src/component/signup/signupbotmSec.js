/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const botmSec = ({navigation}) => {
  return (
    <View
    style={styles.btmMain}>
    <Text style={[styles.btnText]}>Don’t have an account?</Text>
    <TouchableOpacity
    //  onPress={() => navigation.navigate('Signup')}
     onPress={() => navigation.navigate('Signup')}
      // onPress={() => navigation.navigate('Login')}
      style={{}}>
      <Text style={[styles.btnText,{color: '#28CCF2', paddingLeft: 4,}]}> Sign up</Text>
    </TouchableOpacity>
  </View>
  )
}

export default botmSec

const styles = StyleSheet.create({
btmMain:{
      paddingVertical: 10,
      color: 'white',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop:30
    },
    btnText: {
    
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 25,
      color: '#D3D3D3',
    },
})