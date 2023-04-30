import { FC } from 'react'
import { HeadFC, PageProps } from 'gatsby'
import { IProduct } from '@/types/common.types'
import { navigate } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { SEO } from '@/components'

interface IProductPage {
	product: IProduct
	stubImage: IGatsbyImageData
}

const ProductPage: FC<PageProps<null, IProductPage>> = ({ pageContext: { product, stubImage } }) => {
	const onGoMainPageHandler = () => {
		navigate('/')
	}

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='grid grid-cols-2 gap-8'>
				{product.imageUrl ? (
					<img className='rounded-lg shadow-lg max-h-[555px]' src={product.imageUrl} alt={product.title} />
				) : (
					<GatsbyImage
						image={stubImage}
						objectFit='contain'
						alt={product.title}
						className='w-full h-64 object-cover rounded-lg shadow-md'
					/>
				)}
				<div>
					<h1 className='text-4xl font-bold mb-4'>{product.title}</h1>
					<p className='text-gray-600 text-lg mb-6'>{product.description}</p>
					<p className='text-xl font-bold text-green-500'>${product.price}</p>
					<div className='flex mt-8'>
						<button
							type='button'
							className='bg-gray-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-gray-600 transition-colors duration-300 ease-in-out'
							onClick={onGoMainPageHandler}
						>
							Go Back
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductPage

export const Head: HeadFC = () => <SEO />
