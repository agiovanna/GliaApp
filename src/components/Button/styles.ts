import styled  from "styled-components/native";
import {RectButton} from 'react-native-gesture-handler';
import theme from "src/theme/theme";

export type TypeProps = 'primary' | 'secondary';

type ButtonProps = {
    type? : TypeProps;
}

export const ButtonT = styled(RectButton)<ButtonProps>`
    flex: 1;
    max-height: 56px;
    min-height: 56px;
    border-radius: 12px;
    justify-content: center;
    width: 95%;
    align-items: center;
    margin-top: 24px;
    
    background-color: ${({theme, type}) => type === 'primary' ? theme.COLORS.DARKBLUE : theme.COLORS.YELLOW};
`;

export const Title = styled.Text`
    font-size: 14px;
    color: ${theme.COLORS.WHITE};

`;

//Spiner de load para mostrar que a ação está sendo executada
export const Load = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.COLORS.PURPLE
}))``;