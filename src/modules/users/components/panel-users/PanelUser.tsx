"use client"

import Panel from "@/components/common/Container/Panel"
import Create from "../form/create/create"
import TypographyTitle from "@/components/common/typographyTitle/typographyTitle"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { FaUserPlus } from "react-icons/fa6"
import PanelUserTable from "../panel-user-table/panelUserTable"
import { storeOpenDialogForm } from "../../../../utils/storeOpenDialogForm"
import { FormLayout } from "@/components/common/FormLayout/FormLayout"
import { storeUpdateUser } from "../../store/storeUpdateUser"
import { defaultValuesCreateUser } from "../form/create/initialValue"

const PanelUser = () => {
  const { isOpenDialogForm, setIsOpenDialogForm } = storeOpenDialogForm()
  const { setDataUpdate } = storeUpdateUser()
  const handleClose = () => {
    setIsOpenDialogForm()
    setDataUpdate({
      ...defaultValuesCreateUser,
      role: {
        role: "",
      },
      id: undefined,
    })
  }

  return (
    <FormLayout>
      <Panel>
        <div className="flex justify-between max-sm:flex-wrap gap-3">
          <TypographyTitle title="Users" />
          <Dialog open={isOpenDialogForm} onOpenChange={handleClose}>
            <DialogTrigger className="flex items-center h-10 gap-2  justify-center bg-primary shadow-lg rounded text-white flex-[0_1_15rem] max-sm:flex-1">
              Create
              <FaUserPlus />
            </DialogTrigger>
            <Create handleDialogClose={handleClose} />
          </Dialog>
        </div>
        <div className="rounded bg-white border mt-16 w-full">
          <PanelUserTable />
        </div>
      </Panel>
    </FormLayout>
  )
}

export default PanelUser
