import React, { useState } from 'react';
import { Text, TextInput, Button, Alert, View } from 'react-native';
import { api } from '../../../lib/axios';

export function ClientLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/login/client', { email, password });

      if (response.data.error) {
        Alert.alert('Erro', response.data.error);
      } else {
        Alert.alert('Sucesso', 'Login bem-sucedido!');
      }
    } catch (error) {
      console.log('Houve um erro: ' + error);
      Alert.alert('Erro', 'Não foi possível realizar o login.');
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput onChangeText={setEmail} value={email} />

      <Text>Senha:</Text>
      <TextInput onChangeText={setPassword} value={password} secureTextEntry={true} />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
