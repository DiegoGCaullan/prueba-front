import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import Abm from "../pages/Abm";
import Admin from "../pages/Admin";
import Error404 from "../pages/Error404";
import LayoutPublic from "../layout/LayoutPublic";
import Valorant from "../pages/Valorant";
import Fornite from "../pages/Fornite";
import Countstrike from "../pages/CountStrike";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/abm",
        element: <Abm />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/valorant",
        element: <Valorant />,
      },
      {
        path: "/fornite",
        element: <Fornite />,
      },
      {
        path: "/counterstrike",
        element: <Countstrike />,
      },
    ],
  },
]);
