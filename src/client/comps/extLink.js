import React from 'react'

export default function extLink({ children, ...props }) {
  return (
    <a rel="noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  )
}
