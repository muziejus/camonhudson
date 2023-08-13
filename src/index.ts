import agent from "./bluesky/agent";
import post from "./bluesky/post";
import getConfig from "./config";
import flipCoin from "./flip-coin";
import getSkeetText from "./get-skeet-text";

const config = getConfig();

// const doIRun = flipCoin(rate, latitude, longitude);
const doIRun = "post";

if(doIRun){
  const text = getSkeetText(doIRun);
  console.log(text);
  agent(config)
    .then(bskyAgent => post(bskyAgent, text, config));
}

