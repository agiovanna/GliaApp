import React from "react-native";
import { Header } from "src/components/Header";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { useState } from "react";

import { Screen, Content, Container, SubTitle } from "./styles";

import { KeyboardAvoidingView, Platform } from "react-native";

export function SignUpProfessional2({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { name, birthDate, telephone, cpf } = route.params;

  function DataAdress() {
    navigation.navigate("SignUpProfessional3", {
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
    });
  }

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [cep, setCep] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [numberHome, setNumberHome] = useState("");
  const [complement, setComplement] = useState("");

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
          onChangeText={setCep}
          value={cep}
        />
        <Input
          name="state"
          placeholder="Estado*"
          type="primary"
          onChangeText={setState}
          value={state}
        />
        <Input
          name="city"
          placeholder="Cidade*"
          type="primary"
          onChangeText={setCity}
          value={city}
        />
        <Input
          name="neighborhood"
          placeholder="Bairro*"
          type="primary"
          onChangeText={setNeighborhood}
          value={neighborhood}
        />
        <Input
          name="street"
          placeholder="Rua*"
          type="primary"
          onChangeText={setStreet}
          value={street}
        />
        <Input
          name="number"
          placeholder="Número*"
          type="primary"
          onChangeText={setNumberHome}
          value={numberHome}
        />
        <Input
          name="adressComplement"
          placeholder="Complemento"
          type="primary"
          onChangeText={setComplement}
          value={complement}
        />
        <Button title="Continuar" type="terciary" onPress={DataAdress} />{" "}
      </Container>
    </Screen>
  );
}
