import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../Styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Button = ({ label, phoneNumber }) => {
  const navigation = useNavigation();
  const handleSubmitContact = () => {
    const phoneNumberPass = phoneNumber;
    navigation.navigate("OTPScreens", { phoneNumberPass });
  };

  return (
    <View>
      <TouchableOpacity
        style={[globalStyles.submitButton, globalStyles.flexCenter]}
        activeOpacity={0.8}
        className="px-12 mt-4"
        onPress={handleSubmitContact}
      >
        <Text style={[globalStyles.submitText]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
