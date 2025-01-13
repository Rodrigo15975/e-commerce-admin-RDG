import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Form, FormField, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import DynamicUploadFile from '@/components/upload/upload'
import { useResetStore } from '@/modules/create-products/store/clearUpload'
import { zodResolver } from '@hookform/resolvers/zod'
import { BookPlusIcon } from 'lucide-react'
import { Button as ButtonPrime } from 'primereact/button'

import { useForm } from 'react-hook-form'
import { useCreateArchiveProductVariant } from '../../services/mutation'
import { ImageVariant, productVariantSchema } from './schema/schema'
import { LiaTruckLoadingSolid } from 'react-icons/lia'
import Sketch from '@uiw/react-color-sketch'
type Props = {
  dataProduct: FindAllProducts
}

const FormUploadVariants = ({ dataProduct }: Props) => {
  const { id, category, product } = dataProduct
  const { mutate: createArchive, isPending } = useCreateArchiveProductVariant()
  const disabledButton = dataProduct.productVariant.length === 3
  const formResetUpload = useResetStore((store) => store.incrementReset)
  const form = useForm<ImageVariant>({
    resolver: zodResolver(productVariantSchema),
    defaultValues: {
      color: '#000',
      image: null,
    },
  })

  const handleImageUpload = (image: File | null) =>
    form.setValue('image', image)

  const onSubmit = (newVariant: ImageVariant) => {
    const data = new FormData()
    data.append('image', newVariant.image as File)
    data.append('color', newVariant.color)

    createArchive(
      { data, id, categorie: category.category },
      {
        onSuccess() {
          form.reset({
            color: '',
            image: null,
          })
          formResetUpload()
        },
      }
    )
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <ButtonPrime
            tooltipOptions={{
              position: 'top',
            }}
            disabled={disabledButton}
            tooltip="New variant"
            className={`bg-blue-300 p-2 rounded-full  ${
              disabledButton && 'opacity-50 cursor-not-allowed '
            }`}
            icon={<BookPlusIcon className="text-white" />}
          />
        </DialogTrigger>
        <DialogContent
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          className="sm:max-w-5xl"
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-normal">
              Create new Variant for{' '}
              <span className="font-bold">{product}</span>{' '}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Use this form to create a new variant for the selected product.
          </DialogDescription>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col w-full justify-between items-start"
            >
              <div className="flex w-full gap-2">
                <div className="flex-auto">
                  <FormField
                    name={`image`}
                    render={({ fieldState }) => (
                      <>
                        <DynamicUploadFile
                          error={fieldState.error?.message}
                          onUpload={(file) => handleImageUpload(file)}
                        />
                      </>
                    )}
                  />
                </div>
                <div className="flex flex-col text-center gap-2">
                  <Label>Choose to color</Label>
                  <FormField
                    control={form.control}
                    name={`color`}
                    render={({ field }) => (
                      <>
                        <Sketch
                          style={{ marginLeft: 20 }}
                          color={field.value}
                          onChange={(color) => field.onChange(color.hex)}
                        />
                        <FormMessage />
                      </>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-end w-full">
                <Button
                  type="submit"
                  disabled={isPending}
                  loadingIcon={
                    <LiaTruckLoadingSolid className="animate-spin" />
                  }
                  className="w-40"
                >
                  Create
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default FormUploadVariants
