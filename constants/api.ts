export const ARTICLES = {
  QUERY: '*[_type=="article"]',
  SLUG_QUERY:
    '*[_type == "article" && slug.current == $slug][0]{ ..., "mainImage": mainImage.asset->url, author->, categories[]-> }',
};

export const POSTS = {
  QUERY: '*[_type=="post"]',
};

export const CATEGORY = {
  QUERY: '*[_type=="category"]',
};
