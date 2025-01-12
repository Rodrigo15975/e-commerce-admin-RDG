import { ReactNode } from 'react'
import { FaUsers } from 'react-icons/fa6'
import { LiaLuggageCartSolid } from 'react-icons/lia'
import { LuLayoutDashboard } from 'react-icons/lu'
import { FaBusinessTime } from 'react-icons/fa'
import { CiViewList } from 'react-icons/ci'
import { RiCoupon3Line } from 'react-icons/ri'

type Links = {
  path: string
  label: string
  icon: ReactNode
}

export const linksGeneral: Links[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <LuLayoutDashboard />,
  },
  {
    label: 'Users',
    path: '/users',
    icon: <FaUsers />,
  },
  {
    label: 'Products',
    path: '/products',
    icon: <LiaLuggageCartSolid />,
  },
  {
    label: 'Category',
    path: '/category',
    icon: <CiViewList />,
  },
]

export const linksBusiness: Links[] = [
  {
    path: '/orders',
    icon: <FaBusinessTime />,
    label: 'Orders',
  },
  {
    label: 'Coupon',
    path: '/coupon',
    icon: <RiCoupon3Line />,
  },
]
