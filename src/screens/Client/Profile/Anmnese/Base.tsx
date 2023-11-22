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

     
    } catch (error) {
      console.log('Houve um erro: ' + error);
    }
  }

  return (
    <View style={formStyles.container}>
      <ScrollView>
        <View style={formStyles.header}>
          <Icon name="chevron-left" size={25} color="white" style={formStyles.icon} />
          <Text style={formStyles.headerText}>Base</Text>
        </View>

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

        <TouchableOpacity style={formStyles.button01} onPress={handleCadastrar}>
          <Text style={formStyles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FichaAnamneseBase;
