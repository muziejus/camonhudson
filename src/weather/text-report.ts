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
    relativeHumidity = `\nRelative Humidity: ${
      Math.round(weather.properties.relativeHumidity.value * 100) / 100
    }%`;
  }

  let windChill = "";
  if (weather.properties.windChill.value) {
    windChill = `\nWind Chill: ${weather.properties.windChill.value}°`;
  }
  let heatIndex = "";
  if (weather.properties.heatIndex.value) {
    heatIndex = `\nHeat Index: ${weather.properties.heatIndex.value}°`;
  }

  return (
    `Current conditions (via NOAA):
${description.emoji} ${description.description}
Temperature: ${weather.properties.temperature.value}°
Visibility: ${weather.properties.visibility.value / 1000}km` +
    relativeHumidity +
    windChill +
    heatIndex
  );
}
