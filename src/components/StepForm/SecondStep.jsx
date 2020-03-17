import React from 'react';
import { Input, InputLabel, FormControl } from '@material-ui/core';

const SecondStep = () => {
  return (
    <div>
      <h1>Add your details</h1>
      <FormControl>
        <InputLabel htmlFor="first-name">Email address</InputLabel>
        <Input id="first-name" aria-describedby="my-helper-text" />
      </FormControl>
    </div>
  );
};

export default SecondStep;
