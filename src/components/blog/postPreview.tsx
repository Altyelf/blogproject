import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

type Props = {
  prevTilte: string
  prevParagraph: string
};

export const PostPrev = ({prevParagraph, prevTilte}: Props) => {
  return (
    <div className='prevWarapper'>
      <h2 className='prevTitle'>{prevTilte}</h2>
      <p className='prevParagraph'>{prevParagraph}</p>
    </div>
  );
};