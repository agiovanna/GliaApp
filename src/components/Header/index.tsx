import React from 'react-native'
import {HeaderV, HeaderLabel} from './styles';

type Props = {
    title: string;
}

export function Header({title}: Props){

    return(
        <HeaderV>
            <HeaderLabel> {title} </HeaderLabel> 
        </HeaderV>
    );
}


