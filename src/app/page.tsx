"use client"

import React from 'react'

import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { ChatArea } from '@/components/ChatArea'

import { Chat } from '@/types/Chat'

export default function Home() {

  const [sidebarOpened, setSidebarOpened] = React.useState(false)
  const [chatActive, setChatActive] = React.useState<Chat>({
    id: '123',
    title: 'Test chat area',
    messages: [
      {
        id: '994',
        author: 'me',
        body: 'Opa, tudo bem?'
      },
      {
        id: '995',
        author: 'ai',
        body: 'Tudo ótimo, em que posso te ajudar?'
      },
    ]
  })

  const openSidebar = () => setSidebarOpened(true)
  const closeSidebar = () => setSidebarOpened(false)

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
        <div className=''>...</div>
      </Sidebar>
      <section className='flex flex-col w-full'>

        <Header
          openSidebarClick={openSidebar}
          title={`Title Text`}
          newChatClick={handleNewChat}
        />

        <ChatArea
          chat={chatActive}
        />

      </section>
    </main>
  )
}
