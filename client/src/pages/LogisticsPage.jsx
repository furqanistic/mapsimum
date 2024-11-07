import { motion } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const LogisticsPage = () => {
  const logisticPartners = ['Ontract', 'Fedex', '3PL', 'USPS']
  const cities = ['Houston', 'New York', 'Toronto']

  return (
    <div className='h-screen bg-gradient-to-br from-[#0A1628] to-[#133B50] flex items-center'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 h-full md:h-auto'>
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='w-full md:w-1/2 space-y-8 pt-8 md:pt-0'
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src='/Logo.png'
              alt='Mapsimum Logo'
              className='h-12 md:h-14 w-auto'
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='text-3xl md:text-4xl font-bold text-white leading-tight'
          >
            Choose Your Logistic Partner and City
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className='text-[#94A3B8] text-lg'
          >
            Choose a trusted partner and city to streamline your deliveries with
            ease
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className='space-y-6'
          >
            <div className='space-y-2'>
              <label className='text-white text-sm'>Logistic Partner</label>
              <div className='relative group'>
                <select className='w-full bg-[#12243D] text-[#94A3B8] p-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#42B5A4] border border-[#1E3A5F] transition-all hover:border-[#42B5A4]/50'>
                  <option value=''>-Select logistic partner-</option>
                  {logisticPartners.map((partner) => (
                    <option key={partner} value={partner}>
                      {partner}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8] group-hover:text-[#42B5A4] transition-colors'
                  size={20}
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-white text-sm'>City</label>
              <div className='relative group'>
                <select className='w-full bg-[#12243D] text-[#94A3B8] p-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#42B5A4] border border-[#1E3A5F] transition-all hover:border-[#42B5A4]/50'>
                  <option value=''>-Select city-</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8] group-hover:text-[#42B5A4] transition-colors'
                  size={20}
                />
              </div>
            </div>
            <Link to='/login'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='w-full mt-5 bg-[#42B5A4] text-white p-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#3AA091] transition-colors'
              >
                <Search size={20} />
                <span>Search</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className='w-full md:w-1/2 h-[40vh] md:h-[60vh] min-h-[300px]'
        >
          <div className='rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#42B5A4]/10 to-[#42B5A4]/5 p-1 h-full'>
            <img
              src='/welcome/welcome.webp'
              alt='Delivery Partners'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LogisticsPage
