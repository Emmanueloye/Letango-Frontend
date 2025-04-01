import { Form, Link } from 'react-router-dom';
import logo from '../assets/logo-no-bg.png';
import Button from '../components/UI/Button';

const Login = () => {
  return (
    <div>
      <section className='mt-30'>
        <Form className='lg:w-1/2 mx-auto border-1 border-primary-500 pb-3 rounded-md'>
          <div className='w-full h-20 flex justify-center border-b-2 border-b-amber-500 mb-2 dark:bg-green-200 rounded-md'>
            <img src={logo} alt='Brand logo' className='max-w-full h-full' />
          </div>

          <div className='px-3'>
            {/* Email group */}
            <div className='mb-2'>
              <label htmlFor='email'>email</label>
              <input type='email' id='email' name='email' autoComplete='off' />
            </div>
            {/* Password group */}
            <div className='mb-2'>
              <label htmlFor='password'>password</label>
              <input
                type='password'
                id='password'
                name='password'
                autoComplete='off'
              />
            </div>
            {/* Login footer note */}
            <div className='text-sm mb-2 dark:text-slate-50'>
              <span>Don't have an account? </span>
              <Link to='/signup' className='underline'>
                Create an account here.
              </Link>
            </div>
            {/* Login submit button. */}
            <Button btnText='Login' btnType='submit' />
          </div>
        </Form>
      </section>
    </div>
  );
};

export default Login;
