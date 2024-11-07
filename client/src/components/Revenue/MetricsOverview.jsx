import { Gauge } from 'lucide-react'
import React from 'react'

export const MetricsOverview = () => {
  return (
    <div className='bg-[#0b1425] p-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-5'>
          <h1 className='text-lg font-medium text-slate-100'>Overview</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
          {/* Total Revenue */}
          <div className='bg-slate-800/40 rounded-lg p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300'>
            <div className='flex items-center space-x-3'>
              <div className='p-2 rounded-lg bg-blue-500/10'>
                <Gauge className='w-5 h-5 text-blue-400' />
              </div>
              <div>
                <p className='text-sm font-medium text-slate-400'>
                  Total Revenue
                </p>
                <h3 className='text-xl font-semibold text-slate-100 mt-0.5'>
                  $150,000
                </h3>
              </div>
            </div>
          </div>

          {/* Total Expenses */}
          <div className='bg-slate-800/40 rounded-lg p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300'>
            <div className='flex items-center space-x-3'>
              <div className='p-2 rounded-lg bg-blue-500/10'>
                <Gauge className='w-5 h-5 text-blue-400' />
              </div>
              <div>
                <p className='text-sm font-medium text-slate-400'>
                  Total Expenses
                </p>
                <h3 className='text-xl font-semibold text-slate-100 mt-0.5'>
                  $40,000
                </h3>
              </div>
            </div>
          </div>

          {/* Team Wages */}
          <div className='bg-slate-800/40 rounded-lg p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300'>
            <div className='flex items-center space-x-3'>
              <div className='p-2 rounded-lg bg-blue-500/10'>
                <Gauge className='w-5 h-5 text-blue-400' />
              </div>
              <div>
                <p className='text-sm font-medium text-slate-400'>Team Wages</p>
                <h3 className='text-xl font-semibold text-slate-100 mt-0.5'>
                  $45,000
                </h3>
              </div>
            </div>
          </div>

          {/* Write-Offs */}
          <div className='bg-slate-800/40 rounded-lg p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300'>
            <div className='flex items-center space-x-3'>
              <div className='p-2 rounded-lg bg-blue-500/10'>
                <Gauge className='w-5 h-5 text-blue-400' />
              </div>
              <div>
                <p className='text-sm font-medium text-slate-400'>Write-Offs</p>
                <h3 className='text-xl font-semibold text-slate-100 mt-0.5'>
                  $20,000
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetricsOverview
