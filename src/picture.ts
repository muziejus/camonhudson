import { BskyAgent } from "@atproto/api";
import fs from "fs";

export default async function picture(agent: BskyAgent){
  const image = fs.readFileSync("camonhudson-test.png");
  return agent.uploadBlob(image, {encoding: "image/png"});
}
