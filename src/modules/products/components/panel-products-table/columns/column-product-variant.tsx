import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useDeleteArchive } from '@/modules/products/services/mutation'
import { m } from 'framer-motion'
import { ArchiveX, BookDown } from 'lucide-react'
import { Button } from 'primereact/button'
import { Image } from 'primereact/image'
import { LiaTruckLoadingSolid } from 'react-icons/lia'

type Props = {
  data: FindAllProducts
}

export function ProductVariantsDetails({ data }: Props) {
  const { productVariant, product } = data
  const { mutate, isPending } = useDeleteArchive()
  const deleteArchive = (key_url: string) => mutate(key_url)

  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button
          tooltip="Details variant"
          tooltipOptions={{
            position: 'top',
          }}
        >
          <BookDown />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-screen-xl max-lg:max-h-[90vh] overflow-y-auto max-lg:min-h-[90vh]">
        <DialogHeader className="flex-[0_1_1rem] items-center ">
          <DialogTitle className="text-2xl">Variants Products</DialogTitle>
          <DialogDescription>
            View and manage the variants of the product.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productVariant.map((variant, index) => (
            <m.div
              key={variant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Button
                tooltip="Delete archive"
                onClick={() => deleteArchive(variant.key_url)}
                tooltipOptions={{
                  position: 'top',
                }}
                loadingIcon={<LiaTruckLoadingSolid className="animate-spin" />}
                disabled={isPending}
                className="absolute bottom-0 right-0 rounded-md bg-primary flex justify-center items-center p-2 mb-2 hover:bg-primary/50 mr-2"
                icon={<ArchiveX className="text-3xl  text-white " />}
              />
              <Card className="w-full hover:shadow-lg transition h-80 overflow-hidden">
                <CardContent className="p-0 flex  justify-center w-full h-full">
                  <Image
                    loading="lazy"
                    src={variant.url}
                    imageClassName="object-scale-down h-full w-full"
                    className="w-full h-full object-cover "
                    alt={`product-${product}`}
                  />
                </CardContent>
              </Card>
            </m.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
