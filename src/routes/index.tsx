import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

export function Routes() {
    return (
        <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    );
}


