import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { IDatePickerInput } from './interface';
import moment from 'moment';

const DatePickerInput = (props: IDatePickerInput) => {
  const { onChange } = props
  const [value, setValue] = useState(null);
  const onChangeHandler = (date: any) => {
    setValue(date)
    const day = date.$D
    const month = date.$M + 1
    const year = date.$y
    const _date = `${year}-${month}-${day}`
    const isOld = moment(_date, 'YYYY-M-D').isBefore(moment())

    if (!isOld) {
      console.log(_date)
      onChange(_date)
    }
  }
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
