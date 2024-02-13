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


import { PieChart } from "react-native-chart-kit";

const data = [
  {
    name: " Canceladas",
    count: 20, // Cambia este valor según las consultas pendientes
    color: "#FF6347", // Color para las consultas pendientes
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: " Pendientes",
    count: 45, // Cambia este valor según las consultas terminadas
    color: "#1E90FF", // Color para las consultas terminadas
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: " Terminadas",
    count: 15, // Cambia este valor según las consultas canceladas
    color: "#32CD32", // Color para las consultas canceladas
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];
export default function AdministradorHome() {
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
            ¡Bienvenido!
          </Text>
          <Text style={{ fontSize: 35, color: "#289797", fontWeight: "bold" }}>
            Israel
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>
            Cantidad de consultas
          </Text>
          {/* Aquí va tu gráfica */}
        </View>
        <View style={{ alignItems: "center", marginTop: 100 }}>
          {/* Grafico */}
          <Text>Gráfico de Consultas</Text>
          <PieChart
            data={data}
            width={350}
            height={220}
            chartConfig={{
              backgroundColor: "#f0f0f0",
              backgroundGradientFrom: "#f0f0f0",
              backgroundGradientTo: "#f0f0f0",
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute // Indica si los valores son absolutos o proporcionales
          />
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
