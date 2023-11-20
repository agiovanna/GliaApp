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
    height: 300,
    flexShrink: 0,
    borderRadius: 0,
    borderBottomRightRadius: 80,
    backgroundColor: 'rgba(69, 25, 82, 0.96)',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRigth: 1,
  },

  userName: {
    marginTop: 180,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', 
  },
 
  anamnesisTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black', 
    marginLeft: 20, 
  
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
    marginLeft: 25, 
  },

  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20, 
  },

  icon1: {
    marginLeft: 200, 
  },
  icon2: {
    marginLeft: 186, 
  },
  icon3: {
    marginLeft: 198, 
  },
  icon4: {
    marginLeft: 150, 
  },
  icon5: {
    marginLeft: 195, 
  },
  icon6: {
    marginLeft: 158, 
  },
  icon7: {
    marginLeft: 320, 
  },
  scrollViewContent: {
    paddingBottom: 20,
 },

});


export default styles;
