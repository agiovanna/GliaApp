import { StyleSheet, View } from "react-native";

import HeaderClient from "src/screens/Client/Header";


function ProfileClient() {
    return(
         <View style={styles.container}>
            <HeaderClient />
         </View>
    );
}

export default ProfileClient;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});