"use client"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Form as FormCreate } from "@/components/ui/form"
import { storeCreateDiscountCategorie } from "@/modules/category/store"
import { useForm } from "react-hook-form"
import { formSchemaDiscountCategorie } from "@/modules/category/utils/formSchemaDiscount"
import { initialValues } from "./initialValues"
import { zodResolver } from "@hookform/resolvers/zod"
import Create from "./create"
const Form = () => {
  const { setOpenFormCreateDiscount, setIdDiscount, openFormCreateDiscount } =
    storeCreateDiscountCategorie()
  const form = useForm<CreateDiscountCategory>({
    resolver: zodResolver(formSchemaDiscountCategorie),
    defaultValues: initialValues,
  })

  const handleClose = () => {
    setOpenFormCreateDiscount()
    setIdDiscount(undefined)
  }

  return (
    <>
      <FormCreate {...form}>
        <div className="flex justify-between max-sm:flex-wrap gap-3">
          <Dialog open={openFormCreateDiscount} onOpenChange={handleClose}>
            <DialogTrigger className="flex p-4 !bg-blue-600/80 items-center h-10 gap-2  justify-center shadow-lg rounded text-white flex-[0_1_15rem] max-sm:flex-1">
              Create discount
            </DialogTrigger>
            <Create form={form} handleDialogClose={handleClose} />
          </Dialog>
        </div>
      </FormCreate>
    </>
  )
}

export default Form
