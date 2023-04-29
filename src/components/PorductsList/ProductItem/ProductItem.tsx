import { FC } from 'react'
import { IProduct } from '@/types/common.types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'
import { navigate } from 'gatsby'

interface IProductItem {
	product: IProduct
	stubProductImageNode: FileNode
}

const ProductItem: FC<IProductItem> = ({
	product: { description, id, price, title, imageUrl },
	stubProductImageNode
}) => {
	const stubImage = getImage(stubProductImageNode)

	const onClickProductCardHandler = () => {
		navigate(`/product/${id}`)
	}

	return (
		<div
			className='group bg-white shadow-lg rounded-lg p-6 w-72 cursor-pointer transform transition duration-300 ease-in-out hover:shadow-xl hover:scale-105'
			onClick={onClickProductCardHandler}
		>
			{imageUrl ? (
				<img src={imageUrl} alt='productImage' className='w-full h-64 object-cover rounded-lg shadow-md' />
			) : (
				stubImage && (
					<GatsbyImage
						image={stubImage}
						objectFit='cover'
						alt='productStub'
						className='w-full h-64 object-cover rounded-lg shadow-md'
					/>
				)
			)}
			<h2 className='mt-4 text-2xl font-semibold text-gray-800'>{title}</h2>
			<p className='mt-2 text-xl font-bold text-gray-600'>${price}</p>
			<p className='mt-2 text-base text-gray-500 leading-relaxed'>{description}</p>
		</div>
	)
}

export default ProductItem
