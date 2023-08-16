import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import { LineGraph, AxisLabel, SelectionDot } from 'react-native-graph'

const Graphics = ({ navigation }) => {
 
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
    "N° Of Plan Gold ",
    "N° Of Plan Silver",
    "N° Of Plan Platinum ",
    "N° Of Plan Buisness",
  ]
  const [selectedFilters, setSelectedFilters] = React.useState("")

  const graphPeriods = ["week","month","year","all"]
  const [selectedPeriod, setSelectedPeriod] = React.useState(0)
  
  function generateGraphData(length) {
    return new Array(length)
      .fill(0)
      .map((val, index) => ({
        date: new Date(index),
        value: index-(Math.random()*10),
      }))
  }
  const graph_labels = [
  {x:["Mon","Wed","Fri","Sun"],y:[0,50,100,250,500]}, // Week
  {x:["15 Mar","23 Mar","30 Mar","10 Apr"],y:[0,500,1000,1500,2000]}, //Month
  {x:["Jun 22","Sep 22","Dec 22","Mar 23"],y:[0,500,1000,1500,2000]}, //Year
  {x:["2020","2021","2022","2023"],y:[0,500,1000,1500,2000]}] // All

  const SMALL_POINTS = generateGraphData(50)

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
        <ScrollView>
        <View style={{marginHorizontal:10,marginBottom:10, marginTop:30, width:"110%"}}>
          <SelectDropdown
              data={regions}
              onSelect={(selectedItem, index) => {
                setSelectedFilters(selectedItem)
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
        <View style={{marginTop:50, marginBottom:20}}>
          <Text style={{fontFamily:"Outfit",fontSize:13,fontWeight:500, color:"rgba(37, 179, 175, 1)"}}>CURRENT NUMBER</Text>
          <Text style={{fontFamily:"Outfit", fontSize:55,fontWeight:500, color:"rgba(37, 179, 175, 1)"}}>1756</Text>
        </View>
        {/* y axis in row */}
        <View style={{flexDirection:"row", }} >
          <View style={{justifyContent:"space-between", marginLeft:5, flexDirection:"column-reverse"}}>
            {
              graph_labels[selectedPeriod].y.map((val,index) => index!=0 ?
                <Text style={[styles.textStyle,{color:"white"}]}>{val}</Text>
                :
                <Text style={[styles.textStyle,{color:"white"}]}>{" "}</Text>
                )

            }
              
          </View>
          <View style={{width:"90%"}}>
            <LineGraph
              style={styles.miniGraph}
              // animated={true}
              // enablePanGesture={true}
              // SelectionDot={()=> <SelectionDot color='#81C995' circleX={5} circleY={5} isActive={true} />}
              // TopAxisLabel={() => <AxisLabel x={max.x} value={max.value} />}
              // BottomAxisLabel={() => <AxisLabel x={min.x} value={min.value} />}
              color={'#38A78D'}
              points={SMALL_POINTS}
            />
          {/* x axis below */}
          <View style={{flexDirection:"row",justifyContent:"space-evenly", marginHorizontal:2}}>
            {
              graph_labels[selectedPeriod].x.map(val=> 
                <Text style={[styles.textStyle,{color:"white"}]}>{val}</Text>
              )
            }
          </View>
          </View>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", marginHorizontal:20, marginVertical:20}}>
          {
            graphPeriods.map((val,index) => 
              <TouchableOpacity key={index} onPress={()=>setSelectedPeriod(index)} style={[styles.periodBtn, index==selectedPeriod? {backgroundColor:"rgba(52, 170, 147, 1)"}:null]}>
                <Text style={[styles.periodtxt, index==selectedPeriod ? {color:"black"}:null]}>{val}</Text>
              </TouchableOpacity>
            )
          }
        </View>
        <View style={{marginVertical:20}} ></View>
      </ScrollView>
      </View>
  )
}

export default Graphics

const styles = StyleSheet.create({
  Menu: {
    flex:1,
    backgroundColor: '#28282B',
    paddingTop: 25,
    paddingLeft:20
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
  miniGraph: {
    width: "85%",
    height: 200,
    marginLeft: 20,
    backgroundColor:"rgba(25, 154, 196, 0.0697)"
  },
  periodBtn:{borderColor:"rgba(52, 170, 147, 1)", width:"25%", borderWidth:2, marginHorizontal:10, borderRadius:50},
  periodtxt:{color:"white", textTransform:"uppercase", fontSize:13, fontWeight:"700", textAlign:"center", fontFamily:"Roboto", paddingHorizontal:10, paddingVertical:5}
})