import { Fuel, X } from 'lucide-react'
import React from 'react'

const GasReceiptModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black bg-opacity-50'></div>
      <div className='relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4'>
        <div className='p-6 space-y-4'>
          <div className='flex justify-between items-center'>
            <h2 className='text-xl font-bold'>Gas Receipt</h2>
            <button
              onClick={onClose}
              className='text-gray-400 hover:text-gray-600'
            >
              <X size={24} />
            </button>
          </div>
          <img
            src='https://www.shutterstock.com/image-vector/barcode-icon-vector-simple-fake-600nw-2497908549.jpg'
            alt='Barcode'
            className='w-full'
          />
          <div className='text-center'>
            <p className='font-semibold'>TC# 0086 9653 5503 9543 0045</p>
            <p className='text-gray-600'>Fuel station - Pump 3</p>
          </div>
          <div className='border-t pt-4'>
            <h3 className='font-semibold mb-2'>TOTAL</h3>
            <div className='flex justify-between'>
              <span>Subtotal</span>
              <span>$46.01</span>
            </div>
            <div className='flex justify-between font-semibold'>
              <span>Total</span>
              <span>$46.01</span>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img
                src='../../../public/mastercard.png'
                alt='Mastercard logo'
                className='mr-2'
              />
              <span>•••• •••• •••• 0829</span>
            </div>
            <span>$46.01</span>
          </div>
          <div className='border-t pt-4'>
            <h3 className='font-semibold mb-2'>PURCHASED ITEMS (1)</h3>
            <div className='flex items-start'>
              <Fuel className='h-16 w-16' />
              <div className='ml-4 flex-grow'>
                <p className='font-semibold text-lg'>UNLEAD</p>
                <p className='text-gray-600'>Gal: 11.336</p>
                <p className='text-gray-600'>$4.059/gal</p>
              </div>
              <span className='font-semibold text-xl'>$46.01</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GasReceiptModal
