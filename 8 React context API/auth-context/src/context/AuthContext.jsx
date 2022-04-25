import { createContext, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [login,setlogin] = useState("");

const isAuth = async () => {
    const user = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
        }    
        // useEffect(() => {
          // POST request using axios inside useEffect React hook      
        const data = await axios.post('https://reqres.in/api/login', user)
            //   .then( response => setlogin(login = response.data.token));   
      // empty dependency array means this effect will only run once (like componentDidMount in classes)
    //   }, []);
    // // setlogin(login = response )
    
    setlogin(data.data.token)
    console.log("login",data.data.token)
  };

  const toggleAuth = () => {


  };

  return (
    <AuthContext.Provider value={{ login,isAuth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
