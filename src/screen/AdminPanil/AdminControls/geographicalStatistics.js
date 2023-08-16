import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Bar'

const GeographicalStatistics = ({ navigation }) => {
  const regions = [
    'Abruzzo',
    'Basilicata',
    'Calabria',
    'Campania',
    'Friuli',
    'Toscana',
    'Lazio',
    'Liguria',
    'Lombardia',
    'Marche',
    'Molise',
    'Piemonte',
    'Puglia',
    'Sardegna',
    'Sicilia',
    'Toscana',
    'Trentino',
    'Umbria',
    'Valle D’Aosta',
    'Veneto',
    
  ]
  const provinces = [
    'Bologna',
    'Modena',
    'Reggio Emilia',
    'Ferrara',
    'Rimini',
    'Piacenza',
    'Ravenna',
    'Parma',
    'Forli - Cesena',
  ]
  const users = [
    "Users Number",
    "Owners Number", 
    "N° Of Events",
    "N° Of Activities",
    "Weekly Users Visits",
    "Weekly Guest Visits",
    "Weekly Owners Visits",
    "N° Clicks On The Ads",
    "N° Ads Visualizations",
    "Total Profits",
    "Profits From Ads",
    "N° Of Plan Basic",
    "N° Of Plan Manager",
    "N° Of Plan Premium",
    "N° Of Plan Buisness",
  ]

  const Provincestats = [
    ['Abruzzo', 34350, 1],
    ['Basilicata', 1670, 0.75],
    ['Calabria', 980, 0.3],
    ['Campania', 650, 0.2],
    ['Friuli', 34350, 1],
    ['Toscana', 1670, 0.75],
    ['Lazio', 980, 0.3],
    ['Liguria', 650, 0.2],
    ['Lombardia', 34350, 1],
    ['Marche', 1670, 0.75],
    ['Molise', 980, 0.3],
    ['Piemonte', 650, 0.7],
    ['Puglia', 1000, 0.35],
    ['Sardegna', 7600, 0.4],
    ['Sicilia', 1340, 0.6],
    ['Toscana', 200, 0.4],
    ['Trentino', 2500, 0.3],
    ['Umbria', 4500, 0.7],
    ['Valle D’Aosta', 1000, 0.85],
    ['Veneto', 500, 0.9],
];

  const [selectedStats, setSelectedStats] = React.useState("")

  return (
    <View style={ styles.Menu}>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            // style={{ position: 'absolute', top: 20, left: 20 }}
            >
            <Ionicons name={'arrow-back'} size={25} color={'white'} />
            </TouchableOpacity>
            <View>
                <Text style={[styles.HeadingText,{textAlign:"left",color:"rgb(34, 174, 179)",paddingLeft:5}]}>Geographical Statistics</Text>
                <View style={[styles.borderBottem,{width:"150%",borderBottomColor:"rgb(34, 174, 179)"}]}></View>
            </View>
        </View>
        {/* <Text style={[styles.HeadingText,{color:"rgb(34, 174, 179)",paddingLeft:35}]}>Geographical Statistics</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: 20, left: 20 }}>
          <Ionicons name={'arrow-back'} size={25} color={'white'} />
        </TouchableOpacity>
        <View style={[styles.borderBottem,{position:"relative", left:30, width:"85%"}]}></View> */}
        <ScrollView>
        <View style={{marginHorizontal:10,marginBottom:10, marginTop:30, width:"110%"}}>
          <SelectDropdown
              data={regions}
              // defaultValueByIndex={1}
              // defaultValue={region[0]}
              onSelect={(selectedItem, index) => {
                setSelectedStats(selectedItem)
                console.log(selectedItem, index);
              }}
              defaultButtonText={'All Regions'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <AntDesign name={isOpened ? 'caretup' : 'caretdown'} color={'black'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown2DropdownStyle}
              dropdownOverlayColor="rgba(255,255,255,0.1)"
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />
        </View>
        <View style={{marginHorizontal:10,marginVertical:10, width:"110%"}}>
          <SelectDropdown
              data={provinces}
              // defaultValueByIndex={1}
              // defaultValue={region[0]}
              onSelect={(selectedItem, index) => {
                // setSelectedStats(selectedItem)
                console.log(selectedItem, index);
              }}
              defaultButtonText={'All Province'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <AntDesign name={isOpened ? 'caretup' : 'caretdown'} color={'black'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownOverlayColor="rgba(255,255,255,0.1)"
              dropdownStyle={styles.dropdown2DropdownStyle}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />
        </View>
        <View style={{marginHorizontal:10,marginVertical:10, width:"110%"}}>
          <SelectDropdown
              data={users}
              // defaultValueByIndex={1}
              defaultValue={users[0]}
              onSelect={(selectedItem, index) => {
                // setSelectedStats(selectedItem)
                console.log(selectedItem, index);
              }}
              // defaultButtonText={'Users Number'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={[styles.dropdown2BtnStyle,{backgroundColor:"rgb(37, 179, 175)"}]}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <AntDesign name={isOpened ? 'caretup' : 'caretdown'} color={'black'} size={18} />;
              }}
              dropdownOverlayColor="rgba(255,255,255,0.1)"
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown2DropdownStyle}
              rowStyle={[styles.dropdown2RowStyle,{backgroundColor:"rgb(37, 179, 175)"}]}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />
        </View>
        <TouchableOpacity
          style={[{marginVertical:5, width:"45%", marginTop:30, marginLeft:"25%", height:40, borderRadius:20,}]}
          onPress={() => navigation.navigate("Graphics")}>
          <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={['#2FC598', '#149AD4']}
              style={styles.gradient1}>
              <Text style={[styles.textStyle, {fontFamily:"Poppins", fontWeight:"bold" ,color:"white"}]}>Create graphic</Text>
          </LinearGradient>
          </TouchableOpacity>
        <View style={{marginTop:50, marginBottom:20}}>
          <Text style={{fontFamily:"Outfit",fontSize:13,fontWeight:500, color:"rgba(37, 179, 175, 1)"}}>TOTAL NUMBER</Text>
          <Text style={{fontFamily:"Outfit", fontSize:55,fontWeight:500, color:"rgba(37, 179, 175, 1)"}}>10534876</Text>
        </View>
        {
          Provincestats.map((val,ind)=> 
            <View key={ind} style={{ width:"100%", marginLeft:5, marginVertical:8,}}>
              <ProgressBar progress={val[2]} width={300} borderRadius={8} height={40} color={"rgba(37, 179, 175, 0.21)"} unfilledColor={"rgba(171, 171, 171, 0.13)"}>
                <Text style={[styles.HeadingText,{textTransform:"uppercase",fontFamily:"Outfit", fontSize:19, fontWeight:"400",position:'absolute', flex:0, top:8, left:10,color:"rgb(34, 174, 179)",fontWeight:"600",fontSize:20,lineHeight:30}]}>{val[0]}</Text>
                <Text style={[styles.HeadingText,{fontSize:19, fontWeight:"bold", position:'absolute', flex:0, top:8,right:65,color:"rgb(34, 174, 179)",fontWeight:"600",fontSize:20,lineHeight:30}]}>{val[1]}</Text>
              </ProgressBar>
            </View>
          )
        }
        <View style={{marginVertical:20}} ></View>
      </ScrollView>
      </View>
  )
}

export default GeographicalStatistics

const styles = StyleSheet.create({
  Menu: {
    flex:1,
    backgroundColor: '#28282B',
    paddingTop: 25,
    paddingLeft:20
    // borderRadius: 20,
    // justifyContent:'center',
    // width: '100%',
    // height: '100%',
    // alignItems: 'center',
    // elevation: 5,
    // position: 'relative',
    // bottom: 0,
    },
    
  borderBottem: {
    borderBottomWidth: 4,
    borderColor: 'rgb(34, 174, 179)',
    borderBottem: 3,
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadingText: {
    // marginBottom: 10,
    // textAlign: 'center',
    color: 'white',
    fontSize: 30,
    lineHeight: 45,
    fontWeight: '700',
  },
  dropdown2BtnStyle: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgb(187, 183, 183)',
    borderRadius: 12,
  },
  dropdown2BtnTxtStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderRadius:12,
    // borderBottomLeftRadius: 12,
    // borderBottomRightRadius: 12,
    borderBottomColor:"black"
  },
  dropdown2RowStyle: {backgroundColor: 'rgb(187, 183, 183)',
  borderBottomColor:"black"},
  dropdown2RowTxtStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  gradient1: {
    width: '100%',
    height: '100%',
    flexDirection:"row",

    // textAlign: 'center',
    justifyContent:"space-evenly",
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  textStyle: {
    color: 'black',
    fontSize:18,
    lineHeight:22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})