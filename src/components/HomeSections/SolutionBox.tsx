import { HiLightBulb } from 'react-icons/hi';

const SolutionBox = () => {
  return (
    <div className='pt-8 dark:bg-slate-800' id='solutions'>
      <section>
        {/*=================================================================================
        ========================= Section Title ========================================= */}
        <h1 className='text-3xl mb-18 text-primary-500 font-700 dark:text-slate-50 text-center underline underline-offset-8 decoration-primary-500 dark:decoration-slate-50 capitalize'>
          Our solutions
        </h1>
        {/*=================================================================================
        ========================= Solutions provided section================================ */}
        <div className='relative h-auto lg:h-screen *:p-3 *:text-center'>
          <article className='lg:w-40 lg:h-40 bg-primary-500 rounded-full flex justify-center items-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-1/2'>
            <div className='w-30 h-30 rounded-full bg-white flex justify-center items-center text-5xl text-green-500'>
              <HiLightBulb />
            </div>
          </article>
          <article className='lg:w-40 lg:h-40 bg-sky-700 capitalize text-slate-50 font-600 rounded-full  flex justify-center items-center lg:absolute lg:left-20 lg:top-20'>
            community portfolio
          </article>
          <article className='lg:w-40 lg:h-40 bg-green-700 capitalize text-slate-50 font-600 rounded-full flex justify-center items-center lg:absolute lg:right-20 lg:top-20'>
            peer contribution
          </article>
          <article className='lg:w-40 lg:h-40 bg-yellow-700 capitalize text-slate-50 font-600 rounded-full  flex justify-center items-center lg:absolute lg:right-20 lg:bottom-20'>
            solo contribution
          </article>
          <article className='lg:w-40 lg:h-40 bg-amber-600 capitalize text-slate-50 font-600 rounded-full  flex justify-center items-center lg:absolute lg:bottom-20 lg:left-20'>
            crowd funding
          </article>
          <article className='lg:w-40 lg:h-40 bg-pink-700 capitalize text-slate-50 font-600 rounded-full  flex justify-center items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2'>
            s-commerce
          </article>
          <article className='lg:w-40 lg:h-40 bg-purple-700 capitalize text-slate-50 font-600 rounded-full  flex justify-center items-center lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2'>
            club managmenet
          </article>
        </div>
      </section>
    </div>
  );
};

export default SolutionBox;
