"use client"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Form as FormCreate } from "@/components/ui/form"
import { formSchemaCategorie } from "@/modules/category/utils/formSchema"
import { storeOpenDialogForm } from "@/utils/storeOpenDialogForm"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Create from "./create"
import { initialValues } from "./initialValues"
import { storeEditCategorie } from "@/modules/category/store/storeEditCategorie"
const Form = () => {
  const { setIsOpenDialogForm, isOpenDialogForm } = storeOpenDialogForm()
  const { setId } = storeEditCategorie()
  const form = useForm<CreateCategorie>({
    resolver: zodResolver(formSchemaCategorie),
    defaultValues: initialValues,
  })

  const handleClose = () => {
    setIsOpenDialogForm()
    setId(undefined)
  }

  return (
    <>
      <FormCreate {...form}>
        <div className="flex justify-between max-sm:flex-wrap gap-3">
          <Dialog open={isOpenDialogForm} onOpenChange={handleClose}>
            <DialogTrigger className="flex p-4 items-center h-10 gap-2  justify-center bg-primary shadow-lg rounded text-white flex-[0_1_15rem] max-sm:flex-1">
              Create Category
            </DialogTrigger>
            <Create form={form} handleDialogClose={handleClose} />
          </Dialog>
        </div>
      </FormCreate>
    </>
  )
}

export default Form
