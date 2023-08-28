import React from 'react'
import ProductsModule from './modules/ProductsModule'

import HeaderModule from './modules/HeaderModule'

const App = () => {

  return (
    <>
      <h1>Container App (Shell)</h1> {/*HOST */}
      <HeaderModule/> {/*MFE - 1 REMOTE */}
      <ProductsModule/> {/*MFE - 2 REMOVE */}
    </>
  )
}

export default App