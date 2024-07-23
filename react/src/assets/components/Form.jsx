import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLocaleLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email address");
    } else {
      setError("");
      alert("Form submitted");
    }
  };
  return (
    <>
      <h3>Form component</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default Form;
