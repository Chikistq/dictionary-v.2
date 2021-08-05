import {$} from '@core/Dom';

export class Dic {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }
  getRoot() {
    const $root = $.create('div', 'wrapper')

    this.components = this.components.map(Component => {
      const $node = $.create(Component.elType, Component.className)
      const component = new Component($node)
      $node.html(component.toHTML())
      // debugger
      $root.append($node)
      return component
    })
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
}
