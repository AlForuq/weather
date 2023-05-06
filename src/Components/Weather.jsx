import React, { useEffect, useState } from "react";

export const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [name, setName] = useState("London");

  // const urls = new URL(
  //   `http://api.weatherapi.com/v1/current.json?key=a5e7fd3b07ee4d16881151646230105&q=${name}`
  // );

  // console.log(urls.searchParams.get("key"));

  // const query = new URLSearchParams(urls.search);
  // console.log(query.get("key"));

  const url = `http://api.weatherapi.com/v1/current.json?key=a5e7fd3b07ee4d16881151646230105&q=${name}`;

  useEffect(() => {
    const getDate = async (url) => {
      let res = await fetch(url);
      res = await res.json();
      setWeather(res.location);
    };
    getDate(url);

    // fetch(
    //   `http://api.weatherapi.com/v1/current.json?key=a5e7fd3b07ee4d16881151646230105&q=${name}`
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setWeather(res.location);
    //   });
  }, [name, url]);

  return (
    <div>
      <h1>Weather</h1>
      <select
        onChange={(e) => {
          setName(e.target.value);
        }}
      >
        <option value={"London"}> London</option>
        <option value={"Tashkent"}> Tashkent</option>
        <option value={"Seoul"}> Seoul</option>
        <option value={"Tokyo"}> Tokyo</option>
      </select>
      {weather ? (
        <div>
          <h2>
            Country: <span>{weather.country}</span>{" "}
          </h2>
          <h2>
            City: <span>{weather.name}</span>{" "}
          </h2>
          <h2>
            Address:{" "}
            <span
              style={{
                background: weather.region ? "yellow" : "red",
              }}
            >
              {weather.region ? weather.region : "Unavailable"}
            </span>{" "}
          </h2>
          <h2>
            Time: <span>{weather.localtime}</span>{" "}
          </h2>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
