import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Photo 1',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    src: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

class ProjectList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const { data } = this.props
    const projects = data.project.projects
    console.log(projects)
    // const demo =
    const projs = projects.map(proj => (
      <div key={proj.id}>
        <h2>
          <a href={proj.github} className="icon fa-github" target="_blank">
            <span className="label">Github</span>
          </a>{' '}
          {proj.demo ? (
            <a href={proj.demo} className="icon fa-dribbble" target="_blank">
              <span className="label">Demo</span>
            </a>
          ) : null}{' '}
          {proj.title}
        </h2>
        <h3>{proj.subtitle}</h3>
        <img src={proj.image.url} alt={proj.title} width="80%" />
        <p>
          <strong>Opis</strong> {proj.description}
        </p>
        <p>
          <strong>Technologie</strong> {proj.technologies}
        </p>
        <hr />
      </div>
    ))
    return (
      <Layout>
        <div id="main" className="move-to-top">
          <section id="one">
            <header className="major">
              <h1>Moje projekty</h1>
              <hr />
            </header>
            {projs}
          </section>
        </div>
      </Layout>
    )
  }

  // render() {
  //   const { data } = this.props
  //   const projects = data.project.projects

  //   const siteTitle = 'Gatsby Starter - Strata'
  //   const siteDescription = 'Site description'

  //   return (
  //     <Layout>
  //       <Helmet>
  //         <title>{siteTitle}</title>
  //         <meta name="description" content={siteDescription} />
  //       </Helmet>
  //       {console.log(data)}
  //       {console.log(projects)}
  //       <div id="main">
  //         <section id="one">
  //           <header className="major">
  //             <h2>
  //               aaaIpsum lorem dolor aliquam ante commodo
  //               <br />
  //               magna sed accumsan arcu neque.
  //             </h2>
  //           </header>
  //           <p>
  //             Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
  //             nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
  //             lobortis tortor primis integer massa adipiscing id nisi accumsan
  //             pellentesque commodo blandit enim arcu non at amet id arcu magna.
  //             Accumsan orci faucibus id eu lorem semper nunc nisi lorem
  //             vulputate lorem neque cubilia.
  //           </p>
  //           <ul className="actions">
  //             <li>
  //               <a href="#" className="button">
  //                 Learn More
  //               </a>
  //             </li>
  //           </ul>
  //         </section>

  //         <section id="two">
  //           <h2>Recent Work</h2>

  //           <Gallery
  //             images={DEFAULT_IMAGES.map(
  //               ({ id, src, thumbnail, caption, description }) => ({
  //                 src,
  //                 thumbnail,
  //                 caption,
  //                 description,
  //               })
  //             )}
  //           />

  //           <ul className="actions">
  //             <li>
  //               <a href="#" className="button">
  //                 Full Portfolio
  //               </a>
  //             </li>
  //           </ul>
  //         </section>

  //         <Contact />
  //       </div>
  //     </Layout>
  //   )
  // }

  // render() {
  //   const { data } = this.props

  //   return (
  //     <div>
  //       hello
  //       {console.log(data)}
  //     </div>
  //   )
  // }
}

export default ProjectList
