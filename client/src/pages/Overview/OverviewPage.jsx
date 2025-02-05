import DeliveryTracking from '@/components/Overview/DeliveryTracking'
import LogisticsDashboard from '@/components/Overview/LogisticsDashboard'
import OverviewCharts from '@/components/Overview/OverviewCharts'
import AppLayout from '@/utils/AppLayout'
import React from 'react'

const OverviewPage = () => {
  return (
    <AppLayout>
      <div className='flex flex-col'>
        <LogisticsDashboard />
        <OverviewCharts />
        <DeliveryTracking />
      </div>
    </AppLayout>
  )
}

export default OverviewPage
