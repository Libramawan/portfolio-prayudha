type BlogPosts = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
};

type TitleText = {
  text: string;
  spanText?: string;
  altColor?: boolean;
};

type ButtonExternal = {
  text: string;
  url: string;
  altColor?: boolean;
};

type imageURL = {
  image_url: string;
  alt_text: string;
};
