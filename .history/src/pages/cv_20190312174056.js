import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { Document } from 'react-pdf'

const Cv = () => {
  return (
    <Layout>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          media="screen"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.css"
        />
      </Helmet>
      <div>
        <Document file="../assets/pdf/cv-kamil-luc.pdf" />
      </div>
    </Layout>
  )
}
export default Cv
