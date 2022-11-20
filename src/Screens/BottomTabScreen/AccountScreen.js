import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View ,StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import ProfileComponent from '../../Components/ProfileComponent';
import ProfileItemComponent from '../../Components/ProfileItemComponent';
import ProfileSettingComponent from '../../Components/ProfileSettingComponent';
import { forMoreValue, myAccount, general } from '../../DummyData/ProfileItemsData';
import { COLORS, FONTS, SIZES } from '../../Themes/Theme';


function AccountScreen(props) {
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.profileContainer}>
              <ProfileComponent onPress={()=>navigation.navigate("EditProfileScreen")}/>
            </View>
            <View><ProfileSettingComponent/></View>
          </ScrollView>
        </View>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : COLORS.white,
        paddingTop : StatusBar.currentHeight
    },
    profileContainer : {
      paddingHorizontal : SIZES.padding
    }


})