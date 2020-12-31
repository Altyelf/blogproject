import React from 'react';
import './style.css';

type Props = {
  bodyText: string | undefined
  inputChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const EditTextInput = ({ bodyText, inputChangeHandler }: Props) => {
  return (
    <>
      <textarea
        className='textarea--edit'
        value={bodyText}
        onChange={(e) => inputChangeHandler(e)}     
      />
    </>
  );
};