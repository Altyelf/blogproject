import axios from 'axios';

export const posts: Posts[] = [
  { id: 1, title: 'Title 1', body: 'Some paragraph text 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
  { id: 2, title: 'Title 2', body: 'Some paragraph text 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
  { id: 3, title: 'Title 3', body: 'Some paragraph text 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
];
export interface Posts {
  id: number
  title: string
  body: string
}


// @ts-ignore
export async function fetchPosts() {
  axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => {
      // const newPosts: Posts[] = response.data.map((item: Posts) =>
      //   [item.id, item.title, item.body]);
      // console.log('data', newPosts);

      const newPosts = response.data.map((item: Posts) =>
        [...posts, {
          id: item.id,
          title: item.title,
          body: item.body
        }]
      );
      console.log('dataAll ', newPosts);
      // dispatch(addPost(newPosts));

    });

  // dispatch({ type: 'ADD_POST', articleText: response.data[5].id });
}

