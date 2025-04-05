import { MdAccountBox, MdOutlineManageAccounts } from 'react-icons/md';
import Card from '../components/UI/Card';
import { FaFolder } from 'react-icons/fa';
import { TbCurrencyNaira } from 'react-icons/tb';
import Chart from '../components/DashboardComponents/Chart';

const Dashboard = () => {
  return (
    <>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-2'>
        <Card
          cardDesc='personal wallet'
          balance={20_000}
          icon={<TbCurrencyNaira />}
        />
        <Card
          cardDesc='account status'
          optionalText='KYC: No data'
          icon={<MdAccountBox />}
        />
        <Card
          cardDesc='manage group'
          optionalText='New/existing group'
          icon={<MdOutlineManageAccounts />}
        />
        <Card
          cardDesc='reports'
          optionalText='View personal/group reports'
          icon={<FaFolder />}
        />
      </div>
      <Chart />
    </>
  );
};

export default Dashboard;
