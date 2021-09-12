import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <ul className="icons">
      <li>
        <a href="https://www.linkedin.com/in/rengut/" className="icon fa-linkedin" target="_blank" rel="noreferrer" >
          <span className="label">Linkedin</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/Rene014" className="icon fa-github" target="_blank" rel="noreferrer">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
    <p className="copyright"> Thanks to <a href="https://www.gatsbyjs.org/">Gatsby</a> and <a href="https://html5up.net">HTML5 UP</a>.</p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool
}

export default Footer
