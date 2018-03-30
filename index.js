var React = require('react')

module.exports = NoUpdate

NoUpdate.prototype = Object.create(React.Component.prototype)
function NoUpdate (props) {
  React.Component.call(this, props)
}

NoUpdate.prototype.componentShouldUpdate = function () {
  return false
}

NoUpdate.prototype.render = function render () {
  return this.props.render()
}
