import React, { KeyboardEvent, useEffect, useRef } from "react"
import IconSend from "./icons/IconSend"

type ChatMessageInputProps = {
    disabled: boolean
    onSend: (message: string) => void
}

export const ChatMessageInput = ({ disabled, onSend }: ChatMessageInputProps) => {

    const [text, setText] = React.useState('')
    const textEl = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if(textEl.current) {
            textEl.current.style.height = '0px'
            let scrollHeight = textEl.current.scrollHeight
            textEl.current.style.height = scrollHeight + 'px'
        }
    }, [text, textEl])

    const handleSendMessage = () => {
        if(!disabled && text.trim() !== '') {
            onSend(text)
            setText('')
        }
    }

    const handleTextKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if(event.code.toLocaleLowerCase() === 'enter' && !event.shiftKey) {
            event.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <div className={`flex border border-gray-800/50 bg-gpt-lightgray p-2 rounded-md text-white ${disabled && 'opacity-50'}`}>

            <textarea
                ref={textEl}
                className="flex-1 border-0 bg-transparent resize-none outline-none h-7 max-h-48 overflow-y-auto"
                placeholder="Digite uma mensagem"
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyUp={handleTextKeyUp}
                disabled={disabled}
            ></textarea>

            <div className={`self-end p-1 cursor-pointer rounded ${text.length ? 'opacity-100 hover:bg-black/20' : 'opacity-20'}`} onClick={handleSendMessage}>
                <IconSend width={14} height={14}/>
            </div>
        </div>
    )
}