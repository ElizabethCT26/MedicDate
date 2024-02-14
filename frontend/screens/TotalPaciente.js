import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  SafeAreaView,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Exit from "../assets/exit.png";
import Corazon from "../assets/corazonMedicDate.png";
import TotalPacientes from "../assets/totalPacientes.png";
import Eliminar from "../assets/botonX.png";

export default function TotalPaciente() {
  const [data, setData] = useState([
    { id: 1, name: "Jose del Carmen" },
    { id: 2, name: "Juan" },
    { id: 3, name: "Juan" },
    { id: 4, name: "Carlos" },
    { id: 5, name: "Octavio Cruz" },
  ]);

  const handleDelete = (id) => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Estás seguro de que deseas eliminar este usuario?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            setData(data.filter((item) => item.id !== id));
          },
        },
      ]
    );
  };

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
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 60,
              right: 50,
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Doctor")}
          >
            <Text
              style={{
                position: "absolute",
                right: 10,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Doctor!
            </Text>
            <Image source={Exit} style={{ position: "absolute" }} />
          </TouchableOpacity>
          <View
            style={{
              position: "absolute",
              left: 35,
              top: 95,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ height: 30, width: 30, marginRight: 10 }}
              source={Corazon}
            />
            <Text>MedicDate</Text>
          </View>
          <View
            style={{
              backgroundColor: "#C8C52D",
              height: 122,
              width: "85%",
              top: 150,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "white", fontWeight: "bold", paddingTop: 10 }}
            >
              Total de pacientes
            </Text>
            <Image source={TotalPacientes} style={{ top: 5 }} />
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              margin: 10,
              height: 122,
              width: "85%",
              top: 150,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  paddingTop: 10,
                  color: "#212121",
                  fontSize: 20,
                  marginBottom: 40,
                }}
              >
                Hoy atiende a los pacientes
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                width: "100%",
                height: "550%",
                position: "absolute",
                marginTop: "20%",
              }}
            >
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
                <Text style={{ fontWeight: "bold" }}>Eliminar</Text>
              </View>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
}
