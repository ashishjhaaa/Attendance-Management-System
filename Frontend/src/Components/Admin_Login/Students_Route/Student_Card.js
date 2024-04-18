import React, { useState } from "react";
import axios from "axios";

function StudentCard({ student, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStudent, setEditedStudent] = useState({
    username: student.username,
    email: student.email,
    mobileno: student.mobileno
  });

  const handleEdit = async () => {
    try {
      console.log(student._id)
      const response = await axios.get(`http://localhost:5000/read_student/${student._id}`);
      const editedStudentData = response.data;
      setEditedStudent(editedStudentData);
      setIsEditing(true);
    } catch (error) {
      console.error("Error fetching student details for edit:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/delete_student/${student._id}`);
      onDelete(student._id); // Remove deleted student from UI
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    try {
      // Send a PUT request to update student details on the server
      await axios.put(`http://localhost:5000/update_student/${student._id}`, editedStudent);
      
      // Update UI accordingly (e.g., display success message)
      setIsEditing(false); // Exit edit mode
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
            value={editedStudent.username}
            onChange={(e) => setEditedStudent({ ...editedStudent, username: e.target.value })}
          />
        ) : (
          student.username
        )}
      </div>
      <div className="card-body text-success">
        {isEditing ? (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              value={editedStudent.email}
              onChange={(e) => setEditedStudent({ ...editedStudent, email: e.target.value })}
              readOnly={!isEditing} // Make input readonly when not in editing mode
            />
            <input
              type="text"
              className="form-control mb-2"
              value={editedStudent.mobileno}
              onChange={(e) => setEditedStudent({ ...editedStudent, mobileno: e.target.value })}
              readOnly={!isEditing} // Make input readonly when not in editing mode
            />
          </div>
        ) : (
          <>
            <p className="card-text">Email: {student.email}</p>
            <p className="card-text">Mobile No: {student.mobileno}</p>
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
              <button className="btn btn-danger mr-2" onClick={handleDelete} disabled={isEditing} style={{ marginRight: "20px" }}>
                Delete
              </button>
              <button className="btn btn-success" onClick={handleEdit} disabled={isEditing}>
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
