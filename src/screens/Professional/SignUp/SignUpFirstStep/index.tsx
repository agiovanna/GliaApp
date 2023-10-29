import React from "react-native";
import { useState } from "react";
//Para a tela subir junto com o teclado
import { KeyboardAvoidingView, Platform } from "react-native";
import {
  Form,
  Screen,
  Content,
  Title,
  Logo,
  Container,
  LoginButton,
  LoginLabel,
} from "./styles";
import logoImg from "src/assets/img/white-icon.png";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { isValidCPF } from 'src/utils/cpfValidation';

export function SignUpProfessional1({ navigation }: { navigation: any }) {

  const [cpf, setCpf] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleVerifyCPF = () => {
    setIsValid(isValidCPF(cpf));
  };

  function Data() {
    navigation.navigate("SignUpProfessional2", {
      name,
      birthDate,
      telephone,
      cpf,
    });
  }

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [telephone, setTelephone] = useState("");

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        >

      <Content>
        <Logo source={logoImg} />
        <Form>
          <Container>
            <Title> Criar conta </Title>

            <Input
              name="name"
              placeholder="Nome*"
              type="primary"
              onChangeText={setName}
              value={name}
            />

            <Input
              name="cpf"
              placeholder="CPF*"
              type="primary"
              keyboardType="numeric"
              onChangeText={setCpf}
              value={cpf}
            />

            <Input
              name="birthDate"
              placeholder="Data de Nascimento*"
              type="primary"
              onChangeText={setBirthDate}
              value={birthDate}
            />

            <Input
              name="telephone"
              placeholder="Número de telefone*"
              type="primary"
              keyboardType="numeric"
              onChangeText={setTelephone}
              value={telephone}
            />

            <Button title="Continuar" type="primary" onPress={Data} />
            <LoginButton>
              <LoginLabel> Já possui conta? Faça Login.</LoginLabel>
            </LoginButton>
          </Container>
        </Form>
      </Content>
      </KeyboardAvoidingView>
    </Screen>
  );
}
