import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import { formStyles } from '../style';
import { ScrollView } from 'react-native';

const FichaDeAnamneseMaquiagem = () => {
  const [respostas, setRespostas] = useState({
    questao1: { resposta: '', detalhes: '' },
    questao2: { resposta: '', detalhes: '' },
    questao3: { resposta: '', detalhes: '' },
    questao4: { resposta: '', detalhes: '' },
    questao5: { resposta: '', detalhes: '' },
    questao6: { resposta: '', detalhes: '' },
    questao7: { resposta: '', detalhes: '' },
    questao8: { resposta: '', detalhes: '' },
    questao9: { resposta: '', detalhes: '' },
    questao10: { resposta: '', detalhes: '' },
    questao11: { resposta: '', detalhes: '' },
    questao12: { resposta: '', detalhes: '' },
    questao13: { resposta: '', detalhes: '' },
    questao14: { resposta: '', detalhes: '' },
    questao15: { resposta: '', detalhes: '' },
  });

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
      questao9: { resposta: 'Não', detalhes: '' },
      questao10: { resposta: 'Sim', detalhes: 'Detalhes da resposta 10' },
      questao11: { resposta: 'Não', detalhes: '' },
      questao12: { resposta: 'Sim', detalhes: 'Detalhes da resposta 12' },
      questao13: { resposta: 'Não', detalhes: '' },
      questao14: { resposta: 'Sim', detalhes: 'Detalhes da resposta 14' },
      questao15: { resposta: 'Não', detalhes: '' },
    };

    setRespostas(respostasDoBanco);
  };

 
  useEffect(() => {
    buscarRespostas();
  }, []);

 
  return (
    <View style={formStyles.container}>
      <ScrollView>
        <View style={formStyles.header}>
          <Icon name="chevron-left" size={25} color="white" style={formStyles.icon} />
          <Text style={formStyles.headerText}>Maquiagem</Text>
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Está gestante ou amamentando?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={respostas.questao1.resposta}
              enabled={false} // Desabilita a interação com o Picker
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao1: { ...prev.questao1, detalhes: text } }))}
            value={respostas.questao1.detalhes}
            editable={false} // Impede a edição do TextInput
          />
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Possui diabetes?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={respostas.questao2.resposta}
              enabled={false}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao2: { ...prev.questao2, detalhes: text } }))}
            value={respostas.questao2.detalhes}
            editable={false}
          />
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Já teve reação alérgica a algum produto de maquiagem?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={respostas.questao3.resposta}
              enabled={false}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao3: { ...prev.questao3, detalhes: text } }))}
            value={respostas.questao3.detalhes}
            editable={false}
          />
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Tem costume de usar maquiagem diariamente?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={respostas.questao4.resposta}
              enabled={false}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao4: { ...prev.questao4, detalhes: text } }))}
            value={respostas.questao4.detalhes}
            editable={false}
          />
          <Text style={formStyles.Text}>Usa maquiagem à prova d'água com frequência?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={respostas.questao5.resposta}
              enabled={false}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao5: { ...prev.questao5, detalhes: text } }))}
            value={respostas.questao5.detalhes}
            editable={false}
          />
        </View>

        <View style={formStyles.block}>
          <Text style={formStyles.Text}>Realiza procedimentos estéticos faciais regularmente?</Text>
          <View style={formStyles.pickerContainer}>
            <Picker
              style={formStyles.picker}
              selectedValue={respostas.questao6.resposta}
              enabled={false}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="Sim" />
              <Picker.Item label="Não" value="Não" />
            </Picker>
          </View>
          <TextInput
            placeholder="Detalhes (se necessário)"
            style={formStyles.input}
            onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao6: { ...prev.questao6, detalhes: text } }))}
            value={respostas.questao6.detalhes}
            editable={false}
          />
          <View style={formStyles.block}>
            <Text style={formStyles.Text}>Segue uma rotina de cuidados com a pele?</Text>
            <View style={formStyles.pickerContainer}>
              <Picker
                style={formStyles.picker}
                selectedValue={respostas.questao7.resposta}
                enabled={false}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Sim" value="Sim" />
                <Picker.Item label="Não" value="Não" />
              </Picker>
            </View>
            <TextInput
              placeholder="Detalhes (se necessário)"
              style={formStyles.input}
              onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao7: { ...prev.questao7, detalhes: text } }))}
              value={respostas.questao7.detalhes}
              editable={false}
            />
          </View>

          <View style={formStyles.block}>
            <Text style={formStyles.Text}>Costuma usar protetor solar diariamente?</Text>
            <View style={formStyles.pickerContainer}>
              <Picker
                style={formStyles.picker}
                selectedValue={respostas.questao8.resposta}
                enabled={false}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Sim" value="Sim" />
                <Picker.Item label="Não" value="Não" />
              </Picker>
            </View>
            <TextInput
              placeholder="Detalhes (se necessário)"
              style={formStyles.input}
              onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao8: { ...prev.questao8, detalhes: text } }))}
              value={respostas.questao8.detalhes}
              editable={false}
            />
            <Text style={formStyles.Text}>Você pratica atividades físicas regularmente?</Text>
            <View style={formStyles.pickerContainer}>
              <Picker
                style={formStyles.picker}
                selectedValue={respostas.questao9.resposta}
                enabled={false}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Sim" value="Sim" />
                <Picker.Item label="Não" value="Não" />
              </Picker>
            </View>
            <TextInput
              placeholder="Detalhes (se necessário)"
              style={formStyles.input}
              onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao9: { ...prev.questao9, detalhes: text } }))}
              value={respostas.questao9.detalhes}
              editable={false}
            />
          </View>

          <View style={formStyles.block}>
            <Text style={formStyles.Text}>Você consome bebidas alcoólicas com frequência?</Text>
            <View style={formStyles.pickerContainer}>
              <Picker
                style={formStyles.picker}
                selectedValue={respostas.questao10.resposta}
                enabled={false}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Sim" value="Sim" />
                <Picker.Item label="Não" value="Não" />
              </Picker>
            </View>
            <TextInput
              placeholder="Detalhes (se necessário)"
              style={formStyles.input}
              onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao10: { ...prev.questao10, detalhes: text } }))}
              value={respostas.questao10.detalhes}
              editable={false}
            />
            <Text style={formStyles.Text}>Você tem algum histórico familiar de doenças cardíacas?</Text>
            <View style={formStyles.pickerContainer}>
              <Picker
                style={formStyles.picker}
                selectedValue={respostas.questao11.resposta}
                enabled={false}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Sim" value="Sim" />
                <Picker.Item label="Não" value="Não" />
              </Picker>
            </View>
            <TextInput
              placeholder="Detalhes (se necessário)"
              style={formStyles.input}
              onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao11: { ...prev.questao11, detalhes: text } }))}
              value={respostas.questao11.detalhes}
              editable={false}
            />
          </View>

          <View style={formStyles.block}>
            <Text style={formStyles.Text}>Você fuma atualmente?</Text>
            <View style={formStyles.pickerContainer}>
              <Picker
                style={formStyles.picker}
                selectedValue={respostas.questao12.resposta}
                enabled={false}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Sim" value="Sim" />
                <Picker.Item label="Não" value="Não" />
              </Picker>
            </View>
            <TextInput
              placeholder="Detalhes (se necessário)"
              style={formStyles.input}
              onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao12: { ...prev.questao12, detalhes: text } }))}
              value={respostas.questao12.detalhes}
              editable={false}
            />
          </View>

          <View style={formStyles.block}>
            <Text style={formStyles.Text}>Você já foi diagnosticado com pressão alta?</Text>
            <View style={formStyles.pickerContainer}>
              <Picker
                style={formStyles.picker}
                selectedValue={respostas.questao13.resposta}
                enabled={false}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Sim" value="Sim" />
                <Picker.Item label="Não" value="Não" />
              </Picker>
            </View>
            <TextInput
              placeholder="Detalhes (se necessário)"
              style={formStyles.input}
              onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao13: { ...prev.questao13, detalhes: text } }))}
              value={respostas.questao13.detalhes}
              editable={false}
            />
          </View>

          <View style={formStyles.block}>
            <Text style={formStyles.Text}>Você costuma ter uma alimentação balanceada?</Text>
            <View style={formStyles.pickerContainer}>
              <Picker
                style={formStyles.picker}
                selectedValue={respostas.questao14.resposta}
                enabled={false}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Sim" value="Sim" />
                <Picker.Item label="Não" value="Não" />
              </Picker>
            </View>
            <TextInput
              placeholder="Detalhes (se necessário)"
              style={formStyles.input}
              onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao14: { ...prev.questao14, detalhes: text } }))}
              value={respostas.questao14.detalhes}
              editable={false}
            />
          </View>

          <View style={formStyles.block}>
            <Text style={formStyles.Text}>Você costuma sentir estresse no seu dia a dia?</Text>
            <View style={formStyles.pickerContainer}>
              <Picker
                style={formStyles.picker}
                selectedValue={respostas.questao15.resposta}
                enabled={false}
              >
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Sim" value="Sim" />
                <Picker.Item label="Não" value="Não" />
              </Picker>
            </View>
            <TextInput
              placeholder="Detalhes (se necessário)"
              style={formStyles.input}
              onChangeText={(text) => setRespostas((prev) => ({ ...prev, questao15: { ...prev.questao15, detalhes: text } }))}
              value={respostas.questao15.detalhes}
              editable={false}
            />
          </View>


        </View>




        <TouchableOpacity style={formStyles.button01}>
          <Text style={formStyles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FichaDeAnamneseMaquiagem;
