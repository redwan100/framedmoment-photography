import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Components/Home/Home";
import SignIn from "../../Components/Form/Login/SignIn";
import SignUp from "../../Components/Form/Register/SignUp";
import About from "../../Components/About";
import PrivetRoute from "../PrivetRouts/PrivetRoute";
import Instructors from "../../Pages/Instrutors/Instructors";
import Classes from "../../Pages/Classes/Classes";
import Dashboard from "../../Dashboard/Dashboared";
import MyClasses from "../../Pages/Instrutors/MyClasses/MyClasses";
import AddClass from "../../Pages/Instrutors/AddClass/AddClass";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      
      {
        path: "classes",
        element: <Classes />,
      },
            
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path:'dashboard',
    element: <Dashboard />,
    children:[
      {
        path:'my-classes',
        element:<MyClasses />
      },
      {
        path:'add-class',
        element:<AddClass />
      },
    ]
  }
]);

export default router