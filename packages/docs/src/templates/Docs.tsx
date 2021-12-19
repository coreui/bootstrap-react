import React, { FC, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Callout, CodeBlock, Example, Footer, Header, Seo, Sidebar, Toc } from './../components/'
import { CContainer, CTable } from '@coreui/bootstrap-react/src/index'
import './../styles/styles.scss'

interface ContextProps {
  sidebarVisible: boolean | undefined
  setSidebarVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const myContext = React.createContext({} as ContextProps)

const components = {
  // eslint-disable-next-line react/display-name
  pre: (props) => <CodeBlock {...props} />,
  // eslint-disable-next-line react/display-name
  table: (props) => <CTable responsive {...props} className="table table-striped table-api" />,
  Callout,
  Example,
}

const DocsLayout: FC = ({ data: { mdx } }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  return (
    <>
      <Seo title={mdx.frontmatter.title} description={mdx.frontmatter.description} />
      <Helmet>
        <script src="https://media.ethicalads.io/media/client/ethicalads.min.js" />
      </Helmet>
      <myContext.Provider
        value={{
          sidebarVisible,
          setSidebarVisible,
        }}
      >
        <Header />
        <myContext.Consumer>
          {(context: any) => (
            <nav className="brd-subnavbar py-2 d-md-none" aria-label="Secondary navigation">
              <div className="container-xxl d-flex align-items-md-center">
                <button
                  className="btn brd-sidebar-toggle d-md-none py-0 px-1 ms-3 order-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#brd-docs-nav"
                  aria-controls="brd-docs-nav"
                  aria-expanded="false"
                  aria-label="Toggle docs navigation"
                  onClick={() => {
                    context.setSidebarVisible(!context.sidebarVisible)
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="bi bi-expand"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <title>Expand</title>
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"
                    ></path>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="bi bi-collapse"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <title>Collapse</title>
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"
                    ></path>
                  </svg>
                </button>
              </div>
            </nav>
          )}
        </myContext.Consumer>
        <CContainer className="my-md-4 brd-layout" xxl>
          <Sidebar currentRoute={mdx.frontmatter.route} />
          <main className="brd-main order-1">
            <div className="brd-intro ps-lg-4">
              <div className="d-md-flex align-items-center justify-content-between">
                <h1 className="brd-title" id="content">
                  {mdx.frontmatter.name ? mdx.frontmatter.name : mdx.frontmatter.title}
                </h1>
              </div>
              <p className="brd-lead">{mdx.frontmatter.description}</p>
              <div data-ea-publisher="coreui-io" data-ea-type="image"></div>
            </div>
            <div className="brd-toc mt-4 mb-5 my-md-0 ps-xl-3 mb-lg-5 text-muted">
              <Toc items={mdx.tableOfContents} />
            </div>
            <div className="brd-content ps-lg-4">
              <MDXProvider components={components}>
                <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
          </main>
        </CContainer>
      </myContext.Provider>
      <Footer />
    </>
  )
}

DocsLayout.propTypes = {
  children: PropTypes.node,
  data: PropTypes.any,
}

DocsLayout.displayName = 'DocsLayout'

export default DocsLayout

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        name
        description
        route
      }
      tableOfContents(maxDepth: 3)
    }
  }
`
