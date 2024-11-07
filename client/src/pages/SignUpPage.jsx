import { motion } from 'framer-motion'
import { Building, Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import React from 'react'

const SignupPage = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

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
          <h1 className='text-2xl font-semibold text-white'>Create Account</h1>
          <p className='text-gray-400 text-sm'>
            Join us to start managing your deliveries with ease
          </p>
        </div>

        <div className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label className='text-sm text-gray-300'>First Name</label>
              <div className='relative'>
                <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                <input
                  type='text'
                  placeholder='First name'
                  className='w-full bg-[#0B1425] text-gray-200 pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-[#5CC6BA] transition-colors'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-sm text-gray-300'>Last Name</label>
              <div className='relative'>
                <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                <input
                  type='text'
                  placeholder='Last name'
                  className='w-full bg-[#0B1425] text-gray-200 pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-[#5CC6BA] transition-colors'
                />
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <label className='text-sm text-gray-300'>Company Name</label>
            <div className='relative'>
              <Building className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
              <input
                type='text'
                placeholder='Enter company name'
                className='w-full bg-[#0B1425] text-gray-200 pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-[#5CC6BA] transition-colors'
              />
            </div>
          </div>

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
                placeholder='Create password'
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
          </div>

          <div className='space-y-2'>
            <label className='text-sm text-gray-300'>Confirm Password</label>
            <div className='relative'>
              <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm password'
                className='w-full bg-[#0B1425] text-gray-200 pl-10 pr-12 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-[#5CC6BA] transition-colors'
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300'
              >
                {showConfirmPassword ? (
                  <EyeOff className='h-5 w-5' />
                ) : (
                  <Eye className='h-5 w-5' />
                )}
              </button>
            </div>
          </div>

          <div className='flex items-start space-x-2'>
            <input
              type='checkbox'
              id='terms'
              className='mt-1 h-4 w-4 rounded border-gray-700 bg-[#0B1425] text-[#5CC6BA] focus:ring-[#5CC6BA]'
            />
            <label htmlFor='terms' className='text-sm text-gray-400'>
              I agree to the{' '}
              <a href='#' className='text-[#5CC6BA] hover:text-[#4DB5A9]'>
                Terms of Service
              </a>{' '}
              and{' '}
              <a href='#' className='text-[#5CC6BA] hover:text-[#4DB5A9]'>
                Privacy Policy
              </a>
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='w-full bg-[#5CC6BA] text-white py-3 rounded-lg font-medium hover:bg-[#4DB5A9] transition-colors'
          >
            Create Account
          </motion.button>

          <p className='text-center text-sm text-gray-400'>
            Already have an account?{' '}
            <a
              href='/login'
              className='text-[#5CC6BA] hover:text-[#4DB5A9] transition-colors'
            >
              Sign in here
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default SignupPage
