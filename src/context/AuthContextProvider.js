import React, { useState, useEffect, createContext } from 'react';
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";


export const authContext = createContext();

const AuthContextProvider = ({children}) => {
    let [loading, setLoading] = useState(true);
    let [user, setUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            if (user) {navigate("/chats")};
        }

        )
    },[user, navigate])
    return (
        <div>
            <authContext.Provider value={user}>
                {!loading && children}
            </authContext.Provider>
        </div>
    );
};

export default AuthContextProvider;