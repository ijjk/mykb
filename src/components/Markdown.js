import dynamic from 'next/dynamic'
import freezeSSR from '../util/freezeSSR'

const Markdown = dynamic(import('react-markdown'), freezeSSR('.Markdown'))
const link = props => <a {...props} target="_blank" rel="noopener noreferrer" />
const renderers = { link }
const AddRenderers = ({ className, source }) => (
  <Markdown {...{ className, source, renderers }} />
)

export default AddRenderers
