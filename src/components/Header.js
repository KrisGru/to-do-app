import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title, onShowForm, showForm }) => {
  return(
    <header>
      <h1>{title}</h1>
      <Button color={showForm ? 'red' : 'green'} text={showForm ? 'Close' : 'Add'} onClick={onShowForm}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
