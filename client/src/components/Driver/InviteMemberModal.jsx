import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Link as LinkIcon, Mail, UserPlus, Users, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const InviteMemberModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='w-full py-2.5 text-[#4fd1c5] border border-[#4fd1c5] rounded-lg hover:bg-[#4fd1c5] hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium'>
          <Users size={16} />
          <span>Invite Member</span>
        </button>
      </DialogTrigger>
      <DialogContent className='bg-[#0b1425] border-[#1a2942] sm:max-w-md p-0 gap-0'>
        <DialogHeader className='p-6 pb-0'>
          <DialogTitle className='text-white text-xl font-semibold'>
            Invite Members
          </DialogTitle>
        </DialogHeader>

        <div className='px-6 py-4 space-y-6'>
          {/* Share Link Section */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2 text-white'>
              <LinkIcon size={20} className='text-blue-500' />
              <h3 className='font-medium'>Share link</h3>
            </div>
            <div className='flex gap-3'>
              <div className='relative flex-1'>
                <Input
                  value='JOIN-5678-SEATTLE'
                  readOnly
                  className='bg-[#1a2942] border-0 text-gray-300 h-10 pl-4 pr-24'
                />
                <Button className='absolute right-1 top-1 bg-blue-600 hover:bg-blue-700 text-white h-8 px-3'>
                  Copy
                </Button>
              </div>
            </div>
          </div>

          <Separator className='bg-[#1a2942]' />

          {/* Invite by Email Section */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2 text-white'>
              <Mail size={20} className='text-blue-500' />
              <h3 className='font-medium'>Invite by email</h3>
            </div>
            <div className='flex gap-3'>
              <Input
                placeholder="Enter member's email address..."
                className='bg-[#1a2942] border-0 text-gray-300 h-10 flex-1'
              />
              <Button className='bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap h-10'>
                Send
              </Button>
            </div>
          </div>

          <Separator className='bg-[#1a2942]' />

          {/* Register New Member Section */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2 text-white'>
              <UserPlus size={20} className='text-blue-500' />
              <h3 className='font-medium'>Register new member</h3>
            </div>
            <div>
              <p className='text-gray-400 text-sm mb-4'>
                Enter details to add members to the team.
              </p>
              <Link to='/driver/team/register'>
                <Button className='bg-blue-600 hover:bg-blue-700 text-white w-full h-10'>
                  Create Member
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className='bg-[#1a2942]/50 px-6 py-4 mt-4'>
          <p className='text-xs text-gray-400'>
            Team members will receive an email invitation that they must accept
            to join the team.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default InviteMemberModal
