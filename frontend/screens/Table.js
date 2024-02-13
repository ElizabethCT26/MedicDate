import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import React, { useState } from "react";
import Corazon from "../assets/corazonMedicDate.png";
import Familiar from "../assets/familiar.png";
import Dermatologa from "../assets/dermatologa.png";
import Odontologia from "../assets/odontologia.png";
import Psiquiatria from "../assets/psiquiatria.png";
import Ginecologia from "../assets/ginecologia.png";
import Oftalmologia from "../assets/oftalmologia.png";
import Pediatria from "../assets/pediatria.png";
import Gastroenterologia from "../assets/gastroenterologia.png";

export default function Table() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState("");

  //   opciones del modal
  const [selectedValue, setSelectedValue] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleModal = (specialty) => {
    setSelectedSpecialty(specialty);
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleInputChange = (text) => {
    setAppointmentDetails(text);
  };

  //   Modal
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const renderModalContent = () => {
    return (
      <View
        style={{
          backgroundColor: "white",
          padding: 22,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          borderColor: "rgba(0, 0, 0, 0.1)",
          width: "80%",
          height: "45%",
        }}
      >
        <Text>{selectedSpecialty}</Text>
        <TextInput
          placeholder="Nombre del paciente"
          value={appointmentDetails}
          onChangeText={handleInputChange}
          style={{
            borderBottomWidth: 1,
            marginBottom: 10,
            width: "80%",
            textAlign: "center",
          }}
        />
        <RNPickerSelect
          onValueChange={(value) => setSelectedValue(value)}
          items={[
            { label: "Doctor 1", value: "opcion1" },
            { label: "Doctor 2", value: "opcion2" },
            { label: "Doctor 3", value: "opcion3" },
          ]}
        />
        <TouchableOpacity
          style={{
            borderBottomWidth: 0,
            backgroundColor: "#C0FDF5",
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}
          onPress={showDatePicker}
        >
          <Text>Elija la fecha y hora de su consulta</Text>
        </TouchableOpacity>
        {selectedDate && (
          <Text style={{ marginBottom: "10%" }}>
            Fecha y Hora Seleccionada: {selectedDate.toString()}
          </Text>
        )}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <Button title="Agendar Cita" onPress={closeModal} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          position: "absolute",
          left: 35,
          top: 55,
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
          position: "absolute",
          backgroundColor: "#2DAFC8",
          height: 112,
          width: "85%",
          top: 100,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            paddingLeft: 20,
            paddingTop: 10,
          }}
        >
          Su proxima cita es:
        </Text>
      </View>
      <Text style={{ position: "absolute", top: 220 }}>¡AGENDA TÚ CITA!</Text>
      {/*Columna Izquierda*/}
      {/*FAMILIAR*/}
      <TouchableOpacity
        onPress={() => toggleModal("FAMILIAR")}
        style={{
          position: "absolute",
          top: 245,
          left: 30,
          width: "40%",
          height: 140,
          backgroundColor: "#FF1414",
          marginBottom: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={Familiar} />
          <Text style={{ color: "white", fontSize: 20 }}>FAMILIAR</Text>
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={closeModal}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {renderModalContent()}
      </Modal>
      {/*ODONTOLOGIA*/}
      <TouchableOpacity
        onPress={() => toggleModal("ODONTOLOGIA")}
        style={{
          position: "absolute",
          top: 395,
          left: 30,
          width: "40%",
          height: 140,
          backgroundColor: "#2C28FF",
          marginBottom: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={Odontologia} />
          <Text style={{ color: "white", fontSize: 20 }}>ODONTOLOGIA</Text>
        </View>
      </TouchableOpacity>
      {/*PSIQUIATRIA*/}
      <TouchableOpacity
        onPress={() => toggleModal("PSIQUIATRIA")}
        style={{
          position: "absolute",
          top: 545,
          left: 30,
          width: "40%",
          height: 140,
          backgroundColor: "#AB4BD8",
          marginBottom: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={Psiquiatria} />
          <Text style={{ color: "white", fontSize: 20 }}>PSIQUIATRIA</Text>
        </View>
      </TouchableOpacity>
      {/*GINECOLOGIA/OBSTETRICIA*/}
      <TouchableOpacity
        onPress={() => toggleModal("GINECOLOGIA/OBSTETRICIA")}
        style={{
          position: "absolute",
          top: 695,
          left: 30,
          width: "40%",
          height: 140,
          backgroundColor: "#FB4810",
          marginBottom: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={Ginecologia} />
          <Text style={{ color: "white", fontSize: 20 }}>
            GINECOLOGIA/OBSTETRICIA
          </Text>
        </View>
      </TouchableOpacity>

      {/*Columna Derecha*/}
      {/*DERMANTOLOGIA*/}
      <TouchableOpacity
        onPress={() => toggleModal("DERMATOLOGA")}
        style={{
          position: "absolute",
          top: 245,
          left: "52%",
          width: "40%",
          height: 140,
          backgroundColor: "#FFE600",
          marginBottom: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={Dermatologa} />
          <Text style={{ color: "white", fontSize: 20 }}>DERMATOLOGA</Text>
        </View>
      </TouchableOpacity>
      {/*OFTALMOLOGIA*/}
      <TouchableOpacity
        onPress={() => toggleModal("OFTALMOLOGIA")}
        style={{
          position: "absolute",
          top: 395,
          left: "52%",
          width: "40%",
          height: 140,
          backgroundColor: "#00CB2D",
          marginBottom: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={Oftalmologia} />
          <Text style={{ color: "white", fontSize: 20 }}>OFTALMOLOGIA</Text>
        </View>
      </TouchableOpacity>
      {/*PEDIATRIA*/}
      <TouchableOpacity
        onPress={() => toggleModal("PEDIATRIA")}
        style={{
          position: "absolute",
          top: 545,
          left: "52%",
          width: "40%",
          height: 140,
          backgroundColor: "#E810DF",
          marginBottom: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={Pediatria} />
          <Text style={{ color: "white", fontSize: 20 }}>PEDIATRIA</Text>
        </View>
      </TouchableOpacity>
      {/*GASTROENTEROLOGIA*/}
      <TouchableOpacity
        onPress={() => toggleModal("GASTROENTEROLOGIA")}
        style={{
          position: "absolute",
          top: 695,
          left: "52%",
          width: "40%",
          height: 140,
          backgroundColor: "#0C7979",
          marginBottom: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={Gastroenterologia} />
          <Text style={{ color: "white", fontSize: 14 }}>
            GASTROENTEROLOGIA
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
