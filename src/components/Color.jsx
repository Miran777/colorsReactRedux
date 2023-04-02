import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { swapLock } from '../store/colorSlice'
import chroma from 'chroma-js'


export const Color = ({randomColor}) => {
  const dispatch = useDispatch()
  const textColor = chroma(randomColor.color).luminance() > 0.5 ? 'blakc' : 'white'

  function copyToClickboard(text) {
    return navigator.clipboard.writeText(text)
}

    
    useEffect(() => {

    }, [])


  return (
    <div style={{background: `${randomColor.color}`, color: `${textColor}`}} className='flex flex-col h-full w-full justify-around items-center'>
        <h2 className='text-4xl p-3 cursor-pointer hover:bg-black w-fit 
        hover:bg-opacity-30 rounded-md transition duration-75' onClick={() => copyToClickboard(randomColor.color)}>{randomColor.color}</h2>
        <button onClick={() => dispatch(swapLock(randomColor.id))} className='text-4xl border-none outline-none p-4 cursor-pointer hover:bg-black hover:bg-opacity-30
         rounded-md transition duration-75'><i className={randomColor.locked ? 'fa-solid fa-lock' : 'fa-solid fa-lock-open'}></i></button>
    </div>
  )
}
