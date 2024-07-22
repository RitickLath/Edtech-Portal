// HERO SECTION CONSTANTS
const heading = "Upgrade Your Path with Essential";

const neonHeading = "Coding Skills";

const paragraph =
  "With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.";

const btn1 = "Learn More";

const btn2 = "Book a Demo";

// HIGHLIGHT SECTION-1 CONSTANTS

const heading1 = "Boost your coding expertise with our online courses";

const neonHeading1 = "coding expertise";

const paragraph1 =
  "Our courses are crafted and delivered by coding professionals with years of experience and a passion for teaching.";

const btn11 = "Try it Yourself";

const btn12 = "Learn More";

// HIGHLIGHT SECTION-2 CONSTANTS

const heading2 = "Launch your coding";

const neonHeading2 = "experience instantly";

const paragraph2 =
  "Go for it and experience coding firsthand. Our interactive learning environment has you writing code right away.";

const btn21 = "Continue Lesson";

const btn22 = "Learn More";

// ANIMATION CODE TEXT

const code1 = [
  `const express = require('express');\nconst app = express();\nconst port = 3000;\n res.send('Hello, World! 🌍');\n});\napp.listen(port, () => {\n  console.log(\`🚀 Server running at http://localhost:\${3000}/\`);\n});`,
  100,
  "",
];

const code2 = [
  `import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst App = ({ count }) => (\n  <div>\n    {Array.from({ length: count }, (_, i) => <h1 key={i}>{i + 1}.</h1>)}\n  </div>\n);\n\nReactDOM.render(<App count={9} />, document.getElementById('root'));`,
  1000,
  "",
];

// CATALOG TEXTS

const Cheading = "Unlock the";
const Cheading1 = "Power of Code";
const Cparagraph = "Learn to Build Anything You Can Imagine";

const c1 = [
  "Learn HTML",
  "Immerse yourself in HTML, the backbone of web development, to understand how to structure and organize web content. Gain skills in creating elements such as headings, paragraphs, lists, and links, and learn how to build the fundamental framework of web pages with tags and attributes.",
  "Learn CSS",
  "Explore the world of CSS to master the techniques for styling and visually enhancing your web pages. Delve into concepts like selectors, properties, and values to design responsive layouts, apply color schemes, set typography, and control the overall presentation and aesthetics of your site.",
  "Learn JavaScript",
  "Uncover the power of JavaScript to add interactivity and dynamic functionality to your web projects. Learn how to manipulate the DOM, handle user events, and create dynamic content updates, all while understanding JavaScript's role in making web pages more engaging and responsive to user input.",
];

const c2 = [
  "HTML",
  "HTML, or HyperText Markup Language, is the standard language used to create and organize the content on web pages. It involves using tags and elements to structure content, such as text, images, and links, and provides the building blocks for creating well-formed and accessible web documents.",
  "CSS",
  "CSS, or Cascading Style Sheets, is essential for controlling the presentation of web pages. It allows developers to define the layout, colors, fonts, and spacing of web content, ensuring a cohesive and visually appealing design across different devices and screen sizes so it good to have skill.",
  "Responsive Web Design",
  "Responsive Web Design focuses on creating web pages that automatically adjust to fit various screen sizes and devices. By using flexible grid layouts, media queries, and responsive images, this approach ensures that websites provide an optimal viewing experience.",
];

const c3 = [
  "Java",
  "Java is a versatile and widely-used high-level programming language known for its portability across different platforms. It follows the principle of 'write once, run anywhere,' making it suitable for developing a range of applications from enterprise-level systems to mobile apps and web services.",
  "Python",
  "Python is a dynamic, high-level programming language praised for its simplicity and readability. Its straightforward syntax makes it accessible to beginners while still being powerful enough for advanced users. Python is extensively used in web development, data analysis, machine learning, and automation.",
  "SCSS",
  "SCSS, or Sassy CSS, is an extension of CSS that introduces advanced features such as variables, nesting, and mixins. These enhancements make it easier to manage and maintain complex stylesheets by allowing developers to write more organized and reusable code, streamline the styling process.",
];

const c4 = [
  "Flask",
  "It is a lightweight & flexible web framework for Python, designed to provide the essentials needed to build web applications with minimal overhead. It offers developers the freedom to choose their tools and libraries, excellent choice for small to medium-sized projects where simplicity and customization are key priorities.",
  "Django",
  "Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design. It includes built-in features such as an ORM, authentication, and an admin interface, allowing developers to focus on building applications rather than dealing with repetitive tasks. Django’s emphasis on security and scalability.",
  "FastAPI",
  "It is a modern, fast framework for building APIs with Python, designed to deliver high performance and ease of use. It supports async programming & automatic generation of interactive API documentation, making it an ideal choice for developing efficient and scalable APIs that can handle large volumes of requests and complex operations.",
];

const c5 = [
  "Next.js",
  "Next.js is a powerful framework for React that provides server-side rendering and static site generation capabilities. It enhances performance by pre-rendering pages on the server or during build time, which improves load times and SEO. Next.js also offers features like API routes and built-in CSS support, making it a comprehensive solution.",
  "Nuxt.js",
  "Nuxt.js is a framework for Vue.js that enables server-side rendering & static site generation. It simplifies the development process by providing features such as automatic routing, server-side rendering, and module-based architecture. It helps create fast, SEO-friendly applications & allows for seamless integration of Vue components and plugins.",
  "Sanity",
  "Sanity is a headless CMS that offers a flexible and scalable solution for managing structured content. Its real-time collaboration capabilities, customizable content studio, and powerful APIs make it an ideal choice for developers looking to build content-driven applications with a tailored content management experience.",
];

export {
  heading,
  neonHeading,
  paragraph,
  btn1,
  btn2,
  heading1,
  neonHeading1,
  paragraph1,
  btn11,
  btn12,
  btn21,
  btn22,
  heading2,
  neonHeading2,
  paragraph2,
  code1,
  code2,
  Cheading,
  Cheading1,
  Cparagraph,
  c1,
  c2,
  c3,
  c4,
  c5,
};
