'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useAuth } from '../../services/mutation'
import { defaultValuesLogin, formInputLogin, formSchemaLogin } from './input'

const Login = () => {
  const { mutate: mutationAuth, isPending } = useAuth()
  const form = useForm<Login>({
    resolver: zodResolver(formSchemaLogin),
    defaultValues: defaultValuesLogin,
  })

  const onSubmit = (data: Login) => mutationAuth(data)

  return (
    <>
      <div className="flex h-screen overflow-x-auto">
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
            alt="Scenic view with lighthouse"
            // fill
            priority
            width={
              form.watch('phone')?.length === 9
                ? 400
                : form.watch('phone')?.length === 0
                ? 400
                : 0
            }
            height={
              form.watch('phone')?.length === 9
                ? 300
                : form.watch('phone')?.length === 0
                ? 300
                : 0
            }
            sizes="(max-width: 768px) 50vw"
            className="w-full h-full object-cover"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-evenly mx-auto p-8 lg:py-16">
          <div>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 mr-3"></div>
              <h1 className="text-2xl font-bold">E-commerce</h1>
            </div>

            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
              Welcome to back
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="w-full mx-auto">
                  {formInputLogin.slice(0, 1).map((input, index) => (
                    <FormField
                      key={index}
                      control={form.control}
                      name={input.name}
                      render={({ field }) => (
                        <FormItem className="w-full text-center max-sm:w-full p-[0.1rem] max-sm:text-start  ">
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
                              <InputOTPGroup className="flex justify-between mx-auto  outline-none">
                                {Array.from({ length: 9 }, (_, index) => (
                                  <InputOTPSlot key={index} index={index} />
                                ))}
                              </InputOTPGroup>
                            </InputOTP>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <div>
                  {formInputLogin.slice(1, 2).map((input, index) => (
                    <FormField
                      key={index}
                      control={form.control}
                      name={input.name}
                      render={({ field }) => (
                        <FormItem className="w-full max-sm:w-full max-sm:text-start">
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2"></div>
                </div>
                <Button
                  loading={isPending}
                  loadingIcon={
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  }
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Sign in
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
