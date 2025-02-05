import AppLayout from '@/utils/AppLayout'
import { Eye, Pencil, Trash2 } from 'lucide-react'
import React from 'react'

const DriversPage = () => {
  const drivers = [
    {
      id: 1,
      joinedAt: 'September 9, 2024',
      name: 'James Levin',
      avatar:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600', // James Levin's avatar
      teams: [
        {
          avatar:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600', // Team 1 avatar
          name: 'Team 1',
        },
        {
          avatar:
            'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600', // Team 2 avatar
          name: 'Team 2',
        },
        {
          avatar:
            'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600', // Team 3 avatar
          name: 'Team 3',
        },
        {
          avatar:
            'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600', // Team 4 avatar
          name: 'Team 4',
        },
      ],
      contact: {
        phone: '+1-655-5488-71',
        email: 'redaniel@gmail.com',
      },
    },
    {
      id: 2,
      joinedAt: 'October 15, 2024',
      name: 'Emily Carter',
      avatar:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600', // Emily Carter's avatar
      teams: [
        {
          avatar:
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600', // Team 5 avatar
          name: 'Team 5',
        },
        {
          avatar:
            'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600', // Team 6 avatar
          name: 'Team 6',
        },
      ],
      contact: {
        phone: '+1-655-1234-56',
        email: 'emilycarter@gmail.com',
      },
    },
    {
      id: 3,
      joinedAt: 'November 20, 2024',
      name: 'Michael Brown',
      avatar:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600', // Michael Brown's avatar
      teams: [
        {
          avatar:
            'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600', // Team 7 avatar
          name: 'Team 7',
        },
        {
          avatar:
            'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600', // Team 8 avatar
          name: 'Team 8',
        },
      ],
      contact: {
        phone: '+1-655-9876-54',
        email: 'michaelbrown@gmail.com',
      },
    },
  ]

  return (
    <AppLayout>
      <div className='min-h-screen '>
        <div className='p-6'>
          <div className='mb-6'>
            <h1 className='text-2xl font-semibold text-white'>Driver</h1>
          </div>

          <div className='rounded-lg bg-[#0b1528] overflow-hidden'>
            {/* Header */}
            <div className='grid grid-cols-[240px_minmax(200px,1fr)_minmax(200px,1fr)_minmax(200px,1fr)_120px] border-b border-[#1a2b3b] px-6'>
              <div className='py-4 text-sm font-medium text-gray-400'>
                JOINED AT
              </div>
              <div className='py-4 text-sm font-medium text-gray-400'>NAME</div>
              <div className='py-4 text-sm font-medium text-gray-400'>
                JOINED TEAM
              </div>
              <div className='py-4 text-sm font-medium text-gray-400'>
                CONTACT
              </div>
              <div className='py-4'></div>
            </div>

            {/* Rows */}
            <div>
              {drivers.map((driver) => (
                <div
                  key={driver.id}
                  className='grid grid-cols-[240px_minmax(200px,1fr)_minmax(200px,1fr)_minmax(200px,1fr)_120px] px-6 border-b border-[#1a2b3b] hover:bg-[#172A3F] transition-colors'
                >
                  <div className='py-4 text-gray-400'>{driver.joinedAt}</div>

                  <div className='py-4 flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full overflow-hidden bg-[#172A3F] flex-shrink-0'>
                      <img
                        src={driver.avatar}
                        alt=''
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <span className='text-white font-medium'>
                      {driver.name}
                    </span>
                  </div>

                  <div className='py-4 flex items-center'>
                    <div className='flex -space-x-3'>
                      {driver.teams.map((team, idx) => (
                        <div
                          key={idx}
                          className='w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#0F2132]'
                        >
                          <img
                            src={team.avatar}
                            alt={team.name}
                            className='w-full h-full object-cover'
                          />
                        </div>
                      ))}
                      <div className='w-8 h-8 rounded-full bg-[#243B52] ring-2 ring-[#0F2132] flex items-center justify-center text-white text-xs font-medium'>
                        +2
                      </div>
                    </div>
                  </div>

                  <div className='py-4 flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                      <span className='text-gray-400'>
                        {driver.contact.phone}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-gray-400'>
                        {driver.contact.email}
                      </span>
                    </div>
                  </div>

                  <div className='py-4 flex items-center justify-end gap-1'>
                    <button className='p-2 rounded-lg hover:bg-[#243B52] text-gray-400 hover:text-white transition-colors'>
                      <Eye className='w-4 h-4' />
                    </button>
                    <button className='p-2 rounded-lg hover:bg-[#243B52] text-gray-400 hover:text-white transition-colors'>
                      <Pencil className='w-4 h-4' />
                    </button>
                    <button className='p-2 rounded-lg hover:bg-[#243B52] text-gray-400 hover:text-white transition-colors'>
                      <Trash2 className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className='px-6 py-4 flex gap-1'>
              <button className='px-4 py-2 text-sm text-gray-400 hover:bg-[#243B52] rounded transition-colors'>
                Previous
              </button>
              <button className='px-4 py-2 text-sm text-gray-400 hover:bg-[#243B52] rounded transition-colors'>
                1
              </button>
              <button className='px-4 py-2 text-sm text-white bg-[#243B52] rounded'>
                2
              </button>
              <button className='px-4 py-2 text-sm text-gray-400 hover:bg-[#243B52] rounded transition-colors'>
                3
              </button>
              <button className='px-4 py-2 text-sm text-gray-400 hover:bg-[#243B52] rounded transition-colors'>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default DriversPage
