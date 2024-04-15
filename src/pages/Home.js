import React from 'react';
import CourseList from '../pages/CourseList';
import Footer from './Footer.js';

const courses = [
  { id: 1, title: 'React Fundamentals', description: 'Learn the basics of React.', price: 49.99 },
  { id: 2, title: 'Node.js Crash Course', description: 'Quick guide to Node.js development.', price: 59.99 },
  // Add more courses here
];

function Home() {
  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Featured Courses</h2>
      <CourseList courses={courses} />
      <Footer />
    </div>
  );
}

export default Home;
