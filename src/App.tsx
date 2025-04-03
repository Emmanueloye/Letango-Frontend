import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LandingLayout from './layouts/LandingLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoardLayout from './layouts/DashBoardLayout';
import Profile from './pages/Profile';
import ProfileLayout from './layouts/ProfileLayout';
import ProfileUpdate from './pages/ProfileUpdate';
import PasswordUpdate from './pages/PasswordUpdate';
import ResetPasswordLink from './pages/ResetPasswordLink';
import PasswordReset from './pages/PasswordReset';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'signup', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'reset-password', element: <ResetPasswordLink /> },
      { path: 'update-password', element: <PasswordReset /> },
    ],
  },
  {
    path: '/account',
    element: <DashBoardLayout />,
    children: [
      { index: true, element: <p>dashboard</p> },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          { index: true, element: <Profile /> },
          { path: 'edit-profile', element: <ProfileUpdate /> },
          { path: 'change-password', element: <PasswordUpdate /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
