/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-gesture-handler'
import TextInputField from '../../component/inputfield'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import FontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons'

const Notifications = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(true);
    const [notification, setNotification] = useState(true);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >

            <View style={styles.centeredView}>

                <View style={styles.modalView}>
                    <View style={{ width: '90%' }}>
                        <TouchableOpacity style={styles.closeBtn}
                            onPress={() => navigation.navigate("Spots")}>

                            <Ionicons name={"close"} size={30} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.HeadingText}>Notifications</Text>
                        <Text style={styles.modalText}>
                            Keep yourself up to date
                        </Text>
                        {notification ?
                        
                        <View style={styles.curnt_Bal_main}>
                            <Text style={styles.balvaluetxt} >Spot available nearby</Text>

                            <Text style={styles.BalanceText}>
                                A spot has been added to the map in
                                a location near you.
                            </Text>
                            <View style={{ alignSelf: 'flex-end' }}>
                                <MaterialIcons name={"arrow-forward-ios"} size={20} color={'white'} />

                            </View>

                        </View>
                            :
                            <View style={styles.curnt_Bal_}>
                                <Ionicons name={"md-notifications"} size={80} color={'#28CCF2'} />
                                <Text style={styles.Inner_box_Text}>Your notifications will be displayed here</Text>
                            </View>

                        }




                    </View>
                </View>

                {/* <Button></Button> */}


            </View>


        </Modal>
    )
}

export default Notifications


const styles = StyleSheet.create({

    centeredView: {
        width: '100%',
        height: '50%',
        flex: 1,
    },
    modalView: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },





    HeadingText: {
        marginBottom: 0,
        textAlign: "center",
        color: '#28CCF2',
        fontSize: 53
    },
    modalText: {
        marginBottom: 35,
        textAlign: "center",
        color: '#28CCF2',
        fontSize: 18
    },
    BalanceText: {
        // marginBottom: 35,
        // textAlign: "center",
        color: 'white',
        fontSize: 16
    },


    curnt_Bal_main: {
        padding: 20,
        // paddingBottom: 30,
        // paddingLeft:20,
        // alignItems: 'center',
        backgroundColor: '#28CCF2',
        width: '100%',
        borderWidth: 0.1,
        // elevation: 2,
        borderRadius: 2,
        color: 'white',
        marginBottom: 15,

    },

    curnt_Bal_: {
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },




    // text
    Inner_box_Text: {
        // textAlign: "center",
        // alignSelf: 'center',
        color: '#28CCF2',
        fontSize: 14,
        fontWeight: '600',
        paddingTop: 20,

    },

    balvaluetxt: {

        color: 'white',
        fontSize: 25,
        fontWeight: '900',
    },


    // Button


    closeBtn: {
        alignSelf: 'flex-start',
        // marginLeft: 15,
        marginTop: 20,
        justifyContent: 'center', alignItems: 'center', borderRadius: 45, width: 40, height: 40, backgroundColor: '#28CCF2'
    },



})