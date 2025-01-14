import { ColumnProps } from 'primereact/column'
import { Tag } from 'primereact/tag'
import FormUploadVariants from '../create/form-upload-variants'
import { Popover, PopoverTrigger } from '@nextui-org/react'
import ColumnDeleteProduct from './columns/column-delete-product'
import ColumnNewProduct from './columns/column-new-product'
import { ProductVariantsDetails } from './columns/column-product-variant'
import ColumnQuantityMin from './columns/column-quantity-min'
import { Trash2Icon } from 'lucide-react'
import ColumnsEditProduct from './columns/columns-edit-product'
import { Button } from 'primereact/button'
import ColumnsSizeProduct from './columns/columns.size.product'

const ColumnsProductsPanel = () => {
  const DetailsVariant = (data: FindAllProducts) => (
    <ProductVariantsDetails data={data} />
  )
  const DeleteProduct = (data: FindAllProducts) => {
    return (
      <Popover showArrow backdrop={'blur'} offset={10} placement="bottom">
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
        <ColumnDeleteProduct data={data} />
      </Popover>
    )
  }
  const NewVariantProduct = (data: FindAllProducts) => (
    <FormUploadVariants dataProduct={data} />
  )
  const EditProduct = (data: FindAllProducts) => (
    <ColumnsEditProduct {...data} />
  )

  const buttonActions = (data: FindAllProducts) => {
    return (
      <>
        <div className="space-x-4 flex items-center justify-center">
          <DeleteProduct {...data} />
          <NewVariantProduct {...data} />
          <EditProduct {...data} />
        </div>
      </>
    )
  }
  const columns: ColumnProps[] = [
    {
      field: 'product',
      header: 'Product',
      sortable: true,
      bodyStyle: {
        fontWeight: 'bold',
      },
    },
    {
      field: 'category.category',
      header: 'Category',
      sortable: true,
    },
    {
      field: 'brand',
      header: 'Brand',
      sortable: true,
    },
    {
      field: 'quantity',
      header: 'Quantity',
      sortable: true,
    },

    {
      field: 'discount',
      header: 'Discount',
      sortable: true,
      body: (data: FindAllProducts) => <>{data.discount}.00%</>,
    },
    {
      header: 'Variants',
      body: (data: FindAllProducts) => DetailsVariant(data),
    },
    {
      field: 'price',
      header: 'Price',
      sortable: true,
      body: (data: FindAllProducts) => (
        <>
          <div className="flex items-center justify-center">
            <span className="font-bold text-lg">${data.price}.00</span>
          </div>
        </>
      ),
    },
    {
      field: 'size',
      header: 'Size',
      body: (data: FindAllProducts) => <ColumnsSizeProduct {...data} />,
    },
    {
      field: 'gender',
      header: 'Gender',
      sortable: true,
    },

    {
      field: 'is_new',
      header: 'New',
      sortable: true,
      body: (data: FindAllProducts) => ColumnNewProduct(data),
    },
    {
      field: 'total_sold',
      header: 'Total sold',
      sortable: true,
      body: (data: FindAllProducts) => <>{data.total_sold ?? 0}</>,
    },
    {
      field: 'description',
      header: 'Description',
      sortable: true,
    },
    {
      field: 'productInventory.stock',
      header: 'In Stock',
      sortable: true,
      body: (data: FindAllProducts) => (
        <>
          {data.productInventory.stock ? (
            <Tag severity="success" value="Yes" />
          ) : (
            <Tag severity="danger" value="No" />
          )}
        </>
      ),
    },
    {
      field: 'productInventory.minStock',
      header: 'Quantity min',
      sortable: true,
      body: (data: FindAllProducts) => ColumnQuantityMin(data),
    },

    {
      header: 'Actions',
      body: (data: FindAllProducts) => buttonActions(data),
    },
  ]

  return { columns }
}

export default ColumnsProductsPanel
