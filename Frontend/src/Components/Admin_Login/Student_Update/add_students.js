import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Add() {
  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    const data = {
      name: event.target.username.value,
      email: event.target.email.value,
      mobileno: event.target.mobileno.value,
      password: event.target.password.value,
    };

    console.log("Backend ko bhej raha hun yeh : ");
    console.log(data);

    try {
      const response = await axios.post(
        "https://localhost:5000/add_student",
        data
      );
      console.log(response);
      if (response.request.status === 200) {
        console.log("Student Added Successfully");
        navigate("/student_dashboard");
      } else {
        alert("Student Not Added");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the student.");
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Add New Student Data</h1>
      <form id="form" className="login-form" onSubmit={submit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            className="login-input login-label"
          />
        </label>
        <br />
        <label>
          Email Id
          <input
            type="email"
            name="email"
            className="login-input login-label"
          />
        </label>
        <br />
        <label>
          Mobile No
          <input
            type="number"
            name="mobileno"
            className="login-input login-label"
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="text"
            name="password"
            className="login-input login-label"
          />
        </label>
        <br />
        <button type="submit" className="login-button">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default Add;
