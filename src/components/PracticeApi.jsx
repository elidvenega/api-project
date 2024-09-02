import { useState, useEffect } from "react";

export default function PracticeApi() {
  const [api, setApi] = useState([]);

  const fetchApi = async () => {
    try {
      const resp = await fetch(`https://jsonplaceholder.typicode.com/photos`);
      const data = await resp.json();
      console.log(data);

      setApi(data);
    } catch (e) {
      console.log("API fetch failed", e);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      <ul>
        {api.map((res, id) => (
          <li key={id}>{res.thumbnailUrl}</li>
        ))}
      </ul>
    </div>
  );
}
