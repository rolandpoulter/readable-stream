// for now just expose the builtin process global from node.js
const process = global.process || globalThis.process || this.process || {}
module.exports = process
function nextTick(f, ...args) {
  const fn = () => {
    f(...args)
  }
  if (typeof queueMicrotask !== 'undefined') {
    queueMicrotask(fn)
  } else {
    setTimeout(fn, 0)
  }
}
process.nextTick = process.nextTick || nextTick
