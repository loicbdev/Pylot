import PropTypes from 'prop-types';

const commonComponentPropTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  font: PropTypes.string,
  size: PropTypes.string,
  sizebadge: PropTypes.string,
  sizeavatar: PropTypes.string,
  selected: PropTypes.bool,
  user: PropTypes.object,
};

export default commonComponentPropTypes;
