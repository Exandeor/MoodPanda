import AccountScreen from "../Screens/BottomTabScreen/AccountScreen";
import ActivityScreen from "../Screens/BottomTabScreen/ActivityScreen";
import HomeScreen from "../Screens/BottomTabScreen/HomeScreen";
import MessagesScreen from "../Screens/BottomTabScreen/MessagesScreen";
import PaymentScreen from "../Screens/BottomTabScreen/PaymentScreen";

export const BottomTabData = [
    {
        component : HomeScreen,
        screenName : "HomeScreen",
        label : "Home",
        icon : "home"
    } ,
    {
        component : ActivityScreen,
        screenName : "ActivityScreen",
        label : "Activity",
        icon : "newspaper"
    } ,
    {
        component : PaymentScreen,
        screenName : "PaymentScreen",
        label : "Payment",
        icon : "wallet"
    } ,
    {
        component : MessagesScreen,
        screenName : "MessagesScreen",
        label : "Messages",
        icon : "chatbox-ellipses-outline"
    } ,
    {
        component : AccountScreen,
        screenName : "AccountScreen",
        label : "Account",
        icon : "person-circle"
    } ,
]