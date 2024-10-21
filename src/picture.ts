import { BskyAgent } from "@atproto/api";
import PiCamera from "pi-camera";
import fs from "fs";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function picture(agent: BskyAgent) {
  let output = `${__dirname}/photo.jpg`;

  const camera = new PiCamera({
    mode: "photo",
    output,
    width: 1920,
    height: 1080,
    nopreview: true,
  });
  try {
    await camera.snap();
  } catch (error) {
    // We're not on an rpi.
    console.log(error);
    output = "recap-image.jpg";
  }

  await sharp(output)
    .toFormat("jpeg", { mozjpeg: true })
    .toFile((output = `${__dirname}/compressed-photo.jpg`));

  let imageSize = (await fs.promises.stat(output)).size / 1024;
  let quality = 80;
  console.log(`${output} image is ${imageSize} kb.`);
  let compressedOutput = output;

  while (imageSize > 975 && quality > 0) {
    quality -= 5;
    await sharp(output)
      .toFormat("jpeg", { mozjpeg: true, quality })
      .toFile(
        (compressedOutput = `${__dirname}/q${quality}-compressed-photo.jpg`),
      );
    imageSize = (await fs.promises.stat(compressedOutput)).size / 1024;
    console.log(
      `${compressedOutput} image is ${imageSize} kb and quality is ${quality}.`,
    );
  }

  const image = fs.readFileSync(compressedOutput);
  return agent.uploadBlob(image, { encoding: "image/jpeg" });
}
