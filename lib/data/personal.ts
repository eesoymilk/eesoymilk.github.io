export interface PersonalInfo {
  name: string;
  title: string;
  roles: string[]; // For typewriter effect
  bio: string;
  location: string;
  email: string;
  phone?: string;
  profileImage: string;
  resumeUrl: string;
  philosophy: {
    quote: string;
    author: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Yu-Wei Chang",
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
  resumeUrl: "/documents/resume.pdf",
  philosophy: {
    quote:
      "Technology should amplify human potential, not replace it. The best solutions are those that understand and enhance the human experience.",
    author: "Yu-Wei Chang",
  },
};
