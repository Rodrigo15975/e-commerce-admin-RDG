import { FormProvider, useForm } from 'react-hook-form'

export function FormLayout({ children }: { children: React.ReactNode }) {
  const methods = useForm()

  return <FormProvider {...methods}>{children}</FormProvider>
}
