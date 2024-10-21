import PiCamera from "pi-camera";
import fs from "fs";
import sharp from "sharp";
export default async function picture(agent) {
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
    }
    catch (error) {
        // We're not on an rpi.
        console.log(error);
        output = "recap-image.jpg";
    }
    await sharp(output)
        .toFormat("jpeg", { mozjpeg: true })
        .toFile(output = `${__dirname}/compressed-photo.jpg`);
    let imageSize = (await fs.promises.stat(output)).size / 1024;
    let quality = 80;
    console.log(`${output} image is ${imageSize} kb.`);
    let compressedOutput = output;
    while (imageSize > 975 && quality > 0) {
        quality -= 5;
        await sharp(output)
            .toFormat("jpeg", { mozjpeg: true, quality })
            .toFile(compressedOutput = `${__dirname}/q${quality}-compressed-photo.jpg`);
        imageSize = (await fs.promises.stat(compressedOutput)).size / 1024;
        console.log(`${compressedOutput} image is ${imageSize} kb and quality is ${quality}.`);
    }
    const image = fs.readFileSync(compressedOutput);
    return agent.uploadBlob(image, { encoding: "image/jpeg" });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9waWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDcEIsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxVQUFVLE9BQU8sQ0FBQyxLQUFnQjtJQUNwRCxJQUFJLE1BQU0sR0FBRyxHQUFHLFNBQVMsWUFBWSxDQUFDO0lBRXRDLE1BQU0sTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDO1FBQzFCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTTtRQUNOLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFLElBQUk7UUFDWixTQUFTLEVBQUUsSUFBSTtLQUNoQixDQUFDLENBQUM7SUFDSCxJQUFJLENBQUM7UUFDSCxNQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNmLHVCQUF1QjtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ2hCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDbEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLFNBQVMsdUJBQXVCLENBQUMsQ0FBQztJQUV4RCxJQUFJLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzdELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxhQUFhLFNBQVMsTUFBTSxDQUFDLENBQUM7SUFDbkQsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7SUFFOUIsT0FBTSxTQUFTLEdBQUcsR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ2IsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ2hCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQzNDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLFNBQVMsS0FBSyxPQUFPLHVCQUF1QixDQUFDLENBQUM7UUFDOUUsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLGFBQWEsU0FBUyxzQkFBc0IsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnNreUFnZW50IH0gZnJvbSBcIkBhdHByb3RvL2FwaVwiO1xuaW1wb3J0IFBpQ2FtZXJhIGZyb20gXCJwaS1jYW1lcmFcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBzaGFycCBmcm9tIFwic2hhcnBcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcGljdHVyZShhZ2VudDogQnNreUFnZW50KXtcbiAgbGV0IG91dHB1dCA9IGAke19fZGlybmFtZX0vcGhvdG8uanBnYDtcblxuICBjb25zdCBjYW1lcmEgPSBuZXcgUGlDYW1lcmEoe1xuICAgIG1vZGU6IFwicGhvdG9cIixcbiAgICBvdXRwdXQsXG4gICAgd2lkdGg6IDE5MjAsXG4gICAgaGVpZ2h0OiAxMDgwLFxuICAgIG5vcHJldmlldzogdHJ1ZSxcbiAgfSk7XG4gIHRyeSB7XG4gICAgYXdhaXQgY2FtZXJhLnNuYXAoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBXZSdyZSBub3Qgb24gYW4gcnBpLlxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBvdXRwdXQgPSBcInJlY2FwLWltYWdlLmpwZ1wiO1xuICB9XG5cbiAgYXdhaXQgc2hhcnAob3V0cHV0KVxuICAgIC50b0Zvcm1hdChcImpwZWdcIiwgeyBtb3pqcGVnOiB0cnVlfSlcbiAgICAudG9GaWxlKG91dHB1dCA9IGAke19fZGlybmFtZX0vY29tcHJlc3NlZC1waG90by5qcGdgKTtcblxuICBsZXQgaW1hZ2VTaXplID0gKGF3YWl0IGZzLnByb21pc2VzLnN0YXQob3V0cHV0KSkuc2l6ZSAvIDEwMjQ7XG4gIGxldCBxdWFsaXR5ID0gODA7XG4gIGNvbnNvbGUubG9nKGAke291dHB1dH0gaW1hZ2UgaXMgJHtpbWFnZVNpemV9IGtiLmApO1xuICBsZXQgY29tcHJlc3NlZE91dHB1dCA9IG91dHB1dDtcblxuICB3aGlsZShpbWFnZVNpemUgPiA5NzUgJiYgcXVhbGl0eSA+IDApe1xuICAgIHF1YWxpdHkgLT0gNTtcbiAgICBhd2FpdCBzaGFycChvdXRwdXQpXG4gICAgICAudG9Gb3JtYXQoXCJqcGVnXCIsIHsgbW96anBlZzogdHJ1ZSwgcXVhbGl0eX0pXG4gICAgICAudG9GaWxlKGNvbXByZXNzZWRPdXRwdXQgPSBgJHtfX2Rpcm5hbWV9L3Eke3F1YWxpdHl9LWNvbXByZXNzZWQtcGhvdG8uanBnYCk7XG4gICAgaW1hZ2VTaXplID0gKGF3YWl0IGZzLnByb21pc2VzLnN0YXQoY29tcHJlc3NlZE91dHB1dCkpLnNpemUgLyAxMDI0O1xuICAgIGNvbnNvbGUubG9nKGAke2NvbXByZXNzZWRPdXRwdXR9IGltYWdlIGlzICR7aW1hZ2VTaXplfSBrYiBhbmQgcXVhbGl0eSBpcyAke3F1YWxpdHl9LmApO1xuICB9XG5cbiAgY29uc3QgaW1hZ2UgPSBmcy5yZWFkRmlsZVN5bmMoY29tcHJlc3NlZE91dHB1dCk7XG4gIHJldHVybiBhZ2VudC51cGxvYWRCbG9iKGltYWdlLCB7ZW5jb2Rpbmc6IFwiaW1hZ2UvanBlZ1wifSk7XG59XG4iXX0=