// In CourseList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Course from './Course';

function CourseList({ courses }) {
  return (
    <div className="course-list">
      {courses.map(course => (
        <Link key={course.id} to={`/courses/${course.id}`}>
          <Course course={course} />
        </Link>
      ))}
    </div>
  );
}

export default CourseList;
