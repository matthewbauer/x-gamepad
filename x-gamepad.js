/* global HTMLElement */

import standard_gamepad from './standard_gamepad.svg!text'

export default document.registerElement('x-gamepad', class extends HTMLElement {
  createdCallback () {
    this.id = 'x-gamepad'
    this.connected = false
    this.mapping = 'standard'
    this.axes = []
    this.buttons = []
    for (let button = 0; button <= 16; button++) {
      this.buttons[button] = {pressed: false}
    }
    this.innerHTML = standard_gamepad
    this.svg = this.children[0]
  }
  attachedCallback () {
    this.connected = true
    for (let button in this.buttons) {
      if (this.svg.getElementById('button-' + button)) {
        this.svg.getElementById('button-' + button)
        .addEventListener('mousedown', function (button) {
          button.pressed = true
        }.bind(this, this.buttons[button]))
        this.svg.getElementById('button-' + button)
        .addEventListener('mouseup', function (button) {
          button.pressed = false
        }.bind(this, this.buttons[button]))
      }
    }
  }
  detachedCallback () {
    this.connected = false
    for (let button in this.buttons) {
      if (this.svg.getElementById('button-' + button)) {
        this.svg.removeEventListener('mousedown')
        this.svg.removeEventListener('mouseup')
      }
    }
  }
})
