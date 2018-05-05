import React from 'react';
import { Form } from 'react-advanced-form';
import { Input, Select, Radio } from '../src';
import InputPassword from '../src/InputPassword';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <Input
          name="fieldOne"
          label="Field one"
          required />
        <Input
          name="fieldTwo"
          label="Field two"
          initialValue="Initial value"
          required />

        <InputPassword
          name="password"
          label="Password"
          type="password"
          required />

        <Select name="select" label="Gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <Radio
          name="newRadio"
          label="Book"
          value="book" />
        <Radio
          name="newRadio"
          label="Cheese"
          value="cheese"
          checked />

        {/* <Field.Group name="foo">
          <Input
            name="firstName"
            label="First name"
            required={({ fields }) => {
              return !!fields.foo.lastName.value;
            }} />
          <Input
            name="lastName"
            label="Last name"
            required={({ fields }) => {
              return !!fields.foo.firstName.value;
            }} />
          </Field.Group> */}
      </Form>
    );
  }
}
