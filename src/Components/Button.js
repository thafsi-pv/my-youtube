import React from 'react'

function Button({ name, onClick }) {
  return (
    <div className='cursor-pointer' onClick={onClick}>
      <p class=" whitespace-nowrap px-3 py-2 mx-2 text-black dark:text-gray-100 bg-gray-600 hover:bg-gray-700 rounded-lg text-sm font-medium">{name}</p>
    </div>
  )
}

export default Button   