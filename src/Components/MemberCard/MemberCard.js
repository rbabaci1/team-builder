import React from "react";

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
        <span>Are you happy with you job?</span> {member.isHappy}
      </p>
    </div>
  );
}
