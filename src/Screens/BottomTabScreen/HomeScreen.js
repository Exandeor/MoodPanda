import React, { useState } from 'react';
import { View ,StyleSheet, Text, Image, ScrollView, FlatList, StatusBar, TouchableOpacity, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FloatSearchBar from '../../Components/FloatSearchBar';
import HorizontalList from '../../Components/HorizontalList';
import SearchBar from '../../Components/SearchBar';
import VerticalList from '../../Components/VerticalList';
import { CategoryListData } from '../../DummyData/CategoryListData';
import { COLORS, FONTS, SIZES } from '../../Themes/Theme';


const HomeScreen = (route) => {
    const [hideSearchBar,setHideSearchBar] = useState(true)
    return(
        <View>
            <StatusBar barStyle={"dark-content"} backgroundColor={hideSearchBar? COLORS.primary : COLORS.white}/>
            <FloatSearchBar style={{display : hideSearchBar? "none" : "flex"}}/>
            <FlatList
                data={[1]}
                keyExtractor={(_,index) => index}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                onScroll={(e) => e.nativeEvent.contentOffset.y > 80? setHideSearchBar(false):setHideSearchBar(true)}
            />
        </View>
    )
}

function renderItem(props) {
    return (
        <View>
            <View style={styles.headerContainer}>
                <View style={styles.location}>
                <Text style={styles.locationText1}>DELIVER TO</Text>
                <Text style={styles.locationText2}>353 Zayar 8th</Text>
                </View>
                <TouchableOpacity style={styles.favourite}><Ionicons name='heart-outline' size={20} color={COLORS.white}/></TouchableOpacity>
                <TouchableOpacity style={styles.map}><Ionicons name='compass-outline' size={20} color={COLORS.white}/></TouchableOpacity>
            </View>
            <View style={styles.body}>
                <SearchBar placeHolder="What are you craving?"/>
                <View style={styles.twoNavigationButtons}>
                    <View style={{flex : 1,borderRadius : SIZES.radius/2 ,overflow : "hidden"}}>
                        <Pressable android_ripple={{color : COLORS.darkgray}} style={styles.payment}>
                            <Text style={styles.paymentText1}>Payment</Text>
                            <Text style={styles.paymentText2}>Add a card</Text>
                            <Ionicons name="card" style={styles.paymentIcon}/>
                        </Pressable>
                    </View>
                    <View style={styles.seperator}/>
                    <View style={{flex : 1,borderRadius : SIZES.radius/2 ,overflow : "hidden"}}>
                        <Pressable android_ripple={{color : COLORS.darkgray}} style={styles.rewards}>
                            <Text style={styles.rewardsText1}>Offers</Text>
                            <Text style={styles.rewardsText2}>20+</Text>    
                            <Ionicons name="ios-receipt" style={styles.rewardsIcon}/>
                        </Pressable>
                    </View>
                </View>
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
                <HorizontalList category="Fast Foods"/>
                <VerticalList category="More restaurants"/>
                
            </View>
        </View>
    );
}


export default HomeScreen;

const styles = StyleSheet.create({
    container : {

    },
    headerContainer : {
        height : 100,
        backgroundColor : COLORS.primary,
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
        marginEnd : SIZES.padding,
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
    rewards : {
        flex : 1,
        backgroundColor : COLORS.lightGray,
        borderRadius : SIZES.radius / 2,
        justifyContent : "space-around",
        paddingHorizontal : SIZES.padding

    },
    rewardsText1 : {
        ...FONTS.body4,
        color : COLORS.black
    },
    rewardsText2 : {
        ...FONTS.h5,
        color : COLORS.black
    },
    rewardsIcon : {
        position : "absolute",
        right : 10,
        bottom : 5,
        fontSize : 25,
        color : COLORS.primary
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