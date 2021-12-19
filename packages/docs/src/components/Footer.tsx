import React, { FC } from 'react'
import { Link } from 'gatsby'

import { CCol, CContainer, CImage, CRow } from '@coreui/bootstrap-react/src/index'
import logo from './../assets/images/brand/bootstrap-react.svg'
import pkg from './../../package.json'

const Footer: FC = () => {
  return (
    <footer className="brd-footer py-5 mt-5 bg-light">
      <CContainer className="py-5">
        <CRow>
          <CCol className="mb-3" lg={3}>
            <Link
              className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
              to="/"
            >
              <CImage className="d-block" src={logo} height={40} />
            </Link>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2">
                Designed and built with all the love in the world by the{' '}
                <a href="https://coreui.io">CoreUI team</a> with the help of{' '}
                <a href="https://github.com/coreui/bootstrap-react/graphs/contributors">
                  our contributors
                </a>
                .
              </li>
              <li className="mb-2">
                Code licensed{' '}
                <a
                  href="https://github.com/coreui/bootstrap-react/blob/main/LICENSE"
                  target="_blank"
                  rel="license noopener"
                >
                  MIT
                </a>
                , docs{' '}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                  rel="license noopener"
                >
                  CC BY 3.0
                </a>
                .
              </li>
              <li className="mb-2">Currently v{pkg.version}.</li>
            </ul>
          </CCol>
          <CCol className="mb-3" xs={6} lg={{ span: 2, offset: 1 }}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/getting-started/introduction">Docs</Link>
              </li>
              <li className="mb-2">
                <a href="https://coreui.io/react/">Themes</a>
              </li>
              <li className="mb-2">
                <a href="https://blog.coreui.io/">Blog</a>
              </li>
            </ul>
          </CCol>
          <CCol className="mb-3" xs={6} lg={2}>
            <h5>Projects</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://github.com/coreui/bootstrap-react">Bootstrap 5</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/coreui/react/">CoreUI for React.js</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/coreui/coreui-free-react-admin-template/">
                  CoreUI React Admin Template
                </a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/coreui/coreui-icons">CoreUI Icons</a>
              </li>
            </ul>
          </CCol>
          <CCol className="mb-3" xs={6} lg={2}>
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://github.com/coreui/bootstrap-react/issues">Issues</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/coreui/bootstrap-react/discussions">Discussions</a>
              </li>
            </ul>
          </CCol>
        </CRow>
      </CContainer>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default Footer
