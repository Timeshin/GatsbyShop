import { FC } from 'react'
import useSiteMetadata from '@/hooks/useSiteMetaData'

interface ISEO {
  title?: string
  description?: string
}

const SEO: FC<ISEO> = ({ title, description }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: siteUrl,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
    </>
  )
}

export default SEO
