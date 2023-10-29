import React, { useState } from "react";
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
import { isValidCPF } from "src/utils/cpfValidation";

export function SignUpClient1({ navigation }: { navigation: any }) {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [telephone, setTelephone] = useState("");
  const [cpf, setCpf] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleVerifyCPF = () => {
    setIsValid(isValidCPF(cpf));
  };

  function Data() {
    navigation.navigate("clientUser", {
      name,
      birthDate,
      telephone,
    });
  }

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <Content>
          <Logo source={logoImg} />
          <Form>
            <Container>
              <Title> Criar conta </Title>
              <Input placeholder="Nome*" type="primary" name="name" />
              <Input
                placeholder="CPF*"
                type="primary"
                name="cpf"
                keyboardType="numeric"
                onChangeText={setCpf}
                value={cpf}
              />
              <Input
                placeholder="Data de Nascimento*"
                type="primary"
                name="birthDate"
                onChangeText={setBirthDate}
                value={birthDate}
              />
              <Input
                placeholder="Número de telefone*"
                type="primary"
                name="telephone"
                onChangeText={setTelephone}
                value={telephone}
              />

              <Button
                title="Continuar"
                type="primary"
                onPress={Data}
              />
              <LoginButton>
                <LoginLabel> Já possui conta? Clique aqui.</LoginLabel>
              </LoginButton>
            </Container>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    </Screen>
  );
}
