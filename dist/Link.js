'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.Link = undefined

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _propTypes = require('prop-types')

var _propTypes2 = _interopRequireDefault(_propTypes)

var _reactRedux = require('react-redux')

var _reduxFirstRouter = require('redux-first-router')

var _toUrl = require('./toUrl')

var _toUrl2 = _interopRequireDefault(_toUrl)

var _handlePress = require('./handlePress')

var _handlePress2 = _interopRequireDefault(_handlePress)

var _preventDefault = require('./preventDefault')

var _preventDefault2 = _interopRequireDefault(_preventDefault)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _objectWithoutProperties(obj, keys) {
  var target = {}
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }
  return target
}

var babelPluginFlowReactPropTypes_proptype_Store =
  require('redux').babelPluginFlowReactPropTypes_proptype_Store ||
  require('prop-types').any

var babelPluginFlowReactPropTypes_proptype_Connector =
  require('react-redux').babelPluginFlowReactPropTypes_proptype_Connector ||
  require('prop-types').any

var babelPluginFlowReactPropTypes_proptype_To =
  require('./toUrl').babelPluginFlowReactPropTypes_proptype_To ||
  require('prop-types').any

var babelPluginFlowReactPropTypes_proptype_OnClick =
  require('./handlePress').babelPluginFlowReactPropTypes_proptype_OnClick ||
  require('prop-types').any

var Link = function Link(_ref, _ref2) {
  var store = _ref2.store

  var to = _ref.to,
    href = _ref.href,
    redirect = _ref.redirect,
    replace = _ref.replace,
    children = _ref.children,
    onPress = _ref.onPress,
    onClick = _ref.onClick,
    _ref$down = _ref.down,
    down = _ref$down === undefined ? false : _ref$down,
    _ref$shouldDispatch = _ref.shouldDispatch,
    shouldDispatch = _ref$shouldDispatch === undefined
      ? true
      : _ref$shouldDispatch,
    target = _ref.target,
    dispatch = _ref.dispatch,
    props = _objectWithoutProperties(_ref, [
      'to',
      'href',
      'redirect',
      'replace',
      'children',
      'onPress',
      'onClick',
      'down',
      'shouldDispatch',
      'target',
      'dispatch'
    ])

  to = href || to // href is deprecated and will be removed in next major version

  var location = (0, _reduxFirstRouter.selectLocationState)(store.getState())
  var routesMap = location.routesMap

  var url = (0, _toUrl2.default)(to, routesMap)
  var handler = _handlePress2.default.bind(
    null,
    url,
    routesMap,
    onPress || onClick,
    shouldDispatch,
    target,
    dispatch,
    to,
    replace || redirect
  )

  return _react2.default.createElement(
    'a',
    _extends(
      {
        href: url,
        onClick: (!down && handler) || _preventDefault2.default,
        onMouseDown: down && handler,
        onTouchStart: down && handler,
        target: target
      },
      props
    ),
    children
  )
}

Link.propTypes = {
  dispatch: require('prop-types').func.isRequired,
  to: typeof babelPluginFlowReactPropTypes_proptype_To === 'function'
    ? babelPluginFlowReactPropTypes_proptype_To.isRequired
        ? babelPluginFlowReactPropTypes_proptype_To.isRequired
        : babelPluginFlowReactPropTypes_proptype_To
    : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_To)
        .isRequired,
  href: typeof babelPluginFlowReactPropTypes_proptype_To === 'function'
    ? babelPluginFlowReactPropTypes_proptype_To
    : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_To),
  redirect: require('prop-types').bool,
  replace: require('prop-types').bool,
  children: require('prop-types').any,
  onPress: typeof babelPluginFlowReactPropTypes_proptype_OnClick === 'function'
    ? babelPluginFlowReactPropTypes_proptype_OnClick
    : require('prop-types').shape(
        babelPluginFlowReactPropTypes_proptype_OnClick
      ),
  onClick: typeof babelPluginFlowReactPropTypes_proptype_OnClick === 'function'
    ? babelPluginFlowReactPropTypes_proptype_OnClick
    : require('prop-types').shape(
        babelPluginFlowReactPropTypes_proptype_OnClick
      ),
  down: require('prop-types').bool,
  shouldDispatch: require('prop-types').bool,
  target: require('prop-types').string
}
exports.Link = Link
Link.contextTypes = {
  store: _propTypes2.default.object.isRequired
}

var connector = (0, _reactRedux.connect)()

// $FlowIgnore
exports.default = connector(Link)
