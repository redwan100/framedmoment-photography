import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Components/Home/Home";
import SignIn from "../../Components/Form/Login/SignIn";
import SignUp from "../../Components/Form/Register/SignUp";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element:<Home /> 
            },
            {
                path:'sign-up',
                element:<SignUp /> 
            },
            {
                path:'sign-in',
                element:<SignIn /> 
            }
        ]
    }
]);

export default router