export default function updateStateFromId(e) {
  const el = e.target
  this.setState({ [el.id]: el.value })
}
