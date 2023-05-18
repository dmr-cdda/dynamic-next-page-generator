import React from 'react'

export type FoobarProps = {
    children : any
}

const FooBar = ({children} : FoobarProps) => {
  return (
    <div className='h-screen flex justify-center items-center'>      
        <div className='w-[60%] h-44 px-16 border-2 border-black p-8 flex items-center justify-center bg-teal-600 text-white'>{children}</div>
    </div>
  )
}

export default FooBar