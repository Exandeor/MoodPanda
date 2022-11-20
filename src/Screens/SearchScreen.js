import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View ,StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import BubbleTextComponent from '../Components/BubbleTextComponent';
import SecondSearchBarComponent from '../Components/SecondSearchBarComponent';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

function SearchScreen(props) {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <SecondSearchBarComponent onPress={()=>navigation.goBack()}/>
        <ScrollView>
          <View style={styles.subContainer}>
            <Text style={styles.bubbleSectionHeaderText}>Recent searches</Text>
            <View style={styles.bubbleSectionContainer}>
                <BubbleTextComponent text="chicken" style={styles.bubbleText}/>
                <BubbleTextComponent text="burger" style={styles.bubbleText}/>
                <BubbleTextComponent text="beef" style={styles.bubbleText}/>
                <BubbleTextComponent text="regular" style={styles.bubbleText}/>
                <BubbleTextComponent text="bubble tea" style={styles.bubbleText}/>
                <BubbleTextComponent text="ha" style={styles.bubbleText}/>
                <BubbleTextComponent text="herbel tea" style={styles.bubbleText}/>
                <BubbleTextComponent text="tea" style={styles.bubbleText}/>
            </View>
            <Text style={styles.bubbleSectionHeaderText}>Category</Text>
            <View style={styles.bubbleSectionContainer}>
                <BubbleTextComponent text="Fancy Meals" style={styles.bubbleText}/>
                <BubbleTextComponent text="Tasty Drinks" style={styles.bubbleText}/>
                <BubbleTextComponent text="Fast Foods" style={styles.bubbleText}/>
                <BubbleTextComponent text="Groceries" style={styles.bubbleText}/>
                <BubbleTextComponent text="Home Meals" style={styles.bubbleText}/>
                <BubbleTextComponent text="Alcohol" style={styles.bubbleText}/>
                <BubbleTextComponent text="Desserts" style={styles.bubbleText}/>
                <BubbleTextComponent text="Fresh Fruits" style={styles.bubbleText}/>
            </View>
          </View>
        </ScrollView>
      </View>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    container : {
        paddingTop : StatusBar.currentHeight,
        flex : 1,
        backgroundColor : COLORS.white
    },
    subContainer : {
        paddingHorizontal : SIZES.padding2
    },
    bubbleSectionHeaderText : {
        marginVertical : SIZES.padding * 2,
        ...FONTS.h4,
        color : COLORS.black
    },
    bubbleSectionContainer: {
        flexDirection:"row",
        flexWrap:"wrap"
    },
    bubbleText : {
        marginRight : SIZES.padding / 2,
        marginVertical : SIZES.padding / 2
    }
})