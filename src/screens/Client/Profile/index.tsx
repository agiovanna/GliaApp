// ProfileScreen.tsx
import React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './src/screen/style';
import Icon from 'react-native-vector-icons/Feather';


const ProfileScreen: React.FC = () => {
  
  return (
    <View style={styles.container}>
    <View style={styles.profileHeader}/>
      <View style={styles.profileHeaderTop}/>
    
        <View style={styles.profileHeaderTopBackground} >
        <Icon name="edit" size={25} color="white" style={styles.icon7}/>
        <Text style={styles.userName}>Nome do Usuário</Text>
        </View>
        

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.anamnesisTitle}>Anamnese</Text>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Base Pressed')}>
          <Text style={styles.buttonText}>Base</Text>
                  <Icon name="chevron-right" size={30} color="white" style={styles.icon1}/>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Unha Pressed')}>
          <Text style={styles.buttonText}>Cabelo</Text>
          <Icon name="chevron-right" size={30} color="white" style={styles.icon2}/>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Unha Pressed')}>
          <Text style={styles.buttonText}>Unha</Text>
          <Icon name="chevron-right" size={30} color="white" style={styles.icon3}/>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Sobrancelha Pressed')}>
          <Text style={styles.buttonText}>Sobrancelha</Text>
          <Icon name="chevron-right" size={30} color="white" style={styles.icon4}/>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Cílios Pressed')}>
          <Text style={styles.buttonText}>Cílios</Text>
          <Icon name="chevron-right" size={30} color="white" style={styles.icon5} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Maquiagem Pressed')}>
          <Text style={styles.buttonText}>Maquiagem</Text>
          <Icon name="chevron-right" size={30} color="white" style={styles.icon6}/>
        </TouchableOpacity>
      </View>
      </ScrollView>
      
    </View>
    
    
  );
};

export default ProfileScreen;

