'use client'
import Table from '@/components/Table/Table'
import { CiViewList } from 'react-icons/ci'
// import "react-loading-skeleton/dist/skeleton.css"
import ColumnsUserTable from './columns-user-table'
import { useGetAllUsers, useGetProfile } from '../../services'
const PanelUserTable = () => {
  const { columns } = ColumnsUserTable()
  const { data: getAllUsers, isLoading: isLoadingUsers } = useGetAllUsers()
  const { data: getProfileUser } = useGetProfile()

  const getAllUsersDistincLogin = getAllUsers?.filter(
    (user) => user.id !== getProfileUser?.id
  )

  return (
    <>
      <Table
        loading={isLoadingUsers}
        columnsConfig={columns}
        data={getAllUsersDistincLogin}
        className="font-poppins w-full "
        headerClassName="bg-primary !text-slate-50 font-normal"
        globalFilter=""
        row={10}
        header={
          <h1 className="font-light ring-1 ring-primary/15 flex items-center gap-2 bg-white p-4 rounded text-primary/80">
            List of User <CiViewList />
          </h1>
        }
      />
    </>
  )
}

export default PanelUserTable
