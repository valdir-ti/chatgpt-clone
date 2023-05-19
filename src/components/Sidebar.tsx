import React from "react"

import IconClose from "./icons/IconClose"

type SidebarProps = {
    open: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Sidebar = ({ open, onClose, children}: SidebarProps) => {
  return (
    <section className={`fixed left-0 top-0 bottom-0 text-white
                        ${open ? "w-screen bg-gray-600/75" : "w-0"}
                        md:w-64 md:static`}>

        <div className={`transition-all duration-300 flex h-screen ${open ? "ml-0" : "-ml-96"} md:ml-0`}>
            <div className="flex flex-col w-64 p-2 bg-gray-900">
                barra
            </div>
            <div className="flex justify-center items-center w-10 h-10 cursor-pointer md:hidden" onClick={onClose}>
                <IconClose width={24} height={24}/>
            </div>
        </div>

    </section>
  )
}
