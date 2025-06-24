import * as React from 'react';
import buttonStyle from '../../GlobalStyles';

export interface ICloseModalProps {
  closeCreateModal: any;
  name: string;
}

export default function CloseModal (props: ICloseModalProps) {
  return (
    <button onClick={props.closeCreateModal} type="button" className={`${buttonStyle} bg-red-500 hover:bg-red-600 `}>
      {props.name}
    </button>
  );
}
