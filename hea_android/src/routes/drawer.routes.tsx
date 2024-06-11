import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomHeader from "../components/CustomHeader";

import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";
import Genericos from "../screens/Genericos";


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


        </Drawer.Navigator>
    )
}