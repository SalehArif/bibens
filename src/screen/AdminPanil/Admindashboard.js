/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons'

const Admindashboard = ({ navigation}) => {
    return (
        <View style={{ backgroundColor: '#ed5f1e', width: '100%', height: '100%', }}>
            <StatusBar
                backgroundColor={'#ed5f1e'} translucent={false} barStyle="light-content" style={{ color: 'blue' }} />

            <View style={{

                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20
            }}>

                <View style={{ justifyContent: 'center', }}>

                    <Text style={{ color: 'white', fontSize: 40, fontWeight: '300' }}> Curbside 
                    </Text>
                    <Text style={{ color: 'white', fontSize: 14,paddingLeft:20  }}>
                        Admin portal
                    </Text>
                </View>


                <TouchableOpacity style={styles.closeBtn}
                onPress={() => navigation.navigate("Payment")}
                >
                    <Ionicons name={"exit-outline"} size={30} color={'white'} />

                </TouchableOpacity>


            </View>

            <ScrollView>


                <View style={styles.inputMain}>
                    <View style={{ width: '90%' }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginVertical: 20,
                        }}>
                            <TouchableOpacity
                                style={styles.btn}
                            // onPress={listSpotViewHandler}
                            >
                                <Text style={{ color: 'white', fontWeight: '700' }}>See all users
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btn}
                            // onPress={activespotViewHandler}
                            >
                                <Text style={{ color: 'white', fontWeight: '700' }}>Commissions
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btn}
                            // onPress={listingHandler}
                            >
                                <Text style={{ color: 'white', fontWeight: '700' }}>Notifications
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/*  */}
                    <View style={styles.listSpotMain}>
                        <View style={styles.flex}>
                            <View style={styles.flex}>
                                <Text style={styles.nametxt} >Total Spot Finders</Text>
                            </View>
                        </View>
                        <View style={styles.flex}>
                            <TouchableOpacity
                                style={[styles.buttonConfrm]}
                            // onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text
                                    style={styles.buttonText}>44,982</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/*  */}
                    <View style={styles.listSpotMain}>
                        <View style={styles.flex}>
                            <View style={styles.flex}>
                                <Text style={styles.nametxt} >Total Spot Providers</Text>
                            </View>
                        </View>
                        <View style={styles.flex}>
                            <TouchableOpacity
                                style={[styles.buttonConfrm]}
                            // onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text
                                    style={styles.buttonText}>102,547</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* earning */}
                    <View style={styles.listSpotMain}>
                        <View style={styles.flex}>
                            <View style={styles.flex}>
                                <Text style={styles.nametxt} >Earnings OvertimeE</Text>
                            </View>
                        </View>
                        <View style={styles.flex}>
                            <TouchableOpacity
                                style={[styles.buttonConfrm]}
                            // onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text
                                    style={styles.buttonText}>Today</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/*  */}
                    <View style={styles.listSpotMain}>
                        <View style={styles.flex}>
                            <View style={styles.flex}>
                                <Text style={styles.nametxt1} >Total Earnings
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.flex,styles.marginbtm]}>
                            <View style={{ width: '45%' }}>
                                <Text
                                    style={styles.canclebuttonText}>Year to date:
                                </Text>
                                <TouchableOpacity
                                    style={[styles.EarningValues]}
                                // onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text
                                        style={styles.buttonText}>$544.48</Text>
                                </TouchableOpacity>
                            </View>


                            <View style={{ width: '45%' }}>
                                <Text
                                    style={styles.canclebuttonText}>Year to date:
                                </Text>
                                <TouchableOpacity
                                    style={[styles.EarningValues]}
                                // onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text
                                        style={styles.buttonText}>$4,899.00
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[styles.flex,styles.marginbtm]}>
                            <View style={{ width: '45%' }}>
                                <Text
                                    style={styles.canclebuttonText}>Month to date:
                                </Text>
                                <TouchableOpacity
                                    style={[styles.EarningValues]}
                                // onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text
                                        style={styles.buttonText}>$15,698.32</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ width: '45%' }}>
                                <Text
                                    style={styles.canclebuttonText}>Year to date:
                                </Text>
                                <TouchableOpacity
                                    style={[styles.EarningValues]}
                                // onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text
                                        style={styles.buttonText}>$200,765.65</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>

                  

                </View >

            </ScrollView>


        </View >
    )
}

export default Admindashboard

const styles = StyleSheet.create({
    closeBtn: {
        // backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: 40,
        // height: 40,
        // borderRadius: 40,
        // alignSelf: 'flex-start',
        // marginHorizontal: 20,
        marginRight: 20

    },
    btn: {

        width: "30%",
        paddingVertical: 7,
        borderRadius: 50,
        shadowColor: 'black',
        backgroundColor: '#ed5f1e',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    inputMain: {
        backgroundColor: 'white',
        // height: "100%",
        // justifyContent:'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginVertical: 0
    }
    ,
    listSpotMain: {
        padding: 20,
        marginTop: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '80%',
        // height: 50,
        backgroundColor: '#ed5f1e',

        alignSelf: 'center',
        // borderWidth: 0.3,
        elevation: 5,
        borderRadius: 30,
        marginBottom: 19
    },
    // button
    flex: {
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
    },
    marginbtm:{
    marginBottom:10

    },
    buttonCancle: {
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 40,
        elevation: 2,
        color: 'white',
        backgroundColor: 'red'


    },

    buttonConfrm: {
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 40,
        elevation: 2,
        color: '#ed5f1e',
        backgroundColor: 'white'

    },
    EarningValues: {
        borderRadius: 20,
        paddingVertical: 7,
        // paddingHorizontal: 20,
        elevation: 2,
        color: '#ed5f1e',
        backgroundColor: 'white',
        // alignSelf:'center',
        width: '100%'

    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center",
        color: '#ed5f1e',


    },
    canclebuttonText: {
        fontWeight: "bold",
        textAlign: "center",
        color: 'white',


    },

    // text
    nametxt: {
        // textAlign: "center",
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
        paddingRight: 7
    },
    nametxt1: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
        paddingRight: 7,
        textAlign: 'center'
    },

    infoText: {
        // alignSelf: 'center',
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
        paddingBottom: 10,
        paddingLeft: 20
    },

})