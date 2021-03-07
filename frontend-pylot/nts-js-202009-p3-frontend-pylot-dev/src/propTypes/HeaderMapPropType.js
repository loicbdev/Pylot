import PropTypes from 'prop-types';

const HeaderMapPropType = {
  position: PropTypes.arrayOf(PropTypes.number, PropTypes.number),
  startAddressed: PropTypes.arrayOf(PropTypes.object),
  setStartAdressed: PropTypes.func,
  startLocation: PropTypes.string,
  setStartLocation: PropTypes.func,
  endAddressed: PropTypes.string,
  setEndAdressed: PropTypes.func,
  endLocation: PropTypes.string,
  setEndLocation: PropTypes.func,
  favoriteAddresses: PropTypes.arrayOf(PropTypes.object),
};

export default HeaderMapPropType;
