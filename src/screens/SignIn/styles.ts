import styled, {css} from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import theme from "src/theme/theme";

export const Screen = styled(LinearGradient).attrs(({theme}) =>({
    colors: theme.COLORS.GRADIENT1,
    end: {x: 0.5, y: 0.5}
}))`
    flex: 1;
    justify-content: center;
`;

export const Form = styled.View`
    background-color: white;
    height: 100%;
    align-items: center;
    width: 100%;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator : false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + 48
    },

})`
    width: 100%;
`;

export const Title = styled.Text` 
    font-size: 32px;
    align-self: self-start;
    margin-bottom: 24px ;
    font-weight: bold;
    margin-top: 32px;
    margin-left: 25px;
    ${({theme}) => css`
        color: ${theme.COLORS.DARKBLUE};
    `};
`;

export const Logo =  styled.Image.attrs({
    resizeMode: 'contain'
})`
    height: 120px;
    margin-top: 45px;
    margin-bottom: 32px
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
    margin-bottom: 10px;
    margin-top: 8px;
    align-self: self-end;
    margin-right: 10px;
` ;

export const ForgotPasswordLabel = styled.Text`
    font-size: 14px;
    font-weight: 600;
    ${({theme}) => css`
    color: ${theme.COLORS.DARKBLUE};
    `};
`;

export const CreateAcountLabel = styled.Text`
    font-size: 14px;
    font-weight: 600;
    margin-top: 25px;
    ${({theme}) => css`
    color: ${theme.COLORS.DARKBLUE};
    `};
`;

export const CreateAcountButton = styled.TouchableOpacity`
    margin-bottom: 10px;
    margin-top: 20px;
` ;

export const Container = styled.View`
    width: 85%;
`;