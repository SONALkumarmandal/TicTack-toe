import React from 'react'
import Board from './Components/Board'
function App() {

  return (
    <div className='bg-zinc-700 w-full h-screen overflow-hidden'>
     <div className='w-full h-full flex-col items-center justify-center sm:'>
     <h1 className='text-white h-1/4 text-6xl bg-zinc-800 text-center content-center '>Tic-tack-toe</h1>
      <Board />
     </div>
    </div>
  )
}

export default App