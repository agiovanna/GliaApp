import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native';
import { formStyles } from './style';

const FichaDeAnamneseSobrancelhas = () => {
  const [questao1, setQuestao1] = useState('');
  const [questao2, setQuestao2] = useState('');
  const [questao3, setQuestao3] = useState('');
  const [questao4, setQuestao4] = useState('');
  const [questao5, setQuestao5] = useState('');
  const [questao6, setQuestao6] = useState('');
  const [questao7, setQuestao7] = useState('');

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

      // Substitua 'api/sobrancelhas' pelos endpoints corretos da sua API
      //await api.post('/api/sobrancelhas', respostasSimNao);
      //await api.post('/api/sobrancelhasEscritas', respostasEscritas);

      // Redirecione o usuário ou execute outras ações após o cadastro bem-sucedido
      // navigation.navigate('outraRota');
    } catch (error) {
      console.log('Houve um erro: ' + error);
      // Lide com erros de cadastro, se necessário
    }
  }

  return (
    <View style={formStyles.container}>
      <ScrollView>
        {/* Cabeçalho (Header) */}
        <View style={formStyles.header}>
          <Icon name="chevron-left" size={25} color="white" style={formStyles.icon} />
          <Text style={formStyles.headerText}>Sobrancelhas</Text>
        </View>

        {/* Questão 1 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui queda de pelos ou falhas nas sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao1.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao1(value + ' + ' + questao1.split(' + ')[1])}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Qual problema?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao1(questao1.split(' + ')[0] + ' + ' + text)}
            value={questao1.split(' + ')[1]}
          />
        </View>

        {/* Questão 2 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui alergia a henna nas sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao2.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao2(value + ' + ' + questao2.split(' + ')[1])}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Qual reação?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao2(questao2.split(' + ')[0] + ' + ' + text)}
            value={questao2.split(' + ')[1]}
          />
        </View>

        {/* Questão 3 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui alergia a chumbo nas sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao3.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao3(value + ' + ' + questao3.split(' + ')[1])}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Qual reação?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao3(questao3.split(' + ')[0] + ' + ' + text)}
            value={questao3.split(' + ')[1]}
          />
        </View>

        {/* Questão 4 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Oleosidade da pele nas sobrancelhas:</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao4.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao4(value + ' + ' + questao4.split(' + ')[1])}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="MUITA" value="MUITA" />
            <Picker.Item label="MÉDIA" value="MÉDIA" />
            <Picker.Item label="POUCA" value="POUCA" />
          </Picker>
          </View>
          <TextInput
            placeholder="Outra frequência"
            style={formStyles.input}
            onChangeText={(text) => setQuestao4(questao4.split(' + ')[0] + ' + ' + text)}
            value={questao4.split(' + ')[1]}
          />
        </View>

        {/* Questão 5 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Utiliza algum produto para crescimento de pelos nas sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao5.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao5(value + ' + ' + questao5.split(' + ')[1])}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Qual produto?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao5(questao5.split(' + ')[0] + ' + ' + text)}
            value={questao5.split(' + ')[1]}
          />
        </View>

        {/* Questão 6 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui hábito de coçar as sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao6.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao6(value + ' + ' + questao6.split(' + ')[1])}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Com que frequência?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao6(questao6.split(' + ')[0] + ' + ' + text)}
            value={questao6.split(' + ')[1]}
          />
        </View>

        {/* Questão 7 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Realizou algum procedimento estético nas sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
          <Picker
            selectedValue={questao7.split(' + ')[0]}
            onValueChange={(value: string) => setQuestao7(value + ' + ' + questao7.split(' + ')[1])}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Sim" value="Sim" />
            <Picker.Item label="Não" value="Não" />
          </Picker>
          </View>
          <TextInput
            placeholder="Qual procedimento?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao7(questao7.split(' + ')[0] + ' + ' + text)}
            value={questao7.split(' + ')[1]}
          />
        </View>

        <TouchableOpacity style={formStyles.button01} onPress={handleCadastrar}>
          <Text style={formStyles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FichaDeAnamneseSobrancelhas;
