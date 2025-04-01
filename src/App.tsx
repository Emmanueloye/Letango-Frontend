import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LandingLayout from './layouts/LandingLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoardLayout from './layouts/DashBoardLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'signup', element: <Register /> },
      { path: 'login', element: <Login /> },
    ],
  },
  {
    path: '/account',
    element: <DashBoardLayout />,
    children: [{ index: true, element: <p>dashboard</p> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
