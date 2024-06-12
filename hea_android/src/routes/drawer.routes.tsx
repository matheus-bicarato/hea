import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomHeader from "../components/CustomHeader";

import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";
import Genericos from "../screens/Genericos";
import Beleza from "../screens/Beleza";
import Medicamentos from "../screens/Medicamentos";
import CuidadosDiarios from "../screens/CuidadosDiarios";
import Infantil from "../screens/Infantil";
import SaudeEBemEstar from "../screens/SaudeEBemEstar";


const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                title: '',
                header: (props) => (<CustomHeader />),


            }}
            initialRouteName="principal"

        >
            <Drawer.Screen
                name="profile"
                component={StackRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    drawerLabel: 'Meu perfil'
                }}
            />

            <Drawer.Screen
                name="principal"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    drawerLabel: 'Inicio'
                }}

            />
            <Drawer.Screen
                name="Genericos"
                component={Genericos}
                options={{
                    drawerIcon: ({ color, size }) => <FontAwesome name="stethoscope" color={color} size={size} />,
                    drawerLabel: 'Genericos'
                }}
            />
            <Drawer.Screen
                name="Beleza"
                component={Beleza}
                options={{
                    drawerIcon: ({ color, size }) => <FontAwesome name="stethoscope" color={color} size={size} />,
                    drawerLabel: 'Beleza'
                }}
            />
            <Drawer.Screen
                name="Medicamentos"
                component={Medicamentos}
                options={{
                    drawerIcon: ({ color, size }) => <FontAwesome name="stethoscope" color={color} size={size} />,
                    drawerLabel: 'Medicamentos'
                }}
            />
            <Drawer.Screen
                name="SaudeEBemEstar"
                component={SaudeEBemEstar}
                options={{
                    drawerIcon: ({ color, size }) => <FontAwesome name="stethoscope" color={color} size={size} />,
                    drawerLabel: 'Saude e bem estar'
                }}
            />
            <Drawer.Screen
                name="CuidadosDiarios"
                component={CuidadosDiarios}
                options={{
                    drawerIcon: ({ color, size }) => <FontAwesome name="stethoscope" color={color} size={size} />,
                    drawerLabel: 'Cuidados Diarios'
                }}
            />
            <Drawer.Screen
                name="Infantil"
                component={Infantil}
                options={{
                    drawerIcon: ({ color, size }) => <FontAwesome name="stethoscope" color={color} size={size} />,
                    drawerLabel: 'Infantil'
                }}
            />


        </Drawer.Navigator>
    )
}