import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import './style.css';

class DatePickerSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
  }

  render() {
    const { startDate, endDate, focusedInput } = this.state;
    return (
      <DateRangePicker
        startDate={startDate}
        startDateId="startDate"
        endDate={endDate}
        endDateId="endDate"
        onDatesChange={({ startDate, endDate }) =>
          this.setState({ startDate, endDate })
        }
        focusedInput={focusedInput}
        onFocusChange={focusedInput => this.setState({ focusedInput })}
      />
    );
  }
}

export default DatePickerSelect;
