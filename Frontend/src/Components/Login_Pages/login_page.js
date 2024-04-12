import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const submit = async (event) => {
    event.preventDefault();
    const data = {
      username: event.target.name.value,
      password: event.target.password.value,
      role: event.target.role.value,
    };
    if (data.role == "admin") {
      const response = await axios.post(
        "http://localhost:5000/admin_login",
        data
      );
      if (response.request.status === 200) {
        console.log("Admin Login Successfully");
        navigate("/admin_dashboard");
      } else {
        navigate("/error");
      }
    } else if (data.role == "student") {
      const response = await axios.post(
        "http://localhost:5000/student_login",
        data
      );
      console.log("Server se yeh response mil raha hai : ", response);
      if (response.request.status === 200) {
        console.log("Student Login Successfully");
        navigate("/student_dashboard");
      } else {
        navigate("/error");
      }
    } else if (data.role == "teacher") {
      const response = await axios.post(
        "http://localhost:5000/teacher_login",
        data
      );
      console.log("Server se yeh response mil raha hai : ", response);
      if (response.request.status === 200) {
        console.log("Teacher Login Successfully");
        navigate("/teacher_dashboard");
      } else {
        navigate("/error");
      }
    }
  };
  return (
    <div className="login-container">
      <h1 className="login-title">Login Page</h1>
      <form id="form" className="login-form" onSubmit={submit}>
        <label>
          Username
          <input type="text" name="name" className="login-input login-label" />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            className="login-input login-label"
          />
        </label>
        <br />
        <div style={{ display: "flex" }}>
          <input type="radio" id="student" name="role" value="student" />
          <label htmlFor="student">Student</label>

          <input type="radio" id="teacher" name="role" value="teacher" />
          <label htmlFor="teacher">Teacher</label>

          <input type="radio" id="admin" name="role" value="admin" />
          <label htmlFor="admin">Admin</label>
        </div>
        <br />
        <button type="submit" className="login-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
