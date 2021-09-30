const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

const getAllJSFiles = (directory, files) => {
  fs.readdirSync(directory).forEach((file) => {
    const absolutePath = path.join(directory, file);
    if (fs.statSync(absolutePath).isDirectory()) {
      return getAllJSFiles(absolutePath, files);
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

const minifyJS = async (fileName) => {
  const fileContents = fs.readFileSync(fileName, { encoding: 'utf8' });
  const result = await minify(fileContents);
  if (result.code) {
    const newPath = fileName.replace('src/assets/js', 'dist/assets/js');
    ensureDirectoryExists(newPath);
    fs.writeFileSync(newPath, result.code);
  }
};

const files = getAllJSFiles('src/assets/js', []).filter((file) => file.endsWith('.js') || file.endsWith('.mjs'));
files.forEach(minifyJS);
