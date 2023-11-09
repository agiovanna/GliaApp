import React from "react-native";
import { Header } from "src/components/Header";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { CheckBoxComponent } from "src/components/CheckBox";
import { useState } from "react";

import { Screen, Content, Container, SubTitle } from "./styles";

import { KeyboardAvoidingView, Platform } from "react-native";

export function SignUpProfessional3({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [cnpj, setCnpj] = useState("");
  const [fantasyName, setFantasyName] = useState("");

  const {
    name,
    birthDate,
    telephone,
    cpf,
    state,
    city,
    cep,
    neighborhood,
    street,
    numberHome,
    complement,
  } = route.params;

  function DataBusiness() {
    navigation.navigate("SignUpProfessional4", {
      name,
      birthDate,
      telephone,
      cpf,
      state,
      city,
      cep,
      neighborhood,
      street,
      numberHome,
      complement,
      cnpj,
      fantasyName,
    });
  }

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
          onChangeText={setCnpj}
          value={cnpj}
        />
        <Input
          name="FantasyName"
          placeholder="NomeFantasia*"
          type="primary"
          onChangeText={setFantasyName}
          value={fantasyName}
        />
        <CheckBoxComponent title="Não possuo um negócio/empresa" />
        <Button title="Continuar" type="terciary" onPress={DataBusiness} />
      </Container>
    </Screen>
  );
}
