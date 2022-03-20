
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/usr/local/app/other/koa-booster-page/.cache/dev-404-page.js")),
  "component---src-templates-docs-js": preferDefault(require("/usr/local/app/other/koa-booster-page/src/templates/docs.js"))
}

