import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import { toast } from "react-hot-toast";


const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() =>{
    /* -------------------------- INTERCEPTORS REQUEST -------------------------- */
    axiosSecure.interceptors.request.use((config) =>{
        const token = localStorage.getItem('access-token')
        
        if(token){
            config.headers.Authorization = `bearer ${token}`
        }
        return config;
    })

        /* -------------------------- INTERCEPTORS RESPONSE -------------------------- */
        axiosSecure.interceptors.response.use((response) => response, async(err) =>{
            if(err.response && (err.response.status === 401 || err.response.status === 43)){
                await logOut()
                navigate('/sign-in')
            }
           toast.error(err.response.error.message);
            return Promise.reject(err)
        })


  },[axiosSecure,logOut, navigate])

  return [axiosSecure]
};


export default useAxiosSecure;
