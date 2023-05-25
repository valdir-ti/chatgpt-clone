import React from "react"

type ChatExamplesProps = {
    title: string
    icon: React.ReactElement
    exampleOne: string
    exampleTwo: string
    exampleThree: string
}

export const ChatExamples = ({ title, icon, exampleOne, exampleTwo, exampleThree }: ChatExamplesProps) => {
  return (
    <div className="text-white">
        <div className="flex flex-col justify-center items-center text-lg mb-3">
            {icon}
            {title}
        </div>
        <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            {exampleOne}
        </div>
        <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            {exampleTwo}
        </div>
        <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            {exampleThree}
        </div>
    </div>
  )
}