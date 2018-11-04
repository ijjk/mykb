export default sort => {
  let key, ascDesc
  switch (typeof sort) {
    case 'object': {
      key = Object.keys(sort).pop()
      ascDesc = sort[key]
      break
    }
    case 'string': {
      const parts = sort.split(':')
      key = parts[0]
      ascDesc = parts[1]
      break
    }
    default:
      break
  }
  return `$sort[${key}]=${ascDesc}`
}
