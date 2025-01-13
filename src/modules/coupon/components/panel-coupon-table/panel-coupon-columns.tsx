import ButtonDelete from '@/components/ui/button-delete'
import {
  convertedDayRest,
  convertedYearMonthDay,
} from '@/utils/formatDateIso8601'
import { Badge, Button } from '@nextui-org/react'
import { ColumnProps } from 'primereact/column'
import { Tag } from 'primereact/tag'
import { useDeleteCoupon } from '../../services/mutation'
import FormUpdateCoupon from '../form/form-update-coupon'

const ColumnsCouponPanel = () => {
  const { mutate: deleteCoupon, isPending: isPendingCoupon } = useDeleteCoupon()
  const dateExpiration = (data: FindAllCoupons) => {
    const dayRest = convertedDayRest(data.espiryDate)
    const isExpired = dayRest === 'Expired' && 'bg-yellow-300'
    const dateFormated = convertedYearMonthDay(data?.espiryDate)
    return (
      <>
        <Badge color="secondary" className="flex items-center">
          <div>{dayRest}</div>
          <div
            className={`${isExpired} text-xs flex items-center mx-2 ring-1 ring-primary px-2 rounded-full`}
          >
            {dateFormated}
          </div>
        </Badge>
      </>
    )
  }
  const EditForm = (data: FindAllCoupons) => <FormUpdateCoupon {...data} />

  const buttonActions = (data: FindAllCoupons) => {
    return (
      <>
        <ButtonDelete
          onClick={deleteCoupon}
          id={data.id}
          isPending={isPendingCoupon}
        />
        <EditForm {...data} />
      </>
    )
  }

  const columns: ColumnProps[] = [
    {
      field: 'products.product',
      header: 'Product',
      sortable: true,
      body: (data: FindAllCoupons) => (
        <>
          <div>
            {data.products ? (
              <span className="font-bold">{data.products.product}</span>
            ) : (
              <Tag severity={'info'}>There is no product</Tag>
            )}
          </div>
        </>
      ),
    },

    {
      field: 'code',
      header: 'Code',
      sortable: true,
    },

    {
      field: 'discount',
      header: 'Discount',
      sortable: true,
      body: (data: FindAllCoupons) => (
        <>
          <div>%{`${data.discount}.00`}</div>
        </>
      ),
    },

    {
      field: 'espiryDate',
      header: 'Date initial',
      sortable: true,
      body: (data: FindAllCoupons) => (
        <Badge color="secondary">
          <span>{convertedYearMonthDay(data.createdAt ?? '')}</span>
        </Badge>
      ),
    },
    {
      header: 'Date to expire',
      sortable: true,
      body: (data: FindAllCoupons) => dateExpiration(data),
    },

    {
      field: 'isGlobal',
      header: 'Coupon Global',
      sortable: true,
      body: (data: FindAllCoupons) => (
        <>
          {data.isGlobal ? (
            <Button variant="flat" color="success">
              Yes
            </Button>
          ) : (
            <Button variant="flat" color="danger">
              No
            </Button>
          )}
        </>
      ),
    },

    {
      field: 'isNew',
      header: 'Coupon New',
      sortable: true,
      body: (data: FindAllCoupons) => (
        <>
          {data.isNew ? (
            <Tag severity="success" security="shadow" value="Yes"></Tag>
          ) : (
            <Tag severity="danger" security="shadow" value="Expired"></Tag>
          )}
        </>
      ),
    },

    {
      header: 'Actions',
      body: (data: FindAllCoupons) => buttonActions(data),
    },
  ]
  return {
    columns,
  }
}

export default ColumnsCouponPanel
