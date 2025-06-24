import * as React from 'react';
import buttonStyle from '../../GlobalStyles';

export interface ICreateTaskButtonProps {
    name: string;
}

export default function SaveTaskButton (props: ICreateTaskButtonProps) {
  return (
    <button className={`${buttonStyle} bg-blue-600 hover:bg-blue-700`} type="button">{props.name}</button>
  );
}
