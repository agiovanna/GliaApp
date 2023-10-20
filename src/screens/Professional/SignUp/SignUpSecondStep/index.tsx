import React from "react-native";
import { Header } from "src/components/Header";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";

import {
  Screen,
  Content,
  Container,
  SubTitle
} from "./styles";

import { KeyboardAvoidingView, Platform } from "react-native";

export function SignUpProfessional2() {
  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      />
      <Header title="Endereço" />

        <Container> 

          <Input
            name="cep"
            placeholder="CEP*"
            type="primary"
            keyboardType="numeric"
          />

          <Input name="state" placeholder="Estado*" type="primary" />

          <Input name="city" placeholder="Cidade*" type="primary" />

          <Input name="neighbourhood" placeholder="Bairro*" type="primary"/>

          <Input name="street" placeholder="Rua*" type="primary" />

          <Input name="number" placeholder="Número*" type="primary" />

          <Input name="adressComplement" placeholder="Complemento" type="primary" />

            <Button title="Continuar" type="terciary"/>{" "}
        </Container>

    </Screen>
  );
}
