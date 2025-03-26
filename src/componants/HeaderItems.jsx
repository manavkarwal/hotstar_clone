import React from 'react'

const HeaderItems = ({name,Icon}) => {
  return (
    <div className='text-white flex items-center gap-2 lg:text-[15px] font-semibold cursor-pointer hover:underline'>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItems  ;