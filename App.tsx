import { SignUpProfessional1 } from 'src/screens/Professional/SignUp/SignUpFirstStep';
import { Text, View } from 'react-native';
import theme from './src/theme/theme';
import { ThemeProvider } from 'styled-components/native';
import { Map } from 'src/utils/Map';
import { SignIn } from './src/screens/SignIn/index';
import { Home } from 'src/screens/Client/Home/index';
import { SignUpProfessional2 } from 'src/screens/Professional/SignUp/SignUpSecondStep';
import { SignUpProfessional3 } from 'src/screens/Professional/SignUp/SignUpThirdStep';
import { SignUpProfessional4 } from 'src/screens/Professional/SignUp/SignUpFourthStep';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from 'src/routes/app.routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

