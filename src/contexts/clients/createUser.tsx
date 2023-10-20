import React, { createContext, useState, ReactNode } from 'react';

interface CreateClientProviderProps {
    children: ReactNode;
}

export const CreateClientContext = createContext<any>(null);

export const CreateClientProvider: React.FC<CreateClientProviderProps> = ({ children }) => {
    const [user, setUser] = useState({});

    function datas(
        name: string,
        birthDate: string,
        telephone: string,
        email: string,
        password: string,
    ) {
        setUser({
            name: name,
            birthDate: birthDate,
            telephone: telephone,
            email: email,
            password: password
        });
    }

    return (
        <CreateClientContext.Provider value={{ datas, user }}>
            {children}
        </CreateClientContext.Provider>
    );
};

export default CreateClientContext;
