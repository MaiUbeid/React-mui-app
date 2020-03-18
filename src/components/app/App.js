import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import NavBar from '../NavBar';
import CardList from '../CardList';
import Icons from '../Icons';
import Buttons from '../Buttons';
import Paginations from '../Paginations';
import Inputs from '../Inputs';
import StepForm from '../StepForm';
import DatePickerSelect from '../DatePickerSelect';
import DatePickers from '../DatePickers';
import Footer from '../Footer';

import './App.css';
import Themes from './Themes';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Themes}>
        <NavBar />
        <Container>
          <h1>Cards</h1>
          <CardList />
          <h1>Icons</h1>
          <Icons />
          <h1>Buttons</h1>
          <Buttons />
          <h1>Date Picker</h1>
          <DatePickers />
          <h1>Select date picker</h1>
          <DatePickerSelect />
          <h1>Pagination</h1>
          <Paginations />
          <h1>Inputs</h1>
          <Inputs />
          <h1>Stepper Form</h1>
          <StepForm />
          <h1>Footer</h1>
        </Container>
        <Footer type="secondary" />
      </ThemeProvider>
    </div>
  );
}

export default App;
