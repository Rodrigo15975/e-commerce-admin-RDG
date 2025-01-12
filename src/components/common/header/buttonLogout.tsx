"use client"
import { Button } from "@/components/ui/button"
import { useLogout } from "@/modules/login/services/mutation"
import { LiaTruckLoadingSolid } from "react-icons/lia"

const ButtonLogout = ({ reject }: { reject: () => void }) => {
  const { mutate, isPending } = useLogout()
  const logout = () => mutate()


  return (
    <>
      <div className="w-full flex justify-center pb-2 gap-2">
        <Button onClick={reject} variant={"link"}>
          Cancel
        </Button>
        <Button
          loading={isPending}
          loadingIcon={<LiaTruckLoadingSolid className="animate-spin" />}
          onClick={logout}
          variant={"destructive"}
          className="bg-primary/90"
        >
          Logout
        </Button>
      </div>
    </>
  )
}

export default ButtonLogout
