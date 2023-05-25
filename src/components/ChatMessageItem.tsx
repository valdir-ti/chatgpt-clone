import { ChatMessage } from "@/types/ChatMessage"

import IconUser from "./icons/IconUser"
import IconRobot from "./icons/IconRobot"

type ChatMessageItemProps = {
    message: ChatMessage
}

export const ChatMessageItem = ({ message }: ChatMessageItemProps) => {
  return (
    <div className={`py-5 ${message.author === 'ai' && 'bg-gray-600/50'}`}>
        <div className="max-w-4xl m-auto flex text-white">

            <div className={`w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded
                    ${message.author === 'ai' ? 'bg-green-900': 'bg-blue-900'}`}>
                {message.author === 'me' && <IconUser width={24} height={24}/>}
                {message.author === 'ai' && <IconRobot width={24} height={24}/>}
            </div>

            <div className="flex-1 whitespace-pre-wrap">
                {message.body}
            </div>

        </div>
    </div>
  )
}
