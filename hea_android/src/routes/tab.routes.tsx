// dependencias
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons';
// telas
import Feed from "../screens/Feed";
import New from "../screens/New";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={Feed}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: 'Inicio'
                }}
            />
            <Tab.Screen
                name="new"
                component={New}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: 'Novo'
                }}
            />
        </Tab.Navigator>
    )
}