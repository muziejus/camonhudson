import sunCalc from "suncalc";

export default function (time: "sunrise" | "sunset" | "night" | "day") {
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

  if (time == "sunrise") {
    return `🌅 on ${now} in New York City.`;
  }

  if (time == "sunset") {
    return `🌇 on ${now} in New York City.`;
  }

  if (time == "night") {
    const moonPhase = sunCalc.getMoonIllumination(new Date()).phase;
    const moonPhases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
    let moon = moonPhases[0];
    if (moonPhase > 0 && moonPhase < 0.25) {
      moon = moonPhases[1];
    } else if (moonPhase == 0.25) {
      moon = moonPhases[2];
    } else if (moonPhase < 0.5) {
      moon = moonPhases[3];
    } else if (moonPhase == 0.5) {
      moon = moonPhases[4];
    } else if (moonPhase > 0.5 && moonPhase < 0.75) {
      moon = moonPhases[5];
    } else if (moonPhase == 0.75) {
      moon = moonPhases[6];
    } else if (moonPhase < 1) {
      moon = moonPhases[7];
    }

    return `${moon} on ${now} in New York City.`;
  }

  return `Greetings from 🗽 on ${now}.`;
}
