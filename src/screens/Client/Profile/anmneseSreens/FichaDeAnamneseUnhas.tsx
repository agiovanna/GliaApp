import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { api } from '../../lib/axios';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  block: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
});

export function FichaDeAnamneseUnhas({ navigation }: { navigation: any }) {
  const [questao1, setQuestao1] = useState('');
  const [questao2, setQuestao2] = useState('');
  const [questao3, setQuestao3] = useState('');
  const [questao4, setQuestao4] = useState('');
  const [questao5, setQuestao5] = useState('');
  const [questao6, setQuestao6] = useState('');
  const [questao7, setQuestao7] = useState('');

  async function cadastrarFichaDeAnamnese() {
    try {
      const respostasSimNao = {
        questao1: questao1.split(' + ')[0],
        questao2: questao2.split(' + ')[0],
        questao3: questao3.split(' + ')[0],
        questao4: questao4.split(' + ')[0],
        questao5: questao5.split(' + ')[0],
        questao6: questao6.split(' + ')[0],
        questao7: questao7.split(' + ')[0],
      };

      const respostasEscritas = {
        questao3: questao3.split(' + ')[1], // Onicomicose (micoses/fungos)
        questao4: questao4.split(' + ')[1], // Problemas na unha
      };

      await api.post('/api/unhas', respostasSimNao);
      await api.post('/api/unhasEscritas', respostasEscritas);

      // Redirecione o usuário ou execute outra ação após o cadastro bem-sucedido
      // navigation.navigate('outraRota');
    } catch (error) {
      console.log('Houve um erro: ' + error);
      // Lide com erros de cadastro, se necessário
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text>Costuma retirar o eponíquio (cutícula)?</Text>
        <Picker
          selectedValue={questao1.split(' + ')[0]}
          onValueChange={(value) => setQuestao1(value + ' + ' + questao1.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>

        <Text>Possui onicocriptose (unhas encravadas)?</Text>
        <Picker
          selectedValue={questao2.split(' + ')[0]}
          onValueChange={(value) => setQuestao2(value + ' + ' + questao2.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>

        <Text>Possui problemas de onicomicose (micoses/fungos ou outros)?</Text>
        <Picker
          selectedValue={questao3.split(' + ')[0]}
          onValueChange={(value) => setQuestao3(value + ' + ' + questao3.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>
        <TextInput
          placeholder="Quais?"
          style={styles.input}
          onChangeText={(text) => setQuestao3(questao3.split(' + ')[0] + ' + ' + text)}
          value={questao3.split(' + ')[1]}
        />

        <Text>A unha apresenta problemas como: descamação, estrias, manchas ou deslocamento?</Text>
        <Picker
          selectedValue={questao4.split(' + ')[0]}
          onValueChange={(value) => setQuestao4(value + ' + ' + questao4.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>
        <TextInput
          placeholder="Quais?"
          style={styles.input}
          onChangeText={(text) => setQuestao4(questao4.split(' + ')[0] + ' + ' + text)}
          value={questao4.split(' + ')[1]}
        />

        <Text>Possui o hábito de roer unhas?</Text>
        <Picker
          selectedValue={questao5.split(' + ')[0]}
          onValueChange={(value) => setQuestao5(value + ' + ' + questao5.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>

        <Text>Pratica esportes de impacto?</Text>
        <Picker
          selectedValue={questao6.split(' + ')[0]}
          onValueChange={(value) => setQuestao6(value + ' + ' + questao6.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>

        <Text>Costuma entrar em piscina/mar com frequência?</Text>
        <Picker
          selectedValue={questao7.split(' + ')[0]}
          onValueChange={(value) => setQuestao7(value + ' + ' + questao7.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="SIM" value="SIM" />
          <Picker.Item label="NÃO" value="NÃO" />
        </Picker>

        <Button title="Cadastrar" onPress={cadastrarFichaDeAnamnese} />
      </View>
    </View>
  );
}
