import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Components/Home/Home";
import SignIn from "../../Components/Form/Login/SignIn";
import SignUp from "../../Components/Form/Register/SignUp";
import About from "../../Components/About";
import PrivetRoute from "../PrivetRouts/PrivetRoute";
import Instructors from "../../Pages/Instrutors/Instructors";
import Classes from "../../Pages/Classes/Classes";
import Dashboard from "../../Pages/Dahsboard/Dashboard";

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
        path: "dashboard",
        element: <Dashboard />,
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
]);

export default router