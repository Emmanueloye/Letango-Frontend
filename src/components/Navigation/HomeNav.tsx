import { FaBars } from 'react-icons/fa';
// import logo from '../../assets/logo-no-bg.png';
// import whiteLogo from '../../assets/whiteLogo-nobg.png';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import SiteMode from './SiteMode';
const HomeNav = () => {
  // State to manage mobile menue toggle.
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState<string | undefined>(undefined);

  // Refs to manage the height of mobile menu drop down.
  const boxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log(window.document.documentElement.classList.contains('dark'));

  //   if (window.document.documentElement.classList.contains('dark')) {
  //     setBrandLogo(whiteLogo);
  //   } else {
  //     setBrandLogo(logo);
  //   }
  // }, [brandLogo]);

  // Function setting the height of the container div to the height of the inner div which holds the mobile menus.
  useEffect(() => {
    if (isOpen) {
      const height = boxRef.current?.getBoundingClientRect().height;

      containerRef.current!.style.height = `${height}px`;
    } else {
      containerRef.current!.style.height = '0px';
    }
  }, [isOpen]);

  return (
    <header className='lg:border-b-3 lg:border-primary-500 dark:lg:border-amber-600 bg-white dark:bg-slate-800'>
      <nav className='container mx-auto py-2 px-3 lg:flex lg:justify-between lg:items-center'>
        {/*=============================================================================
        ========================= Brand and mobile menu toggle========================== */}
        <div className='w-full flex justify-between items-center lg:w-3/5 border-b-3 border-primary-500 dark:border-amber-600 lg:border-b-0'>
          <Link to='/'>
            <img src={logo} alt='Letango brand logo' className='w-40' />
          </Link>
          <FaBars
            className='text-2xl text-primary-500 cursor-pointer lg:hidden dark:text-slate-50'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {/*=================================================================================
        ========================= desktop nav menu========================================== */}
        <div
          ref={containerRef}
          className='h-0 lg:hfull overflow-hidden lg:overflow-visible bg-white z-30 transition-all duration-500 lg:w-full flex items-center'
        >
          {/*=================================================================================
        ========================= Main navigation menu========================================== */}
          <div
            ref={boxRef}
            className='lg:flex lg:justify-between lg:items-center w-full dark:bg-slate-800'
          >
            <ul className='*:text-primary-500 font-500 *:mb-2 *:lg:mb-0 *:lg:pl-8 *:border-b-1 *:lg:border-b-0 lg:flex lg:justify-between'>
              <li className='pt-2 lg:pt-0  dark:text-slate-50'>
                <NavLink
                  to='/'
                  className={({ isActive }) => (isActive ? 'font-700' : '')}
                >
                  Home
                </NavLink>
              </li>
              <li className=' dark:text-slate-50'>
                <NavLink to='#solutions'>Solutions</NavLink>
              </li>
              <li className=' dark:text-slate-50'>
                <NavLink to='/'>About us</NavLink>
              </li>
            </ul>
            {/*=================================================================================
        ======================== Auth and call to action links================================= */}
            <div className='inline-block lg:flex flex-col lg:flex-row lg:items-center *:mb-2 *:lg:mb-0 *:mt-2 *:lg:mt-0 *:lg:mr-2'>
              <div>
                <Link
                  to='/'
                  className='bg-green-600 hover:bg-green-400 px-3 py-1 rounded-md text-white font-600'
                >
                  Sign up
                </Link>
              </div>
              <div>
                <Link
                  to='/'
                  className='border border-primary-500 font-500 text-primary-500 dark:text-slate-50 dark:border-slate-50 px-3 py-1 rounded-md hover:bg-primary-500 hover:text-white lg:mr-3'
                >
                  Login in
                </Link>
              </div>
              <SiteMode setLogo={setLogo} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HomeNav;
