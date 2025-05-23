/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
 
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();
    const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(null);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)
    const navigate = useNavigate();

    const loadCreditData = async () => {
        try{
            const {data} = await axios.get(backendUrl + '/api/user/credits',{headers: {token}})
            if(data.success){
                setCredit(data.credits);
                setUser(data.user)
            }
        } catch(error) {
            toast.error(error.message)
        }
    }

    //generate Image
    const generateImage = async (prompt) => {
        try{
        // const {data} =  await axios.post(backendUrl + '/api/image/generate-image', prompt, {headers: {token}} );

        const {data} = await axios.post(
            backendUrl + '/api/image/generate-image',
            { prompt }, // Send as object
            { headers: { token } } // fix `Headers` => `headers`
          );
          

        if(data.success){
            loadCreditData();
            return data.resultImage;
        } else {
            toast.error(data.message)
            loadCreditData();
            if(data.creditBalance === 0){
                navigate('/buyCredits');
            }
        }
        } catch (error){
            toast.error(error.message);
        }
    }

    //Logout functionality
    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
    }

    useEffect(()=>{
        if(token){
            loadCreditData();
        }
    },[token])

    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit, loadCreditData, logout, generateImage
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;