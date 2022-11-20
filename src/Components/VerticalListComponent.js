import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View , StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RestaurantListData } from '../DummyData/RestaurantListData';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function VerticalListComponent(props) {
    const navigation = useNavigation();
    return (
        <View style={[styles.container,props.style]}>
            {props.category&& <Text style={styles.category}>{props.category}</Text>}
            <FlatList
                data={RestaurantListData}
                keyExtractor={(_,index)=> index}
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={() => <View style={{height : 10}}/>}
                renderItem={({item,index}) => {
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate("RestaurantScreen",{item})} style={styles.renderContainer}>
                          <Image resizeMode='center' source={item.image} style={styles.image}/>
                          <View style={{paddingHorizontal:SIZES.padding}}>
                            <Text style={styles.name}>{item.name}</Text>
                            <View>
                              <Text style={styles.details}>{item.details}</Text>
                              <View style={{flexDirection:"row"}}>
                                <Ionicons name='star' color={COLORS.gold} size={15}/>
                                <Text style={styles.rating}>{item.rating}</Text>
                              </View>
                            </View>
                            <View style={{flexDirection : "row",marginTop:SIZES.padding}}>
                              <Text numberOfLines={1} style={styles.discount}>{item.discount}</Text>
                              <Text numberOfLines={1} style={styles.delivery}>available</Text>
                            </View>
                          </View>  
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

export default VerticalListComponent;

const styles = StyleSheet.create({
    container : {
    },
    category : {
        marginStart : SIZES.padding,
        ...FONTS.h2,
        color : COLORS.black
    },
    renderContainer : {
        paddingVertical : SIZES.padding,
        paddingStart : SIZES.padding,
        flexDirection : "row"
    },
    image : {
        width : SIZES.width * 0.3,
        height : SIZES.width * 0.3,
        marginBottom : SIZES.padding,
        borderRadius : SIZES.halfRadius
    },
    name : {
        color : COLORS.black,
        ...FONTS.h4,
        width : SIZES.width * 0.36,
        marginBottom : SIZES.padding / 2
    },
    details : {
        color : COLORS.black,
        ...FONTS.body5,
        width : SIZES.width * 0.25,
        marginBottom : SIZES.padding / 2
    },
    rating : {
        color : COLORS.black,
        ...FONTS.body5,
        marginStart : SIZES.padding / 3
    },
    discount : {
        color : COLORS.black,
        ...FONTS.body5,
        width : SIZES.width * 0.22,
        height : 20,
        fontSize : 10,
        textAlignVertical : "center",
        backgroundColor : COLORS.lightGray3,
        paddingStart : SIZES.padding / 2
    },
    delivery : {
        color : COLORS.black,
        ...FONTS.body5,
        height : 20,
        fontSize : 10,
        textAlignVertical : "center",
        backgroundColor : COLORS.lightGray3,
        marginStart : SIZES.padding,
        paddingHorizontal : SIZES.padding / 2
    }
}) 