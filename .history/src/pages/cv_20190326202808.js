import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import pdf from '../assets/pdf/cv-kamil-luc.pdf'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
class Cv extends Component {
  constructor() {
    super()
    this.myInput = React.createRef()
  }
  state = {
    pageNumber: 1,
    width: 0,
  }
  componentDidMount() {
    this.setState({ width: this.myInput.current.offsetWidth })
  }

  // onDocumentLoadSuccess = ({ numPages }) => {
  //   this.setState({ numPages })
  // }

  render() {
    const { pageNumber } = this.state
    const siteTitle = 'Kamil Łuc - CV'
    const siteDescription = 'Kamil Łuc - Student, Software Developer, Kraków'
    // const width = document.getElementById('one').offsetWidth

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main" className="move-to-top">
          <section id="one" ref={this.myInput}>
            <h2 className="icon fa-download">
              <a href={pdf} downlaod="true">
                {' '}
                Pobierz CV (PDF)
              </a>
            </h2>
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
