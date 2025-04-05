import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LandingLayout from './layouts/LandingLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import DashBoardLayout from './layouts/DashBoardLayout';
import Profile from './pages/auth/Profile';
import ProfileLayout from './layouts/ProfileLayout';
import ProfileUpdate from './pages/auth/ProfileUpdate';
import PasswordUpdate from './pages/auth/PasswordUpdate';
import ResetPasswordLink from './pages/auth/ResetPasswordLink';
import PasswordReset from './pages/auth/PasswordReset';
import Dashboard from './pages/Dashboard';
import ManageGroup from './pages/userGroupMgt/ManageGroup';
import CreateGroup from './pages/userGroupMgt/CreateGroup';

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
      { index: true, element: <Dashboard /> },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          { index: true, element: <Profile /> },
          { path: 'edit-profile', element: <ProfileUpdate /> },
          { path: 'change-password', element: <PasswordUpdate /> },
        ],
      },
      { path: 'personal-wallet', element: <p>Personal wallet</p> },
      {
        path: 'manage-group',

        children: [
          { index: true, element: <ManageGroup /> },
          { path: 'create-group', element: <CreateGroup /> },
        ],
      },
      { path: 'reports', element: <p>reports</p> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
