import React from 'react'
// import Layout from '../components/layout'
// import Helmet from 'react-helmet'
import { Document } from 'react-pdf'

const Cv = () => {
  return (
    <div>
      <Document file="https://rawcdn.githack.com/pbiecek/TechnikiWizualizacjiDanych2018/f7640cbed60b505baeab760b68920e3ca08de6dd/Projekt1/BednarzWawrzyniak/BoxOfficePoster.pdf" />
    </div>
  )
}
export default Cv

{
  /* <Layout>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          media="screen"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.css"
        />
      </Helmet> */
}

{
  /* </Layout> */
}
