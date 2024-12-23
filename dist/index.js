import agent from "./bluesky/agent.js";
import post from "./bluesky/post.js";
import getConfig from "./config.js";
import flipCoin from "./flip-coin.js";
import getSkeetText from "./get-skeet-text.js";
if (process.argv.includes("test")) {
    console.log("Running in testing mode\n\n");
    if (process.argv.includes("night")) {
        getSkeetText("night").then((text) => console.log(text));
    }
    else {
        getSkeetText("day").then((text) => console.log(text));
    }
}
else if (process.argv.includes("post")) {
    console.log("Forcing a post\n\n");
    const config = getConfig();
    const doIRun = flipCoin(1, config.latitude, config.longitude);
    const text = await getSkeetText(doIRun);
    console.log(text);
    agent(config).then((bskyAgent) => post(bskyAgent, text, config));
}
else {
    const config = getConfig();
    const doIRun = flipCoin(config.rate, config.latitude, config.longitude);
    if (doIRun) {
        const text = await getSkeetText(doIRun);
        agent(config).then((bskyAgent) => post(bskyAgent, text, config));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFDdkMsT0FBTyxJQUFJLE1BQU0sbUJBQW1CLENBQUM7QUFDckMsT0FBTyxTQUFTLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sWUFBWSxNQUFNLHFCQUFxQixDQUFDO0FBRS9DLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDM0MsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ25DLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO1NBQU0sQ0FBQztRQUNOLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0FBQ0gsQ0FBQztLQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEMsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFFM0IsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RCxNQUFNLElBQUksR0FBRyxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDbkUsQ0FBQztLQUFNLENBQUM7SUFDTixNQUFNLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUUzQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV4RSxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ1gsTUFBTSxJQUFJLEdBQUcsTUFBTSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZ2VudCBmcm9tIFwiLi9ibHVlc2t5L2FnZW50LmpzXCI7XG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9ibHVlc2t5L3Bvc3QuanNcIjtcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIi4vY29uZmlnLmpzXCI7XG5pbXBvcnQgZmxpcENvaW4gZnJvbSBcIi4vZmxpcC1jb2luLmpzXCI7XG5pbXBvcnQgZ2V0U2tlZXRUZXh0IGZyb20gXCIuL2dldC1za2VldC10ZXh0LmpzXCI7XG5cbmlmIChwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoXCJ0ZXN0XCIpKSB7XG4gIGNvbnNvbGUubG9nKFwiUnVubmluZyBpbiB0ZXN0aW5nIG1vZGVcXG5cXG5cIik7XG4gIGlmIChwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoXCJuaWdodFwiKSkge1xuICAgIGdldFNrZWV0VGV4dChcIm5pZ2h0XCIpLnRoZW4oKHRleHQ6IHN0cmluZykgPT4gY29uc29sZS5sb2codGV4dCkpO1xuICB9IGVsc2Uge1xuICAgIGdldFNrZWV0VGV4dChcImRheVwiKS50aGVuKCh0ZXh0OiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHRleHQpKTtcbiAgfVxufSBlbHNlIGlmIChwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoXCJwb3N0XCIpKSB7XG4gIGNvbnNvbGUubG9nKFwiRm9yY2luZyBhIHBvc3RcXG5cXG5cIik7XG4gIGNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpO1xuXG4gIGNvbnN0IGRvSVJ1biA9IGZsaXBDb2luKDEsIGNvbmZpZy5sYXRpdHVkZSwgY29uZmlnLmxvbmdpdHVkZSk7XG4gIGNvbnN0IHRleHQgPSBhd2FpdCBnZXRTa2VldFRleHQoZG9JUnVuKTtcbiAgY29uc29sZS5sb2codGV4dCk7XG4gIGFnZW50KGNvbmZpZykudGhlbigoYnNreUFnZW50KSA9PiBwb3N0KGJza3lBZ2VudCwgdGV4dCwgY29uZmlnKSk7XG59IGVsc2Uge1xuICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcblxuICBjb25zdCBkb0lSdW4gPSBmbGlwQ29pbihjb25maWcucmF0ZSwgY29uZmlnLmxhdGl0dWRlLCBjb25maWcubG9uZ2l0dWRlKTtcblxuICBpZiAoZG9JUnVuKSB7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IGdldFNrZWV0VGV4dChkb0lSdW4pO1xuICAgIGFnZW50KGNvbmZpZykudGhlbigoYnNreUFnZW50KSA9PiBwb3N0KGJza3lBZ2VudCwgdGV4dCwgY29uZmlnKSk7XG4gIH1cbn1cbiJdfQ==