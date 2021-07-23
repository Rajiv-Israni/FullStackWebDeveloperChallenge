import React, { useState, useEffect } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

import "./SearchPage.css";

const SearchPage = () => {
  const [enteredData, setEnteredData] = useState("");
  const [receivedData, setReceivedData] = useState();
  const [gotData, setGotData] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const getData = async () => {
      const response = await fetch(
        `http://localhost:5000/search/${enteredData}`
      );
      const responseData = await response.json();
      setReceivedData(responseData);
      setGotData(true);
    };
    getData();
  };

  const changeHandler = (event) => {
    event.preventDefault();
    setEnteredData(event.target.value);
  };

  if (gotData) {
    var dataList = receivedData.data.map((data) => (
      <ul key={Math.random()}>
        <h3>{data}</h3>
      </ul>
    ));
  } else dataList = <p>Enter Something To Search</p>;

  return (
    <React.Fragment>
      <Card className="authentication">
        <h2>Type to Search</h2>
        <hr />
        <form onSubmit={submitHandler}>
          <Input
            element="input"
            id="name"
            type="text"
            label="Input Search Key"
            onChange={changeHandler}
          />
          <Button type="submit">SEARCH</Button>
        </form>
      </Card>
      <Card className="authentication">
        {dataList}
      </Card>
    </React.Fragment>
  );
};

export default SearchPage;
