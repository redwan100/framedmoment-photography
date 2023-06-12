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
import MangeClass from "../../Pages/Dahsboard/ManageClasss/MangeClass";
import MangeUser from "../../Pages/Dahsboard/MangeUser/MangeUser";
import MySelectClass from "../../Pages/Dahsboard/Student/MySelectClass";
import Payment from '../../Pages/Dahsboard/Student/Payment'
import Feedback from "../../Pages/Shared/Feedback/Feedback";
import PaymentHistory from "../../Pages/Dahsboard/Student/PaymentHistory/PaymentHistory";
import MyEnrolledClass from "../../Pages/Dahsboard/Student/EnrolledClass/MyEnrolledClass";
import Error from "../../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error />,
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
    element: <PrivetRoute>
      <Dashboard />,
    </PrivetRoute>,
    children:[
      {
        path:'my-classes',
        element:<MyClasses />
      },
      // {
      //   path:'add-class',
      //   element:<AddClass />
      // },
      {
        path:'add-class',
        element:<AddClass />
      },
      {
        path:'manage-class',
        element:<MangeClass />
      },
      {
        path:'manage-user',
        element:<MangeUser />
      },
      {
        path:'my-select-class',
        element:<MySelectClass />
      },
      {
        path:'my-enrolled-class',
        element:<MyEnrolledClass />
      },
      {
        path:'payment-history',
        element:<PaymentHistory />
      },
      {
        path:'payment/:id',
        element:<Payment />
      },
      {
        path:'feedback/:id',
        element:<Feedback />
      },
    ]
  }
]);

export default router