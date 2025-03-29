export type BlogPost = {
  _id: string;
  title: string;
  content: string;
  author: {
    _id: string;
    name: string;
    username: string;
  };
  image: string;
  tags: string[];
  likes: number;
  createdAt: string;
  updatedAt: string;
};
