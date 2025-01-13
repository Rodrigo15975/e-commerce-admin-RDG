'use client'
import Panel from '@/components/common/Container/Panel'
import TypographyTitle from '@/components/common/typographyTitle/typographyTitle'
import Form from '../form/create/form'
import PanelCategoryTable from '../panel-category-table/table-category-panel'
import FormDiscount from '../form/createDiscount/form'
const PanelCategory = () => {
  return (
    <Panel>
      <div className="flex justify-between max-sm:flex-wrap gap-3">
        <TypographyTitle title="Categories" />
        <div className="flex gap-2 max-sm:w-full max-sm:justify-between">
          <Form />
          <FormDiscount />
        </div>
      </div>

      <div className="rounded bg-white border mt-16 w-full">
        <PanelCategoryTable />
      </div>
    </Panel>
  )
}

export default PanelCategory
