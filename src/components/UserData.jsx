import React, { useState, useEffect } from "react";

export default function UserData() {
  const [usersdata, setUsersData] = useState([]);

  async function getData() {
    try {
      const url = await fetch("https://jsonplaceholder.typicode.com/users");
      const resp = await url.json();
      const data = await resp;
      console.log(data);
      setUsersData(data);
    } catch (e) {
      console.log("error", e);
    }
  }

  // Works as component did mount
  useEffect(() => {
    getData();
  }, []);
  // Problem exist in line 24
  // Map is returning {} data instead of [] data

  return (
    <>
      <div className="list">
        <h1>React Fetch API Example</h1>
        <ul>
          {/* returns a new array */}
          {usersdata.map((item, i) => {
            return (
              <li key={i}>
                Username:{item.username}, Email:{item.email}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
