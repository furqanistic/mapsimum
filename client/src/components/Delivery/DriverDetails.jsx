import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronLeft, MessageSquare, Phone } from 'lucide-react'
import React, { useState } from 'react'

const RouteStop = ({ number, address, area }) => (
  <div className='flex items-start gap-4 relative'>
    <div className='flex flex-col items-center'>
      <div className='w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-medium'>
        {number}
      </div>
      {number !== 19 && <div className='w-0.5 h-16 bg-blue-500/20 mt-2'></div>}
    </div>
    <div className='flex-1 pb-8'>
      <h3 className='text-white text-sm font-medium'>{address}</h3>
      <p className='text-slate-400 text-xs mt-1'>Area : {area}</p>
    </div>
  </div>
)

const MetricsItem = ({ label, value }) => (
  <div className='py-3'>
    <div className='flex items-center justify-between'>
      <span className='text-slate-300 text-sm'>{label}</span>
      <span className='text-white font-medium'>{value}</span>
    </div>
  </div>
)

const DriverDetails = ({ isOpen, onClose, driver }) => {
  const [isMetricsExpanded, setIsMetricsExpanded] = useState(false)

  const routeStops = Array(8).fill({
    address: '3451 Macbeth Ave Apt 4J New York, New York 10018',
    area: '100Km',
  })

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className='fixed top-0 right-0 h-full bg-[#0B1425] shadow-xl z-40 overflow-y-auto border-l border-gray-800'
      style={{
        width: '380px',
      }}
    >
      <div className='sticky top-0 left-0 right-0 h-16 bg-[#0B1425] border-b border-gray-800 flex items-center px-5 z-10'>
        <button
          onClick={onClose}
          className='p-2 hover:bg-slate-800/50 rounded-lg text-slate-400 hover:text-white transition-colors'
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className='text-white text-base font-medium ml-3'>Driver</h1>
      </div>

      <div className='p-5 mt-2'>
        {/* Driver Info Card */}
        <div className='bg-gradient-to-r from-[#1a365d] to-[#1e4976] rounded-lg p-5 mb-6'>
          <div className='flex items-center gap-4 mb-4'>
            <img
              src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg'
              alt={driver?.name}
              className='w-12 h-12 rounded-full object-cover'
            />
            <div className='flex-1'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400'>
                  In Transit
                </span>
                <span className='text-slate-300 text-sm'>- Speed: 70 km/h</span>
              </div>
              <h2 className='text-white text-xl font-semibold'>
                Roger Jameson
              </h2>
            </div>
          </div>

          <div className='flex gap-3'>
            <Button
              variant='outline'
              className='flex-1 h-12 text-base font-medium bg-[#5eead4]/20 text-white border-0 hover:bg-[#5eead4]/30'
            >
              <Phone size={18} className='mr-2' />
              Call
            </Button>
            <Button
              variant='outline'
              className='flex-1 h-12 text-base font-medium bg-[#5eead4]/20 text-white border-0 hover:bg-[#5eead4]/30'
            >
              <MessageSquare size={18} className='mr-2' />
              Message
            </Button>
          </div>
        </div>

        {/* Driver Metrics */}
        <div className='bg-[#0f1c2d] rounded-xl overflow-hidden mb-6'>
          <button
            onClick={() => setIsMetricsExpanded(!isMetricsExpanded)}
            className='w-full p-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors'
          >
            <h3 className='text-white text-base font-medium'>Driver Metrics</h3>
            <ChevronDown
              size={20}
              className={`text-slate-400 transition-transform ${
                isMetricsExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {isMetricsExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='border-t border-slate-700/50'
              >
                <div className='p-4 space-y-2'>
                  <MetricsItem label='Number of Stops Completed' value='27' />
                  <MetricsItem label='Total Number of Stops' value='74' />
                  <MetricsItem label='ETA to Next Stop' value='5 m 41s' />
                  <MetricsItem label='Current Route Time' value='45 m 41s' />
                  <MetricsItem
                    label='Estimated Total Route Time'
                    value='75 m 28s'
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Route Information */}
        <div>
          <h3 className='text-slate-400 text-xs mb-6'>
            Detail Route Information
          </h3>
          <div className='space-y-2'>
            {routeStops.map((stop, index) => (
              <RouteStop
                key={index}
                number={25 - index}
                address={stop.address}
                area={stop.area}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default DriverDetails
