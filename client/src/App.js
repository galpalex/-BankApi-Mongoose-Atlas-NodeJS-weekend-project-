import { useState, useEffect } from "react";
import myApi from "./api/Api";

function App() {
  const [data, setData] = useState([]);
  const [userDelete, setUserDelete] = useState([]);

  console.log(process.env.NODE_ENV);

  const getReq = async () => {
    const { data } = await myApi.get("/clients");
    setData(data);
  };
  const onDelete = async (id) => {
    const { data } = await myApi.delete(`${id}`);

    setUserDelete(data);
  };
  useEffect(() => {
    getReq();
  }, [userDelete]);
  const renderedResults = data.map((client) => {
    return (
      <div key={client.passportId} className="item">
        <div className="content">
          <div className="header">ID {client.passportId}</div>
          <div className="header">Cash {client.cash}</div>
          <div className="header">Credit {client.credit}</div>
          <div>
            <button onClick={() => onDelete(client.passportId)}>delete</button>
          </div>
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
