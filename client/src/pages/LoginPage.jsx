import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState(false)
  const [email, setEmail] = React.useState('furqan@test.com')
  const [password, setPassword] = React.useState('test')

  const handleSignIn = () => {
    navigate('/overview')
  }

  return (
    <div className='min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center p-4'>
      <div className='animate-fade-in'>
        <img src='/Logo.png' alt='Mapsimum' className='h-12 mb-14' />
      </div>
      <div className='w-full max-w-md bg-slate-800 rounded-2xl p-8 space-y-6'>
        <div className='text-center space-y-2'>
          <h1 className='text-2xl font-semibold text-white'>Welcome Back!</h1>
          <p className='text-gray-400 text-sm'>
            Log in to access your account and manage your deliveries
            effortlessly.
          </p>
        </div>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <label className='text-sm text-gray-300'>Email</label>
            <div className='relative'>
              <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='w-full bg-slate-900 text-gray-200 pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-teal-400 transition-colors'
              />
            </div>
          </div>
          <div className='space-y-2'>
            <label className='text-sm text-gray-300'>Password</label>
            <div className='relative'>
              <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                className='w-full bg-slate-900 text-gray-200 pl-10 pr-12 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-teal-400 transition-colors'
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300'
              >
                {showPassword ? (
                  <EyeOff className='h-5 w-5' />
                ) : (
                  <Eye className='h-5 w-5' />
                )}
              </button>
            </div>
            <div className='flex justify-end'>
              <button className='text-sm text-gray-400 hover:text-teal-400 transition-colors'>
                Forgot Password?
              </button>
            </div>
          </div>
          <button
            onClick={handleSignIn}
            className='w-full mt-5 bg-teal-400 text-white py-3 rounded-lg font-medium hover:bg-teal-500 transition-colors'
          >
            Sign In
          </button>
          <p className='text-center text-sm text-gray-400'>
            Don't have an account?{' '}
            <button className='text-teal-400 hover:text-teal-500 transition-colors'>
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
