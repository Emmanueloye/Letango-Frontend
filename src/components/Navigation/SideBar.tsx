import { FaTimesCircle } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../Actions/store';
import { dashboardActions } from '../../Actions/DashboardAction';

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
      className={`bg-gray-100 dark:bg-slate-800 lg:w-64 fixed -left-[200%] ${showSidebarLg} ${showMobileSidebar} h-full transition-all duration-700 ease-in-out shadow-sm `}
    >
      {/*=================================================================================
        ========================= Sidebar top card ===================================== */}
      <div className='flex justify-between border-b-2 border-primary-500 dark:border-amber-500 dark:bg-slate-700'>
        <div className='py-2.5 px-4 text-primary-500 dark:text-slate-50 '>
          <h3 className=' font-600'>Osunkoya Mayowa</h3>
          <p className='text-sm'>User ref: 112234</p>
        </div>
        {/* Close button on small screen */}
        <FaTimesCircle
          onClick={() => dispatch(dashboardActions.closeSidebar())}
          title='Close'
          className='text-2xl text-primary-500 cursor-pointer lg:hidden block'
        />
      </div>
    </aside>
  );
};

export default SideBar;
