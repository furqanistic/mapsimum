import { User } from 'lucide-react'
import React from 'react'

const deliveryZones = [
  {
    name: 'Downtown Seattle',
    inTransit: '15/20 Packages',
    driver: 'Furqan',
  },
  {
    name: 'Capitol Hill Zone',
    inTransit: '4/12 packages',
    driver: 'Furqan',
  },
  {
    name: 'Pioneer Square Area',
    inTransit: 'No deliveries',
    driver: null,
  },
  {
    name: 'Ballard Route',
    inTransit: 'No deliveries',
    driver: null,
  },
  {
    name: 'Rainier Valley',
    inTransit: '7/20 packages',
    driver: 'Furqan',
  },
  {
    name: 'Magnolia Route',
    inTransit: 'No deliveries',
    driver: null,
  },
  {
    name: 'South Lake Union',
    inTransit: '5/10 packages',
    driver: 'Furqan',
  },
  {
    name: 'Greenwood Area',
    inTransit: '7/20 packages',
    driver: 'Furqan',
  },
]

const packageActivity = [
  {
    time: '2024-09-01 08:45',
    trackingNumber: 'TRK1234567890',
    status: 'Delivered',
    driver: 'Furqan',
  },
  {
    time: '2024-09-01 09:30',
    trackingNumber: 'PKG9876543210',
    status: 'Delivered',
    driver: 'David Miller',
  },
  {
    time: '2024-09-01 10:15',
    trackingNumber: 'PKG9876543210',
    status: 'Delivered',
    driver: 'Michael Brown',
  },
  {
    time: '2024-09-01 11:00',
    trackingNumber: 'DTL2468135790',
    status: 'In Transit',
    driver: 'James Taylor',
  },
  {
    time: '2024-09-01 12:30',
    trackingNumber: 'DTL2468135790',
    status: 'In Transit',
    driver: 'Daniel Garcia',
  },
  {
    time: '2024-09-01 13:45',
    trackingNumber: 'ORD1357924680',
    status: 'In Transit',
    driver: 'Emily Johnson',
  },
  {
    time: '2024-09-01 15:10',
    trackingNumber: 'ORD1357924680',
    status: 'Delivery Issues',
    driver: 'John Smith',
  },
  {
    time: '2024-09-01 17:05',
    trackingNumber: 'SHIP9988776655',
    status: 'Delivery Issues',
    driver: 'David Miller',
  },
]

const StatusBadge = ({ status }) => {
  const statusStyles = {
    Delivered: 'bg-green-100 text-green-700',
    'In Transit': 'bg-yellow-100 text-yellow-700',
    'Delivery Issues': 'bg-red-100 text-red-700',
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  )
}

const DeliveryTracking = () => {
  return (
    <div className=' mt-5 px-6 pb-6'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Delivery Zone Section */}
        <div className='bg-[#0b172f] rounded-2xl p-6'>
          <h2 className='text-white text-2xl font-medium mb-6'>
            Delivery Zone
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='text-slate-400 text-sm uppercase'>
                  <th className='text-left pb-4 font-medium'>Zone Name</th>
                  <th className='text-left pb-4 font-medium'>In Transit</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-800'>
                {deliveryZones.map((zone, index) => (
                  <tr key={index} className='text-white'>
                    <td className='py-4'>{zone.name}</td>
                    <td className='py-4'>
                      <div className='flex items-center space-x-2'>
                        <span>{zone.inTransit}</span>
                        {zone.driver && (
                          <div className='flex items-center text-slate-400'>
                            <User className='w-4 h-4 mr-1' />
                            <span className='text-sm'>{zone.driver}</span>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Packages Activity Section */}
        <div className='bg-[#0b172f] rounded-2xl p-6'>
          <h2 className='text-white text-2xl font-medium mb-6'>
            Packages Activity
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='text-slate-400 text-sm uppercase'>
                  <th className='text-left pb-4 font-medium'>Time</th>
                  <th className='text-left pb-4 font-medium'>
                    Tracking Number
                  </th>
                  <th className='text-left pb-4 font-medium'>Status</th>
                  <th className='text-left pb-4 font-medium'>Driver</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-800'>
                {packageActivity.map((activity, index) => (
                  <tr key={index} className='text-white'>
                    <td className='py-4 whitespace-nowrap'>
                      {new Date(activity.time).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                      })}
                    </td>
                    <td className='py-4'>{activity.trackingNumber}</td>
                    <td className='py-4'>
                      <StatusBadge status={activity.status} />
                    </td>
                    <td className='py-4'>{activity.driver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryTracking
