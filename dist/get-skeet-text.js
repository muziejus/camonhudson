import sunCalc from "suncalc";
import weatherText from "./weather/text-report.js";
export default async function (time) {
    const now = new Date().toLocaleString("en-US", {
        timeZone: "America/New_York",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        hour12: false,
        minute: "numeric",
    });
    let text = `Greetings from 🗽 on ${now}.`;
    if (time == "sunrise") {
        text = `🌅 on ${now} in New York City.`;
    }
    else if (time == "sunset") {
        text = `🌇 on ${now} in New York City.`;
    }
    else if (time == "night") {
        const moonPhase = sunCalc.getMoonIllumination(new Date()).phase;
        const moonPhases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
        let moon = moonPhases[0];
        if (moonPhase > 0 && moonPhase < 0.25) {
            moon = moonPhases[1];
        }
        else if (moonPhase == 0.25) {
            moon = moonPhases[2];
        }
        else if (moonPhase < 0.5) {
            moon = moonPhases[3];
        }
        else if (moonPhase == 0.5) {
            moon = moonPhases[4];
        }
        else if (moonPhase > 0.5 && moonPhase < 0.75) {
            moon = moonPhases[5];
        }
        else if (moonPhase == 0.75) {
            moon = moonPhases[6];
        }
        else if (moonPhase < 1) {
            moon = moonPhases[7];
        }
        text = `${moon} on ${now} in New York City.`;
    }
    const weatherReport = await weatherText("KNYC");
    return `${text}\n\n${weatherReport}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXNrZWV0LXRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0LXNrZWV0LXRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sV0FBVyxNQUFNLDBCQUEwQixDQUFDO0FBRW5ELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUNsQixJQUFpRDtJQUVqRCxNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7UUFDN0MsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixPQUFPLEVBQUUsTUFBTTtRQUNmLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLE1BQU07UUFDYixHQUFHLEVBQUUsU0FBUztRQUNkLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLEtBQUs7UUFDYixNQUFNLEVBQUUsU0FBUztLQUNsQixDQUFDLENBQUM7SUFFSCxJQUFJLElBQUksR0FBRyx3QkFBd0IsR0FBRyxHQUFHLENBQUM7SUFFMUMsSUFBSSxJQUFJLElBQUksU0FBUyxFQUFFLENBQUM7UUFDdEIsSUFBSSxHQUFHLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztJQUMxQyxDQUFDO1NBQU0sSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztJQUMxQyxDQUFDO1NBQU0sSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFLENBQUM7UUFDM0IsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDaEUsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUM7WUFDdEMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO2FBQU0sSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFLENBQUM7WUFDN0IsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO2FBQU0sSUFBSSxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDM0IsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO2FBQU0sSUFBSSxTQUFTLElBQUksR0FBRyxFQUFFLENBQUM7WUFDNUIsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO2FBQU0sSUFBSSxTQUFTLEdBQUcsR0FBRyxJQUFJLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUMvQyxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7YUFBTSxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUM3QixJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7YUFBTSxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN6QixJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztJQUMvQyxDQUFDO0lBRUQsTUFBTSxhQUFhLEdBQUcsTUFBTSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEQsT0FBTyxHQUFHLElBQUksT0FBTyxhQUFhLEVBQUUsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1bkNhbGMgZnJvbSBcInN1bmNhbGNcIjtcbmltcG9ydCB3ZWF0aGVyVGV4dCBmcm9tIFwiLi93ZWF0aGVyL3RleHQtcmVwb3J0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChcbiAgdGltZTogXCJcIiB8IFwic3VucmlzZVwiIHwgXCJzdW5zZXRcIiB8IFwibmlnaHRcIiB8IFwiZGF5XCIsXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIHRpbWVab25lOiBcIkFtZXJpY2EvTmV3X1lvcmtcIixcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICBtb250aDogXCJsb25nXCIsXG4gICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIG1pbnV0ZTogXCJudW1lcmljXCIsXG4gIH0pO1xuXG4gIGxldCB0ZXh0ID0gYEdyZWV0aW5ncyBmcm9tIPCfl70gb24gJHtub3d9LmA7XG5cbiAgaWYgKHRpbWUgPT0gXCJzdW5yaXNlXCIpIHtcbiAgICB0ZXh0ID0gYPCfjIUgb24gJHtub3d9IGluIE5ldyBZb3JrIENpdHkuYDtcbiAgfSBlbHNlIGlmICh0aW1lID09IFwic3Vuc2V0XCIpIHtcbiAgICB0ZXh0ID0gYPCfjIcgb24gJHtub3d9IGluIE5ldyBZb3JrIENpdHkuYDtcbiAgfSBlbHNlIGlmICh0aW1lID09IFwibmlnaHRcIikge1xuICAgIGNvbnN0IG1vb25QaGFzZSA9IHN1bkNhbGMuZ2V0TW9vbklsbHVtaW5hdGlvbihuZXcgRGF0ZSgpKS5waGFzZTtcbiAgICBjb25zdCBtb29uUGhhc2VzID0gW1wi8J+MkVwiLCBcIvCfjJJcIiwgXCLwn4yTXCIsIFwi8J+MlFwiLCBcIvCfjJVcIiwgXCLwn4yWXCIsIFwi8J+Ml1wiLCBcIvCfjJhcIl07XG4gICAgbGV0IG1vb24gPSBtb29uUGhhc2VzWzBdO1xuICAgIGlmIChtb29uUGhhc2UgPiAwICYmIG1vb25QaGFzZSA8IDAuMjUpIHtcbiAgICAgIG1vb24gPSBtb29uUGhhc2VzWzFdO1xuICAgIH0gZWxzZSBpZiAobW9vblBoYXNlID09IDAuMjUpIHtcbiAgICAgIG1vb24gPSBtb29uUGhhc2VzWzJdO1xuICAgIH0gZWxzZSBpZiAobW9vblBoYXNlIDwgMC41KSB7XG4gICAgICBtb29uID0gbW9vblBoYXNlc1szXTtcbiAgICB9IGVsc2UgaWYgKG1vb25QaGFzZSA9PSAwLjUpIHtcbiAgICAgIG1vb24gPSBtb29uUGhhc2VzWzRdO1xuICAgIH0gZWxzZSBpZiAobW9vblBoYXNlID4gMC41ICYmIG1vb25QaGFzZSA8IDAuNzUpIHtcbiAgICAgIG1vb24gPSBtb29uUGhhc2VzWzVdO1xuICAgIH0gZWxzZSBpZiAobW9vblBoYXNlID09IDAuNzUpIHtcbiAgICAgIG1vb24gPSBtb29uUGhhc2VzWzZdO1xuICAgIH0gZWxzZSBpZiAobW9vblBoYXNlIDwgMSkge1xuICAgICAgbW9vbiA9IG1vb25QaGFzZXNbN107XG4gICAgfVxuXG4gICAgdGV4dCA9IGAke21vb259IG9uICR7bm93fSBpbiBOZXcgWW9yayBDaXR5LmA7XG4gIH1cblxuICBjb25zdCB3ZWF0aGVyUmVwb3J0ID0gYXdhaXQgd2VhdGhlclRleHQoXCJLTllDXCIpO1xuXG4gIHJldHVybiBgJHt0ZXh0fVxcblxcbiR7d2VhdGhlclJlcG9ydH1gO1xufVxuIl19