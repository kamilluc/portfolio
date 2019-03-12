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
        </Helmet>
        <div id="main">
          <section id="one">
            <p>
              dsadsadaad
              <br />
              dff
            </p>
          </section>
        </div>
        {/* <div className="main">
          <section id="one">
            <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>

          </section>
        </div> */}
      </Layout>
    )
  }
}

export default Cv
