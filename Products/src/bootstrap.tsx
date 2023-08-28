import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const mount = (el:Element) => {
  ReactDOM.render(<App/>, el)
}
// run in isolation, if env is development
if (process.env.NODE_ENV === 'development') {
  const rootNode = document.querySelector('#products-root')
  if (rootNode) {
    mount(rootNode)
  }
}

export {mount}