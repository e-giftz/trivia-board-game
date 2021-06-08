import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = ({ title, text, onQuizStart }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button className='btn' onClick={onQuizStart}>{text}</Button>
        </header>
    )
}

// Add Default prop
Header.defaultProps = {
    title: 'Welcome To Trivia Board Games!',
    text: 'Start',
}

// Using Prop types
Header.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Header
