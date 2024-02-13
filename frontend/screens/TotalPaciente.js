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
import TotalPacientes from "../assets/totalPacientes.png";

export default function TotalPaciente() {
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
              display: "flex",
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
              <Text style={{ color: "white", fontWeight: "bold", paddingTop: 10, color: "#212121", fontSize: 20 , marginBottom:40}}>
                Hoy atiende a los pacientes
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                <View style={{ margin: 8, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ margin: 4, fontWeight: "bold", color: "#0356F8" }}>Cancelar</Text>
                  <Text style={{ margin: 4 }}>13:30</Text>
                  <Text style={{ margin: 4 }}>14:30</Text>
                  <Text style={{ margin: 4 }}>15:30</Text>
                  <Text style={{ margin: 4 }}>16:30</Text>
                  <Text style={{ margin: 4 }}>17:30</Text>
                  <Text style={{ margin: 4 }}>18:30</Text>
                  <Text style={{ margin: 4 }}>19:30</Text>
                  <Text style={{ margin: 4 }}>20:30</Text>
                  <Text style={{ margin: 4 }}>21:30</Text>
                </View>
                <View style={{ margin: 8, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ margin: 4, fontWeight: "bold", color: "#0356F8" }}>Cancelar</Text>
                  <Text style={{ margin: 4 }}>Carlos</Text>
                  <Text style={{ margin: 4 }}>Maria</Text>
                  <Text style={{ margin: 4 }}>Israel</Text>
                  <Text style={{ margin: 4 }}>Jesus</Text>
                  <Text style={{ margin: 4 }}>Octavio</Text>
                  <Text style={{ margin: 4 }}>Miguel</Text>
                  <Text style={{ margin: 4 }}>Elizabeth</Text>
                  <Text style={{ margin: 4 }}>Abner</Text>
                  <Text style={{ margin: 4 }}>Marisol</Text>
                </View>
                <View style={{ margin: 8, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ margin: 4, fontWeight: "bold", color: "#0356F8" }}>Cancelar</Text>
                  <Text style={{ color: "#E00000", margin: 4 }}>X</Text>
                  <Text style={{ color: "#E00000", margin: 4 }}>X</Text>
                  <Text style={{ color: "#E00000", margin: 4 }}>X</Text>
                  <Text style={{ color: "#E00000", margin: 4 }}>X</Text>
                  <Text style={{ color: "#E00000", margin: 4 }}>X</Text>
                  <Text style={{ color: "#E00000", margin: 4 }}>X</Text>
                  <Text style={{ color: "#E00000", margin: 4 }}>X</Text>
                  <Text style={{ color: "#E00000", margin: 4 }}>X</Text>
                  <Text style={{ color: "#E00000", margin: 4 }}>X</Text>
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