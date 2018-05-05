
import React from 'react';
import { createField, fieldPresets } from 'react-advanced-form';
import Label from './Label';
import { Icon, colors } from './const';
import { InputContainer, InputWrapper, StyledInput, ValidationStatus, Message } from './StyledComponents';

class InputPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false
    };
  }

  render() {
    const { innerRef, name, label, disabled, fieldProps, fieldState } = this.props;
    const { validating, validatedAsync, valid, invalid, errors } = fieldState;
    const myRef = React.createRef();
    return (
      <InputContainer>
        { label && (
          <Label
            htmlFor={ name }
            valid={ valid }
            invalid={ invalid }>
            { label }
          </Label>
        ) }

        <InputWrapper validating={ validating } validatedAsync={ validatedAsync }>
          <StyledInput
            { ...fieldProps }
            innerRef={ innerRef }
            ref={myRef}
            id='passwordInput'
            fieldState={ fieldState }
            disabled={ validating || disabled }
            autoComplete="off" />

          <ValidationStatus
            display='flex'
            style={{ width: '50px' }}
            valid={ valid }
            invalid={ invalid }>
            <div
              style={{
                width: '23px',
                display: 'flex',
                height: '30px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => {
                const elm = document.getElementById('passwordInput');
                if (elm.type === 'password') {
                  elm.type = 'string';
                  this.setState({ isPasswordVisible: true });
                } else {
                  elm.type = 'password';
                  this.setState({ isPasswordVisible: false });
                }
              }}
            >
            <Icon
              animated
              name={ this.state.isPasswordVisible ? 'eye-off' : 'eye' }
              height={ 14 }
              width={ 14 }
              stroke={ colors.gray }
            />
            </div>
            { valid && (
              <Icon
                animated
                name="check"
                height={ 14 }
                width={ 14 }
                stroke={ colors.success } />
            ) }

            { invalid && (
              <Icon
                animated
                name="x"
                height={ 14 }
                width={ 14 }
                stroke={ colors.danger } />
            ) }
          </ValidationStatus>

        </InputWrapper>

        { invalid && errors && errors.map((error, i) => (
          <Message key={ i }>{ error }</Message>
        )) }
      </InputContainer>
    );
  }
}

export default createField(fieldPresets.input)(InputPassword);
