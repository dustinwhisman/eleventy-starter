import { ImagePool } from "@squoosh/lib";
import { cpus } from "os";
import fs from "fs";
import path from "path";

const imagePool = new ImagePool(cpus().length);

const getAllImages = (directory, files) => {
  fs.readdirSync(directory).forEach((file) => {
    const absolutePath = path.join(directory, file);
    if (fs.statSync(absolutePath).isDirectory()) {
      return getAllImages(absolutePath, files);
    }

    files.push(absolutePath);
  });

  return files;
};

const ensureDirectoryExists = (filePath) => {
  var directoryName = path.dirname(filePath);
  if (fs.existsSync(directoryName)) {
    return;
  }

  ensureDirectoryExists(directoryName);
  fs.mkdirSync(directoryName);
};

const optimizeImage = async (fileName, width) => {
  const file = fs.readFileSync(fileName);

  try {
    const image = imagePool.ingestImage(file);

    await image.decoded;

    let preprocessOptions = {};

    if (width) {
      preprocessOptions = {
        resize: {
          enabled: true,
          width,
        },
      };
    }
    await image.preprocess(preprocessOptions);

    const encodeOptions = {
      mozjpeg: {},
      webp: {},
      avif: {},
      oxipng: {},
    };
    await image.encode(encodeOptions);

    for (const encodedImage of Object.values(image.encodedWith)) {
      const fileInfo = path.parse(fileName);
      const newPath = path.join(
        fileInfo.dir.replace("src", "dist"),
        `${fileInfo.name}`
      );
      ensureDirectoryExists(newPath);
      const newImage = await encodedImage;

      fs.writeFileSync(
        `${newPath}${width ? `_${width}` : ""}.${newImage.extension}`,
        newImage.binary
      );
    }
  } catch (error) {

    const fileInfo = path.parse(fileName);
    const newPath = path.join(
      fileInfo.dir.replace("src", "dist"),
      `${fileInfo.name}${fileInfo.ext}`
    );
    ensureDirectoryExists(newPath);
    fs.writeFileSync(newPath, file);
  } finally {
    return;
  }
};

const files = getAllImages("src/assets/images", []).filter(
  (file) => !file.endsWith(".gitkeep")
);

Promise.all(
  files.map(async (file) => {
    await optimizeImage(file, 400);
    await optimizeImage(file, 800);
    await optimizeImage(file, 1200);
    await optimizeImage(file, null);

    return true;
  })
).finally(() => {
  imagePool.close();
  process.exit();
});
