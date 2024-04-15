// In CourseDetail.js
import React from 'react';

function CourseDetail({ match }) {
  // Fetch course data using match.params.id
  const courseId = match.params.id;
  // Example: fetch course details by courseId from API or use local data

  return (
    <div>
      <h2>Course Detail</h2>
      {/* Display course details */}
    </div>
  );
}

export default CourseDetail;
