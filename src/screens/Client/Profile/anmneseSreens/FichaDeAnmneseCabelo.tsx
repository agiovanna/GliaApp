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

export function FichaDeAnamneseCabelo({ navigation }: { navigation: any }) {
  const [questao1, setQuestao1] = useState('');
  const [questao2, setQuestao2] = useState('');
  const [questao3, setQuestao3] = useState('');
  const [questao4, setQuestao4] = useState('');
  const [questao5, setQuestao5] = useState('');
  const [questao6, setQuestao6] = useState('');
  const [questao7, setQuestao7] = useState('');
  const [questao8, setQuestao8] = useState('');
  const [questao9, setQuestao9] = useState('');
  const [questao10, setQuestao10] = useState('');
  const [questao11, setQuestao11] = useState('');
  const [questao12, setQuestao12] = useState('');


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
        questao9: questao9.split(' + ')[0],
        questao10: questao10.split(' + ')[0],
        questao11: questao11.split(' + ')[0],
        questao12: questao12.split(' + ')[0],
      };

      const respostasEscritas = {
        questao1: questao1.split(' + ')[1],
        questao2: questao2.split(' + ')[1],
        questao3: questao3.split(' + ')[1],
        questao4: questao4.split(' + ')[1],
        questao5: questao5.split(' + ')[1],
        questao6: questao6,
        questao7: questao7.split(' + ')[1],
        questao8: questao8.split(' + ')[1],
        questao9: questao9.split(' + ')[1],
        questao10: questao10.split(' + ')[1],
        questao11: questao11.split(' + ')[1],
        questao12: questao12,
       
      };

      await api.post('/api/cabelo', respostasSimNao);
      await api.post('/api/cabeloEscritas', respostasEscritas);

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
        <Text>Você tem algum problema de saúde que possa afetar o seu cabelo ou o tratamento capilar?</Text>
        <Picker
          selectedValue={questao1.split(' + ')[0]}
          onValueChange={(value) => setQuestao1(value + ' + ' + questao1.split(' + ')[1])}
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

        <Text>Você está sob cuidados médicos ou tomando algum medicamento atualmente?</Text>
        <Picker
          selectedValue={questao2.split(' + ')[0]}
          onValueChange={(value) => setQuestao2(value + ' + ' + questao2.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Qual medicamento?"
          style={styles.input}
          onChangeText={(text) => setQuestao2(questao2.split(' + ')[0] + ' + ' + text)}
          value={questao2.split(' + ')[1]}
        />

        <Text>Alguma vez teve uma reação alérgica a algum produto capilar ou corante?</Text>
        <Picker
          selectedValue={questao3.split(' + ')[0]}
          onValueChange={(value) => setQuestao3(value + ' + ' + questao3.split(' + ')[1])}
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

        <Text>Já realizou algum tratamento químico no cabelo anteriormente?</Text>
        <Picker
          selectedValue={questao4.split(' + ')[0]}
          onValueChange={(value) => setQuestao4(value + ' + ' + questao4.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Qual tratamento?"
          style={styles.input}
          onChangeText={(text) => setQuestao4(questao4.split(' + ')[0] + ' + ' + text)}
          value={questao4.split(' + ')[1]}
        />

        <Text>Com que frequência você lava o seu cabelo?</Text>
        <Picker
          selectedValue={questao5.split(' + ')[0]}
          onValueChange={(value) => setQuestao5(value + ' + ' + questao5.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Diariamente" value="Diariamente" />
          <Picker.Item label="A cada dois dias" value="A cada dois dias" />
          <Picker.Item label="A cada três dias" value="A cada três dias" />
          <Picker.Item label="Duas vezes por semana" value="Duas vezes por semana" />
          <Picker.Item label="Uma vez por semana" value="Uma vez por semana" />
          <Picker.Item label="A cada dez dias" value="A cada dez dias" />
          <Picker.Item label="A cada duas semanas" value="A cada duas semanas" />
          <Picker.Item label="Uma vez por mês" value="Uma vez por mês" />
          <Picker.Item label="Outra frequência" value="Outra frequência" />
        </Picker>
        <TextInput
          placeholder="Outra frequência"
          style={styles.input}
          onChangeText={(text) => setQuestao5(questao5.split(' + ')[0] + ' + ' + text)}
          value={questao5.split(' + ')[1]}
        />

        <Text>Quais produtos você costuma utilizar para cuidar do seu cabelo?</Text>
        <TextInput
          placeholder="Produtos"
          style={styles.input}
          onChangeText={setQuestao6}
          value={questao6}
        />

        <Text>Como você descreveria a textura do seu cabelo?</Text>
        <Picker
          selectedValue={questao7.split(' + ')[0]}
          onValueChange={(value) => setQuestao7(value + ' + ' + questao7.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Liso" value="Liso" />
          <Picker.Item label="Ondulado" value="Ondulado" />
          <Picker.Item label="Encaracolado" value="Encaracolado" />
          <Picker.Item label="Crespo" value="Crespo" />
          <Picker.Item label="Afro" value="Afro" />
          <Picker.Item label="Frisado" value="Frisado" />
          <Picker.Item label="Liso com ondas" value="Liso com ondas" />
          <Picker.Item label="Ondulado com cachos" value="Ondulado com cachos" />
          <Picker.Item label="Liso grosso" value="Liso grosso" />
          <Picker.Item label="Liso fino" value="Liso fino" />
          <Picker.Item label="Outra textura" value="Outra textura" />
        </Picker>
        <TextInput
          placeholder="Outra textura"
          style={styles.input}
          onChangeText={(text) => setQuestao7(questao7.split(' + ')[0] + ' + ' + text)}
          value={questao7.split(' + ')[1]}
        />

        <Text>Você utiliza alguma ferramenta de calor no cabelo regularmente?</Text>
        <Picker
          selectedValue={questao8.split(' + ')[0]}
          onValueChange={(value) => setQuestao8(value + ' + ' + questao8.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Chapinha" value="Chapinha" />
          <Picker.Item label="Secador" value="Secador" />
          <Picker.Item label="BabyLiss" value="BabyLiss" />
          <Picker.Item label="Outra ferramenta" value="Outra ferramenta" />
        </Picker>
        <TextInput
          placeholder="Outra ferramenta"
          style={styles.input}
          onChangeText={(text) => setQuestao8(questao8.split(' + ')[0] + ' + ' + text)}
          value={questao8.split(' + ')[1]}
        />

        <Text>Algum membro da sua família tem histórico de problemas capilares?</Text>
        <Picker
          selectedValue={questao9.split(' + ')[0]}
          onValueChange={(value) => setQuestao9(value + ' + ' + questao9.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Quais problemas?"
          style={styles.input}
          onChangeText={(text) => setQuestao9(questao9.split(' + ')[0] + ' + ' + text)}
          value={questao9.split(' + ')[1]}
        />

        <Text>Já foi diagnosticado com alguma doença do couro cabeludo, como dermatite seborreica (“Caspa”), psoríase (“Psoríase em placas”) ou alopecia (“Pelada”)?</Text>
        <Picker
          selectedValue={questao10.split(' + ')[0]}
          onValueChange={(value) => setQuestao10(value + ' + ' + questao10.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Qual diagnóstico?"
          style={styles.input}
          onChangeText={(text) => setQuestao10(questao10.split(' + ')[0] + ' + ' + text)}
          value={questao10.split(' + ')[1]}
        />

        <Text>Já fez alguma cirurgia no couro cabeludo ou teve algum tipo de lesão anteriormente?</Text>
        <Picker
          selectedValue={questao11.split(' + ')[0]}
          onValueChange={(value) => setQuestao11(value + ' + ' + questao11.split(' + ')[1])}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Sim" value="Sim" />
          <Picker.Item label="Não" value="Não" />
        </Picker>
        <TextInput
          placeholder="Qual cirurgia ou lesão?"
          style={styles.input}
          onChangeText={(text) => setQuestao11(questao11.split(' + ')[0] + ' + ' + text)}
          value={questao11.split(' + ')[1]}
        />

        <Text>Alguma outra informação relevante que você gostaria de compartilhar?</Text>
        <TextInput
          placeholder="Informação relevante"
          style={styles.input}
          onChangeText={setQuestao12}
          value={questao12}
        />

        <Button title="Cadastrar" onPress={cadastrarFichaDeAnamnese} />
      </View>
    </View>
  );
}
