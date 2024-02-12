import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Corazon from '../assets/corazonMedicDate.png'
import Exit from '../assets/exit.png';
import Usuarios from '../assets/usuarios.png';
import TotalPacientes from  '../assets/totalPacientes.png'
import AgendaCitas from '../assets/agendaCitas.png'

export default function Doctor() {
    const navigation = useNavigation();

  return (
    <View style={{flex:1, alignItems:'center'}}>
        <Header/>
        <TouchableOpacity style={{position:'absolute', top:60, right:50, justifyContent:'center'}} onPress={() => navigation.navigate('Welcome')}>
            <Text style={{position:'absolute', right:10, fontWeight:'bold', fontSize:20}}>Doctor!</Text>
            <Image source={Exit} style={{position:'absolute'}} />
        </TouchableOpacity>
        <View style={{position:'absolute' ,left:35, top:95, flexDirection:'row', alignItems:'center'}}>
            <Image style={{height:30, width:30, marginRight:10}} source={Corazon} />
            <Text>MedicDate</Text>
        </View>
        <View style={{position:'absolute', backgroundColor:'#2DAFC8', height:112, width:'85%', top:140, borderRadius: 10}}>
            <Text style={{color:'white', fontWeight:'bold', paddingLeft:20, paddingTop:10}}>Su proxima cita es:</Text>
        </View>

        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('AgendayCitas')}>
        <View style={{position:'absolute', backgroundColor:'#2DC846', height:122, width:'85%', top:300, borderRadius: 10, alignItems:'center'}}>
            <Text style={{color:'white', fontWeight:'bold', paddingTop:10 }}>Agenda y citas</Text>
            <Image source={Usuarios} style={{top:10}}/>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('TotalPaciente')}>
        <View style={{position:'absolute', backgroundColor:'#C8C52D', height:122, width:'85%', top:460, borderRadius: 10, alignItems:'center'}}>
            <Text style={{color:'white', fontWeight:'bold', paddingTop:10 }}>Total de Pacientes</Text>
            <Image source={TotalPacientes} style={{top:5}}/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('CalendarioConsulta')}>
        <View style={{position:'absolute', backgroundColor:'#C82D8A', height:122, width:'85%', top:620, borderRadius: 10, alignItems:'center'}}>
            <Text style={{color:'white', fontWeight:'bold', paddingTop:10 }}>Calendario de consultas</Text>
            <Image source={AgendaCitas} style={{top:10}}/>
        </View>
        </TouchableOpacity>
        <Footer/>
    </View>
  )
}