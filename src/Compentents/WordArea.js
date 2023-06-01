import React from 'react'
import { useSelector } from 'react-redux'


function WordArea() {
    const {selectLanguage, wordIndex, wordColor, bgStatus} = useSelector((state)=>state.typingSpeed)


  return (
    <div className='w-[350px] md:w-[600px] lg:w-[900px] rounded-md mx-auto flex  items-center justify-center bg-gray-50'>
        <p className=' flex w-full h-full  flex-wrap items-center justify-center  px-4 py-4'>
           
               
                    {selectLanguage.map((text, index)=>(
                        <span key={index} className='flex items-center justify-start'>
                            <span className={`${index === wordIndex ? bgStatus === false 
                            ? wordColor :"bg-red-400"  : text.color } 
                             rounded-xl p-2 text-lg font-semibold  ${text.color}
                          `}>
                                {text.words}
                            </span>
                        </span>
                    ))}
             
       
        </p>
      
    </div>
  )
}

export default WordArea
