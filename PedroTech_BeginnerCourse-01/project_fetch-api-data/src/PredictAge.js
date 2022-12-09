import Axios from "axios";

import { useEffect, useState } from "react";

function PredictAge() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);

  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data.age);
    });
  };

  return (
    <div className="PredictAge">
      <h2>Age Predictor</h2>
      <input
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
          fetchAge();
        }}
      />
      <p>Predicted Age: {predictedAge}</p>
    </div>
  );
}

export { PredictAge };
