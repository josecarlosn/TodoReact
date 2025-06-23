import * as React from 'react';
import buttonStyle from '../GlobalStyles';

export interface ICloseModalProps {
}

export default function CloseModal (props: ICloseModalProps) {
  return (
    <button type="button" className={`${buttonStyle} bg-red-500 `}>
      Cancelar
    </button>
  );
}
