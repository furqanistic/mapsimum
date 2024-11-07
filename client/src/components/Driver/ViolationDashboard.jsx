import { motion } from 'framer-motion'
import { AlertCircle, Car, Clock, Gauge, RefreshCw } from 'lucide-react'
import React from 'react'

const ViolationDashboard = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className='bg-[#0b1425] text-gray-100 w-full'>
      <div className='max-w-[2000px] mx-auto'>
        {/* Main Grid Layout */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          {/* Left Column - Statistics */}
          <div className='space-y-6'>
            {/* Speeding Violation Card */}
            <motion.div
              {...fadeIn}
              className='bg-[#0f1c31] rounded-xl p-4 md:p-6 shadow-lg border border-[#1b2942]'
            >
              <div className='flex items-center gap-3 mb-4 md:mb-6'>
                <div className='bg-[#162236] p-2 rounded-lg'>
                  <Gauge className='w-5 h-5 md:w-6 md:h-6 text-[#3b82f6]' />
                </div>
                <h2 className='text-lg md:text-xl font-semibold'>
                  Speeding Violation
                </h2>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8'>
                <div className='bg-[#162236] p-4 rounded-lg'>
                  <h3 className='text-2xl md:text-3xl font-bold text-[#3b82f6]'>
                    6
                  </h3>
                  <p className='text-xs md:text-sm text-gray-400 mt-1'>
                    Number of Violations
                  </p>
                </div>
                <div className='bg-[#162236] p-4 rounded-lg'>
                  <h3 className='text-2xl md:text-3xl font-bold text-[#3b82f6]'>
                    2h 30m
                  </h3>
                  <p className='text-xs md:text-sm text-gray-400 mt-1'>
                    Total Violation Time
                  </p>
                </div>
                <div className='bg-[#162236] p-4 rounded-lg'>
                  <h3 className='text-2xl md:text-3xl font-bold text-[#3b82f6]'>
                    4
                  </h3>
                  <p className='text-xs md:text-sm text-gray-400 mt-1'>
                    Total Vehicles Involved
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hard Braking Violation Card */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className='bg-[#0f1c31] rounded-xl p-4 md:p-6 shadow-lg border border-[#1b2942]'
            >
              <div className='flex items-center gap-3 mb-4 md:mb-6'>
                <div className='bg-[#162236] p-2 rounded-lg'>
                  <AlertCircle className='w-5 h-5 md:w-6 md:h-6 text-[#3b82f6]' />
                </div>
                <h2 className='text-lg md:text-xl font-semibold'>
                  Hard Braking Violation
                </h2>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8'>
                <div className='bg-[#162236] p-4 rounded-lg'>
                  <h3 className='text-2xl md:text-3xl font-bold text-[#3b82f6]'>
                    8
                  </h3>
                  <p className='text-xs md:text-sm text-gray-400 mt-1'>
                    Number of Violations
                  </p>
                </div>
                <div className='bg-[#162236] p-4 rounded-lg'>
                  <h3 className='text-2xl md:text-3xl font-bold text-[#3b82f6]'>
                    1h 45m
                  </h3>
                  <p className='text-xs md:text-sm text-gray-400 mt-1'>
                    Total Violation Time
                  </p>
                </div>
                <div className='bg-[#162236] p-4 rounded-lg'>
                  <h3 className='text-2xl md:text-3xl font-bold text-[#3b82f6]'>
                    5
                  </h3>
                  <p className='text-xs md:text-sm text-gray-400 mt-1'>
                    Total Vehicles Involved
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Map */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className='bg-[#0f1c31] rounded-xl p-4 md:p-6 shadow-lg border border-[#1b2942] min-h-[400px] xl:h-full'
          >
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 md:mb-6'>
              <div className='flex items-center gap-3'>
                <div className='bg-[#162236] p-2 rounded-lg'>
                  <Car className='w-5 h-5 md:w-6 md:h-6 text-[#3b82f6]' />
                </div>
                <h2 className='text-lg md:text-xl font-semibold'>
                  Violation Location Tracking
                </h2>
              </div>
              <button className='flex items-center justify-center gap-2 bg-[#162236] px-4 py-2 rounded-lg hover:bg-[#1d2e4a] transition-colors w-full sm:w-auto'>
                <RefreshCw className='w-4 h-4 text-[#3b82f6]' />
                <span className='text-sm'>Refresh</span>
              </button>
            </div>

            <div className='bg-[#162236] rounded-lg h-[300px] md:h-[400px] xl:h-[calc(100%-4rem)] w-full relative'>
              <div className='absolute inset-0'>
                <div className='w-full h-full bg-[#162236] rounded-lg opacity-50'></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ViolationDashboard
