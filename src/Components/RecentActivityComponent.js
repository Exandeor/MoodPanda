import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function RecentActivityComponent(props) {
    const navigation = useNavigation();
    return (
        <View style={{flex : 1}}>
            <FlatList
                data={[1,1,1,1,1,1,1,1]}
                keyExtractor={(_,index)=>index}
                renderItem={({item}) => {
                    return(
                        <Pressable onPress={()=>navigation.navigate("OrderSummaryScreen")} android_ripple={{color : COLORS.black10}} style={styles.container}>
                          <Image
                              resizeMode='stretch'
                              style={styles.image}
                              source={require("../Images/panda.png")}
                          />
                          <View style={styles.details}>
                            <Text style={styles.title}>Lotteria</Text>
                            <View style={styles.threeFoodIcons}>
                                <Image source={require("../DummyData/DummyImage/burger.png")} resizeMode='center' style={styles.foodIcon1}/>
                                <Image source={require("../DummyData/DummyImage/fries.png")} resizeMode='center' style={styles.foodIcon2}/>
                                <Image source={require("../DummyData/DummyImage/thigh.png")} resizeMode='center' style={styles.foodIcon3}/>
                            </View>
                            <Text style={styles.date}>20 Oct 2022, 11:26 am</Text>
                            <View style={styles.reorder}>
                                <Text style={styles.reorderText}>Reorder</Text>
                                <Ionicons style={styles.reorderIcon} name="arrow-forward"/>
                            </View>
                          </View>
                          <View style={styles.price}>
                            <Text style={styles.priceText1}>Ks{7470}.00</Text>
                            <Text style={styles.priceText2}>+{7} points</Text>
                          </View>
                        </Pressable>
                    )
                }
                }
            />
        </View>
    );
}

export default RecentActivityComponent;

const styles = StyleSheet.create({
    container : {
        width : SIZES.width,
        height : 150,
        flexDirection : "row",
        paddingVertical : SIZES.padding * 2,
        paddingHorizontal : SIZES.padding,
    },
    image : {
        width : 40,
        height : 40,
        borderRadius : SIZES.radius,
    },
    details : {
        flex : 1,
        marginStart : SIZES.padding
    },
    title : {
        ...FONTS.h4,
        color : COLORS.black
    },
    threeFoodIcons : {
        flexDirection : "row",
    },
    foodIcon1 : {
        width : 30,
        height : 30,
        left : -5
    
    },
    foodIcon2 : {
        width : 30,
        height : 30,
        left : -12
    },
    foodIcon3 : {
        width : 30,
        height : 30,
        left : -22
    },
    date : {
        color : COLORS.black40
    },
    reorder : {
        flexDirection : "row",
        alignItems : "center",
        marginVertical : SIZES.padding
    },
    reorderText : {
        ...FONTS.body4,
        color : COLORS.dodgerBlue
    },
    reorderIcon : {
        fontSize : 13,
        marginStart : SIZES.padding,
        borderRadius : SIZES.roundRadius,
        backgroundColor : COLORS.dodgerBlueHint,
        color : COLORS.dodgerBlue,
        padding : SIZES.padding / 4

    },
    price : {
        width : 120,
        alignItems : "flex-end",

    },
    priceText1 : {
        ...FONTS.h5,
        color : COLORS.black

    },
    priceText2 : {
        ...FONTS.body5,
        color : COLORS.black40
    },

})