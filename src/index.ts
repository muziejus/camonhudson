import dotenv from "dotenv";
import agent from "./bluesky";

dotenv.config();

const identifier = process.env.BLUESKY_BOT_IDENTIFIER as string;
const password = process.env.BLUESKY_BOT_PASSWORD as string;

// agent(identifier, password);
