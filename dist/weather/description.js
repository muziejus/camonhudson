export default function (weather) {
    const weatherDescriptions = {
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
    };
    if (Object.keys(weatherDescriptions).includes(weather)) {
        return weatherDescriptions[weather];
    }
    return {
        description: "Unknown",
        emoji: "❓"
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzY3JpcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2VhdGhlci9kZXNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxNQUFNLENBQUMsT0FBTyxXQUFVLE9BQWU7SUFDckMsTUFBTSxtQkFBbUIsR0FBdUM7UUFDMUQsS0FBSyxFQUFFO1lBQ0gsYUFBYSxFQUFFLFlBQVk7WUFDM0IsT0FBTyxFQUFFLElBQUk7U0FDaEI7UUFDRCxLQUFLLEVBQUU7WUFDSCxhQUFhLEVBQUUsY0FBYztZQUM3QixPQUFPLEVBQUUsS0FBSztTQUNqQjtRQUNELEtBQUssRUFBRTtZQUNILGFBQWEsRUFBRSxlQUFlO1lBQzlCLE9BQU8sRUFBRSxJQUFJO1NBQ2hCO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsYUFBYSxFQUFFLGVBQWU7WUFDOUIsT0FBTyxFQUFFLEtBQUs7U0FDakI7UUFDRCxLQUFLLEVBQUU7WUFDSCxhQUFhLEVBQUUsVUFBVTtZQUN6QixPQUFPLEVBQUUsSUFBSTtTQUNoQjtRQUNELFVBQVUsRUFBRTtZQUNSLGFBQWEsRUFBRSxzQkFBc0I7WUFDckMsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxVQUFVLEVBQUU7WUFDUixhQUFhLEVBQUUsd0JBQXdCO1lBQ3ZDLE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsYUFBYSxFQUFFLHlCQUF5QjtZQUN4QyxPQUFPLEVBQUUsT0FBTztTQUNuQjtRQUNELFVBQVUsRUFBRTtZQUNSLGFBQWEsRUFBRSx5QkFBeUI7WUFDeEMsT0FBTyxFQUFFLFFBQVE7U0FDcEI7UUFDRCxVQUFVLEVBQUU7WUFDUixhQUFhLEVBQUUsb0JBQW9CO1lBQ25DLE9BQU8sRUFBRSxPQUFPO1NBQ25CO1FBQ0QsTUFBTSxFQUFFO1lBQ0osYUFBYSxFQUFFLE1BQU07WUFDckIsT0FBTyxFQUFFLElBQUk7U0FDaEI7UUFDRCxXQUFXLEVBQUU7WUFDVCxhQUFhLEVBQUUsV0FBVztZQUMxQixPQUFPLEVBQUUsT0FBTztTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLGFBQWEsRUFBRSxZQUFZO1lBQzNCLE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsYUFBYSxFQUFFLFlBQVk7WUFDM0IsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxNQUFNLEVBQUU7WUFDSixhQUFhLEVBQUUsZUFBZTtZQUM5QixPQUFPLEVBQUUsT0FBTztTQUNuQjtRQUNELFdBQVcsRUFBRTtZQUNULGFBQWEsRUFBRSxvQkFBb0I7WUFDbkMsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxXQUFXLEVBQUU7WUFDVCxhQUFhLEVBQUUsb0JBQW9CO1lBQ25DLE9BQU8sRUFBRSxPQUFPO1NBQ25CO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsYUFBYSxFQUFFLE9BQU87WUFDdEIsT0FBTyxFQUFFLEtBQUs7U0FDakI7UUFDRCxNQUFNLEVBQUU7WUFDSixhQUFhLEVBQUUsTUFBTTtZQUNyQixPQUFPLEVBQUUsS0FBSztTQUNqQjtRQUNELGNBQWMsRUFBRTtZQUNaLGFBQWEsRUFBRSxpQ0FBaUM7WUFDaEQsT0FBTyxFQUFFLEtBQUs7U0FDakI7UUFDRCxpQkFBaUIsRUFBRTtZQUNmLGFBQWEsRUFBRSxnQ0FBZ0M7WUFDL0MsT0FBTyxFQUFFLEtBQUs7U0FDakI7UUFDRCxNQUFNLEVBQUU7WUFDSixhQUFhLEVBQUUsaUNBQWlDO1lBQ2hELE9BQU8sRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsYUFBYSxFQUFFLG1DQUFtQztZQUNsRCxPQUFPLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNQLGFBQWEsRUFBRSxnQ0FBZ0M7WUFDL0MsT0FBTyxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDUCxhQUFhLEVBQUUsU0FBUztZQUN4QixPQUFPLEVBQUUsS0FBSztTQUNqQjtRQUNELFdBQVcsRUFBRTtZQUNULGFBQWEsRUFBRSxzQkFBc0I7WUFDckMsT0FBTyxFQUFFLElBQUk7U0FDaEI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNkLGFBQWEsRUFBRSwyQkFBMkI7WUFDMUMsT0FBTyxFQUFFLElBQUk7U0FDaEI7UUFDRCxNQUFNLEVBQUU7WUFDSixhQUFhLEVBQUUsTUFBTTtZQUNyQixPQUFPLEVBQUUsS0FBSztTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNMLGFBQWEsRUFBRSxPQUFPO1lBQ3RCLE9BQU8sRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsTUFBTSxFQUFFO1lBQ0osYUFBYSxFQUFFLE1BQU07WUFDckIsT0FBTyxFQUFFLEtBQUs7U0FDakI7UUFDRCxLQUFLLEVBQUU7WUFDSCxhQUFhLEVBQUUsS0FBSztZQUNwQixPQUFPLEVBQUUsSUFBSTtTQUNoQjtRQUNELE1BQU0sRUFBRTtZQUNKLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLE9BQU8sRUFBRSxJQUFJO1NBQ2hCO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsYUFBYSxFQUFFLFVBQVU7WUFDekIsT0FBTyxFQUFFLElBQUk7U0FDaEI7UUFDRCxLQUFLLEVBQUU7WUFDSCxhQUFhLEVBQUUsVUFBVTtZQUN6QixPQUFPLEVBQUUsS0FBSztTQUNqQjtLQUNKLENBQUE7SUFFSCxJQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN0RCxPQUFPLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLFNBQVM7UUFDdEIsS0FBSyxFQUFFLEdBQUc7S0FDWCxDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW50ZXJmYWNlIFdlYXRoZXJEZXNjcmlwdGlvbiB7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGVtb2ppOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHdlYXRoZXI6IHN0cmluZyk6IFdlYXRoZXJEZXNjcmlwdGlvbiB7XG4gIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbnM6IFJlY29yZDxzdHJpbmcsIFdlYXRoZXJEZXNjcmlwdGlvbj4gPSB7XG4gICAgICAgIFwic2tjXCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGYWlyL2NsZWFyXCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi8J+MnlwiIFxuICAgICAgICB9LFxuICAgICAgICBcImZld1wiOiB7XG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBmZXcgY2xvdWRzXCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi8J+MpO+4j1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwic2N0XCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQYXJ0bHkgY2xvdWR5XCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi4puF77iPXCIgXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmtuXCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNb3N0bHkgY2xvdWR5XCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi8J+Mpe+4j1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZjXCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPdmVyY2FzdFwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIuKYge+4j1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZF9za2NcIjoge1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkZhaXIvY2xlYXIgYW5kIHdpbmR5XCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi8J+MnvCfjKzvuI9cIiBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ3aW5kX2Zld1wiOiB7XG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBmZXcgY2xvdWRzIGFuZCB3aW5keVwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIvCfjKTvuI/wn4ys77iPXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ3aW5kX3NjdFwiOiB7XG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUGFydGx5IGNsb3VkeSBhbmQgd2luZHlcIixcbiAgICAgICAgICAgIFwiZW1vamlcIjogXCLim4XvuI/wn4ys77iPXCIgXG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZF9ia25cIjoge1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1vc3RseSBjbG91ZHkgYW5kIHdpbmR5XCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi8J+Mpe+4j/CfjKzvuI9cIlxuICAgICAgICB9LFxuICAgICAgICBcIndpbmRfb3ZjXCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPdmVyY2FzdCBhbmQgd2luZHlcIixcbiAgICAgICAgICAgIFwiZW1vamlcIjogXCLimIHvuI/wn4ys77iPXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzbm93XCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTbm93XCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi4p2E77iPXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyYWluX3Nub3dcIjoge1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJhaW4vc25vd1wiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIvCfjKfvuI/inYTvuI9cIlxuICAgICAgICB9LFxuICAgICAgICBcInJhaW5fc2xlZXRcIjoge1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJhaW4vc2xlZXRcIixcbiAgICAgICAgICAgIFwiZW1vamlcIjogXCLwn4yn77iP8J+MqO+4j1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwic25vd19zbGVldFwiOiB7XG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU25vdy9zbGVldFwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIuKdhO+4j/CfjKjvuI9cIlxuICAgICAgICB9LFxuICAgICAgICBcImZ6cmFcIjoge1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkZyZWV6aW5nIHJhaW5cIixcbiAgICAgICAgICAgIFwiZW1vamlcIjogXCLwn4yn77iP4p2E77iPXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyYWluX2Z6cmFcIjoge1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJhaW4vZnJlZXppbmcgcmFpblwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIvCfjKfvuI/inYTvuI9cIlxuICAgICAgICB9LFxuICAgICAgICBcInNub3dfZnpyYVwiOiB7XG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRnJlZXppbmcgcmFpbi9zbm93XCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi4p2E77iP8J+Mp++4j1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwic2xlZXRcIjoge1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNsZWV0XCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi8J+MqO+4j1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmFpblwiOiB7XG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmFpblwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIvCfjKfvuI9cIlxuICAgICAgICB9LFxuICAgICAgICBcInJhaW5fc2hvd2Vyc1wiOiB7XG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmFpbiBzaG93ZXJzIChoaWdoIGNsb3VkIGNvdmVyKVwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIvCfjKfvuI9cIlxuICAgICAgICB9LFxuICAgICAgICBcInJhaW5fc2hvd2Vyc19oaVwiOiB7XG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUmFpbiBzaG93ZXJzIChsb3cgY2xvdWQgY292ZXIpXCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi8J+Mp++4j1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwidHNyYVwiOiB7XG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGh1bmRlcnN0b3JtIChoaWdoIGNsb3VkIGNvdmVyKVwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIvCfjKnvuI9cIlxuICAgICAgICB9LFxuICAgICAgICBcInRzcmFfc2N0XCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaHVuZGVyc3Rvcm0gKG1lZGl1bSBjbG91ZCBjb3ZlcilcIixcbiAgICAgICAgICAgIFwiZW1vamlcIjogXCLwn4yp77iPXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0c3JhX2hpXCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaHVuZGVyc3Rvcm0gKGxvdyBjbG91ZCBjb3ZlcilcIixcbiAgICAgICAgICAgIFwiZW1vamlcIjogXCLwn4yp77iPXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3JuYWRvXCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUb3JuYWRvXCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi8J+Mqu+4j1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaHVycmljYW5lXCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIdXJyaWNhbmUgY29uZGl0aW9uc1wiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIvCfjIBcIlxuICAgICAgICB9LFxuICAgICAgICBcInRyb3BpY2FsX3N0b3JtXCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUcm9waWNhbCBzdG9ybSBjb25kaXRpb25zXCIsXG4gICAgICAgICAgICBcImVtb2ppXCI6IFwi8J+MgFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZHVzdFwiOiB7XG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRHVzdFwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIvCfjKvvuI9cIlxuICAgICAgICB9LFxuICAgICAgICBcInNtb2tlXCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTbW9rZVwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIvCfjKvvuI9cIlxuICAgICAgICB9LFxuICAgICAgICBcImhhemVcIjoge1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkhhemVcIixcbiAgICAgICAgICAgIFwiZW1vamlcIjogXCLwn4yr77iPXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJob3RcIjoge1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkhvdFwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIvCflKVcIlxuICAgICAgICB9LFxuICAgICAgICBcImNvbGRcIjoge1xuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbGRcIixcbiAgICAgICAgICAgIFwiZW1vamlcIjogXCLinYTvuI9cIlxuICAgICAgICB9LFxuICAgICAgICBcImJsaXp6YXJkXCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCbGl6emFyZFwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIuKYg++4j1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZm9nXCI6IHtcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGb2cvbWlzdFwiLFxuICAgICAgICAgICAgXCJlbW9qaVwiOiBcIvCfjKvvuI9cIlxuICAgICAgICB9XG4gICAgfVxuXG4gIGlmKE9iamVjdC5rZXlzKHdlYXRoZXJEZXNjcmlwdGlvbnMpLmluY2x1ZGVzKHdlYXRoZXIpKSB7XG4gICAgcmV0dXJuIHdlYXRoZXJEZXNjcmlwdGlvbnNbd2VhdGhlcl07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRlc2NyaXB0aW9uOiBcIlVua25vd25cIixcbiAgICBlbW9qaTogXCLinZNcIlxuICB9XG59XG4iXX0=