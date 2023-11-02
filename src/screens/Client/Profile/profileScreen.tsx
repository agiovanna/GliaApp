import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { api } from '../../lib/axios'; // Importe a instância do Axios
import { FichaDeAnamneseCabelo } from '../anmneseSreens/FichaDeAnmneseCabelo'; 
import { FichaAnamneseBase } from '../anmneseSreens/FichaDeAnmneseBase';
import { FichaDeAnamneseCilios } from '../anmneseSreens/FichaDeAnamneseCilios';
import { FichaDeAnamneseMaquiagem } from '../anmneseSreens/FichaDeAnamneseMaquiagem';
import { FichaDeAnamneseSobrancelhas } from '../anmneseSreens/FichaDeAnamneseSobrancelha';
import { FichaDeAnamneseUnhas } from '../anmneseSreens/FichaDeAnamneseUnhas';

export function TelaDePerfil({ navigation }: { navigation: any }) {
  const [respostasFichaBase, setRespostasFichaBase] = useState<any>({});
  const [respostasFichaCabelo, setRespostasFichaCabelo] = useState<any>({});
  const [respostasFichaCilios, setRespostasFichaCilios] = useState<any>({});
  const [respostasFichaMaquiagem, setRespostasFichaMaquiagem] = useState<any>({});
  const [respostasFichasobrancelha, setRespostasFichasobrancelha] = useState<any>({});
  const [respostasFichaUnhas, setRespostasFichaUnhas] = useState<any>({});


  // Função para buscar as respostas das fichas de anamnese do usuário
  async function buscarRespostasDoUsuario() {
    try {
      const respostasFichaBase = await api.get('/api/fichaAnamnese/clienteId'); 
      setRespostasFichaBase(respostasFichaBase.data);

      const respostasFichaCabelo = await api.get('/api/anamneseCabelo/clienteId'); 
      setRespostasFichaCabelo(respostasFichaCabelo.data);

      const respostasFichaCilios = await api.get('/api/anamneseCilios/clienteId'); 
      setRespostasFichaCilios(respostasFichaCilios.data);

      const respostasFichaMaquiagem = await api.get('/api/anamneseMaquiagem/clienteId'); 
      setRespostasFichaMaquiagem(respostasFichaMaquiagem.data);

      const respostasFichasobrancelha = await api.get('/api/anamneseSobrancelha/clienteId'); 
      setRespostasFichasobrancelha(respostasFichasobrancelha.data);

      const respostasFichaUnhas = await api.get('/api/anamneseUnhas/clienteId'); 
      setRespostasFichaUnhas(respostasFichaUnhas.data);


    } catch (error) {
      console.error('Erro ao buscar as respostas: ' + error);
    }
  }

  return (
    <View>
      <Text>Seu Perfil</Text>
      <Button
        title="Ficha de Anamnese de Cabelo"
        onPress={() => {
          // Navegue para a tela de exibição da ficha de anamnese de cabelo, passando as respostas
          navigation.navigate('FichaDeAnamneseCabelo', { respostas: respostasFichaCabelo });
        }}
      />
      <Button
        title="Ficha de Anamnese Base"
        onPress={() => {
          // Navegue para a tela de exibição da ficha de anamnese base, passando as respostas
          navigation.navigate('FichaAnamneseBase', { respostas: respostasFichaBase });
        }}
      />
      <Button
        title="Ficha de Anamnese de Cílios"
        onPress={() => {
          // Navegue para a tela de exibição da ficha de anamnese de cílios, passando as respostas
          navigation.navigate('FichaDeAnamneseCilios', { respostas: respostasFichaCilios });
        }}
      />
      <Button
        title="Ficha de Anamnese de Maquiagem"
        onPress={() => {
          // Navegue para a tela de exibição da ficha de anamnese de maquiagem, passando as respostas
          navigation.navigate('FichaDeAnamneseMaquiagem', { respostas: respostasFichaMaquiagem });
        }}
      />
      <Button
        title="Ficha de Anamnese de Sobrancelhas"
        onPress={() => {
          // Navegue para a tela de exibição da ficha de anamnese de sobrancelhas, passando as respostas
          navigation.navigate('FichaDeAnamneseSobrancelhas', { respostas: respostasFichasobrancelha });
        }}
      />
      <Button
        title="Ficha de Anamnese de Unhas"
        onPress={() => {
          // Navegue para a tela de exibição da ficha de anamnese de unhas, passando as respostas
          navigation.navigate('FichaDeAnamneseUnhas', { respostas: respostasFichaUnhas });
        }}
      />
    </View>
  );
}

