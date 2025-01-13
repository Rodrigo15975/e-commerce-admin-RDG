const ColumnNewProduct = (data: FindAllProducts) => {
  const { is_new } = data
  return (
    <div className="flex justify-center">
      <div
        className={`h-4 w-4 rounded-full shadow ${
          is_new ? 'bg-green-300' : 'bg-primary/20'
        } `}
      ></div>
    </div>
  )
}

export default ColumnNewProduct
