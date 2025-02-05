import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AppLayout from '@/utils/AppLayout'
import {
  ChevronDown,
  Edit2,
  Eye,
  Mail,
  Phone,
  Search,
  Trash2,
} from 'lucide-react'
import React, { useState } from 'react'

const MembersTable = () => {
  const [status, setStatus] = useState('All Status')

  const handleDelete = (memberId) => {
    console.log('Deleting member:', memberId)
    // Add your delete logic here
  }

  const DeleteButton = ({ memberId }) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='bg-[#1B2B4B] text-slate-400 hover:text-white w-8 h-8 rounded-lg'
        >
          <Trash2 size={16} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='bg-[#0B1629] border border-[#2D4675]'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-2xl font-medium text-white'>
            Confirm deletion
          </AlertDialogTitle>
          <AlertDialogDescription className='text-lg text-slate-300'>
            Are you sure you want to remove this member?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='gap-3'>
          <AlertDialogCancel className='bg-[#E2E8F0] hover:bg-[#CBD5E1] text-slate-700 border-0 rounded-lg'>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDelete(memberId)}
            className='bg-red-600 hover:bg-red-700 text-white border-0 rounded-lg'
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )

  const members = [
    {
      id: '397485',
      name: 'James Levin',
      phone: '+1-655-5488-71',
      email: 'redaniel@gmail.com',
      joinedAt: 'September 9, 2024',
      status: 'Active',
      avatar:
        'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg',
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-400/20 text-green-400 rounded-full px-4 py-1'
      case 'Inactive':
        return 'bg-red-400/20 text-red-400 rounded-full px-4 py-1'
      case 'Pending':
        return 'bg-yellow-400/20 text-yellow-400 rounded-full px-4 py-1'
      default:
        return 'bg-gray-400/20 text-gray-400 rounded-full px-4 py-1'
    }
  }

  // Mobile card rendering
  const MobileCard = ({ member }) => (
    <div className='bg-[#1B2B4B] rounded-lg p-4 space-y-4 border border-[#2D4675]'>
      <div className='flex justify-between items-start'>
        <div className='flex items-center gap-3'>
          <img src={member.avatar} alt='' className='w-8 h-8 rounded-full' />
          <div>
            <p className='text-slate-300'>{member.name}</p>
            <p className='text-slate-400 text-sm'>ID: {member.id}</p>
          </div>
        </div>
        <span className={getStatusColor(member.status)}>{member.status}</span>
      </div>

      <div className='space-y-2'>
        <div className='flex items-center gap-2 text-slate-400'>
          <Phone size={16} />
          <span>{member.phone}</span>
        </div>
        <div className='flex items-center gap-2 text-slate-400'>
          <Mail size={16} />
          <span>{member.email}</span>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <span className='text-slate-400'>{member.joinedAt}</span>
        <div className='flex gap-2'>
          <Button
            variant='ghost'
            size='icon'
            className='bg-[#243660] text-slate-400 hover:text-white w-8 h-8 rounded-lg'
          >
            <Eye size={16} />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='bg-[#243660] text-slate-400 hover:text-white w-8 h-8 rounded-lg'
          >
            <Edit2 size={16} />
          </Button>
          <DeleteButton memberId={member.id} />
        </div>
      </div>
    </div>
  )

  return (
    <AppLayout>
      <div className='min-h-screen  p-4 md:p-6'>
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <div className='mb-8'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>
              <h1 className='text-2xl font-semibold text-white'>Member</h1>
              <div className='flex flex-col sm:flex-row gap-3 w-full md:w-auto'>
                <Button
                  variant='outline'
                  className='bg-[#1B2B4B] text-white border-[#2D4675] hover:bg-[#243660]'
                >
                  <span className='flex items-center gap-2'>
                    Review Request{' '}
                    <Badge className='bg-red-500 text-white'>5</Badge>
                  </span>
                </Button>
                <Button className='bg-cyan-600 hover:bg-cyan-700 text-white'>
                  Invite Member
                </Button>
              </div>
            </div>

            {/* Search and Filter */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <div className='relative flex-1'>
                <Search
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400'
                  size={20}
                />
                <Input
                  placeholder='Search member...'
                  className='pl-10 bg-[#1B2B4B] border-[#2D4675] text-white w-full'
                />
              </div>
              <div className='relative'>
                <Button
                  variant='outline'
                  className='bg-[#1B2B4B] text-white border-[#2D4675] hover:bg-[#243660] w-full sm:w-auto'
                >
                  <span className='flex items-center gap-2'>
                    {status} <ChevronDown size={16} />
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Table/Cards */}
          <div>
            {/* Desktop Table */}
            <div className='hidden md:block overflow-x-auto'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='border-b border-[#2D4675]'>
                    <th className='px-6 py-4 text-sm font-medium text-slate-300 text-left'>
                      ID
                    </th>
                    <th className='px-6 py-4 text-sm font-medium text-slate-300 text-left'>
                      NAME
                    </th>
                    <th className='px-6 py-4 text-sm font-medium text-slate-300 text-left'>
                      CONTACT
                    </th>
                    <th className='px-6 py-4 text-sm font-medium text-slate-300 text-left'>
                      JOINED AT
                    </th>
                    <th className='px-6 py-4 text-sm font-medium text-slate-300 text-left'>
                      STATUS
                    </th>
                    <th className='px-6 py-4 text-sm font-medium text-slate-300 text-left'>
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody className='text-slate-300'>
                  {members.map((member) => (
                    <tr
                      key={member.id}
                      className='border-b border-[#2D4675] hover:bg-[#1B2B4B]/50'
                    >
                      <td className='px-6 py-4 text-slate-400'>{member.id}</td>
                      <td className='px-6 py-4'>
                        <div className='flex items-center gap-3'>
                          <img
                            src={member.avatar}
                            alt=''
                            className='w-8 h-8 rounded-full'
                          />
                          <span className='text-slate-300'>{member.name}</span>
                        </div>
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex flex-col gap-1'>
                          <div className='flex items-center gap-2 text-slate-400'>
                            <Phone size={16} />
                            <span>{member.phone}</span>
                          </div>
                          <div className='flex items-center gap-2 text-slate-400'>
                            <Mail size={16} />
                            <span>{member.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-slate-400'>
                        {member.joinedAt}
                      </td>
                      <td className='px-6 py-4'>
                        <span className={getStatusColor(member.status)}>
                          {member.status}
                        </span>
                      </td>
                      <td className='px-6 py-4'>
                        <div className='flex gap-2'>
                          <Button
                            variant='ghost'
                            size='icon'
                            className='bg-[#1B2B4B] text-slate-400 hover:text-white w-8 h-8 rounded-lg'
                          >
                            <Eye size={16} />
                          </Button>
                          <Button
                            variant='ghost'
                            size='icon'
                            className='bg-[#1B2B4B] text-slate-400 hover:text-white w-8 h-8 rounded-lg'
                          >
                            <Edit2 size={16} />
                          </Button>
                          <DeleteButton memberId={member.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className='md:hidden space-y-4'>
              {members.map((member) => (
                <MobileCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className='flex justify-center mt-6'>
            <div className='flex gap-2 flex-wrap justify-center'>
              <Button
                variant='outline'
                className='bg-[#1B2B4B] text-white border-[#2D4675] hover:bg-[#243660]'
              >
                Previous
              </Button>
              <Button
                variant='outline'
                className='bg-[#1B2B4B] text-white border-[#2D4675] hover:bg-[#243660]'
              >
                1
              </Button>
              <Button className='bg-blue-600 text-white hover:bg-blue-700'>
                2
              </Button>
              <Button
                variant='outline'
                className='bg-[#1B2B4B] text-white border-[#2D4675] hover:bg-[#243660]'
              >
                3
              </Button>
              <Button
                variant='outline'
                className='bg-[#1B2B4B] text-white border-[#2D4675] hover:bg-[#243660]'
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default MembersTable
