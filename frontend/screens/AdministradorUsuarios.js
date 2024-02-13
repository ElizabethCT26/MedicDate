import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import React from "react";
import Header from "../components/Header";
import Exit from "../assets/exit.png";
import Corazon from "../assets/corazonMedicDate.png";
import UserBottom from "../assets/userBottom.png";
import HomeBottom from "../assets/homeBottom.png";
import DocBotoom from "../assets/docBottom.png";
import Users from "../assets/Users.png";
import Eliminar from "../assets/botonX.png";

export default function AdministradorUsuarios() {
  const [data, setData] = useState([
    { id: 1, name: "Jose del Carmen" },
    { id: 2, name: "Juan" },
    { id: 3, name: "Juan" },
    { id: 4, name: "Carlos" },
    { id: 5, name: "Octavio Cruz" },
  ]);

  const handleDelete = (id) => {
    // Mostrar la alerta para confirmar la eliminación
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que deseas eliminar este usuario?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelado'),
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          onPress: () => {
            // Lógica para eliminar el elemento con el id dado
            setData(data.filter((item) => item.id !== id));
          }
        }
      ]
    );
  };

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
      }}
    >
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Image source={Eliminar} />
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingTop: 40,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ height: 35, width: 35, marginRight: 10 }}
              source={Corazon}
            />
            <Text style={{ fontSize: 20 }}>MedicDate</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Image source={Exit} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: 80 }}>
          <Text style={{ fontSize: 40, color: "#289797", fontWeight: "bold" }}>
            Usuarios
          </Text>
          <Image source={Users} style={{ width: "40%", height: "40%", marginBottom:"15%" }} />
        <View style={{ flex: 1,width: "90%", height: "100%", position:"absolute", marginTop:"60%"  }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: "#A8EAE1",
              marginBottom: "1%",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>N°</Text>
            <Text style={{ fontWeight: "bold" }}>Nombre</Text>
            <Text style={{ fontWeight: "bold"}}>Eliminar</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        </View>
        {/* Barra de navegación */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "#2DAFC8",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 70,
            paddingHorizontal: 40,
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("AdministradorUsuarios")}
          >
            <Image source={UserBottom} style={{ width: 30, height: 30 }} />
            <Text>Usuarios</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("AdministradorHome")}
          >
            <Image source={HomeBottom} style={{ width: 30, height: 30 }} />
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("AdministradorDoctores")}
          >
            <Image source={DocBotoom} style={{ width: 30, height: 30 }} />
            <Text>Doctores</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
