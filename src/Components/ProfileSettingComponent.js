import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { forMoreValue, general, myAccount } from '../DummyData/ProfileItemsData';
import { FONTS ,COLORS, SIZES} from '../Themes/Theme';
import ProfileItemComponent from './ProfileItemComponent';

function ProfileSettingComponent(props) {
    return (
        <View>
            <Text style={styles.sectionHeader}>For more value</Text>
            {
                forMoreValue.map((item,index) => 
                <ProfileItemComponent key={index} text={item.text}/>)
            }
            <Text style={styles.sectionHeader}>My account</Text>
            {
                myAccount.map((item,index) => 
                <ProfileItemComponent key={index} text={item.text}/>)
            }
            <Text style={styles.sectionHeader}>General</Text>
            {
                general.map((item,index) => 
                <ProfileItemComponent key={index} text={item.text}/>)
            }
        </View>
    );
}

export default ProfileSettingComponent;

const styles = StyleSheet.create({
    sectionHeader : {
        ...FONTS.h4,
        color : COLORS.black,
        paddingVertical : SIZES.padding * 3,
        top : 10,
        paddingHorizontal : SIZES.padding * 2
    }
})