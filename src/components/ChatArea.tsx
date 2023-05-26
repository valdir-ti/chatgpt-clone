import { useEffect, useRef } from "react"

import { Chat } from "@/types/Chat"

import { ChatPlaceholder } from "./ChatPlaceholder"
import { ChatMessageItem } from "./ChatMessageItem"
import { ChatMessageLoading } from "./ChatMessageLoading"

type ChatAreaProps = {
    chat: Chat | undefined
    loading: boolean
}

export const ChatArea = ({ chat, loading }: ChatAreaProps) => {

  const scrollArea = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollArea.current?.scrollTo(0, scrollArea.current?.scrollHeight)
  }, [loading, chat?.messages.length])

  return (
    <section ref={scrollArea} className="flex-auto h-0 overflow-y-scroll">
        {!chat && <ChatPlaceholder />}
        {chat && chat.messages.map(message => (
            <ChatMessageItem
                key={message.id}
                message={message}
            />
        ))}
        {loading && <ChatMessageLoading />}
    </section>
  )
}
