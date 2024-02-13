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
import Footer from "../components/Footer";
import Exit from "../assets/exit.png";
import Corazon from "../assets/corazonMedicDate.png";
import AgendaCitas from "../assets/agendaCitas.png";

export default function CalentarioConsulta() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
              <Text style={{ position: "absolute", right: 10, fontWeight: "bold", fontSize: 20, }}> Doctor! </Text>
              <Image source={Exit} style={{ position: "absolute" }} />
            </TouchableOpacity>
            <View style={{ position: "absolute", left: 35,
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
                Calendario de consultar
              </Text>
              <Image source={AgendaCitas} style={{ top: 5 }} />
            </View>
            

            <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              margin: 10,
              height: 122,
              width: "65%",
              top: 150,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%" }}>
              <Text style={{ color: "white", fontWeight: "bold", paddingTop: 10, color: "#0356F8", fontSize: 24 }}>
                Lunes
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <View style={{ margin:8 }}>
                <Text>Hora</Text>
                <Text>13:30</Text>
                <Text>14:30</Text>
                <Text>15:30</Text>
              </View>
              <View style={{ margin:8 }}>
                <Text>Paciente</Text>
                <Text>Carlos</Text>
                <Text>Maria</Text>
                <Text>Israel</Text>
              </View>
            </View>
          </View>



          <View
            style={{
              display: "flex",
              flexDirection: "column", 
              justifyContent: "space-between",
              margin: 10,
              height: 122,
              width: "65%",
              top: 150,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%" }}>
              <Text style={{ color: "white", fontWeight: "bold", paddingTop: 10, color: "#08F803", fontSize: 24 }}>
                Martes
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <View style={{ margin:8 }}>
                <Text>Hora</Text>
                <Text>13:30</Text>
                <Text>14:30</Text>
                <Text>15:30</Text>
              </View>
              <View style={{ margin:8 }}>
                <Text>Paciente</Text>
                <Text>Carlos</Text>
                <Text>Maria</Text>
                <Text>Israel</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column", 
              justifyContent: "space-between",
              margin: 10,
              height: 122,
              width: "65%",
              top: 150,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%" }}>
              <Text style={{ color: "white", fontWeight: "bold", paddingTop: 10, color: "#00AA6D", fontSize: 24 }}>
                Miercoles
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <View style={{ margin:8 }}>
                <Text>Hora</Text>
                <Text>13:30</Text>
                <Text>14:30</Text>
                <Text>15:30</Text>
              </View>
              <View style={{ margin:8 }}>
                <Text>Paciente</Text>
                <Text>Carlos</Text>
                <Text>Maria</Text>
                <Text>Israel</Text>
              </View>
            </View>
          </View>
          

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              margin: 10,
              height: 122,
              width: "65%",
              top: 150,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%" }}>
              <Text style={{ color: "white", fontWeight: "bold", paddingTop: 10, color: "", fontSize: 24 }}>
                Jueves
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
              <View style={{ margin:8 }}>
                <Text>Hora</Text>
                <Text>13:30</Text>
                <Text>14:30</Text>
                <Text>15:30</Text>
              </View>
              <View style={{ margin:8 }}>
                <Text>Paciente</Text>
                <Text>Carlos</Text>
                <Text>Maria</Text>
                <Text>Israel</Text>
              </View>
            </View>
          </View>

          


            
          </View>

        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  );
}