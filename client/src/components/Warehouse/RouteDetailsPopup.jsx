import { ChevronDown, ChevronUp, MessageSquare, User } from 'lucide-react'
import React, { useState } from 'react'

const ParcelCard = ({ parcel, isExpanded, onClick }) => {
  return (
    <div
      className='bg-[#1e3a8a] rounded-md mb-2 overflow-hidden cursor-pointer transition-all duration-200'
      onClick={onClick}
    >
      <div className='p-3'>
        <div className='flex justify-between items-center'>
          <div className='text-white text-sm font-medium'>
            {parcel.trackingNumber}
          </div>
          {isExpanded ? (
            <ChevronUp className='text-white' size={16} />
          ) : (
            <ChevronDown className='text-white' size={16} />
          )}
        </div>

        {isExpanded && (
          <div className='mt-2'>
            <div className='text-white text-base mb-1'>
              {parcel.customerName}
            </div>
            <div className='text-gray-300 text-sm mb-3'>{parcel.address}</div>
          </div>
        )}

        <div className='flex justify-between items-center mt-1'>
          <div className='flex items-center gap-2'>
            <User className='text-white' size={14} />
            <span className='text-white text-sm'>{parcel.driverName}</span>
          </div>
          <button className='bg-[#34d399] text-white px-3 py-1 rounded text-xs flex items-center gap-1'>
            <MessageSquare size={12} />
            Chat
          </button>
        </div>
      </div>
    </div>
  )
}

const RouteDetailsPopup = ({ rackNumber, routeName, onClose }) => {
  const [expandedParcel, setExpandedParcel] = useState(0)

  const parcels = [
    {
      trackingNumber: '#AB123456789CD',
      customerName: 'Jane Bator',
      address: '3500 WHITE PLAINS LANE, APT 3C DALLAS, TEXAS 75045 - 70089',
      driverName: 'John Doe',
    },
    {
      trackingNumber: '#AB123456789CD',
      customerName: 'Jane Bator',
      address: '3500 WHITE PLAINS LANE, APT 3C DALLAS, TEXAS 75045 - 70089',
      driverName: 'John Doe',
    },
    {
      trackingNumber: '#AB123456789CD',
      customerName: 'Jane Bator',
      address: '3500 WHITE PLAINS LANE, APT 3C DALLAS, TEXAS 75045 - 70089',
      driverName: 'John Doe',
    },
    {
      trackingNumber: '#AB123456789CD',
      customerName: 'Jane Bator',
      address: '3500 WHITE PLAINS LANE, APT 3C DALLAS, TEXAS 75045 - 70089',
      driverName: 'John Doe',
    },
    {
      trackingNumber: '#AB123456789CD',
      customerName: 'Jane Bator',
      address: '3500 WHITE PLAINS LANE, APT 3C DALLAS, TEXAS 75045 - 70089',
      driverName: 'John Doe',
    },
    {
      trackingNumber: '#AB123456789CD',
      customerName: 'Jane Bator',
      address: '3500 WHITE PLAINS LANE, APT 3C DALLAS, TEXAS 75045 - 70089',
      driverName: 'John Doe',
    },
  ]

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'
      onClick={onClose}
    >
      <div
        className='bg-[#0b1425] rounded-xl w-full max-w-sm overflow-hidden shadow-xl'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='p-4'>
          <div className='flex justify-between items-center mb-1'>
            <h2 className='text-lg text-white font-semibold'>
              Rack {rackNumber}
            </h2>
            <div className='text-white text-sm'>{routeName}</div>
          </div>
          <div className='text-gray-400 text-xs mb-3'>
            {parcels.length} Parcels
          </div>

          <div className='space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar'>
            {parcels.map((parcel, index) => (
              <ParcelCard
                key={index}
                parcel={parcel}
                isExpanded={expandedParcel === index}
                onClick={() =>
                  setExpandedParcel(expandedParcel === index ? -1 : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RouteDetailsPopup
