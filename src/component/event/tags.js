import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Divider } from 'react-native-paper';

const EventTags = ({ navigation, route }) => {
	const [activity, setActivity] =  React.useState(["Physical","Creative","Educational", "Social","Leisure","Outdoor","Productive","Relaxation"])
	const [activities,setActivities] = React.useState([]) 

	React.useEffect(() => {
		if(route.params?.tags){
			setActivities(route.params.tags)
			setActivity( state => (state.filter(item => route.params.tags.indexOf(item)==-1)))
		}
	}, [route.params?.tags]);

  return (
        <View
            style={{
            backgroundColor: '#28282B',
            height: '100%',
            width: '100%',
            position: 'absolute',
            bottom: 0,
            }}>
            <View
            style={{
                alignItems: 'center',
                paddingTop: 25,
                position: 'relative',
            }}>
            <TouchableOpacity
                onPress={
                () => navigation.goBack()
                }
                style={{ top: 25, position: 'absolute', left: 25 }}
            >
                <Ionicons
                name={'md-arrow-back-sharp'}
                size={25}
                color={'white'}
                />
            </TouchableOpacity>
            <Text style={styles.headingText}>Select tags</Text>
            </View>
              <Text style={{fontSize:18, color:"white", paddingHorizontal:15, paddingVertical:5}}>Select which adjectives can fit your activity</Text>
              <Text style={{fontSize:18, color:"white", paddingHorizontal:15, paddingVertical:5}}>Maximum 5 tags</Text>
              <View style={{flexDirection:"row", justifyContent:"space-around",flexWrap:"wrap", marginVertical: 20, marginHorizontal:30}}>
              {activities.map((item,index) =>(
                  <TouchableOpacity 
                  onPress={()=>{setActivities( state => (state.filter(key => key !== item))); setActivity( state => ([...state, item])); }}
                  key={index} style={{flexDirection:"row", justifyContent:"space-evenly" ,backgroundColor:"#25B3AF", borderRadius:20, width:"45%", marginHorizontal:"2%",  marginVertical:"3%", paddingHorizontal:"2%", paddingVertical:"4%"}}>
                      <Ionicons name={'close'} size={20} color={"black"}/>
                      <Text style={{color:"black", textAlign:"center", fontFamily:"Poppins", fontSize:16, lineHeight:24, fontWeight:"400"}}>{item}</Text>
                  </TouchableOpacity>
                ))}
            </View>
        <Divider horizontalInset />
        <View style={{flexDirection:"row", justifyContent:"space-around",flexWrap:"wrap", marginVertical: 20, marginHorizontal:30}}>
					{activity.map((item,index) =>(
						<TouchableOpacity onPress={()=>{ 
              if(activities.length !== 5){
                setActivities( state => ([...state, item])); setActivity(state => (state.filter(key => key !== item)))
              }
            }} key={index} disabled={activities.length == 5} 
            style={[{borderRadius:20, backgroundColor:"white", width:"45%", marginHorizontal:"2%",  marginVertical:"3%", paddingHorizontal:"2%", paddingVertical:"4%"}, activities.length == 5 ? {backgroundColor:"grey"}:null]}>
								<Text style={{color:"black", textAlign:"center", fontFamily:"Poppins", fontSize:16, lineHeight:24, fontWeight:"400"}}>{item}</Text>
						</TouchableOpacity>
					))}
        </View>
        <TouchableOpacity
            style={[styles.btn, { alignSelf: 'center', height: 58 ,width:'70%'}]} 
            onPress={()=> navigation.navigate({name: "OwnerCreateEventDetail", params:{tags:activities}, merge:true})}>
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1.7 }}
            colors={['#28CCF2', '#33CC8F']}
            style={styles.gradient}>
            <Text style={[styles.btn1text,{color:"white"}]}>Confirm</Text>
        </LinearGradient>
        </TouchableOpacity>
    </View>
  )
}

export default EventTags

const styles = StyleSheet.create({

    headingText: {
        fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 25,
        lineHeight: 27,
        // textTransform: 'uppercase',
        paddingBottom: 20,
        color: 'white',
        alignSelf: 'center',
      },
      gradient: {
        width: '100%',
        height: '100%',
        // textAlign: 'center',
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
      btn: {
        marginTop: 15,
        height: 58,
        width: '80%',
        borderRadius: 10,
        shadowColor: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      
})