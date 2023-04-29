import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'shop',
    description: 'Products page',
    siteUrl: 'http://localhost:8000',
    image: '/icon.png'
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-provide-react',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static`
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'JsonServer',
        fieldName: 'server',
        url: 'http://localhost:5173/graphql'
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@/types': 'src/types',
          '@/hooks': 'src/hooks',
          '@/components': 'src/components'
        },
        extensions: [
          'ts',
          'tsx',
          'js',
          'jsx'
        ]
      }
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Shop',
        short_name: 'shop',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'static/icon.png',
      },
    }
  ]
}

export default config
