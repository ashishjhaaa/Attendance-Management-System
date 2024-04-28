import React, { useState } from "react";
import axios from "axios";

function StudentCard({ student, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStudent, setEditedStudent] = useState({ ...student });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent({ ...editedStudent, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/delete_student/${student._id}`);
      onDelete(student._id);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedStudent({ ...student });
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(
        `http://localhost:5000/update_student/${student._id}`,
        editedStudent
      );
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving edited student details:", error);
    }
  };

  return (
    <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header bg-transparent border-success">
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            name="username"
            value={editedStudent.username}
            onChange={handleChange}
          />
        ) : (
          <h5 className="card-title">{student.name}</h5>
        )}
      </div>
      <div className="card-body text-success">
        {isEditing ? (
          <div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control mb-2"
                name="name"
                value={editedStudent.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control mb-2"
                name="email"
                value={editedStudent.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mobile No:</label>
              <input
                type="number"
                className="form-control mb-2"
                name="mobileno"
                value={editedStudent.mobileno}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                className="form-control mb-2"
                name="address"
                value={editedStudent.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                className="form-control mb-2"
                name="dob"
                value={editedStudent.dob}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Registration No:</label>
              <input
                type="number"
                className="form-control mb-2"
                name="registrationno"
                value={editedStudent.registrationno}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Department:</label>
              <input
                type="text"
                className="form-control mb-2"
                name="department"
                value={editedStudent.department}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Section:</label>
              <input
                type="text"
                className="form-control mb-2"
                name="section"
                value={editedStudent.section}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Roll No:</label>
              <input
                type="number"
                className="form-control mb-2"
                name="rollno"
                value={editedStudent.rollno}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Semester:</label>
              <input
                type="number"
                className="form-control mb-2"
                name="semester"
                value={editedStudent.semester}
                onChange={handleChange}
              />
            </div>
          </div>
        ) : (
          <>
            {/* <p className="card-text">Name: {student.name}</p> */}
            <p className="card-text">Registration No: {student.registrationno}</p>
            <p className="card-text">Section: {student.section}</p>
          </>
        )}
        <div className="d-flex justify-content-center">
          {isEditing ? (
            <div>
              <button className="btn btn-primary mr-2" onClick={handleSaveEdit}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          ) : (
            <>
              <button
                className="btn btn-danger mr-2"
                onClick={handleDelete}
                disabled={isEditing}
                style={{ marginRight: "20px" }}
              >
                Delete
              </button>
              <button
                className="btn btn-success"
                onClick={handleEdit}
                disabled={isEditing}
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
