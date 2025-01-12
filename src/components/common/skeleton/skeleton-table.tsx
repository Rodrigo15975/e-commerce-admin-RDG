import React from "react"
import { Skeleton } from "primereact/skeleton"
import { DataTable, DataTableValueArray } from "primereact/datatable"
import { Column, ColumnProps } from "primereact/column"

interface PropsTable<T> {
  columnsConfig: ColumnProps[]
  data: T
  header?: React.JSX.Element
  className?: string
  headerClassName?: string
  row?: number
  loading?: boolean
}

const DataTableSkeleton = <T extends DataTableValueArray | undefined>({
  data,
}: PropsTable<T>) => {
  return (
    <div className="card">
      <DataTable
        rows={10}
        value={data}
        className={`p-datatable-striped  w-full min-h-screen`}
      >
        <Column
          field="code"
          header="Code"
          style={{ width: "25%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="name"
          header="Name"
          style={{ width: "25%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="category"
          header="Category"
          style={{ width: "25%" }}
          body={<Skeleton />}
        ></Column>
        <Column
          field="quantity"
          header="Quantity"
          style={{ width: "25%" }}
          body={<Skeleton />}
        ></Column>
        {/* {columnsConfig.map((column, index) => (
          <Column
            key={index}
            field={column.field}
            header={column.header}
            style={{ width: "25%" }}
            body={<Skeleton />}
          />
        ))} */}
      </DataTable>
    </div>
  )
}
export default DataTableSkeleton
