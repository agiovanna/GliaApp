import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {RiLockPasswordLine} from 'react-icons/ri';
//Para a tela subir junto com o teclado
import {KeyboardAvoidingView, Platform} from 'react-native';
import { 
    Form,
    Screen,
    Content,
    Title,
    Logo, 
    ForgotPasswordButton,
    ForgotPasswordLabel,
    CreateAcountButton,
    CreateAcountLabel
} from './styles';
import logoImg from '../../assets/img/white-icon.png';
import {Input} from '../../../components/Input';
import { Button } from '../../../components/Button';

import {LuUser2 } from "react-icons/lu";
import {HiOutlineIdentification} from "react-icons/hi2";
import {RxCalendar} from "react-icons/rx";
import {MdOutlineMail} from "react-icons/md";
/*import WhiteIcon from '../../../assets/img/white-icon.png';*/



export function CreateProfessional(){
    return(
   
        <Screen>
            <Form>
                
                <Input> </Input>
            </Form>
        </Screen>
        
    );
}
