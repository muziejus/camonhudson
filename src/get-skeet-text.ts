export default function(time: "sunrise" | "sunset" | "post"){
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
  
  if(time == "sunrise"){
    return `🌅 on ${now} in New York City.`;
  }

  if(time == "sunset"){
    return `🌇 on ${now} in New York City.`;
  }
  
  return `Greetings from 🗽 on ${now}.`;
}
