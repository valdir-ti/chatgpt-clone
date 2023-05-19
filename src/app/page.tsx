"use client"

import React from 'react'

import { Sidebar } from '@/components/Sidebar'

export default function Home() {

  const [sidebarOpened, setSidebarOpened] = React.useState(false)

  const closeSidebar = () => {
    setSidebarOpened(false)
  }

  const handleClearConversations = () => {}

  const handleNewChat = () => {}

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        <div>...</div>
      </Sidebar>
      <section className='flex flex-col w-full'>
        <button onClick={() => setSidebarOpened(true)}>Open Sidebar</button>
      </section>
    </main>
  )
}
