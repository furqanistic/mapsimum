import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import AppLayout from '@/utils/AppLayout'
import { Camera } from 'lucide-react'
import React from 'react'

const MemberRegistration = () => {
  return (
    <AppLayout>
      <div className='min-h-screen bg-[#0b1425]'>
        <div className='max-w-[1400px] mx-auto p-6 lg:p-8'>
          <h1 className='text-2xl font-semibold text-white mb-6'>
            Invite Member by Account Registration
          </h1>

          {/* Team Info Card */}
          <div className='bg-[#0b1b32] rounded-2xl overflow-hidden mb-8'>
            <div className='flex items-center justify-between px-8 py-6'>
              <div className='flex items-center gap-4'>
                <div className='w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-[#8547c6] to-[#ef7f56] flex items-center justify-center flex-shrink-0'>
                  <img
                    src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg'
                    alt='Team Logo'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <h2 className='text-white text-xl font-medium'>
                    Seattle Lightning
                  </h2>
                  <div className='flex items-center gap-2 text-[15px] text-gray-400'>
                    <span>Route :</span>
                    <span className='text-white'>Route A</span>
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-20'>
                <div>
                  <span className='text-gray-400 text-[15px] block mb-1'>
                    Description
                  </span>
                  <p className='text-gray-400 text-[15px] max-w-md'>
                    A fast delivery team serving Seattle and surrounding areas,
                    focused on speed and customer satisfaction
                  </p>
                </div>

                <div>
                  <span className='text-gray-400 text-[15px] block mb-1'>
                    Coordinator
                  </span>
                  <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 rounded-full overflow-hidden'>
                      <img
                        src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg'
                        alt='Coordinator'
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <span className='text-gray-400 text-[15px]'>
                      David Brooks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className='max-w-2xl'>
            {/* Profile Picture */}
            <div className='mb-6'>
              <label className='block text-white text-sm mb-3'>
                Profile picture
              </label>
              <div className='flex items-center gap-4'>
                <div className='w-16 h-16 rounded-full bg-[#1a2942] flex items-center justify-center'>
                  <Camera className='text-gray-400' size={24} />
                </div>
                <Button
                  variant='outline'
                  className='bg-[#95c4c2] hover:bg-[#84b3b1] text-white border-0 h-9 px-4 text-sm'
                >
                  <Camera className='mr-2 h-4 w-4' /> Upload Picture
                </Button>
              </div>
            </div>

            {/* Form Fields */}
            <div className='space-y-5'>
              <div>
                <label className='block text-white text-sm mb-2'>ID</label>
                <Input
                  placeholder='Enter member ID...'
                  className='bg-[#0f1c33] border-0 text-gray-300 h-10'
                />
              </div>

              <div>
                <label className='block text-white text-sm mb-2'>Name</label>
                <Input
                  placeholder='Enter full name...'
                  className='bg-[#0f1c33] border-0 text-gray-300 h-10'
                />
              </div>

              <div>
                <label className='block text-white text-sm mb-2'>
                  Phone Number
                </label>
                <Input
                  placeholder='Enter phone number...'
                  className='bg-[#0f1c33] border-0 text-gray-300 h-10'
                />
              </div>

              <div>
                <label className='block text-white text-sm mb-2'>Email</label>
                <Input
                  placeholder='Enter email address...'
                  className='bg-[#0f1c33] border-0 text-gray-300 h-10'
                />
              </div>

              <div>
                <label className='block text-white text-sm mb-2'>Status</label>
                <Select defaultValue='active'>
                  <SelectTrigger className='bg-[#0f1c33] border-0 text-gray-300 h-10'>
                    <SelectValue placeholder='Select status' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='active'>Active</SelectItem>
                    <SelectItem value='inactive'>Inactive</SelectItem>
                    <SelectItem value='pending'>Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <div className='flex justify-end mt-8'>
              <Button className='bg-[#95c4c2] hover:bg-[#84b3b1] text-white h-10 px-6'>
                Send Invitation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default MemberRegistration
