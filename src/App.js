import React, { useState } from "react";

import "./App.css";
import MemberCard from "./Components/MemberCard/MemberCard";
import Form from "./Components/Form/Form";

function App() {
  const [membersList, setMembersList] = useState([
    {
      firstName: "Rabah",
      lastName: "Babaci",
      age: 25,
      gender: "Male",
      email: "4rabah@gmail.com",
      phoneNumber: "510-646-7743",
      role: "Full-Stack Web Developer",
      isHappy: true
    }
  ]);
  const [memberToEdit, setMemberToEdit] = useState({});

  const addMember = member => setMembersList([...membersList, member]);

  return (
    <div className="App">
      <Form addMember={addMember} memberToEdit={memberToEdit} />

      <div className="card-wrapper">
        {membersList.map((member, index) => (
          <MemberCard
            member={member}
            setMemberToEdit={setMemberToEdit}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
