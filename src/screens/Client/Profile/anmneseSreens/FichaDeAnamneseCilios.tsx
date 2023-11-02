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

export function FichaDeAnamneseCilios({ navigation }: { navigation: any }) {
  const [questao1, setQuestao1] = useState('');
  const [questao2, setQuestao2] = useState('');
  const [questao3, setQuestao3] = useState('');
  const [questao4, setQuestao4] = useState('');
  const [questao5, setQuestao5] = useState('');
  const [questao6, setQuestao6] = useState('');
  const [questao7, setQuestao7] = useState('');
  const [questao8, setQuestao8] = useState('');

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
        questao8: questao8.split(' + ')[0],
      };

      const respostasEscritas = {
        questao1: questao1.split(' + ')[1],
        questao2: questao2.split(' + ')[1],
        questao3: questao3.split(' + ')[1],
        questao4: questao4.split(' + ')[1],
        questao5: questao5.split(' + ')[1],
        questao6: questao6.split(' + ')[1],
        questao7: questao7.split(' + ')[1],
        questao8: questao8.split(' + ')[1],
      };

      await api.post('/api/cilios', respostasSimNao);
      await api.post('/api/ciliosEscritas', respostasEscritas);

    } catch (error) {
      console.log('Houve um erro: ' + error);
      
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text>Realizou algum procedimento nos olhos recentemente?</Text>
        <Picker
          selectedValue={questao1.split(' + ')[0]}
          onValueChange={(value) => setQuestao1(value + ' + ' + questao1.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Quais procedimentos?"
          style={styles.input}
          onChangeText={(text) => setQuestao1(questao1.split(' + ')[0] + ' + ' + text)}
          value={questao1.split(' + ')[1]}
        />

        <Text>Está em tratamento oncológico?</Text>
        <Picker
          selectedValue={questao2.split(' + ')[0]}
          onValueChange={(value) => setQuestao2(value + ' + ' + questao2.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Tratamento oncológico?"
          style={styles.input}
          onChangeText={(text) => setQuestao2(questao2.split(' + ')[0] + ' + ' + text)}
          value={questao2.split(' + ')[1]}
        />

        <Text>Tem algum problema oftalmológico?</Text>
        <Picker
          selectedValue={questao3.split(' + ')[0]}
          onValueChange={(value) => setQuestao3(value + ' + ' + questao3.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Qual problema?"
          style={styles.input}
          onChangeText={(text) => setQuestao3(questao3.split(' + ')[0] + ' + ' + text)}
          value={questao3.split(' + ')[1]}
        />

        <Text>Costuma dormir de lado?</Text>
        <Picker
          selectedValue={questao4.split(' + ')[0]}
          onValueChange={(value) => setQuestao4(value + ' + ' + questao4.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label= "Não" value="Não" />
        </Picker>

        <Text>Faz uso de algum colírio?</Text>
        <Picker
          selectedValue={questao5.split(' + ')[0]}
          onValueChange={(value) => setQuestao5(value + ' + ' + questao5.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>

        <Text>Tem glaucoma, blefarite ou algum problema ocular?</Text>
        <Picker
          selectedValue={questao6.split(' + ')[0]}
          onValueChange={(value) => setQuestao6(value + ' + ' + questao6.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Especifique"
          style={styles.input}
          onChangeText={(text) => setQuestao6(questao6.split(' + ')[0] + ' + ' + text)}
          value={questao6.split(' + ')[1]}
        />

        <Text>Algum problema na tireoide?</Text>
        <Picker
          selectedValue={questao7.split(' + ')[0]}
          onValueChange={(value) => setQuestao7(value + ' + ' + questao7.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        
        <Text>Existe algum problema que julgue necessário informar ao profissional antes do procedimento?</Text>
        <Picker
          selectedValue={questao8.split(' + ')[0]}
          onValueChange={(value) => setQuestao8(value + ' + ' + questao8.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Qual problema?"
          style={styles.input}
          onChangeText={(text) => setQuestao8(questao8.split(' + ')[0] + ' + ' + text)}
          value={questao8.split(' + ')[1]}
        />

        <Button title="Cadastrar" onPress={cadastrarFichaDeAnamnese} />
      </View>
    </View>
  );
}
