import agent from "./bluesky/agent.js";
import post from "./bluesky/post.js";
import getConfig from "./config.js";
import flipCoin from "./flip-coin.js";
import getSkeetText from "./get-skeet-text.js";

if (process.argv.includes("test")) {
  console.log("Running in testing mode\n\n");
  if (process.argv.includes("night")) {
    getSkeetText("night").then((text: string) => console.log(text));
  } else {
    getSkeetText("day").then((text: string) => console.log(text));
  }
} else if (process.argv.includes("post")) {
  console.log("Forcing a post\n\n");
  const config = getConfig();

  const doIRun = flipCoin(1, config.latitude, config.longitude);
  const text = await getSkeetText(doIRun);
  console.log(text);
  agent(config).then((bskyAgent) => post(bskyAgent, text, config));
} else {
  const config = getConfig();

  const doIRun = flipCoin(config.rate, config.latitude, config.longitude);

  if (doIRun) {
    const text = await getSkeetText(doIRun);
    agent(config).then((bskyAgent) => post(bskyAgent, text, config));
  }
}
