import React from 'react';
import { View ,StyleSheet} from 'react-native';
import { COLORS } from '../../Themes/Theme';

function MessagesScreen(props) {
    return (
        <View style={styles.container}></View>
    );
}

export default MessagesScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.red        
    }
})