const freezeSSR = selector => {
  const FrozenSSR = () => {
    let __html = ''; 
    let props = {}; 
    if(typeof document !== 'undefined') {
      let el = document.querySelector(selector); 
      if(el) {
        __html = el.innerHTML;
        el.getAttributeNames().forEach(attr => {
          const attrKey = attr === 'class' ? 'className' : attr;
          props[attrKey] = el.getAttribute(attr); 
        }); 
      } 
    }
    return <div {...props} dangerouslySetInnerHTML={{ __html }} />; 
  }; 

  return { loading: FrozenSSR }; 
}; 

export default freezeSSR; 