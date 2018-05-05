import React from 'react';
import { createField, fieldPresets } from 'react-advanced-form';
import Label from './Label';
import { Icon, colors } from './const';
import { InputContainer, InputWrapper, StyledInput, ValidationStatus, Message } from './StyledComponents';

class Input extends React.Component {
  render() {
    const { innerRef, name, label, disabled, fieldProps, fieldState } = this.props;
    const { validating, validatedAsync, valid, invalid, errors } = fieldState;
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
            fieldState={ fieldState }
            disabled={ validating || disabled }
            autoComplete="off" />

          <ValidationStatus
            display='flex'
            valid={ valid }
            invalid={ invalid }>
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

export default createField(fieldPresets.input)(Input);
