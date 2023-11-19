import { StyleSheet, View } from "react-native";

import HeaderProfessional from "@screens/Header/professional";
import BarNavigator from '../../Navigators/BarNavigator';


function ProfileProfessional() {
    return(
         <View style={styles.container}>
            <HeaderProfessional />
            <BarNavigator />
         </View>
    );
}

export default ProfileProfessional;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});