import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import QuizEnd from './components/QuizEnd'
import Questions from './components/Questions/Questions'
import quizData from './data/quiz.json'

let interval;

function App() {
  const [step, setStep] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStart = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

  }

  return (
    <div className="container">
      {step === 1 && <Header onQuizStart={quizStart} />}
      {step === 2 && <Questions 
        data={quizData.data[currentQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        currentQuestion={currentQuestion}
        onSetCurrentQuestion={setCurrentQuestion}
        onSetStep={setStep} 
        //score={score}
        //onSetScore={setScore}
      />}
      {step === 3 && <QuizEnd 
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        time={time}
      />}
    </div>
  );
}

export default App;
