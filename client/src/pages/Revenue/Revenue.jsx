import DeliveryTable from '@/components/Revenue/DeliveryTable'
import MetricsOverview from '@/components/Revenue/MetricsOverview'
import AppLayout from '@/utils/AppLayout'
import React from 'react'

const Revenue = () => {
  return (
    <AppLayout>
      <MetricsOverview />
      <DeliveryTable />
    </AppLayout>
  )
}

export default Revenue
