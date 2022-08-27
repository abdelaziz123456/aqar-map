import React ,{useState} from 'react'

const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
    signUp:(data)=>{}
})

export const  AuthContextProvider=(props)=>{
    const [token,setToken]=useState(null);
    const UserIsLogged=!!token;
    const loginHandler=(token)=>{
        setToken(token)
    }
    const logoutHandler=()=>{
        setToken(null)
    }

    const contextValue={
        token:token,
        isLoggedIn:UserIsLogged,
        login:loginHandler,
        logout:logoutHandler

    }

    return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthContext