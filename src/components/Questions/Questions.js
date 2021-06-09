import { useState, useEffect, useRef } from 'react'
import './Questions.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, ListGroup, Button, CardDeck } from 'react-bootstrap'
//import Scores from '../Scores/Scores'

const Questions = ({ data, onAnswerUpdate, numberOfQuestions, currentQuestion, onSetCurrentQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('')
  const [error, setError] = useState(false)
  const radioBtnWrapper = useRef()
  const [correct, setCorrect] = useState('') // split into 2 states - one for score, one for state of correctness
  const [score, setScore] = useState(0)
  useEffect(() => {
    const checkedInput = radioBtnWrapper.current.querySelector('input:checked');
    if (checkedInput) {
      checkedInput.checked = false;
    }
  }, [data]);

  const handleSelect = (option) => {
    if (selected === option && selected === correct) return "select";
    else if (selected === option && selected === !correct) return "wrong";
    else if (option=== correct) return "select";
  };

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError(false);
    }
    else if (correct) {
      setCorrect('')
      setScore(score + 1)
    } 
  }

  const nextClickHandler = (e) => {
    if (selected === '') {
      return setError('Please select one option!');
    }
    //onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if (currentQuestion < numberOfQuestions - 1) {
      onSetCurrentQuestion(currentQuestion + 1);
    } else {
      onSetStep(3);
    }
  }

  return (
    <>
      <div className="quizInfo" >
        <span>Category: {data.category}</span>
        {/* <span>Score: {score}</span> */}
        <CardDeck>
          <Card style={{ width: '18rem' }} bg="info">
            <Card.Header>Question: {data.question}</Card.Header>
            <ListGroup variant="flush" as="ul" ref={radioBtnWrapper}>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              {data.options.map((option, i) => (
                <ListGroup.Item className={`singleOption ${selected && handleSelect(option)}`} 
                  key={i}>
                  <input type="radio" name="answer" value={option} onChange={changeHandler} disabled={selected} />
                  {option}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button bg="info" onClick={nextClickHandler}>Next</Button>
          </Card>

        </CardDeck>

      </div>

    </>
  )
}

export default Questions
