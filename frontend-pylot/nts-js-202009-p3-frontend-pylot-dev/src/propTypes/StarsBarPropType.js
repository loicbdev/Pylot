import PropTypes from 'prop-types';

const StarsBarPropType = {
  name: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StarsBarPropType;
