module.exports = {
  siteMetadata: {
    title: 'Kamil Łuc - Portfolio',
    author: 'Kamil Łuc',
    description: 'Kamil Łuc - Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Kamil Łuc - Portfolio',
        short_name: 'Kamil Łuc',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/avataaars.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'PROJECT',
        // This is field under which it's accessible
        fieldName: 'project',
        // Url to query from
        url:
          'https://api-euwest.graphcms.com/v1/cjsuzely88sgs01bsi7z3c9lj/master',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-136928142-1',
      },
    },
  ],
}
