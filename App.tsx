import { SignUpProfessional } from './src/screens/Professional/SignUp/SignUpFirstStep/index';
import { Text, View } from 'react-native';
import theme from './src/theme/theme';
import { ThemeProvider } from 'styled-components/native';
import { Map } from 'src/utils/Map';
import { SignIn } from './src/screens/SignIn/index';
import { CreateClient } from './src/screens/Client/Register/index';
import { Home } from 'src/screens/Client/Home/index';
import { SignUpProfessional2 } from 'src/screens/Professional/SignUp/SignUpSecondStep';
import { SignUpProfessional3 } from 'src/screens/Professional/SignUp/SignUpThirdStep';
import { SignUpProfessional4 } from 'src/screens/Professional/SignUp/SignUpFourthStep';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/*<SignIn/>*/}
      {/*<CreateClient/>*/}
      {/*<Home/>*/}
      {/*<SignUpProfessional4/>*/}
      {/*<SignUpProfessional/>*/}
      <Map />
    </ThemeProvider>

  );
}

