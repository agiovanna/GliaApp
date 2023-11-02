import React from 'react';
import { View, Text } from 'react-native';

export function FichaDeAnamneseCabelo({ route }: { route: any }) {
  const respostas = route.params.respostas;

  return (
    <View>
      <Text>Respostas da Ficha de Anamnese de Cabelo</Text>
      <Text>Questão 1: {respostas.questao1}</Text>
      <Text>Questão 2: {respostas.questao2}</Text>
      <Text>Questão 3: {respostas.questao3}</Text>
      <Text>Questão 4: {respostas.questao4}</Text>
      <Text>Questão 5: {respostas.questao5}</Text>
      <Text>Questão 6: {respostas.questao6}</Text>
      <Text>Questão 7: {respostas.questao7}</Text>
      <Text>Questão 8: {respostas.questao8}</Text>
      <Text>Questão 9: {respostas.questao9}</Text>
      <Text>Questão 10: {respostas.questao10}</Text>
      <Text>Questão 11: {respostas.questao11}</Text>
      <Text>Questão 12: {respostas.questao12}</Text>
    </View>
  );
}
