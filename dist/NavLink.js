'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

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

var _rudyMatchPath = require('rudy-match-path')

var _rudyMatchPath2 = _interopRequireDefault(_rudyMatchPath)

var _reduxFirstRouter = require('redux-first-router')

var _Link = require('./Link')

var _toUrl = require('./toUrl')

var _toUrl2 = _interopRequireDefault(_toUrl)

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

var NavLink = function NavLink(_ref, _ref2) {
  var store = _ref2.store

  var to = _ref.to,
    href = _ref.href,
    pathname = _ref.pathname,
    className = _ref.className,
    style = _ref.style,
    activeClassName = _ref.activeClassName,
    activeStyle = _ref.activeStyle,
    exact = _ref.exact,
    strict = _ref.strict,
    isActive = _ref.isActive,
    props = _objectWithoutProperties(_ref, [
      'to',
      'href',
      'pathname',
      'className',
      'style',
      'activeClassName',
      'activeStyle',
      'exact',
      'strict',
      'isActive'
    ])

  to = href || to

  var location = (0, _reduxFirstRouter.selectLocationState)(store.getState())
  var path = (0, _toUrl2.default)(to, location.routesMap)
  var match = (0, _rudyMatchPath2.default)(pathname, {
    path: path,
    exact: exact,
    strict: strict
  })
  var active = !!(isActive ? isActive(match, location) : match)
  return _react2.default.createElement(
    _Link.Link,
    _extends(
      {
        to: to,
        className: active
          ? [className, activeClassName]
              .filter(function(i) {
                return i
              })
              .join(' ')
          : className,
        style: active ? _extends({}, style, activeStyle) : style
      },
      props
    )
  )
}

NavLink.propTypes = {
  dispatch: require('prop-types').func.isRequired,
  pathname: require('prop-types').string.isRequired,
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
  target: require('prop-types').string,
  className: require('prop-types').string,
  style: require('prop-types').object,
  activeClassName: require('prop-types').string,
  activeStyle: require('prop-types').object,
  exact: require('prop-types').bool,
  strict: require('prop-types').bool,
  isActive: require('prop-types').func
}
NavLink.contextTypes = {
  store: _propTypes2.default.object.isRequired
}

var mapState = function mapState(state) {
  return {
    pathname: (0, _reduxFirstRouter.selectLocationState)(state).pathname
  }
}
var connector = (0, _reactRedux.connect)(mapState)

// $FlowIgnore
exports.default = connector(NavLink)
