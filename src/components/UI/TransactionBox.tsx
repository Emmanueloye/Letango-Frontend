const TransactionBox = () => {
  return (
    <div className='flex justify-between items-center flex-wrap bg-gray-100 dark:bg-slate-800 py-2 px-4 mt-2 font-poppins rounded-2xl shadow'>
      <div>
        <h4 className='font-600 capitalize text-sm mb-2 font-ral'>
          transaction description goes here
        </h4>
        <p className='text-xs  text-gray-500 dark:text-gray-400'>
          Thursday, April 12, 2024
        </p>
        <p className='text-xs  text-gray-500 dark:text-gray-400'>11:45pm</p>
      </div>
      <p className='text-sm font-500 break-words'>&#8358;20,000</p>
    </div>
  );
};

export default TransactionBox;
