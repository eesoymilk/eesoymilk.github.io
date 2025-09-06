export interface PersonalInfo {
  firstName: string;
  lastName: string;
  name: string;
  nickname: string;
  title: string;
  roles: string[];
  bio: string;
  location: string;
  email: string;
  phone?: string;
  profileImage: string;
  profileImageDark: string;
  resumeUrl: string;
  philosophy: {
    quote: string;
    author: string;
  };
}

export const personalInfo: PersonalInfo = {
  firstName: "Yu-Wei",
  lastName: "Chang",
  name: "Yu-Wei Chang",
  nickname: "eesoymilk",
  title: "Researcher & Developer",
  roles: [
    "Graduate Student at UCLA",
    "Software Engineer",
    "AI/ML Researcher",
    "Full-Stack Developer",
    "Human-Centered AI Engineer",
  ],
  bio: "I'm a passionate graduate student at UCLA pursuing research in human-centered AI systems. My work focuses on creating technology that enhances human capabilities, from robotic assistance for wheelchair users to intelligent business process optimization. I believe in the power of technology to solve real-world problems and make a positive impact on people's lives.",
  location: "Los Angeles, CA",
  email: "eesoymilk@gmail.com",
  phone: "+1 (310) 280-6463",
  profileImage: "/eesoymilk.webp",
  profileImageDark: "/eesoymilk-dark.webp",
  resumeUrl: "/documents/resume.pdf",
  philosophy: {
    quote:
      "I know I'm asking a lot, but the price of freedom is high, it always has been, and it's a price I'm willing to pay. And if I'm the only one, then so be it. But I'm willing to bet I'm not.",
    author: "Steve Rogers",
  },
};
