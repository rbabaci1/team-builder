import React from "react";
import "./form.css";

export default function Form(props) {
  return (
    <div className="member-form">
      <form>
        <section>
          <label htmlFor="fname">First name: </label>
          <input
            type="text"
            name="firstName"
            id="fname"
            placeholder="Enter Your First Name"
          />
        </section>

        <section>
          <label htmlFor="lname">Last name: </label>
          <input
            type="text"
            name="lastName"
            id="lname"
            placeholder="Enter Your Last Name"
          />
        </section>

        <section>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Enter Your Age"
          />
        </section>

        <section id="gender-select">
          <label htmlFor="gender">Gender: </label>
          <select id="gender">
            <option>Male</option>
            <option>Female</option>
          </select>
        </section>

        <section>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
        </section>

        <section>
          <label htmlFor="phoneNumber">Phone number: </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter Your Phone Number"
          />
        </section>

        <section>
          <label htmlFor="role">Role: </label>
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Enter Your Role"
          />
        </section>

        <section id="checkbox">
          <label htmlFor="isHappy">Happy with your job?</label>
          <input type="checkbox" name="isHappy" id="isHappy" />
        </section>
      </form>
    </div>
  );
}
