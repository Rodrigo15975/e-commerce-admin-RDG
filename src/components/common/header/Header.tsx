'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useGetProfile } from '@/modules/users/services'
import Image from 'next/image'
import { confirmPopup } from 'primereact/confirmpopup'
import { Sidebar as SidebarMobile } from 'primereact/sidebar'
import { SyntheticEvent, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoExitOutline } from 'react-icons/io5'
import LinksItemsSidebar from '../Sidebar/linksItemsSidebar'
import ButtonLogout from './buttonLogout'

const Header: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const openSidebarMobile = () => setVisible(!visible)
  const { data } = useGetProfile()

  const confirm1 = (event: SyntheticEvent) => {
    confirmPopup({
      target: event.currentTarget as HTMLElement,
      message: (
        <>
          <Badge>Username:{data?.name}</Badge>
        </>
      ),
      icon: 'pi pi-exclamation-triangle',
      defaultFocus: 'accept',
      footer: ({ reject }) => <ButtonLogout reject={reject} />,
    })
  }

  return (
    <div className="flex border-b items-center gap-3 justify-between">
      <div className="xl:hidden pl-4 ">
        <Button onClick={openSidebarMobile} className="rounded">
          <GiHamburgerMenu />
        </Button>
        <SidebarMobile
          style={{
            fontFamily: '"Poppins", sans-serif',
          }}
          visible={visible}
          onHide={openSidebarMobile}
          header={
            <Image
              loading="eager"
              width={40}
              className="mx-auto"
              height={40}
              src="https://img.icons8.com/?size=40&id=xNRxoA7zsi5v&format=png"
              alt="icon"
            />
          }
        >
          <LinksItemsSidebar />
        </SidebarMobile>
      </div>

      <div className="flex lg:pr-6 w-full py-3 pr-4 items-center justify-end gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Button onClick={confirm1}>
          <IoExitOutline />
        </Button>
      </div>
    </div>
  )
}

export default Header
