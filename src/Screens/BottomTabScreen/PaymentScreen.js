import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../Themes/Theme';

function PaymentScreen(props) {
    return (
        <View style={styles.container}></View>
    );
}

export default PaymentScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.primary
    }
})