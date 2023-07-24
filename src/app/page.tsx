import { About, ProjectsSection, TecnologiesSection } from '@/components/sections'
import { TopNavbar } from '@/components/ui/top-navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-neutral-900">
      <TopNavbar />

      <About />
      <TecnologiesSection />
      <ProjectsSection />

    </main>
  )
}
