import { useState } from "react";
import myApi from "./api/Api";

function App() {
  const [data, setData] = useState([]);

  console.log(process.env.NODE_ENV);

  const getReq = async () => {
    const { data } = await myApi.get("/clients");
    console.log(data);
    setData(data);
  };

  const renderedResults = data.map((client) => {
    console.log(data);
    return (
      <div key={client.passportId} className="item">
        <div className="content">
          <div className="header">ID {client.passportId}</div>
          <div className="header">Cash {client.cash}</div>
          <div className="header">Credit {client.credit}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="App">
      <h1>Bank Api</h1>
      <button onClick={getReq}>Display all clients</button>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}

export default App;
