import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from 'recharts';

// Temporary data
const data = [
  {
    name: 'Jan',
    PC: 1200,
    GC: 1200,
    total: 2400,
  },
  {
    name: 'Feb',
    PC: 860,
    GC: 1350,
    total: 2210,
  },
  {
    name: 'Mar',
    PC: 2000,
    GC: 290,
    total: 2290,
  },
  {
    name: 'Apr',
    PC: 1000,
    GC: 1000,
    total: 2000,
  },
  {
    name: 'May',
    PC: 1100,
    GC: 1081,
    total: 2181,
  },
  {
    name: 'Jun',
    PC: 1500,
    GC: 1000,
    total: 2500,
  },
  {
    name: 'Jul',
    PC: 900,
    GC: 1200,
    total: 2100,
  },
];

const Chart = () => {
  return (
    <div className='mt-8 w-full'>
      <h3 className='py-4  font-600 uppercase '>
        Monthly Contribution Tracker
      </h3>
      <div className='flex gap-2 flex-wrap'>
        <p>PC: Personal contribution</p>
        <p>GC: Group contribution</p>
      </div>
      <ResponsiveContainer width={'100%'} height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey='name' />
          <YAxis stroke='#f69e00' />
          <Tooltip />
          <Bar
            dataKey='PC'
            fill='#00b6d4'
            activeBar={<Rectangle fill='#00b6d4' />}
          />
          <Bar
            dataKey='GC'
            fill='#00c65a'
            activeBar={<Rectangle fill='#00c65a' />}
          />
          <Bar
            dataKey='total'
            fill='#011359'
            activeBar={<Rectangle fill='#011359' />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
