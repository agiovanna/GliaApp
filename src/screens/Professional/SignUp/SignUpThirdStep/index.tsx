import React from "react-native";
import { Header } from "src/components/Header";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { CheckBoxComponent } from "src/components/CheckBox";

import {
  Screen,
  Content,
  Container,
  SubTitle
} from "./styles";

import { KeyboardAvoidingView, Platform } from "react-native";

export function SignUpProfessional3() {
  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      />
      <Header title="Seu negócio" />

        <Container> 

          <Input
            name="cnpj"
            placeholder="CNPJ*"
            type="primary"
          />

          <Input name="FantasyName" placeholder="NomeFantasia*" type="primary" />
          <CheckBoxComponent title="Não possuo um negócio/empresa"/>

            <Button title="Continuar" type="terciary"/>{" "}
        </Container>

    </Screen>
  );
}
