import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Grid as GridIcon,
  List,
  Map,
  Upload,
} from 'lucide-react'
import React, { useState } from 'react'
import UploadModal from '../../components/Address/UploadModal'
import AppLayout from '../../utils/AppLayout'

const AddressListTable = () => {
  const [viewType, setViewType] = useState('list')
  const [currentPage, setCurrentPage] = useState(2)

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const data = [
    {
      date: 'September 24, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 43,
    },
    {
      date: 'September 23, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 67,
    },
    {
      date: 'September 22, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 56,
    },
    {
      date: 'September 21, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 56,
    },
    {
      date: 'September 20, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 56,
    },
    {
      date: 'September 19, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 56,
    },
    {
      date: 'September 19, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 56,
    },
    {
      date: 'September 19, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 56,
    },
    {
      date: 'September 19, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 56,
    },
    {
      date: 'September 19, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 21,
    },
    {
      date: 'September 19, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 46,
    },
    {
      date: 'September 19, 2024',
      file: 'address_list_10_09_2024.csv',
      total: 45,
    },
  ]

  const TableView = () => (
    <div className='w-full'>
      <div className='grid grid-cols-12 text-sm font-medium text-gray-400 p-4'>
        <div className='col-span-3 md:col-span-3'>DATE</div>
        <div className='col-span-5 md:col-span-6'>FILE</div>
        <div className='col-span-4 md:col-span-3'>TOTAL ROUTE</div>
      </div>

      <div className='divide-y divide-[#1E293B]'>
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className='grid grid-cols-12 items-center p-4 text-white bg-[#0b1425] hover:bg-[#1E293B] transition-colors'
          >
            <div className='col-span-3 md:col-span-3 text-sm'>{item.date}</div>
            <div className='col-span-5 md:col-span-6 text-sm'>
              <a href='#' className='text-[#5BB6B3] hover:underline'>
                {item.file}
              </a>
            </div>
            <div className='col-span-4 md:col-span-3 flex items-center justify-between gap-2'>
              <span className='text-sm'>{item.total}</span>
              <button className='bg-[#2D62A0] text-white px-2 py-1 rounded flex items-center gap-1 hover:bg-[#245089] transition-colors text-sm'>
                <Map size={14} />
                <span className='hidden sm:inline'>View on Map</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const GridView = () => (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className='bg-[#0b1425] hover:bg-[#1E293B] p-4 rounded-lg transition-colors'
        >
          <div className='flex flex-col gap-2'>
            <div className='text-gray-400 text-sm'>{item.date}</div>
            <a href='#' className='text-[#5BB6B3] hover:underline text-sm'>
              {item.file}
            </a>
            <div className='flex items-center justify-between mt-2'>
              <span className='text-white text-sm'>Total: {item.total}</span>
              <button className='bg-[#2D62A0] text-white px-2 py-1 rounded flex items-center gap-1 hover:bg-[#245089] transition-colors text-sm'>
                <Map size={14} />
                <span>View</span>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  return (
    <AppLayout>
      <div className='bg-[#0B1425] relative z-0'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-full'
        >
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6'>
            <h1 className='text-2xl font-semibold text-white'>Address</h1>
            <div className='flex items-center gap-4 w-full sm:w-auto'>
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className='flex items-center gap-2 bg-[#5BB6B3] text-white px-4 py-2 rounded hover:bg-[#4A9593] transition-colors flex-1 sm:flex-none justify-center sm:justify-start'
              >
                <Upload size={20} />
                Upload Address
              </button>
              <div className='flex items-center bg-[#1E293B] rounded'>
                <button
                  className={`p-2 ${
                    viewType === 'list' ? 'text-[#5BB6B3]' : 'text-gray-400'
                  }`}
                  onClick={() => setViewType('list')}
                >
                  <List size={20} />
                </button>
                <button
                  className={`p-2 ${
                    viewType === 'grid' ? 'text-[#5BB6B3]' : 'text-gray-400'
                  }`}
                  onClick={() => setViewType('grid')}
                >
                  <GridIcon size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className='bg-[#0F2942] rounded-lg overflow-hidden relative'>
            <AnimatePresence mode='wait'>
              {viewType === 'list' ? <TableView /> : <GridView />}
            </AnimatePresence>

            <div className='flex flex-col sm:flex-row items-center justify-between p-4 border-t border-[#1E293B] gap-4 bg-[#0F2942]'>
              <div className='text-sm text-gray-400'>56 files uploaded</div>
              <div className='flex items-center gap-2'>
                <button className='p-2 text-gray-400 hover:text-white disabled:opacity-50'>
                  <ChevronLeft size={20} />
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? 'bg-[#2D62A0] text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                <button className='p-2 text-gray-400 hover:text-white'>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </AppLayout>
  )
}

export default AddressListTable
