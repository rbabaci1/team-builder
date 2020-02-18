import React from "react";
import "./form.css";

export default function Form(props) {
  return (
    <div className="member-form">
      <form>
        <section>
          <label htmlFor="fname">Enter first name: </label>
          <input type="text" name="firstName" id="fname" />
        </section>

        <section>
          <label htmlFor="lname">Enter last name: </label>
          <input type="text" name="lastName" id="lname" />
        </section>

        <section>
          <label htmlFor="age">Enter Age: </label>
          <input type="number" name="age" id="age" />
        </section>

        <section id="gender-select">
          <label htmlFor="gender">Gender: </label>
          <select id="gender">
            <option>Male</option>
            <option>Female</option>
          </select>
        </section>

        <section>
          <label htmlFor="email">Enter email: </label>
          <input type="email" name="email" id="email" />
        </section>

        <section>
          <label htmlFor="phoneNumber">Enter phone number: </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </section>

        <section>
          <label htmlFor="role">Enter Role: </label>
          <input type="text" name="role" id="role" />
        </section>

        <section id="checkbox">
          <label htmlFor="isHappy">Happy with your job?</label>
          <input type="checkbox" name="isHappy" id="isHappy" />
        </section>
      </form>
    </div>
  );
}
