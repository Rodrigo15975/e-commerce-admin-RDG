'use client'
import ButtonAddOriginUI, {
  ButtonRemoveOriginUI,
} from '@/components/ui/button-origin-ui'
import { FormDescription, FormField, FormMessage } from '@/components/ui/form'
import UploadFile from '@/components/upload/upload'
import { motion } from 'framer-motion'
import { Divider } from 'primereact/divider'
import { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useResetStore } from '../../store/clearUpload'
import { initialValues } from './initialValues'
import Sketch from '@uiw/react-color-sketch'
interface ProductVariantsProps {
  productIndex: number
}
const ProductsVariants = ({ productIndex }: ProductVariantsProps) => {
  const resetCount = useResetStore((state) => state.resetCount)
  const { control, setValue } = useFormContext<typeof initialValues>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: `products.${productIndex}.productVariant`,
  })

  const disabledButtonRemoved = fields.length === 1
  const disabledButtonMaxFormVariant = fields.length === 3

  const appendVariant = () => append({ color: '', image: null })
  const removeVariant = (index: number) => remove(index)

  const handleImageUpload = (image: File | null, variantIndex: number) =>
    setValue(
      `products.${productIndex}.productVariant.${variantIndex}.image`,
      image
    )

  const handleColorChange = (value: string, variantIndex: number) =>
    setValue(
      `products.${productIndex}.productVariant.${variantIndex}.color`,
      value
    )

  useEffect(() => {
    // Limpia el color de todas las variantes cuando `resetCount` cambie
    if (resetCount) {
      fields.forEach((_, index) => {
        setValue(
          `products.${productIndex}.productVariant.${index}.color`,
          '#ffffff'
        )
      })
    }
  }, [resetCount, fields, setValue, productIndex])

  return (
    <article className="xl:pr-16">
      <>
        {fields.map((_, variantIndex) => (
          <motion.div
            key={`${variantIndex}-variant`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="">
              <Divider />
              <FormDescription />
              <h4 className="text-2xl underline underline-offset-4  text-primary/80 font-medium">
                Variant {variantIndex + 1}
              </h4>
              <Divider />
              <div className="flex gap-2 flex-col items-end justify-end">
                <p className="text-primary/80 font-medium">Choose color </p>
                <FormField
                  key={`${variantIndex}`}
                  control={control}
                  name={`products.${productIndex}.productVariant.${variantIndex}.color`}
                  render={({ field }) => (
                    <>
                      <Sketch
                        key={fields[variantIndex]?.color}
                        color={field.value}
                        className="ring-1 p-1 rounded ring-primary/30"
                        onChange={({ hex }) =>
                          handleColorChange(hex, variantIndex)
                        }
                      />
                      <FormMessage />
                    </>
                  )}
                />
              </div>
            </div>
            <Divider />
            <FormField
              control={control}
              name={`products.${productIndex}.productVariant.${variantIndex}.image`}
              render={({ fieldState }) => (
                <>
                  <UploadFile
                    error={fieldState.error?.message}
                    onUpload={(file) => handleImageUpload(file, variantIndex)}
                  />
                </>
              )}
            />

            <Divider />
            <ButtonRemoveOriginUI
              type="button"
              title="Remove"
              className={`bg-rose-500 w-[140px] ${
                disabledButtonRemoved && '!bg-primary/10'
              }`}
              disabled={disabledButtonRemoved}
              onClick={() => removeVariant(variantIndex)}
            />
          </motion.div>
        ))}
      </>
      <Divider />
      <ButtonAddOriginUI
        title="Add variant"
        disabled={disabledButtonMaxFormVariant}
        className=" font-medium bg-green-400 text-white font-poppins w-[140px]"
        type="button"
        onClick={appendVariant}
      />
    </article>
  )
}

export default ProductsVariants
