import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Doctor from "../assets/doctor.png";
import tw from "twrnc";

export default function Welcome() {

    const navigationLogin = useNavigation();
    const handleNextPress = () => {
        navigationLogin.navigate('Login')
    }

  return (
    <View>
      <Image source={Doctor} style={tw`my-[20px] mx-[30px]`} />
      <Text style={tw`text-center font-bold text-2xl mt-3`}>
        Cita con tu médico principal
      </Text>
      <Text
        style={tw`text-justify mt-8 ml-[37px] mr-[37px] text-[#B5B2B2] font-bold text-base`}
      >
        Agendar una cita con un médico es crucial para abordar tus
        preocupaciones de salud de manera oportuna, garantizando atención
        especializada y cuidado preventivo.
      </Text>
      <TouchableOpacity
        style={tw`bg-[#2DAFC8] w-[320px] items-center mt-[100px] ml-[37px] mr-[37px] p-4 rounded-[20px] `}
        onPress={handleNextPress}
      >
        <Text style={tw`text-white font-bold`}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}
