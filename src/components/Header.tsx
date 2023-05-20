import IconAdd from "./icons/IconAdd"
import IconMenu from "./icons/IconMenu"

type HeaderProps = {
    openSidebarClick: () => void
    newChatClick: () => void
    title: string
}

export const Header = ({title, newChatClick, openSidebarClick}: HeaderProps) => {
  return (
    <header className="flex justify-between items-center w-full border-b border-gray-600 p-2 md:hidden">

        <div onClick={openSidebarClick}>
            <IconMenu width={24} height={24} />
        </div>

        <div className="mx-2 truncate">{title}</div>

        <div onClick={newChatClick}>
            <IconAdd width={24} height={24} />
        </div>

    </header>
  )
}
