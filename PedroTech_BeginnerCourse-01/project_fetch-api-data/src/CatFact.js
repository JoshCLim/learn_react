import Axios from "axios";
import { useState, useEffect } from "react";

const catFactUrl = "https://catfact.ninja/fact";

export const CatFact = () => {
  const [catFact, setCatFact] = useState("");

  const generateCatFact = () => {
    Axios.get(catFactUrl).then((res) => {
      setCatFact(res.data.fact);
    });
  };

  // THIS IS NOT HOW TO FETCH DATA
  useEffect(() => {
    generateCatFact();
  }, []);

  return (
    <div className="CatFact">
      <h2>Cat Fact Generator</h2>
      <button onClick={generateCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
};
