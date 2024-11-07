import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const ViolationDetails = () => {
  const violations = [
    {
      time: '2024-09-01 08:45',
      driver: 'Talan Schleifer',
      type: 'Speeding Violation',
      totalRoute: '85',
      location: '123 Elm St',
    },
    {
      time: '2024-09-01 09:30',
      driver: 'Ruben Vetrovs',
      type: 'Hard Braking Violation',
      totalRoute: '-',
      location: '456 Oak Ave',
    },
    {
      time: '2024-09-01 10:15',
      driver: 'Zaire Vaccaro',
      type: 'Speeding Violation',
      totalRoute: '92',
      location: '789 Pine Rd',
    },
    {
      time: '2024-09-01 11:00',
      driver: 'Cristofer Geidt',
      type: 'Speeding Violation',
      totalRoute: '78',
      location: '101 Maple Dr',
    },
    {
      time: '2024-09-01 12:30',
      driver: 'Justin Dorwart',
      type: 'Hard Braking Violation',
      totalRoute: '-',
      location: '303 Cedar Ln',
    },
    {
      time: '2024-09-01 13:45',
      driver: 'Alfonso Ekstrom',
      type: 'Speeding Violation',
      totalRoute: '101',
      location: '606 Fir Dr',
    },
    {
      time: '2024-09-01 15:10',
      driver: 'Brandon Rhiel Madsen',
      type: 'Hard Braking Violation',
      totalRoute: '-',
      location: '707 Redwood Rd',
    },
    {
      time: '2024-09-01 17:05',
      driver: 'Alfredo Schleifer',
      type: 'Speeding Violation',
      totalRoute: '95',
      location: '202 Birch Blvd',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='bg-[#0f1c31] rounded-xl shadow-lg border border-[#1b2942] p-4 md:p-6 w-full'
    >
      <h2 className='text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6'>
        Violation Details
      </h2>

      {/* Mobile View */}
      <div className='block lg:hidden'>
        {violations.map((violation, index) => (
          <div
            key={index}
            className='bg-[#162236] rounded-lg p-4 mb-4 last:mb-0'
          >
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <p className='text-gray-400 text-sm'>Time</p>
                <p className='text-gray-300'>{violation.time}</p>
              </div>
              <div>
                <p className='text-gray-400 text-sm'>Driver</p>
                <p className='text-gray-300'>{violation.driver}</p>
              </div>
              <div className='col-span-2'>
                <p className='text-gray-400 text-sm'>Type</p>
                <p className='text-gray-300'>{violation.type}</p>
              </div>
              <div>
                <p className='text-gray-400 text-sm'>Total Route</p>
                <p className='text-gray-300'>{violation.totalRoute}</p>
              </div>
              <div>
                <p className='text-gray-400 text-sm'>Location</p>
                <a
                  href={`#${violation.location}`}
                  className='text-[#3b82f6] hover:underline'
                >
                  {violation.location}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className='hidden lg:block overflow-x-auto'>
        <table className='w-full min-w-[800px]'>
          <thead>
            <tr className='text-left'>
              <th className='py-4 px-4 text-gray-400 font-medium text-sm'>
                TIME
              </th>
              <th className='py-4 px-4 text-gray-400 font-medium text-sm'>
                DRIVER
              </th>
              <th className='py-4 px-4 text-gray-400 font-medium text-sm'>
                TYPE OF VIOLATION
              </th>
              <th className='py-4 px-4 text-gray-400 font-medium text-sm'>
                TOTAL ROUTE
              </th>
              <th className='py-4 px-4 text-gray-400 font-medium text-sm'>
                LOCATION
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-[#1b2942]'>
            {violations.map((violation, index) => (
              <tr key={index} className='hover:bg-[#162236] transition-colors'>
                <td className='py-4 px-4 text-gray-300'>{violation.time}</td>
                <td className='py-4 px-4 text-gray-300'>{violation.driver}</td>
                <td className='py-4 px-4 text-gray-300'>{violation.type}</td>
                <td className='py-4 px-4 text-gray-300'>
                  {violation.totalRoute}
                </td>
                <td className='py-4 px-4'>
                  <a
                    href={`#${violation.location}`}
                    className='text-[#3b82f6] hover:underline'
                  >
                    {violation.location}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='flex flex-wrap items-center gap-2 mt-6'>
        <button className='px-3 py-2 md:px-4 md:py-2 text-sm text-gray-400 hover:bg-[#162236] rounded-lg transition-colors'>
          Previous
        </button>
        <button className='px-3 py-2 md:px-4 md:py-2 text-sm text-gray-400 hover:bg-[#162236] rounded-lg transition-colors'>
          1
        </button>
        <button className='px-3 py-2 md:px-4 md:py-2 text-sm bg-[#3b82f6] text-white rounded-lg'>
          2
        </button>
        <button className='px-3 py-2 md:px-4 md:py-2 text-sm text-gray-400 hover:bg-[#162236] rounded-lg transition-colors'>
          3
        </button>
        <button className='px-3 py-2 md:px-4 md:py-2 text-sm text-gray-400 hover:bg-[#162236] rounded-lg transition-colors'>
          Next
        </button>
      </div>
    </motion.div>
  )
}

export default ViolationDetails
