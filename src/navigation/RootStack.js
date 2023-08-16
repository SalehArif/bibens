/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// User Panel
import IstIntro from '../screen/UserPannel/intro/IstIntro';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import Event from '../screen/UserPannel/Events/Event'
import Profile from '../screen/UserPannel/Profile/Profile';
import Review from '../component/Review/Review';
import Setting from '../screen/UserPannel/Setting/Setting';
import AppInfo from '../screen/UserPannel/Setting/AppInfo';
import PremiumVersion from '../screen/UserPannel/Setting/PremiumVersion';
import Map from '../screen/UserPannel/Map/Map';
import Favorite from '../screen/UserPannel/Events/Favorite';
import Messages from '../screen/UserPannel/Messages';
import PaymentMethod from '../screen/UserPannel/PaymentMethod';
import Event1 from '../screen/UserPannel/Events/event1'
import EventDetail from '../screen/UserPannel/Events/EventDetail'
import ActivityDetail from '../screen/UserPannel/Events/ActivityDetail'
import ActivityDetail2 from '../screen/UserPannel/Events/ActivityDetail2'

// Owner Panel
import OwnerIntro from '../screen/OwnerPanel/intro/OwnerIntro';
import OwnerLogin from '../screen/OwnerPanel/Login';
import OwnerSignup from '../screen/OwnerPanel/Signup';
import OwnerEvent from '../screen/OwnerPanel/Events/Event'
import OwnerProfile from '../screen/OwnerPanel/Profile/Profile';
import OwnerEditProfile from '../screen/OwnerPanel/Profile/EditProfile';
import OwnerSetting from '../screen/OwnerPanel/Setting/Setting';
import OwnerAppInfo from '../screen/OwnerPanel/Setting/AppInfo';
import OwnerPremiumVersion from '../screen/OwnerPanel/Setting/PremiumVersion';
import OwnerMap from '../screen/OwnerPanel/Map/Map';
import OwnerFavorite from '../screen/OwnerPanel/Events/Favorite';
import OwnerMessages from '../screen/OwnerPanel/Messages';
import OwnerPaymentMethod from '../screen/OwnerPanel/PaymentMethod';
import OwnerEvent1 from '../screen/OwnerPanel/Events/event1'
import OwnerEventDetail from '../screen/OwnerPanel/Events/EventDetail'
import OwnerActivityDetail from '../screen/OwnerPanel/Events/ActivityDetail'
import OwnerActivityDetail2 from '../screen/OwnerPanel/Events/ActivityDetail2'
import OwnerCreateEvent from '../screen/OwnerPanel/Events/CreateEvent';
import OwnerCreateEventDetail from '../screen/OwnerPanel/Events/CreateEventDetail';
import OwnerDeleteEvent from '../screen/OwnerPanel/Events/DeleteEvent';
import OwnerSponsorEvent from '../screen/OwnerPanel/Events/SponsorEvent';
import OwnerChooseEvent from '../screen/OwnerPanel/Events/ChooseEvent';
import OwnerEditEvent1 from '../screen/OwnerPanel/Events/Editevent1';
import OwnerEditEventDetail from '../screen/OwnerPanel/Events/EditEventDetail';
import OwnerEditActivityDetail from '../screen/OwnerPanel/Events/EditActivityDetail';
import OwnerEditActivityDetail2 from '../screen/OwnerPanel/Events/EditActivityDetail2';

// Admin Panel
import AdminIntro from '../screen/AdminPanil/intro/AdminIntro';
import AdminLogin from '../screen/AdminPanil/Login';
import AdminSignup from '../screen/AdminPanil/Signup';
import AdminEvent from '../screen/AdminPanil/Events/Event'
import AdminProfile from '../screen/AdminPanil/Profile/AdminProfile';
import AdminEditProfile from '../screen/AdminPanil/Profile/EditProfile';
import AdminSetting from '../screen/AdminPanil/Setting/Setting';
import AdminAppInfo from '../screen/AdminPanil/Setting/AppInfo';
import AdminPremiumVersion from '../screen/AdminPanil/Setting/PremiumVersion';
import AdminMap from '../screen/AdminPanil/Map/Map';
import AdminFavorite from '../screen/AdminPanil/Events/Favorite';
import AdminMessages from '../screen/AdminPanil/Messages';
import AdminPaymentMethod from '../screen/AdminPanil/PaymentMethod';
import AdminEvent1 from '../screen/AdminPanil/Events/event1'
import AdminEventDetail from '../screen/AdminPanil/Events/EventDetail'
import AdminActivityDetail from '../screen/AdminPanil/Events/ActivityDetail'
import AdminActivityDetail2 from '../screen/AdminPanil/Events/ActivityDetail2'
import AdminCreateEvent from '../screen/AdminPanil/Events/CreateEvent';
import AdminCreateEventDetail from '../screen/AdminPanil/Events/CreateEventDetail';
import AdminDeleteEvent from '../screen/AdminPanil/Events/DeleteEvent';
import AdminSponsorEvent from '../screen/AdminPanil/Events/SponsorEvent';
import AdminChooseEvent from '../screen/AdminPanil/Events/ChooseEvent';
import AdminEditEvent1 from '../screen/AdminPanil/Events/Editevent1';
import AdminEditEventDetail from '../screen/AdminPanil/Events/EditEventDetail';
import AdminEditActivityDetail from '../screen/AdminPanil/Events/EditActivityDetail';
import AdminEditActivityDetail2 from '../screen/AdminPanil/Events/EditActivityDetail2';
//Admin controls
import AdminImages from '../screen/AdminPanil/AdminControls/images';
import AdminControlPanel from '../screen/AdminPanil/AdminControls/controlPanel';
import AdminProfileMessage from '../screen/AdminPanil/AdminControls/message';
import ManageOwners from '../screen/AdminPanil/AdminControls/owners';
import ManageUsers from '../screen/AdminPanil/AdminControls/users';
import AdminDM from '../screen/AdminPanil/AdminControls/adminDM';
import GeneralStatistics from '../screen/AdminPanil/AdminControls/generalStatistics';
import GeographicalStatistics from '../screen/AdminPanil/AdminControls/geographicalStatistics';
import Graphics from '../screen/AdminPanil/AdminControls/graphics';
import AdminOrganizor from '../component/AdminOrganizor';

// Common Routes
import Organizor from '../component/Organizor';
import EventImages from '../component/event/images';
import EventTags from '../component/event/tags';
import Tipology from '../component/event/tipology';
import OwnerStats from '../screen/AdminPanil/AdminControls/ownerstats';

const Stack = createNativeStackNavigator();

function
    RootStack() {
    return (
        <Stack.Navigator initialRouteName="AdminIntro"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#28282B',
                    // paddingTop: 20
                },
                headerTintColor: '#28282B',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                animation: 'slide_from_right',
                headerShown: false
            }}>
            {/* User Panel */}
            <Stack.Screen name="IstIntro" component={IstIntro}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Event" component={Event}/>
            <Stack.Screen name="Event1" component={Event1}/>
            <Stack.Screen name="EventDetail" component={EventDetail}/>
            <Stack.Screen name="Review" component={Review}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Setting" component={Setting}/>
            <Stack.Screen name="AppInfo" component={AppInfo}/>
            <Stack.Screen name="PremiumVersion" component={PremiumVersion}/>
            <Stack.Screen name="Map" component={Map}/>
            <Stack.Screen name="Favorite" component={Favorite}/>
            <Stack.Screen name="PaymentMethod" component={PaymentMethod}/>
            <Stack.Screen name="Messages" component={Messages}/>
            <Stack.Screen name="ActivityDetail" component={ActivityDetail}/>
            <Stack.Screen name="ActivityDetail2" component={ActivityDetail2}/>

            {/* Owner Panel */}
            <Stack.Screen name="OwnerIntro" component={OwnerIntro}/>
            <Stack.Screen name="OwnerLogin" component={OwnerLogin}/>
            <Stack.Screen name="OwnerSignup" component={OwnerSignup}/>
            <Stack.Screen name="OwnerEvent" component={OwnerEvent}/>
            <Stack.Screen name="OwnerEvent1" component={OwnerEvent1}/>
            <Stack.Screen name="OwnerEventDetail" component={OwnerEventDetail}/>
            <Stack.Screen name="OwnerEditEvent1" component={OwnerEditEvent1}/>
            <Stack.Screen name="OwnerEditEventDetail" component={OwnerEditEventDetail}/>
            <Stack.Screen name="OwnerCreateEvent" component={OwnerCreateEvent}/>
            <Stack.Screen name="OwnerCreateEventDetail" component={OwnerCreateEventDetail}/>
            <Stack.Screen name="EventImages" component={EventImages}/>
            <Stack.Screen name="EventTags" component={EventTags}/>
            <Stack.Screen name="OwnerDeleteEvent" component={OwnerDeleteEvent}/>
            <Stack.Screen name="OwnerSponsorEvent" component={OwnerSponsorEvent}/>
            <Stack.Screen name="OwnerProfile" component={OwnerProfile}/>
            <Stack.Screen name="OwnerEditProfile" component={OwnerEditProfile}/>
            <Stack.Screen name="Organizor" component={Organizor}/>
            <Stack.Screen name="OwnerSetting" component={OwnerSetting}/>
            <Stack.Screen name="OwnerAppInfo" component={OwnerAppInfo}/>
            <Stack.Screen name="OwnerChooseEvent" component={OwnerChooseEvent}/>
            <Stack.Screen name="OwnerPremiumVersion" component={OwnerPremiumVersion}/>
            <Stack.Screen name="OwnerMap" component={OwnerMap}/>
            <Stack.Screen name="OwnerFavorite" component={OwnerFavorite}/>
            <Stack.Screen name="OwnerPaymentMethod" component={OwnerPaymentMethod}/>
            <Stack.Screen name="OwnerMessages" component={OwnerMessages}/>
            <Stack.Screen name="OwnerActivityDetail" component={OwnerActivityDetail}/>
            <Stack.Screen name="OwnerActivityDetail2" component={OwnerActivityDetail2}/>
            <Stack.Screen name="OwnerEditActivityDetail" component={OwnerEditActivityDetail}/>
            <Stack.Screen name="OwnerEditActivityDetail2" component={OwnerEditActivityDetail2}/> 
            <Stack.Screen name="ActivtyTipology" component={Tipology}/>

            {/* Admin Panel */}
            <Stack.Screen name="AdminIntro" component={AdminIntro}/>
            <Stack.Screen name="AdminLogin" component={AdminLogin}/>
            <Stack.Screen name="AdminSignup" component={AdminSignup}/>
            <Stack.Screen name="AdminEvent" component={AdminEvent}/>
            <Stack.Screen name="AdminEvent1" component={AdminEvent1}/>
            <Stack.Screen name="AdminEventDetail" component={AdminEventDetail}/>
            <Stack.Screen name="AdminEditEvent1" component={AdminEditEvent1}/>
            <Stack.Screen name="AdminEditEventDetail" component={AdminEditEventDetail}/>
            <Stack.Screen name="AdminCreateEvent" component={AdminCreateEvent}/>
            <Stack.Screen name="AdminCreateEventDetail" component={AdminCreateEventDetail}/>
            <Stack.Screen name="AdminDeleteEvent" component={AdminDeleteEvent}/>
            <Stack.Screen name="AdminSponsorEvent" component={AdminSponsorEvent}/>
            <Stack.Screen name="AdminOrganizor" component={AdminOrganizor}/>
            <Stack.Screen name="OwnerStats" component={OwnerStats}/>
            {/* <Stack.Screen name="AdminChooseEvent" component={AdminChooseEvent}/> */}
            <Stack.Screen name="AdminMap" component={AdminMap}/>
            <Stack.Screen name="AdminFavorite" component={AdminFavorite}/>
            <Stack.Screen name="AdminPaymentMethod" component={AdminPaymentMethod}/>
            <Stack.Screen name="AdminMessages" component={AdminMessages}/>
            <Stack.Screen name="AdminProfileMessage" component={AdminProfileMessage}/>
            <Stack.Screen name="AdminActivityDetail" component={AdminActivityDetail}/>
            <Stack.Screen name="AdminActivityDetail2" component={AdminActivityDetail2}/>
            <Stack.Screen name="AdminEditActivityDetail" component={AdminEditActivityDetail}/>
            <Stack.Screen name="AdminEditActivityDetail2" component={AdminEditActivityDetail2}/>

            {/* Admin profile */}
            <Stack.Screen name="AdminProfile" component={AdminProfile}/>
            <Stack.Screen name="AdminEditProfile" component={AdminEditProfile}/>
            <Stack.Screen name="AdminImages" component={AdminImages}/>
            <Stack.Screen name="AdminControlPanel" component={AdminControlPanel}/>
            <Stack.Screen name="AdminSetting" component={AdminSetting}/>
            <Stack.Screen name="AdminAppInfo" component={AdminAppInfo}/>
            <Stack.Screen name="ManageOwners" component={ManageOwners}/>
            <Stack.Screen name="ManageUsers" component={ManageUsers}/>
            <Stack.Screen name="AdminPremiumVersion" component={AdminPremiumVersion}/>
            <Stack.Screen name="AdminDM" component={AdminDM}/>
            <Stack.Screen name="GeneralStatistics" component={GeneralStatistics}/>
            <Stack.Screen name="GeographicalStatistics" component={GeographicalStatistics}/>
            <Stack.Screen name="Graphics" component={Graphics}/>

        </Stack.Navigator>


    )
}
export default RootStack;