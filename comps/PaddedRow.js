const PaddedRow = ({ children, amount, vCenter }) => {
  amount = amount || 20; 
  const PadItem = () => (
    <div className={'column column-' + amount + ' nomob'} />
  ); 
  let rowProps = {className: 'row'}; 
  if(vCenter) rowProps = {className: 'row v-center'};
  else rowProps = {...rowProps, style: {paddingTop: amount}}; 

  return (
    <div {...rowProps}>
      <PadItem />
      <div className='column'>{ children }</div>
      <PadItem />
    </div>
  ); 
};
export default PaddedRow; 