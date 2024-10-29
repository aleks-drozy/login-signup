import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { CiUser, CiLock } from "react-icons/ci";
function App() {
  const [Form, setForm] =useState('login');

  return(<>
  {Form === 'login' ? (
    <SignIn CiUser={CiUser} CiLock={CiLock} FormHandle={setForm} />
  ) : (
    <SignUp CiUser={CiUser} CiLock={CiLock} FormHandle={setForm} />
  )}
</>
);
}
export default App
