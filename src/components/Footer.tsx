import { ChatMessageInput } from "./ChatMessageInput"

type FooterProps = {
    disabled: boolean
    onSendMessage: (message: string) => void
}

export const Footer = ({ disabled, onSendMessage }: FooterProps) => {
  return (
    <footer className="w-full border-t-gray-600 p-2">
        <div className="max-w-4xl m-auto">
            <ChatMessageInput
                disabled={disabled}
                onSend={onSendMessage}
            />
            <div className="pt-3 text-center text-xs text-gray-300">
                Desenvolvido pela Intratec Tecnologia
            </div>
        </div>
    </footer>
  )
}
