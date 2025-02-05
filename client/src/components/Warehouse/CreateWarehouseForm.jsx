import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus } from 'lucide-react'
import React from 'react'

const CreateWarehouseForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-teal-500 hover:bg-teal-600 text-white w-full sm:w-auto'>
          <Plus className='h-4 w-4 mr-2' />
          Create Warehouse
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-slate-900 text-white border-slate-800 sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='text-white'>Create New Warehouse</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='space-y-6 py-4'>
          <div className='space-y-2'>
            <Label htmlFor='name' className='text-slate-200'>
              Warehouse Name
            </Label>
            <Input
              id='name'
              placeholder='Enter warehouse name'
              className='bg-slate-800 border-slate-700 text-white'
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='location' className='text-slate-200'>
              Location
            </Label>
            <Input
              id='location'
              placeholder='Enter warehouse location'
              className='bg-slate-800 border-slate-700 text-white'
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='bins' className='text-slate-200'>
                Number of Bins
              </Label>
              <Input
                id='bins'
                type='number'
                placeholder='150'
                className='bg-slate-800 border-slate-700 text-white'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='belts' className='text-slate-200'>
                Number of Belts
              </Label>
              <Input
                id='belts'
                type='number'
                placeholder='12'
                className='bg-slate-800 border-slate-700 text-white'
              />
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='capacity' className='text-slate-200'>
              Capacity (parcels)
            </Label>
            <Input
              id='capacity'
              type='number'
              placeholder='12000'
              className='bg-slate-800 border-slate-700 text-white'
            />
          </div>

          <div className='flex justify-end gap-3 pt-4'>
            <DialogTrigger asChild>
              <Button
                variant='outline'
                className='text-slate-200 border-slate-700 hover:bg-slate-800 hover:text-white'
              >
                Cancel
              </Button>
            </DialogTrigger>
            <Button
              type='submit'
              className='bg-teal-500 hover:bg-teal-600 text-white'
            >
              Create Warehouse
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateWarehouseForm
