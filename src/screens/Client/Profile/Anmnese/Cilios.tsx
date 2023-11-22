import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import { formStyles } from './style';
import { ScrollView } from 'react-native';

const FichaAnamneseCilios = () => {
  const [questao1, setQuestao1] = useState('');
  const [questao2, setQuestao2] = useState('');
  const [questao3, setQuestao3] = useState('');
  const [questao4, setQuestao4] = useState('');
  const [questao5, setQuestao5] = useState('');
  const [questao6, setQuestao6] = useState('');
  const [questao7, setQuestao7] = useState('');
  const [questao8, setQuestao8] = useState('');

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
          <Text style={formStyles.headerText}>Cílios</Text>
        </View>

        {/* Questão 1 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Realizou algum procedimento nos cílios recentemente?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao1.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao1(value + ' + ' + (questao1.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Quais procedimentos?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao1((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao1.split(' + ')[1]}
          />
        </View>

        {/* Questão 2 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Está em tratamento oncológico?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao2.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao2(value + ' + ' + (questao2.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Tratamento oncológico?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao2((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao2.split(' + ')[1]}
          />
        </View>

        {/* Questão 3 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Teve alguma reação alérgica a produtos para cílios?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao3.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao3(value + ' + ' + (questao3.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes da reação alérgica"
            style={formStyles.input}
            onChangeText={(text) => setQuestao3((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao3.split(' + ')[1]}
          />
        </View>

        {/* Questão 4 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Usa algum tipo de extensão de cílios?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao4.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao4(value + ' + ' + (questao4.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes da extensão de cílios"
            style={formStyles.input}
            onChangeText={(text) => setQuestao4((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao4.split(' + ')[1]}
          />
        </View>

        {/* Questão 5 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Teve alguma queda de cílios recente?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao5.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao5(value + ' + ' + (questao5.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Causas da queda de cílios"
            style={formStyles.input}
            onChangeText={(text) => setQuestao5((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao5.split(' + ')[1]}
          />
        </View>

        {/* Questão 6 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Utiliza algum tipo de cola para cílios?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao6.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao6(value + ' + ' + (questao6.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes sobre a cola utilizada"
            style={formStyles.input}
            onChangeText={(text) => setQuestao6((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao6.split(' + ')[1]}
          />
        </View>

        {/* Questão 7 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Teve alguma inflamação nos cílios recentemente?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao7.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao7(value + ' + ' + (questao7.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes da inflamação"
            style={formStyles.input}
            onChangeText={(text) => setQuestao7((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao7.split(' + ')[1]}
          />
        </View>

        {/* Questão 8 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Utiliza removedor de maquiagem nos cílios?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao8.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao8(value + ' + ' + (questao8.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes sobre o removedor de maquiagem"
            style={formStyles.input}
            onChangeText={(text) => setQuestao8((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao8.split(' + ')[1]}
          />
        </View>

        <TouchableOpacity style={formStyles.button01} onPress={handleCadastrar}>
          <Text style={formStyles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FichaAnamneseCilios;
