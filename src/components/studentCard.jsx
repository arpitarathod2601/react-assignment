function StudentCard({ name, course, email, semester }) {
  return (
    <div className="student-card">
      <div className="card-inner">
        <p>Name: {name}</p>
        <p>Course: {course}</p>
        <p>Email:</p>
        <p>{email}</p>
        <p>Semester: {semester}</p>
      </div>
    </div>
  );
}

export default StudentCard;