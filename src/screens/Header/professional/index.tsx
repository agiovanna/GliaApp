import { StyleSheet, View, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HeaderProfessional() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Use o useEffect para carregar a imagem do AsyncStorage quando a tela for montada
  useEffect(() => {
    const loadProfileImage = async () => {
      try {
        const storedImage = await AsyncStorage.getItem('imageProfessional');
        setProfileImage(storedImage);
      } catch (error) {
        console.log('Erro ao carregar imagem do perfil:', error);
      }
    };

    loadProfileImage();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.boxPhoto}>

        {profileImage ? ( 
        <Image source={{ uri: profileImage }} style={styles.imgProfile} />
        ) : (
          <Text>Imagem não encontrada</Text>
        )}

        <Text style={styles.text}>Nome </Text>
        <View style={styles.assessment}>
          <AntDesign name="star" size={22} color="black" />
          <Text style={{ fontSize: 20, marginLeft: 8 }}>Avaliação</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 100,
  },

  imgProfile: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },

  boxPhoto: {
    height: 'auto',
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    marginTop: 20,
  },

  assessment: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  }
});