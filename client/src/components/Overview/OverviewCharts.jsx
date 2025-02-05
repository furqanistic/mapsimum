import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const packageData = [
  { month: 'Jan', delivered: 110, mismatched: 190 },
  { month: 'Feb', delivered: 170, mismatched: 220 },
  { month: 'Mar', delivered: 220, mismatched: 170 },
  { month: 'Apr', delivered: 90, mismatched: 230 },
  { month: 'May', delivered: 130, mismatched: 270 },
  { month: 'Jun', delivered: 180, mismatched: 240 },
  { month: 'Jul', delivered: 160, mismatched: 320 },
  { month: 'Aug', delivered: 150, mismatched: 300 },
  { month: 'Sep', delivered: 140, mismatched: 310 },
  { month: 'Oct', delivered: 80, mismatched: 240 },
  { month: 'Nov', delivered: 60, mismatched: 220 },
  { month: 'Dec', delivered: 70, mismatched: 210 },
]

const sortTimeData = [
  { month: 'Jan', time: 8 },
  { month: 'Feb', time: 9 },
  { month: 'Mar', time: 12 },
  { month: 'Apr', time: 8.5 },
  { month: 'May', time: 10.5 },
  { month: 'Jun', time: 10 },
  { month: 'Jul', time: 6 },
  { month: 'Aug', time: 7.5 },
  { month: 'Sep', time: 6.5 },
  { month: 'Oct', time: 5 },
  { month: 'Nov', time: 8.5 },
  { month: 'Dec', time: 3 },
]

const CustomLegend = () => {
  return (
    <div className='flex items-center gap-6 mt-4'>
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 rounded-full bg-[#2DD4BF]' />
        <span className='text-sm text-slate-400'>Delivered</span>
      </div>
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 rounded-full bg-[#164E63]' />
        <span className='text-sm text-slate-400'>Mismatched</span>
      </div>
    </div>
  )
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-[#1C2537] px-4 py-3 rounded-lg shadow-lg border border-slate-700/50'>
        <p className='text-slate-300 font-medium mb-2'>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className='text-sm' style={{ color: entry.color }}>
            {entry.name === 'time'
              ? `${entry.value} min`
              : `${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

const ChartCard = ({ title, children }) => (
  <div className='bg-[#0b172f] rounded-2xl p-6 w-full'>
    <div className='flex justify-between items-center mb-6'>
      <h2 className='text-white text-xl font-medium'>{title}</h2>
      <div className='flex gap-3'>
        <button className='bg-[#1C2537] text-white px-4 py-2 rounded-xl flex items-center text-sm'>
          2024
          <svg
            className='w-4 h-4 ml-2 text-slate-400'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </button>
        {title === 'Avg Sort Time' && (
          <button className='bg-[#1C2537] text-white px-4 py-2 rounded-xl flex items-center text-sm'>
            All Warehouse
            <svg
              className='w-4 h-4 ml-2 text-slate-400'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
        )}
      </div>
    </div>
    {children}
  </div>
)

const OverviewCharts = () => {
  return (
    <div className='px-6 pb-6'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <ChartCard title='Package'>
          <div className='h-[340px]'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                data={packageData}
                margin={{ top: 10, right: 0, bottom: 0, left: -15 }}
              >
                <CartesianGrid
                  strokeDasharray='3 3'
                  vertical={false}
                  stroke='#1C2537'
                />
                <XAxis
                  dataKey='month'
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748B', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748B', fontSize: 12 }}
                  domain={[0, 600]}
                  ticks={[0, 100, 200, 300, 400, 500, 600]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey='mismatched'
                  stackId='a'
                  fill='#164E63'
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  dataKey='delivered'
                  stackId='a'
                  fill='#2DD4BF'
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
            <CustomLegend />
          </div>
        </ChartCard>

        <ChartCard title='Avg Sort Time'>
          <div className='h-[340px]'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                data={sortTimeData}
                margin={{ top: 10, right: 0, bottom: 0, left: -15 }}
              >
                <CartesianGrid
                  strokeDasharray='3 3'
                  vertical={false}
                  stroke='#1C2537'
                />
                <XAxis
                  dataKey='month'
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748B', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748B', fontSize: 12 }}
                  domain={[0, 14]}
                  ticks={[0, 2, 4, 6, 8, 10, 12, 14]}
                  tickFormatter={(value) => `${value} min`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey='time'
                  fill='#2DD4BF'
                  radius={[4, 4, 0, 0]}
                  name='Sort Time'
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>
    </div>
  )
}

export default OverviewCharts
