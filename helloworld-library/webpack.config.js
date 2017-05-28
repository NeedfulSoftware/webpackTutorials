var path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    library: "NeedfulSoftwareHelloWorldLibrary",
    libraryTarget: "umd",
    filename: "needfulsoftware-helloworld-library.js",
    path: path.resolve(__dirname, "dist")
  }
}
