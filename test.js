/* globals describe, it */

import {expect} from 'chai'
import sinon from 'sinon'
import GamePad from './x-gamepad'

describe('x-retro', function () {
  it('can create gamepad', function () {
    let gp = new GamePad()
    document.body.appendChild(gp)
  })
})
