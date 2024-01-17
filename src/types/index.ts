export interface Project {
  title: string;
  brief: string;
  details: {
    imageUrl?: string;
    githubUrl?: string;
    otherUrl?: string;
  };
  date?: string;
}
