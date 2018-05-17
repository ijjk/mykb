import dynamic from 'next/dynamic'; 
import freezeSSR from '../util/freezeSSR'; 

const Markdown = dynamic(import('react-markdown'), freezeSSR('.Markdown'));  
const renderers = {
  link : props => (<a href={props.href} 
    target='_blank' rel='noopener noreferrer'>{props.children}</a>)
}; 
const AddRenderers = ({ className, source }) => (
  <Markdown {...{className, source, renderers}} />
); 

export default AddRenderers; 