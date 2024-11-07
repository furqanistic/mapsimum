import { MapPin, MessageSquare, Phone } from 'lucide-react'
import React, { useState } from 'react'
import { Cell, Pie, PieChart } from 'recharts'
import GasReceiptModal from './GasReceiptModal'

const CustomToggle = ({ isOn, onToggle }) => (
  <div
    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
      isOn ? 'bg-blue-500' : 'bg-gray-300'
    }`}
    onClick={onToggle}
  >
    <div
      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
        isOn ? 'translate-x-6' : ''
      }`}
    />
  </div>
)

const RightSidebar = () => {
  const [optimizedRoute, setOptimizedRoute] = useState(false)
  const [proofOfDelivery, setProofOfDelivery] = useState(false)
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false)
  const pieData = [
    { name: 'Completed', value: 70 },
    { name: 'Remaining', value: 30 },
  ]

  return (
    <div className='w-80 bg-white p-4 shadow-lg overflow-y-auto'>
      <div className='space-y-6'>
        {/* Pie Chart */}
        <div className='relative h-32 w-32 mx-auto'>
          <PieChart width={128} height={128}>
            <Pie
              data={pieData}
              cx={64}
              cy={64}
              innerRadius={0}
              outerRadius={64}
              startAngle={0}
              endAngle={360}
              dataKey='value'
            >
              <Cell key='cell-0' fill='#3B82F6' />
              <Cell key='cell-1' fill='#EFF6FF' />
            </Pie>
          </PieChart>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-lg font-semibold'>122 miles</span>
          </div>
        </div>

        {/* Address and Route Details */}
        <div className='space-y-2'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center'>
              <MapPin className='w-5 h-5 text-green-600' />
            </div>
            <span className='font-semibold text-lg'>2972 Westheimer</span>
          </div>
          <div className='pl-10 text-sm text-gray-600 space-y-2'>
            <div>Rd. Santa Ana, Illinois 85486</div>
            <div className='border-l-2 border-dotted border-gray-300 pl-4 space-y-4'>
              {[...Array(3)].map((_, i) => (
                <div key={i} className='text-sm text-gray-500'>
                  Rd. Santa Ana, Illinois 85486
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Write note for driver */}
        <div className='bg-gray-50 p-3 rounded-lg'>
          <input
            type='text'
            placeholder='Write note for driver ...'
            className='w-full bg-transparent text-sm text-gray-500 outline-none'
          />
        </div>

        {/* Destination */}
        <div className='flex items-center space-x-2'>
          <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center'>
            <MapPin className='w-5 h-5 text-blue-600' />
          </div>
          <span className='font-semibold text-lg'>8502 Preston</span>
        </div>

        {/* Driver Info */}
        <div className='bg-gray-50 p-3 rounded-lg flex items-center space-x-3'>
          <img
            src='/api/placeholder/40/40'
            alt='Driver'
            className='w-10 h-10 rounded-full'
          />
          <div className='flex-grow'>
            <div className='text-sm text-gray-500'>Driver</div>
            <div className='font-semibold'>Darrell Steward</div>
          </div>
          <div className='flex space-x-2'>
            <button className='p-2 bg-white rounded-full shadow-sm'>
              <Phone className='w-5 h-5 text-blue-500' />
            </button>
            <button className='p-2 bg-white rounded-full shadow-sm relative'>
              <MessageSquare className='w-5 h-5 text-blue-500' />
              <span className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full'></span>
            </button>
          </div>
        </div>

        {/* Options */}
        <div className='space-y-3'>
          <div className='flex items-center justify-between'>
            <span className='text-gray-700'>Assign optimized route</span>
            <CustomToggle
              isOn={optimizedRoute}
              onToggle={() => setOptimizedRoute(!optimizedRoute)}
            />
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-gray-700'>Proof of delivery</span>
            <CustomToggle
              isOn={proofOfDelivery}
              onToggle={() => setProofOfDelivery(!proofOfDelivery)}
            />
          </div>
        </div>

        {/* View Gas Receipts Button */}
        <button
          className='w-full py-2.5 bg-blue-500 text-white rounded-lg text-sm font-medium'
          onClick={() => setIsReceiptModalOpen(true)}
        >
          View gas receipts
        </button>
        <GasReceiptModal
          isOpen={isReceiptModalOpen}
          onClose={() => setIsReceiptModalOpen(false)}
        />
      </div>
    </div>
  )
}

export default RightSidebar
