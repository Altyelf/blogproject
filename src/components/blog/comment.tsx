import React from 'react';
import './style.css';

type Props = {
  name: string
  email: string
  body: string
};

export const Comments = ({ name, email, body }: Props) => {

  return (
    <div className="comment--wrapper">
      <h4 className="comment--name">{name}</h4>
      <span>{email}</span>
      <p className="comment--parag">{body}</p>
    </div>
  );
};