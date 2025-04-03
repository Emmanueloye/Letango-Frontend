import { Link, Outlet } from 'react-router-dom';

const ProfileLayout = () => {
  return (
    <>
      <div className='flex justify-center flex-wrap *:mr-1'>
        <Link
          to='/account/profile'
          className='bg-primary-500 dark:bg-slate-800 rounded-t-md px-8 py-2 text-slate-50 text-sm'
        >
          Profile
        </Link>
        <Link
          to='/account/profile/edit-profile'
          className='bg-primary-500 dark:bg-slate-800 rounded-t-md px-4 py-2 text-slate-50 text-sm'
        >
          Edit Profile
        </Link>
        <Link
          to='/account/profile/change-password'
          className='bg-primary-500 dark:bg-slate-800 rounded-t-md px-3 py-2 text-slate-50 text-sm'
        >
          Update Password
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default ProfileLayout;
