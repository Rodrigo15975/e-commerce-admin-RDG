import Table from '@/components/Table/Table'
import { useGetAllCategorys } from '../../services/queries'
import { CiViewList } from 'react-icons/ci'
import ColumnsCategoryPanel from './columns-category-panel'

const PanelCategoryTable = () => {
  const { data, isLoading } = useGetAllCategorys()
  const { columns } = ColumnsCategoryPanel()

  return (
    <>
      <Table
        columnsConfig={columns}
        data={data}
        className="font-poppins w-full "
        headerClassName="bg-primary !text-slate-50 font-normal"
        loading={isLoading}
        row={20}
        header={
          <h1 className="font-light ring-1 ring-primary/15 flex items-center gap-2 bg-white p-4 rounded text-primary/80">
            List of categories <CiViewList />
          </h1>
        }
        globalFilter=""
      />
    </>
  )
}

export default PanelCategoryTable
