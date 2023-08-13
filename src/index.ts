import dotenv from "dotenv";
import agent from "./bluesky/agent";
// import post from "./bluesky/post";

dotenv.config();

const identifier = process.env.BLUESKY_BOT_IDENTIFIER as string;
const password = process.env.BLUESKY_BOT_PASSWORD as string;

// const bskyAgent = await 
//
agent(identifier, password)//.then(bskyAgent => post(bskyAgent));

// post(bskyAgent);
