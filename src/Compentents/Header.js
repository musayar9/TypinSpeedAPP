import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const {language} = useSelector((state) => state.typingSpeed)

  return (
    <div className='p-4 max-w-screen-xxl  bg-[#2D4B73] shadow-md'>
        
            <div className='flex text-center flex-wrap items-center justify-center  text-2xl'>
                <p className='flex   items-center mb-2 text-white font-bold'>
                    {language === "turkish" ? "Hızlı Yazma Uygulaması": "Typing Speed App"}
                </p>
            
        </div>
      
    </div>
  )
}

export default Header
