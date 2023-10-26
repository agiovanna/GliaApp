import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SignUpProfessional2 as professionalAdress } from "@screens/Professional/SignUp/SignUpSecondStep";
import { SignUpProfessional3 as professionalBusiness } from "@screens/Professional/SignUp/SignUpThirdStep";
import { SignUpProfessional1 as professionalData } from "@screens/Professional/SignUp/SignUpFirstStep";
import { SignUpProfessional4 as professionalPassword } from "@screens/Professional/SignUp/SignUpFourthStep";
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
                component={professionalBusiness}
            />

            <Screen
                name='professionalPassword'
                component={professionalPassword}
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