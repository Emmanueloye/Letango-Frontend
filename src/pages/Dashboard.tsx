import { MdAccountBox, MdOutlineManageAccounts } from 'react-icons/md';
import Card from '../components/UI/Card';
import { FaFolder } from 'react-icons/fa';
import { TbCurrencyNaira } from 'react-icons/tb';
import Chart from '../components/DashboardComponents/Chart';
import { data } from '../assets/tempData/chartData';

// data type
interface DataType {
  [key: string]: number | string;
}

const Dashboard = () => {
  return (
    <section>
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

      <h3 className='py-4  font-600 uppercase '>
        Monthly Contribution Tracker
      </h3>
      <div className='flex gap-2 flex-wrap'>
        <p>PC: Personal contribution</p>
        <p>GC: Group contribution</p>
      </div>
      <Chart
        data={data as DataType[]}
        xAxisName='name'
        dataKeys={['PC', 'GC', 'total']}
        barColors={['#00b6d4', '#00a63e', '#011359']}
      />
    </section>
  );
};

export default Dashboard;
