import { BrowserRouter, Route, Routes } from 'react-router-dom'

import WarehouseDashboard from './components/Warehouse/WarehouseDashboard'
import DeliveryDriverAssignment from './pages/Delivery/DeliveryDriverAssignment'
import {
  default as DriverAndRoute,
  default as OngoingDeliveries,
} from './pages/Delivery/OngoingDeliveries'
import CreateTeamForm from './pages/Driver/CreateTeamForm'
import Driver from './pages/Driver/Driver'
import DriverAssignment from './pages/Driver/DriverAssignment'
import DriverViolation from './pages/Driver/DriverViolation'
import FuelRecord from './pages/Driver/FuelRecord'
import ListTeam from './pages/Driver/ListTeam'
import MemberRegistration from './pages/Driver/MemberRegistration'
import RequestMembersTable from './pages/Driver/RequestMembersTable'
import LoginPage from './pages/LoginPage'
import LogisticsPage from './pages/LogisticsPage'
import MessageMain from './pages/Message/MessageMain'
import OverviewPage from './pages/Overview/OverviewPage'
import Revenue from './pages/Revenue/Revenue'
import DrawRoute from './pages/Route/DrawRoute'
import AddressListTable from './pages/Route/UploadAddressPage'
import ProfileSettings from './pages/Settings/ProfileSettings'
import SignUpPage from './pages/SignUpPage'
import Warehouse from './pages/Warehouse/Warehouse'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<LogisticsPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignUpPage />} />
            <Route path='overview' element={<OverviewPage />} />
            <Route path='warehouse' element={<WarehouseDashboard />} />
            <Route path='warehouse/view/:id' element={<Warehouse />} />
            <Route path='revenue' element={<Revenue />} />
            <Route
              path='/route-creation/upload-address'
              element={<AddressListTable />}
            />
            <Route path='/route-creation/draw' element={<DrawRoute />} />
            <Route path='/driver/violations' element={<DriverViolation />} />
            <Route path='/driver/team' element={<ListTeam />} />
            <Route
              path='/driver/team/review-request'
              element={<RequestMembersTable />}
            />
            <Route
              path='/driver/team/register'
              element={<MemberRegistration />}
            />
            <Route path='/driver/team/create' element={<CreateTeamForm />} />
            <Route path='/driver/fuel-distance' element={<FuelRecord />} />
            <Route
              path='/driver/assignments'
              element={<DeliveryDriverAssignment />}
            />
            <Route path='/driver/details' element={<Driver />} />
            <Route path='/delivery/ongoing' element={<OngoingDeliveries />} />
            <Route
              path='/delivery/assignments'
              element={<DriverAssignment />}
            />
            <Route path='/message' element={<MessageMain />} />
            <Route path='/settings' element={<ProfileSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
