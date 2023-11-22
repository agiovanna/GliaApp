import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image, Alert, Dimensions, TextInput } from "react-native";
import React, { useState, useRef } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../api/firebase/firebaseConfig'

import { updateImgProfessional } from '../../../api/updateUser/updateImgProfessional'
import AsyncStorage from '@react-native-async-storage/async-storage';


export function AddProfileProfessional({ navigation }: {
    navigation: any;
}): React.JSX.Element {

    const [image, setImage] = useState('');
    const { height } = Dimensions.get('window');

    const id = 4;

    //Upload da imagem de perfil
    async function Upload({ uri, fileType }: { uri: any, fileType: any }) {
        const response = await fetch(uri);
        const blob = await response.blob();

        const storageRef = ref(storage, "Professional/Profile/" + `${id}`);

        const uploadItem = uploadBytesResumable(storageRef, blob);

        const snapshot = await uploadItem;
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;

    }

    //Acessar livraria
    async function AcessLibrary() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
            Alert.alert('Aviso', 'É necessário permitir o acesso à biblioteca para colocar uma foto de perfil nesta opção');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            await Upload({ uri: result.assets[0].uri, fileType: "image" });
        }
    }

    //Acessar câmera
    async function AcessCamera() {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted") {
            Alert.alert('Aviso', 'É necessário permitir o acesso à câmera para colocar uma foto de perfil nesta opção');
            return
        }

        const cameraResp = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        console.log(cameraResp)

        if (!cameraResp.canceled) {
            const { uri } = cameraResp.assets[0];
            setImage(uri);
        }

       
    }

    async function UpdateImg() {
        const imgReference: string = await Upload({ uri: image, fileType: "image" });

    if (id && imgReference != undefined){
                updateImgProfessional(
                    id,
                    imgReference,
                );

                console.log(
                    'Id: ' + id,
                    'Nome da Imagem: ' + imgReference
                );

                await AsyncStorage.setItem('imageProfessional', imgReference);

                Alert.alert('atualizado!');
    }
    else{console.log('valor vazio')}
    }


    return (
        <View>

            <View >
                {image &&
                    < Image source={{ uri: image }}  />
                }
                <TouchableOpacity>
                    <Entypo name="camera" size={40} color="#808080" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={async () => {
                await UpdateImg();
                navigation.navigate('profileProfessional');
                console.log(image)
            }}>
                <Text >Entrar</Text>
            </TouchableOpacity>


                <View >
                    <View style={{ width: "auto", height: "auto", flexDirection: "row", gap: 50, }}>
                        <TouchableOpacity onPress={AcessCamera}>
                            <Ionicons name="camera" size={38} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={AcessLibrary}>
                            <FontAwesome name="photo" size={36} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

        </View>
    );
}

