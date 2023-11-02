import React from 'react';
import { View, Text } from 'react-native';

export function FichaAnamneseBase({ route }: { route: any }) {
  const respostas = route.params.respostas;

  return (
    <View>
      <Text>Respostas da Ficha de Anamnese base</Text>
      <Text>Questão 1: {respostas.questao1}</Text>
      <Text>Questão 2: {respostas.questao2}</Text>
      <Text>Questão 3: {respostas.questao3}</Text>
      <Text>Questão 4: {respostas.questao4}</Text>
      <Text>Questão 5: {respostas.questao5}</Text>
      <Text>Questão 6: {respostas.questao6}</Text>
      <Text>Questão 7: {respostas.questao7}</Text>
    </View>
  );
}
