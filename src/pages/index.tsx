import { FC } from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'
import { IProduct } from '@/types/common.types'
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

import { PorductsList, SEO } from '@/components'
import MainLayout from '../layouts/MainLayout'

interface IIndexPage {
  server: {
    allProducts: IProduct[]
  }
  file: FileNode
}

const IndexPage: FC<PageProps<IIndexPage>> = ({ data }) => (
  <MainLayout>
    <PorductsList products={data.server.allProducts} stubProductImageNode={data.file} />
  </MainLayout>
)

export default IndexPage

export const Head: HeadFC = () => <SEO />

export const query = graphql`
  query AllProductsQuery {
    server {
      allProducts {
        description
        id
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
`