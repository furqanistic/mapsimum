import React from 'react'

const DeliveryTable = () => {
  const deliveryData = [
    {
      time: '2024-09-01',
      driver: 'Furqan',
      route: 1,
      revenue: 1200,
      expenses: 300,
      wages: 150,
      status: 'Completed',
    },
    {
      time: '2024-09-01',
      driver: 'Jane Smith',
      route: 5,
      revenue: 900,
      expenses: 200,
      wages: 120,
      status: 'In Progress',
    },
    {
      time: '2024-09-02',
      driver: 'Mike Johnson',
      route: 4,
      revenue: 1500,
      expenses: 400,
      wages: 180,
      status: 'Completed',
    },
    {
      time: '2024-09-02',
      driver: 'Emily Davis',
      route: 5,
      revenue: 750,
      expenses: 150,
      wages: 100,
      status: 'Completed',
    },
    {
      time: '2024-09-03',
      driver: 'Chris Lee',
      route: 2,
      revenue: 1000,
      expenses: 250,
      wages: 140,
      status: 'In Progress',
    },
    {
      time: '2024-09-03',
      driver: 'Amanda Brown',
      route: 3,
      revenue: 1100,
      expenses: 350,
      wages: 160,
      status: 'Completed',
    },
    {
      time: '2024-09-04',
      driver: 'Sarah Wilson',
      route: 1,
      revenue: 950,
      expenses: 220,
      wages: 130,
      status: 'In Progress',
    },
    {
      time: '2024-09-04',
      driver: 'David Green',
      route: 4,
      revenue: 1300,
      expenses: 300,
      wages: 170,
      status: 'Completed',
    },
    {
      time: '2024-09-04',
      driver: 'David Green',
      route: 2,
      revenue: 1300,
      expenses: 300,
      wages: 170,
      status: 'Completed',
    },
    {
      time: '2024-09-04',
      driver: 'David Green',
      route: 2,
      revenue: 1300,
      expenses: 300,
      wages: 170,
      status: 'Completed',
    },
    {
      time: '2024-09-04',
      driver: 'David Green',
      route: 2,
      revenue: 1300,
      expenses: 300,
      wages: 170,
      status: 'Completed',
    },
  ]

  return (
    <div className='min-h-screen bg-[#0b1425] p-4'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl font-semibold text-white mb-6'>
          Delivery Data Overview
        </h1>

        <div className='bg-[#0f1c33] rounded-lg overflow-hidden border border-slate-700/50'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-slate-700/50'>
                  <th className='text-left py-4 px-4 text-sm font-medium text-slate-200'>
                    TIME
                  </th>
                  <th className='text-left py-4 px-4 text-sm font-medium text-slate-200'>
                    DRIVER
                  </th>
                  <th className='text-left py-4 px-4 text-sm font-medium text-slate-200'>
                    TOTAL ROUTE
                  </th>
                  <th className='text-left py-4 px-4 text-sm font-medium text-slate-200'>
                    REVENUE
                  </th>
                  <th className='text-left py-4 px-4 text-sm font-medium text-slate-200'>
                    EXPENSES
                  </th>
                  <th className='text-left py-4 px-4 text-sm font-medium text-slate-200'>
                    WAGES
                  </th>
                  <th className='text-left py-4 px-4 text-sm font-medium text-slate-200'>
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {deliveryData.map((row, index) => (
                  <tr
                    key={index}
                    className='border-b border-slate-700/50 hover:bg-slate-700/10 transition-colors'
                  >
                    <td className='py-4 px-4 text-sm text-slate-300'>
                      {row.time}
                    </td>
                    <td className='py-4 px-4 text-sm text-slate-300'>
                      {row.driver}
                    </td>
                    <td className='py-4 px-4 text-sm text-slate-300'>
                      {row.route}
                    </td>
                    <td className='py-4 px-4 text-sm text-slate-300'>
                      ${row.revenue}
                    </td>
                    <td className='py-4 px-4 text-sm text-slate-300 underline'>
                      ${row.expenses}
                    </td>
                    <td className='py-4 px-4 text-sm text-slate-300'>
                      ${row.wages}
                    </td>
                    <td className='py-4 px-4 text-sm'>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          row.status === 'Completed'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className='flex items-center gap-2 p-4 border-t border-slate-700/50'>
            <button className='px-4 py-2 text-sm text-slate-400 hover:text-slate-200 transition-colors'>
              Previous
            </button>
            <button className='px-3 py-1 text-sm text-slate-400 hover:text-slate-200 transition-colors'>
              1
            </button>
            <button className='px-3 py-1 text-sm bg-blue-500 text-white rounded'>
              2
            </button>
            <button className='px-3 py-1 text-sm text-slate-400 hover:text-slate-200 transition-colors'>
              3
            </button>
            <button className='px-4 py-2 text-sm text-slate-400 hover:text-slate-200 transition-colors'>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryTable
