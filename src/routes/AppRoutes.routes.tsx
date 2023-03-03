import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'

import { Home } from '../pages/Home'
import { Champions } from '../pages/Champions'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Champions />} />
      </Route>
    </Routes>
  )
}
