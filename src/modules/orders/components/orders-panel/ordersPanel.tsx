'use client'
import Panel from '@/components/common/Container/Panel'
import TypographyTitle from '@/components/common/typographyTitle/typographyTitle'
import React, { useState } from 'react'
import { useGetAllTask } from '../../services/queries'
import { useCreateTask } from '../../services/mutation'
import { Input } from '@/components/ui/input'
import { Button } from '@nextui-org/react'

const OrdersPanel = () => {
  const { data = [] } = useGetAllTask()
  const { mutate, isPending } = useCreateTask()
  const [value, setValue] = useState<string>('')
  const createTask = () => {
    if (!value) return
    mutate(value, {
      onSuccess: () => {
        setValue('')
      },
    })
  }

  return (
    <Panel>
      <div>
        <TypographyTitle title="Orders" />
      </div>
      <div>
        <h1> Tasks</h1>
        <hr />
        {data.map((task) => (
          <div key={task.id}>
            <h1
              className={` ${
                isPending && 'line-through text-green-300 font-semibold'
              } `}
            >
              {task.title}
            </h1>
          </div>
        ))}
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Button isLoading={isPending} disabled={isPending} onPress={createTask}>
          Creating
        </Button>
      </div>
    </Panel>
  )
}

export default OrdersPanel
