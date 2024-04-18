import React, { useState, useEffect } from "react";
import axios from "axios";
import TeacherCard from "./Teacher_Card";
import AddTeacherForm from "./AddTeacherForm";

function TeacherUpdate() {
  const [teachers, setTeachers] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/read_teacher");
      setTeachers(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const handleAddTeacher = () => {
    setIsAdding(true);
  };

  const handleCloseForm = () => {
    setIsAdding(false);
  };

  return (
    <div className="container text-center">
      <h1 className="my-4">Teacher Update</h1>
      <button
        className="btn btn-primary btn-lg btn-add-teacher position-fixed top-0 end-0 mt-4 me-4"
        onClick={handleAddTeacher}
      >
        Add Teacher
      </button>
      <div className="row justify-content-center align-items-start">
        {teachers.map((teacher) => (
          <div className="col-md-4 mb-3" key={teacher._id}>
            <TeacherCard teacher={teacher} />
          </div>
        ))}
      </div>
      {isAdding && (
        <div className="mt-4">
          <AddTeacherForm onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
}

export default TeacherUpdate;
