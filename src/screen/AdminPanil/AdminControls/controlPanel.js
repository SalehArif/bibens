import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
  
  import React, { useState, } from 'react';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { Switch } from 'react-native-switch';
  import Menu from '../../../component/menu/Topmenu2'
  
  const ControlPanel = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState([true,true,true,true,true,true]);
	const toggleSwitch = (index) => {
		var tempArr = isEnabled;
		tempArr[index] = !tempArr[index]
		setIsEnabled([...tempArr]);
		// setIsEnabled(previousState => ([...previousState, ]));
	};
		
  
    return (
      <View style={ styles.Menu}>
        <Text style={[styles.HeadingText,]}>Control Panel</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', top: 20, left: 20 }}>
            <Ionicons name={'arrow-back'} size={25} color={'white'} />
          </TouchableOpacity>
          <View style={styles.borderBottem}></View>
			<View style={{flexDirection:"row", width:"80%", justifyContent:"space-between", marginVertical:10}}>
				<Text style={[styles.HeadingText,{fontWeight:"600",fontSize:20,lineHeight:30}]}>Advertisings Enabled</Text>
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
			<View style={{flexDirection:"row", width:"80%", justifyContent:"space-between", marginVertical:10}}>
				<Text style={[styles.HeadingText,{fontWeight:"600",fontSize:20,lineHeight:30}]}>Sign up for users</Text>
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
			<View style={{flexDirection:"row", width:"80%", justifyContent:"space-between", marginVertical:10}}>
				<Text style={[styles.HeadingText,{fontWeight:"600",fontSize:20,lineHeight:30}]}>Active just on Modena</Text>
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
			<View style={{flexDirection:"row", width:"80%", justifyContent:"space-between", marginVertical:10}}>
				<Text style={[styles.HeadingText,{fontWeight:"600",fontSize:20,lineHeight:30}]}>Active just on Emilia R.</Text>
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

			<Text style={[styles.HeadingText1, {marginTop:30}]}>Premium Version</Text>
			<View style={{flexDirection:"row", width:"80%", justifyContent:"space-between", marginVertical:10}}>
				<Text style={[styles.HeadingText,{fontWeight:"600",fontSize:20,lineHeight:30}]}>Enabled for Users</Text>
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
			<View style={{flexDirection:"row", width:"80%", justifyContent:"space-between", marginVertical:10}}>
				<Text style={[styles.HeadingText,{fontWeight:"600",fontSize:20,lineHeight:30}]}>Enabled for Owners</Text>
				<Switch
					onValueChange={()=> toggleSwitch(5)}
					value={isEnabled[5]}
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

      <View style={styles.bottemSec}>
          <Menu navigation={navigation} />
      </View>
      </View>
    );
  };
  
  export default ControlPanel;
  
  const styles = StyleSheet.create({
    Menu: {
      width: '100%',
      height: '100%',
      backgroundColor: '#28282B',
      // borderRadius: 20,
      paddingTop: 25,
      // justifyContent:'center',
      alignItems: 'center',
      elevation: 5,
      position: 'relative',
      bottom: 0,
      },
      
    borderBottem: {
      borderBottomWidth: 4,
      borderColor: 'silver',
      borderBottem: 3,
      borderBottomWidth: 1,
      paddingVertical: 10,
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn: {
      margin: 10,
      height: 45,
      width: '90%',
      borderRadius: 15,
      // borderColor: 'white',
      // borderWidth: 2,
      // shadowColor: 'black',
      backgroundColor: '#D3D3D3',
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      shadowColor: '#6F7EC9',shadowOffset: {
        width: 0,
        height: 12,
      },shadowOpacity: 0.58,shadowRadius: 16, elevation:24
    },
    btntext1: {
      lineHeight: 27,
      color: 'black',
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 22, 
      fontWeight: '600',
    },
      HeadingText: {
      // marginBottom: 10,
      textAlign: 'center',
      color: 'white',
      fontSize: 30,
      lineHeight: 45,
      fontWeight: '700',
    },
      HeadingText1: {
      // marginBottom: 10,
      color:"#22AEB3", 
			textAlign:"left",
      fontSize: 30,
      lineHeight: 45,
      fontWeight: '700',
    },
    bottemSec: {
      // height: '9%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: -10,
      left: 0,
      zIndex: 50
    },
  });
  