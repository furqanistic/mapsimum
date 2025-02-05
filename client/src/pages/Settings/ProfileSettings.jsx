import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import AppLayout from '@/utils/AppLayout'
import {
  Bell,
  Camera,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Shield,
  User,
} from 'lucide-react'
import React from 'react'

const ProfileSettings = () => {
  return (
    <AppLayout>
      <div className='min-h-screen  text-slate-200'>
        <div className='max-w-6xl mx-auto px-4 py-8'>
          <div className='flex flex-col space-y-8'>
            {/* Header */}
            <div>
              <h1 className='text-3xl font-bold text-white'>
                Profile Settings
              </h1>
              <p className='text-slate-400 mt-2'>
                Manage your account settings and preferences
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {/* Left Sidebar - Quick Navigation */}
              <Card className='bg-slate-800 border-slate-700 h-fit lg:sticky lg:top-8'>
                <CardContent className='p-4'>
                  <nav className='space-y-2'>
                    {[
                      {
                        icon: User,
                        label: 'Personal Information',
                        active: true,
                      },
                      { icon: Bell, label: 'Notifications' },
                      { icon: Lock, label: 'Privacy' },
                      { icon: Shield, label: 'Security' },
                    ].map((item) => (
                      <button
                        key={item.label}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left
                          ${
                            item.active
                              ? 'bg-slate-700 text-white'
                              : 'text-slate-400 hover:bg-slate-700/50'
                          }`}
                      >
                        <item.icon className='h-5 w-5' />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className='lg:col-span-2 space-y-6'>
                {/* Profile Photo */}
                <Card className='bg-slate-800 border-slate-700'>
                  <CardContent className='p-6'>
                    <h2 className='text-xl font-semibold mb-4'>
                      Profile Photo
                    </h2>
                    <div className='flex items-center space-x-6'>
                      <div className='relative'>
                        <div className='w-24 h-24 rounded-full overflow-hidden'>
                          <img
                            src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg'
                            alt='Profile'
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <button className='absolute bottom-0 right-0 p-2 bg-teal-600 rounded-full hover:bg-teal-700'>
                          <Camera className='h-4 w-4' />
                        </button>
                      </div>
                      <div>
                        <h3 className='font-medium'>Upload new photo</h3>
                        <p className='text-sm text-slate-400 mt-1'>
                          JPG, GIF or PNG. Max size of 800K
                        </p>
                        <div className='mt-4 flex space-x-3'>
                          <Button
                            variant='outline'
                            className='border-slate-600 hover:bg-slate-700'
                          >
                            Upload
                          </Button>
                          <Button
                            variant='ghost'
                            className='text-red-400 hover:text-red-300 hover:bg-red-900/20'
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Information */}
                <Card className='bg-slate-800 border-slate-700'>
                  <CardContent className='p-6'>
                    <h2 className='text-xl font-semibold mb-4'>
                      Personal Information
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='firstName'>First Name</Label>
                        <Input
                          id='firstName'
                          placeholder='Craig'
                          className='bg-slate-900 border-slate-700'
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input
                          id='lastName'
                          placeholder='Dokidis'
                          className='bg-slate-900 border-slate-700'
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='email'>Email</Label>
                        <div className='relative'>
                          <Mail className='absolute left-3 top-3 h-4 w-4 text-slate-400' />
                          <Input
                            id='email'
                            type='email'
                            placeholder='jakobbotosh@gmail.com'
                            className='pl-10 bg-slate-900 border-slate-700'
                          />
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='phone'>Phone</Label>
                        <div className='relative'>
                          <Phone className='absolute left-3 top-3 h-4 w-4 text-slate-400' />
                          <Input
                            id='phone'
                            type='tel'
                            placeholder='+1-655-5165-08'
                            className='pl-10 bg-slate-900 border-slate-700'
                          />
                        </div>
                      </div>
                      <div className='space-y-2 md:col-span-2'>
                        <Label htmlFor='address'>Address</Label>
                        <div className='relative'>
                          <MapPin className='absolute left-3 top-3 h-4 w-4 text-slate-400' />
                          <Input
                            id='address'
                            placeholder='3500 WHITE PLAINS LANE, APT 3C'
                            className='pl-10 bg-slate-900 border-slate-700'
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card className='bg-slate-800 border-slate-700'>
                  <CardContent className='p-6'>
                    <h2 className='text-xl font-semibold mb-4'>
                      Notification Settings
                    </h2>
                    <div className='space-y-6'>
                      {[
                        {
                          title: 'Package Updates',
                          description:
                            'Receive notifications about package status changes',
                        },
                        {
                          title: 'Delivery Confirmations',
                          description:
                            'Get notified when packages are delivered',
                        },
                        {
                          title: 'Route Updates',
                          description:
                            'Notifications about changes to delivery routes',
                        },
                      ].map((setting) => (
                        <div
                          key={setting.title}
                          className='flex items-center justify-between'
                        >
                          <div>
                            <h3 className='font-medium'>{setting.title}</h3>
                            <p className='text-sm text-slate-400'>
                              {setting.description}
                            </p>
                          </div>
                          <Switch />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Save Changes */}
                <div className='flex items-center justify-end space-x-4'>
                  <Button
                    variant='ghost'
                    className='text-slate-400 hover:text-slate-300'
                  >
                    Cancel
                  </Button>
                  <Button className='bg-teal-600 hover:bg-teal-700'>
                    Save Changes
                  </Button>
                </div>

                {/* Danger Zone */}
                <Card className='bg-slate-800 border-red-900/50'>
                  <CardContent className='p-6'>
                    <h2 className='text-xl font-semibold text-red-400 mb-4'>
                      Danger Zone
                    </h2>
                    <p className='text-slate-400 mb-4'>
                      Once you delete your account, there is no going back.
                      Please be certain.
                    </p>
                    <Button
                      variant='destructive'
                      className='bg-red-600 hover:bg-red-700'
                    >
                      <LogOut className='h-4 w-4 mr-2' />
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ProfileSettings
