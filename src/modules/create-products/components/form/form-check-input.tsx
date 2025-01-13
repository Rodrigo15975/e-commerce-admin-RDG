'use client'
import { CheckboxButton } from '@/components/ui/checkbox-button'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import { inputSize } from './input'

type Props = {
  productIndex: number
}

const FormCheckInput = ({ productIndex }: Props) => {
  const formProducts = useFormContext()

  return (
    <>
      {inputSize.map((size, indexSize) => (
        <div key={size.value}>
          <FormField
            control={formProducts.control}
            name={`products.${productIndex}.size`}
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
      ))}
    </>
  )
}

export default FormCheckInput
