import { FaBars, FaHome } from 'react-icons/fa';
import { dashboardActions } from '../../Actions/DashboardAction';
import { useAppDispatch, useAppSelector } from '../../Actions/store';
import { Link } from 'react-router-dom';
import avater from '../../assets/avater.webp';
import SiteMode from './SiteMode';
import { useState } from 'react';

const TopNav = () => {
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector((state) => state.ui);
  const [logo, setLogo] = useState<string | undefined>(undefined);

  const showNavLg = isSidebarOpen ? 'lg:w-full lg:ml-0' : 'lg:w-4/5 lg:ml-64';

  return (
    <nav
      className={`w-full ml-0 ${showNavLg} h-[66px] border-b-2 border-primary-500 dark:border-amber-500 transition-all duration-700 ease-in-out px-3 sticky top-0 left-0 dark:bg-slate-800 z-20 flex items-center`}
    >
      <div className='container mx-auto py-2 px-4 flex justify-between items-center'>
        {/* Sidebar toggle menu */}
        <FaBars
          className='text-2xl text-primary-500 dark:text-slate-50'
          onClick={() => dispatch(dashboardActions.toggleSidebar())}
        />
        {/* Brand logo */}

        <Link
          title='Back to Home'
          to='/'
          className='flex items-center gap-1 text-2xl text-primary-500 dark:text-slate-50'
        >
          <FaHome className='' />

          <span className='font-700 hidden lg:block'>Letango</span>
        </Link>

        {/*=================================================================================
        ========================= Top nav menu ===================================== */}
        <div>
          <img
            src={avater}
            alt='User image'
            width={20}
            height={20}
            className='rounded-full'
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
