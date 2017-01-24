# observe-resize [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Trigger a callback when an element is resized. Adapted from
[simple-element-resize-detector][serd]. Relies on the `browserify.transform`
field to be respected.

## Usage
```js
var observeResize = require('observe-resize')
var html = require('bel')

var el = html`<div>hello planet</div>`
document.body.appendChild(el)

// observers should only be added _after_ the element is rendered on the DOM,
// else it displeases the browser emperors and they _will_ warn you
var stop = observeResize(el, function () {
  console.log('resized')
  stop()
})
```

## API
### stopObserving = observeResize(el, callback)
Observe resize events on the specified element. This event is throttled by
`requestAnimationFrame`. In most cases you'd probably still want to use a
`debounce` function to throttle changes, as resize events can be rather
volatile otherwise.

### stopObserving
Unbind the observer from the element.

## Installation
```sh
$ npm install observe-resize
```

## See Also
- [mdn/Events/resize](https://developer.mozilla.org/en-US/docs/Web/Events/resize)

## Similar Packages
- [simple-element-resize-detector][serd]
- [javascript-detect-element-resize](https://github.com/sdecima/javascript-detect-element-resize)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/observe-resize.svg?style=flat-square
[3]: https://npmjs.org/package/observe-resize
[4]: https://img.shields.io/travis/yoshuawuyts/observe-resize/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/observe-resize
[8]: http://img.shields.io/npm/dm/observe-resize.svg?style=flat-square
[9]: https://npmjs.org/package/observe-resize
[10]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard

[serd]: https://github.com/developit/simple-element-resize-detector
