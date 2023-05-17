import React from 'react'

export type BarProps = { description?: string | undefined}


const Bar = ({description} : BarProps) => {
  return (
    <div>{description}</div>
  )
}

export default Bar