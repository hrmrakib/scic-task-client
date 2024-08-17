import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import Home from "./../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <SignUp />,
    // element: <Login />,
    element: <Home />,
  },
]);

export default router;
