import { useState, useEffect } from "react";

export default function TestApi() {
  const [api, setApi] = useState([]);

  const fetchApi = async () => {
    try {
      const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await resp.json();
      console.log(data);

      setApi(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem"}}>
        <h1>Fetch API</h1>
      <ul>
        {api.map((user, id) => (
          <li key={id}>
            <span>Username is: {user.username}</span>
            <br />
            <span>Email is: {user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
