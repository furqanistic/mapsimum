import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DeliveryDriverAssignment from './pages/Delivery/DeliveryDriverAssignment'
import DriverAndRoute from './pages/Delivery/DriverAndRoute'
import CreateTeamForm from './pages/Driver/CreateTeamForm'
import DriverAssignment from './pages/Driver/DriverAssignment'
import DriverViolation from './pages/Driver/DriverViolation'
import FuelRecord from './pages/Driver/FuelRecord'
import ListTeam from './pages/Driver/ListTeam'
import LoginPage from './pages/LoginPage'
import LogisticsPage from './pages/LogisticsPage'
import OverviewPage from './pages/Overview/OverviewPage'
import Revenue from './pages/Revenue/Revenue'
import DrawRoute from './pages/Route/DrawRoute'
import AddressListTable from './pages/Route/UploadAddressPage'
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
            <Route path='warehouse' element={<Warehouse />} />
            <Route path='revenue' element={<Revenue />} />
            <Route
              path='/route-creation/upload-address'
              element={<AddressListTable />}
            />
            <Route path='/route-creation/draw' element={<DrawRoute />} />
            <Route path='/driver/violations' element={<DriverViolation />} />
            <Route path='/driver/team' element={<ListTeam />} />
            <Route path='/driver/team/create' element={<CreateTeamForm />} />
            <Route path='/driver/fuel-distance' element={<FuelRecord />} />
            <Route
              path='/driver/assignments'
              element={<DeliveryDriverAssignment />}
            />
            <Route path='/delivery/driver-route' element={<DriverAndRoute />} />
            <Route
              path='/delivery/assignments'
              element={<DriverAssignment />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
