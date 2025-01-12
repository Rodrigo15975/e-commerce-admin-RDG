import React from 'react'
import { Edit2, Trash2Icon } from 'lucide-react'
import { Button } from 'primereact/button'

type Props = {
  // eslint-disable-next-line no-unused-vars
  hanledDelete: (e: React.SyntheticEvent) => void
  hanledEdit: () => void
  isPendingDisabledEdit?: boolean
  isPendingDisabledDelete?: boolean
  newButton?: boolean
  children?: React.ReactNode
}

const ButtonActions = ({
  hanledDelete,
  hanledEdit,
  isPendingDisabledDelete,
  isPendingDisabledEdit,
  newButton,
  children,
}: Props) => {
  return (
    <>
      <Button
        tooltip="Delete"
        tooltipOptions={{
          position: 'top',
        }}
        disabled={isPendingDisabledEdit}
        className=" font-poppins p-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-rose-300 via-red-600 rounded-full to-red-400"
        onClick={hanledDelete}
      >
        <Trash2Icon className="text-white" />
      </Button>
      <Button
        tooltip="Edit"
        tooltipOptions={{
          position: 'top',
        }}
        disabled={isPendingDisabledDelete}
        className="rounded-full font-poppins p-2 border shadow"
        onClick={hanledEdit}
      >
        <Edit2 className="text-green-400" />
      </Button>
      {newButton && children}
    </>
  )
}

export default ButtonActions
