import { BskyAgent } from "@atproto/api";
import PiCamera from "pi-camera";
import fs from "fs";

export default async function picture(agent: BskyAgent){
  const output = `${__dirname}/photo.png`;

  const camera = new PiCamera({
    mode: "photo",
    output,
    width: 1920,
    height: 1080,
    nopreview: true
  });
  await camera.snap()
  // const image = fs.readFileSync("camonhudson-test.png");
  const image = fs.readFileSync(output);
  return agent.uploadBlob(image, {encoding: "image/png"});
}
