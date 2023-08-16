import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Divider } from 'react-native-paper';

const Tipology = ({ navigation, route }) => {
	const [activity, setActivity] =  React.useState(["Pub","Wellness","Course", "Sport","Meditation","Theater","Restaurant","Type","Cinema","Games"])
	const [tipology,settipology] = React.useState() 
	// const [activities,setActivities] = React.useState([]) 

	React.useEffect(() => {
		if(route.params?.tipology){
			// setActivities(route.params.tipology)
			setActivity( state => (state.filter(item => route.params.tipology.indexOf(item)==-1)))
		}
	}, [route.params?.tipology]);

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
            // paddingTop: 25,
            position: 'relative',
            height:"10%"
        }}>
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.7 }}
        colors={['#28CCF2', '#33CC8F']}
        style={[styles.gradient]}>
            <Text style={[styles.headingText,{color:"white", top: 25, position: 'absolute', left: 100}]}>Select tipology</Text>
            <TouchableOpacity
                onPress={
                () => navigation.goBack()
                }
                style={{ top: 25, position: 'absolute', right: 25 }}
            >
                <Ionicons
                name={'close'}
                size={25}
                color={'white'}
                />
            </TouchableOpacity>
        </LinearGradient>
        </View>
            <Text style={{fontSize:18, color:"white", paddingHorizontal:15, paddingVertical:5}}>Select the type better represents your business:</Text>
        <View style={{flexDirection:"row", justifyContent:"space-around",flexWrap:"wrap", marginVertical: 20, marginHorizontal:30}}>
            {activity.map((item,index) =>(
                <TouchableOpacity onPress={()=>{settipology(item)}} key={index} 
                style={[{borderRadius:20, backgroundColor:"white", width:"45%", marginHorizontal:"2%",  marginVertical:"3%", paddingHorizontal:"2%", paddingVertical:"4%"}, item==tipology ? {backgroundColor:"#25B3AF"}:null]}>
                        <Text style={[{color:"black", textAlign:"center", fontFamily:"Poppins", fontSize:16, lineHeight:24, fontWeight:"400"},  item==tipology ? {color:"white"}:null]}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
        <TouchableOpacity
            style={[styles.btn, { alignSelf: 'center', height: 58 ,width:'50%'}]} 
            onPress={()=> navigation.navigate({name: "OwnerCreateEventDetail", params:{tipology:tipology}, merge:true})}>
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1.7 }}
            colors={['#28CCF2', '#33CC8F']}
            style={styles.gradient}>
            <Text style={[styles.btn1text,{color:"white"}]}>Select</Text>
        </LinearGradient>
        </TouchableOpacity>
    </View>
  )
}

export default Tipology

const styles = StyleSheet.create({

    headingText: {
        fontFamily: 'Poppins',
        // fontStyle: 'normal',
        fontWeight: '700',
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
        marginTop: 70,
        height: 58,
        width: '80%',
        borderRadius: 10,
        shadowColor: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      
})