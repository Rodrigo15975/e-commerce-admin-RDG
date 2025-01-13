import { Button } from "@/components/ui/button"
import { Edit2, Trash2Icon } from "lucide-react"
import { ColumnProps } from "primereact/column"
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup"
import { useDeleteUser } from "../../services"
import { storeOpenDialogForm } from "../../../../utils/storeOpenDialogForm"
import { storeUpdateUser } from "../../store/storeUpdateUser"

const ColumnsUserTable = () => {
  const { setDataUpdate } = storeUpdateUser()
  const { setIsOpenDialogForm } = storeOpenDialogForm()
  const { mutate: mutateDeleteUser, isPending: isPedingDelete } =
    useDeleteUser()

  const buttonAcciones = (data: UpdateUser) => {
    const { id } = data

    const accept = () => mutateDeleteUser(id ?? 0)

    const confirmDelete = (e: React.SyntheticEvent) => {
      if (isPedingDelete) return
      confirmPopup({
        target: e?.currentTarget as HTMLButtonElement,
        message: `Deleted user?`,
        accept,
        acceptClassName: "ml-4 p-2 bg-primary text-white ",
      })
    }

    const updateUser = () => {
      setDataUpdate(data)
      setIsOpenDialogForm()
    }

    return (
      <>
        <ConfirmPopup />
        <div className="space-x-4">
          <Button
            disabled={isPedingDelete}
            className="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-800/20 via-red-600/20 to-red-400/20"
            onClick={confirmDelete}
          >
            <Trash2Icon />
          </Button>
          <Button
            disabled={isPedingDelete}
            variant={"ghost"}
            className="border shadow"
            onClick={updateUser}
          >
            <Edit2 />
          </Button>
        </div>
      </>
    )
  }

  const columns: ColumnProps[] = [
    {
      header: "Dni",
      field: "dni",
      sortable: true,
    },
    {
      header: "Name",
      field: "name",
    },
    {
      header: "Lastname",
      field: "lastname",
    },
    {
      header: "Phone",
      field: "phone",
    },
    {
      header: "Role",
      field: "role.role",
    },
    {
      header: "Activo",
      field: "user_active",
      body(data: UpdateUser) {
        return (
          <>
            <div
              className={`mx-auto rounded-full ${
                data.user_active
                  ? "bg-green-400 h-4 w-4"
                  : "bg-rose-500 h-4 w-4"
              }`}
            ></div>
          </>
        )
      },
    },
    {
      header: "Acciones",
      body: (data: UpdateUser) => buttonAcciones(data),
    },
  ]

  return {
    columns,
  }
}

export default ColumnsUserTable
