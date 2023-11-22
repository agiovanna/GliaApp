import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import { formStyles } from './style';
import { ScrollView } from 'react-native';

const FichaAnamneseBase = () => {
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

  async function handleCadastrar() {
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
        questao6: questao6.split(' + ')[1],
        questao7: questao7.split(' + ')[1],
        questao8: questao8.split(' + ')[1],
        questao9: questao9.split(' + ')[1],
        questao10: questao10.split(' + ')[1],
        questao11: questao11.split(' + ')[1],
        questao12: questao12.split(' + ')[1],
      };

      //await api.post('/api/cabelo', respostasSimNao);
      //await api.post('/api/cabeloEscritas', respostasEscritas);

      // Redirecione o usuário ou execute outra ação após o cadastro bem-sucedido
      // navigation.navigate('outraRota');
    } catch (error) {
      console.log('Houve um erro: ' + error);
      // Lide com erros de cadastro, se necessário
    }
  }

  return (
    <View style={formStyles.container}>
      <ScrollView>
        <View style={formStyles.header}>
          <Icon name="chevron-left" size={25} color="white" style={formStyles.icon} />
          <Text style={formStyles.headerText}>Cabelo</Text>
        </View>

        {/* Adicione abaixo as perguntas da segunda ficha de anamnese */}
        {/* Questão 8 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Você tem algum problema de saúde que possa afetar o seu cabelo ou o tratamento capilar?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao1.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao1(value + ' + ' + (questao1.split(' + ')[1] || ''))}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Qual problema?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao1((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao1.split(' + ')[1]}
          />
        </View>

        {/* Questão 9 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Você está sob cuidados médicos ou tomando algum medicamento atualmente?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao2.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao2(value + ' + ' + (questao2.split(' + ')[1] || ''))}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Qual medicamento?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao2((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao2.split(' + ')[1]}
          />
        </View>

        {/* Questão 10 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Alguma vez teve uma reação alérgica a algum produto capilar ou corante?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao3.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao3(value + ' + ' + (questao3.split(' + ')[1] || ''))}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Qual reação?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao3((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao3.split(' + ')[1]}
          />
        </View>

        {/* Questão 11 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Já realizou algum tratamento químico no cabelo anteriormente?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao4.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao4(value + ' + ' + (questao4.split(' + ')[1] || ''))}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Qual tratamento?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao4((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao4.split(' + ')[1]}
          />
        </View>

        {/* Questão 12 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Como você classificaria a saúde do seu couro cabeludo?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao5.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao5(value + ' + ' + (questao5.split(' + ')[1] || ''))}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Normal" value="Normal" />
            <Picker.Item label="Seco" value="Seco" />
            <Picker.Item label="Oleoso" value="Oleoso" />
          </Picker>
          </View>
          <TextInput
            placeholder="Observações"
            style={formStyles.input}
            onChangeText={(text) => setQuestao5((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao5.split(' + ')[1]}
          />
        </View>

        {/* Questão 13 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Você faz uso frequente de secador, chapinha ou babyliss?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao6.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao6(value + ' + ' + (questao6.split(' + ')[1] || ''))}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Com que frequência?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao6((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao6.split(' + ')[1]}
          />
        </View>

        {/* Questão 14 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Costuma nadar em piscinas com cloro?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao7.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao7(value + ' + ' + (questao7.split(' + ')[1] || ''))}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Com que frequência?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao7((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao7.split(' + ')[1]}
          />
        </View>

        {/* Questão 15 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Você tem costume de fazer penteados presos?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao8.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao8(value + ' + ' + (questao8.split(' + ')[1] || ''))}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Com que frequência?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao8((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao8.split(' + ')[1]}
          />
        </View>

        {/* Questão 16 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Você possui algum hábito alimentar específico?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao9.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao9(value + ' + ' + (questao9.split(' + ')[1] || ''))}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Descreva o hábito"
            style={formStyles.input}
            onChangeText={(text) => setQuestao9((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao9.split(' + ')[1]}
          />
        </View>

        {/* Questão 17 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Você faz uso de suplementos vitamínicos ou minerais?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao10.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao10(value + ' + ' + (questao10.split(' + ')[1] || ''))}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Quais?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao10((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao10.split(' + ')[1]}
          />
        </View>

         {/* Questão 18 */}
         <View style={formStyles.block}>
          <Text style={formStyles.Text}>Já fez alguma cirurgia no couro cabeludo ou teve algum tipo de lesão anteriormente?</Text>
          <View style={formStyles.pickerContainer}>

          <Picker
            selectedValue={questao11.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao11(value + ' + ' + (questao11.split(' + ')[1] || ''))}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Qual cirurgia ou lesão?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao11((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao11.split(' + ')[1]}
          />
        </View>

        {/* Questão 19 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Alguma outra informação relevante que você gostaria de compartilhar?</Text>
          <TextInput
            placeholder="Informação relevante"
            style={formStyles.input}
            onChangeText={setQuestao12}
            value={questao12}
          />
        </View>

        {/* Botão de Envio */}
        <TouchableOpacity style={formStyles.button01} onPress={handleCadastrar}>
          <Text style={formStyles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FichaAnamneseBase;
