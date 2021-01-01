/* eslint-disable max-len */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { editPost, addComment } from '../store/action';
import { EditTextInput } from '../components/blog/editTextInput';
import { Comments } from '../components/blog/comment';
import { CommentData } from '../apiData/articles';

const Post = () => {

  const dispatch = useDispatch();
  const { ids } = useParams<{ ids: string }>();
  const [edit, setEdit] = useState(false);
  const inputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputEdit(e.target.value);
  };
  const inputComentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputComent(e.target.value);
  };
  const editHandler = () => {
    setEdit(!edit);
  };
  const onePost = useSelector((state: RootState) => state.articleReducer.find((item) => item.id === parseInt(ids, 10)));
  const [inputEdit, setInputEdit] = useState(onePost?.body);
  const [inputComent, setInputComent] = useState('');
  const oneComment = useSelector((state: RootState) => state.commentReducer);
  const logoutData = useSelector((state: RootState) => state.reducer3);

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
            {logoutData?.admin &&
              <button
                className='button-edit'
                type='button'
                onClick={() => editHandler()}
              >
                Edit
              </button>}
            {edit && inputEdit &&
              <>
                <EditTextInput
                  bodyText={inputEdit}
                  inputChangeHandler={(e) => inputChangeHandler(e)}
                />
                <button
                  className='button-save'
                  type='button'
                  onClick={() => dispatch(editPost(inputEdit, parseInt(ids, 10)))}
                >Save
                </button>
              </>}
            <h2>Add comment</h2>
            <EditTextInput
              bodyText={inputComent}
              inputChangeHandler={(e) => inputComentHandler(e)}
            />
            <button
              className='button-comment'
              type='button'
              onClick={() => dispatch(addComment({ postId: 101, id: parseInt(ids, 10), name: 'Test', email: 'asd', body: inputComent }))}
            >Add comment
            </button>
            {oneComment.filter((item) => item.postId === parseInt(ids, 10)).map((item) =>
              <div key={item.id}>
                <Comments
                  name={item.name}
                  email={item.email}
                  body={item.body}
                />
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Post; 