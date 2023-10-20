import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Adress } from "../screens/createProfessional/adress";
import { Business } from "../screens/createProfessional/business";
import { PersonalData } from "../screens/createProfessional/personalData";
import { User } from "../screens/createProfessional/user";
import { VerificationEmail } from "../screens/createProfessional/emailValidation";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='personalData'
                component={PersonalData}
            />

            <Screen
                name='adress'
                component={Adress}
            />

            <Screen
                name='business'
                component={Business}
            />

            <Screen
                name='user'
                component={User}
            />

            <Screen
                name='verificationEmail'
                component={VerificationEmail}
            />
        </Navigator>
    );
}

