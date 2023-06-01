import { useSelector } from "react-redux";
import Header from "./Compentents/Header";
import Language from "./Compentents/Language";
import ResultsTyping from "./Compentents/ResultsTyping";
import TypingArea from "./Compentents/TypingArea";
import WordArea from "./Compentents/WordArea";


function App() {
  const { isModal} = useSelector((state)=>state.typingSpeed)


  return (
    <div >
      <Header/>
      <div className=" container flex  flex-col items-center justify-center "> 
      <Language/>
      <WordArea/>
      <TypingArea/>
      {
        isModal &&   <ResultsTyping/>
      }
   
      </div>
   
    </div>
  );
}

export default App;
