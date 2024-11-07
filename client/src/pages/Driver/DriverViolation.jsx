import ViolationDashboard from '@/components/Driver/ViolationDashboard'
import ViolationDetails from '@/components/Driver/ViolationDetails'
import AppLayout from '@/utils/AppLayout'
import React from 'react'

const DriverViolation = () => {
  return (
    <AppLayout>
      <div className='space-y-6'>
        <ViolationDashboard />
        <ViolationDetails />
      </div>
    </AppLayout>
  )
}

export default DriverViolation
