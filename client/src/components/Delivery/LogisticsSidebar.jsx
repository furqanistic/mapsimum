import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, Clock, MapPin, Search, Truck } from 'lucide-react'
import React, { useState } from 'react'
import DriverDetails from './DriverDetails'

const DriverCard = ({
  driver,
  status,
  speed,
  route,
  stopsCompleted,
  lastMoved,
  hasIssue,
  onTrack,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Transit':
        return 'bg-emerald-500/10 text-emerald-400'
      case 'Idle':
        return 'bg-slate-500/10 text-slate-400'
      case 'Issue':
        return 'bg-red-500/10 text-red-400'
      default:
        return 'bg-slate-500/10 text-slate-400'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='border-b border-slate-700/20 pb-4 mb-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 rounded-full overflow-hidden'>
              <img
                src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg'
                alt={driver}
                className='w-full h-full object-cover'
              />
            </div>
            <div>
              <h3 className='text-white text-sm font-medium'>{driver}</h3>
              <div className='flex items-center space-x-2 text-xs text-slate-400'>
                <MapPin size={14} />
                <span>Route: {route}</span>
              </div>
            </div>
          </div>
          <div className='text-right'>
            <span className='text-sm font-medium text-white'>
              {stopsCompleted}/10
            </span>
            <p className='text-xs text-slate-400'>Stops done</p>
          </div>
        </div>

        <div className='mt-3'>
          <div className='flex items-center justify-between'>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                status
              )}`}
            >
              {status} {speed && `- Speed: ${speed}`}
            </span>
            <Button
              variant='outline'
              size='sm'
              className='bg-transparent border-slate-600 hover:bg-slate-700 text-white h-8 text-xs'
              onClick={onTrack}
            >
              Track
            </Button>
          </div>
          {lastMoved && (
            <div className='mt-2 flex items-center text-xs text-slate-400'>
              <Clock size={14} className='mr-1' />
              Last moved: {lastMoved}
            </div>
          )}
          {hasIssue && (
            <div className='mt-2 flex items-center text-xs text-red-400'>
              <AlertCircle size={14} className='mr-1' />
              Vehicle Issue
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const LogisticsSidebar = () => {
  const [isActive, setIsActive] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDriver, setSelectedDriver] = useState(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const allDrivers = [
    {
      name: 'Roger Jameson',
      status: 'In Transit',
      speed: '70 km/h',
      route: 'Seattle A',
      stopsCompleted: 7,
      lastMoved: null,
      hasIssue: false,
      isActive: true,
    },
    {
      name: 'Daniel Matthews',
      status: 'Idle',
      speed: null,
      route: 'Seattle A',
      stopsCompleted: 7,
      lastMoved: '08:45 AM',
      hasIssue: false,
      isActive: true,
    },
    {
      name: 'Daniel Matthews',
      status: 'In Transit',
      speed: '110 km/h',
      route: 'Seattle A',
      stopsCompleted: 7,
      lastMoved: null,
      hasIssue: false,
      isActive: true,
    },
    {
      name: 'Daniel Matthews',
      status: 'Issue',
      speed: null,
      route: 'Seattle A',
      stopsCompleted: 7,
      lastMoved: null,
      hasIssue: true,
      isActive: false,
    },
  ]

  const filteredDrivers = allDrivers
    .filter((driver) => driver.isActive === isActive)
    .filter(
      (driver) =>
        driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        driver.route.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const handleTrack = (driver) => {
    setSelectedDriver(driver)
    setIsDetailsOpen(true)
  }

  return (
    <>
      <div className='absolute top-0 right-0 w-[380px] h-[calc(100vh-64px)] mt-16 bg-[#0B1121] border-l border-gray-800'>
        <div className='p-5 flex flex-col h-full'>
          <div className='mb-6'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-xl font-semibold text-white'>Ontrac</h2>
              <div className='flex space-x-2'>
                <Button
                  variant='outline'
                  className={`h-8 text-xs transition-colors ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20 hover:bg-emerald-500/20'
                      : 'bg-transparent border-slate-600 hover:bg-slate-700 text-white'
                  }`}
                  onClick={() => setIsActive(true)}
                >
                  Active
                </Button>
                <Button
                  variant='outline'
                  className={`h-8 text-xs transition-colors ${
                    !isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20 hover:bg-emerald-500/20'
                      : 'bg-transparent border-slate-600 hover:bg-slate-700 text-white'
                  }`}
                  onClick={() => setIsActive(false)}
                >
                  Inactive
                </Button>
              </div>
            </div>
            <p className='text-slate-400 text-sm'>
              {filteredDrivers.length} {isActive ? 'active' : 'inactive'}{' '}
              drivers
            </p>
          </div>

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
            <AnimatePresence mode='wait'>
              <motion.div className='space-y-4'>
                {filteredDrivers.map((driver, index) => (
                  <DriverCard
                    key={index}
                    driver={driver.name}
                    status={driver.status}
                    speed={driver.speed}
                    route={driver.route}
                    stopsCompleted={driver.stopsCompleted}
                    lastMoved={driver.lastMoved}
                    hasIssue={driver.hasIssue}
                    onTrack={() => handleTrack(driver)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isDetailsOpen && (
          <DriverDetails
            isOpen={isDetailsOpen}
            onClose={() => setIsDetailsOpen(false)}
            driver={selectedDriver}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default LogisticsSidebar
