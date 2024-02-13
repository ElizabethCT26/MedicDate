import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AppointmentModal = ({ selectedSpecialty, handleInputChange, closeModal }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

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
        height: "60%",
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
          backgroundColor: '#C0FDF5',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={showDatePicker}
      >
        <Text>Elija la fecha y hora de su consulta</Text>
      </TouchableOpacity>
      {selectedDate && (
        <Text style={{marginBottom:"10%"}}>Fecha y Hora Seleccionada: {selectedDate.toString()}</Text>
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

export default AppointmentModal;
