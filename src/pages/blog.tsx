import React  from 'react';
import { useSelector } from 'react-redux';
import { PostPrev } from '../components/blog/postPreview';
import { RootState } from '../store/reducer';
import { ReadMore } from '../components/blog/readmore';

const Blog = () => {
  const postData = useSelector((state: RootState) => state.articleReducer);
  const logoutData = useSelector((state: RootState) => state.reducer3);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-xs-12 center-xs">
          <h1>Log in to view full posts</h1>
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
              {logoutData.username &&
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