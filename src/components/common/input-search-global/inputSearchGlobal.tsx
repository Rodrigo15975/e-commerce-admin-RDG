import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import PanelInputSearchGlobal from './panelInputSearchGlobal'

const InputSearchGlobal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Input
            type="text"
            title="Search"
            placeholder="Search ..."
            className={`${cn(
              ' w-full rounded outline-none transition shadow cursor-pointer'
            )}`}
          />
        </DialogTrigger>
        <PanelInputSearchGlobal />
      </Dialog>
    </>
  )
}

export default InputSearchGlobal
