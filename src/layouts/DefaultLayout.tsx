import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { ContainerMain } from './styles'
import { Footer } from '../components/Footer'

export function DefaultLayout() {
  return (
    <ContainerMain>
      <Header />
      <Outlet />
      <Footer />
    </ContainerMain>
  )
}
