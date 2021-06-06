import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

// Add Default prop
Header.defaultProps = {
    title: 'Welcome To Trivia Board Games!',
}

// Using Prop types
Header.propType = {
    title: PropTypes.string,
}
export default Header
