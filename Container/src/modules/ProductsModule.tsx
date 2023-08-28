import React from 'react'
import {useEffect, useRef} from 'react'
import {mount} from 'products/ProductsComponent'

const ProductsModule = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mount(ref.current)
  }, [])
  return <div ref={ref}/>
}
export default ProductsModule