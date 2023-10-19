import React from "react-native";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
//Para a tela subir junto com o teclado
import { KeyboardAvoidingView, Platform } from "react-native";
import {
  Form,
  Screen,
  Content,
  Title,
  Logo,
  Container,
  SubTitle,
  ContainerButton,
  LoginButton,
  LoginLabel,
} from "./styles";
import logoImg from "../../../../assets/img/white-icon.png";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

export function SignUpProfessional() {
  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      />

      <Content>
        <Logo source={logoImg} />
        <Form>
          <Container>
            <Title> Criar conta </Title>


            <Input name="name" placeholder="Nome*" type="primary" />

            <Input
              name="cpf"
              placeholder="CPF*"
              type="primary"
              keyboardType="numeric"
            />

            <Input
              name="dateBirth"
              placeholder="Data de Nascimento*"
              type="primary"
            />

            <Input
              name="phone"
              placeholder="Número de telefone*"
              type="primary"
              keyboardType="numeric"
            />

            <Input name="email" placeholder="Email*" type="primary" />


              <Button title="Continuar" type="primary" />
            <LoginButton>
              <LoginLabel> Já possui conta? Faça Login.</LoginLabel>
            </LoginButton>
          </Container>
        </Form>
      </Content>
    </Screen>
  );
}
