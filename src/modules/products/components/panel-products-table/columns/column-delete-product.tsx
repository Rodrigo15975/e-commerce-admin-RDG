import { Label } from '@/components/ui/label'
import { useDeleteProduct } from '@/modules/products/services/mutation'
import { PopoverContent } from '@nextui-org/popover'
import { Button } from '@nextui-org/react'

type Props = {
  data: FindAllProducts
}

const ColumnDeleteProduct = ({ data }: Props) => {
  const { product } = data
  const { mutate, isPending } = useDeleteProduct()

  const deleteProduct = () => mutate(data.id ?? 0)

  return (
    <PopoverContent className="p-4">
      {() => (
        <>
          <Label>
            Product: <span className="font-bold">{product}</span>{' '}
          </Label>
          <div className="flex justify-between p-2 font-poppins">
            <Button
              disabled={isPending}
              isLoading={isPending}
              variant="shadow"
              color="danger"
              onPress={deleteProduct}
              // onClick={deleteProduct}
            >
              Delete
            </Button>
          </div>
        </>
      )}
    </PopoverContent>
  )
}

export default ColumnDeleteProduct
