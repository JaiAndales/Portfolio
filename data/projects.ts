export interface Project {
  id: number;
  title: string;
  desc: string;
  tag: string;
  image: string;
}

export const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Audit Sytem",
    desc: "A audit security and management system.",
    tag: "Next.js",
    image: "/images/1.png",
  },
  {
    id: 2,
    title: "CPC Connect",
    desc: "A system fro CPC's clubs that student can join.",
    tag: "Next.js",
    image: "/images/2.png"
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    desc: "Business analytics with Descriptive, Predictive and Prescriptive.",
    tag: "Next.js",
    image: "/images/3.png"
  },
  {
    id: 4,
    title: "Product Card",
    desc: "This project is one from AppsDev",
    tag: "Next.js",
    image: "/images/4.jpg"
  },
  {
    id: 5,
    title: "Employee Portal",
    desc: "Internal company tool for HR management.",
    tag: "C#",
    image: "1.png"
  },
  {
    id: 6,
    title: "CRM System",
    desc: "Customer relationship management with robust data handling.",
    tag: "MySQL",
    image: "1.png"
  },
];

export const PROJECT_FILTERS = ["All", "C#", "Next.js", "MySQL"];
