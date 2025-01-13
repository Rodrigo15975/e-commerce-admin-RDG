const ColumnQuantityMin = (data: FindAllProducts) => {
  const { minStock } = data.productInventory
  return (
    <div>
      <span>
        <strong>Min Stock:</strong>{' '}
        {minStock > 0 ? (
          <span className="text-green-600">{minStock}</span>
        ) : (
          <span className="text-red-600">Out of stock</span>
        )}
      </span>
    </div>
  )
}

export default ColumnQuantityMin
