import { useEffect, useState } from 'react'
import { formatTime } from '../utils';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const QuizEnd = ({ results, data, onReset, onAnswersCheck, time  }) => {
    const [correctAnswers, setCorrectAnswers] = useState(0)

    useEffect(() => {
        let correct = 0;
        results.forEach((result, index) => {
          if(result.a === data[index].answer) {
            correct++;
          }
        });
        setCorrectAnswers(correct);
        // eslint-disable-next-line
      }, [])
    

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h3>Your Scores</h3>
                    <p>{correctAnswers} of {data.length}</p>
                    <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
                    <p><strong>Your time:</strong> {formatTime(time)}</p>
                    <Button className="btnAnswer" onClick={onAnswersCheck}>Check your Answers</Button>
                    <Button className="btnSuccess" onClick={onReset}>Try again</Button>
                </div>
            </div>
        </div>
    )
}

export default QuizEnd

