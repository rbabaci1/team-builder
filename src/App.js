import React, { useState } from "react";

import "./App.css";
import membersData from "./data/membersData";
import MemberCard from "./Components/MemberCard/MemberCard";
import Form from "./Components/Form/Form";

function App() {
  const [teamData, setTeamData] = useState(membersData);

  return <div className="App"></div>;
}

export default App;
