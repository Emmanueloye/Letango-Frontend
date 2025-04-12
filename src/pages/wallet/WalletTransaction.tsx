import DateRangeSelector from '../../components/UI/DateRangeSelector';
import Table from '../../components/UI/Table';
import TransactionBox from '../../components/UI/TransactionBox';

const WalletTransaction = () => {
  return (
    <>
      <DateRangeSelector />
      <Table />
      <div className='hidden'>
        <TransactionBox />
        <TransactionBox />
        <TransactionBox />
      </div>
    </>
  );
};

export default WalletTransaction;
