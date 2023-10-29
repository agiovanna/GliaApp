import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SignUpProfessional2 } from "src/screens/Professional/SignUp/SignUpSecondStep";
import { SignUpProfessional3 } from "src/screens/Professional/SignUp/SignUpThirdStep";
import { SignUpProfessional1 } from "src/screens/Professional/SignUp/SignUpFirstStep";
import { SignUpProfessional4} from "src/screens/Professional/SignUp/SignUpFourthStep";
import { SignUpProfessional5 } from "src/screens/Professional/SignUp/SignUpFifthStep";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>

            {/* professional screens */}
            <Screen
                name='SignUpProfessional1'
                component={SignUpProfessional1}
            />

            <Screen
                name='SignUpProfessional2'
                component={SignUpProfessional2}
            />

            <Screen
                name='SignUpProfessional3'
                component={SignUpProfessional3}
            />

            <Screen
                name='SignUpProfessional4'
                component={SignUpProfessional4}
            />

            <Screen
                name='SignUpProfessional5'
                component={SignUpProfessional5}
            />

            {/* client screens */}
        </Navigator>
    );
}