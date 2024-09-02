import React, { useState, useEffect } from "react";

export default function UserData() {
  const [usersdata, setUsersData] = useState([]);

  async function getData() {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await resp.json();
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
          {usersdata.map((item, id) => {
            return (
              <li key={id}>
               <span>name: {item.name}</span>
               <br/>
               <span>email: {item.email}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
