import { useState } from "react";
import moment from "moment";

import { IDatePickerInput } from "./interface";

const useDatePicker = (props: IDatePickerInput) => {
  const { onChange } = props;
  const [value, setValue] = useState(null);
  const onChangeHandler = (date: any) => {
    setValue(date);
    const day = date.$D;
    const month = date.$M + 1;
    const year = date.$y;
    const _date = `${year}-${month}-${day}`;
    const isOld = moment(_date, "YYYY-M-D").isBefore(moment());

    if (!isOld) {
      console.log(_date);
      onChange(_date);
    }
  };
  return {value,onChangeHandler};
};
export default useDatePicker;
