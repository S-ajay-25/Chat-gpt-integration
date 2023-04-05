import React from "react";

// Define the course structure as an array of objects
const courseStructure = [
  {
    id: 1,
    title: "Introduction to the Course",
    description: "This section will provide an overview of the course and its objectives.",
  },
  {
    id: 2,
    title: "Topic 1: Basics of React.js",
    description: "This section will cover the basics of React.js, including components, state, and props.",
  },
  {
    id: 3,
    title: "Topic 2: Advanced React.js",
    description: "This section will cover advanced topics in React.js, such as hooks and context.",
  },
  {
    id: 4,
    title: "Topic 3: Building a React.js App",
    description: "This section will walk through the process of building a simple React.js app from scratch.",
  },
];

// Define a component that displays the course structure and its first step
function CourseStructure() {
  return (
    <div>
      <h1>Course Structure</h1>
      <ul>
        {courseStructure.map((topic) => (
          <li key={topic.id}>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </li>
        ))}
      </ul>
      <h2>First Step: {courseStructure[0].title}</h2>
      <p>{courseStructure[0].description}</p>
    </div>
  );
}

export default CourseStructure;
