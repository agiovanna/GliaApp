import React, { createContext, useState, ReactNode } from 'react';

interface CreateProfessionalProviderProps {
  children: ReactNode;
}

export const CreateProfessionalContext = createContext<any>(null);

export const CreateProfessionalProvider: React.FC<CreateProfessionalProviderProps> = ({ children }) => {
  const [user, setUser] = useState({});

  function datas(
    name: string,
    birthDate: string,
    telephone: string,
    cpf: string,
    state: string,
    city: string,
    cep: string,
    neighborhood: string,
    street: string,
    numberHome: string,
    complement: string,
    cnpj: string,
    fantasyName: string,
    email: string,
    password: string,
  ) {
    setUser({
      name: name,
      birthDate: birthDate,
      telephone: telephone,
      cpf: cpf,
      state: state,
      city: city,
      cep: cep,
      neighborhood: neighborhood,
      street: street,
      numberHome: numberHome,
      complement: complement,
      cnpj: cnpj,
      fantasyName: fantasyName,
      email: email,
      password: password
    });
  }

  return (
    <CreateProfessionalContext.Provider value={{ datas, user }}>
      {children}
    </CreateProfessionalContext.Provider>
  );
};

export default CreateProfessionalContext;
