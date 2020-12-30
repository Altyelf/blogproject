import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { posts, Posts } from '../apiData/articles';
import { RootState } from '../store/reducer';
import { editPost } from '../store/action';
import { EditTextInput } from '../components/blog/editTextInput';


const Post = () => {
 
  const dispatch = useDispatch();
  const { ids } = useParams<{ ids: string }>();
  
  const [edit, setEdit] = useState(false);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputComent(e.target.value); 
  };

  const editHandler = () => {
    setEdit(!edit);
  };

  const onePost = useSelector((state: RootState) => state.reducer1.find((item)=> item.id === parseInt(ids, 10))); 
  const [inputComent, setInputComent] = useState(onePost?.body); 

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 center-xs">
            <h1>Post</h1>
          </div>
          <div className="col-xs-8 ">

            <h2>{onePost?.title}</h2>
            <p>{onePost?.body}</p> 
            <button
              type='button'
              onClick={() => editHandler()}
            >Edit
            </button>
            {edit && inputComent &&
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