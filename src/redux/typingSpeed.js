import { createSlice } from '@reduxjs/toolkit'
import { words } from '../Data/word';


export const formattedTime = (time) => {
    const valueSeconds = 60
    const minuteTime = Math.floor(time / valueSeconds).toString().padStart(2, "0");
    const secondsTime = (time % valueSeconds).toString().padStart(2, "0")

    const timeValue = `${minuteTime} : ${secondsTime}`
    return timeValue
}

export const randomWords  = (language)=>{
    const languageValues =['turkish', 'english']
    if(!languageValues.includes(language)){
        return [];
    }

    const word = words.sort(()=>Math.random() - 0.5).slice(0,30).map((words)=>({
        words:words[language],
        color:"text-[#111]"
    }))
    return word;
}



const typingSpeed = createSlice({
    name: "typingSpeed",
    initialState: {
        language:"turkish",
        selectLanguage: randomWords("turkish"),
        wordIndex : 0,
        wordColor: "bg-[#99b4bf] text-gray-50",
        totalCorrectWord:0,
        totalWrongWord:0,
        correctKeyPress:0,
        wrongKeyPress:0,
        allKeyPress:0,
        isFinish : false,
        time:60,
        isModal:false,
        bgStatus: false,
        inputText :""
        




    },
    reducers: {
        changeLanguage :(state, action)=>{
            state.language = action.payload;
            state.selectLanguage= randomWords(action.payload)
            state.wordIndex = 0;
            state.wordColor="bg-[#99b4f4] text-gray-50"
            
        },

        lookTypeWord:(state, action) =>{
            const {wordIndex , selectLanguage}  = state;
            const index = wordIndex;
            const typeText = action.payload.trim();
            const currentText = selectLanguage[index]

            state.allKeyPress += 1

            if(!state.isFinish) state.isFinish = true;

            if(currentText.words.startsWith(typeText)){
                state.correctKeyPress +=1
                state.wordColor="bg-green-500 text-gray-50"
                 state.bgStatus=false
            
            }else{
                state.wrongKeyPress += 1
                state.wordColor = "bg-red-400 text-gray-50"
                state.bgStatus=true
            }

        },

        updateWord:(state, action) =>{
            state.allKeyPress += 1;
            const currentValue =  state.selectLanguage[state.wordIndex].words
            const typeTextValue = action.payload;
        

            if(currentValue === typeTextValue){
                 state.selectLanguage[state.wordIndex].color="text-green-700 "
                state.correctKeyPress +=1;
                state.totalCorrectWord +=1
               
                
                
            }else{
                 state.selectLanguage[state.wordIndex].color="text-red-700"
                state.totalWrongWord += 1;
                state.wrongKeyPress += 1;
           
                
            }
            state.wordColor="bg-[#99b4f4] text-gray-50"
            

            if(state.wordIndex === state.selectLanguage.length -  1){
                state.selectLanguage = randomWords(state.language)
                state.wordIndex = 0;

            }else{
                state.wordIndex += 1
            }

            
        },
        repeatGame :(state)=>{
            state.selectLanguage= randomWords(state.language);
            state.wordIndex = 0 ;
            
            state.wordColor= "bg-[#99b4bf] text-gray-50";


            if(state.isFinish){
                state.totalCorrectWord=0
                state.totalWrongWord=0
                state.correctKeyPress=0
                state.wrongKeyPress=0
                state.allKeyPress=0
                state.isFinish = false
                state.time=60
                state.isModal = false
                state.bgStatus=false
             
        
            }

        },

        timeStatus:(state)=>{
            if(state.time > 0){
                state.time -= 1;
            }else if(state.time === 0){
                state.isModal = true
              

            }

        }
    }
})


export const {timeStatus, repeatGame, updateWord, lookTypeWord, changeLanguage} = typingSpeed.actions
export default typingSpeed.reducer