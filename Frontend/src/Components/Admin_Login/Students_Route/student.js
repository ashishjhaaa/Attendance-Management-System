import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentCard from "./Student_Card";
import AddStudentForm from "./AddStudentForm";

function StudentUpdate() {
  const [students, setStudents] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchData();
  }, [students]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/read_student");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleAddStudent = () => {
    setIsAdding(true);
  };

  const handleCloseForm = () => {
    setIsAdding(false);
  };

  return (
    <div className="container text-center">
      <h1 className="my-4">Student Update</h1>
      <button className="btn btn-primary btn-lg btn-add-student position-fixed top-0 end-0 mt-4 me-4" onClick={handleAddStudent}>
        Add Student
      </button>
      <div className="row justify-content-center align-items-start">
        {students.map((student) => (
          <div className="col-md-4 mb-3" key={student._id}>
            <StudentCard student={student} />
          </div>
        ))}
      </div>
      {isAdding && <div className="mt-4"><AddStudentForm onClose={handleCloseForm} /></div>}
    </div>
  );
}

export default StudentUpdate;
