import phone from '../../assets/mobile-noBg.png';
const AboutUsBox = () => {
  return (
    <div className='pt-8 dark:bg-slate-800' id='solutions'>
      <section>
        {/*=================================================================================
           ========================= About us Title ========================================= */}
        <h1 className='text-3xl mb-18 text-primary-500 font-700 dark:text-slate-50 text-center underline underline-offset-8 decoration-primary-500 dark:decoration-slate-50'>
          About us
        </h1>
        {/*=================================================================================
           ========================= About us section==================================== */}
        <div className='grid grid-cols-2'>
          <img src={phone} alt='Letango phone' />
          <div className='bg-green-500 w-full h-full relative'>
            <div className='h-full w-full bg-slate-50 dark:bg-slate-700 border-2 absolute -top-2 -left-2 p-2 dark:text-slate-50'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsBox;
