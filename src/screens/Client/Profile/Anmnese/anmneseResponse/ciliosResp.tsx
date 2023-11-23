import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import { formStyles } from '../style';
import { ScrollView } from 'react-native';

const FichaAnamneseCilios = () => {
  const [questao1, setQuestao1] = useState({ resposta: '', detalhes: '' });
  const [questao2, setQuestao2] = useState({ resposta: '', detalhes: '' });
  const [questao3, setQuestao3] = useState({ resposta: '', detalhes: '' });
  const [questao4, setQuestao4] = useState({ resposta: '', detalhes: '' });
  const [questao5, setQuestao5] = useState({ resposta: '', detalhes: '' });
  const [questao6, setQuestao6] = useState({ resposta: '', detalhes: '' });
  const [questao7, setQuestao7] = useState({ resposta: '', detalhes: '' });
  const [questao8, setQuestao8] = useState({ resposta: '', detalhes: '' });

  // Função para buscar as respostas no banco de dados (exemplo)
  const buscarRespostas = async () => {

    const respostasDoBanco = {
      questao1: { resposta: 'Sim', detalhes: 'Detalhes da resposta 1' },
      questao2: { resposta: 'Não', detalhes: '' },
      questao3: { resposta: 'Sim', detalhes: 'Detalhes da resposta 3' },
      questao4: { resposta: 'Não', detalhes: '' },
      questao5: { resposta: 'Sim', detalhes: 'Detalhes da resposta 5' },
      questao6: { resposta: 'Não', detalhes: '' },
      questao7: { resposta: 'Sim', detalhes: 'Detalhes da resposta 7' },
      questao8: { resposta: 'Sim', detalhes: 'Detalhes da resposta 8' },
    };

    setQuestao1(respostasDoBanco.questao1 || { resposta: '', detalhes: '' });
    setQuestao2(respostasDoBanco.questao2 || { resposta: '', detalhes: '' });
    setQuestao3(respostasDoBanco.questao3 || { resposta: '', detalhes: '' });
    setQuestao4(respostasDoBanco.questao4 || { resposta: '', detalhes: '' });
    setQuestao5(respostasDoBanco.questao5 || { resposta: '', detalhes: '' });
    setQuestao6(respostasDoBanco.questao6 || { resposta: '', detalhes: '' });
    setQuestao7(respostasDoBanco.questao7 || { resposta: '', detalhes: '' });
    setQuestao8(respostasDoBanco.questao8 || { resposta: '', detalhes: '' });
  };

  useEffect(() => {
    buscarRespostas();
  }, []);



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
              selectedValue={questao1.resposta}
              onValueChange={(value) => setQuestao1((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Quais procedimentos?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao1((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao1.detalhes}
          />
        </View>

        {/* Questão 2 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Está em tratamento oncológico?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao2.resposta}
              onValueChange={(value) => setQuestao2((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Tratamento oncológico?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao2((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao2.detalhes}
          />
        </View>

        {/* Questão 3 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Teve alguma reação alérgica a produtos para cílios?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao3.resposta}
              onValueChange={(value) => setQuestao3((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes da reação alérgica"
            style={formStyles.input}
            onChangeText={(text) => setQuestao3((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao3.detalhes}
          />
        </View>

        {/* Questão 4 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Usa algum tipo de extensão de cílios?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao4.resposta}
              onValueChange={(value) => setQuestao4((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes da extensão de cílios"
            style={formStyles.input}
            onChangeText={(text) => setQuestao4((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao4.detalhes}
          />
        </View>

        {/* Questão 5 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Teve alguma queda de cílios recente?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao5.resposta}
              onValueChange={(value) => setQuestao5((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Causas da queda de cílios"
            style={formStyles.input}
            onChangeText={(text) => setQuestao5((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao5.detalhes}
          />
        </View>

        {/* Questão 6 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Utiliza algum tipo de cola para cílios?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao6.resposta}
              onValueChange={(value) => setQuestao6((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes sobre a cola utilizada"
            style={formStyles.input}
            onChangeText={(text) => setQuestao6((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao6.detalhes}
          />
        </View>

        {/* Questão 7 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Teve alguma inflamação nos cílios recentemente?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao7.resposta}
              onValueChange={(value) => setQuestao7((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes da inflamação"
            style={formStyles.input}
            onChangeText={(text) => setQuestao7((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao7.detalhes}
          />
        </View>

        {/* Questão 8 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Utiliza removedor de maquiagem nos cílios?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao8.resposta}
              onValueChange={(value) => setQuestao8((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes sobre o removedor de maquiagem"
            style={formStyles.input}
            onChangeText={(text) => setQuestao8((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao8.detalhes}
          />
        </View>

        <TouchableOpacity style={formStyles.button01}>
          <Text style={formStyles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FichaAnamneseCilios;
