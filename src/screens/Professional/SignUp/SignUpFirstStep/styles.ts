import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";
import theme from "src/theme/theme";

export const Screen = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT1,
  end: { x: 0.5, y: 0.5 },
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
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48,
  },
})`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 32px;
  align-self: flex-start;
  margin-bottom: 45px;
  font-weight: bold;
  margin-top: 25px;
  ${({ theme }) => css`
    color: ${theme.COLORS.DARKBLUE};
  `};
`;

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 100px;
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const Container = styled.View`
  width: 85%;
  height: 100%;
  align-items: center;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 25px;
  align-self: self-start;
  font-weight: 600;
  ${({ theme }) => css`
    color: ${theme.COLORS.DARKBLUE};
  `};
  margin-left: 5px;
`;
export const ContainerButton = styled.View`
  width: 50%;
  align-self: self-end;
  margin-left: 5px;
`;

export const LoginButton = styled.TouchableOpacity`
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const LoginLabel = styled.Text`
  font-size: 14px;
  font-weight: 600;
  ${({ theme }) => css`
    color: ${theme.COLORS.DARKBLUE};
  `};
`;
