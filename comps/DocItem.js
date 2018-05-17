import Link from 'next/link';
import getUrl from '../util/getUrl'; 

const DocItem = ({ id, name, dir, updated }) => {
  name = dir + (dir.length > 0 ? '/' : '') + name; 
  const as = getUrl('k/' + id); 
  const href = { pathname: '/k', query: { id } };   
  return (<tr>
    <td><Link {...{href, as}}>
      <a><p className='noMargin'>
        { name }
        <span className='float-right'>
          {new Date(updated).toLocaleDateString('en-US')}
        </span>
      </p></a>
    </Link></td>
  </tr>);
}; 

export default DocItem; 