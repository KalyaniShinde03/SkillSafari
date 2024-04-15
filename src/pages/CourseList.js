// CourseList.js
import React from 'react';
import '../asset/styles/CourseList.css';

function CourseList({ courses }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {courses.map(course => (
        <div key={course.id} className="col">
          <div className="card h-100">
            <img src={`https://via.placeholder.com/300x150?text=${course.title}`} className="card-img-top" alt={course.title} />
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.description}</p>
              <p className="card-text">Price: ${course.price}</p>
              <a href="#" className="btn btn-primary">Enroll Now</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
