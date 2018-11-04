import { css } from 'glamor'
import theme from '../styles/theme'

const style = {
  textAlign: 'center',
  padding: '10px 10px 15px',
  background: theme.primaryAlt,

  '& p': {
    marginBottom: 0,
  },
}

const Footer = () => (
  <footer className={css(style)}>
    <p>
      Powered by{' '}
      <a
        href="//github.com/ijjk/mykb"
        target="_blank"
        rel="noopener noreferrer"
      >
        MYKB
      </a>
    </p>
  </footer>
)

export default Footer
