import agent from "./bluesky/agent";
import post from "./bluesky/post";
import getConfig from "./config";
import flipCoin from "./flip-coin";
import getSkeetText from "./get-skeet-text";

const config = getConfig();

const doIRun = flipCoin(config.rate, config.latitude, config.longitude);
//const doIRun = "post";

if(doIRun){
  const text = getSkeetText(doIRun);
  agent(config)
    .then(bskyAgent => post(bskyAgent, text, config));
}
