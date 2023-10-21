import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { professionalAdress } from "../screens/createProfessional/adress";
import { Business } from "../screens/createProfessional/business";
import { professionalData } from "../screens/createProfessional/personalData";
import { professionalUser } from "../screens/createProfessional/user";
import { professionalValidation } from "../screens/createProfessional/emailValidation";
import { clientData } from "../screens/createClient/personalData";
import {clientUser} from "../screens/createClient/user";
import {clientValidation} from "../screens/createClient/emailValidation";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>

            {/* professional screens */}
            <Screen
                name='professionalData'
                component={professionalData}
            />

            <Screen
                name='professionalAdress'
                component={professionalAdress}
            />

            <Screen
                name='business'
                component={Business}
            />

            <Screen
                name='professionalUser'
                component={professionalUser}
            />

            <Screen
                name='professionalValidation'
                component={professionalValidation}
            />

            {/* client screens */}
            <Screen
                name='clientData'
                component={clientData}
            />

            <Screen
                name='clientUser'
                component={clientUser}
            />

            <Screen
                name='clientValidation'
                component={clientValidation}
            />
        </Navigator>
    );
}

