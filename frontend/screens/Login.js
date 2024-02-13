import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Corazon from "../assets/corazonMedicDate.png";
import Correo from "../assets/correo.png";
import Contrasena from "../assets/contrasena.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();


  const handleLogin = async () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,}$/;
  
    if (!email || !password || !emailPattern.test(email) || !passwordPattern.test(password)) {
      Alert.alert("Error", "Todos los campos deben ser llenados correctamente.");
      return;
    }
    try {
      const response = await fetch("http://192.168.100.9:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      // console.log(data.success);
      if (data.message === "Doctor") {
        // Login exitoso, redirigir a la pantalla deseada
        navigation.navigate("Doctor");
      } else if (data.message === "user"){
        navigation.navigate("Table");
      }else if (data.message === "administrator"){
        navigation.navigate("AdministradorHomem");
      }else{
        // Login fallido, mostrar mensaje de error
        Alert.alert("Error", "El usuario no existe, 'Revise sus credenciales'.");
      }
    } catch (error) {
      // console.error("Error al iniciar sesión:", error);
      Alert("Error", "Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };
  


  return (
    <View style={{ flex: 1}}>
      <Header />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 100,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 130,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={Corazon} style={{ width: 50, height: 50 }} />
          <Text style={{ fontSize: 25, marginLeft: 20 }}>MedicDate</Text>
        </View>
        <View style={{ position: "absolute", top: 210 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Iniciar sesión
          </Text>
        </View>
        <View
          style={{ position: "absolute", top: 300, width: 300, margin: 30 }}
        >
          <View style={{ justifyContent: "center" }}>
            <TextInput
              style={{
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 10,
                paddingHorizontal: 10,
                borderRadius: 20,
                padding: 10,
                height: 60,
                paddingLeft: 50,
              }}
              placeholder="Correo electronico"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Image
              source={Correo}
              style={{ position: "absolute", bottom: 30, left: 10 }}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <TextInput
              style={{
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 10,
                paddingHorizontal: 10,
                borderRadius: 20,
                padding: 10,
                height: 60,
                marginTop: 50,
                paddingLeft: 50,
              }}
              placeholder="Contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Image
              source={Contrasena}
              style={{ position: "absolute", bottom: 25, left: 10 }}
            />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            backgroundColor: "#2DAFC8",
            top: 600,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity
            style={{ width: 300, alignItems: "center" }}
            onPress={handleLogin}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                padding: 15,
              }}
            >
              Iniciar sesión
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ position: "absolute", top: 670 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            ¿Aún no tienes cuenta?{"   "}
            <Text
              style={{ color: "#2DAFC8", fontWeight: "bold" }}
              onPress={() => navigation.navigate("Register")}
            >
              Regístrate
            </Text>
          </Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
