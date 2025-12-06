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
  title: "Multimodal AI & Systems Engineer",
  roles: [
    "Multimodal AI Researcher",
    "Systems Engineer",
    "Software Engineer",
    "AI Engineer",
    "Robotics Engineer",
    "Graduate Student at UCLA",
  ],
  bio: "Pioneering embodied AI and VLA research at UCLA to bridge the gap between foundation models and physical world deployment. Architecting scalable systems that enable next-generation robotic autonomy and human-robot collaboration.",
  location: "Los Angeles, CA",
  email: "ywchang@ucla.edu",
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
