export interface Author {
  name: string;
  avatar: string;
}

export interface Article {
  title: string;
  content: string;
  banner: string;
  datePosted: string;
  author: Author;
  readTime: string;
}
