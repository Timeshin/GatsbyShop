import { FC } from 'react'
import { IProduct } from '@/types/common.types'
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

import ProductItem from './ProductItem/ProductItem'

interface IPorductsList {
  products: IProduct[]
  stubProductImageNode: FileNode
}

const PorductsList: FC<IPorductsList> = ({ products, stubProductImageNode }) => {
  if(!products?.length) return <h1>No products</h1>

  return (
    <div className='flex flex-wrap items-center gap-5'>
      {
        products.map((product) => <ProductItem key={product.id} product={product} stubProductImageNode={stubProductImageNode} />)
      }
    </div>
  )
}

export default PorductsList