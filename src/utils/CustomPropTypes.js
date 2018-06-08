import PropTypes from 'prop-types';

export const fieldPropsTypes = PropTypes.shape({
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  ref: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
});

export const fieldStateTypes = PropTypes.shape({
  controlled: PropTypes.bool,
  debounceValidate: PropTypes.func,
  errors: PropTypes.array,
  expected: PropTypes.bool,
  fieldPath: PropTypes.array,
  focused: PropTypes.bool,
  initialValue: PropTypes.string,
  invalid: PropTypes.bool,
  name: PropTypes.string,
  ref: PropTypes.object,
  required: PropTypes.bool,
  skip: PropTypes.bool,
  type: PropTypes.string,
  valid: PropTypes.bool,
  validAsync: PropTypes.bool,
  validSync: PropTypes.bool,
  validated: PropTypes.bool,
  validatedAsync: PropTypes.bool,
  validatedSync: PropTypes.bool,
  validating: PropTypes.bool,
  value: PropTypes.string,
  valuePropName: PropTypes.string
});
