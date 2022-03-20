
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-templates-docs-js": preferDefault(require("/usr/local/app/other/koa-booster-page/src/templates/docs.js"))
}

