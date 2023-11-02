import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { api } from '../../lib/axios'; // Importe a instância do Axios

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

export function FichaDeAnamneseMaquiagem({ navigation }: { navigation: any }) {
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

      await api.post('/api/maquiagem', respostasSimNao);
      await api.post('/api/maquiagemEscritas', respostasEscritas);

      // Redirecione o usuário ou execute outras ações após o cadastro bem-sucedido
      // navigation.navigate('outraRota');
    } catch (error) {
      console.log('Houve um erro: ' + error);
      // Lide com erros de cadastro, se necessário
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text>Realizou tratamento dermatológico recentemente?</Text>
        <Picker
          selectedValue={questao1.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao1(value + ' + ' + questao1.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Detalhes"
          style={styles.input}
          onChangeText={(text) => setQuestao1(questao1.split(' + ')[0] + ' + ' + text)}
          value={questao1.split(' + ')[1]}
        />

        <Text>Manchas na pele?</Text>
        <Picker
          selectedValue={questao2.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao2(value + ' + ' + questao2.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Onde?"
          style={styles.input}
          onChangeText={(text) => setQuestao2(questao2.split(' + ')[0] + ' + ' + text)}
          value={questao2.split(' + ')[1]}
        />

        <Text>Possui lentes de contato?</Text>
        <Picker
          selectedValue={questao3.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao3(value + ' + ' + questao3.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Detalhes"
          style={styles.input}
          onChangeText={(text) => setQuestao3(questao3.split(' + ')[0] + ' + ' + text)}
          value={questao3.split(' + ')[1]}
        />

        <Text>Qual o tipo da sua pele?</Text>
        <Picker
          selectedValue={questao4.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao4(value + ' + ' + questao4.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Oleosa" value="Oleosa" />
          <Picker.Item label="Normal" value="Normal" />
          <Picker.Item label="Seca" value="Seca" />
          <Picker.Item label="Madura" value="Madura" />
        </Picker>
        <TextInput
          placeholder="Detalhes"
          style={styles.input}
          onChangeText={(text) => setQuestao4(questao4.split(' + ')[0] + ' + ' + text)}
          value={questao4.split(' + ')[1]}
        />

        <Text>Seu grau de oleosidade:</Text>
        <Picker
          selectedValue={questao5.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao5(value + ' + ' + questao5.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Alípica" value="Alípica" />
          <Picker.Item label="Lipídica" value="Lipídica" />
          <Picker.Item label="Normal" value="Normal" />
          <Picker.Item label="Seborreica" value="Seborreica" />
        </Picker>
        <TextInput
          placeholder="Detalhes"
          style={styles.input}
          onChangeText={(text) => setQuestao5(questao5.split(' + ')[0] + ' + ' + text)}
          value={questao5.split(' + ')[1]}
        />

        <Text>Possui problemas de pele?</Text>
        <Picker
          selectedValue={questao6.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao6(value + ' + ' + questao6.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Detalhes"
          style={styles.input}
          onChangeText={(text) => setQuestao6(questao6.split(' + ')[0] + ' + ' + text)}
          value={questao6.split(' + ')[1]}
        />

        <Text>Fez alguma cirurgia no rosto recentemente?</Text>
        <Picker
          selectedValue={questao7.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao7(value + ' + ' + questao7.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Qual cirurgia?"
          style={styles.input}
          onChangeText={(text) => setQuestao7(questao7.split(' + ')[0] + ' + ' + text)}
          value={questao7.split(' + ')[1]}
        />

        <Text>Existe algum problema que acha necessário ser informado à profissional?</Text>
        <Picker
          selectedValue={questao8.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao8(value + ' + ' + questao8.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Detalhes"
          style={styles.input}
          onChangeText={(text) => setQuestao8(questao8.split(' + ')[0] + ' + ' + text)}
          value={questao8.split(' + ')[1]}
        />

        <Button title="Cadastrar" onPress={cadastrarFichaDeAnamnese} />
      </View>
    </View>
  );
}
