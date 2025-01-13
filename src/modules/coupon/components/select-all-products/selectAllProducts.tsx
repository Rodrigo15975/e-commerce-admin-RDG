import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useGetAllProducts } from '@/modules/create-products/services/queries'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any
  label: string
}
const SelectAllProducts = ({ field, label }: Props) => {
  const { data, isLoading } = useGetAllProducts()
  return (
    <>
      <FormItem className="w-full max-sm:w-full max-sm:text-start">
        <FormLabel className="text-primary/60 text-[16px]">{label}</FormLabel>
        <FormControl>
          <Select
            defaultValue={field.value}
            name="product"
            value={String(field.value)}
            onValueChange={(value) => field.onChange(value)}
          >
            <SelectTrigger className="focus:ring-2 focus:ring-primary/50 text-primary font-medium border-none outline-none shadow transition-all rounded w-full ring-1 ring-blue-300/20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {isLoading ? (
                  <Skeleton className="h-4 w-full" />
                ) : (
                  data?.map(
                    ({ id, product }, index) =>
                      product && (
                        <SelectItem
                          key={`${product}-${index}`}
                          className="text-primary"
                          value={String(id)}
                        >
                          {product}
                        </SelectItem>
                      )
                  )
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    </>
  )
}

export default SelectAllProducts
