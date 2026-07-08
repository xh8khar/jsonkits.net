'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Closes the mobile drawer on route change; not derivable during render since it
    // depends on the previous pathname rather than the current one.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSidebarOpen(false)
  }, [pathname])

  return (
    <div className="flex">
      <Sidebar mobileOpen={sidebarOpen} onMobileClose={() => setSidebarOpen(false)} />
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        <Navbar onMenuClick={() => setSidebarOpen(open => !open)} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
