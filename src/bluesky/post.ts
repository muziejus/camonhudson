import { BskyAgent} from "@atproto/api";
import picture from "../picture";
import { CamonhudsonConfig } from "src/config";

export default async function post(agent: BskyAgent, text: string, config: CamonhudsonConfig){
  const image = await picture(agent);
  const now = new Date();

  const postRecord = {
    $type: 'app.bsky.feed.post',
    text,
    createdAt: now.toISOString(),
    embed: {
      images: [
        {
          image: image.data.blob,
          alt: `A photo of the Hudson river, at about (${config.latitude}, ${config.longitude}), taken at ${now.toLocaleString("en-US", {timeZone: "America/New_York"})}.`,
        },
      ],
      $type: "app.bsky.embed.images",
    },
  };

  await agent.post(postRecord);
}
