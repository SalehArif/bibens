import {
    StyleSheet,
    Text,
    View,
    Button,
		TextInput,
    TouchableOpacity,
    Image,
    Modal,
    ScrollView
  } from 'react-native';
  
import React, { useState, useContext, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Divider } from 'react-native-paper';
import { Switch } from 'react-native-switch';

  const ManageUsers = ({ navigation }) => {
    const [modalVisible,setModalVisible] = useState(false)
    const [visible,setVisible] = useState(false)
    const [modalSearch,setModalSearch] = useState(false)
	const [search, setSearch] = useState('');
	
	const NoOfusers = [1,2,3,4,5]
	const [isEnabled, setIsEnabled] = useState(new Array(NoOfusers.length).fill(true));
	const toggleSwitch = (index) => {
		var tempArr = isEnabled;
		tempArr[index] = !tempArr[index]
		setIsEnabled([...tempArr]);
	};

	const [checked, setChecked] = useState(new Array(4).fill(true))
	const clickOnFilter = (index) => {
		var tempArr = checked;
		tempArr[index] = !tempArr[index]
		setChecked([...tempArr]);
	};
  
    return (
      <View style={ styles.Menu}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{  marginHorizontal:15,marginVertical:5 }}
						>
            <Ionicons name={'arrow-back'} size={25} color={'white'} />
          </TouchableOpacity>
					<View style={styles.topSec}>
						<TouchableOpacity style={styles.inputMain}
							onPress={() => setModalSearch(true)}
						>
							<Feather name={'search'} size={25} color={'#2B2B2B'} style={{ marginRight: 10 }} />
						<View>
							<Text style={{ fontSize: 18, fontWeight: '500', lineHeight: 20, color: '#28282B' }}>{"Search"}</Text>
						</View>
					</TouchableOpacity>

					<View style={{
						height: 29,
						width: 1,
						backgroundColor: '#C4C4C4', marginRight: 15

					}}>
					</View>
					<TouchableOpacity
            // onPress={() => setModalVisible(!modalVisible)}
			>
            <Ionicons name='menu' size={20} />
          </TouchableOpacity>
				</View>
				<Text style={[styles.HeadingText, {fontSize:30, lineHeight:45 ,color:"#22AEB3", marginVertical:15}]}>Users</Text>
        <ScrollView style={{width:"100%"}}>
				{/* Users Mapping */}
				{NoOfusers.map((val, index) => 
						<View key={index}>
							<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginVertical:10, marginHorizontal: 20}}>
								<Image source={require('../../../Assets/Ellipse2.png')}/>
								<View style={{alignItems:"center"}}>
									<Text style={styles.text}>David deep</Text>
									<Text style={styles.subText}>21 March, 2022</Text>
								</View>
								<TouchableOpacity style={{alignItems:"center"}}
									onPress={()=>navigation.navigate("AdminDM")}
								>
									<Fontisto name='email' color={"rgb(248, 248, 248)"} size={22} />
									<Text style={styles.subText}>Message</Text>
								</TouchableOpacity>
								<View style={{alignItems:"center"}}>
									<Switch
										onValueChange={()=> toggleSwitch(index)}
										value={isEnabled[index]}
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
									<Text style={styles.subText}>Enable</Text>
								</View>
							</View>
							{ index !== NoOfusers.length-1 ? 
							<Divider horizontalInset style={{marginVertical:10}} />
							: null
							}
						</View>
					)
				} 
      </ScrollView >
			<Modal
        animationType="slide"
        transparent={true}
        visible={modalSearch}
        onRequestClose={() => {
          setModalSearch(!modalSearch)
        }}>
        <View style={styles.SearchView}>
          <View style={styles.SearchModal}>
            <View style={styles.topSecS}>
              <View style={styles.inputMainS}>
			  <Ionicons name='search' size={25} style={{ marginRight: 10 }} />
                <TextInput
                  placeholder="Search"
                  placeholderTextColor='#747688'
                  value={search}
                  onChangeText={value => {
                    setSearch(value);
                  }}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  style={[styles.inputS, {fontSize:18, color:"black"}]}
                />
							</View>
              <TouchableOpacity
                // onPress={() => setModalVisible(!modalVisible)}
				>
                <Ionicons name='menu' size={20} />
              </TouchableOpacity>
            </View>
            <View style={styles.borderBtm} />
            <View style={styles.topSecS}>
              <View style={[styles.inputMainS, {height:45,marginLeft:100}]}>
                <Text style={{fontSize:18, color:"black"}}>David Deep</Text>
              </View>
              <TouchableOpacity>
                <AntDesign
                  name={'menu-fold'}
                  size={25}
                  color={'transparent'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={[styles.btn, { width: '35%', height: 43, }]}
            onPress={() => setModalSearch(!modalSearch)}>
            <LinearGradient
              start={{ x: 0, y: 0.2 }}
              end={{ x: 0, y: 0.9 }}
              colors={['#33CC8F', '#28CCF2']}
              style={styles.gradient1}>
              <Ionicons
                name={'search'}
                size={25}
                color={'#28282B'}
                // style={{ paddingHorizontal: 10 }}
                style={{position:'absolute',left:15}}
              />
              <Text style={[styles.btntextS,{alignSelf:'center', marginLeft:10}]}>SEARCH</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Modal>
		<Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.centeredView, {justifyContent:"center",alignItems:"center"}]}>
          <View style={[styles.modalView,{ paddingVertical:20,borderRadius:40, width:"80%", height:"45%"}]}>
						<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingTop:5}}>
							<Text style={[styles.HeadingText1, {textDecorationLine:"underline", marginBottom:10}]}>Sort By</Text>
							<TouchableOpacity
							onPress={() => setModalVisible(false)}
							style={{  elevation: 2,padding: 5, backgroundColor:"rgba(179,179,180,255)",  }}>
								<MaterialCommunityIcons name={'close-thick'} size={18}/>
							</TouchableOpacity>
						</View>
							<TouchableOpacity
				onPress={()=>clickOnFilter(0)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center",  marginVertical:10,}}>
						{
							checked[0] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1,{ marginLeft:5 ,fontSize:18}]} >Subscription Date</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>clickOnFilter(1)}
					style={{flexDirection:"row", marginBottom:5, alignItems:"center",  marginVertical:10,}}>
						{
							checked[1] ? 
							<AntDesign name='checksquare' size={21} color={"black"} />:
							<Ionicons name='square' size={21} color={"black"} />
						}
						<Text style={[styles.HeadingText1,{ marginLeft:5 ,fontSize:18}]} >Ratings</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={()=>clickOnFilter(2)}
						style={{flexDirection:"row", marginBottom:5, alignItems:"center",  marginVertical:10,}}>
							{
								checked[2] ? 
								<AntDesign name='checksquare' size={21} color={"black"} />:
								<Ionicons name='square' size={21} color={"black"} />
							}
							<Text style={[styles.HeadingText1,{ marginLeft:5 ,fontSize:18}]} >Number of Favourites</Text>
					</TouchableOpacity>
					<TouchableOpacity
					onPress={()=>clickOnFilter(3)}
						style={{flexDirection:"row", marginBottom:5, alignItems:"center",  marginVertical:10,}}>
							{
								checked[3] ? 
								<AntDesign name='checksquare' size={21} color={"black"} />:
								<Ionicons name='square' size={21} color={"black"} />
							}
							<Text style={[styles.HeadingText1,{ marginLeft:5 ,fontSize:18}]} >Number of publications</Text>
					</TouchableOpacity>
          </View>
        </View>
      </Modal>
      </View>
    );
  };
  
  export default ManageUsers;
  
  const styles = StyleSheet.create({
    Menu: {
			flex:1,
      backgroundColor: '#28282B',
      paddingTop: 25,
      elevation: 5,
      },
      
    btn: {
      margin: 10,
      height: 45,
      width: '90%',
      borderRadius: 15,
      backgroundColor: '#D3D3D3',
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      shadowColor: '#6F7EC9',shadowOffset: {
        width: 0,
        height: 12,
      },shadowOpacity: 0.58,shadowRadius: 16, elevation:24
    },
    btntext: {
      lineHeight: 27,
      color: 'black',
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 20, 
      fontWeight: '600',
    },
		centeredView: {
			flex: 1,
			backgroundColor:"rgba(0,0,0,0.7)"
		},
	modalView: {
			// margin: 20,
			marginHorizontal:23,
			marginTop:30,
			backgroundColor: 'white',
			borderRadius: 20,
			paddingHorizontal: 20,
			paddingVertical: 35,
			backgroundColor:"rgba(217, 217, 217, 1)"
			// height:"90%"
	},
	HeadingText: {
			// marginBottom: 10,
			textAlign: 'center',
			color: 'black',
			fontSize: 18,
			lineHeight: 27,
			fontWeight: '600',
	},
	
	HeadingText1: {
		// marginBottom: 10,
		textAlign: 'center',
		color: 'black',
		fontSize: 20,
		lineHeight: 27,
		fontWeight: '600',
},
	gradient1: {
			width: '100%',
			height: '100%',
			flexDirection:"row",
			justifyContent:"space-evenly",
			alignItems: 'center',
			alignSelf: 'center',
			borderRadius: 10,
		},  
	textStyle: {
			fontSize:18,
			lineHeight:22,
			fontWeight: 'bold',
			textAlign: 'center',
	},
		topsec: {
			backgroundColor: '#28282B',
			// width: '100%',
			// height: '100%',
			// display: 'flex',
			alignContent: 'center',
			alignItems: 'center',
		},
		SearchView: {
			flex: 1,
			// justifyContent: 'center',
			// alignItems: 'center',
			alignSelf: 'center',
			width: '100%',
			backgroundColor: '#00000090',
		},
		SearchModal: {
			margin: 18,
			// backgroundColor: 'red',
			backgroundColor: '#fff',
			width: '90%',
			borderRadius: 20,
			justifyContent: 'center',
			alignItems: 'center',
			// padding: 25,
			alignSelf: 'center',
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 4,
			elevation: 5,
			// width: '100%',
		},
		inputMainS: {
			width: '80%',
			flexDirection: 'row',
			//  borderRightWidth:2,
			//  borderRightColor:'red',
			alignItems: 'center',
	
		},
		topSecS: {
			// height: '10%',
			flexDirection: 'row',
			// width: '100%',
			alignSelf: 'center',
			alignItems: 'center',
			// alignContent: 'center',
			justifyContent: 'center',
			// marginVertical: 15,
	
			alignSelf: 'center',
		},
	
		inputS: {
			width: '80%',
			// justifyContent: 'center',
		},
		gradient1: {
			width: '100%',
			height: 43,
			padding: 8,
			// textAlign: 'center',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			borderRadius: 15,
			flexDirection: 'row',
		},
		borderBtm: {
			borderBottomColor: '39393D',
			borderBottomWidth: 0.5,
			alignSelf: 'center',
			width: '90%',
		},
		btntextS: {
			color: '#000000',
			fontWeight: '400',
			fontSize: 16,
			lineHeight: 27,
			textTransform: 'uppercase',
		},
	
		topSec: {
			// height: '6%',
			flexDirection: 'row',
			width: '90%',
			marginTop: 15,
			alignSelf: 'center',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#EFEFEF',
			borderRadius: 13,
			// backgroundColor: 'white',
			alignSelf: 'center',
			elevation: 5,
		},
		inputMain: {
			width: '80%',
			flexDirection: 'row',
			height: 51,
			alignItems: 'center',
	
		},
		text:{
			fontSize:20, fontWeight:400, color:"white"
		},
		subText:{
			fontSize:15, fontWeight:400, color:"white"
		},
		
		gradient: {
			width: '100%',
			height: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			borderRadius: 20,
		},	
		btn1text: {
			textTransform: 'uppercase',
			letterSpacing: 1,
			fontWeight: '600',
			fontFamily:"Poppins",
			fontSize: 18,
			lineHeight: 27,
			color: '#29292C',
		},
  });
  