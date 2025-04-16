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
import KYC from './pages/userGroupMgt/KYC';
import PersonalWallet from './pages/wallet/PersonalWallet';
import WalletTransaction from './pages/wallet/WalletTransaction';
import TransactionFlow from './pages/wallet/TransactionFlow';
import EditGroup from './pages/userGroupMgt/EditGroup';
import GroupView from './pages/userGroupMgt/GroupView';
import CreateGroupRules from './pages/userGroupMgt/CreateGroupRules';
import ViewGroupRules from './pages/userGroupMgt/ViewGroupRules';
import BeneficiaryDetails from './pages/userGroupMgt/BeneficiaryDetails';
import GroupReportLanding from './pages/report/GroupReportLanding';
import GroupTransactions from './pages/report/GroupTransactions';
import GroupStatement from './pages/report/GroupStatement';

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
      {
        path: 'personal-wallet',
        children: [
          { index: true, element: <PersonalWallet /> },
          {
            path: 'transactions',
            element: <WalletTransaction />,
          },
          { path: 'inflows', element: <TransactionFlow /> },
          { path: 'outflows', element: <TransactionFlow /> },
        ],
      },
      {
        path: 'manage-group',

        children: [
          { index: true, element: <ManageGroup /> },
          { path: 'create-group', element: <CreateGroup /> },
          { path: 'update-group/:groupId', element: <EditGroup /> },
          {
            path: 'view/:groupId',

            children: [
              { index: true, element: <GroupView /> },
              { path: 'manage-rules', element: <CreateGroupRules /> },
              { path: 'view-rules', element: <ViewGroupRules /> },
              { path: 'beneficiaries', element: <BeneficiaryDetails /> },
              {
                path: 'reports',
                children: [
                  { index: true, element: <GroupReportLanding /> },
                  { path: 'transaction', element: <GroupTransactions /> },
                  { path: 'statement', element: <GroupStatement /> },
                ],
              },
            ],
          },
        ],
      },
      { path: 'kyc', element: <KYC /> },
      { path: 'reports', element: <p>reports</p> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
