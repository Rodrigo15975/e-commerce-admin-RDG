import { FormField } from '@/components/ui/form'
import { Control } from 'react-hook-form'
import SelectAllProducts from '../select-all-products/selectAllProducts'
type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<CreateCoupon, any>
}
const SelectInputProduct = ({ control }: Props) => {
  return (
    <>
      <FormField
        control={control}
        name={'product'}
        render={({ field }) => (
          <SelectAllProducts field={field} label="Product" />
        )}
      />
    </>
  )
}

export default SelectInputProduct
