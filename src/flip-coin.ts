import sunCalc from "suncalc";

export default function(rate: number, latitude: number, longitude: number){
  const now = new Date();
  const times = sunCalc.getTimes(new Date(), latitude, longitude);

  if(+now - +times.sunrise < 120000 && +now - +times.sunrise > 0){
    return "sunrise";
  }

  if(+now - +times.sunset > -120000 && +now - +times.sunset < 0){
    return "sunset";
  }

  if(Math.random() < rate){
    return "post";
  }

  return "";
}
