import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Modal,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Header from "../components/Header";
import Exit from "../assets/exit.png";
import Corazon from "../assets/corazonMedicDate.png";
import UserBottom from "../assets/userBottom.png";
import HomeBottom from "../assets/homeBottom.png";
import DocBotoom from "../assets/docBottom.png";
import Doctores from "../assets/doctores.png";
import Eliminar from "../assets/botonX.png";
import Editar from "../assets/Editar.png";


export default function AdministradorDoctores() {
  const [data, setData] = useState([
    { id: 1, name: 'Jose del Carmen' },
    { id: 2, name: 'Juan' },
    { id: 3, name: 'Juan' },
    { id: 4, name: 'Carlos' },
    { id: 5, name: 'Octavio Cruz' }
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedName, setEditedName] = useState("");
  const navigation = useNavigation();

  const handleEdit = (id) => {
    setSelectedDoctor(id);
    setModalVisible(true);
  };

  const handleSave = () => {
    setData(data.map(item => {
      if (item.id === selectedDoctor) {
        return { ...item, name: editedName };
      }
      return item;
    }));
    setModalVisible(false);
  };
  const handleDelete = (id) => {
    // Mostrar la alerta para confirmar la eliminación
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que deseas eliminar este doctor?',
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
      <TouchableOpacity onPress={() => handleEdit(item.id)}>
      <Image source={Editar} />

      </TouchableOpacity>
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
          Doctores
        </Text>
        <Image
          source={Doctores}
          style={{ width: "40%", height: "37%", marginBottom: "15%" }}
        />
        <View style={{ flex: 1,width: "90%", height: "100%", position:"absolute", marginTop:"60%"  }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              backgroundColor: "#A8EAE1",
      
            }}
          >
            <Text style={{ fontWeight: "bold" }}>N°</Text>
            <Text style={{ fontWeight: "bold" }}>Nombre</Text>
            <Text style={{ fontWeight: "bold" }}>Editar</Text>
            <Text style={{ fontWeight: "bold" }}>Eliminar</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: "white", padding: 40,width:"90%", borderRadius: 10 }}>
            <Text style={{width:"100%", textAlign:"center",  top:-10, fontSize:30}}>Editar Doctor</Text>
            <TextInput
              placeholder="nombre"
              value={editedName}
              onChangeText={(text) => setEditedName(text)}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            <TextInput
              placeholder="Correo"
              value={editedName}
              onChangeText={(text) => setEditedName(text)}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
             <TextInput
              placeholder="Especialidad"
              value={editedName}
              onChangeText={(text) => setEditedName(text)}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            <TextInput
              placeholder="Cédula"
              value={editedName}
              onChangeText={(text) => setEditedName(text)}
              style={{ borderBottomWidth: 1, marginBottom: 30 }}
            />
            <Button title="Actualizar" onPress={handleSave} />
          </View>
        </View>
      </Modal>
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
