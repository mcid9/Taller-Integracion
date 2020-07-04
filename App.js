import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './src/Controller/NavigationService';
//Vistas
import Login from './src/Views/Login';
import Registro1 from './src/Views/Registro1';
import Registro2 from './src/Views/Registro2';
import Admin from './src/Views/Admin';
import Pedidos1 from './src/Views/Pedidos1';
import Pedidos2 from './src/Views/Pedidos2';
import Pedidos3 from './src/Views/Pedidos3';
import MisPedidos1 from './src/Views/MisPedidos1';
import MisPedidos2 from './src/Views/MisPedidos2';
import MisPedidos3 from './src/Views/MisPedidos3';
import MisPedidos4 from './src/Views/MisPedidos4';
import PedidosTomados1 from './src/Views/PedidosTomados1';
import PedidosTomados2 from './src/Views/PedidosTomados2';
import Perfil from './src/Views/Perfil';
import Drawer from './src/Components/Drawer';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer  ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro1" component={Registro1} />
        <Stack.Screen name="Registro2" component={Registro2} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Pedidos1" component={Pedidos1} />
        <Stack.Screen name="Pedidos2" component={Pedidos2} />
        <Stack.Screen name="Pedidos3" component={Pedidos3} />
        <Stack.Screen name="MisPedidos1" component={MisPedidos1} />
        <Stack.Screen name="MisPedidos2" component={MisPedidos2} />
        <Stack.Screen name="MisPedidos3" component={MisPedidos3} />
        <Stack.Screen name="MisPedidos4" component={MisPedidos4} />
        <Stack.Screen name="PedidosTomados1" component={PedidosTomados1} />
        <Stack.Screen name="PedidosTomados2" component={PedidosTomados2} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}