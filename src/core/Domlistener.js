import {getEventType} from '@core/utils';

export class Domlistener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('Для нового компонента не создана Dom-нода')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListener() {
    this.listeners.forEach(listener => {
      const metod = getEventType(listener)
      if (!this[metod]) {
        throw new Error(`${metod} не задан в компоненте ${this.name || ''}`)
      }
      this[metod] = this[metod].bind(this)
      this.$root.on(listener, this[metod])
    })
  }
  removeDOMListener() {
    this.listeners.forEach(listener => {
      const metod = getEventType(listener)
      this.$root.off(listener, this[metod].bind(this))
    })
  }
}
