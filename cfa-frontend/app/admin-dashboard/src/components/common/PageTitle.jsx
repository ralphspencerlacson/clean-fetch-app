import React from 'react'

const PageTitle = ({ title, description, button }) => {
  return (
    <div className='flex justify-between items-center mb-6'>
      <div>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='text-gray-600 italic'>{description}</p>
      </div>

      {button && (
        <div className='flex items-center'>
          {button}
        </div>
      )}
    </div>
  )
}

export default PageTitle
