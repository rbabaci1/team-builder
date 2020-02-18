import React, { useState } from "react";

import "./App.css";
import membersData from "./data/membersData";
import MemberCard from "./Components/MemberCard/MemberCard";
import Form from "./Components/Form/Form";

function App() {
  const [teamData, setTeamData] = useState(membersData);
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
        {membersData.map((member, index) => (
          <MemberCard member={member} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
