import getWeather from "./get-weather.js";
import weatherDescription from "./description.js";

interface WeatherReport {
  properties: {
    textDescription: string;
    icon: string;
    temperature: {
      value: number;
    };
    visibility: {
      value: number;
    };
    relativeHumidity: {
      value: number;
    };
    windChill: {
      value: number;
    };
    heatIndex: {
      value: number;
    };
  };
}

function rounder(num: number): number {
  return Math.round(num * 100) / 100;
}

export default async function textReport(
  station: string = "KNYC",
): Promise<string> {
  const weather = (await getWeather(station)) as WeatherReport;
  if (!weather) {
    return "No weather data available.";
  }

  const weatherCodeArray = weather.properties.icon.split("/");
  const weatherCode =
    weatherCodeArray[weatherCodeArray.length - 1].split("?")[0];

  const description = weatherDescription(weatherCode);

  if (/night/.test(weather.properties.icon)) {
    description.emoji = "🌃";
  }

  let relativeHumidity = "";
  if (weather.properties.relativeHumidity.value) {
    relativeHumidity = `\nRelative Humidity: ${rounder(
      weather.properties.relativeHumidity.value,
    )}%`;
  }

  let windChill = "";
  if (weather.properties.windChill.value) {
    windChill = `\nWind Chill: ${rounder(weather.properties.windChill.value)}°`;
  }
  let heatIndex = "";
  if (weather.properties.heatIndex.value) {
    heatIndex = `\nHeat Index: ${rounder(weather.properties.heatIndex.value)}°`;
  }

  return (
    `Current conditions (via NOAA):
${description.emoji} ${description.description}
Temperature: ${rounder(weather.properties.temperature.value)}°
Visibility: ${weather.properties.visibility.value / 1000}km` +
    relativeHumidity +
    windChill +
    heatIndex
  );
}
