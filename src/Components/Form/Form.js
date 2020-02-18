import React from "react";
import "./form.css";

export default function Form(props) {
  return (
    <form>
      <label htmlFor="fname">Enter first name: </label>
      <input type="text" name="firstName" id="fname" />

      <label htmlFor="lname">Enter last name: </label>
      <input type="text" name="lastName" id="lname" />

      <label htmlFor="age">Enter Age: </label>
      <input type="number" name="age" id="age" />

      <label htmlFor="gender">Gender: </label>
      <select id="gender">
        <option>Male</option>
        <option>Female</option>
      </select>

      <label htmlFor="email">Enter email: </label>
      <input type="email" name="email" id="email" />

      <label htmlFor="phoneNumber">Enter phone number: </label>
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      />

      <label htmlFor="role">Enter Role: </label>
      <input type="text" name="role" id="role" />

      <label htmlFor="isHappy">Happy with your job?</label>
      <input type="checkbox" name="isHappy" id="isHappy" />
    </form>
  );
}
