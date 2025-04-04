import { Outlet, ScrollRestoration } from 'react-router-dom';
import SideBar from '../components/Navigation/SideBar';
import TopNav from '../components/Navigation/TopNav';
import { useAppSelector } from '../Actions/store';

const DashBoardLayout = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.ui);

  const adjustMain = isSidebarOpen ? 'lg:w-full lg:ml-0' : 'lg:w-4/5 lg:ml-63';
  return (
    <div>
      <SideBar />
      <TopNav />
      <main
        className={`dark:bg-slate-700 min-h-screen w-full ml-0 ${adjustMain} transition-all duration-700 ease-in-out py-6 px-8 dark:text-slate-50`}
      >
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
};

export default DashBoardLayout;
