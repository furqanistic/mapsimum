import AppLayout from '@/utils/AppLayout'
import { ChevronDown, ChevronRight, Upload, Users } from 'lucide-react'
import React, { useState } from 'react'

const CreateTeamForm = () => {
  const [selectedRoute, setSelectedRoute] = useState('')
  const [groupPhoto, setGroupPhoto] = useState(null)

  return (
    <AppLayout>
      <div className='min-h-screen bg-[#0b1425] p-8'>
        <div className='max-w-[800px] mx-auto'>
          {/* Breadcrumb */}
          <div className='mb-6'>
            <h1 className='text-2xl text-white font-semibold mb-2'>
              Create Team
            </h1>
            <div className='flex items-center text-sm text-gray-400'>
              <span className='hover:text-gray-300 cursor-pointer'>Team</span>
              <ChevronRight size={16} className='mx-2' />
              <span className='text-gray-300'>Create Team</span>
            </div>
          </div>

          {/* Form */}
          <div className='space-y-6'>
            {/* Group Photo */}
            <div className='space-y-2'>
              <label className='block text-white'>Group photo</label>
              <div className='flex items-center gap-3'>
                <div className='w-16 h-16 bg-[#1a2942] rounded-full flex items-center justify-center'>
                  {groupPhoto ? (
                    <img
                      src={URL.createObjectURL(groupPhoto)}
                      alt='Group'
                      className='w-full h-full rounded-full object-cover'
                    />
                  ) : (
                    <Users size={24} className='text-gray-400' />
                  )}
                </div>
                <label className='px-4 py-2 bg-[#4fd1c5] hover:bg-[#45b8ae] text-white rounded-lg cursor-pointer text-sm flex items-center gap-2 transition-colors'>
                  <Upload size={16} />
                  Upload Picture
                  <input
                    type='file'
                    className='hidden'
                    onChange={(e) => setGroupPhoto(e.target.files[0])}
                    accept='image/*'
                  />
                </label>
              </div>
            </div>

            {/* Group Name */}
            <div className='space-y-2'>
              <label className='block text-white'>Group name</label>
              <input
                type='text'
                placeholder='Enter group name'
                className='w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#4fd1c5] placeholder-gray-500'
              />
            </div>

            {/* Description */}
            <div className='space-y-2'>
              <label className='block text-white'>Description team</label>
              <textarea
                placeholder='Enter team description...'
                rows={4}
                className='w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#4fd1c5] placeholder-gray-500 resize-none'
              />
            </div>

            {/* Route */}
            <div className='space-y-2'>
              <label className='block text-white'>Route</label>
              <div className='relative'>
                <select
                  value={selectedRoute}
                  onChange={(e) => setSelectedRoute(e.target.value)}
                  className='w-full px-4 py-3 bg-[#1a2942] text-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:border-[#4fd1c5] appearance-none cursor-pointer'
                >
                  <option value=''>- Select route -</option>
                  <option value='route1'>Route 1</option>
                  <option value='route2'>Route 2</option>
                  <option value='route3'>Route 3</option>
                </select>
                <ChevronDown
                  size={20}
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none'
                />
              </div>
            </div>

            {/* Coordinator */}
            <div className='space-y-2'>
              <label className='block text-white'>Coordinator</label>
              <input
                type='text'
                placeholder="Enter coordinator's email or username..."
                className='w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#4fd1c5] placeholder-gray-500'
              />
            </div>

            {/* Member */}
            <div className='space-y-2'>
              <label className='block text-white'>Member</label>
              <input
                type='text'
                placeholder="Enter member's email or username..."
                className='w-full px-4 py-3 bg-[#1a2942] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#4fd1c5] placeholder-gray-500'
              />
            </div>

            {/* Create Button */}
            <div className='flex justify-end'>
              <button className='px-6 py-2.5 bg-[#4fd1c5] hover:bg-[#45b8ae] text-white rounded-lg transition-colors text-sm font-medium'>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default CreateTeamForm
