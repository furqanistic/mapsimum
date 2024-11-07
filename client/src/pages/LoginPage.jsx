import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className='min-h-screen w-full bg-[#0B1425] flex flex-col items-center justify-center p-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src='/Logo.png' alt='Mapsimum' className='h-12 mb-14' />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='w-full max-w-md bg-[#1A2537] rounded-2xl p-8 space-y-6'
      >
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
                placeholder='Enter your email'
                className='w-full bg-[#0B1425] text-gray-200 pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-[#5CC6BA] transition-colors'
              />
            </div>
          </div>

          <div className='space-y-2'>
            <label className='text-sm text-gray-300'>Password</label>
            <div className='relative'>
              <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                className='w-full bg-[#0B1425] text-gray-200 pl-10 pr-12 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-[#5CC6BA] transition-colors'
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
              <a
                href='#'
                className='text-sm text-gray-400 hover:text-[#5CC6BA] transition-colors'
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <Link to='/overview'>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='w-full mt-5 bg-[#5CC6BA] text-white py-3 rounded-lg font-medium hover:bg-[#4DB5A9] transition-colors'
            >
              Sign In
            </motion.button>
          </Link>

          <p className='text-center text-sm text-gray-400'>
            Don't have an account?{' '}
            <a
              href='/signup'
              className='text-[#5CC6BA] hover:text-[#4DB5A9] transition-colors'
            >
              Sign up here
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage
