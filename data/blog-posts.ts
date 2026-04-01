export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "building-scalable-react-apps",
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the architecture patterns and best practices for building React apps that scale gracefully as your team and codebase grow.",
    date: "Mar 25, 2026",
    readTime: "8 min read",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=340&fit=crop",
    content: [
      "Building scalable React applications requires careful planning and architecture decisions from the start. As your application grows, the patterns you establish early on will determine how maintainable and extensible your codebase remains.",
      "One of the most important principles is component composition. Rather than building monolithic components, break your UI into small, reusable pieces that can be composed together. This approach makes testing easier and allows different team members to work on different parts of the application simultaneously.",
      "State management is another critical consideration. While React's built-in useState and useContext hooks work well for small to medium applications, larger apps may benefit from dedicated state management solutions. The key is to keep state as close to where it's used as possible.",
      "Code splitting and lazy loading are essential for performance at scale. Use lazy() and Suspense to load components on demand, reducing your initial bundle size and improving time-to-interactive.",
      "Finally, establish clear conventions for your team: folder structure, naming patterns, testing strategies, and code review processes. Consistency across the codebase is what truly makes an application scalable.",
    ],
  },
  {
    id: "mastering-typescript-generics",
    title: "Mastering TypeScript Generics",
    excerpt:
      "A deep dive into TypeScript generics — from basic usage to advanced patterns that will level up your type safety.",
    date: "Mar 18, 2026",
    readTime: "6 min read",
    category: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=340&fit=crop",
    content: [
      "TypeScript generics are one of the most powerful features of the language, enabling you to write flexible, reusable code while maintaining full type safety.",
      "At their core, generics allow you to create components, functions, and classes that work with multiple types rather than a single one. Think of them as type variables — placeholders that get filled in when the code is used.",
      "A common use case is creating utility functions that preserve type information. For example, a function that wraps an API response can use generics to ensure the consumer knows exactly what type of data they're receiving.",
      "Advanced patterns like conditional types, mapped types, and template literal types build on generics to create sophisticated type transformations. These are particularly useful when building libraries or shared utilities.",
      "The key to mastering generics is practice. Start with simple use cases and gradually work your way up to more complex patterns. Over time, you'll develop an intuition for when and how to apply them effectively.",
    ],
  },
  {
    id: "css-glassmorphism-guide",
    title: "The Complete Guide to Glassmorphism in CSS",
    excerpt:
      "Everything you need to know about creating stunning frosted glass effects using modern CSS properties.",
    date: "Mar 10, 2026",
    readTime: "5 min read",
    category: "CSS",
    image:
      "https://images.unsplash.com/photo-1545670723-196ed0954986?w=600&h=340&fit=crop",
    content: [
      "Glassmorphism has become one of the most popular design trends in modern web development. This frosted glass effect creates a sense of depth and elegance that can elevate any user interface.",
      "The core CSS properties behind glassmorphism are backdrop-filter for the blur effect, a semi-transparent background color, and a subtle border. Together, these create the characteristic frosted glass appearance.",
      "When implementing glassmorphism, consider the background behind your glass elements. The effect works best when there's colorful or varied content behind the glass, as this gives the blur something to work with.",
      "Accessibility is an important consideration. Ensure that text on glass elements has sufficient contrast, and provide fallbacks for browsers that don't support backdrop-filter.",
      "Performance can also be a concern, as backdrop-filter can be computationally expensive. Use it judiciously and test on lower-end devices to ensure a smooth experience for all users.",
    ],
  },
  {
    id: "nodejs-performance-tips",
    title: "Node.js Performance Optimization Tips",
    excerpt:
      "Practical techniques to improve the performance of your Node.js applications in production environments.",
    date: "Mar 2, 2026",
    readTime: "10 min read",
    category: "Node.js",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop",
    content: [
      "Node.js performance optimization is crucial for building fast, responsive applications. Here are practical techniques you can apply to your production applications today.",
      "Start with profiling. Use Node.js built-in profiler or tools like clinic.js to identify bottlenecks. Don't optimize blindly — measure first, then target the areas that will have the biggest impact.",
      "Caching is one of the most effective optimization strategies. Whether it's in-memory caching with tools like Redis, HTTP caching headers, or memoization of expensive computations, caching can dramatically reduce response times.",
      "Database queries are often the biggest performance bottleneck. Use connection pooling, optimize your queries, add appropriate indexes, and consider using an ORM that generates efficient SQL.",
      "Finally, consider your deployment architecture. Load balancing, clustering (using all CPU cores), and horizontal scaling can help your Node.js application handle more concurrent requests.",
    ],
  },
  {
    id: "intro-to-cloud-architecture",
    title: "Introduction to Cloud Architecture",
    excerpt:
      "Understanding the fundamentals of cloud architecture and how to design resilient, cost-effective systems.",
    date: "Feb 22, 2026",
    readTime: "7 min read",
    category: "Cloud",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop",
    content: [
      "Cloud architecture is the design and structure of cloud computing systems. Understanding its fundamentals is essential for building modern, resilient applications.",
      "The key principles of cloud architecture include scalability, reliability, security, and cost optimization. These pillars guide every architectural decision you make.",
      "Microservices architecture has become the dominant pattern in cloud-native development. By breaking your application into small, independent services, you gain flexibility in deployment, scaling, and technology choices.",
      "Serverless computing takes this further by abstracting away infrastructure management entirely. Services like AWS Lambda and Azure Functions let you focus purely on business logic.",
      "As you design your cloud architecture, always consider failure modes. Design for failure, implement circuit breakers, and ensure your system can gracefully degrade when individual components fail.",
    ],
  },
  {
    id: "git-workflow-for-teams",
    title: "Git Workflow Strategies for Teams",
    excerpt:
      "Comparing popular Git workflows and finding the right branching strategy for your development team.",
    date: "Feb 14, 2026",
    readTime: "6 min read",
    category: "DevOps",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=340&fit=crop",
    content: [
      "Choosing the right Git workflow is crucial for team productivity. The best workflow depends on your team size, release cadence, and project requirements.",
      "Git Flow is a well-established workflow that uses feature branches, develop and main branches, and release branches. It works well for projects with scheduled releases but can be complex for smaller teams.",
      "GitHub Flow is a simpler alternative: create a branch, make changes, open a pull request, and merge to main. This works well for continuous deployment environments.",
      "Trunk-based development takes simplicity further by having all developers commit to a single branch (main/trunk) with short-lived feature branches. This requires strong CI/CD practices and feature flags.",
      "Regardless of which workflow you choose, establish clear conventions for commit messages, branch naming, code review processes, and merge strategies. Consistency is key to a smooth development experience.",
    ],
  },
];

export const BLOG_CATEGORIES = [
  "React",
  "TypeScript",
  "CSS",
  "Node.js",
  "Cloud",
  "DevOps",
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.id === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}
