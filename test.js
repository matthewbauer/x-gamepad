/* globals describe, it */

import GamePad from './x-gamepad'

describe('x-retro', function () {
  it('can create gamepad', function () {
    let gp = new GamePad()
    gp.setAttribute('style', 'width: 800px; height: 400px')
    document.body.appendChild(gp)
  })
})
