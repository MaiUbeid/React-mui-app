import React, { Component } from 'react';
import DateRangePicker from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css';

import './style.css';

class DatePickers extends Component {
  state = {
    dates: null
  };

  onSelect = dates => this.setState({ dates });

  render() {
    const { dates } = this.state;
    return (
      <div>
        <DateRangePicker
          onSelect={this.onSelect}
          value={dates}
          numberOfCalendars={2}
        />
      </div>
    );
  }
}
export default DatePickers;
