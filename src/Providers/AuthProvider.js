import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthProvider(props) {
    const [alreadyLogin,setAlreadylogin] = useState(true);
    const [loading,setLoading] = useState(false);

    return (
        <AuthContext.Provider value={{
            alreadyLogin,setAlreadylogin,
            loading,setLoading,
            signUp : async () => {

            },
            signIn : async () => {

            }
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;