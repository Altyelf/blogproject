import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Posts } from '../apiData/articles';
import { editPost } from '../store/action';
import { EditTextInput } from '../components/blog/editTextInput';


const Post = () => {
  const onePost = useSelector((state: Posts[]) => state);
  const dispatch = useDispatch();
  const { ids } = useParams<{ ids: string }>();
  const [inputComent, setInputComent] = useState(onePost[parseInt(ids, 10) - 1].body);
  const [edit, setEdit] = useState(false);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputComent(e.target.value);
  };

  const editHandler = () => {
    setEdit(!edit);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 center-xs">
            <h1>Post</h1>
          </div>
          <div className="col-xs-8 ">
            <h2>{onePost[parseInt(ids, 10) - 1].title}</h2>
            <p>{onePost[parseInt(ids, 10) - 1].body}</p>
            <button
              type='button'
              onClick={() => editHandler()}
            >Edit
            </button>
            {edit &&
              <>
                <EditTextInput
                  badyText={inputComent}
                  inputChangeHandler={(e) => inputChangeHandler(e)}
                />
                <button
                  type='button'
                  onClick={() => dispatch(editPost(inputComent, parseInt(ids, 10)))}
                >Save 
                </button>
              </>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post; 