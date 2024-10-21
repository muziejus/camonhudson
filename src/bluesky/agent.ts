import { BskyAgent } from "@atproto/api";
import { CamonhudsonConfig } from "src/config.js";

export default async function agent({
  identifier,
  password,
}: CamonhudsonConfig) {
  const agent = new BskyAgent({ service: "https://bsky.social/" });
  await agent.login({
    identifier,
    password,
  });

  return agent;
}
