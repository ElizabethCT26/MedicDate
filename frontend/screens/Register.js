import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Corazon from '../assets/corazonMedicDate.png'
import Correo from '../assets/correo.png'
import Contrasena from '../assets/contrasena.png'
import Usuario from '../assets/usuario.png'

export default function Register() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <Header/>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 100 }}>
        <View style={{ position: 'absolute', top: 130, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={Corazon} style={{ width: 50, height: 50 }} />
          <Text style={{ fontSize: 25, marginLeft: 20 }}>MedicDate</Text>
        </View>
        <View style={{ position:'absolute', top:210 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Registrarse</Text>
        </View>
        <View style={{position:'absolute', top:270, width:300}}>
          <View style={{justifyContent:'center'}}>
            <TextInput
              style={{borderColor:'gray', borderWidth:1, marginBottom:10, paddingHorizontal:10, borderRadius:20, padding:10, height:60, paddingLeft:50 }}
              placeholder="Nombre"
            />
            <Image source={Usuario} style={{position:'absolute', bottom:26, left:10}}/>
          </View>
          <View style={{justifyContent:'center'}}>
            <TextInput
              style={{borderColor:'gray', borderWidth:1, marginBottom:10, paddingHorizontal:10, borderRadius:20, padding:10, height:60, marginTop:20, paddingLeft:50 }}
              placeholder="Correo electronico"
            />
            <Image source={Correo} style={{position:'absolute', bottom:30, left:10}}/>
          </View>
          <View style={{justifyContent:'center'}}>
            <TextInput
              style={{borderColor:'gray', borderWidth:1, marginBottom:10, paddingHorizontal:10, borderRadius:20, padding:10, height:60, paddingLeft:50, marginTop:20 }}
              placeholder="Contraseña"
            />
            <Image source={Contrasena} style={{position:'absolute', bottom:25, left:10}}/>
          </View>
          <View style={{justifyContent:'center'}}>
            <TextInput
              style={{borderColor:'gray', borderWidth:1, marginBottom:10, paddingHorizontal:10, borderRadius:20, padding:10, height:60, marginTop:20, paddingLeft:50 }}
              placeholder="Confirmar contraseña"
            />
            <Image source={Contrasena} style={{position:'absolute', bottom:25, left:10}}/>
          </View>
        </View>
        <View style={{position:'absolute', backgroundColor:'#2DAFC8', top:650, borderRadius:20}}>
          <TouchableOpacity 
          style={{width:300, alignItems:'center'}}
          onPress={()=>navigation.navigate('Login')}
          >
            <Text style={{color:'white', fontSize:18, fontWeight:'bold', padding:15}}>Registrarse</Text>
          </TouchableOpacity>
        </View>
        <View style={{ position: 'absolute', top:720 }}>
          <Text style={{ fontSize: 16, fontWeight:'bold' }}>
            ¿Ya tienes una cuenta?{"   "}
            <Text
            style={{color: '#2DAFC8', fontWeight: 'bold' }}
            onPress={() => navigation.navigate('Login')}
            >
            Iniciar sesión
            </Text>
          </Text>
        </View>
      </ScrollView>
      <Footer/>
    </View>
  )
}