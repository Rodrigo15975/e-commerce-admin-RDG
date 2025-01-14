import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tooltip } from '@nextui-org/react'
import { Divider } from '@nextui-org/react'
import { ClipboardList } from 'lucide-react'
import FormSizeProduct from '../../create/form-size-product'
import { useDeleteSize } from '@/modules/products/services/mutation'
import { Label } from '@/components/ui/label'

const ColumnsSizeProduct = (data: FindAllProducts) => {
  const { product, size, id } = data
  const { isPending, mutate: deleteSize } = useDeleteSize()

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <ClipboardList />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-screen-lg">
          <DialogHeader>
            <DialogTitle className="font-normal">
              Product: <span className="font-bold">{product}</span>{' '}
            </DialogTitle>
            <DialogDescription>Size </DialogDescription>
          </DialogHeader>
          <Card>
            <CardHeader>
              <CardTitle>Size list to remove </CardTitle>
              <CardDescription>
                View and manage the size of the product.
              </CardDescription>
            </CardHeader>

            {size.length > 0 ? (
              <div className="grid px-3 py-4 grid-cols-3 grid-rows-2 gap-2">
                {size.map((sizeAvaible, index) => (
                  <Tooltip
                    key={`size-${sizeAvaible}-${index}`}
                    closeDelay={0}
                    content={`Click for delete size ${sizeAvaible} `}
                    delay={0}
                    isDisabled={isPending}
                  >
                    <CardContent
                      className={`border  ${
                        isPending && 'pointer-events-none bg-primary/50'
                      }  transition cursor-pointer bg-primary rounded-md text-center flex items-center justify-center p-0 text-white hover:bg-primary/90 hover:text-white`}
                    >
                      <Button
                        disabled={isPending}
                        onClick={() => deleteSize({ id, size: sizeAvaible })}
                        className="w-full p-4  h-full"
                      >
                        {sizeAvaible}
                      </Button>
                    </CardContent>
                  </Tooltip>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <Label className="text-center text-primary-50 text-underline">
                  Size not available
                </Label>
              </div>
            )}
            <Divider />
            <CardFooter>
              <FormSizeProduct size={size} idProduct={data.id} />
            </CardFooter>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ColumnsSizeProduct
