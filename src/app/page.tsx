import Layout from './components/Layout'
import { Orville } from '@/features/orville'
import { SelectedPlanetProvider } from './contexts/SelectedPlanetContext'
import './globals.css'

export default function Home() {
  return (
    <SelectedPlanetProvider>
      <Layout>
        <Orville />
      </Layout>
    </SelectedPlanetProvider>
  )
}
