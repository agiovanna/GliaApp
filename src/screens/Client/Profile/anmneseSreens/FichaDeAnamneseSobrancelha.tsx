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

export function FichaDeAnamneseSobrancelhas({ navigation }: { navigation: any }) {
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
        questao1: questao1.split(' + ')[1],
        questao2: questao2.split(' + ')[1],
        questao3: questao3.split(' + ')[1],
        questao4: questao4.split(' + ')[1],
        questao5: questao5.split(' + ')[1],
        questao6: questao6.split(' + ')[1],
        questao7: questao7.split(' + ')[1],
      };

      await api.post('/api/sobrancelhas', respostasSimNao);
      await api.post('/api/sobrancelhasEscritas', respostasEscritas);

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
        <Text>Possui queda de pelos ou falhas nas sobrancelhas?</Text>
        <Picker
          selectedValue={questao1.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao1(value + ' + ' + questao1.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Qual problema?"
          style={styles.input}
          onChangeText={(text) => setQuestao1(questao1.split(' + ')[0] + ' + ' + text)}
          value={questao1.split(' + ')[1]}
        />

        <Text>Possui alergia a henna nas sobrancelhas?</Text>
        <Picker
          selectedValue={questao2.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao2(value + ' + ' + questao2.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Qual reação?"
          style={styles.input}
          onChangeText={(text) => setQuestao2(questao2.split(' + ')[0] + ' + ' + text)}
          value={questao2.split(' + ')[1]}
        />

        <Text>Possui alergia a chumbo nas sobrancelhas?</Text>
        <Picker
          selectedValue={questao3.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao3(value + ' + ' + questao3.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Qual reação?"
          style={styles.input}
          onChangeText={(text) => setQuestao3(questao3.split(' + ')[0] + ' + ' + text)}
          value={questao3.split(' + ')[1]}
        />

        <Text>Oleosidade da pele nas sobrancelhas:</Text>
        <Picker
          selectedValue={questao4.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao4(value + ' + ' + questao4.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="MUITA" value="MUITA" />
          <Picker.Item label="MÉDIA" value="MÉDIA" />
          <Picker.Item label="POUCA" value="POUCA" />
        </Picker>
        <TextInput
          placeholder="Outra frequência"
          style={styles.input}
          onChangeText={(text) => setQuestao4(questao4.split(' + ')[0] + ' + ' + text)}
          value={questao4.split(' + ')[1]}
        />

        <Text>Grau de sensibilidade da pele nas sobrancelhas:</Text>
        <Picker
          selectedValue={questao5.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao5(value + ' + ' + questao5.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="MUITA" value="MUITA" />
          <Picker.Item label="MÉDIA" value="MÉDIA" />
          <Picker.Item label="POUCA" value="POUCA" />
        </Picker>
        <TextInput
          placeholder="Outra frequência"
          style={styles.input}
          onChangeText={(text) => setQuestao5(questao5.split(' + ')[0] + ' + ' + text)}
          value={questao5.split(' + ')[1]}
        />

        <Text>Apresenta psoríase ou caspa nas sobrancelhas?</Text>
        <Picker
          selectedValue={questao6.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao6(value + ' + ' + questao6.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Qual diagnóstico?"
          style={styles.input}
          onChangeText={(text) => setQuestao6(questao6.split(' + ')[0] + ' + ' + text)}
          value={questao6.split(' + ')[1]}
        />

        <Text>Tipo de pelo das sobrancelhas:</Text>
        <Picker
          selectedValue={questao7.split(' + ')[0]}
          onValueChange={(value: string) => setQuestao7(value + ' + ' + questao7.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="GROSSO" value="GROSSO" />
          <Picker.Item label="FINO" value="FINO" />
          <Picker.Item label="Outra textura" value="Outra textura" />
        </Picker>
        <TextInput
          placeholder="Outra textura"
          style={styles.input}
          onChangeText={(text) => setQuestao7(questao7.split(' + ')[0] + ' + ' + text)}
          value={questao7.split(' + ')[1]}
        />

        <Button title="Cadastrar" onPress={cadastrarFichaDeAnamnese} />
      </View>
    </View>
  );
}
