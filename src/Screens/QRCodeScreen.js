import * as React from 'react';
import { View, StyleSheet, Text, StatusBar, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { COLORS, FONTS, SIZES } from '../Themes/Theme';

export default function QRCodeScreen() {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [activateTorch,setActivateTorch] = React.useState("off");
  const devices = useCameraDevices();
  const device = devices.back;

  const handleTorch = () => {
    if(activateTorch === "off"){
      setActivateTorch("on")
    }else{
      setActivateTorch("off")
    }
  }

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  return (
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.black}/>
        {device != null &&
        hasPermission && (
        <>
          <View style={{justifyContent : "center",alignItems : "center",flex : 1}}>
            <View style={styles.field}>
              <View style={styles.blankSpace}/>
              <View style={styles.middleBlankSpace}>
                <View style={styles.blankSpace}/>
                <View style={styles.scannerField}>
                  <Pressable onPress={()=>handleTorch()} style={styles.button}>
                    <MaterialCommunityIcons name="flashlight" style={styles.buttonIcon}/>
                  </Pressable>
                  <Text style={styles.buttonText}>Tap to turn on</Text>
                  <View style={styles.firstMark}/>
                  <View style={styles.secondMark}/>
                  <View style={styles.thirdMark}/>
                  <View style={styles.fourthMark}/>
                </View>
                <View style={styles.blankSpace}/>
              </View>
              <View style={styles.blankSpace}>
                <Text style={styles.captionText}>QR Code Scanner</Text>
              </View>

            </View>
              <Camera
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={true}
              torch={activateTorch}
              
              />
          </View>

        </>)}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  field : {
    width : SIZES.width,
    height : SIZES.height + StatusBar.currentHeight,
    position : "absolute",
    zIndex : 10
  },
  blankSpace : {
    flex : 1,
    backgroundColor : COLORS.black40
  },
  middleBlankSpace : {
    flexDirection : "row"
  },
  scannerField : {
    width : 280,
    height : 280,
    backgroundColor : COLORS.transparent,
    justifyContent : "flex-end",
    alignItems : "center"
  },
  button : {
    borderRadius : SIZES.roundRadius,
    backgroundColor : COLORS.transparent,
    padding : SIZES.padding
  },
  buttonIcon : {
    fontSize : 28,
    color : COLORS.white
  },
  buttonText : {
    ...FONTS.body4,
    marginTop : SIZES.padding * 4,
    marginBottom : SIZES.padding,
    color : COLORS.white
  },
  firstMark : {
    position : "absolute",
    top : 0,
    left : 0,
    width : 30,
    height : 30,
    borderLeftColor : COLORS.primary,
    borderLeftWidth : 3,
    borderTopColor : COLORS.primary,
    borderTopWidth : 3,
  },
  secondMark : {
    position : "absolute",
    top : 0,
    right : 0,
    width : 30,
    height : 30,
    borderRightColor : COLORS.primary,
    borderRightWidth : 3,
    borderTopColor : COLORS.primary,
    borderTopWidth : 3,
  },
  thirdMark : {
    position : "absolute",
    bottom : 0,
    right : 0,
    width : 30,
    height : 30,
    borderRightColor : COLORS.primary,
    borderRightWidth : 3,
    borderBottomColor : COLORS.primary,
    borderBottomWidth : 3,
  },
  fourthMark : {
    position : "absolute",
    bottom : 0,
    left : 0,
    width : 30,
    height : 30,
    borderLeftColor : COLORS.primary,
    borderLeftWidth : 3,
    borderBottomColor : COLORS.primary,
    borderBottomWidth : 3,
  },
  captionText : {
    alignSelf : "center",
    marginTop : SIZES.padding,
    ...FONTS.h5,
    color : COLORS.white,
    backgroundColor : COLORS.black,
    borderRadius : 20,
    paddingVertical : SIZES.padding / 2,
    paddingHorizontal : SIZES.padding
  }
});
