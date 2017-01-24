var observeResize = require('./')
var css = require('sheetify')
var html = require('bel')

var elStyles = css`
  :host {
    color: white;
    background-color: black;
    height: 110vh;
    width: 100vw;
  }
`

var el = html`
  <div class=${elStyles}>hello planet</div>
`

var tree = html`
  <section>
    <button onclick=${onclick}>stop observing</button>
    ${el}
  </section>
`

document.body.appendChild(tree)

var stop = observeResize(el, function (el) {
  console.info('resize observed', el)
})

function onclick () {
  console.info('stopped observing')
  stop()
}
