import { ArrowsMaximize } from 'lucide-react'
import React, { useState } from 'react'

const ZonesSidebar = () => {
  const [showZones, setShowZones] = useState(true)

  const zones = Array(13).fill({
    name: 'MetroBridge Zone',
    area: '100Km',
  })

  return (
    <div className='fixed top-0 right-0 h-full'>
      {/* Sidebar Container */}
      <div className='w-80 h-full bg-[#0A1529] p-6 shadow-xl'>
        {/* Header with Toggle */}
        <div className='flex justify-between items-center mb-8'>
          <div className='flex items-center gap-3'>
            {/* Toggle Switch */}
            <button
              onClick={() => setShowZones(!showZones)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 ${
                showZones ? 'bg-[#7FB7B5]' : 'bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                  showZones ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className='text-white text-sm'>Show Zones on map</span>
          </div>
          <button className='text-[#7FB7B5] hover:text-[#6EA7A5] transition-colors'>
            <ArrowsMaximize className='w-5 h-5' />
          </button>
        </div>

        {/* Zones List */}
        <div className='space-y-4 overflow-y-auto max-h-[calc(100vh-120px)] pr-2'>
          {zones.map((zone, index) => (
            <div
              key={index}
              className='p-4 rounded-lg hover:bg-slate-800/50 transition-colors cursor-pointer'
            >
              <h3 className='text-white text-lg font-medium mb-1'>
                {zone.name}
              </h3>
              <p className='text-slate-400 text-sm'>Area : {zone.area}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ZonesSidebar
