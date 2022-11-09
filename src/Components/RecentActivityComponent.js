import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../Themes/Theme';

function RecentActivityComponent(props) {
    return (
        <View>
            <Text style={styles.recent}>Recent</Text>
            <FlatList
                data={[1]}
                keyExtractor={(_,index)=>index}
                renderItem={renderItem}
            />
        </View>
    );
}

const renderItem = () => {
    return(
        <Pressable android_ripple={{color : "black"}} style={styles.container}>
          <View style={styles.picture}>
            <Image
              resizeMode='stretch'
              style={styles.image}
              source={require("../Images/panda.png")}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.restaurantName}>Lotteria</Text>
            <Ionicons/>
            <Text style={styles.date}>20 Oct 2022, 11:26 am</Text>
            <Text style={styles.reorder}>Reorder</Text>
          </View>
          <View style={styles.price}>
            <Text>Ks{7470}.00</Text>
            <Text>+{7470} points</Text>
          </View>
        </Pressable>
    )
}

export default RecentActivityComponent;

const styles = StyleSheet.create({
    recent : {
        paddingHorizontal : SIZES.padding
    },
    container : {
        width : SIZES.width,
        height : 120,
        flexDirection : "row",
        paddingVertical : SIZES.padding * 2,
        paddingHorizontal : SIZES.padding
    },
    picture : {
        width : 60,

    },
    image : {
        width : 40,
        height : 40,
        borderRadius : SIZES.radius,
    },
    details : {
        flex : 1
    },
    price : {
        width : 120,
        alignItems : "flex-end",
    }
})