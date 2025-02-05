import { AnimatePresence, motion } from 'framer-motion'
import {
  Bell,
  ChevronDown,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  MapPin,
  Menu,
  MessagesSquare,
  PiggyBank,
  RotateCcw,
  Search,
  Settings,
  Truck,
  User,
  Users,
  Warehouse,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Topbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [notifications] = useState([
    { id: 1, text: 'New delivery request', time: '5m ago' },
    { id: 2, text: 'Driver #123 completed route', time: '10m ago' },
  ])

  return (
    <div
      className='fixed top-0 right-0 h-16 bg-[#0B1425] border-b border-gray-800 px-6 flex items-center justify-between transition-all duration-300 z-50'
      style={{
        left: isSidebarOpen ? '256px' : '72px',
        width: `calc(100% - ${isSidebarOpen ? '256px' : '72px'})`,
      }}
    >
      {/* Left Section */}
      <div className='flex items-center gap-6'>
        <button
          onClick={toggleSidebar}
          className='text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800'
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-4'>
        {/* Notifications */}
        <div className='relative'>
          <button className='p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg relative'>
            <Bell size={20} />
            <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
          </button>
        </div>

        {/* Profile Section */}
        <div className='relative'>
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className='flex items-center gap-3 text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800'
          >
            <div className='h-8 w-8 rounded-full bg-gray-700 overflow-hidden'>
              <img
                src='https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg'
                alt='Profile'
                className='h-full w-full object-cover'
              />
            </div>
            <span className='hidden md:block'>Furqan</span>
            <ChevronDown size={16} className='hidden md:block' />
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className='absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-800 py-1'>
              <button className='w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800 flex items-center gap-2'>
                <User size={16} />
                <span>Profile</span>
              </button>
              <button className='w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800 flex items-center gap-2'>
                <Settings size={16} />
                <span>Settings</span>
              </button>
              <button className='w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800 flex items-center gap-2'>
                <HelpCircle size={16} />
                <span>Help</span>
              </button>
              <div className='border-t border-gray-800 my-1'></div>
              <button className='w-full px-4 py-2 text-left text-red-400 hover:bg-gray-800 flex items-center gap-2'>
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const SIDEBAR_ITEMS = [
  {
    name: 'Overview',
    icon: LayoutDashboard,
    to: '/overview',
  },
  {
    name: 'Route Creation',
    icon: MapPin,
    to: '/route-creation',
    subItems: [
      { name: 'Upload Address', to: '/route-creation/upload-address' },
      { name: 'Draw Route', to: '/route-creation/draw' },
    ],
  },
  {
    name: 'Delivery',
    icon: Truck,
    to: '/delivery',
    subItems: [
      { name: 'Ongoing Deliveries', to: '/delivery/ongoing' },
      { name: 'Driver Assignments', to: '/driver/assignments' },
    ],
  },
  {
    name: 'Driver',
    icon: Users,
    to: '/driver',
    subItems: [
      { name: ' Team', to: '/driver/team' },
      { name: ' Driver', to: '/driver/details' },
      { name: 'Fuel and Distance Record', to: '/driver/fuel-distance' },
      { name: 'Driver Assignments', to: '/driver/assignments' },
      { name: 'Driver Violations', to: '/driver/violations' },
    ],
  },
  {
    name: 'Warehouse',
    icon: Warehouse,
    to: '/warehouse',
  },
  {
    name: 'Message',
    icon: MessagesSquare,
    to: '/message',
  },
  {
    name: 'Resolution',
    icon: RotateCcw,
    to: '/resolution',
  },
  {
    name: 'Revenue',
    icon: PiggyBank,
    to: '/revenue',
  },
]

const Sidebar = ({ isSidebarOpen }) => {
  const [expandedItem, setExpandedItem] = useState(null)
  const location = useLocation()
  const scrollContainerRef = useRef(null)

  const isActive = (to) => {
    return location.pathname === to || location.pathname.startsWith(`${to}/`)
  }

  return (
    <motion.div
      className='h-screen fixed left-0 top-0 bg-[#0B1425] flex flex-col overflow-hidden border-r border-gray-800 z-20'
      animate={{ width: isSidebarOpen ? 256 : 72 }}
      initial={{ width: 256 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo Section */}
      <div className='p-4 flex items-center justify-center'>
        <motion.div
          className='flex items-center gap-1'
          animate={{
            justifyContent: isSidebarOpen ? 'flex-start' : 'center',
            width: '100%',
          }}
        >
          <img
            src='/logo-mini.png'
            alt='Mapsimum'
            className='h-12 w-12 object-contain'
          />
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className='text-[#068273] text-xl font-semibold whitespace-nowrap'
              >
                MAPSIMUM
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav
        ref={scrollContainerRef}
        className='flex-1 overflow-y-auto scrollbar-hidden'
      >
        <div className='p-4 space-y-1'>
          {SIDEBAR_ITEMS.map((item) => (
            <div key={item.to}>
              {item.subItems ? (
                <button
                  onClick={() => {
                    setExpandedItem(
                      expandedItem === item.name ? null : item.name
                    )
                  }}
                  className={`w-full flex items-center py-2 px-3 rounded-lg transition-colors
                    ${
                      isActive(item.to)
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                    }`}
                >
                  <item.icon size={20} className='min-w-[20px]' />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        className='ml-3 flex-1 flex items-center justify-between whitespace-nowrap'
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${
                            expandedItem === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ) : (
                <Link
                  to={item.to}
                  className={`w-full flex items-center py-2 px-3 rounded-lg transition-colors
                    ${
                      isActive(item.to)
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                    }`}
                >
                  <item.icon size={20} className='min-w-[20px]' />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        className='ml-3 flex-1 whitespace-nowrap'
                      >
                        {item.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              )}

              <AnimatePresence>
                {isSidebarOpen &&
                  item.subItems &&
                  expandedItem === item.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className='overflow-hidden'
                    >
                      <div className='ml-9 mt-1 space-y-1'>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.to}
                            to={subItem.to}
                            className={`block py-2 px-3 rounded-lg text-sm transition-colors
                              ${
                                isActive(subItem.to)
                                  ? 'text-white bg-gray-800'
                                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                              }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </nav>

      {/* Settings */}
      <div className='p-4 border-t border-gray-800'>
        <Link
          to='/settings'
          className={`flex items-center py-2 px-3 rounded-lg transition-colors
            ${
              isActive('/settings')
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
            }`}
        >
          <Settings size={20} className='min-w-[20px]' />
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className='ml-3 whitespace-nowrap'
              >
                Settings
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>
    </motion.div>
  )
}

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='min-h-screen w-full bg-[#0B1425] flex'>
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content Wrapper */}
      <div
        className='flex-1 flex flex-col transition-all duration-300'
        style={{
          marginLeft: isSidebarOpen ? '256px' : '72px',
          width: `calc(100% - ${isSidebarOpen ? '256px' : '72px'})`,
        }}
      >
        {/* Fixed Topbar */}
        <Topbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Scrollable Content Area */}
        <div className='flex-1 mt-16 overflow-y-auto'>
          <div className='p-6'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default AppLayout
