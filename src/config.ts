import dotenv from "dotenv";

export interface CamonhudsonConfig {
  identifier: string;
  password: string;
  rate: number;
  latitude: number;
  longitude: number;
  locale: string;
}

export default function getConfig(): CamonhudsonConfig {
  dotenv.config();
  return {
    identifier: process.env.BLUESKY_BOT_IDENTIFIER as string,
    password: process.env.BLUESKY_BOT_PASSWORD as string,
    rate: parseFloat(process.env.RATE as string),
    latitude: parseFloat(process.env.LATITUDE as string),
    longitude: parseFloat(process.env.LONGITUDE as string),
    locale: "en-US",
  };
}

