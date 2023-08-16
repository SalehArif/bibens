/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Review = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#28CCF2', width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                //  onPress={spotHandler}
                style={{ position: 'absolute', top: 20, right: 20 }}
            >
                <Ionicons name={"md-close-circle"} size={40} color={'white'} />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 42,letterSpacing:2 }}>Review</Text>

            <Text style={{ color: 'white', fontSize: 14 }}>your recent experience</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '80%', marginHorizontal: 10, marginVertical: 25 }}>

                <FontAwesome5 name={"star"} size={40} color={'white'} />
                <FontAwesome5 name={"star"} size={40} color={'white'} />
                <FontAwesome5 name={"star"} size={40} color={'white'} />
                <FontAwesome5 name={"star"} size={40} color={'white'} />
                <FontAwesome5 name={"star"} size={40} color={'white'} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '80%', marginHorizontal: 10, marginVertical: 15 }}>
                <View style={{ borderRadius: 50, backgroundColor: '#FF5757', padding: 20, justifyContent: 'center', alignItems: 'center', transform: [{ rotate: '180deg' }] }}>
                    <FontAwesome5 name={"thumbs-up"} size={40} color={'white'} />
                </View>
                <View style={{ borderRadius: 50, backgroundColor: 'green', padding: 20, justifyContent: 'center', alignItems: 'center', }}>
                    <FontAwesome5 name={"thumbs-up"} size={40} color={'white'} />
                </View>
 </View>
            <TouchableOpacity
                //  onPress={spotHandler}
                onPress={() => navigation.navigate("Spots")}
                style={styles.btn}
            >
                <Text style={{ alignSelf: 'center', color: '#28CCF2', paddingHorizontal: 5, paddingVertical: 8,  fontWeight: '900', }}>Submit
                </Text>
            </TouchableOpacity>


            <Text style={{ color: 'white', fontSize: 11, width: '70%', textAlign: 'center' }}>Your review will not be seen by the spot provider,
                instead this feedback will help other spot finders
                experiences and enhance reliability.</Text>

        </View>
    )
}

export default Review

const styles = StyleSheet.create({
    btn: {
        width: '50%',
        alignSelf: 'center',
        justifyContent: 'center',
         backgroundColor: 'white',
         borderRadius: 20,
         marginVertical:15
    }
})



