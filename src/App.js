import React, { useState } from "react";

import "./App.css";
import MemberCard from "./Components/MemberCard/MemberCard";
import Form from "./Components/Form/Form";

function App() {
  const [teamData, setTeamData] = useState([
    {
      firstName: "Rabah",
      lastName: "Babaci",
      age: 25,
      gender: "Male",
      email: "4rabah@gmail.com",
      phoneNumber: "510-646-7743",
      role: "Full-Stack Web Developer",
      isHappy: "Yes"
    }
  ]);
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phoneNumber: "",
    role: "",
    favLanguage: ""
  });

  return (
    <div className="App">
      <Form />
      <div className="card-wrapper">
        {teamData.map((member, index) => (
          <MemberCard member={member} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
