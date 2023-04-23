import React, { useState, useEffect } from "react";

function UsersData() {
  const [usernames, fetchUsers] = useState([]);

  const getData = () => {
    fetch("https://app.hatchways.io/api/assessment/students")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchUsers(res);
      });
  };
  //like componentdidMount()
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>React Fetch API Example</h2>
      <ul>
        {usernames.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default UsersData;
