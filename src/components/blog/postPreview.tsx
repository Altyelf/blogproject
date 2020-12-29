import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

type Props = {
  prevTilte: string
  prevParagraph: string
  prevLink: string
  id: number
};

export const PostPrev = ({ prevLink, prevParagraph, prevTilte, id }: Props) => {

  return (
    <div className='prevWarapper'>
      <h2 className='prevTitle'>{prevTilte}</h2>
      <p className='prevParagraph'>{prevParagraph}</p>
      <Link className='readMore' to={`/posts/${id}`}>{prevLink}</Link>
      
    </div>
  );
};