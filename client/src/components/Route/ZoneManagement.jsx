import { ChevronDown, Maximize, X } from 'lucide-react'
import React, { useState } from 'react'

const ToggleSwitch = ({ isOn, onToggle, label }) => (
  <div className='flex items-center gap-3'>
    <button
      onClick={onToggle}
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 ${
        isOn ? 'bg-teal-400' : 'bg-slate-600'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-1 ring-black/5 transition-transform duration-300 ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
    <span className='text-white text-sm font-medium'>{label}</span>
  </div>
)

const ZonesSidebar = () => {
  const [showZonesOnMap, setShowZonesOnMap] = useState(true)

  const zones = Array(13).fill({
    name: 'MetroBridge Zone',
    area: '100Km',
  })

  return (
    <div className='fixed top-16 right-0 z-30'>
      <div
        className={`w-80 bg-[#021026] shadow-xl flex flex-col relative transition-all duration-300 ${
          showZonesOnMap ? 'h-[calc(100vh-64px)]' : 'h-auto'
        }`}
      >
        {/* Header */}
        <div className='p-6 flex items-center justify-between'>
          <h2 className='text-white text-xl font-semibold'>28 Zones Created</h2>
          <button className='text-teal-400 hover:text-teal-300 transition-colors'>
            <Maximize className='w-5 h-5' />
          </button>
        </div>

        {/* Toggle */}
        <div className='px-6 pb-6'>
          <ToggleSwitch
            isOn={showZonesOnMap}
            onToggle={() => setShowZonesOnMap(!showZonesOnMap)}
            label='Show Zones on map'
          />
        </div>

        {/* Zones List - Only shown when toggle is on */}
        {showZonesOnMap && (
          <div className='flex-1 overflow-y-auto relative'>
            <div className='divide-y divide-slate-800'>
              {zones.map((zone, index) => (
                <div
                  key={index}
                  className='hover:bg-slate-800/50 transition-colors cursor-pointer p-6 space-y-1'
                >
                  <h3 className='text-white text-lg font-medium'>
                    {zone.name}
                  </h3>
                  <p className='text-slate-400 text-sm'>Area : {zone.area}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Modal = ({ title, onClose, children }) => (
  <div className='fixed inset-0 z-50 flex items-start justify-center p-4'>
    <div className='fixed inset-0 bg-black/50' onClick={onClose} />
    <div className='relative w-full max-w-lg bg-[#0B1425] rounded-lg shadow-xl mt-16'>
      <div className='p-4'>
        {/* Header */}
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-lg text-white font-medium'>{title}</h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-white transition-colors bg-gray-800 p-1.5 rounded-lg'
          >
            <X className='w-4 h-4' />
          </button>
        </div>
        {children}
      </div>
    </div>
  </div>
)

const FormInput = ({ label, placeholder }) => (
  <div className='space-y-1.5'>
    <label className='text-white text-sm'>{label}</label>
    <input
      type='text'
      placeholder={placeholder}
      className='w-full px-3 py-2 bg-[#021026] border border-gray-800 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500'
    />
  </div>
)

const CreateZoneModals = ({ modalType, onClose }) => {
  if (!modalType) return null

  const renderModalContent = () => {
    switch (modalType) {
      case 'zip':
        return (
          <Modal title='Create zone by zip code' onClose={onClose}>
            <div className='space-y-4'>
              <FormInput label='ZIP Code' placeholder='Enter ZIP Code' />
              <FormInput label='Zone Name' placeholder='Enter zone name' />
              <div className='flex justify-end mt-6'>
                <button className='bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'>
                  Add to Zone
                </button>
              </div>
            </div>
          </Modal>
        )

      case 'block':
        return (
          <Modal title='Create zone by Block' onClose={onClose}>
            <div className='space-y-4'>
              <FormInput label='From Block' placeholder='Enter block name' />
              <FormInput label='To Block' placeholder='Enter block name' />
              <FormInput label='Zone Name' placeholder='Enter zone name' />
              <div className='flex justify-end mt-6'>
                <button className='bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'>
                  Add to Zone
                </button>
              </div>
            </div>
          </Modal>
        )

      case 'manual':
        return (
          <Modal title='Create zone by Manual Draw' onClose={onClose}>
            <div className='space-y-4'>
              <FormInput label='Zone Name' placeholder='Enter zone name' />
              <div className='flex justify-end mt-6'>
                <button className='bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'>
                  Add to Zone
                </button>
              </div>
            </div>
          </Modal>
        )

      default:
        return null
    }
  }

  return renderModalContent()
}

const ZoneManagement = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(null)

  const handleModalOpen = (type) => {
    setActiveModal(type)
    setIsDropdownOpen(false)
  }

  return (
    <div className='relative h-full'>
      {/* Map Background */}
      <div
        className='absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0'
        style={{
          backgroundImage: `url('/api/placeholder/1400/800')`,
        }}
      />

      {/* Overlay Container */}
      <div className='relative z-10 p-6'>
        <div className='flex justify-between items-start'>
          {/* Left side - Create Zone Dropdown */}
          <div className='relative'>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='bg-teal-400 hover:bg-teal-500 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors shadow-lg'
            >
              Create new Zone
              <ChevronDown className='w-4 h-4' />
            </button>

            {isDropdownOpen && (
              <div className='absolute top-full left-0 mt-2 w-48 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl overflow-hidden z-20'>
                <div className='py-1'>
                  <button
                    onClick={() => handleModalOpen('manual')}
                    className='w-full px-4 py-2.5 text-sm text-white hover:bg-slate-700/70 text-left'
                  >
                    By Manual Drawing
                  </button>
                  <button
                    onClick={() => handleModalOpen('zip')}
                    className='w-full px-4 py-2.5 text-sm text-white hover:bg-slate-700/70 text-left'
                  >
                    By ZIP Code
                  </button>
                  <button
                    onClick={() => handleModalOpen('block')}
                    className='w-full px-4 py-2.5 text-sm text-white hover:bg-slate-700/70 text-left'
                  >
                    By Blocks
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <CreateZoneModals
        modalType={activeModal}
        onClose={() => setActiveModal(null)}
      />

      {/* Sidebar */}
      <ZonesSidebar />
    </div>
  )
}

export default ZoneManagement
