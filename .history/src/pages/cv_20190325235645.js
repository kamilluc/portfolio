import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import pdf from '../assets/pdf/cv-kamil-luc.pdf'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'
class Cv extends Component {
  constructor() {
    super()
    this.myInput = React.createRef()
  }
  state = {
    numPages: null,
    pageNumber: 1,
    width: 0,
  }
  componentDidMount() {
    this.setState({ width: this.myInput.current.offsetWidth })
    // console.log(this.myInput.current.offsetWidth)
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    const { pageNumber, numPages } = this.state
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'
    // const width = document.getElementById('one').offsetWidth

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main" className="move-to-top">
          <section id="one" ref={this.myInput}>
            <h3 className="icon fa-home">
              <a href={pdf} downlaod>
                Pobierz CV
              </a>
            </h3>
            <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={this.state.width} />
            </Document>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Cv
