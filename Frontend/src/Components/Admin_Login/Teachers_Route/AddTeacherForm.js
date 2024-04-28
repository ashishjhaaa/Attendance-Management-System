import React, { useState } from "react";
import axios from "axios";

function AddTeacherForm({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    mobileno: "",
    address: "",
    dob: "",
    uid: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/add_teacher", formData);
      onClose();
    } catch (error) {
      console.error("Error adding teacher:", error);
    }
  };

  return (
    <div className="add-teacher-form">
      <div className="card" style={{ backgroundColor: "white", margin: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
        <h2>Add Teacher</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter username"
              className="form-control"
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
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter name"
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>UID:</label>
            <input
              type="text"
              name="uid"
              value={formData.uid}
              onChange={handleChange}
              required
              placeholder="Enter UID"
              className="form-control"
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
              className="form-control"
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

export default AddTeacherForm;
