import React from "react"

type SidebarButtonProps = {
    icon: React.ReactNode
    label: string
    onClick: () => void
}

export const SidebarButton = ({icon, label, onClick}: SidebarButtonProps) => {
  return (
    <div onClick={onClick} className="flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/20">
        <div className="mr-3">{icon}</div>
        <div className="flex-1 truncate">{label}</div>
    </div>
  )
}
