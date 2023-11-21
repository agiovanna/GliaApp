import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpProfessional2 } from "src/screens/Professional/SignUp/SignUpSecondStep";
import { SignUpProfessional3 } from "src/screens/Professional/SignUp/SignUpThirdStep";
import { SignUpProfessional1 } from "src/screens/Professional/SignUp/SignUpFirstStep";
import { SignUpProfessional4 } from "src/screens/Professional/SignUp/SignUpFourthStep";
import { SignUpProfessional5 } from "src/screens/Professional/SignUp/SignUpFifthStep";
import { NavigationContainer } from '@react-navigation/native';
import { Map } from "src/utils/Map"
import { Tela01 } from 'src/screens/TelasTeste/tela01';
import { Tela02 } from 'src/screens/TelasTeste/tela02';
import { Tela03 } from 'src/screens/TelasTeste/tela03';
import { Tela04 } from 'src/screens/TelasTeste/tela04';
import ProfileProfessional from '../screens/Professional/Profile';
import ProfileClient from '../screens/Client/Profile';
import AddProfileProfessional from '../screens/Professional/AddProfile';
import AddProfileClient from '../screens/Client/AddProfile';


const Tab = createNativeStackNavigator();


export function AppRoutes() {
    return (

        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>

                {/* professional screens */}

                <Tab.Screen
                    name='SignUpProfessional1'
                    component={SignUpProfessional1}
                />

                <Tab.Screen
                    name='SignUpProfessional2'
                    component={SignUpProfessional2}
                />

                <Tab.Screen
                    name='SignUpProfessional3'
                    component={SignUpProfessional3}
                />

                <Tab.Screen
                    name='SignUpProfessional4'
                    component={SignUpProfessional4}
                />

                <Tab.Screen
                    name='SignUpProfessional5'
                    component={SignUpProfessional5}
                />

                <Tab.Screen
                    name='Tela01'
                    component={Tela01}
                />

                <Tab.Screen
                    name='Map'
                    component={Map}
                />

                {/* perfil de cliente e profissional */}

                <Tab.Screen
                    name='addProfileProfessional'
                    component={AddProfileProfessional}
                />
  
                <Tab.Screen
                    name='addProfileClient'
                    component={AddProfileClient}
                />

                <Tab.Screen
                    name='profileProfessional'
                    component={ProfileProfessional}
                />

                <Tab.Screen
                    name='profileClient'
                    component={ProfileClient}
                />


                {/* client screens */}

                {/*<Tab.Screen
                name='tela01'
                component={Tela01}
            />

            <Tab.Screen
                name='tela02'
                component={Tela02}
            />

            <Tab.Screen
                name='tela03'
                component={Tela03}
            />

            <Tab.Screen
                name='tela04'
                component={Tela04}
            />*/}

            </Tab.Navigator>
        </NavigationContainer>
    );
}
