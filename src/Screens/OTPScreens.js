// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";
// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import { globalStyles } from "../Styles/GlobalStyles";
// --------------------------------------------------------------------
// UI Components
// --------------------------------------------------------------------
import ContactInput from "../Components/ContactInput";
import Button from "../Components/Button";
import OTPInput from "../Components/OTPInput";
import OTPImage from "../Components/OTPImage";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";

const OTPScreens = ({ route }) => {
  const label = "Verify OTP";
  const { phoneNumberPass } = route.params;
  const phoneNumberText = phoneNumberPass
    ? phoneNumberPass
    : "Phone Number Not Provided";
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 flex justify-center align-middle">
        <View
          className="bg-white w-full h-[30%] pt-10"
          style={[globalStyles.flexCenter]}
        >
          <OTPImage />
        </View>
        <View
          className="bg-white w-full h-[35%]"
          style={[globalStyles.flexCenter]}
        >
          <Text style={[globalStyles.largeTitle]}>OTP sent to</Text>
          <Text className="mb-4" style={[globalStyles.subTitle]}>
            (+91) {phoneNumberText}
          </Text>
          <OTPInput />
          <TouchableOpacity
            onPress={toggleModal}
            style={[globalStyles.submitButton, globalStyles.flexCenter]}
            activeOpacity={0.8}
            className="px-12 mt-4"
          >
            <Text style={[globalStyles.submitText]}>{label}</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-white w-full h-[35%]">
          <Text className="text-center px-20" style={[globalStyles.subTitle]}>
            By signing up you agree with our terms and conditions
          </Text>
        </View>
        <Modal
          transparent={true}
          isVisible={isModalVisible}
          className="w-full "
          style={[globalStyles.flexCenter]}
        >
          <View className="h-[60%] w-[100%] mt-[20%] rounded-xl ">
            <View
              className="h-[60%] w-[90%] rounded-xl bg-white"
              style={[globalStyles.flexCenter]}
            >
              <Text style={[globalStyles.largeTitle3]}>🎉</Text>
              <Text style={[globalStyles.largeTitle2]}>
                Your details have been submitted
              </Text>
              <TouchableOpacity
                onPress={toggleModal}
                className="p-4 mt-2 bg-black w-[50%] rounded"
                style={[globalStyles.flexCenter]}
              >
                <Text style={[globalStyles.subTitle]} className="text-center">
                  Proceed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OTPScreens;
