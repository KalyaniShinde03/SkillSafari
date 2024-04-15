import React from 'react';

function Course({ course }) {
  return (
    <div className="course">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>Price: ${course.price}</p>
    </div>
  );
}

export default Course;
