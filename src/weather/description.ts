
interface WeatherDescription {
  description: string;
  emoji: string;
}

export default function(weather: string): WeatherDescription {
  const weatherDescriptions: Record<string, WeatherDescription> = {
        "skc": {
            "description": "Fair/clear",
            "emoji": "🌞" 
        },
        "few": {
            "description": "A few clouds",
            "emoji": "🌤️"
        },
        "sct": {
            "description": "Partly cloudy",
            "emoji": "⛅️" 
        },
        "bkn": {
            "description": "Mostly cloudy",
            "emoji": "🌥️"
        },
        "ovc": {
            "description": "Overcast",
            "emoji": "☁️"
        },
        "wind_skc": {
            "description": "Fair/clear and windy",
            "emoji": "🌞🌬️" 
        },
        "wind_few": {
            "description": "A few clouds and windy",
            "emoji": "🌤️🌬️"
        },
        "wind_sct": {
            "description": "Partly cloudy and windy",
            "emoji": "⛅️🌬️" 
        },
        "wind_bkn": {
            "description": "Mostly cloudy and windy",
            "emoji": "🌥️🌬️"
        },
        "wind_ovc": {
            "description": "Overcast and windy",
            "emoji": "☁️🌬️"
        },
        "snow": {
            "description": "Snow",
            "emoji": "❄️"
        },
        "rain_snow": {
            "description": "Rain/snow",
            "emoji": "🌧️❄️"
        },
        "rain_sleet": {
            "description": "Rain/sleet",
            "emoji": "🌧️🌨️"
        },
        "snow_sleet": {
            "description": "Snow/sleet",
            "emoji": "❄️🌨️"
        },
        "fzra": {
            "description": "Freezing rain",
            "emoji": "🌧️❄️"
        },
        "rain_fzra": {
            "description": "Rain/freezing rain",
            "emoji": "🌧️❄️"
        },
        "snow_fzra": {
            "description": "Freezing rain/snow",
            "emoji": "❄️🌧️"
        },
        "sleet": {
            "description": "Sleet",
            "emoji": "🌨️"
        },
        "rain": {
            "description": "Rain",
            "emoji": "🌧️"
        },
        "rain_showers": {
            "description": "Rain showers (high cloud cover)",
            "emoji": "🌧️"
        },
        "rain_showers_hi": {
            "description": "Rain showers (low cloud cover)",
            "emoji": "🌧️"
        },
        "tsra": {
            "description": "Thunderstorm (high cloud cover)",
            "emoji": "🌩️"
        },
        "tsra_sct": {
            "description": "Thunderstorm (medium cloud cover)",
            "emoji": "🌩️"
        },
        "tsra_hi": {
            "description": "Thunderstorm (low cloud cover)",
            "emoji": "🌩️"
        },
        "tornado": {
            "description": "Tornado",
            "emoji": "🌪️"
        },
        "hurricane": {
            "description": "Hurricane conditions",
            "emoji": "🌀"
        },
        "tropical_storm": {
            "description": "Tropical storm conditions",
            "emoji": "🌀"
        },
        "dust": {
            "description": "Dust",
            "emoji": "🌫️"
        },
        "smoke": {
            "description": "Smoke",
            "emoji": "🌫️"
        },
        "haze": {
            "description": "Haze",
            "emoji": "🌫️"
        },
        "hot": {
            "description": "Hot",
            "emoji": "🔥"
        },
        "cold": {
            "description": "Cold",
            "emoji": "❄️"
        },
        "blizzard": {
            "description": "Blizzard",
            "emoji": "☃️"
        },
        "fog": {
            "description": "Fog/mist",
            "emoji": "🌫️"
        }
    }

  if(Object.keys(weatherDescriptions).includes(weather)) {
    return weatherDescriptions[weather];
  }

  return {
    description: "Unknown",
    emoji: "❓"
  }
}
