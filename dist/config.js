import dotenv from "dotenv";
export default function getConfig() {
    dotenv.config();
    return {
        identifier: process.env.BLUESKY_BOT_IDENTIFIER,
        password: process.env.BLUESKY_BOT_PASSWORD,
        rate: parseFloat(process.env.RATE),
        latitude: parseFloat(process.env.LATITUDE),
        longitude: parseFloat(process.env.LONGITUDE),
        locale: "en-US",
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFXNUIsTUFBTSxDQUFDLE9BQU8sVUFBVSxTQUFTO0lBQy9CLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixPQUFPO1FBQ0wsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQWdDO1FBQ3hELFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUE4QjtRQUNwRCxJQUFJLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBYyxDQUFDO1FBQzVDLFFBQVEsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFrQixDQUFDO1FBQ3BELFNBQVMsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFtQixDQUFDO1FBQ3RELE1BQU0sRUFBRSxPQUFPO0tBQ2hCLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2Ftb25odWRzb25Db25maWcge1xuICBpZGVudGlmaWVyOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHJhdGU6IG51bWJlcjtcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gIGxvY2FsZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb25maWcoKTogQ2Ftb25odWRzb25Db25maWcge1xuICBkb3RlbnYuY29uZmlnKCk7XG4gIHJldHVybiB7XG4gICAgaWRlbnRpZmllcjogcHJvY2Vzcy5lbnYuQkxVRVNLWV9CT1RfSURFTlRJRklFUiBhcyBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkJMVUVTS1lfQk9UX1BBU1NXT1JEIGFzIHN0cmluZyxcbiAgICByYXRlOiBwYXJzZUZsb2F0KHByb2Nlc3MuZW52LlJBVEUgYXMgc3RyaW5nKSxcbiAgICBsYXRpdHVkZTogcGFyc2VGbG9hdChwcm9jZXNzLmVudi5MQVRJVFVERSBhcyBzdHJpbmcpLFxuICAgIGxvbmdpdHVkZTogcGFyc2VGbG9hdChwcm9jZXNzLmVudi5MT05HSVRVREUgYXMgc3RyaW5nKSxcbiAgICBsb2NhbGU6IFwiZW4tVVNcIixcbiAgfTtcbn1cblxuIl19