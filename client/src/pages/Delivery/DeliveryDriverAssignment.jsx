import DriverAssignment from '@/components/Delivery/DriverAssignment'
import AppLayout from '@/utils/AppLayout'
import React from 'react'

const DeliveryDriverAssignment = () => {
  return (
    <AppLayout>
      <div className='flex flex-1 h-screen'>
        {/* Map Container */}
        <div className='flex-1 '>{/* Your map component goes here */}</div>

        {/* Driver Assignment Panel */}
        <DriverAssignment />
      </div>
    </AppLayout>
  )
}

export default DeliveryDriverAssignment
