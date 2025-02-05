import { ScrollArea } from '@/components/ui/scroll-area'
import { FileSpreadsheet, FileText, Mail, Phone } from 'lucide-react'
import React from 'react'

const ProfileSection = () => {
  return (
    <div className='w-80 bg-slate-900 border-l border-slate-800 flex flex-col h-screen'>
      <ScrollArea className='flex-1'>
        <div className='p-6 space-y-6'>
          {/* Profile Header */}
          <div className='flex flex-col items-center text-center space-y-4'>
            <div className='w-24 h-24 rounded-full overflow-hidden'>
              <img
                src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg'
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>
            <h2 className='text-2xl font-semibold text-white'>Craig Dokidis</h2>

            {/* Contact Info */}
            <div className='space-y-2 w-full'>
              <div className='flex items-center space-x-3 text-slate-400'>
                <Phone className='h-4 w-4' />
                <span>+1-655-5165-08</span>
              </div>
              <div className='flex items-center space-x-3 text-slate-400'>
                <Mail className='h-4 w-4' />
                <span>jakobbotosh@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Shared Photos */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>Shared Photos</h3>
            <div className='grid grid-cols-3 gap-2'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <div
                  key={index}
                  className='aspect-square rounded-lg overflow-hidden bg-slate-800'
                >
                  <img
                    src={`https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg`}
                    alt={`Shared photo ${index}`}
                    className='w-full h-full object-cover'
                  />
                </div>
              ))}
            </div>
            <button className='text-sm text-slate-400 hover:text-slate-300'>
              Show more
            </button>
          </div>

          {/* Shared Files */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>Shared Files</h3>
            <div className='space-y-3'>
              {[
                {
                  name: 'Route_seattle_october.xls',
                  size: '3.4mb',
                  icon: FileSpreadsheet,
                  color: 'text-green-500',
                },
                {
                  name: 'Package_for_craig.doc',
                  size: '3.4mb',
                  icon: FileText,
                  color: 'text-blue-500',
                },
                {
                  name: 'Route_seattle_october.xls',
                  size: '3.4mb',
                  icon: FileSpreadsheet,
                  color: 'text-green-500',
                },
              ].map((file, index) => (
                <div
                  key={index}
                  className='flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50'
                >
                  <div className={`${file.color}`}>
                    <file.icon className='h-5 w-5' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm text-slate-200 truncate'>
                      {file.name}
                    </p>
                    <p className='text-xs text-slate-400'>{file.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

export default ProfileSection
