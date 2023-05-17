import React from 'react';

export type FooProps = {
    description?: string | undefined; children: any;
}

const Foo = ({description = "Foo", children} : FooProps) => {
  return (
      <div>
          <p className='w-full bg-red-500'>{description}</p>
          {children}
    </div>
  )
}

export default Foo