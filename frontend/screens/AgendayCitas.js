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
import Usuarios from "../assets/usuarios.png";

export default function AgendayCitas() {
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
                backgroundColor: "#2DC846",
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
                Agenda y citas
              </Text>
              <Image source={Usuarios} style={{ top: 10 }} />
            </View>
            
          </View>
        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  );
}
