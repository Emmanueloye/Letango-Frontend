import phone from '../../assets/Single_Phone_nobg.png';
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
        <div>
          <img src={phone} alt='Letango phone' />
          <div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsBox;
