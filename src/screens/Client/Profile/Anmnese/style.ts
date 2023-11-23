import { StyleSheet } from 'react-native';

export const formStyles = StyleSheet.create({
  container: {
    flex: 5,
    padding: 0,
  },
  header: {
    marginBottom: 10,
    width: 390,
    height: 100,
    flexShrink: 0,
    borderRadius: 0,
    borderBottomRightRadius: 50,
    backgroundColor: 'rgba(69, 25, 82, 0.96)',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center', // Adicionado para centralizar os elementos
    justifyContent: 'center', // Adicionado para centralizar os elementos
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: -10, // Adicionando espaçamento na parte superior do texto
  },
  block: {
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    marginTop: 20,
    
  },
  input: {
    height: 40,
    borderColor: 'purple',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 12,
    marginTop: 20,
    width: 350,
    marginLeft: 20,
    
  },
  picker: {
    height: 40,
    borderColor: 'white',
    borderWidth: 10,
    borderRadius: 100,
    marginTop: 0,
    width: 350,
    marginLeft: 0,
    backgroundColor: 'white',
  },
  
  button01: {
    width: '88%',
    height: 60,
    marginTop: 10, // Ajuste o valor conforme necessário para levantar o botão
    backgroundColor: '#F1F1F1',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 25, // Ajuste o valor conforme necessário
  },

  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 115,
  },
  icon:{
    marginRight: 350, // Ajuste o valor conforme necessário
    marginTop: 8,
  },

  Text:{
    fontSize: 18,
    marginTop: 5,
    marginLeft: 25,
  }, 
  pickerContainer: {
    borderRadius: 12, // ou o valor desejado
    overflow: 'hidden', // para garantir que as bordas arredondadas sejam aplicadas
    marginTop: 8,
    width: 350,
    height: 50,
    marginLeft: 20,
    backgroundColor: 'white',
    borderBlockColor: 'purple',
    borderWidth: 1,
  },
  

 
  
});
