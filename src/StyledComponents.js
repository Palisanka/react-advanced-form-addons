import styled from 'styled-components';
import { colors, font, animations } from './const';

export const InputContainer = styled.div`
margin: 1.5rem 0;
`;

export const InputWrapper = styled.div`
position: relative;
display: inline-flex;
flex-wrap: wrap;

&:after {
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 100%;
  content: '';
  height: 0;
  display: block;
  background-color: ${colors.grayLight};
}

${({ validating }) => validating && `
  &:after {
    height: 2px;
    animation: ${animations.loadStripe} 8s ease forwards;
    background-color: ${colors.primary};
  }
`}
`;

export const StyledInput = styled.input`
padding: .5rem .75rem;
padding-right: 48px;

border: 1px solid #e1e2e6;
border-radius: 2px;
color: ${colors.black};
${font.default};
transition-property: border box-shadow;
transition-duration: .2s;

&:focus {
  outline: none;
  border-color: ${colors.primary};
  box-shadow: 0 0 3px rgba(0, 175, 232, .35);
}

&:disabled {
  color: ${colors.gray};
}

${({ fieldState: { valid } }) => valid && `
  border-color: ${colors.success};
`}

${({ fieldState: { invalid } }) => invalid && `
  border-color: ${colors.danger};
`}
`;

export const ValidationStatus = styled.div`
display: ${({ display }) => display ? 'flex' : 'none'};
position: absolute;
right: 0;
top: 0;
bottom: 0;
align-items: center;
justify-content: center;
width: 35px;

&:before {
  position: absolute;
  content: '';
  height: 23px;
  width: 1px;
  background-color: ${({ valid, invalid }) => (
    (valid && 'rgba(0, 191, 97, .25)') ||
    (invalid && 'rgba(255, 0, 0, .25)')
  )};
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  transform-origin: center;
  animation: ${animations.slideDown} .2s ease;
}
`;

export const Message = styled.p`
margin: .25rem 0 0;
color: ${colors.danger};
${font.default};
font-size: .8rem;
transition: color .2s;

animation: ${animations.slideDown} .2s;
`;
