import { useState, useEffect, useRef }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, ListGroup, Button, CardDeck } from 'react-bootstrap'

const Questions = ({ data, onAnswerUpdate, numberOfQuestions, currentQuestion, onSetCurrentQuestion, onSetStep }) => {
    const [selected, setSelected] = useState('')
    const [wrong, setWrong] = useState('')
    const radioBtnWrapper = useRef()

    useEffect(() => {
        const checkedInput = radioBtnWrapper.current.querySelector('input:checked');
        if(checkedInput) {
        checkedInput.checked = false;
        }
    }, [data]);

    const changeHandler = (e) => {
    setSelected(e.target.value);
    if(wrong) {
        setWrong('');
    }
  }
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setWrong('Please select one option!');
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(currentQuestion < numberOfQuestions - 1) {
      onSetCurrentQuestion(currentQuestion + 1);
    }else {
      onSetStep(3);
    }
  }
    return (
        <CardDeck>
            <Card style={{ width: '18rem' }}>
                <Card.Header>{data.question}</Card.Header>
                <ListGroup variant="flush" ref={radioBtnWrapper}>
                    {data.options.map((option, i) => (
                        <ListGroup.Item   key={i}>
                            <input type="radio" name="answer" value={option} onChange={changeHandler} />
                            {option}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <Button onClick={nextClickHandler}>Next</Button>
            </Card>
            
        </CardDeck>
    )
}

export default Questions
