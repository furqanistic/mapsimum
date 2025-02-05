import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, Check, MessageSquare, Phone, Search } from 'lucide-react'
import React, { useState } from 'react'

const DriverAssignment = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDriver, setSelectedDriver] = useState(null)
  const [isZoneView, setIsZoneView] = useState(false)
  const [selectedZones, setSelectedZones] = useState([2, 5, 6, 9])

  const drivers = [
    { id: 1, name: 'Zackary Bauch', zones: ['Zone A', 'Zone B', 'Zone C'] },
    { id: 2, name: 'Roger Jameson', zones: ['Zone A', 'Zone B', 'Zone C'] },
    { id: 3, name: 'Devon Robinson', zones: [] },
    { id: 4, name: 'Shemar Sanford', zones: [] },
    { id: 5, name: 'Ivan Valach', zones: ['Zone A', 'Zone B', 'Zone C'] },
    { id: 6, name: 'Oren Padberg', zones: [] },
    { id: 7, name: 'Zane Barber', zones: ['Zone A', 'Zone B', 'Zone C'] },
    { id: 8, name: 'Salvatore Roberts', zones: ['Zone A', 'Zone B', 'Zone C'] },
    { id: 9, name: 'Oscar Rodriguez', zones: [] },
    { id: 10, name: 'Gordon Walker', zones: ['Zone A', 'Zone B', 'Zone C'] },
    { id: 11, name: 'Sigmund Legros', zones: ['Zone A', 'Zone B', 'Zone C'] },
  ]

  const zones = Array(10)
    .fill()
    .map((_, i) => ({
      id: i + 1,
      name: 'MetroBridge Zone',
      area: '100Km',
    }))

  const placeholderImage =
    'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg'

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSetZone = (driver) => {
    setSelectedDriver(driver)
    setIsZoneView(true)
  }

  const handleBack = () => {
    setIsZoneView(false)
    setSelectedDriver(null)
  }

  const toggleZone = (zoneId) => {
    setSelectedZones((prev) =>
      prev.includes(zoneId)
        ? prev.filter((id) => id !== zoneId)
        : [...prev, zoneId]
    )
  }

  const DriverListView = () => (
    <motion.div
      initial={{ x: isZoneView ? -380 : 0 }}
      animate={{ x: 0 }}
      exit={{ x: -380 }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className='absolute inset-0 w-full h-full bg-[#0B1121]'
    >
      <div className='p-5 flex flex-col h-full'>
        <h1 className='text-xl font-semibold text-white mb-5'>Assign Driver</h1>

        <div className='relative mb-6'>
          <Search
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400'
            size={16}
          />
          <input
            type='text'
            placeholder='Search driver...'
            className='w-full bg-[#151F32] text-sm text-white pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500/30'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className='flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700/20'>
          <motion.div className='space-y-4'>
            {filteredDrivers.map((driver) => (
              <motion.div
                key={driver.id}
                className='border-b border-slate-700/20 pb-4'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-10 h-10 rounded-full overflow-hidden flex-shrink-0'>
                      <img
                        src={placeholderImage}
                        alt={driver.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <h3 className='text-white text-sm font-medium'>
                        {driver.name}
                      </h3>
                      <div className='flex items-center flex-wrap text-slate-400 text-xs mt-0.5'>
                        <span className='inline-block'>Assigned to : </span>
                        {driver.zones.length > 0 ? (
                          <div className='inline-flex gap-1.5 ml-1'>
                            {driver.zones.map((zone, index) => (
                              <span key={index} className='text-emerald-400'>
                                {zone}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className='ml-1'>-</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant='outline'
                    className='min-w-[120px] h-8 text-xs font-normal bg-transparent text-emerald-400 border-emerald-400/20 hover:bg-emerald-500/10 hover:text-emerald-300'
                    onClick={() => handleSetZone(driver)}
                  >
                    Set Driver Zone
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )

  const ZoneSelectionView = () => (
    <motion.div
      initial={{ x: 380 }}
      animate={{ x: 0 }}
      exit={{ x: 380 }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className='absolute inset-0 w-full h-full bg-[#0B1121]'
    >
      <div className='p-5 flex flex-col h-full'>
        <div className='flex items-center gap-3 mb-6'>
          <button
            onClick={handleBack}
            className='text-white hover:text-slate-300 transition-colors'
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className='text-xl font-semibold text-white'>Select Zone</h1>
        </div>

        <div className='bg-[#1D2B44] rounded-lg p-4 mb-6'>
          <div className='flex items-center gap-3 mb-4'>
            <img
              src={placeholderImage}
              alt={selectedDriver?.name}
              className='w-12 h-12 rounded-full object-cover'
            />
            <span className='text-white text-lg font-medium'>
              {selectedDriver?.name}
            </span>
          </div>
          <div className='flex gap-3'>
            <Button
              variant='outline'
              className='flex-1 bg-transparent border-slate-600 hover:bg-slate-700 text-white'
            >
              <Phone size={16} className='mr-2' />
              Call
            </Button>
            <Button
              variant='outline'
              className='flex-1 bg-transparent border-slate-600 hover:bg-slate-700 text-white'
            >
              <MessageSquare size={16} className='mr-2' />
              Message
            </Button>
          </div>
        </div>

        <div className='relative mb-4'>
          <Search
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400'
            size={16}
          />
          <input
            type='text'
            placeholder='Search driver...'
            className='w-full bg-[#151F32] text-sm text-white pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500/30'
          />
        </div>

        <div className='text-slate-400 text-sm mb-4'>
          {selectedZones.length} Zones Selected
        </div>

        <div className='flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700/20'>
          <div className='space-y-4'>
            {zones.map((zone) => (
              <div
                key={zone.id}
                className='flex items-center justify-between border-b border-slate-700/20 pb-4'
              >
                <div
                  className='flex items-center gap-3 cursor-pointer'
                  onClick={() => toggleZone(zone.id)}
                >
                  <div className='h-5 w-5 rounded border border-emerald-500/50 flex items-center justify-center'>
                    {selectedZones.includes(zone.id) && (
                      <Check size={14} className='text-emerald-500' />
                    )}
                  </div>
                  <div>
                    <h3 className='text-white text-base font-medium'>
                      {zone.name}
                    </h3>
                    <p className='text-slate-400 text-sm'>Area : {zone.area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          className='mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white'
          onClick={handleBack}
        >
          Save
        </Button>
      </div>
    </motion.div>
  )

  return (
    <div className='w-[380px] h-screen bg-[#0B1121] rounded-l-3xl overflow-hidden relative'>
      <AnimatePresence initial={false} mode='wait'>
        {!isZoneView ? (
          <DriverListView key='driver-list' />
        ) : (
          <ZoneSelectionView key='zone-selection' />
        )}
      </AnimatePresence>
    </div>
  )
}

export default DriverAssignment
