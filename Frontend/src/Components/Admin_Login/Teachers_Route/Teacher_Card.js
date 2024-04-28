import React, { useState } from "react";
import axios from "axios";

function TeacherCard({ teacher, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTeacher, setEditedTeacher] = useState({ ...teacher });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTeacher({ ...editedTeacher, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/delete_teacher/${teacher._id}`);
      onDelete(teacher._id);
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTeacher({ ...teacher });
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(
        `http://localhost:5000/update_teacher/${teacher._id}`,
        editedTeacher
      );
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving edited teacher details:", error);
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
            value={editedTeacher.username}
            onChange={handleChange}
          />
        ) : (
          <h5 className="card-title">{teacher.name}</h5>
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
                value={editedTeacher.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control mb-2"
                name="email"
                value={editedTeacher.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mobile No:</label>
              <input
                type="number"
                className="form-control mb-2"
                name="mobileno"
                value={editedTeacher.mobileno}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                className="form-control mb-2"
                name="address"
                value={editedTeacher.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                className="form-control mb-2"
                name="dob"
                value={editedTeacher.dob}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>UID:</label>
              <input
                type="text"
                className="form-control mb-2"
                name="uid"
                value={editedTeacher.uid}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Department:</label>
              <input
                type="text"
                className="form-control mb-2"
                name="department"
                value={editedTeacher.department}
                onChange={handleChange}
              />
            </div>
          </div>
        ) : (
          <>
            <p className="card-text">Email: {teacher.email}</p>
            <p className="card-text">Mobile No: {teacher.mobileno}</p>
            <p className="card-text">Address: {teacher.address}</p>
            <p className="card-text">Date of Birth: {teacher.dob}</p>
            <p className="card-text">UID: {teacher.uid}</p>
            <p className="card-text">Department: {teacher.department}</p>
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
                style={{ marginRight: "20px" }}
              >
                Delete
              </button>
              <button className="btn btn-success" onClick={handleEdit}>
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
