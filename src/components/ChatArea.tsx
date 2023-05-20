import { Chat } from "@/types/Chat"

import { ChatPlaceholder } from "./ChatPlaceholder"
import { ChatMessageItem } from "./ChatMessageItem"

type ChatAreaProps = {
    chat: Chat | undefined
}

export const ChatArea = ({ chat }: ChatAreaProps) => {
  return (
    <section className="flex-auto h-0 overflow-y-scroll">
        {!chat && <ChatPlaceholder />}
        {chat && chat.messages.map(message => (
            <ChatMessageItem
                key={message.id}
                message={message}
            />
        ))}
    </section>
  )
}
