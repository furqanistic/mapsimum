import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import AppLayout from '@/utils/AppLayout'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CreateWarehouseForm from './CreateWarehouseForm'

const WarehouseDashboard = () => {
  const navigate = useNavigate()

  const warehouses = [
    {
      name: 'Seattle Distribution Hub',
      location: '1000 Pine Street, Downtown Seattle, WA',
      bins: 150,
      belts: 12,
      capacity: '12,000 parcels',
    },
    {
      name: 'Tacoma Sorting Center',
      location: '4520 4th Avenue NE, University District, Seattle, WA',
      bins: 150,
      belts: 12,
      capacity: '12,000 parcels',
    },
    {
      name: 'Bellevue Logistics Center',
      location: '12345 Main Street, Bellevue, WA',
      bins: 200,
      belts: 15,
      capacity: '15,000 parcels',
    },
    {
      name: 'Everett Fulfillment Warehouse',
      location: '6789 Broadway Avenue, Everett, WA',
      bins: 180,
      belts: 10,
      capacity: '10,000 parcels',
    },
    {
      name: 'Spokane Regional Hub',
      location: '4567 Riverside Drive, Spokane, WA',
      bins: 220,
      belts: 18,
      capacity: '20,000 parcels',
    },
    {
      name: 'Yakima Distribution Center',
      location: '9876 Yakima Avenue, Yakima, WA',
      bins: 130,
      belts: 8,
      capacity: '8,000 parcels',
    },
    {
      name: 'Olympia Sorting Facility',
      location: '321 Capitol Way, Olympia, WA',
      bins: 170,
      belts: 14,
      capacity: '14,000 parcels',
    },
    {
      name: 'Bellingham Logistics Hub',
      location: '5555 Lakeway Drive, Bellingham, WA',
      bins: 190,
      belts: 16,
      capacity: '16,000 parcels',
    },
    {
      name: 'Vancouver Distribution Center',
      location: '777 Columbia Street, Vancouver, WA',
      bins: 210,
      belts: 20,
      capacity: '22,000 parcels',
    },
    {
      name: 'Redmond Fulfillment Center',
      location: '8888 164th Avenue NE, Redmond, WA',
      bins: 160,
      belts: 12,
      capacity: '12,000 parcels',
    },
  ]

  const handleViewWarehouse = (warehouseId) => {
    navigate(`/warehouse/view/${warehouseId}`)
  }

  // Mobile Card View Component
  const MobileWarehouseCard = ({ warehouse }) => (
    <Card className='bg-slate-800/50 p-4 space-y-3 md:hidden'>
      <div className='flex justify-between items-start gap-2'>
        <h3 className='text-white font-medium'>{warehouse.name}</h3>
        <Button
          className='bg-blue-600 hover:bg-blue-700 text-white text-sm shrink-0'
          onClick={() => handleViewWarehouse(warehouse.id)}
        >
          View Warehouse
        </Button>
      </div>
      <div className='space-y-2'>
        <div>
          <p className='text-slate-500 text-sm'>Location</p>
          <p className='text-slate-400'>{warehouse.location}</p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='text-slate-500 text-sm'>Bins & Belts</p>
            <p className='text-slate-400'>Bins: {warehouse.bins}</p>
            <p className='text-slate-400'>Belts: {warehouse.belts}</p>
          </div>
          <div>
            <p className='text-slate-500 text-sm'>Capacity</p>
            <p className='text-slate-400'>{warehouse.capacity}</p>
          </div>
        </div>
      </div>
    </Card>
  )

  // Desktop Table View Component
  const DesktopTableView = () => (
    <div className='hidden md:block bg-slate-900 rounded-lg'>
      <div className='grid grid-cols-[2fr_3fr_1.5fr_1fr_1fr] gap-4 px-6 py-4 border-b border-slate-800'>
        <div className='text-sm font-medium text-slate-400'>WAREHOUSE NAME</div>
        <div className='text-sm font-medium text-slate-400'>LOCATION</div>
        <div className='text-sm font-medium text-slate-400'>BINS & BELTS</div>
        <div className='text-sm font-medium text-slate-400'>CAPACITY</div>
        <div className='text-sm font-medium text-slate-400'></div>
      </div>

      <div>
        {warehouses.map((warehouse, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className='grid grid-cols-[2fr_3fr_1.5fr_1fr_1fr] gap-4 px-6 py-4 hover:bg-slate-800/50 border-b border-slate-800 last:border-b-0 items-center'
          >
            <div>
              <h3 className='text-white font-medium'>{warehouse.name}</h3>
            </div>
            <div className='text-slate-400'>{warehouse.location}</div>
            <div className='text-slate-400'>
              <div>Bins: {warehouse.bins}</div>
              <div>Belts: {warehouse.belts}</div>
            </div>
            <div className='text-slate-400'>{warehouse.capacity}</div>
            <div className='flex justify-end'>
              <Button
                className='bg-blue-600 hover:bg-blue-700 text-white text-sm whitespace-nowrap'
                onClick={() => handleViewWarehouse(warehouse.id)}
              >
                View Warehouse
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  return (
    <AppLayout>
      <div className='min-h-screen  p-4 md:p-6'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='max-w-7xl mx-auto'
        >
          {/* Header - Responsive */}
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
            <h1 className='text-white text-xl md:text-2xl font-semibold'>
              Warehouse
            </h1>
            <CreateWarehouseForm />
          </div>

          {/* Mobile Cards */}
          <div className='space-y-4 md:hidden'>
            {warehouses.map((warehouse, index) => (
              <MobileWarehouseCard key={index} warehouse={warehouse} />
            ))}
          </div>

          {/* Desktop Table */}
          <DesktopTableView />

          {/* Pagination - Responsive */}
          <div className='flex flex-wrap items-center justify-center sm:justify-start gap-1 mt-4'>
            <Button
              variant='ghost'
              className='text-slate-400 hover:text-white hover:bg-slate-800'
            >
              Previous
            </Button>
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                variant='ghost'
                className={`min-w-[40px] ${
                  page === 2
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {page}
              </Button>
            ))}
            <Button
              variant='ghost'
              className='text-slate-400 hover:text-white hover:bg-slate-800'
            >
              Next
            </Button>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  )
}

export default WarehouseDashboard
