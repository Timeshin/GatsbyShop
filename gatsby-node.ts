import path from 'path'
import { IProduct } from '@/types/common.types'
import { GatsbyNode, CreatePagesArgs } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

const ProductPage = path.resolve('./src/components/ProductPage/ProductPage.tsx')

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }: CreatePagesArgs) => {
	const { createPage } = actions

	const result = await graphql<{
		server: {
			allProducts: IProduct[]
		}
		file: FileNode
	}>(`
		query GetAllProducts {
			server {
				allProducts {
					id
					description
					price
					title
					imageUrl
				}
			}
			file(relativePath: { eq: "ProductImageStub.jpg" }) {
				childImageSharp {
					gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO])
				}
			}
		}
	`)

	if (result.errors) {
		throw new Error('Error fetching products.')
	}

	const products = result.data?.server?.allProducts
	const stubImage = getImage(result.data!.file)

	if (!products) return

	products.forEach((product) => {
		createPage({
			path: `/product/${product.id}`,
			component: ProductPage,
			context: {
				product,
				stubImage
			}
		})
	})
}
