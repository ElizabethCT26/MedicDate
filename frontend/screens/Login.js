import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import Footer from "../components/Footer";
import MedicDate from "../assets/medicDate.png";
import Correo from "../assets/correo.png";
import Contrasena from "../assets/contrasena.png";
import tw from "twrnc";

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      };

  return (
    <View >
      <Image
        source={MedicDate}
        style={tw`h-[52px] w-[235px] ml-[90px] mt-[40px]`}
      />
      <Text style={tw`font-bold text-center text-3xl mt-10`}>
        Iniciar sesión
      </Text>
      <View>
        <Image
          source={Correo}
          style={tw`absolute left-10 top-13 text-gray-500`}
        />
        <TextInput
          placeholder="Correo electronico"
          style={tw`border-gray-500 w-[320px] border rounded-[20px] p-2 ml-[32px] mt-10 px-12`}
        />
      </View>
      <View>
        <Image
          source={Contrasena}
          style={tw`absolute left-10 top-12 text-gray-500`}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={tw`border-gray-500 w-[320px] border rounded-[20px] p-2 ml-[32px] mt-10 px-12`}
        />
        
      </View>
      <Footer />
    </View>
  );
}
