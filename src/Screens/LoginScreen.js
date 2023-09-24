// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, {useState} from "react";
// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import { globalStyles } from "../Styles/GlobalStyles";
// --------------------------------------------------------------------
// UI Components
// --------------------------------------------------------------------
import LoginImage from "../Components/LoginImage";
import ContactInput from "../Components/ContactInput";
import Button from "../Components/Button";

const LoginScreen = () => {
  const label = "Get OTP";
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 flex justify-center align-middle">
        <View
          className="bg-white w-full h-[30%] pt-10"
          style={[globalStyles.flexCenter]}
        >
          <LoginImage />
        </View>
        <View
          className="bg-white w-full h-[35%]"
          style={[globalStyles.flexCenter]}
        >
          <Text style={[globalStyles.largeTitle]}>LOG IN</Text>
          <Text className="mb-4" style={[globalStyles.subTitle]}>
            Enter your contact number to proceed
          </Text>
          <ContactInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
          <Button label={label} phoneNumber={phoneNumber} />
        </View>
        <View className="bg-white w-full h-[35%]">
          <Text className="text-center px-20" style={[globalStyles.subTitle]}>
            By signing up you agree with our terms and conditions
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
