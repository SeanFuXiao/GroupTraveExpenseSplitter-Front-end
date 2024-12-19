import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/authService";
//import * as authService from '../../services/authService';


const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConf: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.passwordConf) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await signup({
        username: formData.username,
        password: formData.password,
      });

      if (response.error) {
        setErrorMessage(response.error);
      } else {
        navigate("/signin");
      }
    } catch (error) {
      console.error("Signup Error Debug:", error);
      setErrorMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordConf">Confirm Password:</label>
          <input
            type="password"
            id="passwordConf"
            name="passwordConf"
            value={formData.passwordConf}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
};

export default Signup;




/*const SignupForm = () => {
    const navigate = useNavigate();
    //const [email, setEmail] = useState(['']);
    //const [password, setPassword] = useState([""]);
    /*const [formData, setFormData] = useState({ 
        username: '',
        passwordConf: '',
    });
     const updateMessage = (msg) => {
        setMessage(msg);

     };
     const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

     };
     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUserResponse = await authService.signup(formData);
            props.setUser(newUserResponse.user);
            navigate('/');

        }catch(err) {
            updateMessage(err.message);
        }

     };
     const { username, password, passwordConf } = formData;
     const isFormInvalid = () => {
        return !(username && password && password === passwordConf);

     };
     return (
        <main>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="name"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value = {password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="password"
           id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
};
   
*/


