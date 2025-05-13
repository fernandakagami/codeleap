import {
  createBrowserRouter,
} from "react-router";
import { NotFound } from './pages/404';
import { AppLayout } from './pages/_layouts/app';
import { Dashboard } from './pages/app/dashboard';
import { SignUp } from './pages/auth/sign-up';
import { Error } from './pages/error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
     path: '/sign-up',
        element: <SignUp />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);