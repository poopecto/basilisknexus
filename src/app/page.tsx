import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Gateway from '@/components/Gateway'
import ExternalDock from '@/components/ExternalDock'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-foreground">
      <div className="bg-matrix" />
      <Navbar />
      <Hero />
      <Gateway />
      <ExternalDock />
      <Footer />
    </div>
  )
}