'use client'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Input } from '@/components/ui/input'
import { useGetAllCategorys } from '@/modules/category/services/queries'
import { storeCreateDiscountCategorie } from '@/modules/category/store'
import { formInputCreateDiscountCategorie } from '@/modules/category/utils/formSchemaDiscount'
import {
  convertedDateISO,
  convertedYearMonthDay,
} from '@/utils/formatDateIso8601'
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from 'primereact/inputnumber'
import { Nullable } from 'primereact/ts-helpers'
import { useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  useCreateCategorieDiscount,
  useUpdateCategorieDiscount,
} from '@/modules/category/services/mutation'
import { AiOutlineLoading } from 'react-icons/ai'

type Props = {
  form: UseFormReturn<CreateDiscountCategory, unknown, undefined>
  handleDialogClose: () => void
}

const Create = ({ form, handleDialogClose }: Props) => {
  const [discount, setDiscount] = useState<Nullable<number>>(0)
  const { idDiscount, setIdDiscount } = storeCreateDiscountCategorie()
  const { data: getAllCategorys } = useGetAllCategorys()
  const { mutate: mutationCreateDiscount, isPending: isPendingCreateDiscount } =
    useCreateCategorieDiscount()
  const { mutate: mutationUpdateDiscount, isPending: isPendingUpdateDiscount } =
    useUpdateCategorieDiscount()

  const isLoading = isPendingCreateDiscount || isPendingUpdateDiscount

  const onSubmit = (data: CreateDiscountCategory) => {
    const end_date = convertedDateISO(data.end_date)
    if (!idDiscount) {
      mutationCreateDiscount(
        { ...data, discount: Number(discount), end_date },
        {
          onSuccess() {
            handleDialogClose()
            form.reset()
            setDiscount(0)
          },
        }
      )
      return
    }
    mutationUpdateDiscount(
      {
        ...data,
        discount: Number(discount),
        id: idDiscount,
        categoryId: Number(data.categoryId),
        end_date,
      },
      {
        onSuccess() {
          handleDialogClose()
          form.reset()
          setDiscount(0)
          setIdDiscount(undefined)
        },
      }
    )
  }

  useEffect(() => {
    if (idDiscount) {
      const findDiscount = getAllCategorys
        ?.find((category) => {
          if (category.discountRules && category.discountRules?.length > 0)
            return category.discountRules?.some(
              (rule) => rule.id === idDiscount
            )
        })
        ?.discountRules?.find((rule) => rule.id === idDiscount)
      const dateDefault = convertedYearMonthDay(findDiscount?.end_date ?? '')
      setDiscount(findDiscount?.discount)
      form.setValue('end_date', dateDefault)
      form.setValue('categoryId', String(idDiscount))
      return
    } else {
      form.reset()
      setDiscount(0)
    }
  }, [idDiscount, getAllCategorys, form])

  return (
    <>
      <DialogContent className=" max-w-screen-sm min-h-[40vh] p-8">
        <div className="overflow-y-auto max-h-[40vh] ">
          <DialogHeader>
            <DialogTitle className="md:text-4xl  text-2xl text-primary/90">
              {idDiscount
                ? 'Updated discount category'
                : 'New discount category'}
            </DialogTitle>
            <DialogDescription className="">
              {idDiscount
                ? 'Updated give it permission'
                : 'Create a new discount for category'}
            </DialogDescription>
          </DialogHeader>
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-8 mt-8 min-h-[20rem]"
        >
          {!idDiscount &&
            formInputCreateDiscountCategorie.slice(0, 1).map((input, index) => (
              <FormField
                key={index}
                control={form.control}
                name={input.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{input.text}</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category for discount create" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {getAllCategorys?.map((categorie) => (
                          <SelectItem
                            key={categorie.id}
                            value={String(categorie.id)}
                          >
                            {categorie.category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

          {formInputCreateDiscountCategorie.slice(1, 2).map((input, index) => (
            <div key={index} className="flex-col flex gap-2 items-start">
              <FormLabel className="text-primary/60">{input.text}</FormLabel>
              <InputNumber
                inputId="minmax-buttons"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                value={discount}
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setDiscount(e.value)
                }
                mode="decimal"
                min={0}
                max={100}
              />
            </div>
          ))}
          {formInputCreateDiscountCategorie.slice(2, 3).map((input, index) => (
            <FormField
              key={index}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem className={`w-full max-sm:w-full max-sm:text-start`}>
                  <FormLabel className="text-primary/60">
                    {input.text}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={String(field.value)}
                      type="date"
                      className="focus:bg-white  text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <DialogFooter>
            <Button
              loadingIcon={<AiOutlineLoading className="animate-spin" />}
              disabled={isLoading}
              type="submit"
              className="mt-8"
              variant={'default'}
            >
              {idDiscount
                ? ' Update Discount Category '
                : 'Create Discount Category'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  )
}

export default Create
