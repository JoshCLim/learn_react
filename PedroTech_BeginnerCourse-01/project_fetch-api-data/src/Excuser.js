import Axios from "axios";
import { useState } from "react";

function Excuser() {
  const [excuse, setExcuse] = useState("");

  const getExcuse = (type) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${type}`)
      .then((res) => {
        setExcuse(res.data[0].excuse);
      })
      .catch((error) => {
        setExcuse("ERROR");
      });
  };

  return (
    <div className="Excuser">
      <h2>Excuse Generator</h2>
      <button onClick={() => getExcuse("party")}>Party</button>
      <button onClick={() => getExcuse("family")}>Family</button>
      <button onClick={() => getExcuse("office")}>Office</button>
      <p>Excuse: {excuse}</p>
    </div>
  );
}

export { Excuser };
