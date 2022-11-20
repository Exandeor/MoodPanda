import React, { useState } from 'react';
import { View ,StyleSheet, Text, Image, StatusBar, TouchableOpacity, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'react-native-gesture-handler';
import FloatSearchBarComponent from '../../Components/FloatSearchBarComponent';
import HorizontalListComponent from '../../Components/HorizontalListComponent';
import SearchBarComponent from '../../Components/SearchBarComponent';
import VerticalListComponent from '../../Components/VerticalListComponent';
import { CategoryListData } from '../../DummyData/CategoryListData';
import { COLORS, FONTS, SIZES } from '../../Themes/Theme';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const HomeScreen = () => {
    const [hideSearchBar,setHideSearchBar] = useState(true);
    const navigation = useNavigation();
    return(
        <View>
            <StatusBar translucent barStyle={"dark-content"} backgroundColor={hideSearchBar? COLORS.transparent : COLORS.white}/>
            {!hideSearchBar && <FloatSearchBarComponent onPress={()=>navigation.navigate("SearchScreen")}/>}
            <FlatList
                data={[1]}
                keyExtractor={(_,index) => index}
                onScroll={(e) => e.nativeEvent.contentOffset.y > 80? setHideSearchBar(false):setHideSearchBar(true)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <View>
                            <LinearGradient start={{x:0,y:1}} end={{x:1,y:1}} colors={[COLORS.primary,COLORS.secondary]} style={styles.headerContainer}>
                                <View style={styles.location}>
                                  <Text style={styles.locationText1}>DELIVER TO</Text>
                                  <Text style={styles.locationText2}>472 Anawmar 11th</Text>
                                </View>
                                <TouchableOpacity onPress={()=>navigation.navigate("FavouriteScreen")} style={styles.favourite}><Ionicons name='heart-outline' size={20} color={COLORS.white}/></TouchableOpacity>
                            </LinearGradient>
                            <View style={styles.body}>
                                <SearchBarComponent onPress={()=>navigation.navigate("SearchScreen")} placeHolder="What are you craving?"/>
                                <View style={styles.twoNavigationButtons}>
                                    <View style={{flex : 1,borderRadius : SIZES.radius/2 ,overflow : "hidden"}}>
                                        <Pressable onPress={()=>navigation.navigate("PaymentScreen")} android_ripple={{color : COLORS.darkgray}} style={styles.payment}>
                                            <Text style={styles.paymentText1}>Payment</Text>
                                            <Text style={styles.paymentText2}>Add a card</Text>
                                            <Ionicons name="card" style={styles.paymentIcon}/>
                                        </Pressable>
                                    </View>
                                    <View style={styles.seperator}/>
                                    <View style={{flex : 1,borderRadius : SIZES.radius/2 ,overflow : "hidden"}}>
                                        <Pressable onPress={()=>navigation.navigate("EditProfileScreen")} android_ripple={{color : COLORS.darkgray}} style={styles.profile}>
                                            <Text style={styles.profileText1}>Profile</Text>
                                            <Text style={styles.profileText2}>Edit</Text>    
                                            <Ionicons name="person" style={styles.profileIcon}/>
                                        </Pressable>
                                    </View>
                                </View>
                                <Text style={styles.getAllFoodText}>Get All Types of Foods In One App!</Text>
                                <View style={styles.categoryContainer}>
                                    {
                                    CategoryListData.map((eachItem,index) => {
                                        return(
                                            <View style={styles.categoryItem} key={index}>
                                                <Image source={eachItem.image} style={styles.image}/>
                                                <Text numberOfLines={2} style={styles.text}>{eachItem.category}</Text>
                                            </View>
                                        )
                                    })
                                    }
                                </View>
                                <HorizontalListComponent category="Fast Foods"/>
                                <VerticalListComponent category="More restaurants"/>
                                
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container : {

    },
    headerContainer : {
        height : 100 + StatusBar.currentHeight,
        paddingTop : 50,
        flexDirection : "row",
        alignItems : "center",
        paddingBottom : SIZES.padding * 2.5,
        paddingHorizontal : SIZES.padding
    },
    arrow : {
        fontSize : 26,
        color : COLORS.white,
        padding : SIZES.padding / 2
    },
    location : {
        flex : 1,
        paddingStart : SIZES.padding / 2
    },
    locationText1 : {
        ...FONTS.body5,
        color : COLORS.white
    },
    locationText2 : {
        ...FONTS.h4,
        color : COLORS.white
    },
    favourite : {
        backgroundColor : COLORS.white30,
        borderRadius : SIZES.roundRadius,
        padding : SIZES.padding / 2,
        justifyContent : "center",
        alignItems : "center"
    },
    map : {
        backgroundColor : COLORS.white30,
        borderRadius : SIZES.roundRadius,
        padding : SIZES.padding / 2,
        justifyContent : "center",
        alignItems : "center"
    },
    body : {
        flex : 1,
        backgroundColor : COLORS.white

    },
    twoNavigationButtons : {
        width : SIZES.width,
        height : 60,
        flexDirection : "row",
        paddingHorizontal : SIZES.padding,
    },
    payment : {
        flex : 1,
        backgroundColor : COLORS.lightGray,
        borderRadius : SIZES.radius / 2,
        justifyContent : "space-around",
        paddingHorizontal : SIZES.padding
    },
    paymentText1 : {
        ...FONTS.body4,
        color : COLORS.black
    },
    paymentText2 : {
        ...FONTS.h5,
        color : COLORS.black
    },
    paymentIcon : {
        position : "absolute",
        right : 10,
        bottom : 5,
        fontSize : 25,
        color : COLORS.primary
    },
    seperator : {
        width : 5,
        height : "100%"
    },
    profile : {
        flex : 1,
        backgroundColor : COLORS.lightGray,
        borderRadius : SIZES.radius / 2,
        justifyContent : "space-around",
        paddingHorizontal : SIZES.padding

    },
    profileText1 : {
        ...FONTS.body4,
        color : COLORS.black
    },
    profileText2 : {
        ...FONTS.h5,
        color : COLORS.black
    },
    profileIcon : {
        position : "absolute",
        right : 10,
        bottom : 5,
        fontSize : 25,
        color : COLORS.primary
    },
    getAllFoodText : {
        marginTop : SIZES.padding * 2,
        alignSelf : "center",
        ...FONTS.h3,
        color : COLORS.secondary
    },
    categoryContainer : {
        flexDirection : "row",
        flexWrap : "wrap",
        marginTop : SIZES.padding * 2
    },
    categoryItem : {
        width : "25%",
        paddingHorizontal : SIZES.padding 
    },
    image : {
        width : 70,
        height : 70,
        alignSelf : "center"
    },
    text : {
        alignSelf : "center",
        color : COLORS.black 
    }
})