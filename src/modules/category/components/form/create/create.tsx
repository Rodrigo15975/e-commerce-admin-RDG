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
import { Input } from '@/components/ui/input'
import { storeEditCategorie } from '@/modules/category/store/storeEditCategorie'
import { formInputCategorie } from '@/modules/category/utils/formSchema'
import { useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { initialValues } from './initialValues'
import { useGetAllCategorys } from '@/modules/category/services/queries'
import {
  useCreateCategorie,
  useUpdateCategorie,
} from '@/modules/category/services/mutation'
import { AiOutlineLoading } from 'react-icons/ai'

type Props = {
  form: UseFormReturn<CreateCategorie, unknown, undefined>
  handleDialogClose: () => void
}

const Create = ({ form, handleDialogClose }: Props) => {
  const { id } = storeEditCategorie()
  const { mutate: mutateCreateCategorie, isPending: pendingCreate } =
    useCreateCategorie()
  const { mutate: mutateUpdateCategorie, isPending: pendingUpdate } =
    useUpdateCategorie()
  const onSubmit = (data: CreateCategorie) => {
    if (!id) {
      mutateCreateCategorie(
        { category: data.category },
        {
          onSuccess() {
            handleDialogClose()
            form.reset()
          },
        }
      )
      return
    }
    mutateUpdateCategorie(
      { ...data, id },
      {
        onSuccess() {
          handleDialogClose()
          form.reset()
        },
      }
    )
  }
  const { data: allCategories } = useGetAllCategorys()

  useEffect(() => {
    if (id) {
      const findCategorie = allCategories?.find(
        (categorie) => categorie.id === id
      )
      return form.setValue('category', findCategorie?.category ?? '')
    } else form.reset(initialValues)
  }, [id, allCategories, form])

  return (
    <>
      <DialogContent className=" max-w-screen-sm min-h-[40vh] p-8">
        <div className="overflow-y-auto max-h-[40vh] ">
          <DialogHeader>
            <DialogTitle className="md:text-4xl  text-2xl text-primary/90">
              {id ? 'Updated Categorie ' : 'New categorie'}
            </DialogTitle>
            <DialogDescription className="">
              {id
                ? 'Updated give it permission'
                : 'Create a new Categorie  give it permission'}
            </DialogDescription>
          </DialogHeader>
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between mt-8 min-h-[20rem]"
        >
          {formInputCategorie.map((input, index) => (
            <FormField
              key={index}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem
                  className={`w-full max-sm:w-full max-sm:text-start 
                 
                  `}
                >
                  <FormLabel className="text-primary/60">
                    {input.text}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="focus:bg-white  text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
                      {...field}
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
              disabled={pendingCreate || pendingUpdate}
              type="submit"
              variant={'default'}
            >
              {id ? ' Update Category ' : 'Create Category'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  )
}

export default Create
