import { MessageCircle, MoreHorizontal, Plus, Users } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const TeamDashboard = () => {
  const teams = [
    {
      name: 'California FastTrack',
      logo: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg',
      messageCount: 23,
      members: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      name: 'Washington Swift',
      logo: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg',
      messageCount: 0,
      members: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      name: 'North American GoFast',
      logo: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg',
      messageCount: 54,
      members: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      name: 'American Velocity',
      logo: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg',
      messageCount: 0,
      members: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      name: 'Oregon Rapid Riders',
      logo: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg',
      messageCount: 0,
      members: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      name: 'Seattle Lightning',
      logo: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg',
      messageCount: 32,
      members: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      name: 'Northwest Express',
      logo: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg',
      messageCount: 0,
      members: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      name: 'West Coast Turbo',
      logo: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg',
      messageCount: 0,
      members: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      name: 'US Quick Route Crew',
      logo: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg',
      messageCount: 23,
      members: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
    {
      name: 'Pacific Northwest Speed',
      logo: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg',
      messageCount: 0,
      members: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ],
    },
  ]

  return (
    <div className='min-h-screen bg-[#0b1425] p-8'>
      <div className='max-w-[1400px] mx-auto'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-white text-2xl font-semibold'>Team</h1>
          <div className='flex gap-4'>
            <button className='bg-[#4fd1c5] hover:bg-[#45b8ae] transition-colors text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium'>
              <Users size={18} />
              <span>Request Join</span>
              <span className='bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 ml-1'>
                5
              </span>
            </button>
            <Link to='/driver/team/create'>
              <button className='bg-[#4fd1c5] hover:bg-[#45b8ae] transition-colors text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium'>
                <Plus size={18} />
                <span>Create Team</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {teams.map((team, index) => (
            <div
              key={index}
              className='bg-[#1a2942] rounded-xl p-5 hover:bg-[#1e3048] transition-colors'
            >
              {/* Card Header */}
              <div className='flex justify-between items-start mb-6'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img
                      src={team.logo}
                      alt={`${team.name} logo`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <h3 className='text-white font-medium text-sm'>
                    {team.name}
                  </h3>
                </div>
                <button className='text-gray-400 hover:text-white transition-colors p-1'>
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Member Section */}
              <div className='flex justify-between items-center mb-6'>
                <div className='flex -space-x-3'>
                  {team.members.map((member, i) => (
                    <div
                      key={i}
                      className='w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#1a2942]'
                    >
                      <img
                        src={member}
                        alt='team member'
                        className='w-full h-full object-cover'
                      />
                    </div>
                  ))}
                  <div className='w-8 h-8 rounded-full bg-[#2a3f5f] ring-2 ring-[#1a2942] flex items-center justify-center text-white text-xs font-medium'>
                    +4
                  </div>
                </div>
                {team.messageCount > 0 && (
                  <div className='flex items-center gap-1.5 text-gray-400'>
                    <MessageCircle size={18} className='text-gray-400' />
                    <span className='text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5'>
                      {team.messageCount}
                    </span>
                  </div>
                )}
              </div>

              {/* Invite Button */}
              <button className='w-full py-2.5 text-[#4fd1c5] border border-[#4fd1c5] rounded-lg hover:bg-[#4fd1c5] hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium'>
                <Users size={16} />
                <span>Invite Member</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamDashboard
