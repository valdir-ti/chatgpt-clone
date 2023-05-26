"use client"

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ChatArea } from '@/components/ChatArea'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import { Chat } from '@/types/Chat'
import { SidebarChatButton } from '@/components/SidebarChatButton'

import { openai } from '@/utils/openai'

export default function Home() {

  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [AiLoading, setAiLoading] = useState(false)
  const [chatActive, setChatActive] = useState<Chat>()
  const [chatList, setChatList] = useState<Chat[]>([])
  const [chatActiveId, setChatActiveId] = useState<string>('')

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId))
  }, [chatActiveId, chatList])

  useEffect(() => {
    if(AiLoading) getAiResponse()
  }, [AiLoading])

  const getAiResponse = async () => {
      let chatListClone = [...chatList]
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId)
      if(chatIndex > -1) {

        const translated = openai.translateMessages(chatListClone[chatIndex].messages)
        const response = await openai.generate(translated)

        if(response) {
          chatListClone[chatIndex].messages.push({
            id: uuidv4(),
            author: 'ai',
            body: response
          })
        }
      }
      setChatList(chatListClone)
      setAiLoading(false)
  }

  const openSidebar = () => setSidebarOpened(true)
  const closeSidebar = () => setSidebarOpened(false)

  const handleClearConversations = () => {
    if(AiLoading) return

    setChatActiveId('')
    setChatList([])
  }

  const handleNewChat = () => {
    if(AiLoading) return

    setChatActiveId('')
    closeSidebar()
  }

  const handleSendMessage = (message: string) => {
    if(!chatActiveId) {
      //Create new chat
      let newChatId = uuidv4()
      setChatList([{
        id: newChatId,
        title: message,
        messages: [
          {
            id: uuidv4(),
            author: 'me',
            body: message
          }
        ]
      }, ...chatList])

      setChatActiveId(newChatId)

    } else {
      //Update existing chat
      let chatListClone = [...chatList]
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId)
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: 'me',
        body: message
      })

      setChatList(chatListClone)
    }

    setAiLoading(true)
  }

  const handleSelectChat = (id: string) => {
    if(AiLoading) return

    let item = chatList.find(item => item.id === id)
    if(item) setChatActiveId(item.id)

    closeSidebar()
  }

  const handleDeleteChat = (id: string) => {
    let chatListClone = [...chatList]
    let chatIndex = chatListClone.findIndex(item => item.id === id)
    chatListClone.splice(chatIndex, 1)
    setChatList(chatListClone)
    setChatActiveId('')
  }

  const handleEditChat = (id: string, newTitle: string) => {
    if(newTitle) {
      let chatListClone = [...chatList]
      let chatIndex = chatListClone.findIndex(item => item.id === id)
      chatListClone[chatIndex].title = newTitle
      setChatList(chatListClone)
    }
  }

  return (
    <main className="flex min-h-screen bg-gpt-gray text-white">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        {chatList.map(item => (
          <SidebarChatButton
            key={item.id}
            chatItem={item}
            active={item.id === chatActiveId}
            onClick={handleSelectChat}
            onDelete={handleDeleteChat}
            onEdit={handleEditChat}
          />
        ))}
      </Sidebar>
      <section className='flex flex-col w-full'>

        <Header
          openSidebarClick={openSidebar}
          title={chatActive ? chatActive.title : 'Nova conversa'}
          newChatClick={handleNewChat}
        />

        <ChatArea
          chat={chatActive}
          loading={AiLoading}
        />

        <Footer
          disabled={AiLoading}
          onSendMessage={handleSendMessage}
        />

      </section>
    </main>
  )
}
