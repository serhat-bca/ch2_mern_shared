import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  // const contacts = axios.get("http://localhost:3001/contacts");
  // console.log(contacts);

  const [contacts, setContacts] = useState([]);

  // second parameter as an empty array
  // means run on the first render only
  useEffect(() => {
    axios.get("http://localhost:3001/contacts").then((response) => {
      console.log(response.data);
      setContacts(response.data);
    });
  }, []);

  return (
    <div>
      <h2>JSON Server Example</h2>
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
