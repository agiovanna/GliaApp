import React from 'react';
import {InputText, TypeProps} from './styles'
import {TextInputProps} from 'react-native';

//O tipo props é TextInputProps
type Props = TextInputProps &{
    //Definir o tipo será opcional, caso não seja definido o tipo do input, seu padrão será primary (personalização)
    type?: TypeProps;

}

//Definindo que o padrão do Input é o 'primary e pegando o resto das propriedades

export function Input({type = 'primary', ...rest}: Props) {
    return (
        <InputText type={type} {...rest}/>
        );
}
