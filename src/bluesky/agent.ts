import { RichText, BskyAgent } from "@atproto/api";
import fs from "fs";
import picture from "../picture";

export default async function agent(identifier: string, password: string) {
  const agent = new BskyAgent({ service: "https://bsky.social/"});
  await agent.login({
    identifier,
    password
  });

  const image = await picture(agent);

  const rt = new RichText({text: `Test @moacir.com. What is up. ${new Date().toISOString()}`});
  await rt.detectFacets(agent);
  const postRecord = {
    $type: 'app.bsky.feed.post',
    text: rt.text,
    facets: rt.facets,
    createdAt: new Date().toISOString(),
    embed: {
      images: [
        {
          image: image.data.blob,
          alt: "test upload alt text",
        },
      ],
      $type: "app.bsky.embed.images",
    },
  };

  // await agent.post(postRecord);
}
