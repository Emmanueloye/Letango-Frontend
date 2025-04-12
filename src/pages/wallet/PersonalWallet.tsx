import { MdOutlineAccountBalance } from 'react-icons/md';
import Card from '../../components/UI/Card';
import { GiPouringChalice, GiReceiveMoney } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Chart from '../../components/DashboardComponents/Chart';
import { walletData } from '../../assets/tempData/chartData';

// data type
interface DataType {
  [key: string]: number | string;
}

const PersonalWallet = () => {
  return (
    <>
      <section>
        {/* Wallet cards */}
        <div className='grid grid-cols-3 gap-4'>
          <Link to='/account/personal-wallet/transactions'>
            <Card
              cardDesc='Balance'
              balance={20_000}
              icon={<MdOutlineAccountBalance />}
            />
          </Link>
          <Card cardDesc='inflow' balance={50_000} icon={<GiReceiveMoney />} />
          <Card
            cardDesc='outflow'
            balance={30_000}
            icon={<GiPouringChalice />}
          />
        </div>
        {/* Chart section */}
        <>
          <h3 className='py-4 font-600 uppercase '>Personal wallet Tracker</h3>

          <Chart
            data={walletData as DataType[]}
            xAxisName={'name'}
            dataKeys={['inflow', 'outflow', 'balance']}
            barColors={['#00b6d4', '#00a63e', '#011359']}
          />
        </>
      </section>
    </>
  );
};

export default PersonalWallet;
