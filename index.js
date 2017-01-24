var insert = require('insert-css')
var assert = require('assert')
var isDom = require('is-dom')
var html = require('bel')

insert('__observe-resize__ { position: absolute; left: 0; top: -100%; width: 100%; height: 100%; margin: 1px 0 0; border: none; opacity: 0; visibility: hidden; pointer-events: none; }')

module.exports = observeResize

// Trigger a callback when an element is resized
function observeResize (el, cb) {
  assert.ok(isDom(el), 'observe-resize: el should be a valid DOM element')
  assert.equal(typeof cb, 'function', 'observe-resize: cb should be type function')

  var called = false
  var frame = html`<iframe class="__observe-resize__"></iframe>`
  el.appendChild(frame)

  assert.ok(frame.contentWindow, 'observe-resize: no contentWindow detected - cannot start observing')
  frame.contentWindow.onresize = handleResize

  return function stopObserving () {
    el.removeChild(frame)
  }

  function handleResize () {
    if (called) return
    called = true
    window.requestAnimationFrame(function () {
      called = false
      cb(el)
    })
  }
}
