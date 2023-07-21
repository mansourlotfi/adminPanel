// for github pages only
const repo = "adminPanel";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

module.exports = {
  images: {
    loader: "akamai",
    path: basePath,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
};
// for github pages only

// module.exports = {
//   output: "export",
//   trailingSlash: true,
//   reactStrictMode: true,
// };
