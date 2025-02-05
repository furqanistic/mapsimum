import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import AppLayout from '@/utils/AppLayout'
import {
  FileSpreadsheet,
  FileText,
  Mail,
  Package,
  Phone,
  Search,
  Send,
} from 'lucide-react'
import React from 'react'
import ProfileSection from './ProfileSection'

// Profile Section Component

// Main Chat Interface Component
const ChatInterface = () => {
  return (
    <AppLayout>
      <div className='flex h-screen bg-slate-900'>
        {/* Sidebar */}
        <div className='w-80 border-r border-slate-800 flex flex-col'>
          {/* Tabs */}
          <div className='p-4 border-b border-slate-800'>
            <div className='flex space-x-2'>
              <Button variant='secondary' className='bg-teal-600 text-white'>
                Personal
              </Button>
              <Button variant='ghost' className='text-slate-400'>
                Team
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className='p-4'>
            <div className='relative'>
              <Search className='absolute left-3 top-3 h-4 w-4 text-slate-400' />
              <Input
                placeholder='Search messages or contact'
                className='pl-10 bg-slate-800 border-slate-700 text-slate-200'
              />
            </div>
          </div>

          {/* Contacts List */}
          <ScrollArea className='flex-1'>
            <div className='space-y-1 p-2'>
              {['Brandon Vaccaro', 'Craig Dokidis', 'Omar Stanton'].map(
                (name, i) => (
                  <div
                    key={name}
                    className='flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer'
                  >
                    <Avatar className='h-10 w-10'>
                      <img
                        src={`https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg`}
                        alt={name}
                        className='rounded-full'
                      />
                    </Avatar>
                    <div className='flex-1 min-w-0'>
                      <p className='text-sm font-medium text-slate-200'>
                        {name}
                      </p>
                      <p className='text-xs text-slate-400 truncate'>
                        Last message preview...
                      </p>
                    </div>
                    <span className='text-xs text-slate-400'>12:32</span>
                  </div>
                )
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Main Chat */}
        <div className='flex-1 flex flex-col'>
          {/* Chat Header */}
          <div className='border-b border-slate-800 p-4'>
            <div className='flex items-center space-x-3'>
              <Avatar className='h-10 w-10'>
                <img
                  src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg'
                  alt='Current chat'
                  className='rounded-full'
                />
              </Avatar>
              <div>
                <h2 className='text-lg font-semibold text-slate-200'>Furqan</h2>
                <p className='text-sm text-slate-400'>Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className='flex-1 p-4'>
            <div className='space-y-4'>
              {/* Delivery Message */}
              <div className='flex flex-col space-y-2'>
                <div className='flex items-center space-x-2'>
                  <Avatar className='h-8 w-8'>
                    <img
                      src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg'
                      alt='User'
                      className='rounded-full'
                    />
                  </Avatar>
                  <span className='text-sm text-slate-400'>Friday 2:20pm</span>
                </div>
                <div className='ml-10'>
                  <div className='bg-teal-600 text-white p-3 rounded-lg inline-block max-w-md'>
                    <p>
                      I've delivered the package to the customer at Melati
                      Street.
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Status Card */}
              <div className='ml-10'>
                <div className='bg-slate-800 rounded-lg p-4 max-w-md'>
                  <div className='flex items-center justify-between mb-2'>
                    <Badge className='bg-green-500'>Delivered</Badge>
                    <span className='text-sm text-slate-400'>
                      12 Sep 2024, 13:12
                    </span>
                  </div>
                  <div className='space-y-2'>
                    <div className='flex items-center space-x-2'>
                      <Package className='h-4 w-4 text-slate-400' />
                      <span className='text-sm text-slate-200'>
                        AB8761524378XY
                      </span>
                    </div>
                    <p className='text-sm text-slate-300'>
                      3500 WHITE PLAINS LANE, APT 3C
                      <br />
                      DALLAS, TEXAS 75045 - 70089
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className='p-4 border-t border-slate-800'>
            <div className='flex items-center space-x-2'>
              <Input
                placeholder='Type your message here...'
                className='flex-1 bg-slate-800 border-slate-700 text-slate-200'
              />
              <Button className='bg-teal-600 hover:bg-teal-700'>
                <Send className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <ProfileSection />
      </div>
    </AppLayout>
  )
}

export default ChatInterface
