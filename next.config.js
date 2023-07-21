module.exports = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  //this options is for deplying in github pages , comment it for your hosting
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};
