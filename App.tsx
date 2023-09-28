import {CreateProfessional}  from './src/screens/Professional/CreateProfessional/index';
import { Text, View } from 'react-native';
import theme from './src/theme/theme';
import { ThemeProvider } from 'styled-components/native';
import { SignIn } from './src/screens/SignIn/index';

export default function App() {
  return (

    <ThemeProvider theme={theme}>
      <CreateProfessional/> 
      {/*<SignIn/>*/}
    </ThemeProvider>

  );
}

