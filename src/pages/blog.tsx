import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostPrev } from '../components/blog/postPreview';
import { Posts } from '../apiData/articles';
import { RootState } from '../store/reducer';
import { fetchPostsData } from '../store/action';
import { ReadMore } from '../components/blog/readmore';

const Blog = () => {
  const postData = useSelector((state: RootState) => state.articleReducer);
  const dispatch = useDispatch();
  const logoutData = useSelector((state: RootState) => state.reducer2);

  useEffect(() => {
    if (postData.length === 0) {
      dispatch(fetchPostsData());
    }
  }, []);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-xs-12 center-xs">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="row">
        {postData.map((item) =>
          <div key={item.id} className="col-md-4 col-sm-6 col-12 ">
            <div className='preview-wrapper'>
              <PostPrev
                prevTilte={item.title}
                prevParagraph={item.body}
              /> 
              {logoutData.length === 1 &&
              <ReadMore 
                prevLink='Read more'
                id={item.id}
              />}
            </div>
          </div>
        )}
      </div>
    </div>

  );

};

export default Blog; 