import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../redux/typingSpeed'

function Language() {
    const dispatch = useDispatch()
    const {language} = useSelector((state)=>state.typingSpeed)

    const handleChange = (e)=>{
        e.preventDefault();
        dispatch(changeLanguage(e.target.value))
    }
  return (
    <div className='w-24 flex items-center justify-center' >
        <div className='flex items-center justify-start p-8 '>
            <select className='bg-[#253C59] p-2 text-white outline-none focus:outline-none rounded-lg  ' value={language} onChange={handleChange}>
                <option value="turkish">Turkish</option>
                <option value="english" >English</option>
            </select>

        </div>
      
    </div>
  )
}

export default Language
