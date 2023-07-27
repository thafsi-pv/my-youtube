import React from 'react'

function Button({name}) {
  return (
    <div className=''>
        <a href="#" class=" whitespace-nowrap px-3 py-2 mx-2 text-black bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium">{name}</a>
    </div>
  )
}

export default Button   