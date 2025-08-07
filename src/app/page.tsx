import Layout from './components/Layout'
import { Orville } from '@/features/orville'
import { Planets } from '@/app/features/planets/Planets'
import { SelectedPlanetProvider } from './contexts/SelectedPlanetContext'

export default function Home() {
  return (
    <SelectedPlanetProvider>
      <Layout>
        <Orville />
        {/* <Planets /> */}
      </Layout>
    </SelectedPlanetProvider>
  )
}
