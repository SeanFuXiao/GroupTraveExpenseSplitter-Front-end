import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/authService";

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

      // Assuming the response has a success message or data
      if (response && response.message) {
        navigate("/signin");
      } else {
        setErrorMessage("Signup failed. Please try again.");
      }
    } catch (error) {
      //console.error("Signup Error Debug:", error);
      // Handle the error message returned from the backend
      setErrorMessage(error.message || "Signup failed. Please try again.");
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

