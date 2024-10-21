import picture from "../picture.js";
export default async function post(agent, text, config) {
    const image = await picture(agent);
    const now = new Date();
    const postRecord = {
        $type: "app.bsky.feed.post",
        text,
        createdAt: now.toISOString(),
        embed: {
            images: [
                {
                    image: image.data.blob,
                    alt: `A photo of the Hudson river, at about (${config.latitude}, ${config.longitude}), taken at ${now.toLocaleString("en-US", {
                        timeZone: "America/New_York",
                    })}.`,
                },
            ],
            $type: "app.bsky.embed.images",
        },
    };
    await agent.post(postRecord);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibHVlc2t5L3Bvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBR3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FDaEMsS0FBZ0IsRUFDaEIsSUFBWSxFQUNaLE1BQXlCO0lBRXpCLE1BQU0sS0FBSyxHQUFHLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFFdkIsTUFBTSxVQUFVLEdBQUc7UUFDakIsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixJQUFJO1FBQ0osU0FBUyxFQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUU7UUFDNUIsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFO2dCQUNOO29CQUNFLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQ3RCLEdBQUcsRUFBRSwwQ0FBMEMsTUFBTSxDQUFDLFFBQVEsS0FDNUQsTUFBTSxDQUFDLFNBQ1QsZUFBZSxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDekMsUUFBUSxFQUFFLGtCQUFrQjtxQkFDN0IsQ0FBQyxHQUFHO2lCQUNOO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsdUJBQXVCO1NBQy9CO0tBQ0YsQ0FBQztJQUVGLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnNreUFnZW50IH0gZnJvbSBcIkBhdHByb3RvL2FwaVwiO1xuaW1wb3J0IHBpY3R1cmUgZnJvbSBcIi4uL3BpY3R1cmUuanNcIjtcbmltcG9ydCB7IENhbW9uaHVkc29uQ29uZmlnIH0gZnJvbSBcInNyYy9jb25maWcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcG9zdChcbiAgYWdlbnQ6IEJza3lBZ2VudCxcbiAgdGV4dDogc3RyaW5nLFxuICBjb25maWc6IENhbW9uaHVkc29uQ29uZmlnLFxuKSB7XG4gIGNvbnN0IGltYWdlID0gYXdhaXQgcGljdHVyZShhZ2VudCk7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgY29uc3QgcG9zdFJlY29yZCA9IHtcbiAgICAkdHlwZTogXCJhcHAuYnNreS5mZWVkLnBvc3RcIixcbiAgICB0ZXh0LFxuICAgIGNyZWF0ZWRBdDogbm93LnRvSVNPU3RyaW5nKCksXG4gICAgZW1iZWQ6IHtcbiAgICAgIGltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgaW1hZ2U6IGltYWdlLmRhdGEuYmxvYixcbiAgICAgICAgICBhbHQ6IGBBIHBob3RvIG9mIHRoZSBIdWRzb24gcml2ZXIsIGF0IGFib3V0ICgke2NvbmZpZy5sYXRpdHVkZX0sICR7XG4gICAgICAgICAgICBjb25maWcubG9uZ2l0dWRlXG4gICAgICAgICAgfSksIHRha2VuIGF0ICR7bm93LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICAgICAgdGltZVpvbmU6IFwiQW1lcmljYS9OZXdfWW9ya1wiLFxuICAgICAgICAgIH0pfS5gLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgICR0eXBlOiBcImFwcC5ic2t5LmVtYmVkLmltYWdlc1wiLFxuICAgIH0sXG4gIH07XG5cbiAgYXdhaXQgYWdlbnQucG9zdChwb3N0UmVjb3JkKTtcbn1cbiJdfQ==