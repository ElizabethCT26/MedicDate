// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Register from './screens/Register';
import Table from './screens/Table';
import Doctor from './screens/Doctor';
import AgendayCitas from './screens/AgendayCitas';
import TotalPaciente from './screens/TotalPaciente';
import CalendarioConsulta from './screens/CalentarioConsulta';
import AdministradorHome from './screens/AdministradorHome';
import AdministradorDoctores from './screens/AdministradorDoctores';
import AdministradorUsuarios from './screens/AdministradorUsuarios';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AdministradorHome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name='Table' component={Table}/>
        <Stack.Screen name='Doctor' component={Doctor}/>
        <Stack.Screen name='AgendayCitas' component={AgendayCitas}/>
        <Stack.Screen name='TotalPaciente' component={TotalPaciente}/>
        <Stack.Screen name='CalendarioConsulta' component={CalendarioConsulta}/>
        <Stack.Screen name='AdministradorHome' component={AdministradorHome}/>
        <Stack.Screen name='AdministradorDoctores' component={AdministradorDoctores}/>
        <Stack.Screen name='AdministradorUsuarios' component={AdministradorUsuarios}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;