const TransactionBox = ({
  description,
  date,
  time,
  amount,
}: {
  description: string;
  date: string;
  time: string;
  amount: number;
}) => {
  return (
    <div className='flex justify-between items-center flex-wrap bg-gray-100 dark:bg-slate-800 py-2 px-4 mt-2 font-poppins rounded-2xl shadow'>
      <div>
        <h4 className='font-600 capitalize text-sm mb-2 font-ral'>
          {description}
        </h4>
        <p className='text-xs  text-gray-500 dark:text-gray-400'>{date}</p>
        <p className='text-xs  text-gray-500 dark:text-gray-400'>{time}</p>
      </div>
      <p className='text-sm font-500 break-words'>&#8358;{amount}</p>
    </div>
  );
};

export default TransactionBox;
