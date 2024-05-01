import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece] | undefined;

interface DatePickerProp{
  value : Value,
  onChange : (value: Value) => void,
  name :string
}

export const RangeDatePicker :React.FC <any> = ({value , onChange ,name , maxDate ,minDate}) => {
  console.log(maxDate)
  return (
      <DatePicker onChange={onChange} value={value} maxDate={new Date(maxDate)} minDate={new Date(minDate)} className='inputfield-input w-full' name={name}/>
  );
}