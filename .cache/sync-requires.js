const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/home/nreek/Development/hensmarques.github.io/src/templates/post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/nreek/Development/hensmarques.github.io/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/nreek/Development/hensmarques.github.io/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/nreek/Development/hensmarques.github.io/src/pages/page-2.js")))
}

