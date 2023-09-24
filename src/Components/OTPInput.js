import { View, Text, TextInput } from "react-native";
import React, {useRef} from "react";

const OTPInput = () => {
    const n1 = useRef();
    const n2 = useRef();
    const n3 = useRef();
    const n4 = useRef();
  return (
    <View className="flex flex-row justify-center align-middle gap-5 mb-8">
      <TextInput
        ref={n1}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={txt => {
            if(txt.length >= 1){
               n2.current.focus();
            }
        }}
        className="w-[15%] h-[100%] rounded-xl text-center"
        style={{ backgroundColor: "#E4E6C3" }}
      />
      <TextInput
        ref={n2}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={txt => {
            if(txt.length >= 1){
               n3.current.focus();
            }
        }}
        className="w-[15%] h-[100%] rounded-xl text-center"
        style={{ backgroundColor: "#E4E6C3" }}
      />
      <TextInput
        ref={n3}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={txt => {
            if(txt.length >= 1){
               n4.current.focus();
            }
        }}
        className="w-[15%] h-[100%] rounded-xl text-center"
        style={{ backgroundColor: "#E4E6C3" }}
      />
      <TextInput
        ref={n4}
        keyboardType="numeric"
        maxLength={1}
        className="w-[15%] h-[100%] rounded-xl text-center"
        style={{ backgroundColor: "#E4E6C3" }}
      />
    </View>
  );
};

export default OTPInput;
