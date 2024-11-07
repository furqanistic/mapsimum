import { motion } from 'framer-motion'
import { List, Search } from 'lucide-react'
import React, { useState } from 'react'
import LaneListView from './LaneListView'
import RouteDetailsPopup from './RouteDetailsPopup'

const GradientDivider = () => (
  <div className='w-12 h-full bg-gradient-to-b from-[#1a2537] via-[#0b1425] to-[#1a2537] opacity-50 hidden lg:block'></div>
)

const WarehouseGrid = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRack, setSelectedRack] = useState(null)
  const [viewType, setViewType] = useState('grid')

  // First set of slots with different routes (A-T)
  const firstSetSlots = {
    left: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      route: `Route ${String.fromCharCode(65 + i)}`,
    })),
    right: Array.from({ length: 10 }, (_, i) => ({
      id: i + 11,
      route: `Route ${String.fromCharCode(75 + i)}`,
    })),
  }

  // Second and Third sets with all Route A
  const routeASlots = {
    left: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      route: 'Route A',
    })),
    right: Array.from({ length: 10 }, (_, i) => ({
      id: i + 11,
      route: 'Route A',
    })),
  }

  const renderSlot = (slot, isAlternate = false) => (
    <div
      key={slot.id}
      onClick={() => setSelectedRack(slot)} // Add this onClick handler
      className={`p-4 ${
        isAlternate ? 'bg-[#1e3a8a]' : 'bg-[#2563eb]'
      } border border-[#0b1425] cursor-pointer transition-colors duration-200 hover:opacity-90`}
    >
      <div className='flex flex-col items-center'>
        <div className='text-xl font-bold text-white'>{slot.id}</div>
        <div className='text-sm text-gray-200'>{slot.route}</div>
      </div>
    </div>
  )

  const renderGrid = (slots, alternatePattern = true) => (
    <div className='grid grid-cols-2 bg-[#0b1425] border border-[#1a2537] rounded-lg overflow-hidden'>
      <div>
        {slots.left.map((slot, index) =>
          renderSlot(slot, alternatePattern && index % 2 === 0)
        )}
      </div>
      <div>
        {slots.right.map((slot, index) =>
          renderSlot(slot, alternatePattern && index % 2 === 1)
        )}
      </div>
    </div>
  )

  return (
    <div className='min-h-screen bg-[#0b1425] p-6'>
      {/* Header Section */}
      <div className='mb-6'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mb-4'>
          <div className='relative w-full lg:w-96'>
            <Search
              className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
              size={20}
            />
            <input
              type='text'
              placeholder='Search Parcels or Route'
              className='w-full pl-10 pr-4 py-2 bg-[#1a2537] text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center'>
                <div className='w-4 h-4 bg-[#2563eb] rounded mr-2'></div>
                <span className='text-gray-300 text-sm'>Filled</span>
              </div>
              <div className='flex items-center'>
                <div className='w-4 h-4 bg-[#1e3a8a] rounded mr-2'></div>
                <span className='text-gray-300 text-sm'>Empty</span>
              </div>
            </div>
            <div className='flex items-center'>
              <span className='text-gray-300 text-sm mr-2'>View by:</span>
              <div className='flex gap-2'>
                <button
                  onClick={() => setViewType('list')}
                  className={`p-2 rounded ${
                    viewType === 'list' ? 'bg-[#2563eb]' : 'bg-[#1a2537]'
                  } transition-colors duration-200`}
                >
                  <List size={20} className='text-white' />
                </button>
                <button
                  onClick={() => setViewType('blueprint')}
                  className={`p-2 rounded ${
                    viewType === 'blueprint' ? 'bg-[#2563eb]' : 'bg-[#1a2537]'
                  } text-white px-4 flex items-center gap-2 transition-colors duration-200`}
                >
                  <svg
                    viewBox='0 0 24 24'
                    width='20'
                    height='20'
                    fill='none'
                    stroke='currentColor'
                    className='text-white'
                  >
                    <rect
                      x='3'
                      y='3'
                      width='18'
                      height='18'
                      rx='2'
                      strokeWidth='2'
                    />
                    <line x1='3' y1='9' x2='21' y2='9' strokeWidth='2' />
                    <line x1='9' y1='21' x2='9' y2='9' strokeWidth='2' />
                  </svg>
                  Blueprint
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {viewType === 'list' ? (
        <LaneListView />
      ) : (
        <>
          {/* Grid Section */}
          <div className='flex justify-between mb-24 max-w-7xl mx-auto'>
            <div className='flex-1'>{renderGrid(firstSetSlots, false)}</div>
            <GradientDivider />
            <div className='flex-1'>{renderGrid(routeASlots)}</div>
            <GradientDivider />
            <div className='flex-1'>{renderGrid(routeASlots)}</div>
          </div>

          {/* Action Buttons */}
          <div className='fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 bg-[#1a2537] p-3 rounded-lg shadow-lg'>
            <button className='p-2 hover:bg-[#2563eb] rounded transition-colors flex items-center gap-2 text-white'>
              <svg
                viewBox='0 0 24 24'
                width='20'
                height='20'
                fill='none'
                stroke='currentColor'
              >
                <path
                  d='M4 7h16M4 7l2 11h12l2-11M4 7l4-4h8l4 4'
                  strokeWidth='2'
                />
              </svg>
              Bin
            </button>
            <button className='p-2 hover:bg-[#2563eb] rounded transition-colors flex items-center gap-2 text-white'>
              <svg
                viewBox='0 0 24 24'
                width='20'
                height='20'
                fill='none'
                stroke='currentColor'
              >
                <rect
                  x='4'
                  y='4'
                  width='16'
                  height='16'
                  rx='2'
                  strokeWidth='2'
                />
                <path d='M12 4v16M4 12h16' strokeWidth='2' />
              </svg>
              Belt
            </button>
            <button className='p-2 hover:bg-[#2563eb] rounded transition-colors flex items-center gap-2 text-white'>
              <svg
                viewBox='0 0 24 24'
                width='20'
                height='20'
                fill='none'
                stroke='currentColor'
              >
                <rect
                  x='8'
                  y='8'
                  width='12'
                  height='12'
                  rx='2'
                  strokeWidth='2'
                />
                <path d='M4 16V4h12' strokeWidth='2' />
              </svg>
              Duplicate
            </button>
            <button className='p-2 hover:bg-[#2563eb] rounded transition-colors flex items-center gap-2 text-white'>
              <svg
                viewBox='0 0 24 24'
                width='20'
                height='20'
                fill='none'
                stroke='currentColor'
              >
                <path
                  d='M4 7h16M10 11v6M14 11v6M5 7l1 12h12l1-12'
                  strokeWidth='2'
                />
              </svg>
              Delete
            </button>
          </div>
        </>
      )}

      {/* Route Details Popup */}
      {selectedRack && (
        <RouteDetailsPopup
          rackNumber={selectedRack.id}
          routeName={selectedRack.route}
          onClose={() => setSelectedRack(null)}
        />
      )}
    </div>
  )
}

export default WarehouseGrid
