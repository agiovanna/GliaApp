import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native';
import { formStyles } from '../style';

const FichaDeAnamneseSobrancelhas = () => {
  const [questao1, setQuestao1] = useState({ resposta: '', detalhes: '' });
  const [questao2, setQuestao2] = useState({ resposta: '', detalhes: '' });
  const [questao3, setQuestao3] = useState({ resposta: '', detalhes: '' });
  const [questao4, setQuestao4] = useState({ resposta: '', detalhes: '' });
  const [questao5, setQuestao5] = useState({ resposta: '', detalhes: '' });
  const [questao6, setQuestao6] = useState({ resposta: '', detalhes: '' });
  const [questao7, setQuestao7] = useState({ resposta: '', detalhes: '' });

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
    };

    setQuestao1(respostasDoBanco.questao1 || { resposta: '', detalhes: '' });
    setQuestao2(respostasDoBanco.questao2 || { resposta: '', detalhes: '' });
    setQuestao3(respostasDoBanco.questao3 || { resposta: '', detalhes: '' });
    setQuestao4(respostasDoBanco.questao4 || { resposta: '', detalhes: '' });
    setQuestao5(respostasDoBanco.questao5 || { resposta: '', detalhes: '' });
    setQuestao6(respostasDoBanco.questao6 || { resposta: '', detalhes: '' });
    setQuestao7(respostasDoBanco.questao7 || { resposta: '', detalhes: '' });
  };

  useEffect(() => {
    buscarRespostas();
  }, []);

  return (
    <View style={formStyles.container}>
      <ScrollView>
        <View style={formStyles.header}>
          <Icon name="chevron-left" size={25} color="white" style={formStyles.icon} />
          <Text style={formStyles.headerText}>Sobrancelhas</Text>
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui queda de pelos ou falhas nas sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              selectedValue={questao1.resposta}
              onValueChange={(value) => setQuestao1({ ...questao1, resposta: value })}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Qual problema?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao1({ ...questao1, detalhes: text })}
            value={questao1.detalhes}
          />
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui alergia a henna nas sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              selectedValue={questao2.resposta}
              onValueChange={(value) => setQuestao2({ ...questao2, resposta: value })}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Qual reação?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao2({ ...questao2, detalhes: text })}
            value={questao2.detalhes}
          />
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui alergia a chumbo nas sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              selectedValue={questao3.resposta}
              onValueChange={(value) => setQuestao3({ ...questao3, resposta: value })}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Qual reação?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao3({ ...questao3, detalhes: text })}
            value={questao3.detalhes}
          />
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Oleosidade da pele nas sobrancelhas:</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              selectedValue={questao4.resposta}
              onValueChange={(value) => setQuestao4({ ...questao4, resposta: value })}
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
            onChangeText={(text) => setQuestao4({ ...questao4, detalhes: text })}
            value={questao4.detalhes}
          />
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Utiliza algum produto para crescimento de pelos nas sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              selectedValue={questao5.resposta}
              onValueChange={(value) => setQuestao5({ ...questao5, resposta: value })}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Qual produto?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao5({ ...questao5, detalhes: text })}
            value={questao5.detalhes}
          />
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui hábito de coçar as sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              selectedValue={questao6.resposta}
              onValueChange={(value) => setQuestao6({ ...questao6, resposta: value })}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Com que frequência?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao6({ ...questao6, detalhes: text })}
            value={questao6.detalhes}
          />
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Realizou algum procedimento estético nas sobrancelhas?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              selectedValue={questao7.resposta}
              onValueChange={(value) => setQuestao7({ ...questao7, resposta: value })}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Qual procedimento?"
            style={formStyles.input}
            onChangeText={(text) => setQuestao7({ ...questao7, detalhes: text })}
            value={questao7.detalhes}
          />
        </View>

        <TouchableOpacity style={formStyles.button01}>
          <Text style={formStyles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FichaDeAnamneseSobrancelhas;
