import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const PanelInputSearchGlobal = () => {
  return (
    <DialogContent className="sm:max-w-screen-xl min-h-[90vh]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when youre done.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter className="items-end">
        <DialogTrigger
          className="bg-primary text-white h-12 w-28 rounded-lg shadow"
          type="button"
        >
          Cancelar
        </DialogTrigger>
      </DialogFooter>
    </DialogContent>
  )
}

export default PanelInputSearchGlobal
