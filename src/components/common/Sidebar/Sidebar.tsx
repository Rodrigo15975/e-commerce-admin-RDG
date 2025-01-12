'use client'
import { Sidebar as SidebarComponent } from 'react-pro-sidebar'
import LinksItemsSidebar from './linksItemsSidebar'
import Image from 'next/image'

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="px-4 h-screen max-xl:hidden xl:fixed w-80  border-r  ">
        <SidebarComponent
          backgroundColor="white"
          rootStyles={{
            border: 'none',
          }}
        >
          <div className="text-center my-4 border-b  h-20 m-auto flex justify-center ">
            <h1 className="flex gap-2 text-2xl font-bold text-gray-900 items-center justify-center">
              <Image
                loading="eager"
                width={40}
                height={40}
                src="https://img.icons8.com/?size=40&id=xNRxoA7zsi5v&format=png"
                alt="icon"
              />
              RDG
            </h1>
          </div>
          <LinksItemsSidebar />
        </SidebarComponent>
      </div>
    </>
  )
}

export default Sidebar
