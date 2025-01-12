'use client'
import { Column, ColumnProps } from 'primereact/column'
import { DataTable, DataTableValueArray } from 'primereact/datatable'
import React from 'react'

interface PropsTable<T> {
  columnsConfig: ColumnProps[]
  data: T
  header?: React.JSX.Element
  globalFilter: string
  className?: string
  headerClassName?: string
  row?: number
  loading?: boolean
}

const Table = <T extends DataTableValueArray | undefined>({
  columnsConfig,
  data,
  header,
  globalFilter,
  className,
  row,
  loading,
  headerClassName,
}: PropsTable<T>) => {
  return (
    <>
      <DataTable
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        paginator
        value={data}
        rows={row ? row : 5}
        globalFilter={globalFilter}
        tableStyle={{
          minWidth: '100%',
          maxWidth: '100%',
        }}
        resizableColumns
        loading={loading}
        aria-errormessage="error"
        title="Nothing adat"
        rowsPerPageOptions={[5, 10, 20, 50]}
        header={header}
        // Puede hacer quie aparezca el scroll cuando el max width es menor
        className={` ${className} w-full min-h-[75vh]`}
        editMode='row'
        
      >
        {columnsConfig.map((column, index) => (
          <Column
            key={`table-${index}-${column}`}
            sortable={column.sortable}
            className="h-[4rem] border w-full text-slate-500 border-bg_six/10 p-2 hover:bg-primary/10  transition font-medium "
            resizeable
            headerClassName={`${headerClassName}`}
            field={column.field}
            align={'center'}
            body={column.body}
            header={column.header}
          />
        ))}
      </DataTable>
    </>
  )
}

export default Table
