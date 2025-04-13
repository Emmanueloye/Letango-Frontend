const Table = ({
  columns,
  headers,
  children,
}: {
  columns: string;
  headers: string[];
  children: React.ReactNode;
}) => {
  return (
    // Table headers
    <div className='mt-2'>
      <div
        className='grid uppercase text-sm font-600 *:py-2 *:px-2 bg-green-100 dark:text-primary-500'
        style={{ gridTemplateColumns: columns }}
      >
        {headers.map((item) => (
          <p key={item} className='border border-gray-300'>
            {item}
          </p>
        ))}
      </div>
      {/* Table rows */}
      <div className='*:even:bg-slate-100 *:dark:even:bg-slate-700'>
        <div
          className='grid grid-cols-4 items-stretch capitalize text-sm font-400 font-poppins *:py-1 *:px-2'
          style={{ gridTemplateColumns: columns }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Table;
