export type Comment = {
  content: string;
  author: {
    name: string;
    _id: string;
  };
  blogId: string;
  _id: string;

  createdAt: string;
  updatedAt: string;
};
