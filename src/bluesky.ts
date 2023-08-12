import { RichText, BskyAgent } from "@atproto/api";

export default async function agent(identifier: string, password: string) {
  const agent = new BskyAgent({ service: "https://bsky.social/"});
  await agent.login({
    identifier,
    password
  });

  const rt = new RichText({text: `Test @moacir.com. What is up. ${new Date().toISOString()}`});
  await rt.detectFacets(agent);
  const postRecord = {
    $type: 'app.bsky.feed.post',
    text: rt.text,
    facets: rt.facets,
    createdAt: new Date().toISOString()
  };

  await agent.post(postRecord);
}
