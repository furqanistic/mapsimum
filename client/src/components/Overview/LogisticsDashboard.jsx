import { Building2, Package, PackageCheck, PackageX, Truck } from 'lucide-react'
import React from 'react'

const StatsCard = ({ title, value, icon: Icon }) => (
  <div className='bg-[#0b172f] p-6 rounded-2xl border border-slate-800 transition-all duration-300'>
    <div className='flex flex-col space-y-3'>
      <div className='flex items-center space-x-2'>
        <Icon className='w-5 h-5 text-slate-400' strokeWidth={1.5} />
        <h3 className='text-slate-400 text-base font-normal'>{title}</h3>
      </div>
      <p className='text-4xl font-medium text-white tracking-tight'>{value}</p>
    </div>
  </div>
)

const LogisticsDashboard = () => {
  const stats = [
    {
      title: 'Total Packages',
      value: '200',
      icon: Package,
    },
    {
      title: 'Sorted Packages',
      value: '120',
      icon: PackageCheck,
    },
    {
      title: 'Unsorted Packages',
      value: '80',
      icon: PackageX,
    },
    {
      title: 'Driver',
      value: '120',
      icon: Truck,
    },
    {
      title: 'Warehouse',
      value: '120',
      icon: Building2,
    },
  ]

  return (
    <div className=' p-6'>
      <div className='max-w-[1400px] mx-auto'>
        <div className='mb-8'>
          <button className='bg-[#111827] text-white text-base px-5 py-2.5 rounded-xl border border-slate-800 focus:outline-none flex items-center space-x-2'>
            <span>2024</span>
            <svg
              className='w-4 h-4 text-slate-400 ml-2'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M19 9l-7 7-7-7' />
            </svg>
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogisticsDashboard
