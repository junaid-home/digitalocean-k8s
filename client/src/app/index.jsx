import React from "react";
import Logo from "../logo.svg";

function App() {
  const [name, setName] = React.useState("");
  const [names, setNames] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    name.length && setNames([name, ...names]);

    fetch(`/api/v1/users`, {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json((data) => {
        console.log(data);
      });
    });

    setName("");
  };

  const getNames = () => {
    return new Promise((resolve, _reject) => {
      fetch(`/api/v1/names`)
        .then((resonse) => {
          resonse.json().then((data) => {
            resolve(data["names"]);
          });
        })
        .catch(() => {
          resolve([]);
        });
    });
  };

  React.useEffect(() => {
    getNames().then((names) => {
      setNames(names);
    });
  }, []);

  return (
    <div>
      <img src={Logo} width={100} height={100} alt="Logo" />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <button type="submit">Save</button>
        </form>
        <br />
        <ul>
          {names.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
