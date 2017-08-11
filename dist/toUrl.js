'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _typeof = typeof Symbol === 'function' &&
  typeof Symbol.iterator === 'symbol'
  ? function(obj) {
      return typeof obj
    }
  : function(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }

var _reduxFirstRouter = require('redux-first-router')

var babelPluginFlowReactPropTypes_proptype_RoutesMap =
  require('redux-first-router')
    .babelPluginFlowReactPropTypes_proptype_RoutesMap ||
  require('prop-types').any

if (typeof exports !== 'undefined')
  Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_To', {
    value: require('prop-types').oneOfType([
      require('prop-types').string,
      require('prop-types').arrayOf(require('prop-types').string),
      require('prop-types').object
    ]),
    configurable: true
  })

exports.default = function(to, routesMap) {
  if (to && typeof to === 'string') {
    return to
  } else if (Array.isArray(to)) {
    return '/' + to.join('/')
  } else if (
    (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object'
  ) {
    var action = to

    try {
      var _getOptions = (0, _reduxFirstRouter.getOptions)(),
        querySerializer = _getOptions.querySerializer

      return (0, _reduxFirstRouter.actionToPath)(
        action,
        routesMap,
        querySerializer
      )
    } catch (e) {
      console.warn(
        '[redux-first-router-link] could not create path from action:',
        action,
        'For reference, here are your current routes:',
        routesMap
      )

      return '#'
    }
  }

  console.warn(
    '[redux-first-router-link] `to` prop must be a string, array or action object. You provided:',
    to
  )
  return '#'
}
