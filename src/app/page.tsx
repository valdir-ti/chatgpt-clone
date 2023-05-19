"use client"

import React from 'react'

import { Sidebar } from '@/components/Sidebar'

export default function Home() {

  const [sidebarOpened, setSidebarOpened] = React.useState(false)

  const closeSidebar = () => {
    setSidebarOpened(false)
  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
      >
      </Sidebar>
      <section className='flex flex-col w-full'>
        <button onClick={() => setSidebarOpened(true)}>Open Sidebar</button>
      </section>
    </main>
  )
}
