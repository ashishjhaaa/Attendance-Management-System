// AddStudentForm.js
import React, { useState } from "react";
import axios from "axios";

function AddStudentForm({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    mobileno: "",
    address: "",
    dob: "",
    registrationno: "",
    department: "",
    section: "",
    rollno: "",
    semester: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/add_student", formData);
      onClose();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className="add-student-form">
      <div className="card" style={{ backgroundColor: "white", margin: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h3>Login Detail</h3>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter username"
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <div className="form-group">
            <h3>Personal Detail</h3>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter name"
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <div className="form-group">
            <label>Mobile No:</label>
            <input
              type="number"
              name="mobileno"
              value={formData.mobileno}
              onChange={handleChange}
              required
              placeholder="Enter mobile number"
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter address"
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <div className="form-group">
            <h3>Academic Detail</h3>
            <label>Registration No:</label>
            <input
              type="number"
              name="registrationno"
              value={formData.registrationno}
              onChange={handleChange}
              required
              placeholder="Enter registration number"
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              placeholder="Enter department"
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <div className="form-group">
            <label>Section:</label>
            <input
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              required
              placeholder="Enter section"
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <div className="form-group">
            <label>Roll No:</label>
            <input
              type="number"
              name="rollno"
              value={formData.rollno}
              onChange={handleChange}
              required
              placeholder="Enter roll number"
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <div className="form-group">
            <label>Semester:</label>
            <input
              type="number"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
              placeholder="Enter semester"
              style={{ marginBottom: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudentForm;
