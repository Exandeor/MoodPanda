import React from 'react';
import { Pressable, View } from 'react-native';

function ButtonComponent(props) {
    return (
      <View style={[{overflow : "hidden"},props.style]}>
        <Pressable onPress={props.onPress} android_ripple={{color : props.rippleColor}} style={{flex : 1,justifyContent: "center",alignItems : "center"}}>
          {props.children}
        </Pressable>
      </View>
    );
}

export default ButtonComponent;