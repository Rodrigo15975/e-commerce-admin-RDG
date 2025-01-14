import { Spinner } from '@nextui-org/react'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Spinner color="warning" />
    </div>
  )
}
