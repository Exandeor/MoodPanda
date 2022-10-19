import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

export const COLORS = {
  primary: "#ff9966",
  secondary: "#ff3377",
  secPrimary:"#ff6666",
  black: "#18191a",
  red:"red",
  white: "#FFFFFF",
  lightGray: "#F5F5F6",
  lightGray2: "rgba(217,217,217,0.42)",
  lightGray3: "#EFEFF1",
  lightGray4: "#3a3a3a",
  transparent: "transparent",
  transparent50:"rgba(255,255,255,0.5)",
  transparent25:"rgba(255,255,255,0.25)",
  transparent10:"rgba(255,255,255,0.1)",
  darkgray: '#898C95',
  gold:"#F4B400",
  textPrimary : "#050505",
  textSecondary : "#41434e"
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 10,
  semiRoundRadius:20,
  roundRadius: 30,
  padding: 10,
  padding2: 12,
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  width,
  height
};

export const FONTS = {
  largeTitle: {fontFamily: "Poppins-Regular", fontSize: SIZES.largeTitle, lineHeight: 55},
  h1: {fontFamily: "Poppins-SemiBold", fontSize: SIZES.h1},
  h2: {fontFamily: "Poppins-SemiBold", fontSize: SIZES.h2},
  h3: {fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 27},
  h4: {fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22},
  h6: {fontFamily: "Poppins-SemiBold", fontSize: SIZES.h6, lineHeight: 22},
  body1: {fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: "Poppins-Regular", fontSize: SIZES.body2},
  body3: {fontFamily: "Poppins-Regular", fontSize: SIZES.body3},
  body4: {fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: "Poppins-Regular", fontSize: SIZES.body5},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
