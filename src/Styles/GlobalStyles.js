import { StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export const globalStyles = StyleSheet.create({
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexStart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  flexEnd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  flexEven: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  largeTitle: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(4),
  },
  largeTitle2: {
    fontFamily: "Archivo-Regular",
    fontSize: responsiveScreenFontSize(2),
  },
  largeTitle3: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(10),
  },
  subTitle: {
    fontFamily: "Archivo-Regular",
    fontSize: responsiveScreenFontSize(1.6),
    color: "#A2A0A0"
  },
  image: {
    height: responsiveScreenHeight(8),
    width: responsiveScreenWidth(12),
    resizeMode: "contain",
  },
  input: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenWidth(15),
    borderRadius: responsiveScreenWidth(15),
    backgroundColor: "#E4E6C3",
    color: "#1E1E1E"
  },
  submitButton: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenWidth(15),
    borderRadius: responsiveScreenWidth(15),
    backgroundColor: "#201A23",
    color: "#1E1E1E"
  },
  submitText: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(2.5),
    color: "#E4E6C3",
  },
  favIconText: {
    position: "absolute",
    marginTop: responsiveScreenHeight(4.2),
    marginLeft: responsiveScreenWidth(6),
    color: "#1E1E1E"
  },
  modalContent: {
    justifyContent: "center",
    marginVertical: "100%",
    backgroundColor: "#ffff"
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffff",
    
  },
});
