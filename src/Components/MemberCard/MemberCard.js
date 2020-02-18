import React from "react";
import "./memberCard.css";

export default function MemberCard({ member, index }) {
  return (
    <div className="member-card" key={index}>
      <p>
        <span>Full Name: </span>
        {member.firstName} {member.lastName}
      </p>

      <p>
        <span>Age: </span>
        {member.age}
      </p>

      <p>
        <span>Gender: </span>
        {member.gender}
      </p>

      <p>
        <span>Email: </span>
        {member.email}
      </p>

      <p>
        <span>Phone Number: </span>
        {member.phoneNumber}
      </p>

      <p>
        <span>Role: </span>
        {member.role}
      </p>

      <p>
        <span>Happy with his/her job?</span> {member.isHappy}
      </p>
    </div>
  );
}
