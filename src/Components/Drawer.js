import React from 'react';
import {styles,Colors} from '../Css/Styles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pedidos1 from '../Views/Pedidos1';
import MisPedidos1 from '../Views/MisPedidos1';
import PedidosTomados1 from '../Views/PedidosTomados1';
import Perfil from '../Views/Perfil'

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator 
            initialRouteName=""
            drawerStyle={ styles.Drawer }
            drawerContentOptions={{
                activeTintColor: Colors.lightPrimary,
                itemStyle: { marginVertical: 0 },
                labelStyle: {color: Colors.textPrimary}
            }}
            drawerType= 'front'

        >
            <Drawer.Screen name="Pedidos" component={Pedidos1} />
            <Drawer.Screen name="Mis Pedidos" component={MisPedidos1} />
            <Drawer.Screen name="Pedidos Tomados" component={PedidosTomados1} />
            <Drawer.Screen name="Perfil" component={Perfil} />
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <MyDrawer />
    );
}