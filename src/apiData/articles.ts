export const posts: Posts[] = [];
export interface Posts {
  userId: number
  id: number
  title: string
  body: string
}

export const commnetData: CommentData[] = [];
export interface CommentData {
  postId: number
  id: number,
  name: string
  email: string
  body: string
}



