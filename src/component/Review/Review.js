/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import React, { useState } from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Review = ({ navigation }) => {
  const [openRating, setOpenRating] = useState(true);
  const [openReview, setOpenReview] = useState(false);

  const [experience, setExperience] = useState('');
  const [review, setReview] = useState();

  // ratingCompleted(rating) {
  //   console.log("Rating is: " + rating)
  // };

  const Reviewhandler = () => {
    setOpenRating(false);
    setOpenReview(true);
  };
  const Ratinghandler = () => {
    setOpenRating(true);
    setOpenReview(false);
  };
  return (
    <View style={styles.main}>
      {openRating ? (
        <ScrollView>
          <Feather
            onPress={() => navigation.goBack()}
            name={'arrow-left'}
            size={30}
            color={'white'}
            style={styles.backBtn}
          />
          <Text style={styles.hedText}>Yoga Lessons</Text>

          <View style={styles.ratSecStar}>
            <View
              style={{
                backgroundColor: '#39393D',
                padding: 25,
                borderRadius: 15,
                fontWeight: '600',
                fontSize: 30,
                lineHeight: 45,
              }}>
              <Text style={styles.RatText}>4.5</Text>

              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name={'star'} size={30} color={'#FFCE31'} style={{ marginRight: 6 }} />
                <FontAwesome name={'star'} size={30} color={'#FFCE31'} style={{ marginRight: 6 }} />
                <FontAwesome name={'star'} size={30} color={'#FFCE31'} style={{ marginRight: 6 }} />
                <FontAwesome name={'star'} size={30} color={'#FFCE31'} style={{ marginRight: 6 }} />
                <FontAwesome name={'star-o'} size={30} color={'#FFCE31'} />
              </View>
            </View>
            <Text style={styles.disText}>Based on 34 Reviews</Text>
          </View>

          <View
            style={{
              //   flexDirection: 'row',
              //   alignItems: 'center',
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                // borderBottomColor: 'white',
                // borderBottomWidth: 1,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../Assets/Ellipse2.png')}
                  style={[styles.img]}
                />
                <View
                  style={[
                    { paddingTop: 15, alignContent: 'baseline', paddingLeft: 9 },
                  ]}>
                  {/* <View
            style={{backgroundColor: '#39393D', padding: 15, borderRadius: 15}}> */}
                  <Text
                    style={[
                      styles.nametext,
                      { justifyContent: 'flex-start', alignSelf: 'flex-start' },
                    ]}>
                    Johan
                  </Text>

                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />

                    <FontAwesome name={'star-o'} size={20} color={'#FFCE31'} />
                  </View>
                </View>
                <Text
                  style={[
                    styles.disText,
                    { alignSelf: 'flex-end', paddingLeft: 9 },
                  ]}>
                  5/5
                </Text>
              </View>
              <Text style={[styles.disText, { alignSelf: 'flex-end' }]}>
                1 day
              </Text>
            </View>
            <Text style={styles.disText}>
              Amazing experience! One of a kind!!! Highly recommended for an
              amazing view.....
            </Text>
          </View>
          <View style={styles.borderBtm}></View>

          <View
            style={{
              //   flexDirection: 'row',
              //   alignItems: 'center',
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                // borderBottomColor: 'white',
                // borderBottomWidth: 1,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../Assets/Ellipse2.png')}
                  style={[styles.img]}
                />
                <View
                  style={[
                    { paddingTop: 15, alignContent: 'baseline', paddingLeft: 9 },
                  ]}>
                  {/* <View
            style={{backgroundColor: '#39393D', padding: 15, borderRadius: 15}}> */}
                  <Text
                    style={[
                      styles.nametext,
                      { justifyContent: 'flex-start', alignSelf: 'flex-start' },
                    ]}>
                    Johan
                  </Text>

                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />
                    <FontAwesome name={'star-o'} size={20} color={'#FFCE31'} />
                  </View>
                </View>
                <Text style={[styles.disText, { alignSelf: 'flex-end', paddingLeft: 9 },]}>3/5 </Text>
              </View>
              <Text style={[styles.disText, { alignSelf: 'flex-end' }]}>
                5  days ago
              </Text>
            </View>
            <Text style={styles.disText}>
              Poor ticketing system. I changed my schedule and I did not get the
              confirmation on time...
            </Text>
          </View>
          <View style={styles.borderBtm}></View>
          <View style={{ padding: 10, }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../Assets/Ellipse2.png')}
                  style={[styles.img]}
                />
                <View style={[{ paddingTop: 15, alignContent: 'baseline', paddingLeft: 9 },]}>
                  <Text style={[styles.nametext, { justifyContent: 'flex-start', alignSelf: 'flex-start' },]}>Johan</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />
                    <FontAwesome name={'star'} size={20} color={'#FFCE31'} style={{ marginRight: 6 }} />
                    <FontAwesome name={'star-o'} size={20} color={'#FFCE31'} />
                  </View>
                </View>
                <Text
                  style={[
                    styles.disText,
                    { alignSelf: 'flex-end', paddingLeft: 9 },
                  ]}>
                  1/5
                </Text>
              </View>
              <Text style={[styles.disText, { alignSelf: 'flex-end' }]}>
                1 Month ago
              </Text>
            </View>
            <Text style={styles.disText}>
              We had such an awful experience, left dissappointed and offended
              by the lady in the entrance...
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.btn, { height: 58, marginTop: 20 }]}
            onPress={() => Reviewhandler()}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 0.5 }}
              colors={['#33CC8F', '#28CCF2']}
              style={[styles.gradient, { marginBottom: 25, flexDirection: 'row', height: 53, justifyContent: 'center' }]}>

              <Feather
                name={'plus'}
                size={25}
                color={'white'}
                style={{ paddingLeft: 5, marginRight: 10 }}
              />
              <Text style={[styles.btntext, { paddingRight: 30 }]}>Add Review</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      ) : null}
      {openReview ? (
        <ScrollView>
          <Feather
            onPress={Ratinghandler}
            name={'arrow-left'}
            size={30}
            color={'white'}
            style={styles.backBtn}
          />
          <Text style={styles.hedText}>Add new Rating</Text>

          <Text
            style={[
              styles.nametext,
              {
                justifyContent: 'flex-start',
                alignSelf: 'center',
                paddingVertical: 15,
                fontSize: 20,
                fontWeight: '600',
                lineHeight: 30,
              },
            ]}>
            How was your experience?
          </Text>
          <View style={styles.ratSecStar}>
            <View
              style={{
                padding: 15,
                borderRadius: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Text
                style={[
                  styles.RatText,
                  {
                    backgroundColor: '#39393D',
                    paddingHorizontal: 8,
                    borderRadius: 15,
                    fontSize: 30,
                  },
                ]}>
                4/5
              </Text> */}

              {/* <View style={{ flexDirection: 'row', paddingLeft: 9 }}>
                <FontAwesome name={'star'} size={30} color={'#FFCE31'} style={{ marginRight: 6 }} />
                <FontAwesome name={'star'} size={30} color={'#FFCE31'} style={{ marginRight: 6 }} />
                <FontAwesome name={'star'} size={30} color={'#FFCE31'} style={{ marginRight: 6 }} />
                <FontAwesome name={'star'} size={30} color={'#FFCE31'} style={{ marginRight: 6 }} />
                <FontAwesome name={'star-o'} size={30} color={'#FFCE31'} />
              </View> */}

              <AirbnbRating
                count={5}
                
                reviews={["1/5", "2/5", "3/5", "4/5", "5/5",]}
                // onValueChange={value => {
                //   setReview(value,reviews)
                // }}
                defaultRating={1}
                size={20}
                showRating

              />
              {/* <Rating
                type='star'
                ratingCount={5}
                imageSize={25}
                showRating
                ratingBackgroundColor='red'
                ratingContainerStyle='#28282B'
                starContainerStyle='#28282B'
                style={{ paddingVertical: 10, backgroundColor: '#28282B' }}

              // onFinishRating={ratingCompleted}
              /> */}
            </View>
          </View>
          <Text
            style={[
              styles.nametext,
              {
                justifyContent: 'flex-start',
                alignSelf: 'center',
                paddingBottom: 15,
                fontSize: 20,
                fontWeight: '600',
              },
            ]}>
            Describe your experience:
          </Text>
          <TextInput
            placeholder='Tap to describe your experince... 
            (max 100 words)'
            multiline
            value={experience}
            onChangeText={value => {
              setExperience(value);
            }}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            style={styles.input}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Review')}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.5 }}
                colors={['#33CC8F', '#28CCF2']}
                style={[
                  styles.gradient,
                  { justifyContent: 'center', alignSelf: 'center' },
                ]}>
                <Text style={[styles.btntext,]}>
                  Confirm
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={Ratinghandler}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.5 }}
                colors={['#33CC8F', '#28CCF2']}
                style={[
                  styles.gradient,
                  { justifyContent: 'center', alignSelf: 'center' },
                ]}>
                <Text style={[styles.btntext,]}>
                  Cancel
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#28282B',
    height: '100%',
    padding: 15,
    paddingBottom: 0,
  },
  hedText: {
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 45,
    alignSelf: 'center',
    color: '#22AEB3',
    paddingVertical: 20,
  },
  backBtn: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  disText: {
    paddingTop: 10,
    fontWeight: '300',
    fontSize: 18,
    lineHeight: 27,
    color: 'silver',
    // marginHorizontal: 20,
  },
  borderBtm: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    width: '90%',
  },
  ratSecStar: {
    padding: 15,

    // justifyContent: 'center',
    alignItems: 'center',

    // width: '50%',
  },
  RatText: {
    fontWeight: '600',
    fontSize: 45,
    lineHeight: 68,
    alignSelf: 'center',
    color: 'white',
    padding: 0,
  },
  nametext: {
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    color: '#FFFFFF',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    // borderWidth:25
    // objectFit: 'cover',
    // resizeMode: 'cover',
  },
  btn: {
    marginTop: 15,
    height: 57,
    width: '45%',
    // padding: 15,
    borderRadius: 20,
    shadowColor: 'black',
    // backgroundColor: '#28CCF2',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btntext: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 27,
    // textTransform: 'uppercase',
  },
  input: {
    marginVertical: 10,
    width: '92%',
    textAlignVertical: 'top',
    // height:'50%',
    color: '#000000',
    fontSize: 18,
    height: 350,
    backgroundColor: '#fff',
    alignSelf: 'center',
    // borderWidth: 0.3,
    elevation: 5,
    borderRadius: 20,
    paddingHorizontal: 19,
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
});
