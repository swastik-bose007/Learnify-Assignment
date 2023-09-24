import { View, Text, TextInput } from "react-native";
import React from "react";
import { globalStyles } from "../Styles/GlobalStyles";

const ContactInput = ({ phoneNumber, setPhoneNumber }) => {
  const handleInputChange = (text) => {
    setPhoneNumber(text);
  };
  return (
    <View>
      <TextInput
        // onChangeText={(value) => setCryptocurrencyPrice(parseFloat(value))}
        style={[globalStyles.input]}
        className="px-16 mt-4"
        keyboardType="numeric"
        placeholder="Phone number"
        placeholderTextColor="#A2A0A0"
        value={phoneNumber}
        onChangeText={handleInputChange}
        require
      />
      <Text style={[globalStyles.favIconText]}>+91</Text>
    </View>
  );
};

export default ContactInput;
