import React from 'react';
import './style.css';

type Props = {
  badyText: string
  inputChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const EditTextInput = ({ badyText, inputChangeHandler }: Props) => {
  return (
    <>
      <textarea
        className='textarea--edit'
        value={badyText}
        onChange={(e) => inputChangeHandler(e)}     
      />
    </>
  );
};