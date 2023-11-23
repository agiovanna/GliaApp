import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native';
import { formStyles } from './style';

const FichaDeAnamneseMaquiagem = () => {
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
  const [questao13, setQuestao13] = useState('');
  const [questao14, setQuestao14] = useState('');
  const [questao15, setQuestao15] = useState('');

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
        questao13: questao13.split(' + ')[0],
        questao14: questao14.split(' + ')[0],
        questao15: questao15.split(' + ')[0],
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
        questao13: questao13.split(' + ')[1],
        questao14: questao14.split(' + ')[1],
        questao15: questao15.split(' + ')[1],
      };

      // Aqui você pode fazer as requisições para a API com as respostas

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
        {/* Cabeçalho (Header) */}
        <View style={formStyles.header}>
          <Icon name="chevron-left" size={25} color="white" style={formStyles.icon} />
          <Text style={formStyles.headerText}>Maquiagem</Text>
        </View>

        {/* Questão 1 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Está gestante ou amamentando?</Text>
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
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setQuestao1((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao1.split(' + ')[1]}
          />
        </View>

        {/* Questão 2 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui diabetes?</Text>
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
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setQuestao2((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao2.split(' + ')[1]}
          />
        </View>

        {/* Questão 3 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Faz o uso de algum medicamento?</Text>
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
            placeholder="Quais medicamentos?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao3((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao3.split(' + ')[1]}
          />
        </View>

        {/* Questão 4 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui alergia a algum tipo de cosmético ou algum outro componente?</Text>
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
            placeholder="Quais alergias?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao4((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao4.split(' + ')[1]}
          />
        </View>

        {/* Questão 5 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui epilepsia ou convulsões?</Text>
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
        </View>

        {/* Questão 6 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>É hemofílico?</Text>
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
        </View>

        {/* Questão 7 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui hipertensão?</Text>
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
        </View>

        {/* Questão 8 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Teve algum tipo de reação alérgica a produtos de beleza ou cosméticos?</Text>
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
            placeholder="Quais reações?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao8((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao8.split(' + ')[1]}
          />
        </View>

        {/* Questão 9 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Tem histórico de queloides ou cicatrizes hipertróficas?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao9.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao9(value + ' + ' + (questao9.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setQuestao9((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao9.split(' + ')[1]}
          />
        </View>

        {/* Questão 10 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Já fez algum procedimento estético facial anteriormente?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao10.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao10(value + ' + ' + (questao10.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Quais procedimentos?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao10((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao10.split(' + ')[1]}
          />
        </View>

        {/* Questão 11 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Usa ácidos ou faz algum tipo de tratamento facial?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao11.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao11(value + ' + ' + (questao11.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setQuestao11((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao11.split(' + ')[1]}
          />
        </View>

        {/* Questão 12 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Está utilizando ácidos ou realizando algum tratamento facial no momento?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao12.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao12(value + ' + ' + (questao12.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setQuestao12((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao12.split(' + ')[1]}
          />
        </View>

        {/* Questão 13 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Teve algum problema dermatológico no último mês?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao13.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao13(value + ' + ' + (questao13.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setQuestao13((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao13.split(' + ')[1]}
          />
        </View>

        {/* Questão 14 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Está com a imunidade baixa?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao14.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao14(value + ' + ' + (questao14.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setQuestao14((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao14.split(' + ')[1]}
          />
        </View>

        {/* Questão 15 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Já teve problemas de coagulação?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao15.split(' + ')[0]}
              onValueChange={(value: string) => setQuestao15(value + ' + ' + (questao15.split(' + ')[1] || ''))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setQuestao15((prevValue) => prevValue.split(' + ')[0] + ' + ' + text)}
            value={questao15.split(' + ')[1]}
          />
        </View>

        {/* Botão Continuar */}
        <TouchableOpacity style={formStyles.button01} onPress={handleCadastrar}>
          <Text style={formStyles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FichaDeAnamneseMaquiagem;
