import {Domlistener} from '@core/Domlistener';

export class Maincomponent extends Domlistener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }


  toHTML() {
    return ''
  }

  init() {
    this.initDOMListener()
  }

  destroy() {
    this.removeDOMListener()
  }
}
