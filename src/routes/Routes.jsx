import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
]);

export default router;
