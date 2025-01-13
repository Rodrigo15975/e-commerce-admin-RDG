import Panel from '@/components/common/Container/Panel'
import TypographyTitle from '@/components/common/typographyTitle/typographyTitle'
import Form from '../form/form'
import PanelCouponTable from '../panel-coupon-table/panel-coupon-table'
import { RiCouponFill } from 'react-icons/ri'

const CouponPanel = () => {
  return (
    <Panel>
      <div className="flex justify-between max-sm:flex-wrap gap-3">
        <TypographyTitle title="Coupon" className="flex gap-2 items-center">
          <RiCouponFill />
        </TypographyTitle>
        <Form />
      </div>

      <div className="rounded bg-white border mt-16 w-full">
        <PanelCouponTable />
      </div>
    </Panel>
  )
}

export default CouponPanel
