import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Components/Home/Home";
import SignIn from "../../Components/Form/Login/SignIn";
import SignUp from "../../Components/Form/Register/SignUp";
import About from "../../Components/About";
import PrivetRoute from "../PrivetRouts/PrivetRoute";

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
        path: "about",
        element: (
          <PrivetRoute>
            
            <About />
          </PrivetRoute>
        ),
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