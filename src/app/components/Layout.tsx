import React from 'react'
import { FoobarProps } from './FooBar'

const Layout = ({ children } : FoobarProps) => {
  
  return (
    <div className="flex flex-col min-h-screen">
          {children}
    </div>
  )
}

export default Layout