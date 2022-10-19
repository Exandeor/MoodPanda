import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../Themes/Theme';

function TwoTitlesComponent(props) {
    return (
        <View style={[styles.container,props.style]}>
            <Text style={styles.firstText}>MoodPanda</Text>
            <Text style={styles.secondText}>The belly rules the mind.</Text>
        </View>
    );
}

export default TwoTitlesComponent;

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        alignItems : "center",
    },
    firstText : {
        ...FONTS.h1,
        color : COLORS.white
    },
    secondText : {
        ...FONTS.body5,
        bottom : 10,
        color : COLORS.gold
    }
})