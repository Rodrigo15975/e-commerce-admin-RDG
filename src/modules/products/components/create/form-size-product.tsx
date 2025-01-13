import { CheckboxButton } from '@/components/ui/checkbox-button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { inputSize } from '@/modules/create-products/components/form/input'
import { sizeSchema } from '@/modules/create-products/components/form/schema/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { useCreateSize, useDeleteSize } from '../../services/mutation'

type Props = {
  idProduct: number | undefined
  size: string[]
}

const FormSizeProduct = ({ idProduct, size }: Props) => {
  const { isPending } = useDeleteSize()
  const { isPending: pendingCreateSize, mutate } = useCreateSize()
  const availableSizes = inputSize.filter(
    (input) => !size.includes(input.value)
  )

  const form = useForm<{
    size: string[]
  }>({
    resolver: zodResolver(sizeSchema),
    defaultValues: {
      size: [],
    },
  })

  const onSubmit = ({ size }: { size: string[] }) =>
    mutate({ id: idProduct, size })

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-16 w-full"
        >
          <Label className="text-2xl"> Create Size </Label>

          {availableSizes.length > 0 ? (
            <div className="grid w-full grid-cols-3 mt-10 grid-rows-3 gap-2">
              {' '}
              {availableSizes.map((size, indexSize) => (
                <div key={size.value}>
                  <FormField
                    control={form.control}
                    name={`size`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <CheckboxButton
                            key={`${field.name}-${indexSize} `}
                            label={size.label}
                            checked={field.value?.includes(size.value) || false}
                            className="w-full shadow rounded hover:bg-green-200"
                            // checked={Boolean(field.value)}
                            onCheckedChange={(checkedSize) => {
                              const updatedSizes = checkedSize
                                ? [...(field.value || []), size.value]
                                : field.value.filter(
                                    (val: string) => val !== size.value
                                  )
                              field.onChange(updatedSizes)
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}{' '}
            </div>
          ) : (
            <div className="text-center">
              <Label className="text-center text-primary-50 text-underline">
                Size not available
              </Label>
            </div>
          )}
          <div className="flex justify-end">
            <Button
              color="success"
              className="w-32 font-bold"
              isLoading={isPending || pendingCreateSize}
              type="submit"
            >
              Create
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}

export default FormSizeProduct
