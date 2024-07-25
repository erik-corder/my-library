import PropTypes from "prop-types";

const Button = ({ label, onClick, style }) => (
  <button onClick={onClick} style={style}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

Button.defaultProps = {
  onClick: () => {},
  style: {},
};

export default Button;
