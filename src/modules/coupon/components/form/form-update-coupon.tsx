// import { Label } from '@/components/ui/label'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useGetAllProducts } from '@/modules/create-products/services/queries'
import {
  Button as ButtonNextUI,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { DatePicker, Select } from 'antd'
import dayjs from 'dayjs'
import { Edit2 } from 'lucide-react'
import { Button } from 'primereact/button'
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from 'primereact/inputnumber'
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useOneFindCoupon } from '../../hooks/useFindCoupon'
import { useUpdateCoupon } from '../../services/mutation'

const FormUpdateCoupon = (data: FindAllCoupons) => {
  const { id } = data
  const { data: getAllProducts, isLoading: isLoadingProducts } =
    useGetAllProducts()
  const { isPending: isPendingUpdate, mutate: mutateUpdate } = useUpdateCoupon()
  const options: string[] = ['Yes', 'No']
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const initialValuesUpdate = useOneFindCoupon(id)
  const form = useForm<UpdateCoupon>({
    defaultValues: initialValuesUpdate,
  })

  const onSubmit = (data: UpdateCoupon) => {
    const { isGlobal } = data
    if (isGlobal) data.product = null
    mutateUpdate(data, {
      onSuccess: () => {
        onClose()
      },
    })
  }

  useEffect(() => {
    if (isOpen) form.reset(initialValuesUpdate)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <>
      <Button
        tooltip="Edit"
        tooltipOptions={{
          position: 'top',
        }}
        onClick={onOpen}
        className="rounded-full font-poppins p-2 border shadow"
      >
        <Edit2 className="text-green-400" />
      </Button>
      <Modal
        backdrop="opaque"
        classNames={{
          backdrop:
            'bg-gradient-to-t from-zinc-600 to-zinc-900/10 backdrop-opacity-20',
          wrapper: 'max-w-2xl  mx-auto',
        }}
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        isDismissable={false}
        scrollBehavior="inside"
      >
        <ModalContent>
          <>
            <ModalBody>
              <ModalHeader className="flex flex-col font-normal gap-1">
                <h5 className="text-center">Coupon update</h5>
              </ModalHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormLabel className="text-primary/60">Product</FormLabel>
                  {!form.getValues().isGlobal && (
                    <FormField
                      control={form.control}
                      name="product"
                      render={({ field }) => (
                        <Select
                          className="w-full h-[2.5rem]  font-poppins"
                          popupClassName="p-3 font-poppins"
                          value={field.value}
                          size="large"
                          onChange={(e) => field.onChange(e)}
                          loading={isLoadingProducts}
                          options={getAllProducts?.map((product) => ({
                            value: product.id,
                            label: product.product,
                          }))}
                          // options={getAllProducts ?? []}
                        />
                      )}
                    />
                  )}
                  <FormField
                    control={form.control}
                    name={'code'}
                    render={({ field }) => (
                      <FormItem className="w-full max-sm:w-full max-sm:text-start">
                        <FormLabel className="text-primary/60">Code</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled
                            value={String(field.value)}
                            className="focus:bg-white text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={'discount'}
                    render={({ field }) => (
                      <FormItem className="w-full max-sm:w-full max-sm:text-start">
                        <FormLabel className="text-primary/60">
                          Discount
                        </FormLabel>
                        <FormControl>
                          <InputNumber
                            inputId="minmax-buttons"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                            value={Number(field.value)}
                            onValueChange={(e: InputNumberValueChangeEvent) =>
                              field.onChange(e.value)
                            }
                            prefix="%"
                            mode="decimal"
                            min={0}
                            max={100}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={'isGlobal'}
                    render={({ field }) => (
                      <FormItem className="w-full max-sm:w-full max-sm:text-start">
                        <FormLabel className="text-primary/60">
                          Coupon Global
                        </FormLabel>
                        <FormControl>
                          <SelectButton
                            {...field}
                            value={field.value ? 'Yes' : 'No'}
                            onChange={(e: SelectButtonChangeEvent) => {
                              const selectedValue = e.value === 'Yes'
                              // setCouponGlobal(selectedValue)
                              field.onChange(selectedValue)
                            }}
                            name={'isGlobal'}
                            pt={{
                              button: {
                                className: `w-full border space-y-4 bg-primary/10 
                               
                                 `,
                              },
                            }}
                            options={options}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={'espiryDate'}
                    render={({ field }) => (
                      <FormItem className="w-full flex flex-col max-sm:w-full max-sm:text-start">
                        <FormLabel className="text-primary/60">
                          Expiry Date
                        </FormLabel>
                        <FormControl>
                          <DatePicker
                            format="YYYY-MM-DD"
                            className="p-3"
                            value={
                              field.value && typeof field.value === 'string'
                                ? dayjs(field.value, 'YYYY-MM-DD')
                                : undefined
                            }
                            defaultValue={
                              field.value && typeof field.value === 'string'
                                ? dayjs(field.value, 'YYYY-MM-DD')
                                : undefined
                            }
                            onChange={(_, dateString) =>
                              field.onChange(dateString)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end gap-2 pb-6">
                    <ButtonNextUI
                      variant="bordered"
                      color="primary"
                      onPress={onClose}
                      // isLoading={isPendingUpdate}
                      disabled={isPendingUpdate}
                    >
                      <span>Close</span>
                    </ButtonNextUI>
                    <ButtonNextUI
                      type="submit"
                      variant="shadow"
                      isLoading={isPendingUpdate}
                      disabled={isPendingUpdate}
                      color="success"
                      className="text-white"
                    >
                      Save
                    </ButtonNextUI>
                  </div>
                </form>
              </Form>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FormUpdateCoupon
