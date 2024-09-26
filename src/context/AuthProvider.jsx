import { useNavigate } from "react-router-dom";

const { createContext, useState, useEffect } = require("react");


export const AuthContext = createContext()

const AuthProvider =({children})=>{
const [user, setUser] = useState(null);
const navigate = useNavigate();


console.log(user);
const login =  (info)=>{
 setUser(info)
 navigate("/dashboard");

}
const logout =()=> setUser(null)

useEffect(()=>{
    sessionStorage.setItem("user",JSON.stringify(user))
},[user])

    return(
       <AuthContext.Provider value={{user, login, logout}}>
        {children}
       </AuthContext.Provider>
    )

};


export default AuthProvider;
