function delete_() {
  return (
    <>
      <div className="login-container">
        <h1 className="login-title">Delete Teacher Data</h1>
        <form id="form" className="login-form">
          <label>
            Username
            <input
              type="text"
              name="username"
              className="login-input login-label"
            />
          </label>
          <br />
          <button type="submit" className="login-button">
            Delete Teacher
          </button>
        </form>
      </div>
    </>
  );
}
export default delete_;
