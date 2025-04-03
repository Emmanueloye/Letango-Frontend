import { FaTimesCircle } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../Actions/store';
import { dashboardActions } from '../../Actions/DashboardAction';
import { NavLink } from 'react-router-dom';
import avater from '../../assets/user-2935527_1280.webp';

const SideBar = () => {
  const dispatch = useAppDispatch();
  // Get the sidebar state from store
  const { isSidebarOpen } = useAppSelector((state) => state.ui);

  // Use the sidebar state to toggle sidebar on large screen.
  const showSidebarLg = isSidebarOpen ? 'lg:-left-full' : 'lg:left-0';

  // Use the sidebar state to toggle sidebar on small screen.
  const showMobileSidebar = isSidebarOpen
    ? ' w-full sm:w-2/5 md:w-2/5 left-0 z-30'
    : '-left-[200%]';

  return (
    <aside
      className={`bg-gray-100 dark:bg-slate-800 lg:w-63 fixed -left-[200%] ${showSidebarLg} ${showMobileSidebar} h-full transition-all duration-700 ease-in-out shadow-sm overflow-y-auto`}
    >
      {/*=================================================================================
        ========================= Sidebar top card ===================================== */}
      <div className='flex justify-between items-center border-b-2 border-primary-500 dark:border-amber-500 dark:bg-slate-700 bg-green-200 px-2'>
        <div className='flex item-center py-2.5 px-4 text-primary-500 dark:text-slate-50 '>
          <img
            src={avater}
            alt='User image'
            width={40}
            height={40}
            className='rounded-full mr-1'
          />
          <div>
            <h3 className=' font-600'>Osunkoya Mayowa</h3>
            <p className='text-sm'>User ref: 112234</p>
          </div>
        </div>
        {/* Close button on small screen */}
        <FaTimesCircle
          onClick={() => dispatch(dashboardActions.closeSidebar())}
          title='Close'
          className='text-2xl text-primary-500 cursor-pointer lg:hidden block dark:text-slate-50'
        />
      </div>
      {/*=================================================================================
        ========================= Sidebar navigation =================================== */}
      <ul className='px-3 py-4 dark:text-slate-50'>
        <li className='mb-2'>
          <NavLink
            to='/account'
            className={({ isActive }) => (isActive ? 'font-700' : '')}
          >
            Dashboard
          </NavLink>
        </li>
        <li className='mb-2'>
          <NavLink to='/account/profile'>Personal Profile</NavLink>
        </li>
        <li className='mb-2'>
          <NavLink to='/account'>Personal Wallet</NavLink>
        </li>
        <li className='mb-2'>
          <NavLink to='/account'>Manage Group</NavLink>
        </li>
        <li className='mb-2'>
          <NavLink to='/account'>Reports</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
