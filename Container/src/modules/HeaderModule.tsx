import React from 'react'
import {useEffect, useRef} from 'react'
import {mount} from 'header/HeaderComponent'

const HeaderModule = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mount(ref.current)
  }, [])
  return <div ref={ref}/>
}
export default HeaderModule