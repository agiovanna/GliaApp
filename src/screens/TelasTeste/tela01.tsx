
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Tela02 } from 'src/screens/TelasTeste/tela02';
import { Tela03 } from 'src/screens/TelasTeste/tela03';
import { Tela04 } from 'src/screens/TelasTeste/tela04';

const Bottom = createBottomTabNavigator();


export function Tela01() {
    return (
        
        <Bottom.Navigator screenOptions={{ headerShown: false }}>

            <Bottom.Screen
                name='tela02'
                component={Tela02}
            />

            <Bottom.Screen
                name='tela03'
                component={Tela03}
            />

            <Bottom.Screen
                name='tela04'
                component={Tela04}
            />
        </Bottom.Navigator>
    );
}