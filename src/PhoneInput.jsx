import React from 'react';
import PropTypes from 'prop-types';
import { createField } from 'react-advanced-form';
import Phone from 'react-phone-number-input';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';
import { InputContainer, InputWrapper, ValidationStatus, Message } from './StyledComponents';
import Label from './Label';
import Icon from './const/Icon';
import * as colors from './const/colors';
import { fieldPropsTypes, fieldStateTypes } from './utils/CustomPropTypes';

class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ''
    };
  }

  handleChange = (nextValue) => {
    /* Dispatch "react-advanced-form" method to update the field record */
    this.props.handleFieldChange({ nextValue });
    this.setState({ phone: nextValue });
  }

  render() {
    const {
      fieldProps, name, label, fieldState, placeholder, country
    } = this.props;
    const {
      validating, validatedAsync, valid, invalid, errors
    } = fieldState;
    return (
      <InputContainer>
        { label && (
          <Label
            htmlFor={name}
            valid={valid}
            invalid={invalid}
          >
            { label }
          </Label>
            ) }
        <InputWrapper validating={validating} validatedAsync={validatedAsync}>
          <Phone
            {...fieldProps}
            placeholder={placeholder}
            country={country}
            value={this.state.phone}
            onChange={phone => this.handleChange(phone)}
          />

          <ValidationStatus
            display="flex"
            valid={valid}
            invalid={invalid}
          >
            { valid && (
            <Icon
              animated
              name="check"
              height={14}
              width={14}
              stroke={colors.success}
            />
              ) }

            { invalid && (
            <Icon
              animated
              name="x"
              height={14}
              width={14}
              stroke={colors.danger}
            />
              ) }
          </ValidationStatus>

        </InputWrapper>

        { invalid && errors && errors.map(error => (
          <Message key={Date.now()}>{ error }</Message>
          )) }
      </InputContainer>
    );
  }
}

PhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  fieldState: fieldStateTypes.isRequired,
  fieldProps: fieldPropsTypes.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  country: PropTypes.string,
  placeholder: PropTypes.string
};

PhoneInput.defaultProps = {
  label: undefined,
  country: 'EN',
  placeholder: ''
};

export default createField({
  valuePropName: 'phone'
})(PhoneInput);
