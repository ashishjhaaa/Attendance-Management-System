import React, { useState } from "react";
import axios from "axios";

function TeacherCard({ teacher, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedteacher, setEditedteacher] = useState({
    username: teacher.username,
    email: teacher.email,
    mobileno: teacher.mobileno
  });

  const handleEdit = async () => {
    try {
      console.log(teacher._id)
      const response = await axios.get(`http://localhost:5000/read_teacher/${teacher._id}`);
      const editedTeacherData = response.data;
      setEditedteacher(editedTeacherData);
      setIsEditing(true);
    } catch (error) {
      console.error("Error fetching teacher details for edit:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/delete_teacher/${teacher._id}`);
      onDelete(teacher._id); // Remove deleted teacher from UI
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    try {
      // Send a PUT request to update teacher details on the server
      await axios.put(`http://localhost:5000/update_teacher/${teacher._id}`, editedteacher);
      
      // Update UI accordingly (e.g., display success message)
      setIsEditing(false); // Exit edit mode
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
            value={editedteacher.username}
            onChange={(e) => setEditedteacher({ ...editedteacher, username: e.target.value })}
          />
        ) : (
          teacher.username
        )}
      </div>
      <div className="card-body text-success">
        {isEditing ? (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              value={editedteacher.email}
              onChange={(e) => setEditedteacher({ ...editedteacher, email: e.target.value })}
              readOnly={!isEditing} // Make input readonly when not in editing mode
            />
            <input
              type="text"
              className="form-control mb-2"
              value={editedteacher.mobileno}
              onChange={(e) => setEditedteacher({ ...editedteacher, mobileno: e.target.value })}
              readOnly={!isEditing} // Make input readonly when not in editing mode
            />
          </div>
        ) : (
          <>
            <p className="card-text">Email: {teacher.email}</p>
            <p className="card-text">Mobile No: {teacher.mobileno}</p>
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

export default TeacherCard;
