const Table = () => {
  return (
    // Split headers and dynamically set the column grid from outside the component
    <div className='mt-6'>
      <div className='grid grid-cols-4 uppercase text-sm font-600 *:py-2 *:px-2 bg-green-100 dark:text-primary-500'>
        <p className='border border-gray-300'>date</p>
        <p className='border border-gray-300'>description</p>
        <p className='border border-gray-300'>debit</p>
        <p className='border border-gray-300'>credit</p>
      </div>
      {/* Set up the table row to accept children */}
      <div className='*:even:bg-slate-100 *:dark:even:bg-slate-700'>
        <div className='grid grid-cols-4 items-stretch capitalize text-sm font-400 font-poppins *:py-1 *:px-2'>
          <p className='border border-gray-300'>April 12, 2025: 11:45pm</p>
          <p className='border border-gray-300'>
            transaction description goes here
          </p>
          <p className='border border-gray-300'>&#8358;20,000</p>
          <p className='border border-gray-300'>&#8358;0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
