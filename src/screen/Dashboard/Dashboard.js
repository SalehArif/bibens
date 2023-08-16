import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const Dashboard = ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dlicence, setDlicence] = useState('')
    const [licenceID, setlicenceID] = useState('')


    const [listSpotView, setListSpotView] = useState(true)

    const [activespotView, setActivespotView] = useState(false)

    const [listingView, setListingView] = useState(false)

    const listSpotViewHandler = () => {
        setListSpotView(true)
        setActivespotView(false)

        setListingView(false)
    }
    const activespotViewHandler = () => {
        setListSpotView(false)
        setActivespotView(true)

        setListingView(false)
    }
    const listingHandler = () => {
        setListingView(true)

        setListSpotView(false)
        setActivespotView(false)

    }
    const closeHandler = () => {
        setListingView(false)

        setListSpotView(false)
        setActivespotView(false)
    }



    return (
        <View>
            <StatusBar
                backgroundColor={'#28ccfe'} translucent={false} barStyle="light-content" style={{ color: 'blue' }} />

            {listSpotView ?

                <View style={{ backgroundColor: '#28CCF2', width: '100%', height: '100%', }}>

                    <View style={{
                        flexDirection: 'row',
                        // justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20
                    }}>
                        <TouchableOpacity style={styles.closeBtn}
                            onPress={() => navigation.navigate("Spots")}

                        >
                            <MaterialIcons name={"arrow-back-ios"} size={30} color={'white'} />

                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                            <Text style={{ color: 'white', fontSize: 40, fontWeight: '300' }}> Dashboard</Text>
                            <Text style={{ color: 'white', fontSize: 14, }}>
                                Welcome, Jack!
                            </Text>
                        </View>
                    </View>


                    <View style={styles.inputMain}>
                        <View style={{ width: '90%' }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginVertical: 20,
                            }}>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={listSpotViewHandler}
                                >
                                    <Text style={{ color: 'white', fontWeight: '700' }}>List a spot
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={activespotViewHandler}
                                >
                                    <Text style={{ color: 'white', fontWeight: '700' }}>Active spots
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={listingHandler}
                                >
                                    <Text style={{ color: 'white', fontWeight: '700' }}>Listing history
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.listSpotMain}>
                            {/* <View style={styles.curnt_Bal_main}> */}
                            <View style={styles.flex}>
                                <View style={styles.flex}>

                                    <Text style={styles.nametxt} >John Dohn</Text>

                                    <Text style={styles.ratingTxt} >
                                        <Ionicons name={"star"} size={10} color={'#28CCF2'} />
                                        4.8</Text>

                                </View>
                                <Ionicons name={"mail"} size={40} color={'white'} />

                            </View>
                            <Text style={styles.infoText} >Location: 1234 East 5th St. Brooklyn, NY 11223</Text>
                            <Text style={styles.infoText} >From: 11:00am - 12:00pm</Text>
                            <Text style={styles.infoText} >Amount: $25.00 USD</Text>
                            <View style={styles.flex}>
                                <TouchableOpacity
                                    style={[styles.buttonCancle]}
                                // onPress={() => setDepositOpen(!depositOpen)}
                                >
                                    <Text style={styles.canclebuttonText}>Decline</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.buttonConfrm]}
                                // onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text
                                        // onPress={() => navigation.navigate("Profilesidebar")} working here
                                        style={styles.buttonText}>Accept</Text>
                                </TouchableOpacity>
                            </View>
                            {/* </View> */}


                        </View>


                    </View >
                </View >
                : null}
            {/* Active spots */}
            {activespotView ?
                <View style={{ backgroundColor: '#28CCF2', width: '100%', height: '100%', }}>

                    <View style={{
                        flexDirection: 'row',
                        // justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20
                    }}>
                        <TouchableOpacity style={styles.closeBtn}
                            onPress={listSpotViewHandler}
                        // onPress={() => navigation.navigate("Dashboard")}
                        >

                            <MaterialIcons name={"arrow-back-ios"} size={30} color={'white'} />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                            <Text style={{ color: 'white', fontSize: 40, fontWeight: '300' }}> Active spots</Text>

                        </View>
                    </View>
                    <View style={styles.inputMain}>

                        <View style={styles.listSpotMain}>
                            <View style={styles.flex}>
                                <Text style={styles.nametxt} >Status: Active</Text>
                            </View>
                            <Text style={styles.infoText} >Location: 1234 East 5th St. Brooklyn, NY 11223</Text>
                            <Text style={styles.infoText} >From: 11:00am - 12:00pm</Text>
                            <Text style={styles.infoText} >Amount: $25.00 USD</Text>
                            {/* <View style={styles.flex}> */}
                            <TouchableOpacity
                                style={[styles.buttonCancle]}
                            // onPress={() => setDepositOpen(!depositOpen)}
                            >
                                <Text style={styles.canclebuttonText}>Deactivate spot</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                : null}
            {/* Listing history */}
            {listingView ?
                <View style={{ backgroundColor: '#28CCF2', width: '100%', height: '100%', }}>

                    <View style={{
                        flexDirection: 'row',
                        // justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20
                    }}>
                        <TouchableOpacity style={styles.closeBtn}
                            onPress={listSpotViewHandler}
                        >

                            <MaterialIcons name={"arrow-back-ios"} size={30} color={'white'} />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                            <Text style={{ color: 'white', fontSize: 40, fontWeight: '300' }}> Listing history</Text>
                            {/* <Text style={{ color: 'white', fontSize: 14, }}>
                                Welcome, Jack!
                            </Text> */}
                        </View>
                    </View>
                    <View style={styles.inputMain}>

                        <View style={styles.listSpotMain}>

                            <View style={styles.flex}>
                                <View style={styles.flex}>

                                    <Text style={styles.nametxt} >John Dohn</Text>

                                    <View style={{
                                        backgroundColor: 'white', borderRadius: 40, height: 18, width: 18,
                                        justifyContent: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }} >
                                        <FontAwesome name={"check"} size={15} color={'#28CCF2'} />
                                    </View>

                                </View>
                                {/* <Ionicons name={"mail"} size={40} color={'white'} /> */}

                            </View>
                            <Text style={styles.infoText} >Location: 1234 East 5th St. Brooklyn, NY 11223</Text>
                            <Text style={styles.infoText} >From: 11:00am - 12:00pm</Text>
                            <Text style={styles.infoText} >Amount: $25.00 USD</Text>

                            <View style={styles.flex}>
                                <View style={styles.flex}>

                                    <Text style={styles.nametxt} >$15.00</Text>
                                </View>
                                <MaterialIcons name={"arrow-forward-ios"} size={25} color={'white'} />

                            </View>
                        </View>
                        <View style={styles.listSpotMain}>

                            <View style={styles.flex}>
                                <View style={styles.flex}>

                                    <Text style={styles.nametxt} >John Dohn</Text>

                                    <View style={{
                                        backgroundColor: 'white', borderRadius: 40, height: 18, width: 18,
                                        justifyContent: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }} >
                                        <Ionicons name={"close"} size={15} color={'#28CCF2'} />
                                    </View>

                                </View>
                                {/* <Ionicons name={"mail"} size={40} color={'white'} /> */}
                            </View>
                            <Text style={styles.infoText} >Location: 1234 East 5th St. Brooklyn, NY 11223</Text>
                            <Text style={styles.infoText} >From: 11:00am - 12:00pm</Text>
                            <Text style={styles.infoText} >Amount: $25.00 USD</Text>

                            <View style={styles.flex}>
                                <View style={styles.flex}>
                                    <Text style={styles.nametxt} >$15.00</Text>
                                </View>
                                <MaterialIcons name={"arrow-forward-ios"} size={25} color={'white'} />

                            </View>
                        </View>
                    </View>

                </View>
                : null}
        </View >



    )
}

export default Dashboard

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
        backgroundColor: '#28CCF2',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    inputMain: {
        backgroundColor: 'white',
        height: "100%",
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
        backgroundColor: '#28CCF2',

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
        // marginBottom:10
    },
    buttonCancle: {
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 40,
        elevation: 2,
        color: 'white',
        backgroundColor: '#FF5757'


    },

    buttonConfrm: {
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 40,
        elevation: 2,
        color: '#28CCF2',
        backgroundColor: 'white'

    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center",
        color: '#28CCF2',


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
    ratingTxt: {
        // textAlign: "center",
        backgroundColor: 'white',

        alignSelf: 'center',
        color: '#28CCF2',
        fontSize: 12,
        fontWeight: '900',
        paddingVertical: 3,
        paddingHorizontal: 12,
        // borderRadius: 40
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