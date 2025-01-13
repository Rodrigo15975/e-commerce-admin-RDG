'use client'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Button } from '@/components/ui/button'
import {
  useCreateUser,
  useGetAllRoles,
  useGetProfile,
  useUpdateUser,
} from '@/modules/users/services'
import { storeUpdateUser } from '@/modules/users/store/storeUpdateUser'
import { formInputUser } from '@/modules/users/utils/formInputsUser'
import {
  formSchemaUser,
  formSchemaUserUpdate,
} from '@/modules/users/utils/formSchemaUser'
import { useEffect } from 'react'
import { defaultValuesCreateUser } from './initialValue'

type Props = {
  handleDialogClose: () => void
}

const Create = ({ handleDialogClose }: Props) => {
  const { data: roles } = useGetAllRoles()
  const { dataUpdate } = storeUpdateUser()
  const { data: user } = useGetProfile()

  const { mutate: mutateCreateUser, isPending: isPendingCreateUser } =
    useCreateUser()

  const { mutate: mutateUpdateUser, isPending: isPendingUpdateUser } =
    useUpdateUser()

  const form = useForm<CreateUser>({
    resolver: zodResolver(
      dataUpdate.id ? formSchemaUserUpdate : formSchemaUser
    ),
    defaultValues: defaultValuesCreateUser,
  })

  const updateUser = (data: CreateUser) =>
    mutateUpdateUser(
      {
        ...data,
        id: dataUpdate.id,
        role: { role: data.role },
        auditoria: {
          id: user?.id,
          role: user?.role.role,
        },
      },
      {
        onSuccess() {
          form.reset()
          form.setValue('role', 'EMPLOYEE')
          handleDialogClose()
        },
      }
    )

  const onSubmit = (data: CreateUser) => {
    if (dataUpdate.id) return updateUser(data)
    mutateCreateUser(
      {
        ...data,
        auditoria: {
          id: user?.id,
          role: user?.role.role,
        },
      },
      {
        onSuccess() {
          form.reset()
          form.setValue('role', 'EMPLOYEE')
          handleDialogClose()
        },
      }
    )
  }

  useEffect(() => {
    if (dataUpdate.id) {
      const { dni, name, id, lastname, phone, role, user_active, password } =
        dataUpdate
      form.setValue('dni', dni)
      form.setValue('lastname', lastname)
      form.setValue('name', name)
      form.setValue('phone', phone)
      form.setValue('user_active', user_active)
      form.setValue('role', role.role)
      form.setValue('password', password)
      form.setValue('id', id)
    } else form.reset(defaultValuesCreateUser)
  }, [dataUpdate, form.reset, form])

  return (
    <>
      <DialogContent className=" max-w-screen-md min-h-[75vh] p-8">
        <div className="overflow-y-auto max-h-[75vh] ">
          <DialogHeader>
            <DialogTitle className="md:text-4xl  text-2xl text-primary/90">
              {dataUpdate.id ? 'Updated User' : 'New User'}
            </DialogTitle>
            <DialogDescription className="">
              {dataUpdate.id
                ? 'Updated give it permission'
                : 'Create a new user give it permission'}
            </DialogDescription>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col justify-between mt-16 min-h-[35rem]"
              >
                <div className="space-y-4 mt-6">
                  <div className="flex justify-center gap-4 max-sm:flex-col">
                    {formInputUser.slice(0, 1).map((input, index) => (
                      <FormField
                        key={index}
                        control={form.control}
                        name={input.name}
                        render={({ field }) => (
                          <FormItem className="w-1/2 max-sm:w-full p-[0.1rem] max-sm:text-start overflow-x-hidden ">
                            <FormLabel className="text-primary/60">
                              {input.text}
                            </FormLabel>
                            <FormControl>
                              <InputOTP
                                className="focus:bg-white text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
                                // placeholder={input.text}
                                {...field}
                                maxLength={9}
                              >
                                <InputOTPGroup className="outline-none">
                                  <InputOTPSlot index={0} />
                                  <InputOTPSlot index={1} />
                                  <InputOTPSlot index={2} />
                                  <InputOTPSlot index={3} />
                                  <InputOTPSlot index={4} />
                                  <InputOTPSlot index={5} />
                                  <InputOTPSlot index={6} />
                                  <InputOTPSlot index={7} />
                                  <InputOTPSlot index={8} />
                                </InputOTPGroup>
                              </InputOTP>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                    {formInputUser.slice(1, 2).map((input, index) => (
                      <FormField
                        key={index}
                        control={form.control}
                        name={input.name}
                        render={({ field }) => (
                          <FormItem
                            className={`w-1/2 max-sm:w-full max-sm:text-start ${
                              dataUpdate.id && input.text === 'Password'
                                ? 'hidden w-full'
                                : ''
                            }  `}
                          >
                            <FormLabel className="text-primary/60">
                              {input.text}
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="focus:bg-white text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
                                // placeholder={input.text}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center gap-4 max-sm:flex-col">
                    {formInputUser.slice(2, 3).map((input, index) => (
                      <FormField
                        key={index}
                        control={form.control}
                        name={input.name}
                        render={({ field }) => (
                          <FormItem className="w-1/2 max-sm:w-full max-sm:text-start">
                            <FormLabel className="text-primary/60">
                              {input.text}
                            </FormLabel>
                            <FormControl>
                              <Select
                                value={field.value}
                                onValueChange={(value) => field.onChange(value)} // Asignamos el valor seleccionado al campo del formulario
                              >
                                <SelectTrigger
                                  className="focus:bg-white text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
                                  // placeholder={input.text}
                                  {...field}
                                >
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Role</SelectLabel>
                                    {roles?.map(({ role, id }) => (
                                      <SelectItem
                                        key={`roles-id-${id}`}
                                        value={role}
                                      >
                                        {role}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                    {formInputUser.slice(3, 4).map((input, index) => (
                      <FormField
                        key={index}
                        control={form.control}
                        name={input.name}
                        render={({ field }) => (
                          <FormItem className="w-1/2 max-sm:w-full max-sm:text-start overflow-x-hidden p-[0.1rem]">
                            <FormLabel className="text-primary/60">
                              {input.text}
                            </FormLabel>
                            <FormControl>
                              <InputOTP
                                className="focus:bg-white text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
                                // placeholder={input.text}
                                {...field}
                                maxLength={8}
                              >
                                <InputOTPGroup>
                                  <InputOTPSlot index={0} />
                                  <InputOTPSlot index={1} />
                                  <InputOTPSlot index={2} />
                                  <InputOTPSlot index={3} />
                                  <InputOTPSlot index={4} />
                                  <InputOTPSlot index={5} />
                                  <InputOTPSlot index={6} />
                                  <InputOTPSlot index={7} />
                                </InputOTPGroup>
                              </InputOTP>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center gap-4 max-sm:flex-col">
                    {formInputUser.slice(4, 6).map((input, index) => (
                      <FormField
                        key={index}
                        control={form.control}
                        name={input.name}
                        render={({ field }) => (
                          <FormItem className="w-1/2 max-sm:w-full max-sm:text-start">
                            <FormLabel className="text-primary/60">
                              {input.text}
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="focus:bg-white text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
                                // placeholder={input.text}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </div>
                <DialogFooter>
                  <div className="flex justify-center items-end max-sm:mt-8 flex-1">
                    <Button
                      loading={isPendingCreateUser || isPendingUpdateUser}
                      loadingIcon={
                        <AiOutlineLoading3Quarters className="animate-spin" />
                      }
                      type="submit"
                      className="hover:bg-secondary bg-primary p-2 text-gray-50 justify-center w-full hover:text-primary rounded-full"
                    >
                      {dataUpdate.id ? 'Update user' : 'Create new user'}
                    </Button>
                  </div>
                </DialogFooter>
              </form>
            </Form>
          </DialogHeader>
        </div>
      </DialogContent>
    </>
  )
}

export default Create
