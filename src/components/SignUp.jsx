import { MdAlternateEmail } from "react-icons/md";
import { CiUser, CiLock } from "react-icons/ci"; 
import { useState } from "react";

function SignUp({ FormHandle }) {
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Role, setRole] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  function handleSignUp(e) {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation

    if (!User && !Email && !Password && !ConfirmPassword && !Role) {
      setErrorMessage("Please enter your username, email, password, confirm password, and select a role.");
    } else if (!User) {
      setErrorMessage("Please enter your username.");
    } else if (!Email) {
      setErrorMessage("Please enter your email.");
    } else if (!emailPattern.test(Email)) {
      setErrorMessage("Please enter a valid email (e.g., user@example.com).");
    } else if (!Password) {
      setErrorMessage("Please enter your password.");
    } else if (!ConfirmPassword) {
      setErrorMessage("Please confirm your password.");
    } else if (Password !== ConfirmPassword) { // Check if passwords match
      setErrorMessage("Passwords do not match."); // Error message if they don't match
    } else if (!Role) {
      setErrorMessage("Please select a role.");
    } else {
      console.log(User, Email, Password, Role);
      setUser("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole(""); 
      setErrorMessage("");
    }
  }

  return (
    <div className="form-container">
      <h1>NoteIt</h1> 
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUser(e.target.value)}
            value={User}
          />
          <CiUser className="icon user" />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
          />
          <MdAlternateEmail className="icon email" />
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
        <div className="form-control">
          <input
            type="password"
            placeholder="Confirm your password" 
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={ConfirmPassword}
          />
          <CiLock className="icon password" />
        </div>
        <div className="form-control">
          <label htmlFor="role">I am a *</label>
          <select
            id="role"
            value={Role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Please select</option>
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
            <option value="demonstrator">Demonstrator</option>
          </select>
        </div>

        {ErrorMessage && <p className="error-message">{ErrorMessage}</p>} 

        <button type="submit">Sign Up</button>
      </form>
      <p onClick={() => FormHandle('login')}>Already have an account?</p>
    </div>
  );
}

export default SignUp;
