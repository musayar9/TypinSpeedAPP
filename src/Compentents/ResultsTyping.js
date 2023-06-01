import React from 'react'
import { useSelector } from 'react-redux'
function ResultsTyping() {

    const { totalCorrectWord,
        totalWrongWord,
        correctKeyPress,
        wrongKeyPress, allKeyPress, language } = useSelector((state) => state.typingSpeed)


    const totalRate = Math.round(totalCorrectWord * 100)
    const correctAndWrongRate = Math.round(totalCorrectWord + totalWrongWord)
    const accuracyRate = (totalRate / correctAndWrongRate).toFixed(2)



    const totalPoint =  totalCorrectWord + totalWrongWord
    const wpm =( totalPoint / 1) * 60
    return (
        <div className=' w-[300px] md:w-[400px] shadow-md m-4 rounded-xl flex flex-col  bg-gray-50'>
            <div className=' flex items-center justify-center  bg-[#2D4B73] w-full p-3 rounded-t-xl shadow-xl' >

                <span className='text-center font-semibold text-lg text-gray-50'>
                    {language === "turkish" ? "Sonuç" : "Result"}
                </span>
            </div>
            <div className=' flex flex-col items-center justify-center  p-4 bg-gray-200   border-b border-gray-400' >
                <span className='text-center text-3xl text-yellow-400'>{wpm} {language=== "turkish"  ? "DKS" : "WPM"}</span>
                <span className='text-center italic text-sm  text-gray-900'>
                   ( {language === "turkish" ? "Puan aldınız" : "You got points"})
                </span>
            </div>


            <div className='flex items-center justify-between p-3   border-b border-gray-400'>
                <div>
                    <span className='text-md font-bold '>{language === "turkish" ? "Tuş Vuruşu" : "Key Stroke"}</span>
                </div>
                <div className='flex items-center justify-evenly '>
                    (<span className='text-green-700 text-md pr-1'>{correctKeyPress} </span> | <span className='text-red-700 text-md pl-1'>{wrongKeyPress}</span>)
                    <span className='text-lg text-gray-900 pl-2'>{allKeyPress}</span>
                </div>

            </div>
            <div className='flex items-center justify-between p-3  bg-gray-200   border-b border-gray-400'>

                <span className='text-md font-bold '>{language === "turkish" ? "Doğruluk" : "Truth"}</span>



                <span className='text-lg text-gray-900 pl-2'>{accuracyRate} %</span>


            </div>

            <div className='flex items-center justify-between p-3     border-b border-gray-400'>

                <span className='text-md font-bold '>{language === "turkish" ? "Doğru Kelime" : "Correct Word"}</span>



                <span className='text-lg text-gray-900 pl-2'>{totalCorrectWord}</span>


            </div>


            <div className='flex items-center justify-between p-3  bg-gray-200    rounded-b-xl'>

                <span className='text-md font-bold '>{language === "turkish" ? "Yanlış Kelime" : "Wrong Word"}</span>



                <span className='text-lg text-gray-900 pl-2'>{totalWrongWord}</span>


            </div>

        </div>
    )
}

export default ResultsTyping
