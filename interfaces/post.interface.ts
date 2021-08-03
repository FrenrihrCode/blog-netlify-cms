export interface Post {
  slug: string;
  title: string;
  header: string;
  date: string;
  content: string;
  tag: string[];
  thumbnail?: string;
}
