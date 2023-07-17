import { useSelector } from "react-redux";
import Header from "./Compentents/Header";
import Language from "./Compentents/Language";
import ResultsTyping from "./Compentents/ResultsTyping";
import TypingArea from "./Compentents/TypingArea";
import WordArea from "./Compentents/WordArea";
import { Helmet } from "react-helmet"

function App() {
  const { isModal } = useSelector((state) => state.typingSpeed)


  return (

    <>
      <Helmet>

        <title>Typing Speed App</title>
        <meta name="description" content="typing speed description" />
        <link rel="shortcut icon" href="/typing-app/public/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/typing-app/public/favicon.ico" type="image/x-icon"></link>
      </Helmet>

      <div >
        <Header />
        <div className=" container flex  flex-col items-center justify-center ">
          <Language />
          <WordArea />
          <TypingArea />
          {
            isModal && <ResultsTyping />
          }

        </div>

      </div>
    </>

  );
}

export default App;
