'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button as ButtonNextUI,
} from '@nextui-org/react'
import { UseMutateFunction } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { Trash2Icon } from 'lucide-react'
import { Button } from 'primereact/button'
import { useState } from 'react'

type Props = {
  isPending?: boolean
  onClick: UseMutateFunction<
    HttpResponse,
    AxiosError<unknown, unknown>,
    number | undefined,
    unknown
  >
  id: number | undefined
}

const ButtonDelete = ({ isPending, onClick, id }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const actionDelete = () =>
    onClick(id, {
      onSuccess: () => setIsOpen(false),
    })

  return (
    <Popover
      isOpen={isOpen}
      offset={10}
      backdrop="opaque"
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>
        <Button
          tooltip="Delete"
          tooltipOptions={{
            position: 'top',
          }}
          className=" font-poppins p-2 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-rose-300 via-red-600 rounded-full to-red-400"
        >
          <Trash2Icon className="text-white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex gap-2">
        <div className="flex gap-2">
          <ButtonNextUI
            isLoading={isPending}
            disabled={isPending}
            onPress={actionDelete}
            color="danger"
          >
            Delete
          </ButtonNextUI>
          <ButtonNextUI
            onPress={() => {
              setIsOpen(false)
            }}
            disabled={isPending}
            color="default"
            className="ml-2"
          >
            Cancelar
          </ButtonNextUI>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default ButtonDelete
