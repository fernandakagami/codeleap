import {
  createBrowserRouter,
} from "react-router";
import { SignUp } from "./pages/auth/sign-up";
import { Dashboard } from "./pages/app/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);