'use client'

import { Progress } from '@/components/ui/progress'

const products = [
  {
    name: 'Home Decor Range',
    percentage: 45,
  },
  {
    name: 'Disney Princess Pink Bag III',
    percentage: 29,
  },
  {
    name: 'Bathroom Essentials',
    percentage: 18,
  },
  {
    name: 'Apple Smartwatches',
    percentage: 25,
  },
]

export function TopProducts() {
  return (
    <div className="space-y-8">
      {products.map((product) => (
        <div key={product.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{product.name}</div>
            <div className="text-sm text-muted-foreground">
              {product.percentage}%
            </div>
          </div>
          <Progress value={product.percentage} />
        </div>
      ))}
    </div>
  )
}
