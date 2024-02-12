import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Header from "../components/Header";
import Exit from "../assets/exit.png";
import Corazon from "../assets/corazonMedicDate.png";
import UserBottom from "../assets/userBottom.png";
import HomeBottom from "../assets/homeBottom.png";
import DocBotoom from "../assets/docBottom.png";

export default function AdministradorUsuarios() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
      </ScrollView>
    </SafeAreaView>
  );
}
