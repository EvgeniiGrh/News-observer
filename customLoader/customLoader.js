module.exports = function (source) {
  if (this.cacheable) this.cacheable();

  var value = typeof source === "string" ? JSON.parse(source) : source;

  Object.keys(value).forEach((attribute, i) => {
    if (!isNaN(+attribute)) {
      delete value[attribute];
    }
  })

  value = JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `${value}`;
}