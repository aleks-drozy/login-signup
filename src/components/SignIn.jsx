import { useState } from "react";

function SignIn({ CiUser, CiLock, FormHandle }) {
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    
    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!User && !Password) {
      setErrorMessage("Please enter your email/username and password.");
    } else if (!User) {
      setErrorMessage("Please enter your email/username.");
    } else if (!emailPattern.test(User)) {
      setErrorMessage("Please enter a valid email (e.g., user@example.com).");
    } else if (!Password) {
      setErrorMessage("Please enter your password.");
    } else {
      console.log(User, Password);
      setUser("");
      setPassword("");
      setErrorMessage("");
    }
  }

  return (
    <div className="form-container">
      <h1>NoteIt</h1>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your email or username"
            onChange={(e) => setUser(e.target.value)}
            value={User}
          />
          <CiUser className="icon user" />
        </div>

        <div className="form-control">
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
          <CiLock className="icon password" />
        </div>

        {ErrorMessage && <p className="error-message">{ErrorMessage}</p>}

        <button type="submit">Sign In</button>
      </form>
      <p onClick={() => FormHandle('signup')}>Don't have an account?</p>
    </div>
  );
}

export default SignIn;
