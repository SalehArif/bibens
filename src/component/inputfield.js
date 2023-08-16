import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'


const inputfield = ({ placeholder }) => {

    return (
        <TextInput
            placeholder={placeholder}

            underlineColorAndroid="transparent"
            autoCapitalize="none"
            textAlignVertical="top"
            style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center', width: '80%', height: 50, backgroundColor: '#fff', alignSelf: 'center', borderWidth: 0.3, elevation: 5, borderRadius: 40, paddingHorizontal: 19 }} />

    )
}

export default inputfield

const styles = StyleSheet.create({})