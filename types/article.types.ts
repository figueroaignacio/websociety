export type ArticleTypes = {
  _id?: number;
  title: string;
  description?: string;
  author: string;
  author_image: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  className?: string;
  alt: string;
  categories?: {
    _ref: any;
    title?: string;
  }[];
};
