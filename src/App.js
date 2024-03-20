import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [breadName, setBreadName] = useState("random");
  const [dogImg, setDogImg] = useState("random");
  const fetchData = async (value) => {
    try {
      let url = "";
      if (value === "random") url = "https://dog.ceo/api/breeds/image/random";
      else url = `https://dog.ceo/api/breed/${value}/images/random`;

      const response = await axios.get(url);
      console.log(response.data.message);
      setDogImg(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData(breadName);
  }, [breadName]);

  const changeHandler = (e) => {
    setBreadName(e.target.value);
  };
  const nextHandler = (breadName) => {
    fetchData(breadName);
  };
  return (
    <div className="App">
      <h1>Show Dog Pics</h1>
      <label>
        Select a breed:
        <select value={breadName} onChange={changeHandler}>
          <option value="random">Random</option>
          <option value="beagle">Beagle</option>
          <option value="boxer">Boxer</option>
          <option value="dalmation">Dalmatian</option>
          <option value="husky">Husky</option>
        </select>
      </label>
      <div className="pics">
        <img src={dogImg} alt="name" />
      </div>
      <button onClick={() => nextHandler(breadName)}>next</button>
    </div>
  );
}

export default App;
