'use client'
import { useResetStore } from '@/modules/create-products/store/clearUpload'
import { ImageIcon } from 'lucide-react'
import { FileUpload } from 'primereact/fileupload'
import { Image } from 'primereact/image'
import { useEffect, useRef } from 'react'
import { FormMessage } from '../ui/form'
interface DynamicUploadFileProps {
  // eslint-disable-next-line no-unused-vars
  onUpload: (file: File | null) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  error: string | undefined
}

const defaultEmptyTemplate = () => (
  <div className="flex xl:shadow xl:px-4 py-4 gap-2 flex-col items-center justify-center">
    <div className="flex  justify-center  flex-col gap-2 items-center">
      <ImageIcon />
      <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }}>
        Drag and Drop Image Here
      </span>
    </div>
    <div className="block">
      <Image
        src="https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg"
        alt="default"
        className="ring-1"
        imageClassName="backdrop-blur-sm shadow opacity-[0.3]"
        height="200"
        width="200"
      />
    </div>
  </div>
)

export default function DynamicUploadFile({
  emptyTemplateContent,
  onUpload,
  onSubmitClear,
  ...props
}: DynamicUploadFileProps) {
  const fileUploadRef = useRef<FileUpload>(null)
  // escucha el cambio este compon ente, cuando el resetCount se ejecuta en el osSumit
  const resetCount = useResetStore((state) => state.resetCount)
  useEffect(() => {
    // Limpia el FileUpload cuando cambie el resetCount
    fileUploadRef.current?.clear()
  }, [resetCount])

  const handleSelect = (e: { files: File[] }) =>
    e.files[0] ? onUpload(e.files[0]) : null

  return (
    <article>
      <FileUpload
        ref={fileUploadRef}
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
        chooseOptions={{
          className: 'font-poppins',
        }}
        uploadOptions={{
          className: 'hidden',
        }}
        progressBarTemplate
        onSelect={handleSelect}
        onClear={onSubmitClear}
        contentClassName="font-poppins"
        headerClassName="font-poppins"
        className="!font-poppins"
        emptyTemplate={emptyTemplateContent || defaultEmptyTemplate}
        {...props}
      />
      {props.error && <FormMessage />}
    </article>
  )
}
