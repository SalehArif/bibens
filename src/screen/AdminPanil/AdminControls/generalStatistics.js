import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';

const GeneralStatistics = ({ navigation }) => {
  const stats = [
    'Generic Statistics',
    'Age Statistics',
    'Survey',]
  const Genericstats = [
    ["USERS NUMBER",156],["OWNERS NUMBER",2], 
    ["N° OF EVENTS (ACTIVE)", 6155151],
    ["N° OF ACTIVITIES", 6155151],
    ["WEEKLY USERS VISITS", 6155151],
    ["WEEKLY GUEST VISITS", 6155151],
    ["WEEKLY OWNERS VISITS", 6155151],
    ["N° CLICKS ON THE ADS", 6155151],
    ["N° ADS VISUALIZATIONS", 6155151],
    ["TOTAL PROFITS (MONTH)", 6155151],
    ["PROFITS FROM ADS", 6155151],
    ["N° OF PLAN BASIC", 6155151],
    ["N° OF PLAN MANAGER", 6155151],
    ["N° OF PLAN PREMIUM", 6155151],
    ["N° OF PLAN BUISNESS", 6155151],
];
  const Agestats = [
    ["USERS AGE 18 TO 25","30%"],
    ["USERS AGE 25 TO 30","25%"], 
    ["USERS AGE 30 TO 40", "15%"],
    ["USERS AGE 40 TO 50", "13%"],
    ["USERS AGE 50 TO 60", "14%"],
    ["USERS AGE 60+", "3%"],
    ["OWNERS AGE 18 TO 25", "30%"],
    ["OWNERS AGE 25 TO 30", "25%"],
    ["OWNERS AGE 30 TO 40", "15%"],
    ["OWNERS AGE 40 TO 50", "10%"],
    ["OWNERS AGE 50 TO 60", "10%"],
    ["OWNERS AGE 60+", "5%"],
];
  const Surveystats = [
    ["Facebook","20%"],
    ["Instagram","10%"], 
    ["Tik Tok", "15%"],
    ["Internet in general", "10%"],
    ["App Store or Play Store", "9%"],
    ["Friends / By word of mouth", "3%"],
    ["Flyers", "5%"],
    ["Others", "2%"],
];
  const [selectedStats, setSelectedStats] = React.useState("Generic Statistics")

  return (
    <View style={ styles.Menu}>
      <Text style={[styles.HeadingText,{color:"rgb(34, 174, 179)",paddingLeft:50}]}>General Statistics</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: 20, left: 20 }}>
          <Ionicons name={'arrow-back'} size={25} color={'white'} />
        </TouchableOpacity>
        <View style={[styles.borderBottem,{position:"relative", left:30, width:"85%"}]}></View>

        <View style={{marginHorizontal:20,marginVertical:30, width:"100%"}}>
          <SelectDropdown
              data={stats}
              // defaultValueByIndex={1}
              defaultValue={stats[0]}
              onSelect={(selectedItem, index) => {
                setSelectedStats(selectedItem)
              }}
              // defaultButtonText={'Select country'}
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
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />
        </View>
      { selectedStats=="Survey" ? <Text style={{marginLeft:10,color:"white", fontSize:18,fontWeight:"400"}}>How do you find out Bibens?</Text>:null }
      <ScrollView>
        { selectedStats=="Generic Statistics" ?
          Genericstats.map((val,ind)=> 
          <View key={ind} style={{flexDirection:"row", width:"90%", marginLeft:5, paddingHorizontal:10, paddingVertical:5, justifyContent:"space-between", marginVertical:10, borderRadius:8, backgroundColor:"rgba(171, 171, 171, 0.13)"}}>
            <Text style={[styles.HeadingText,{color:"rgb(34, 174, 179)",fontWeight:"600",fontSize:20,lineHeight:30}]}>{val[0]}</Text>
            <Text style={[styles.HeadingText,{color:"rgb(34, 174, 179)",fontWeight:"600",fontSize:20,lineHeight:30}]}>{val[1]}</Text>
          </View>
          ): selectedStats=="Age Statistics" ?
          Agestats.map((val,ind)=> 
          <View key={ind} style={{flexDirection:"row", width:"90%", marginLeft:5, paddingHorizontal:10, paddingVertical:5, justifyContent:"space-between", marginVertical:10, borderRadius:8, backgroundColor:"rgba(171, 171, 171, 0.13)"}}>
            <Text style={[styles.HeadingText,{color:"rgb(34, 174, 179)",fontWeight:"600",fontSize:20,lineHeight:30}]}>{val[0]}</Text>
            <Text style={[styles.HeadingText,{color:"rgb(34, 174, 179)",fontWeight:"600",fontSize:20,lineHeight:30}]}>{val[1]}</Text>
          </View>
          )
          :
          Surveystats.map((val,ind)=> 
          <View key={ind} style={{flexDirection:"row", width:"90%", marginLeft:5, paddingHorizontal:10, paddingVertical:5, justifyContent:"space-between", marginVertical:10, borderRadius:8, backgroundColor:"rgba(171, 171, 171, 0.13)"}}>
            <Text style={[styles.HeadingText,{color:"rgb(34, 174, 179)",fontWeight:"600",fontSize:20,lineHeight:30}]}>{val[0]}</Text>
            <Text style={[styles.HeadingText,{color:"rgb(34, 174, 179)",fontWeight:"600",fontSize:20,lineHeight:30}]}>{val[1]}</Text>
          </View>
          )

        }
      </ScrollView>
      </View>
  )
}

export default GeneralStatistics

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
    borderRadius: 10,
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
})