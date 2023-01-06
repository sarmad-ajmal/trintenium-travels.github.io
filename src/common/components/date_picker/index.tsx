import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

import useDatePicker from './index.hook';

import { IDatePickerInput } from './interface';

const DatePickerInput = (props: IDatePickerInput) => {
  const { value, onChangeHandler } = useDatePicker(props)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Departure date"
        value={value}
        onChange={onChangeHandler}
        renderInput={(params) => <TextField {...params} />}
        disablePast
      />
    </LocalizationProvider>
  )
}
export default DatePickerInput
