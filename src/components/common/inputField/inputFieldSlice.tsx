import { chunk } from 'lodash'
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { KeyInputProduct } from '@/modules/create-products/components/form/input'
import { Control, FieldValues } from 'react-hook-form'

interface DynamicFormInputsProps<T extends FieldValues> {
  inputs: { name: string; label: string; type?: string }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, T>
  fieldPrefix?: string
  chunkSize?: number
  singleInputName?: KeyInputProduct
}

export const DynamicFormInputs = <T extends FieldValues>({
  inputs,
  control,
  fieldPrefix = '',
  chunkSize = 2,
  singleInputName,
}: DynamicFormInputsProps<T>) => {
  const filteredInputs = singleInputName
    ? inputs.filter((input) => input.name === singleInputName)
    : inputs

  const groupedInputs = chunk(filteredInputs, chunkSize)

  return (
    <>
      {groupedInputs.map((group) =>
        group.map((input, inputIndex) => (
          <FormField
            key={`${input.name}-${inputIndex}`}
            control={control}
            name={`${fieldPrefix}${input.name}`}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-primary/60 font-medium">
                  {input.label}
                </FormLabel>
                <FormControl>
                  <Input
                    type={input.type || 'text'}
                    className="focus:ring-2 focus:ring-primary/50 text-primary font-medium border-none outline-none shadow transition-all rounded w-full ring-1 ring-primary/20"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        input.type === 'number'
                          ? Number(e.target.value)
                          : e.target.value
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))
      )}
    </>
  )
}
