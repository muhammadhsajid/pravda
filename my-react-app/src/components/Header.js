import PropTypes from 'prop-types'
import { Navigation } from '.'
// import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <Navigation />
        </header>
    )
}

Header.defaultProps = {
    title: 'Pravda',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JavaScript
const headingStyle = {
    color: '#FFD900',
    backgroundColor: '#CD0000'
}

export default Header
