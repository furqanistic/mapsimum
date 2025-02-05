import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, MessageSquare, Phone, Search } from 'lucide-react'
import React, { useState } from 'react'

const ZoneSelectionModal = ({ isOpen, onClose, driver }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedZones, setSelectedZones] = useState([2, 5, 6, 9])

  const zones = Array(10)
    .fill()
    .map((_, i) => ({
      id: i + 1,
      name: 'MetroBridge Zone',
      area: '100Km',
    }))

  const filteredZones = zones.filter((zone) =>
    zone.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ x: 380 }}
      animate={{ x: 0 }}
      exit={{ x: 380 }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className='fixed inset-y-0 right-0 w-[380px] bg-[#0B1121] shadow-xl flex flex-col h-screen'
    >
      <div className='p-5 flex flex-col h-full'>
        {/* Header */}
        <div className='flex items-center gap-3 mb-6'>
          <button
            onClick={onClose}
            className='text-white hover:text-slate-300 transition-colors'
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className='text-xl font-semibold text-white'>Select Zone</h1>
        </div>

        {/* Driver Info Card */}
        <div className='bg-[#1D2B44] rounded-lg p-4 mb-6'>
          <div className='flex items-center gap-3 mb-4'>
            <img
              src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg'
              alt={driver.name}
              className='w-12 h-12 rounded-full object-cover'
            />
            <span className='text-white text-lg font-medium'>
              {driver.name}
            </span>
          </div>
          <div className='flex gap-3'>
            <Button
              variant='outline'
              className='flex-1 bg-transparent border-slate-600 hover:bg-slate-700 text-white'
              onClick={() => {}}
            >
              <Phone size={16} className='mr-2' />
              Call
            </Button>
            <Button
              variant='outline'
              className='flex-1 bg-transparent border-slate-600 hover:bg-slate-700 text-white'
              onClick={() => {}}
            >
              <MessageSquare size={16} className='mr-2' />
              Message
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className='relative mb-4'>
          <Search
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400'
            size={16}
          />
          <input
            type='text'
            placeholder='Search driver...'
            className='w-full bg-[#151F32] text-sm text-white pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500/30'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Selected Count */}
        <div className='text-slate-400 text-sm mb-4'>
          {selectedZones.length} Zones Selected
        </div>

        {/* Zones List */}
        <div className='flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700/20'>
          <div className='space-y-4'>
            {filteredZones.map((zone) => (
              <div
                key={zone.id}
                className='flex items-center justify-between border-b border-slate-700/20 pb-4'
              >
                <div className='flex items-center gap-3'>
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

        {/* Save Button */}
        <Button
          className='mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white'
          onClick={onClose}
        >
          Save
        </Button>
      </div>
    </motion.div>
  )
}

export default ZoneSelectionModal
