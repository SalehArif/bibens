/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Switch } from 'react-native-switch';
import Menu from '../../../component/menu/Topmenu2'

const SponsorEvent = ({ navigation }) => {
  const [openCard, setopenCard] = useState(true);
  const [openYearPlan, setopenYearPlan] = useState(false);
  const [openMonthPlan, setOpenMonthPlan] = useState(false);

  const [openBasicPlan, setopenBasicPlan] = useState(false);
  const [openManagerPlan, setopenManagerPlan] = useState(false);
  const [openBusinessPlan, setopenBusinessPlan] = useState(false);
  
  const [MonthPlan, setMonthPlan] = useState({description:"Remove all the advertisements\nfrom your screens for one entire\nmonth!", price:1, editDescription:"Remove all the advertisements\nfrom your screens for one entire\nmonth!", editPrice:1});
  const [YearPlan, setYearPlan] = useState({description:"Remove all the advertisements\nfrom your screens for one entire\nyear!", price:8, editDescription:"Remove all the advertisements\nfrom your screens for one entire\nyear!", editPrice:8});
  const [BasicPlan, setBasicPlan] = useState({description:"Sponsorize your event/activity for 1 entire day. You'll have the possibility to be in the first positions when the users will open the App!", price:2, editDescription:"Sponsorize your event/activity for 1 entire day. You'll have the possibility to be in the first positions when the users will open the App!", editPrice:2});
  const [ManagerPlan, setManagerPlan] = useState({description:"Sponsorize your event/activity for 7 days. You'll have the possibility to be in the first positions when the users will open the App!", price:10, editDescription:"Sponsorize your event/activity for 7 days. You'll have the possibility to be in the first positions when the users will open the App!", editPrice:10});
  const [BusinessPlan, setBusinessPlan] = useState({description:"Sponsorize your event/activity for 30 days. You'll have the possibility to be in the first positions when the users will open the App!", price:27, editDescription:"Sponsorize your event/activity for 30 days. You'll have the possibility to be in the first positions when the users will open the App!", editPrice:27});

  const [editDescription, setEditDescription] = useState(false);
  const [editPrice, setEditPrice] = useState(false);

  const [isEnabled, setIsEnabled] = useState([true,true,true,true,true]);
  const toggleSwitch = (index) => {
    var tempArr = isEnabled;
    tempArr[index] = !tempArr[index]
    setIsEnabled([...tempArr]);
    // setIsEnabled(previousState => ([...previousState, ]));
  };
  


  const cardHandler = () => {
    setopenCard(true);
    setopenYearPlan(false);
    setOpenMonthPlan(false);
    setopenBasicPlan(false);
    setopenManagerPlan(false);
    setopenBusinessPlan(false);
    setEditDescription(false)
    setEditPrice(false)
  };

  const monthCardHandler = () => {
    setopenCard(false);
    setOpenMonthPlan(true);
    // setopenYearPlan(false);
    // setopenBasicPlan(false);
    // setopenManagerPlan(false);
    // setopenBusinessPlan(false);
  };
  const yearCardHandler = () => {
    setopenCard(false);
    setopenYearPlan(true);
    // setOpenMonthPlan(false);
    // setopenBasicPlan(false);
    // setopenManagerPlan(false);
    // setopenBusinessPlan(false);
  };

  const basicCardHandler = () => {
    setopenCard(false);
    setopenBasicPlan(true);
    // setopenManagerPlan(false);
    // setopenBusinessPlan(false);
  };
  const managerCardHandler = () => {
    setopenCard(false);
    // setopenBasicPlan(false);
    setopenManagerPlan(true);
    // setopenBusinessPlan(false);
  };
  const businessCardHandler = () => {
    setopenCard(false);
    // setopenBasicPlan(false);
    // setopenManagerPlan(false);
    setopenBusinessPlan(true);
  };

  return (
    <View style={{ backgroundColor: '#28282B' }}>
      {/* {settingOpen ? ( */}
      <View style={styles.settingsMenu}>
        <Text style={[styles.HeadingText, !openCard ? {color:"#22AEB3"}:null]}>{openCard ? "Premium Version":"Premium Editing"}</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: 20, left: 20 }}>
          <Ionicons name={'arrow-back'} size={25} color={'white'} />
        </TouchableOpacity>
        {openCard ? 
        <View style={styles.borderBottem}></View>
        : null
        }
        {openCard ? (
          <ScrollView style={{ width: '100%' }}>
            <Text
              style={[styles.HeadingText, { textAlign:"left" ,color: 'white', paddingHorizontal:25, paddingVertical: 10 }]}>
              Users
            </Text>
            <LinearGradient
              colors={['#FF74E0', '#6B1A99',]}
              start={{ x: 0.0, y: .80 }} end={{ x: 0, y: 0 }}
              style={[styles.cardsub]}>
              {/* <View style={styles.cardsub}> */}
              <View style={[styles.mainMenu, { padding: 7 }]}>
                <Text style={[styles.HeadingText, { color: '#7C27AD',paddingBottom:10 }]}>
                Business Plan
                </Text>
                <Text style={styles.balvaluetxt}>
                  {MonthPlan.description}
                </Text>
                <Text style={styles.balvaluetxt}>activate now for</Text>
                <Text style={[styles.HeadingText,{paddingTop:12}]}>{MonthPlan.price}€/<Text style={styles.balvaluetxt}>month</Text></Text>
                <View style={{flexDirection:"row", justifyContent:"center"}}>
                  <TouchableOpacity
                    style={[styles.btn]}
                    onPress={() => monthCardHandler()}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.9 }}
                      colors={['#7C27AD', '#F951D4']}
                      style={[styles.gradient,]}>
                      <Text style={[styles.btnText]}>
                        DETAILS AND ACTIVATION
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <View style={{alignItems:"center", position:"absolute", right:0}}>
                      <Text style={{color:"white", fontSize:15}}>Disable</Text>
                      <Switch
                          onValueChange={()=> toggleSwitch(0)}
                          value={isEnabled[0]}
                          activeText={''}
                          inActiveText={''}
                          backgroundActive={'#30d158'}
                          backgroundInactive={'gray'}
                          circleActiveColor={'white'}
                          circleInActiveColor={'white'}
                          circleSize={25}
                          // switchLeftPx={0.5}
                          // switchRightPx={0.5}
                          barHeight={26}
                          switchWidthMultiplier={2.05} //2.25
                      />
                  </View>
                </View>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={['#00FFFF', '#2939CD',]}
              // start={{ x: 0, y: 0.1 }} end={{ x: 0, y: 0 }}
              start={{ x: 0.0, y: .80 }} end={{ x: 0, y: 0 }}
              style={[styles.cardsub]}>
              {/* <View style={styles.cardsub}> */}
              <View style={[styles.mainMenu,
              { padding: 7 }
              ]}>
                <Text style={[styles.HeadingText, { color: '#2939CD' }]}>
                  Premium Version
                </Text>
                <Text style={styles.balvaluetxt}>
                 {YearPlan.description}
                </Text>
                <Text style={styles.balvaluetxt}>activate now for</Text>
                <Text style={[styles.HeadingText,{paddingTop:12}]}>{YearPlan.price}€/<Text style={styles.balvaluetxt}>anno</Text></Text>
                <View style={{flexDirection:"row", justifyContent:"center"}}>
                  <TouchableOpacity
                    style={[styles.btn]}
                    onPress={() => yearCardHandler()}
                    colors={['#FF74E0', '#6B1A99',]}
                    start={{ x: 0.0, y: .80 }} end={{ x: 0, y: 0 }}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.5 }}
                      colors={['#2939CD', '#32C3D0E5']}
                      style={[styles.gradient,]}>
                      <Text style={[styles.btnText]}>
                        DETAILS AND ACTIVATION
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <View style={{alignItems:"center", position:"absolute", right:0}}>
                        <Text style={{color:"white", fontSize:15}}>Disable</Text>
                        <Switch
                            onValueChange={()=> toggleSwitch(1)}
                            value={isEnabled[1]}
                            activeText={''}
                            inActiveText={''}
                            backgroundActive={'#30d158'}
                            backgroundInactive={'gray'}
                            circleActiveColor={'white'}
                            circleInActiveColor={'white'}
                            circleSize={25}
                            // switchLeftPx={0.5}
                            // switchRightPx={0.5}
                            barHeight={26}
                            switchWidthMultiplier={2.05} //2.25
                        />
                    </View>
                  </View>
              </View>
              {/* </View> */}
            </LinearGradient>
            <Text
              style={[styles.HeadingText, { textAlign:"left" ,color: 'white', paddingHorizontal:25, paddingVertical: 10 }]}>
              Owners
            </Text>
            <LinearGradient
              colors={['#00FFFF', '#2939CD',]}
              // start={{ x: 0, y: 0.1 }} end={{ x: 0, y: 0 }}
              start={{ x: 0.0, y: .80 }} end={{ x: 0, y: 0 }}
              style={[styles.cardsub]}>
              {/* <View style={styles.cardsub}> */}
              <View style={[styles.mainMenu,
              { padding: 7 }
              ]}>
                <Text style={[styles.HeadingText, { color: '#2939CD' }]}>
                  Basic Plan
                </Text>
                <Text style={styles.balvaluetxt}>
                 {BasicPlan.description}
                </Text>
                <Text style={styles.balvaluetxt}>activate now for</Text>
                <Text style={[styles.HeadingText]}>{BasicPlan.price}€</Text>
                <View style={{flexDirection:"row", justifyContent:"center"}}>
                  <TouchableOpacity
                    style={[styles.btn]}
                    onPress={() => basicCardHandler()}
                    colors={['#FF74E0', '#6B1A99',]}
                    start={{ x: 0.0, y: .80 }} end={{ x: 0, y: 0 }}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.5 }}
                      colors={['#2939CD', '#32C3D0E5']}
                      style={[styles.gradient,]}>
                      <Text style={[styles.btnText]}>
                        DETAILS AND ACTIVATION
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <View style={{alignItems:"center", position:"absolute", right:0}}>
                        <Text style={{color:"white", fontSize:15}}>Disable</Text>
                        <Switch
                            onValueChange={()=> toggleSwitch(2)}
                            value={isEnabled[2]}
                            activeText={''}
                            inActiveText={''}
                            backgroundActive={'#30d158'}
                            backgroundInactive={'gray'}
                            circleActiveColor={'white'}
                            circleInActiveColor={'white'}
                            circleSize={25}
                            // switchLeftPx={0.5}
                            // switchRightPx={0.5}
                            barHeight={26}
                            switchWidthMultiplier={2.05} //2.25
                        />
                    </View>
                  </View>
              </View>
              {/* </View> */}
            </LinearGradient>
            <LinearGradient
              colors={['#81D122','#297A27']}
              start={{ x: 0.0, y: .80 }} end={{ x: 0, y: 0 }}
              style={[styles.cardsub]}>
              {/* <View style={styles.cardsub}> */}
              <View style={[styles.mainMenu, { padding: 7 }]}>
                <Text style={[styles.HeadingText, { color: '#297A27',paddingBottom:10 }]}>
                Manager Plan
                </Text>
                <Text style={styles.balvaluetxt}>
                  {ManagerPlan.description}
                </Text>
                <Text style={styles.balvaluetxt}>activate now for</Text>
                <Text style={[styles.HeadingText]}>{ManagerPlan.price}€</Text>
                <View style={{flexDirection:"row", justifyContent:"center"}}>
                <TouchableOpacity
                  style={[styles.btn]}
                  // onPress={() => monthCardHandler()}
                  onPress={() => managerCardHandler()}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.9 }}
                    colors={['#81D122','#297A27']}
                    style={[styles.gradient,]}>
                    <Text style={[styles.btnText]}>
                      DETAILS AND ACTIVATION
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
                <View style={{alignItems:"center", position:"absolute", right:0}}>
                        <Text style={{color:"white", fontSize:15}}>Disable</Text>
                        <Switch
                            onValueChange={()=> toggleSwitch(3)}
                            value={isEnabled[3]}
                            activeText={''}
                            inActiveText={''}
                            backgroundActive={'#30d158'}
                            backgroundInactive={'gray'}
                            circleActiveColor={'white'}
                            circleInActiveColor={'white'}
                            circleSize={25}
                            // switchLeftPx={0.5}
                            // switchRightPx={0.5}
                            barHeight={26}
                            switchWidthMultiplier={2.05} //2.25
                        />
                    </View>
                  </View>
              </View>
              {/* </View> */}
            </LinearGradient>
            <LinearGradient
              colors={['#E39134', '#A13816',]}
              start={{ x: 0.0, y: .80 }} end={{ x: 0, y: 0 }}
              style={[styles.cardsub]}>
              {/* <View style={styles.cardsub}> */}
              <View style={[styles.mainMenu, { padding: 7 }]}>
                <Text style={[styles.HeadingText, { color: '#A13816',paddingBottom:10 }]}>
                Business Plan
                </Text>
                <Text style={styles.balvaluetxt}>
                  {BusinessPlan.description}
                </Text>
                <Text style={styles.balvaluetxt}>activate now for</Text>
                <Text style={[styles.HeadingText]}>{BusinessPlan.price}€</Text>
                <View style={{flexDirection:"row", justifyContent:"center"}}>
                  <TouchableOpacity
                    style={[styles.btn]}
                    // onPress={() => monthCardHandler()}
                    onPress={() => businessCardHandler()}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 0.9 }}
                      colors={['#E39134', '#A13816',]}
                      style={[styles.gradient,]}>
                      <Text style={[styles.btnText]}>
                        DETAILS AND ACTIVATION
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <View style={{alignItems:"center", position:"absolute", right:0}}>
                          <Text style={{color:"white", fontSize:15}}>Disable</Text>
                          <Switch
                              onValueChange={()=> toggleSwitch(4)}
                              value={isEnabled[4]}
                              activeText={''}
                              inActiveText={''}
                              backgroundActive={'#30d158'}
                              backgroundInactive={'gray'}
                              circleActiveColor={'white'}
                              circleInActiveColor={'white'}
                              circleSize={25}
                              // switchLeftPx={0.5}
                              // switchRightPx={0.5}
                              barHeight={26}
                              switchWidthMultiplier={2.05} //2.25
                          />
                      </View>
                  </View>
              </View>
              {/* </View> */}
            </LinearGradient>
          </ScrollView>
        ) : null}
        {openMonthPlan ? (
          <LinearGradient
            style={[styles.cardsub]}
            colors={['#7C27AD', '#F951D4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.1, y: 1 }}>
            {/* <View style={[styles.cardsub]}> */}
            <View style={[styles.mainMenu, { padding: 7 }]}>
              <Text style={[styles.HeadingText, { color: '#7C27AD',paddingBottom:10 }]}>
                Business Plan
              </Text>
              <TouchableOpacity
                  style={[styles.btn,{alignSelf:"flex-start", marginLeft:5 ,marginTop:30,width:'50%',height:30,borderRadius:10}]}
                  onPress={()=> {
                    setEditDescription(!editDescription);
                  }}
                  >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#7C27AD', '#F951D4']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>Edit Description</Text>
                  </LinearGradient>
                </TouchableOpacity>
                { editDescription ?
                    <TextInput
                    placeholder="Enter Plan description"
                    value={MonthPlan.editDescription}
                    placeholderTextColor='#747688'
                    multiline
                    onChangeText={value => {
                        setMonthPlan(state => ({...state, editDescription:value}));
                    }}
                    underlineColorAndroid="transparent"
                    autoCapitalize="sentences"
                    style={[styles.input,{backgroundColor:"white", alignSelf:"center"}]}
                    />:
                    <Text style={styles.balvaluetxt}>
                      {MonthPlan.editDescription}
                    </Text>
                }
              <TouchableOpacity
                  style={[styles.btn,{alignSelf:"flex-start", marginLeft:5 ,marginTop:30,width:'50%',height:30,borderRadius:10}]}
                  onPress={()=> {
                    setEditPrice(!editPrice);
                  }}
                  >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#7C27AD', '#F951D4']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>Edit Price</Text>
                  </LinearGradient>
                </TouchableOpacity>
              <Text style={styles.balvaluetxt}>activate now for</Text>
              {
                editPrice ? 
                <TextInput
                placeholder="Enter Plan price"
                value={MonthPlan.editPrice.toString()}
                placeholderTextColor='#747688'
                keyboardType="numeric"
                onChangeText={value => {
                  if(parseInt(value) > 0)
                    setMonthPlan(state => ({...state, editPrice:parseInt(value)}));
                  else
                    setMonthPlan(state => ({...state, editPrice:0}));
                }}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                style={[styles.input,{fontSize: 30,lineHeight: 45,fontWeight: '700',backgroundColor:"white", alignSelf:"center"}]}
                />:
                <Text style={[styles.HeadingText, {paddingTop:12}]}>{MonthPlan.editPrice}€/<Text style={styles.balvaluetxt}>month</Text></Text>
              }
              <View style={[styles.flex, {marginTop:30}]}>


                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => { cardHandler(); 
                    setMonthPlan(state => ({...state, description:MonthPlan.editDescription, price:MonthPlan.editPrice}));
                  }}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#7C27AD', '#F951D4']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>Done</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => {
                    cardHandler();
                    setMonthPlan(state => ({...state, editDescription:MonthPlan.description, editPrice:MonthPlan.price}));
                    }}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.6 }}
                    colors={['#7C27AD', '#F951D4']}
                    style={[styles.gradient,{borderRadius:10}]}>
                    <Text style={[styles.inputText]}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
          </LinearGradient>
        ) :
          null}
        {openYearPlan ? (
          <LinearGradient
            style={[styles.cardsub]}
            colors={['#2939CD', '#34DDE8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.1, y: 1 }}>
            <View style={[styles.mainMenu, { padding: 7 }]}>
              <Text style={[styles.HeadingText, { color: '#2939CD' }]}>
                Premium Version
              </Text>
              <TouchableOpacity
                  style={[styles.btn,{alignSelf:"flex-start", marginLeft:5 ,marginTop:30,width:'50%',height:30,borderRadius:10}]}
                  onPress={()=> {
                    setEditDescription(!editDescription);
                  }}
                  >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#2939CD', '#32C3D0E5']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>Edit Description</Text>
                  </LinearGradient>
                </TouchableOpacity>
                { editDescription ?
                    <TextInput
                    placeholder="Enter Plan description"
                    value={YearPlan.editDescription}
                    placeholderTextColor='#747688'
                    multiline
                    onChangeText={value => {
                        setYearPlan(state => ({...state, editDescription:value}));
                    }}
                    underlineColorAndroid="transparent"
                    autoCapitalize="sentences"
                    style={[styles.input,{backgroundColor:"white", alignSelf:"center"}]}
                    />:
                    <Text style={styles.balvaluetxt}>
                      {YearPlan.editDescription}
                    </Text>
                }
              <TouchableOpacity
                  style={[styles.btn,{alignSelf:"flex-start", marginLeft:5 ,marginTop:30,width:'50%',height:30,borderRadius:10}]}
                  onPress={()=> {
                    setEditPrice(!editPrice);
                  }}
                  >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#2939CD', '#32C3D0E5']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>Edit Price</Text>
                  </LinearGradient>
                </TouchableOpacity>
              <Text style={styles.balvaluetxt}>activate now for</Text>
              {
                editPrice ? 
                <TextInput
                placeholder="Enter Plan price"
                value={YearPlan.editPrice.toString()}
                placeholderTextColor='#747688'
                keyboardType="numeric"
                onChangeText={value => {
                  if(parseInt(value) > 0)
                    setYearPlan(state => ({...state, editPrice:parseInt(value)}));
                  else
                    setYearPlan(state => ({...state, editPrice:0}));
                }}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                style={[styles.input,{fontSize: 30,lineHeight: 45,fontWeight: '700',backgroundColor:"white", alignSelf:"center"}]}
                />:
                <Text style={[styles.HeadingText, {paddingTop:12}]}>{YearPlan.editPrice}€/<Text style={styles.balvaluetxt}>anno</Text></Text>
              }
              <View style={styles.flex}>
                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => { cardHandler(); 
                    setYearPlan(state => ({...state, description:YearPlan.editDescription, price:YearPlan.editPrice}));
                  }}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#2939CD', '#32C3D0E5']}
                    style={[styles.gradient,{borderRadius:10}]}>
                    <Text style={[styles.inputText]}>Done</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => {
                    cardHandler();
                    setYearPlan(state => ({...state, editDescription:YearPlan.description, editPrice:YearPlan.price}));
                    }}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.6 }}
                    colors={['#2939CD', '#32C3D0E5']}
                    style={[styles.gradient, { padding: 10,borderRadius:10 }]}>
                    <Text style={[styles.inputText]}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
          </LinearGradient>
        ) :
          null}
        {openBasicPlan ? (
          <LinearGradient
            style={[styles.cardsub]}
            colors={['#2939CD','#00FFFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.1, y: 1 }}>
            <View style={[styles.mainMenu, { padding: 7 }]}>
              <Text style={[styles.HeadingText, { color: '#2939CD' }]}>
              Basic Plan
              </Text>
              <TouchableOpacity
                  style={[styles.btn,{alignSelf:"flex-start", marginLeft:5 ,marginTop:30,width:'50%',height:30,borderRadius:10}]}
                  onPress={()=> {
                    setEditDescription(!editDescription);
                  }}
                  >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#2939CD', '#32C3D0E5']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>Edit Description</Text>
                  </LinearGradient>
                </TouchableOpacity>
                { editDescription ?
                    <TextInput
                    placeholder="Enter Plan description"
                    value={BasicPlan.editDescription}
                    placeholderTextColor='#747688'
                    multiline
                    onChangeText={value => {
                        setBasicPlan(state => ({...state, editDescription:value}));
                    }}
                    underlineColorAndroid="transparent"
                    autoCapitalize="sentences"
                    style={[styles.input,{backgroundColor:"white", alignSelf:"center"}]}
                    />:
                    <Text style={styles.balvaluetxt}>
                      {BasicPlan.editDescription}
                    </Text>
                }
              <TouchableOpacity
                  style={[styles.btn,{alignSelf:"flex-start", marginLeft:5 ,marginTop:30,width:'50%',height:30,borderRadius:10}]}
                  onPress={()=> {
                    setEditPrice(!editPrice);
                  }}
                  >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#2939CD', '#32C3D0E5']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>Edit Price</Text>
                  </LinearGradient>
                </TouchableOpacity>
              <Text style={styles.balvaluetxt}>activate now for</Text>
              {
                editPrice ? 
                <TextInput
                placeholder="Enter Plan price"
                value={BasicPlan.editPrice.toString()}
                placeholderTextColor='#747688'
                keyboardType="numeric"
                onChangeText={value => {
                  if(parseInt(value) > 0)
                    setBasicPlan(state => ({...state, editPrice:parseInt(value)}));
                  else
                    setBasicPlan(state => ({...state, editPrice:0}));
                }}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                style={[styles.input,{fontSize: 30,lineHeight: 45,fontWeight: '700',backgroundColor:"white", alignSelf:"center"}]}
                />:
                <Text style={[styles.HeadingText]}>{BasicPlan.editPrice}€</Text>
              }
              <View style={styles.flex}>
                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => { cardHandler(); 
                    setBasicPlan(state => ({...state, description:BasicPlan.editDescription, price:BasicPlan.editPrice}));
                  }}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#2939CD', '#32C3D0E5']}
                    style={[styles.gradient,{borderRadius:10}]}>
                    <Text style={[styles.inputText, ]}>Done</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => {
                    cardHandler();
                    setBasicPlan(state => ({...state, editDescription:BasicPlan.description, editPrice:BasicPlan.price}));
                    }}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.6 }}
                    colors={['#2939CD', '#32C3D0E5']}
                    style={[styles.gradient, { padding: 10,borderRadius:10 }]}>
                    <Text style={[styles.inputText]}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
          </LinearGradient>
        ) :
          null}
        {openManagerPlan ? (
          <LinearGradient
            style={[styles.cardsub]}
            colors={['#297A27','#81D122']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.1, y: 1 }}>
            <View style={[styles.mainMenu, { padding: 7 }]}>
              <Text style={[styles.HeadingText, { color: '#297A27',paddingBottom:10 }]}>
              Manager Plan
              </Text>
              <TouchableOpacity
                  style={[styles.btn,{alignSelf:"flex-start", marginLeft:5 ,marginTop:30,width:'50%',height:30,borderRadius:10}]}
                  onPress={()=> {
                    setEditDescription(!editDescription);
                  }}
                  >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#297A27','#81D122']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>Edit Description</Text>
                  </LinearGradient>
                </TouchableOpacity>
                { editDescription ?
                    <TextInput
                    placeholder="Enter Plan description"
                    value={ManagerPlan.editDescription}
                    placeholderTextColor='#747688'
                    multiline
                    onChangeText={value => {
                        setManagerPlan(state => ({...state, editDescription:value}));
                    }}
                    underlineColorAndroid="transparent"
                    autoCapitalize="sentences"
                    style={[styles.input,{backgroundColor:"white", alignSelf:"center"}]}
                    />:
                    <Text style={styles.balvaluetxt}>
                      {ManagerPlan.editDescription}
                    </Text>
                }
              <TouchableOpacity
                  style={[styles.btn,{alignSelf:"flex-start", marginLeft:5 ,marginTop:30,width:'50%',height:30,borderRadius:10}]}
                  onPress={()=> {
                    setEditPrice(!editPrice);
                  }}
                  >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#297A27','#81D122']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>Edit Price</Text>
                  </LinearGradient>
                </TouchableOpacity>
              <Text style={styles.balvaluetxt}>activate now for</Text>
              {
                editPrice ? 
                <TextInput
                placeholder="Enter Plan price"
                value={ManagerPlan.editPrice.toString()}
                placeholderTextColor='#747688'
                keyboardType="numeric"
                onChangeText={value => {
                  if(parseInt(value) > 0)
                    setManagerPlan(state => ({...state, editPrice:parseInt(value)}));
                  else
                    setManagerPlan(state => ({...state, editPrice:0}));
                }}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                style={[styles.input,{fontSize: 30,lineHeight: 45,fontWeight: '700',backgroundColor:"white", alignSelf:"center"}]}
                />:
                <Text style={[styles.HeadingText]}>{ManagerPlan.editPrice}€</Text>
              }
              <View style={styles.flex}>


                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => { cardHandler(); 
                    setManagerPlan(state => ({...state, description:ManagerPlan.editDescription, price:ManagerPlan.editPrice}));
                  }}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#297A27','#81D122']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText, ]}>Done</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => {
                    cardHandler();
                    setManagerPlan(state => ({...state, editDescription:ManagerPlan.description, editPrice:ManagerPlan.price}));
                    }}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.6 }}
                    colors={['#297A27','#81D122']}
                    style={[styles.gradient,{borderRadius:10}]}>
                    <Text style={[styles.inputText]}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
          </LinearGradient>
        ) :
          null}
        {openBusinessPlan ? (
          <LinearGradient
            style={[styles.cardsub]}
            colors={['#A13816','#E39134']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.1, y: 1 }}>
            <View style={[styles.mainMenu, { padding: 7 }]}>
              <Text style={[styles.HeadingText, { color: '#A13816' }]}>
              Business Plan
              </Text>
              <TouchableOpacity
                  style={[styles.btn,{alignSelf:"flex-start", marginLeft:5 ,marginTop:30,width:'50%',height:30,borderRadius:10}]}
                  onPress={()=> {
                    setEditDescription(!editDescription);
                  }}
                  >

                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#A13816','#E39134']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>Edit Description</Text>
                  </LinearGradient>
                </TouchableOpacity>
                { editDescription ?
                    <TextInput
                    placeholder="Enter Plan description"
                    value={BusinessPlan.editDescription}
                    placeholderTextColor='#747688'
                    multiline
                    onChangeText={value => {
                        setBusinessPlan(state => ({...state, editDescription:value}));
                    }}
                    underlineColorAndroid="transparent"
                    autoCapitalize="sentences"
                    style={[styles.input,{backgroundColor:"white", alignSelf:"center"}]}
                    />:
                    <Text style={styles.balvaluetxt}>
                      {BusinessPlan.editDescription}
                    </Text>
                }
              <TouchableOpacity
                  style={[styles.btn,{alignSelf:"flex-start", marginLeft:5 ,marginTop:30,width:'50%',height:30,borderRadius:10}]}
                  onPress={()=> {
                    setEditPrice(!editPrice);
                  }}
                  >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#A13816','#E39134']}
                    style={[styles.gradient,{borderRadius:10} ]}>
                    <Text style={[styles.inputText]}>Edit Price</Text>
                  </LinearGradient>
                </TouchableOpacity>
              <Text style={styles.balvaluetxt}>activate now for</Text>
              {
                editPrice ? 
                <TextInput
                placeholder="Enter Plan price"
                value={BusinessPlan.editPrice.toString()}
                placeholderTextColor='#747688'
                keyboardType="numeric"
                onChangeText={value => {
                  if(parseInt(value) > 0)
                    setBusinessPlan(state => ({...state, editPrice:parseInt(value)}));
                  else
                    setBusinessPlan(state => ({...state, editPrice:0}));
                }}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                style={[styles.input,{fontSize: 30,lineHeight: 45,fontWeight: '700',backgroundColor:"white", alignSelf:"center"}]}
                />:
                <Text style={[styles.HeadingText]}>{BusinessPlan.editPrice}€</Text>
              }
              <View style={styles.flex}>
                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => { cardHandler(); 
                    setBusinessPlan(state => ({...state, description:BusinessPlan.editDescription, price:BusinessPlan.editPrice}));
                  }}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.7 }}
                    colors={['#A13816','#E39134']}
                    style={[styles.gradient,{borderRadius:10}]}>
                    <Text style={[styles.inputText, ]}>Done</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btn,{width:'40%',height:43,borderRadius:10}]}
                  onPress={() => {
                    cardHandler();
                    setBusinessPlan(state => ({...state, editDescription:BusinessPlan.description, editPrice:BusinessPlan.price}));
                    }}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.6 }}
                    colors={['#A13816','#E39134']}
                    style={[styles.gradient, { padding: 10,borderRadius:10 }]}>
                    <Text style={[styles.inputText]}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            {/* </View> */}
          </LinearGradient>
        ) :
          null}
        { !openCard ? 
          <View style={styles.bottemSec}>
            <Menu navigation={navigation} />
          </View>
         : null
        }
      </View>
    </View>
  );
};

export default SponsorEvent;

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: '#00000090',
    height: '95%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#28CCF2',
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClose: {
    // backgroundColor: '#FF5757',
  },
  textStyle: {
    // backgroundColor:'red',
    color: 'white',
  },

  settingsMenu: {
    width: '100%',
    height: '100%',
    backgroundColor: '#28282B',
    // borderRadius: 20,
    paddingTop: 25,
    // justifyContent:'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
    bottom: 0,
  },

  HeadingText: {
    // marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '700',
  },

  BalanceText: {
    // marginBottom: 35,
    paddingLeft: 9,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },

  blueColor: {
    backgroundColor: '#28CCF2',
  },
  greenColor: {
    backgroundColor: '#75d481',
  },
  orangeColor: {
    backgroundColor: '#ed5f1e',
  },

  //
  flex: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // paddingVertical: 20
  },

  balvaluetxt: {
    fontFamily:"Poppins",
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    paddingBottom: 15,
  },

  // Button

  buttonConfrm: {
    alignSelf: 'center',
    marginVertical: 10,

    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 40,
    elevation: 2,
    color: '#28CCF2',
    backgroundColor: '#28CCF2',
  },

  closeBtn: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    width: 35,
    height: 35,
    // backgroundColor: '#28CCF2',
  },
  buttonText: {
    fontWeight: '900',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  canclebuttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  borderBottem: {
    borderBottomWidth: 4,
    borderColor: 'silver',
    borderBottem: 3,
    // borderColor: 'white',
    borderBottomWidth: 1,
    // alignSelf:'flex-end'
    paddingVertical: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottemSec: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
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
    // justifyContent:'center',
    alignItems: 'center',
    shadowColor: '#000',

    // position: 'relative',
    bottom: 0,
  },
  //   ---------------Model
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    // backgroundColor: '#7F000000',
    backgroundColor: 'transparent',
    // opacity: 0.6,
    // width:'95%',
    height: '90%',
  },
  modalView: {
    opacity: 1,
    zIndex: 2,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    height: '50%',
  },
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 22,
    // display: 'flex',
    width: '95%',
    // height:'90%'
  },
  btn1: {
    marginTop: 15,
    height: 40,
    // width: '70%',
    borderRadius: 15,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '600',
    // boxShadow: 0 10 35 rgba(111, 126, 201, 0.25),
    // background: linear-gradient(180deg, #1396D9 0%, #32CB90 100%),
  },
  btn1text: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: 'white',
  },
  modalHeadingText1: {
    fontWeight: '400',
    fontSize: 23,
    lineHeight: 34,
    color: '#000000',
  },
  //   --------------Modal-------------------
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: 22,
    // display: 'flex',
    width: '95%',
    // height:'90%'
  },
  modalView1: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    // height: '40%',
  },
  modalHeadingText1: {
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 38,
    /* identical to box height */

    color: '#FFFFFF',
  },
  activityEventSection1: {
    // borderLeftWidth: 3,
    alignItems: 'center',
    // backgroundColor: 'red',
    // borderLeftColor: 'white',
    // width: '24%',
    alignSelf: 'center',
    padding: 5,
  },
  circle: {
    height: 85,
    width: 85,
    backgroundColor: '#28CCF2',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  },
  btnCancle: {
    marginTop: 20,
    // height: 40,
    // width: '70%',
    padding: 10,
    borderRadius: 15,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
    paddingHorizontal: 5,
    color: 'white',
  },
  btnText:{
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
    color: 'white',
  },
  card: {
    margin: 20,
    // backgroundColor: '#6B1A99',
    borderRadius: 20,
    width: '80%',
    // borderColor: '#6B1A99',
    borderWidth: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    alignSelf: 'center',
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   // height: 2,
    // },
  },
  btn: {
    marginTop: 15,
    alignSelf: 'center',
    height: 30,
    width: '62%',
    borderRadius: 20,
    shadowColor: 'black',
    backgroundColor: '#28CCF2',
    marginBottom: 10,
    justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    // backgroundColor:'red',
  },
  cardsub: {
    width: '90%', alignSelf: 'center', borderRadius: 20, margin: 10
  }
  ,
  mainMenu: {
    backgroundColor: '#28282B',
    margin: 15,
    borderRadius: 20
  },
  input: {
    width: '85%',
    // paddingLeft: 15,
    justifyContent: 'center',
    // height: 40,
    fontSize: 16,
    lineHeight:22,
    borderRadius:5,
    textAlign:"center"
  },

});
