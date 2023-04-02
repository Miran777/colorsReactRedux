import React, { useEffect, useState } from 'react'
import { Color } from './Color'
import { useSelector, useDispatch } from 'react-redux'
import { createColors } from '../store/colorSlice'




export const Colors = () => {
  const dispatch = useDispatch()
  const colors = useSelector(state => state.color.colors)





  const handleClick = (event) => {
    event.preventDefault()
    if (event.code === 'Space') dispatch(createColors(true))
  }

  useEffect(() => {
    window.addEventListener('keydown', handleClick)


    return () => window.removeEventListener('keydown', handleClick)
  }, [])

  return (
    <div className='flex justify-around text-center items-center h-[100vh]' >
        {
            colors.map(
                color => <Color key={color.id} randomColor={color}/>
            )
        }
    </div>
  )
}
