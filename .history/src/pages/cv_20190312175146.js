import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import pdf from '../assets/pdf/cv-kamil-luc.pdf'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

class Cv extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    const { pageNumber, numPages } = this.state
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <link
            rel="stylesheet"
            type="text/css"
            media="screen"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.css"
          />
        </Helmet>

        <div className="main">
          <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          {/* <p>
          Page {pageNumber} of {numPages}
        </p> */}
        </div>
      </Layout>
    )
  }
}

export default Cv
