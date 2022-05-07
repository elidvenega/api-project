import React, { useState, useEffect } from "react";

function App() {
  const [Users, fetchUsers] = useState([]);

  const getData = async () => {
    try {
      const url = await fetch("https://jsonplaceholder.typicode.com/users");
      const resp = await url.json();
      const data = await resp;
      console.log(data);
      fetchUsers(data);
    } catch {
      console.log("error");
    }
  };

  // Works as component did mount
  useEffect(() => {
    getData();
  }, []);
  // Problem exist in line 24
  // Map is returning {} data instead of [] data
  return (
    <div className="list">
      <h2>React Fetch API Example</h2>
      <ul>
        {/* returns a new array */}
        {Users.map((item, i) => {
          return (
            <li key={i}>
              Username:{item.username}, Email:{item.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
