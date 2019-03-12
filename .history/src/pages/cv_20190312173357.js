import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var url =
  'https://rawcdn.githack.com/pbiecek/TechnikiWizualizacjiDanych2018/f7640cbed60b505baeab760b68920e3ca08de6dd/Projekt1/BednarzWawrzyniak/BoxOfficePoster.pdf'

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf']

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc =
  '//mozilla.github.io/pdf.js/build/pdf.worker.js'

// Asynchronous download of PDF
var loadingTask = pdfjsLib.getDocument(url)
loadingTask.promise.then(
  function(pdf) {
    console.log('PDF loaded')

    // Fetch the first page
    var pageNumber = 1
    pdf.getPage(pageNumber).then(function(page) {
      console.log('Page loaded')
      var canvas = document.getElementById('the-canvas')

      var scale = 1
      //   var scale = 1.0 / Number(canvas.width);

      var viewport = page.getViewport({ scale: scale })
      //   var viewport = page.getViewport(
      //     canvas.width / page.getViewport(0.05).width
      //   );

      // Prepare canvas using PDF page dimensions
      var context = canvas.getContext('2d')
      canvas.height = viewport.height
      canvas.width = viewport.width

      // Render PDF page into canvas context
      var renderContext = {
        canvasContext: context,
        viewport: viewport,
      }
      var renderTask = page.render(renderContext)
      renderTask.promise.then(function() {
        console.log('Page rendered')
      })
    })
  },
  function(reason) {
    // PDF loading error
    console.error(reason)
  }
)

const Cv = () => {
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
        <script src="//mozilla.github.io/pdf.js/build/pdf.js" />
      </Helmet>
      <div class="columns">
        <div class="column is-full">
          <article class="message">
            <div class="message-header">
              <button class="button is-info is-medium">Pobierz PDF</button>
              <button class="delete is-large" aria-label="delete" />
            </div>
            <div class="message-body">
              <canvas id="the-canvas" />
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}
export default Cv
