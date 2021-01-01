import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

type Props = {
  prevLink: string
  id: number
};

export const ReadMore = ({ prevLink, id }: Props) => {
  return (
    <Link className='readMore' to={`/posts/${id}`}>{prevLink}</Link>
  );
};