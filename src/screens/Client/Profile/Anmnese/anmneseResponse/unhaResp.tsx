import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import { formStyles } from '../style';
import { ScrollView } from 'react-native';

const FichaAnamneseBase = () => {
  const [questao1, setQuestao1] = useState({ resposta: '', detalhes: '' });
  const [questao2, setQuestao2] = useState({ resposta: '', detalhes: '' });
  const [questao3, setQuestao3] = useState({ resposta: '', detalhes: '' });
  const [questao4, setQuestao4] = useState({ resposta: '', detalhes: '' });
  const [questao5, setQuestao5] = useState({ resposta: '', detalhes: '' });
  const [questao6, setQuestao6] = useState({ resposta: '', detalhes: '' });
  const [questao7, setQuestao7] = useState({ resposta: '', detalhes: '' });

  // Função para buscar as respostas no banco de dados (exemplo)
  const buscarRespostas = async () => {
    try {
   
      const respostasDoBanco = {
        questao1: { resposta: 'SIM', detalhes: 'Detalhes da resposta 1' },
        questao2: { resposta: 'NÃO', detalhes: '' },
        questao3: { resposta: 'SIM', detalhes: 'Detalhes da resposta 3' },
        questao4: { resposta: 'NÃO', detalhes: '' },
        questao5: { resposta: 'SIM', detalhes: 'Detalhes da resposta 5' },
        questao6: { resposta: 'NÃO', detalhes: '' },
        questao7: { resposta: 'SIM', detalhes: 'Detalhes da resposta 7' },
      };

      setQuestao1(respostasDoBanco.questao1 || { resposta: '', detalhes: '' });
      setQuestao2(respostasDoBanco.questao2 || { resposta: '', detalhes: '' });
      setQuestao3(respostasDoBanco.questao3 || { resposta: '', detalhes: '' });
      setQuestao4(respostasDoBanco.questao4 || { resposta: '', detalhes: '' });
      setQuestao5(respostasDoBanco.questao5 || { resposta: '', detalhes: '' });
      setQuestao6(respostasDoBanco.questao6 || { resposta: '', detalhes: '' });
      setQuestao7(respostasDoBanco.questao7 || { resposta: '', detalhes: '' });
    } catch (error) {
      console.log('Erro ao buscar respostas: ', error);
    }
  };


  useEffect(() => {
    buscarRespostas();
  }, []);

  

  return (
    <View style={formStyles.container}>
      <ScrollView>
        <View style={formStyles.header}>
          <Icon name="chevron-left" size={25} color="white" style={formStyles.icon} />
          <Text style={formStyles.headerText}>Base</Text>
        </View>

        {/* Pergunta 1 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Costuma retirar o eponíquio (cutícula)?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao1.resposta}
              onValueChange={(value) => setQuestao1((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="SIM" value="SIM" />
              <Picker.Item label="NÃO" value="NÃO" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setQuestao1((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao1.detalhes}
            editable={false} // Impede a edição do TextInput
          />
        </View>

        {/* Pergunta 2 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui onicocriptose (unhas encravadas)?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao2.resposta}
              onValueChange={(value) => setQuestao2((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="SIM" value="SIM" />
              <Picker.Item label="NÃO" value="NÃO" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setQuestao2((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao2.detalhes}
            editable={false}
          />
        </View>

        {/* Pergunta 3 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui problemas de onicomicose (micoses/fungos ou outros)?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao3.resposta}
              onValueChange={(value) => setQuestao3((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="SIM" value="SIM" />
              <Picker.Item label="NÃO" value="NÃO" />
            </Picker>
          </View>
          <TextInput
            placeholder="Quais?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao3((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao3.detalhes}
            editable={false}
          />
        </View>

        {/* Pergunta 4 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>A unha apresenta problemas como: descamação, estrias, manchas ou deslocamento?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao4.resposta}
              onValueChange={(value) => setQuestao4((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="SIM" value="SIM" />
              <Picker.Item label="NÃO" value="NÃO" />
            </Picker>
          </View>
          <TextInput
            placeholder="Quais?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao4((prevValue) => ({ ...prevValue, detalhes: text }))}
            value={questao4.detalhes}
            editable={false}
          />
        </View>

        {/* Pergunta 5 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui o hábito de roer unhas?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao5.resposta}
              onValueChange={(value) => setQuestao5((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="SIM" value="SIM" />
              <Picker.Item label="NÃO" value="NÃO" />
            </Picker>
          </View>
        </View>

        {/* Pergunta 6 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Pratica esportes de impacto?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao6.resposta}
              onValueChange={(value) => setQuestao6((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="SIM" value="SIM" />
              <Picker.Item label="NÃO" value="NÃO" />
            </Picker>
          </View>
        </View>

        {/* Pergunta 7 */}
        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Costuma entrar em piscina/mar com frequência?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={questao7.resposta}
              onValueChange={(value) => setQuestao7((prevValue) => ({ ...prevValue, resposta: value }))}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="SIM" value="SIM" />
              <Picker.Item label="NÃO" value="NÃO" />
            </Picker>
          </View>
        </View>

        <TouchableOpacity style={formStyles.button01}>
          <Text style={formStyles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FichaAnamneseBase;
