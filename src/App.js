import React, {useState} from "react";
import Tweet from "./Tweet";



function App() {

  const [users, setUsers] = useState([
    {name: "Luffy", message: "I'm gonna become the pirate king"},
    {name: "Naruto", message: "Dattabayo!"},
    {name: "Goku", message: "It's over 9000"}
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;  