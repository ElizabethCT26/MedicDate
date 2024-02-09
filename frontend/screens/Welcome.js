import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Doctor from "../assets/doctor.png";
import Header from "../components/Header";

export default function Welcome() {

  const navigation = useNavigation()

  return (
    <View>
      <Header/>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Image source={Doctor} style={{position:'absolute', top:120, width:340, height:340}}/>
        <Text style={{position:'absolute', top:490, fontSize:20, fontWeight:'bold'}}>Cita con tu médico principal</Text>
        <Text style={{position:'absolute', top:550, marginLeft:55, marginRight:55, fontSize:15, textAlign:'justify', color:'#B5B2B2', fontWeight:'bold' }}>
          Agendar una cita con un médico es crucial para abordar tus preocupaciones de salud de manera oportuna, garantizando atención especializada y cuidado preventivo.
        </Text>
        <View style={{position:'absolute', backgroundColor:'#2DAFC8', top:720, borderRadius:20}}>
          <TouchableOpacity 
          style={{width:300, alignItems:'center'}}
          onPress={() => navigation.navigate('Login')}
          >
            <Text style={{color:'white', fontSize:18, fontWeight:'bold', padding:15}}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
