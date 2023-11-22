// styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  profileHeader: {
    marginBottom: 16,
  },
  profileHeaderTop: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  profileHeaderTopBackground: {
    marginBottom: 10,
    width: 400,
    height: 250,
    flexShrink: 0,
    borderRadius: 0,
    borderBottomRightRadius: 80,
    backgroundColor: 'rgba(69, 25, 82, 0.96)',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
    alignItems: 'center', // Adicionado para centralizar os elementos
    justifyContent: 'center', // Adicionado para centralizar os elementos
    marginRigth: 1,
  },

  userName: {
    marginTop: 180,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Adicionado para tornar o texto visível no fundo escuro
  },
 
  anamnesisTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black', // Adicionado para garantir que o texto seja visível
    marginLeft: 20, // Ajuste o valor conforme necessário para afastar do lado esquerdo
  
  },
  button: {
    width: '88%',
    marginTop: 8,
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
    marginLeft: 20, // Adicione a margem apenas ao texto
  },

  icon1: {
    marginLeft: 200, // Espaçamento entre o ícone e o texto
  },
  icon2: {
    marginLeft: 186, // Espaçamento entre o ícone e o texto
  },
  icon3: {
    marginLeft: 198, // Espaçamento entre o ícone e o texto
  },
  icon4: {
    marginLeft: 150, // Espaçamento entre o ícone e o texto
  },
  icon5: {
    marginLeft: 195, // Espaçamento entre o ícone e o texto
  },
  icon6: {
    marginLeft: 158, // Espaçamento entre o ícone e o texto
  },
  icon7: {
    marginLeft: 320, 
    
  },
  icon8: {
    marginRight:340,
    marginTop: -150,
  },
  scrollViewContent: {
    paddingBottom: 20, // Ajuste conforme necessário
  },

  buttonText01:{
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 120,
  },

  button01:{
    width: '88%',
    marginTop: 30,
    backgroundColor: '#F1F1F1',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 25, // Ajuste o valor conforme necessário
  },

  userName01:{
    marginTop: 5,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Adicionado para garantir que o texto seja visível
    marginLeft: -10, // Ajuste o valor conforme necessário para afastar do lado esquerdo

  }
  


});


export default styles;
