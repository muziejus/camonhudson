import fetch from "node-fetch";

export default async function getWeather(station: string = "KNYC") {
  const response = await fetch(
    `https://api.weather.gov/stations/${station}/observations/latest`,
  );
  const weatherData = await response.json();

  return weatherData;
}
