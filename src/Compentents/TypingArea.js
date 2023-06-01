import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formattedTime, lookTypeWord, repeatGame, timeStatus, updateWord } from '../redux/typingSpeed'
import {BsArrowRepeat} from 'react-icons/bs'
function TypingArea() {
    const {time, isFinish, language} = useSelector((state)=>state.typingSpeed)
    const [typeText, setTypeText] = useState("")
    const dispatch = useDispatch()


    const handleChange = (e)=>{
        if(e.target.value.endsWith(' ')){
            dispatch(updateWord(e.target.value.slice(0, -1)))
        setTypeText("")
        }else{
            dispatch(lookTypeWord(e.target.value))
            setTypeText(e.target.value)
        }
    }

    const handleClick = ()=>{
        setTypeText("")
        dispatch(repeatGame())
    }

    useEffect(()=>{
        if(isFinish){
            const interval = window.setInterval(()=>{
                dispatch(timeStatus())
            }, 1000)
            return()=>{
                clearInterval(interval)
            }
        }

    
        
    }, [isFinish, dispatch, time])

  return (
    <div className='flex items-center justify-center m-2  w-[350px] md:w-[600px] lg:w-[900px] rounded-md mx-auto   backdrop-opacity-10 backdrop-invert bg-white/40'>
      <div className='w-full p-2  md:flex items-center justify-center opacity-70 space-x-1 md:space-x-2' >
        <input type='text' value={typeText} placeholder={language === "turkish" ?"Hızlı Yazma" : "Typing Speed"} className='p-2 m-2 md:p-3 md:m-3 rounded-md shadow-lg text-black w-48 md:w-96 outline-none border-2  focus:border-blue-500' 
        onChange={handleChange} disabled={time === 0}
        /> 
        <span className='p-1 md:p-2 text-lg md:text-2xl  bg-blue-700 text-gray-50  rounded-md'>{formattedTime(time)}</span>
         <button className='p-2 m md:p-3 text-md md:text-2xl  bg-blue-700 text-gray-50  rounded-md' onClick={handleClick}>
        <BsArrowRepeat/>
      </button>
      </div>

     
    </div>
  )
}

export default TypingArea
