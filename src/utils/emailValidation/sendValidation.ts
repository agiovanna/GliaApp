import firebaseAuth from "../../api/firebase/firebaseConfig";
import { createUserWithEmailAndPassword, User as FirebaseUser, sendEmailVerification } from "firebase/auth";
import { Alert } from "react-native";


   export async function RegisterFirebaseandSendEmail(email: string, password: string) {
        try {
            //create user in Firebase
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password)
            const user: FirebaseUser = userCredential.user;

            if (user) {
                //send a email verification
                await sendEmailVerification(user)
                Alert.alert('Informação', `Foi enviado um email para ${email} para verificação.`);
            }
            else {
                console.log('Informação', 'Erro ao criar usuário no Firebase');
            }
        }
        catch (error) {
            console.error('Erro ao criar o usuário:', error);
            Alert.alert('Informação', 'Erro ao criar o usuário.');
        }
    }