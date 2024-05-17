export interface Project {
  title: string;
  brief: string;
  imageUrl?: string;
  details: {
    icon: string;
    url: string;
  }[];
  date?: string;
}
