import React from 'react'
function Squares({onSquareClick,val}) {
  return (
    <div className='bg-blue-500 w-full flex justify-center items-center rounded-md'>
     <button onClick={onSquareClick} className='text-3xl font-bold h-full w-full'>
      {val}
     </button>
    </div>
  )
}

export default Squares