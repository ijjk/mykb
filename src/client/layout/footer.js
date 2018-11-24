import React from 'react'
import theme from '../theme'
import ExtLink from '../comps/extLink'

export default function Footer(props) {
  return (
    <footer>
      <p>
        <span>Powered by</span>
        <ExtLink href="//github.com/ijjk/mykb">MYKB</ExtLink>
      </p>

      <style jsx>{`
        footer {
          text-align: center;
          background: ${theme.primaryAlt};
        }

        p {
          padding: 10px 10px 15px;
          margin-bottom: 0;
        }

        span {
          padding-right: 5px;
        }
      `}</style>
    </footer>
  )
}
