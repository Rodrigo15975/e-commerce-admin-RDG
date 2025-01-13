import { InputField } from '@/components/common/inputField/InputField'
import { Form, FormField, FormLabel } from '@/components/ui/form'
import InputNumberUI from '@/components/ui/inputNumber'
import { useGetAllCategorys } from '@/modules/category/services/queries'
import { gender } from '@/modules/create-products/components/form/initialValues'
import { useFindByIdProduct } from '@/modules/products/hooks/useFindByIdProduct'
import {
  Button as ButtonNextUI,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { Select } from 'antd'
import { Edit2 } from 'lucide-react'
import { Button } from 'primereact/button'
import { useForm } from 'react-hook-form'
import {
  InitialValueUpdateProduct,
  productFieldsUpdateProduct,
} from '../../create/initial-value-update-product'
import { useUpdateProduct } from '@/modules/products/services/mutation'

const ColumnsEditProduct = (dataProduct: FindAllProducts) => {
  const { id, product } = dataProduct
  const valueToUpdateProductForm = useFindByIdProduct(id)
  const { data: allCategories, isLoading } = useGetAllCategorys()
  const { mutate: updateProduct, isPending } = useUpdateProduct()

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const formProducts = useForm({
    defaultValues: {
      ...valueToUpdateProductForm,
    },
  })

  const onSubmit = (dataUpdate: InitialValueUpdateProduct) =>
    updateProduct(dataUpdate, {
      onSuccess: () => {
        onClose()
      },
    })

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
                <h5 className="text-center">
                  Product to update <span className="font-bold">{product}</span>
                </h5>
              </ModalHeader>
              <Form {...formProducts}>
                <form
                  onSubmit={formProducts.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 grid-rows-4 gap-6">
                    {productFieldsUpdateProduct
                      .slice(0, 1)
                      .map((input, index) => (
                        <FormField
                          key={index}
                          name={input.name}
                          render={({ field }) => (
                            <div className="flex flex-col items-start justify-end space-y-2">
                              <FormLabel className="text-primary/60 text-[16px]">
                                {input.label}
                              </FormLabel>
                              <Select
                                defaultValue={field.value}
                                className="w-full h-[2.5rem]  font-poppins"
                                value={field.value}
                                size="large"
                                onChange={(e) => field.onChange(e)}
                                loading={isLoading}
                                options={allCategories?.map((category) => ({
                                  value: category.category,
                                  label: category.category,
                                }))}
                              />
                            </div>
                          )}
                        />
                      ))}
                    {productFieldsUpdateProduct
                      .slice(1, 2)
                      .map((input, index) => (
                        <FormField
                          key={index}
                          name={input.name}
                          render={({ field }) => (
                            <div className="flex flex-col">
                              <InputField label={input.label} field={field} />
                            </div>
                          )}
                        />
                      ))}
                    {productFieldsUpdateProduct
                      .slice(2, 3)
                      .map((input, inputIndex) => (
                        <FormField
                          key={`${input.name}-${inputIndex}`}
                          control={formProducts.control}
                          name={input.name}
                          render={({ field }) => (
                            <InputNumberUI
                              value={Number(field.value)}
                              title={`${input.label}`}
                              min={1}
                              onValueChange={(e) => field.onChange(e.value)}
                            />
                          )}
                        />
                      ))}
                    {productFieldsUpdateProduct
                      .slice(3, 4)
                      .map((input, inputIndex) => (
                        <FormField
                          key={`${input.name}-${inputIndex}`}
                          control={formProducts.control}
                          name={input.name}
                          render={({ field }) => (
                            <InputNumberUI
                              inputId="currency-us"
                              mode="currency"
                              currency="USD"
                              locale="en-US"
                              value={Number(field.value)}
                              title={input.label}
                              onValueChange={(e) => field.onChange(e.value)}
                            />
                          )}
                        />
                      ))}
                    {productFieldsUpdateProduct
                      .slice(4, 5)
                      .map((input, inputIndex) => (
                        <FormField
                          key={`${input.name}-${inputIndex}`}
                          control={formProducts.control}
                          name={input.name}
                          render={({ field }) => (
                            <div className="flex flex-col justify-end space-y-2">
                              <FormLabel className="text-primary/60 text-[16px]">
                                {input.label}
                              </FormLabel>
                              <Select
                                defaultValue={field.value}
                                className="w-full h-[2.5rem] rounded-none font-poppins"
                                popupClassName="rounded-none"
                                rootClassName="rounded-none"
                                value={field.value}
                                variant="outlined"
                                size="large"
                                onChange={(e) => field.onChange(e)}
                                loading={isLoading}
                                options={gender.map((gender) => ({
                                  value: gender.value,
                                  label: gender.value,
                                }))}
                              />
                            </div>
                          )}
                        />
                      ))}
                    {productFieldsUpdateProduct
                      .slice(5, 6)
                      .map((input, inputIndex) => (
                        <FormField
                          key={`${input.name}-${inputIndex}`}
                          control={formProducts.control}
                          name={input.name}
                          render={({ field }) => (
                            <InputField label={input.label} field={field} />
                          )}
                        />
                      ))}
                    {productFieldsUpdateProduct
                      .slice(6, 7)
                      .map((input, inputIndex) => (
                        <FormField
                          key={`${input}-${inputIndex}`}
                          control={formProducts.control}
                          name={input.name}
                          render={({ field }) => (
                            <InputNumberUI
                              value={Number(field.value)}
                              title={input.label}
                              onValueChange={(e) => field.onChange(e.value)}
                              max={100}
                              min={0}
                              prefix="%"
                            />
                          )}
                        />
                      ))}
                    {productFieldsUpdateProduct
                      .slice(7, 8)
                      .map((input, inputIndex) => (
                        <FormField
                          key={`${input}-${inputIndex}`}
                          control={formProducts.control}
                          name={input.name}
                          render={({ field }) => (
                            <InputNumberUI
                              value={Number(field.value)}
                              title={input.label}
                              onValueChange={(e) => field.onChange(e.value)}
                            />
                          )}
                        />
                      ))}
                    {productFieldsUpdateProduct
                      .slice(8, 9)
                      .map((input, inputIndex) => (
                        <FormField
                          key={`${input.name}-${inputIndex}`}
                          control={formProducts.control}
                          name={input.name}
                          render={({ field }) => (
                            <InputField label={input.label} field={field} />
                          )}
                        />
                      ))}
                  </div>

                  <div className="flex justify-end gap-2 pb-6">
                    <ButtonNextUI
                      variant="bordered"
                      color="primary"
                      onPress={onClose}
                      // isLoading={isPending}
                      disabled={isPending}
                    >
                      <span>Close</span>
                    </ButtonNextUI>
                    <ButtonNextUI
                      type="submit"
                      variant="shadow"
                      isLoading={isPending}
                      disabled={isPending}
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

export default ColumnsEditProduct
