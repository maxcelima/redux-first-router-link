;(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory()
  else if (typeof define === 'function' && define.amd) define([], factory)
  else if (typeof exports === 'object')
    exports['ReduxFirstRouterLink'] = factory()
  else root['ReduxFirstRouterLink'] = factory()
})(this, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {} // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }) // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ) // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true // Return the exports of the module
      /******/
      /******/ /******/ return module.exports
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules // identity function for calling harmony imports with the correct context
    /******/
    /******/ /******/ __webpack_require__.i = function(value) {
      return value
    } // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter
          /******/
        })
        /******/
      }
      /******/
    } // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter = module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
      /******/ __webpack_require__.d(getter, 'a', getter)
      /******/ return getter
      /******/
    } // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 45))
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports, __webpack_require__) {
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

        if (true) {
          var REACT_ELEMENT_TYPE =
            (typeof Symbol === 'function' &&
              Symbol.for &&
              Symbol.for('react.element')) ||
            0xeac7

          var isValidElement = function(object) {
            return (
              typeof object === 'object' &&
              object !== null &&
              object.$$typeof === REACT_ELEMENT_TYPE
            )
          }

          // By explicitly using `prop-types` you are opting into new development behavior.
          // http://fb.me/prop-types-in-prod
          var throwOnDirectAccess = true
          module.exports = __webpack_require__(25)(
            isValidElement,
            throwOnDirectAccess
          )
        } else {
          // By explicitly using `prop-types` you are opting into new production behavior.
          // http://fb.me/prop-types-in-prod
          module.exports = require('./factoryWithThrowingShims')()
        }

        /***/
      },
      /* 1 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

        var emptyFunction = __webpack_require__(14)

        /**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

        var warning = emptyFunction

        if (true) {
          ;(function() {
            var printWarning = function printWarning(format) {
              for (
                var _len = arguments.length,
                  args = Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                args[_key - 1] = arguments[_key]
              }

              var argIndex = 0
              var message =
                'Warning: ' +
                format.replace(/%s/g, function() {
                  return args[argIndex++]
                })
              if (typeof console !== 'undefined') {
                console.error(message)
              }
              try {
                // --- Welcome to debugging React ---
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message)
              } catch (x) {}
            }

            warning = function warning(condition, format) {
              if (format === undefined) {
                throw new Error(
                  '`warning(condition, format, ...args)` requires a warning ' +
                    'message argument'
                )
              }

              if (format.indexOf('Failed Composite propType: ') === 0) {
                return // Ignore CompositeComponent proptype check.
              }

              if (!condition) {
                for (
                  var _len2 = arguments.length,
                    args = Array(_len2 > 2 ? _len2 - 2 : 0),
                    _key2 = 2;
                  _key2 < _len2;
                  _key2++
                ) {
                  args[_key2 - 2] = arguments[_key2]
                }

                printWarning.apply(undefined, [format].concat(args))
              }
            }
          })()
        }

        module.exports = warning

        /***/
      },
      /* 2 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _connectRoutes = __webpack_require__(35)

        Object.defineProperty(exports, 'connectRoutes', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_connectRoutes).default
          }
        })
        Object.defineProperty(exports, 'push', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.push
          }
        })
        Object.defineProperty(exports, 'replace', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.replace
          }
        })
        Object.defineProperty(exports, 'back', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.back
          }
        })
        Object.defineProperty(exports, 'next', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.next
          }
        })
        Object.defineProperty(exports, 'go', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.go
          }
        })
        Object.defineProperty(exports, 'canGo', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.canGo
          }
        })
        Object.defineProperty(exports, 'canGoBack', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.canGoBack
          }
        })
        Object.defineProperty(exports, 'canGoForward', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.canGoForward
          }
        })
        Object.defineProperty(exports, 'prevPath', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.prevPath
          }
        })
        Object.defineProperty(exports, 'nextPath', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.nextPath
          }
        })
        Object.defineProperty(exports, 'history', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.history
          }
        })
        Object.defineProperty(exports, 'scrollBehavior', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.scrollBehavior
          }
        })
        Object.defineProperty(exports, 'updateScroll', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.updateScroll
          }
        })
        Object.defineProperty(exports, 'selectLocationState', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.selectLocationState
          }
        })
        Object.defineProperty(exports, 'getOptions', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.getOptions
          }
        })

        var _redirect = __webpack_require__(85)

        Object.defineProperty(exports, 'redirect', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_redirect).default
          }
        })

        var _actionToPath = __webpack_require__(36)

        Object.defineProperty(exports, 'actionToPath', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_actionToPath).default
          }
        })

        var _pathToAction = __webpack_require__(21)

        Object.defineProperty(exports, 'pathToAction', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_pathToAction).default
          }
        })

        var _isLocationAction = __webpack_require__(37)

        Object.defineProperty(exports, 'isLocationAction', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_isLocationAction).default
          }
        })

        var _setKind = __webpack_require__(39)

        Object.defineProperty(exports, 'setKind', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_setKind).default
          }
        })

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        var NOT_FOUND = (exports.NOT_FOUND = '@@redux-first-router/NOT_FOUND')

        /***/
      },
      /* 3 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

        /**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

        var validateFormat = function validateFormat(format) {}

        if (true) {
          validateFormat = function validateFormat(format) {
            if (format === undefined) {
              throw new Error('invariant requires an error message argument')
            }
          }
        }

        function invariant(condition, format, a, b, c, d, e, f) {
          validateFormat(format)

          if (!condition) {
            var error
            if (format === undefined) {
              error = new Error(
                'Minified exception occurred; use the non-minified dev environment ' +
                  'for the full error message and additional helpful warnings.'
              )
            } else {
              var args = [a, b, c, d, e, f]
              var argIndex = 0
              error = new Error(
                format.replace(/%s/g, function() {
                  return args[argIndex++]
                })
              )
              error.name = 'Invariant Violation'
            }

            error.framesToPop = 1 // we don't care about invariant's own frame
            throw error
          }
        }

        module.exports = invariant

        /***/
      },
      /* 4 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

        var _assign = __webpack_require__(8)

        var ReactCurrentOwner = __webpack_require__(9)

        var warning = __webpack_require__(1)
        var canDefineProperty = __webpack_require__(10)
        var hasOwnProperty = Object.prototype.hasOwnProperty

        var REACT_ELEMENT_TYPE = __webpack_require__(31)

        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        }

        var specialPropKeyWarningShown, specialPropRefWarningShown

        function hasValidRef(config) {
          if (true) {
            if (hasOwnProperty.call(config, 'ref')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'ref').get
              if (getter && getter.isReactWarning) {
                return false
              }
            }
          }
          return config.ref !== undefined
        }

        function hasValidKey(config) {
          if (true) {
            if (hasOwnProperty.call(config, 'key')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'key').get
              if (getter && getter.isReactWarning) {
                return false
              }
            }
          }
          return config.key !== undefined
        }

        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true
              true
                ? warning(
                    false,
                    '%s: `key` is not a prop. Trying to access it will result ' +
                      'in `undefined` being returned. If you need to access the same ' +
                      'value within the child component, you should pass it as a different ' +
                      'prop. (https://fb.me/react-special-props)',
                    displayName
                  )
                : void 0
            }
          }
          warnAboutAccessingKey.isReactWarning = true
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
          })
        }

        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true
              true
                ? warning(
                    false,
                    '%s: `ref` is not a prop. Trying to access it will result ' +
                      'in `undefined` being returned. If you need to access the same ' +
                      'value within the child component, you should pass it as a different ' +
                      'prop. (https://fb.me/react-special-props)',
                    displayName
                  )
                : void 0
            }
          }
          warnAboutAccessingRef.isReactWarning = true
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
          })
        }

        /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
        var ReactElement = function(
          type,
          key,
          ref,
          self,
          source,
          owner,
          props
        ) {
          var element = {
            // This tag allow us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,

            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,

            // Record the component responsible for creating this element.
            _owner: owner
          }

          if (true) {
            // The validation flag is currently mutative. We put it on
            // an external backing store so that we can freeze the whole object.
            // This can be replaced with a WeakMap once they are implemented in
            // commonly used development environments.
            element._store = {}

            // To make comparing ReactElements easier for testing purposes, we make
            // the validation flag non-enumerable (where possible, which should
            // include every environment we run tests in), so the test framework
            // ignores it.
            if (canDefineProperty) {
              Object.defineProperty(element._store, 'validated', {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              })
              // self and source are DEV only properties.
              Object.defineProperty(element, '_self', {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              })
              // Two elements created in two different places should be considered
              // equal for testing purposes and therefore we hide it from enumeration.
              Object.defineProperty(element, '_source', {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              })
            } else {
              element._store.validated = false
              element._self = self
              element._source = source
            }
            if (Object.freeze) {
              Object.freeze(element.props)
              Object.freeze(element)
            }
          }

          return element
        }

        /**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
        ReactElement.createElement = function(type, config, children) {
          var propName

          // Reserved names are extracted
          var props = {}

          var key = null
          var ref = null
          var self = null
          var source = null

          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref
            }
            if (hasValidKey(config)) {
              key = '' + config.key
            }

            self = config.__self === undefined ? null : config.__self
            source = config.__source === undefined ? null : config.__source
            // Remaining properties are added to a new props object
            for (propName in config) {
              if (
                hasOwnProperty.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                props[propName] = config[propName]
              }
            }
          }

          // Children can be more than one argument, and those are transferred onto
          // the newly allocated props object.
          var childrenLength = arguments.length - 2
          if (childrenLength === 1) {
            props.children = children
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength)
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2]
            }
            if (true) {
              if (Object.freeze) {
                Object.freeze(childArray)
              }
            }
            props.children = childArray
          }

          // Resolve default props
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps
            for (propName in defaultProps) {
              if (props[propName] === undefined) {
                props[propName] = defaultProps[propName]
              }
            }
          }
          if (true) {
            if (key || ref) {
              if (
                typeof props.$$typeof === 'undefined' ||
                props.$$typeof !== REACT_ELEMENT_TYPE
              ) {
                var displayName = typeof type === 'function'
                  ? type.displayName || type.name || 'Unknown'
                  : type
                if (key) {
                  defineKeyPropWarningGetter(props, displayName)
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName)
                }
              }
            }
          }
          return ReactElement(
            type,
            key,
            ref,
            self,
            source,
            ReactCurrentOwner.current,
            props
          )
        }

        /**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
        ReactElement.createFactory = function(type) {
          var factory = ReactElement.createElement.bind(null, type)
          // Expose the type on the factory and the prototype so that it can be
          // easily accessed on elements. E.g. `<Foo />.type === Foo`.
          // This should not be named `constructor` since this may not be the function
          // that created the element, and it may not even be a constructor.
          // Legacy hook TODO: Warn if this is accessed
          factory.type = type
          return factory
        }

        ReactElement.cloneAndReplaceKey = function(oldElement, newKey) {
          var newElement = ReactElement(
            oldElement.type,
            newKey,
            oldElement.ref,
            oldElement._self,
            oldElement._source,
            oldElement._owner,
            oldElement.props
          )

          return newElement
        }

        /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
        ReactElement.cloneElement = function(element, config, children) {
          var propName

          // Original props are copied
          var props = _assign({}, element.props)

          // Reserved names are extracted
          var key = element.key
          var ref = element.ref
          // Self is preserved since the owner is preserved.
          var self = element._self
          // Source is preserved since cloneElement is unlikely to be targeted by a
          // transpiler, and the original source is probably a better indicator of the
          // true owner.
          var source = element._source

          // Owner will be preserved, unless ref is overridden
          var owner = element._owner

          if (config != null) {
            if (hasValidRef(config)) {
              // Silently steal the ref from the parent.
              ref = config.ref
              owner = ReactCurrentOwner.current
            }
            if (hasValidKey(config)) {
              key = '' + config.key
            }

            // Remaining properties override existing props
            var defaultProps
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps
            }
            for (propName in config) {
              if (
                hasOwnProperty.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                if (
                  config[propName] === undefined &&
                  defaultProps !== undefined
                ) {
                  // Resolve default props
                  props[propName] = defaultProps[propName]
                } else {
                  props[propName] = config[propName]
                }
              }
            }
          }

          // Children can be more than one argument, and those are transferred onto
          // the newly allocated props object.
          var childrenLength = arguments.length - 2
          if (childrenLength === 1) {
            props.children = children
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength)
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2]
            }
            props.children = childArray
          }

          return ReactElement(
            element.type,
            key,
            ref,
            self,
            source,
            owner,
            props
          )
        }

        /**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
        ReactElement.isValidElement = function(object) {
          return (
            typeof object === 'object' &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          )
        }

        module.exports = ReactElement

        /***/
      },
      /* 5 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

        /**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

        function reactProdInvariant(code) {
          var argCount = arguments.length - 1

          var message =
            'Minified React error #' +
            code +
            '; visit ' +
            'http://facebook.github.io/react/docs/error-decoder.html?invariant=' +
            code

          for (var argIdx = 0; argIdx < argCount; argIdx++) {
            message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1])
          }

          message +=
            ' for the full message or use the non-minified dev environment' +
            ' for full errors and additional helpful warnings.'

          var error = new Error(message)
          error.name = 'Invariant Violation'
          error.framesToPop = 1 // we don't care about reactProdInvariant's own frame

          throw error
        }

        module.exports = reactProdInvariant

        /***/
      },
      /* 6 */
      /***/ function(module, exports, __webpack_require__) {
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

        exports.default = function(pathname, action, prev, history, kind) {
          var type = action.type,
            _action$payload = action.payload,
            payload = _action$payload === undefined ? {} : _action$payload,
            _action$meta = action.meta,
            meta = _action$meta === undefined ? {} : _action$meta

          var query = action.query || meta.query || payload.query

          var parts = pathname.split('?')
          pathname = parts[0]
          var search = parts[1]

          // we want the least amount of stuff showing in the Redux devtools
          var current = query || search
            ? {
                pathname: pathname,
                type: type,
                payload: payload,
                query: query,
                search: search
              }
            : { pathname: pathname, type: type, payload: payload }

          return _extends({}, action, {
            // keep any possible other non-FSA keys
            type: type,
            payload: payload,
            meta: _extends({}, meta, {
              location: {
                current: current,
                prev: prev,
                kind: kind,
                history: undefined
              }
            })
          })
        }

        var nestHistory = (exports.nestHistory = function nestHistory(history) {
          return history.entries
            ? {
                index: history.index,
                length: history.entries.length,
                entries: history.entries.slice(0) // history.entries.map(entry => entry.pathname)
              }
            : undefined
        })

        /***/
      },
      /* 7 */
      /***/ function(module, exports, __webpack_require__) {
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

        var _reduxFirstRouter = __webpack_require__(2)

        var babelPluginFlowReactPropTypes_proptype_RoutesMap =
          __webpack_require__(2)
            .babelPluginFlowReactPropTypes_proptype_RoutesMap ||
          __webpack_require__(0).any

        if (true)
          Object.defineProperty(
            exports,
            'babelPluginFlowReactPropTypes_proptype_To',
            {
              value: __webpack_require__(0).oneOfType([
                __webpack_require__(0).string,
                __webpack_require__(0).arrayOf(__webpack_require__(0).string),
                __webpack_require__(0).object
              ]),
              configurable: true
            }
          )

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

        /***/
      },
      /* 8 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/

        /* eslint-disable no-unused-vars */
        var getOwnPropertySymbols = Object.getOwnPropertySymbols
        var hasOwnProperty = Object.prototype.hasOwnProperty
        var propIsEnumerable = Object.prototype.propertyIsEnumerable

        function toObject(val) {
          if (val === null || val === undefined) {
            throw new TypeError(
              'Object.assign cannot be called with null or undefined'
            )
          }

          return Object(val)
        }

        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false
            }

            // Detect buggy property enumeration order in older V8 versions.

            // https://bugs.chromium.org/p/v8/issues/detail?id=4118
            var test1 = new String('abc') // eslint-disable-line no-new-wrappers
            test1[5] = 'de'
            if (Object.getOwnPropertyNames(test1)[0] === '5') {
              return false
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test2 = {}
            for (var i = 0; i < 10; i++) {
              test2['_' + String.fromCharCode(i)] = i
            }
            var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
              return test2[n]
            })
            if (order2.join('') !== '0123456789') {
              return false
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test3 = {}
            'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
              test3[letter] = letter
            })
            if (
              Object.keys(Object.assign({}, test3)).join('') !==
              'abcdefghijklmnopqrst'
            ) {
              return false
            }

            return true
          } catch (err) {
            // We don't expect any of the above to throw, but better to be safe.
            return false
          }
        }

        module.exports = shouldUseNative()
          ? Object.assign
          : function(target, source) {
              var from
              var to = toObject(target)
              var symbols

              for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s])

                for (var key in from) {
                  if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key]
                  }
                }

                if (getOwnPropertySymbols) {
                  symbols = getOwnPropertySymbols(from)
                  for (var i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                      to[symbols[i]] = from[symbols[i]]
                    }
                  }
                }
              }

              return to
            }

        /***/
      },
      /* 9 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

        /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
        var ReactCurrentOwner = {
          /**
   * @internal
   * @type {ReactComponent}
   */
          current: null
        }

        module.exports = ReactCurrentOwner

        /***/
      },
      /* 10 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

        var canDefineProperty = false
        if (true) {
          try {
            // $FlowFixMe https://github.com/facebook/flow/issues/285
            Object.defineProperty({}, 'x', { get: function() {} })
            canDefineProperty = true
          } catch (x) {
            // IE will fail on defineProperty
          }
        }

        module.exports = canDefineProperty

        /***/
      },
      /* 11 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        module.exports = __webpack_require__(71)

        /***/
      },
      /* 12 */
      /***/ function(module, exports, __webpack_require__) {
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

        var _reduxFirstRouter = __webpack_require__(2)

        var babelPluginFlowReactPropTypes_proptype_RoutesMap =
          __webpack_require__(2)
            .babelPluginFlowReactPropTypes_proptype_RoutesMap ||
          __webpack_require__(0).any

        var babelPluginFlowReactPropTypes_proptype_To =
          __webpack_require__(7).babelPluginFlowReactPropTypes_proptype_To ||
          __webpack_require__(0).any

        if (true)
          Object.defineProperty(
            exports,
            'babelPluginFlowReactPropTypes_proptype_OnClick',
            {
              value: __webpack_require__(0).oneOfType([
                __webpack_require__(0).oneOf([false]),
                __webpack_require__(0).func
              ]),
              configurable: true
            }
          )

        exports.default = function(
          url,
          routesMap,
          onClick,
          shouldDispatch,
          target,
          dispatch,
          to,
          dispatchRedirect,
          e
        ) {
          var shouldGo = true

          if (onClick) {
            shouldGo = onClick(e) // onClick can return false to prevent dispatch
            shouldGo = typeof shouldGo === 'undefined' ? true : shouldGo
          }

          var prevented = e.defaultPrevented

          if (!target && e && e.preventDefault && !isModified(e)) {
            e.preventDefault()
          }

          if (
            shouldGo &&
            shouldDispatch &&
            !target &&
            !prevented &&
            e.button === 0 &&
            !isModified(e)
          ) {
            var _getOptions = (0, _reduxFirstRouter.getOptions)(),
              serializer = _getOptions.querySerializer

            var action = isAction(to)
              ? to
              : (0, _reduxFirstRouter.pathToAction)(url, routesMap, serializer)
            action = dispatchRedirect
              ? (0, _reduxFirstRouter.redirect)(action)
              : action
            dispatch(action)
          }
        }

        var isAction = function isAction(to) {
          return (
            (typeof to === 'undefined' ? 'undefined' : _typeof(to)) ===
              'object' && !Array.isArray(to)
          )
        }

        var isModified = function isModified(e) {
          return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        }

        /***/
      },
      /* 13 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        Object.defineProperty(__webpack_exports__, '__esModule', {
          value: true
        })
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(
          60
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(
          27
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(
          61
        )
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Provider',
          function() {
            return __WEBPACK_IMPORTED_MODULE_0__components_Provider__['a']
          }
        )
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'connectAdvanced',
          function() {
            return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__[
              'a'
            ]
          }
        )
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'connect',
          function() {
            return __WEBPACK_IMPORTED_MODULE_2__connect_connect__['a']
          }
        )

        /***/
      },
      /* 14 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

        function makeEmptyFunction(arg) {
          return function() {
            return arg
          }
        }

        /**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
        var emptyFunction = function emptyFunction() {}

        emptyFunction.thatReturns = makeEmptyFunction
        emptyFunction.thatReturnsFalse = makeEmptyFunction(false)
        emptyFunction.thatReturnsTrue = makeEmptyFunction(true)
        emptyFunction.thatReturnsNull = makeEmptyFunction(null)
        emptyFunction.thatReturnsThis = function() {
          return this
        }
        emptyFunction.thatReturnsArgument = function(arg) {
          return arg
        }

        module.exports = emptyFunction

        /***/
      },
      /* 15 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

        var emptyObject = {}

        if (true) {
          Object.freeze(emptyObject)
        }

        module.exports = emptyObject

        /***/
      },
      /* 16 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(
          48
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(
          50
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(
          55
        )

        /** `Object#toString` result references. */
        var objectTag = '[object Object]'

        /** Used for built-in method references. */
        var funcProto = Function.prototype, objectProto = Object.prototype

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty

        /** Used to infer the `Object` constructor. */
        var objectCtorString = funcToString.call(Object)

        /**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
        function isPlainObject(value) {
          if (
            !__webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__['a' /* default */]
            )(value) ||
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__['a' /* default */]
            )(value) != objectTag
          ) {
            return false
          }
          var proto = __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__['a' /* default */]
          )(value)
          if (proto === null) {
            return true
          }
          var Ctor =
            hasOwnProperty.call(proto, 'constructor') && proto.constructor
          return (
            typeof Ctor == 'function' &&
            Ctor instanceof Ctor &&
            funcToString.call(Ctor) == objectCtorString
          )
        }

        /* harmony default export */ __webpack_exports__['a'] = isPlainObject

        /***/
      },
      /* 17 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony export (immutable) */ __webpack_exports__['a'] = warning
        /**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
        function warning(message) {
          /* eslint-disable no-console */
          if (
            typeof console !== 'undefined' &&
            typeof console.error === 'function'
          ) {
            console.error(message)
          }
          /* eslint-enable no-console */
          try {
            // This error was thrown as a convenience so that if you enable
            // "break on all exceptions" in your console,
            // it would pause the execution at this line.
            throw new Error(message)
            /* eslint-disable no-empty */
          } catch (e) {}
          /* eslint-enable no-empty */
        }

        /***/
      },
      /* 18 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

        var _prodInvariant = __webpack_require__(5)

        var ReactNoopUpdateQueue = __webpack_require__(20)

        var canDefineProperty = __webpack_require__(10)
        var emptyObject = __webpack_require__(15)
        var invariant = __webpack_require__(3)
        var warning = __webpack_require__(1)

        /**
 * Base class helpers for the updating state of a component.
 */
        function ReactComponent(props, context, updater) {
          this.props = props
          this.context = context
          this.refs = emptyObject
          // We initialize the default updater but the real one gets injected by the
          // renderer.
          this.updater = updater || ReactNoopUpdateQueue
        }

        ReactComponent.prototype.isReactComponent = {}

        /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
        ReactComponent.prototype.setState = function(partialState, callback) {
          !(typeof partialState === 'object' ||
            typeof partialState === 'function' ||
            partialState == null)
            ? true
                ? invariant(
                    false,
                    'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
                  )
                : _prodInvariant('85')
            : void 0
          this.updater.enqueueSetState(this, partialState)
          if (callback) {
            this.updater.enqueueCallback(this, callback, 'setState')
          }
        }

        /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
        ReactComponent.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this)
          if (callback) {
            this.updater.enqueueCallback(this, callback, 'forceUpdate')
          }
        }

        /**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
        if (true) {
          var deprecatedAPIs = {
            isMounted: [
              'isMounted',
              'Instead, make sure to clean up subscriptions and pending requests in ' +
                'componentWillUnmount to prevent memory leaks.'
            ],
            replaceState: [
              'replaceState',
              'Refactor your code to use setState instead (see ' +
                'https://github.com/facebook/react/issues/3236).'
            ]
          }
          var defineDeprecationWarning = function(methodName, info) {
            if (canDefineProperty) {
              Object.defineProperty(ReactComponent.prototype, methodName, {
                get: function() {
                  true
                    ? warning(
                        false,
                        '%s(...) is deprecated in plain JavaScript React classes. %s',
                        info[0],
                        info[1]
                      )
                    : void 0
                  return undefined
                }
              })
            }
          }
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName])
            }
          }
        }

        module.exports = ReactComponent

        /***/
      },
      /* 19 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

        var _prodInvariant = __webpack_require__(5)

        var ReactCurrentOwner = __webpack_require__(9)

        var invariant = __webpack_require__(3)
        var warning = __webpack_require__(1)

        function isNative(fn) {
          // Based on isNative() from Lodash
          var funcToString = Function.prototype.toString
          var hasOwnProperty = Object.prototype.hasOwnProperty
          var reIsNative = RegExp(
            '^' +
              funcToString
                // Take an example native function source for comparison
                .call(hasOwnProperty)
                // Strip regex characters so we can use it for regex
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                // Remove hasOwnProperty from the template to make it generic
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          )
          try {
            var source = funcToString.call(fn)
            return reIsNative.test(source)
          } catch (err) {
            return false
          }
        }

        var canUseCollections =
          // Array.from
          typeof Array.from === 'function' &&
          // Map
          typeof Map === 'function' &&
          isNative(Map) &&
          // Map.prototype.keys
          Map.prototype != null &&
          typeof Map.prototype.keys === 'function' &&
          isNative(Map.prototype.keys) &&
          // Set
          typeof Set === 'function' &&
          isNative(Set) &&
          // Set.prototype.keys
          Set.prototype != null &&
          typeof Set.prototype.keys === 'function' &&
          isNative(Set.prototype.keys)

        var setItem
        var getItem
        var removeItem
        var getItemIDs
        var addRoot
        var removeRoot
        var getRootIDs

        if (canUseCollections) {
          var itemMap = new Map()
          var rootIDSet = new Set()

          setItem = function(id, item) {
            itemMap.set(id, item)
          }
          getItem = function(id) {
            return itemMap.get(id)
          }
          removeItem = function(id) {
            itemMap['delete'](id)
          }
          getItemIDs = function() {
            return Array.from(itemMap.keys())
          }

          addRoot = function(id) {
            rootIDSet.add(id)
          }
          removeRoot = function(id) {
            rootIDSet['delete'](id)
          }
          getRootIDs = function() {
            return Array.from(rootIDSet.keys())
          }
        } else {
          var itemByKey = {}
          var rootByKey = {}

          // Use non-numeric keys to prevent V8 performance issues:
          // https://github.com/facebook/react/pull/7232
          var getKeyFromID = function(id) {
            return '.' + id
          }
          var getIDFromKey = function(key) {
            return parseInt(key.substr(1), 10)
          }

          setItem = function(id, item) {
            var key = getKeyFromID(id)
            itemByKey[key] = item
          }
          getItem = function(id) {
            var key = getKeyFromID(id)
            return itemByKey[key]
          }
          removeItem = function(id) {
            var key = getKeyFromID(id)
            delete itemByKey[key]
          }
          getItemIDs = function() {
            return Object.keys(itemByKey).map(getIDFromKey)
          }

          addRoot = function(id) {
            var key = getKeyFromID(id)
            rootByKey[key] = true
          }
          removeRoot = function(id) {
            var key = getKeyFromID(id)
            delete rootByKey[key]
          }
          getRootIDs = function() {
            return Object.keys(rootByKey).map(getIDFromKey)
          }
        }

        var unmountedIDs = []

        function purgeDeep(id) {
          var item = getItem(id)
          if (item) {
            var childIDs = item.childIDs

            removeItem(id)
            childIDs.forEach(purgeDeep)
          }
        }

        function describeComponentFrame(name, source, ownerName) {
          return (
            '\n    in ' +
            (name || 'Unknown') +
            (source
              ? ' (at ' +
                  source.fileName.replace(/^.*[\\\/]/, '') +
                  ':' +
                  source.lineNumber +
                  ')'
              : ownerName ? ' (created by ' + ownerName + ')' : '')
          )
        }

        function getDisplayName(element) {
          if (element == null) {
            return '#empty'
          } else if (
            typeof element === 'string' ||
            typeof element === 'number'
          ) {
            return '#text'
          } else if (typeof element.type === 'string') {
            return element.type
          } else {
            return element.type.displayName || element.type.name || 'Unknown'
          }
        }

        function describeID(id) {
          var name = ReactComponentTreeHook.getDisplayName(id)
          var element = ReactComponentTreeHook.getElement(id)
          var ownerID = ReactComponentTreeHook.getOwnerID(id)
          var ownerName
          if (ownerID) {
            ownerName = ReactComponentTreeHook.getDisplayName(ownerID)
          }
          true
            ? warning(
                element,
                'ReactComponentTreeHook: Missing React element for debugID %s when ' +
                  'building stack',
                id
              )
            : void 0
          return describeComponentFrame(
            name,
            element && element._source,
            ownerName
          )
        }

        var ReactComponentTreeHook = {
          onSetChildren: function(id, nextChildIDs) {
            var item = getItem(id)
            !item
              ? true
                  ? invariant(false, 'Item must have been set')
                  : _prodInvariant('144')
              : void 0
            item.childIDs = nextChildIDs

            for (var i = 0; i < nextChildIDs.length; i++) {
              var nextChildID = nextChildIDs[i]
              var nextChild = getItem(nextChildID)
              !nextChild
                ? true
                    ? invariant(
                        false,
                        'Expected hook events to fire for the child before its parent includes it in onSetChildren().'
                      )
                    : _prodInvariant('140')
                : void 0
              !(nextChild.childIDs != null ||
                typeof nextChild.element !== 'object' ||
                nextChild.element == null)
                ? true
                    ? invariant(
                        false,
                        'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().'
                      )
                    : _prodInvariant('141')
                : void 0
              !nextChild.isMounted
                ? true
                    ? invariant(
                        false,
                        'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().'
                      )
                    : _prodInvariant('71')
                : void 0
              if (nextChild.parentID == null) {
                nextChild.parentID = id
                // TODO: This shouldn't be necessary but mounting a new root during in
                // componentWillMount currently causes not-yet-mounted components to
                // be purged from our tree data so their parent id is missing.
              }
              !(nextChild.parentID === id)
                ? true
                    ? invariant(
                        false,
                        'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).',
                        nextChildID,
                        nextChild.parentID,
                        id
                      )
                    : _prodInvariant('142', nextChildID, nextChild.parentID, id)
                : void 0
            }
          },
          onBeforeMountComponent: function(id, element, parentID) {
            var item = {
              element: element,
              parentID: parentID,
              text: null,
              childIDs: [],
              isMounted: false,
              updateCount: 0
            }
            setItem(id, item)
          },
          onBeforeUpdateComponent: function(id, element) {
            var item = getItem(id)
            if (!item || !item.isMounted) {
              // We may end up here as a result of setState() in componentWillUnmount().
              // In this case, ignore the element.
              return
            }
            item.element = element
          },
          onMountComponent: function(id) {
            var item = getItem(id)
            !item
              ? true
                  ? invariant(false, 'Item must have been set')
                  : _prodInvariant('144')
              : void 0
            item.isMounted = true
            var isRoot = item.parentID === 0
            if (isRoot) {
              addRoot(id)
            }
          },
          onUpdateComponent: function(id) {
            var item = getItem(id)
            if (!item || !item.isMounted) {
              // We may end up here as a result of setState() in componentWillUnmount().
              // In this case, ignore the element.
              return
            }
            item.updateCount++
          },
          onUnmountComponent: function(id) {
            var item = getItem(id)
            if (item) {
              // We need to check if it exists.
              // `item` might not exist if it is inside an error boundary, and a sibling
              // error boundary child threw while mounting. Then this instance never
              // got a chance to mount, but it still gets an unmounting event during
              // the error boundary cleanup.
              item.isMounted = false
              var isRoot = item.parentID === 0
              if (isRoot) {
                removeRoot(id)
              }
            }
            unmountedIDs.push(id)
          },
          purgeUnmountedComponents: function() {
            if (ReactComponentTreeHook._preventPurging) {
              // Should only be used for testing.
              return
            }

            for (var i = 0; i < unmountedIDs.length; i++) {
              var id = unmountedIDs[i]
              purgeDeep(id)
            }
            unmountedIDs.length = 0
          },
          isMounted: function(id) {
            var item = getItem(id)
            return item ? item.isMounted : false
          },
          getCurrentStackAddendum: function(topElement) {
            var info = ''
            if (topElement) {
              var name = getDisplayName(topElement)
              var owner = topElement._owner
              info += describeComponentFrame(
                name,
                topElement._source,
                owner && owner.getName()
              )
            }

            var currentOwner = ReactCurrentOwner.current
            var id = currentOwner && currentOwner._debugID

            info += ReactComponentTreeHook.getStackAddendumByID(id)
            return info
          },
          getStackAddendumByID: function(id) {
            var info = ''
            while (id) {
              info += describeID(id)
              id = ReactComponentTreeHook.getParentID(id)
            }
            return info
          },
          getChildIDs: function(id) {
            var item = getItem(id)
            return item ? item.childIDs : []
          },
          getDisplayName: function(id) {
            var element = ReactComponentTreeHook.getElement(id)
            if (!element) {
              return null
            }
            return getDisplayName(element)
          },
          getElement: function(id) {
            var item = getItem(id)
            return item ? item.element : null
          },
          getOwnerID: function(id) {
            var element = ReactComponentTreeHook.getElement(id)
            if (!element || !element._owner) {
              return null
            }
            return element._owner._debugID
          },
          getParentID: function(id) {
            var item = getItem(id)
            return item ? item.parentID : null
          },
          getSource: function(id) {
            var item = getItem(id)
            var element = item ? item.element : null
            var source = element != null ? element._source : null
            return source
          },
          getText: function(id) {
            var element = ReactComponentTreeHook.getElement(id)
            if (typeof element === 'string') {
              return element
            } else if (typeof element === 'number') {
              return '' + element
            } else {
              return null
            }
          },
          getUpdateCount: function(id) {
            var item = getItem(id)
            return item ? item.updateCount : 0
          },

          getRootIDs: getRootIDs,
          getRegisteredIDs: getItemIDs
        }

        module.exports = ReactComponentTreeHook

        /***/
      },
      /* 20 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

        var warning = __webpack_require__(1)

        function warnNoop(publicInstance, callerName) {
          if (true) {
            var constructor = publicInstance.constructor
            true
              ? warning(
                  false,
                  '%s(...): Can only update a mounted or mounting component. ' +
                    'This usually means you called %s() on an unmounted component. ' +
                    'This is a no-op. Please check the code for the %s component.',
                  callerName,
                  callerName,
                  (constructor &&
                    (constructor.displayName || constructor.name)) ||
                    'ReactClass'
                )
              : void 0
          }
        }

        /**
 * This is the abstract API for an update queue.
 */
        var ReactNoopUpdateQueue = {
          /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
          isMounted: function(publicInstance) {
            return false
          },

          /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
          enqueueCallback: function(publicInstance, callback) {},

          /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
          enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, 'forceUpdate')
          },

          /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
          enqueueReplaceState: function(publicInstance, completeState) {
            warnNoop(publicInstance, 'replaceState')
          },

          /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
          enqueueSetState: function(publicInstance, partialState) {
            warnNoop(publicInstance, 'setState')
          }
        }

        module.exports = ReactNoopUpdateQueue

        /***/
      },
      /* 21 */
      /***/ function(module, exports, __webpack_require__) {
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

        var _pathToRegexp = __webpack_require__(24)

        var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp)

        var _index = __webpack_require__(2)

        var _objectValues = __webpack_require__(90)

        var _objectValues2 = _interopRequireDefault(_objectValues)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        exports.default = function(pathname, routesMap, serializer) {
          var parts = pathname.split('?')
          pathname = parts[0]
          var search = parts[1]
          var query = serializer && search && serializer.parse(search)

          var routes = (0, _objectValues2.default)(routesMap)
          var routeTypes = Object.keys(routesMap)

          var i = 0
          var match = void 0
          var keys = []

          while (!match && i < routes.length) {
            keys.length = 0 // empty the array and start over
            var routePath = routes[i].path || routes[i] // route may be an object containing a route or a route string itself
            var reg = (0, _pathToRegexp2.default)(routePath, keys)
            match = reg.exec(pathname)
            i++
          }

          if (match) {
            i--

            var capitalizedWords =
              _typeof(routes[i]) === 'object' && routes[i].capitalizedWords
            var fromPath =
              routes[i] &&
              typeof routes[i].fromPath === 'function' &&
              routes[i].fromPath
            var type = routeTypes[i]

            var payload = keys.reduce(function(payload, key, index) {
              var value = match && match[index + 1] // item at index 0 is the overall match, whereas those after correspond to the key's index

              value = !isNaN(value)
                ? parseFloat(value) // make sure pure numbers aren't passed to reducers as strings
                : value

              value = capitalizedWords && typeof value === 'string'
                ? value.replace(/-/g, ' ').replace(/\b\w/g, function(l) {
                    return l.toUpperCase()
                  }) // 'my-category' -> 'My Category'
                : value

              value = fromPath && typeof value === 'string'
                ? fromPath(value, key.name)
                : value

              payload[key.name] = value

              return payload
            }, {})

            return query || search
              ? {
                  type: type,
                  payload: payload,
                  meta: { query: query, search: search }
                }
              : { type: type, payload: payload, meta: {} }
          }

          // This will basically will only end up being called if the developer is manually calling history.push().
          // Or, if visitors visit an invalid URL, the developer can use the NOT_FOUND type to show a not-found page to
          var meta = query || search
            ? { notFoundPath: pathname, query: query, search: search }
            : { notFoundPath: pathname }

          return { type: _index.NOT_FOUND, payload: {}, meta: meta }
        }

        /***/
      },
      /* 22 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        Object.defineProperty(__webpack_exports__, '__esModule', {
          value: true
        })
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(
          41
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(
          95
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(
          94
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(
          93
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(
          40
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(
          42
        )
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'createStore',
          function() {
            return __WEBPACK_IMPORTED_MODULE_0__createStore__['a']
          }
        )
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'combineReducers',
          function() {
            return __WEBPACK_IMPORTED_MODULE_1__combineReducers__['a']
          }
        )
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'bindActionCreators',
          function() {
            return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__['a']
          }
        )
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'applyMiddleware',
          function() {
            return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__['a']
          }
        )
        /* harmony reexport (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'compose',
          function() {
            return __WEBPACK_IMPORTED_MODULE_4__compose__['a']
          }
        )

        /*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
        function isCrushed() {}

        if (
          'development' !== 'production' &&
          typeof isCrushed.name === 'string' &&
          isCrushed.name !== 'isCrushed'
        ) {
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_5__utils_warning__['a' /* default */]
          )(
            "You are currently using minified code outside of NODE_ENV === 'production'. " +
              'This means that you are running a slower development build of Redux. ' +
              'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
              'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' +
              'to ensure you have the correct code for your production build.'
          )
        }

        /***/
      },
      /* 23 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(
          54
        )

        /** Built-in value references. */
        var Symbol =
          __WEBPACK_IMPORTED_MODULE_0__root_js__['a' /* default */].Symbol

        /* harmony default export */ __webpack_exports__['a'] = Symbol

        /***/
      },
      /* 24 */
      /***/ function(module, exports, __webpack_require__) {
        var isarray = __webpack_require__(56)

        /**
 * Expose `pathToRegexp`.
 */
        module.exports = pathToRegexp
        module.exports.parse = parse
        module.exports.compile = compile
        module.exports.tokensToFunction = tokensToFunction
        module.exports.tokensToRegExp = tokensToRegExp

        /**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
        var PATH_REGEXP = new RegExp(
          [
            // Match escaped characters that would otherwise appear in future matches.
            // This allows the user to escape special characters that won't transform.
            '(\\\\.)',
            // Match Express-style parameters and un-named parameters with a prefix
            // and optional suffixes. Matches appear as:
            //
            // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
            // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
            // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
          ].join('|'),
          'g'
        )

        /**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
        function parse(str, options) {
          var tokens = []
          var key = 0
          var index = 0
          var path = ''
          var defaultDelimiter = (options && options.delimiter) || '/'
          var res

          while ((res = PATH_REGEXP.exec(str)) != null) {
            var m = res[0]
            var escaped = res[1]
            var offset = res.index
            path += str.slice(index, offset)
            index = offset + m.length

            // Ignore already escaped sequences.
            if (escaped) {
              path += escaped[1]
              continue
            }

            var next = str[index]
            var prefix = res[2]
            var name = res[3]
            var capture = res[4]
            var group = res[5]
            var modifier = res[6]
            var asterisk = res[7]

            // Push the current path onto the tokens.
            if (path) {
              tokens.push(path)
              path = ''
            }

            var partial = prefix != null && next != null && next !== prefix
            var repeat = modifier === '+' || modifier === '*'
            var optional = modifier === '?' || modifier === '*'
            var delimiter = res[2] || defaultDelimiter
            var pattern = capture || group

            tokens.push({
              name: name || key++,
              prefix: prefix || '',
              delimiter: delimiter,
              optional: optional,
              repeat: repeat,
              partial: partial,
              asterisk: !!asterisk,
              pattern: pattern
                ? escapeGroup(pattern)
                : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
            })
          }

          // Match any characters still remaining.
          if (index < str.length) {
            path += str.substr(index)
          }

          // If the path exists, push it onto the end.
          if (path) {
            tokens.push(path)
          }

          return tokens
        }

        /**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
        function compile(str, options) {
          return tokensToFunction(parse(str, options))
        }

        /**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
        function encodeURIComponentPretty(str) {
          return encodeURI(str).replace(/[\/?#]/g, function(c) {
            return '%' + c.charCodeAt(0).toString(16).toUpperCase()
          })
        }

        /**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
        function encodeAsterisk(str) {
          return encodeURI(str).replace(/[?#]/g, function(c) {
            return '%' + c.charCodeAt(0).toString(16).toUpperCase()
          })
        }

        /**
 * Expose a method for transforming tokens into the path function.
 */
        function tokensToFunction(tokens) {
          // Compile all the tokens into regexps.
          var matches = new Array(tokens.length)

          // Compile all the patterns before compilation.
          for (var i = 0; i < tokens.length; i++) {
            if (typeof tokens[i] === 'object') {
              matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
            }
          }

          return function(obj, opts) {
            var path = ''
            var data = obj || {}
            var options = opts || {}
            var encode = options.pretty
              ? encodeURIComponentPretty
              : encodeURIComponent

            for (var i = 0; i < tokens.length; i++) {
              var token = tokens[i]

              if (typeof token === 'string') {
                path += token

                continue
              }

              var value = data[token.name]
              var segment

              if (value == null) {
                if (token.optional) {
                  // Prepend partial segment prefixes.
                  if (token.partial) {
                    path += token.prefix
                  }

                  continue
                } else {
                  throw new TypeError(
                    'Expected "' + token.name + '" to be defined'
                  )
                }
              }

              if (isarray(value)) {
                if (!token.repeat) {
                  throw new TypeError(
                    'Expected "' +
                      token.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(value) +
                      '`'
                  )
                }

                if (value.length === 0) {
                  if (token.optional) {
                    continue
                  } else {
                    throw new TypeError(
                      'Expected "' + token.name + '" to not be empty'
                    )
                  }
                }

                for (var j = 0; j < value.length; j++) {
                  segment = encode(value[j])

                  if (!matches[i].test(segment)) {
                    throw new TypeError(
                      'Expected all "' +
                        token.name +
                        '" to match "' +
                        token.pattern +
                        '", but received `' +
                        JSON.stringify(segment) +
                        '`'
                    )
                  }

                  path += (j === 0 ? token.prefix : token.delimiter) + segment
                }

                continue
              }

              segment = token.asterisk ? encodeAsterisk(value) : encode(value)

              if (!matches[i].test(segment)) {
                throw new TypeError(
                  'Expected "' +
                    token.name +
                    '" to match "' +
                    token.pattern +
                    '", but received "' +
                    segment +
                    '"'
                )
              }

              path += token.prefix + segment
            }

            return path
          }
        }

        /**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
        function escapeString(str) {
          return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
        }

        /**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
        function escapeGroup(group) {
          return group.replace(/([=!:$\/()])/g, '\\$1')
        }

        /**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
        function attachKeys(re, keys) {
          re.keys = keys
          return re
        }

        /**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
        function flags(options) {
          return options.sensitive ? '' : 'i'
        }

        /**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
        function regexpToRegexp(path, keys) {
          // Use a negative lookahead to match only capturing groups.
          var groups = path.source.match(/\((?!\?)/g)

          if (groups) {
            for (var i = 0; i < groups.length; i++) {
              keys.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: false,
                repeat: false,
                partial: false,
                asterisk: false,
                pattern: null
              })
            }
          }

          return attachKeys(path, keys)
        }

        /**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
        function arrayToRegexp(path, keys, options) {
          var parts = []

          for (var i = 0; i < path.length; i++) {
            parts.push(pathToRegexp(path[i], keys, options).source)
          }

          var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

          return attachKeys(regexp, keys)
        }

        /**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
        function stringToRegexp(path, keys, options) {
          return tokensToRegExp(parse(path, options), keys, options)
        }

        /**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
        function tokensToRegExp(tokens, keys, options) {
          if (!isarray(keys)) {
            options /** @type {!Object} */ = keys || options
            keys = []
          }

          options = options || {}

          var strict = options.strict
          var end = options.end !== false
          var route = ''

          // Iterate over the tokens and create our regexp string.
          for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i]

            if (typeof token === 'string') {
              route += escapeString(token)
            } else {
              var prefix = escapeString(token.prefix)
              var capture = '(?:' + token.pattern + ')'

              keys.push(token)

              if (token.repeat) {
                capture += '(?:' + prefix + capture + ')*'
              }

              if (token.optional) {
                if (!token.partial) {
                  capture = '(?:' + prefix + '(' + capture + '))?'
                } else {
                  capture = prefix + '(' + capture + ')?'
                }
              } else {
                capture = prefix + '(' + capture + ')'
              }

              route += capture
            }
          }

          var delimiter = escapeString(options.delimiter || '/')
          var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

          // In non-strict mode we allow a slash at the end of match. If the path to
          // match already ends with a slash, we remove it for consistency. The slash
          // is valid at the end of a path match, not in the middle. This is important
          // in non-ending mode, where "/test/" shouldn't match "/test//route".
          if (!strict) {
            route =
              (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) +
              '(?:' +
              delimiter +
              '(?=$))?'
          }

          if (end) {
            route += '$'
          } else {
            // In non-ending mode, we need the capturing groups to match as much as
            // possible by using a positive lookahead to the end or next path segment.
            route += strict && endsWithDelimiter
              ? ''
              : '(?=' + delimiter + '|$)'
          }

          return attachKeys(new RegExp('^' + route, flags(options)), keys)
        }

        /**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
        function pathToRegexp(path, keys, options) {
          if (!isarray(keys)) {
            options /** @type {!Object} */ = keys || options
            keys = []
          }

          options = options || {}

          if (path instanceof RegExp) {
            return regexpToRegexp(path /** @type {!Array} */, keys)
          }

          if (isarray(path)) {
            return arrayToRegexp /** @type {!Array} */(
              path /** @type {!Array} */,
              keys,
              options
            )
          }

          return stringToRegexp /** @type {string} */(
            path /** @type {!Array} */,
            keys,
            options
          )
        }

        /***/
      },
      /* 25 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

        var emptyFunction = __webpack_require__(14)
        var invariant = __webpack_require__(3)
        var warning = __webpack_require__(1)

        var ReactPropTypesSecret = __webpack_require__(26)
        var checkPropTypes = __webpack_require__(58)

        module.exports = function(isValidElement, throwOnDirectAccess) {
          /* global Symbol */
          var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator
          var FAUX_ITERATOR_SYMBOL = '@@iterator' // Before Symbol spec.

          /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
          function getIteratorFn(maybeIterable) {
            var iteratorFn =
              maybeIterable &&
              ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
                maybeIterable[FAUX_ITERATOR_SYMBOL])
            if (typeof iteratorFn === 'function') {
              return iteratorFn
            }
          }

          /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

          var ANONYMOUS = '<<anonymous>>'

          // Important!
          // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
          var ReactPropTypes = {
            array: createPrimitiveTypeChecker('array'),
            bool: createPrimitiveTypeChecker('boolean'),
            func: createPrimitiveTypeChecker('function'),
            number: createPrimitiveTypeChecker('number'),
            object: createPrimitiveTypeChecker('object'),
            string: createPrimitiveTypeChecker('string'),
            symbol: createPrimitiveTypeChecker('symbol'),

            any: createAnyTypeChecker(),
            arrayOf: createArrayOfTypeChecker,
            element: createElementTypeChecker(),
            instanceOf: createInstanceTypeChecker,
            node: createNodeChecker(),
            objectOf: createObjectOfTypeChecker,
            oneOf: createEnumTypeChecker,
            oneOfType: createUnionTypeChecker,
            shape: createShapeTypeChecker
          }

          /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
          /*eslint-disable no-self-compare*/
          function is(x, y) {
            // SameValue algorithm
            if (x === y) {
              // Steps 1-5, 7-10
              // Steps 6.b-6.e: +0 != -0
              return x !== 0 || 1 / x === 1 / y
            } else {
              // Step 6.a: NaN == NaN
              return x !== x && y !== y
            }
          }
          /*eslint-enable no-self-compare*/

          /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
          function PropTypeError(message) {
            this.message = message
            this.stack = ''
          }
          // Make `instanceof Error` still work for returned errors.
          PropTypeError.prototype = Error.prototype

          function createChainableTypeChecker(validate) {
            if (true) {
              var manualPropTypeCallCache = {}
              var manualPropTypeWarningCount = 0
            }
            function checkType(
              isRequired,
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret
            ) {
              componentName = componentName || ANONYMOUS
              propFullName = propFullName || propName

              if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                  // New behavior only for users of `prop-types` package
                  invariant(
                    false,
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                      'Use `PropTypes.checkPropTypes()` to call them. ' +
                      'Read more at http://fb.me/use-check-prop-types'
                  )
                } else if (
                  'development' !== 'production' &&
                  typeof console !== 'undefined'
                ) {
                  // Old behavior for people using React.PropTypes
                  var cacheKey = componentName + ':' + propName
                  if (
                    !manualPropTypeCallCache[cacheKey] &&
                    // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3
                  ) {
                    warning(
                      false,
                      'You are manually calling a React.PropTypes validation ' +
                        'function for the `%s` prop on `%s`. This is deprecated ' +
                        'and will throw in the standalone `prop-types` package. ' +
                        'You may be seeing this warning due to a third-party PropTypes ' +
                        'library. See https://fb.me/react-warning-dont-call-proptypes ' +
                        'for details.',
                      propFullName,
                      componentName
                    )
                    manualPropTypeCallCache[cacheKey] = true
                    manualPropTypeWarningCount++
                  }
                }
              }
              if (props[propName] == null) {
                if (isRequired) {
                  if (props[propName] === null) {
                    return new PropTypeError(
                      'The ' +
                        location +
                        ' `' +
                        propFullName +
                        '` is marked as required ' +
                        ('in `' + componentName + '`, but its value is `null`.')
                    )
                  }
                  return new PropTypeError(
                    'The ' +
                      location +
                      ' `' +
                      propFullName +
                      '` is marked as required in ' +
                      ('`' + componentName + '`, but its value is `undefined`.')
                  )
                }
                return null
              } else {
                return validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName
                )
              }
            }

            var chainedCheckType = checkType.bind(null, false)
            chainedCheckType.isRequired = checkType.bind(null, true)

            return chainedCheckType
          }

          function createPrimitiveTypeChecker(expectedType) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret
            ) {
              var propValue = props[propName]
              var propType = getPropType(propValue)
              if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue)

                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      preciseType +
                      '` supplied to `' +
                      componentName +
                      '`, expected ') +
                    ('`' + expectedType + '`.')
                )
              }
              return null
            }
            return createChainableTypeChecker(validate)
          }

          function createAnyTypeChecker() {
            return createChainableTypeChecker(emptyFunction.thatReturnsNull)
          }

          function createArrayOfTypeChecker(typeChecker) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              if (typeof typeChecker !== 'function') {
                return new PropTypeError(
                  'Property `' +
                    propFullName +
                    '` of component `' +
                    componentName +
                    '` has invalid PropType notation inside arrayOf.'
                )
              }
              var propValue = props[propName]
              if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue)
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected an array.')
                )
              }
              for (var i = 0; i < propValue.length; i++) {
                var error = typeChecker(
                  propValue,
                  i,
                  componentName,
                  location,
                  propFullName + '[' + i + ']',
                  ReactPropTypesSecret
                )
                if (error instanceof Error) {
                  return error
                }
              }
              return null
            }
            return createChainableTypeChecker(validate)
          }

          function createElementTypeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              var propValue = props[propName]
              if (!isValidElement(propValue)) {
                var propType = getPropType(propValue)
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected a single ReactElement.')
                )
              }
              return null
            }
            return createChainableTypeChecker(validate)
          }

          function createInstanceTypeChecker(expectedClass) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS
                var actualClassName = getClassName(props[propName])
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      actualClassName +
                      '` supplied to `' +
                      componentName +
                      '`, expected ') +
                    ('instance of `' + expectedClassName + '`.')
                )
              }
              return null
            }
            return createChainableTypeChecker(validate)
          }

          function createEnumTypeChecker(expectedValues) {
            if (!Array.isArray(expectedValues)) {
              true
                ? warning(
                    false,
                    'Invalid argument supplied to oneOf, expected an instance of array.'
                  )
                : void 0
              return emptyFunction.thatReturnsNull
            }

            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              var propValue = props[propName]
              for (var i = 0; i < expectedValues.length; i++) {
                if (is(propValue, expectedValues[i])) {
                  return null
                }
              }

              var valuesString = JSON.stringify(expectedValues)
              return new PropTypeError(
                'Invalid ' +
                  location +
                  ' `' +
                  propFullName +
                  '` of value `' +
                  propValue +
                  '` ' +
                  ('supplied to `' +
                    componentName +
                    '`, expected one of ' +
                    valuesString +
                    '.')
              )
            }
            return createChainableTypeChecker(validate)
          }

          function createObjectOfTypeChecker(typeChecker) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              if (typeof typeChecker !== 'function') {
                return new PropTypeError(
                  'Property `' +
                    propFullName +
                    '` of component `' +
                    componentName +
                    '` has invalid PropType notation inside objectOf.'
                )
              }
              var propValue = props[propName]
              var propType = getPropType(propValue)
              if (propType !== 'object') {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected an object.')
                )
              }
              for (var key in propValue) {
                if (propValue.hasOwnProperty(key)) {
                  var error = typeChecker(
                    propValue,
                    key,
                    componentName,
                    location,
                    propFullName + '.' + key,
                    ReactPropTypesSecret
                  )
                  if (error instanceof Error) {
                    return error
                  }
                }
              }
              return null
            }
            return createChainableTypeChecker(validate)
          }

          function createUnionTypeChecker(arrayOfTypeCheckers) {
            if (!Array.isArray(arrayOfTypeCheckers)) {
              true
                ? warning(
                    false,
                    'Invalid argument supplied to oneOfType, expected an instance of array.'
                  )
                : void 0
              return emptyFunction.thatReturnsNull
            }

            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
              var checker = arrayOfTypeCheckers[i]
              if (typeof checker !== 'function') {
                warning(
                  false,
                  'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
                    'received %s at index %s.',
                  getPostfixForTypeWarning(checker),
                  i
                )
                return emptyFunction.thatReturnsNull
              }
            }

            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i]
                if (
                  checker(
                    props,
                    propName,
                    componentName,
                    location,
                    propFullName,
                    ReactPropTypesSecret
                  ) == null
                ) {
                  return null
                }
              }

              return new PropTypeError(
                'Invalid ' +
                  location +
                  ' `' +
                  propFullName +
                  '` supplied to ' +
                  ('`' + componentName + '`.')
              )
            }
            return createChainableTypeChecker(validate)
          }

          function createNodeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              if (!isNode(props[propName])) {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` supplied to ' +
                    ('`' + componentName + '`, expected a ReactNode.')
                )
              }
              return null
            }
            return createChainableTypeChecker(validate)
          }

          function createShapeTypeChecker(shapeTypes) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              var propValue = props[propName]
              var propType = getPropType(propValue)
              if (propType !== 'object') {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type `' +
                    propType +
                    '` ' +
                    ('supplied to `' + componentName + '`, expected `object`.')
                )
              }
              for (var key in shapeTypes) {
                var checker = shapeTypes[key]
                if (!checker) {
                  continue
                }
                var error = checker(
                  propValue,
                  key,
                  componentName,
                  location,
                  propFullName + '.' + key,
                  ReactPropTypesSecret
                )
                if (error) {
                  return error
                }
              }
              return null
            }
            return createChainableTypeChecker(validate)
          }

          function isNode(propValue) {
            switch (typeof propValue) {
              case 'number':
              case 'string':
              case 'undefined':
                return true
              case 'boolean':
                return !propValue
              case 'object':
                if (Array.isArray(propValue)) {
                  return propValue.every(isNode)
                }
                if (propValue === null || isValidElement(propValue)) {
                  return true
                }

                var iteratorFn = getIteratorFn(propValue)
                if (iteratorFn) {
                  var iterator = iteratorFn.call(propValue)
                  var step
                  if (iteratorFn !== propValue.entries) {
                    while (!(step = iterator.next()).done) {
                      if (!isNode(step.value)) {
                        return false
                      }
                    }
                  } else {
                    // Iterator will provide entry [k,v] tuples rather than values.
                    while (!(step = iterator.next()).done) {
                      var entry = step.value
                      if (entry) {
                        if (!isNode(entry[1])) {
                          return false
                        }
                      }
                    }
                  }
                } else {
                  return false
                }

                return true
              default:
                return false
            }
          }

          function isSymbol(propType, propValue) {
            // Native Symbol.
            if (propType === 'symbol') {
              return true
            }

            // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
            if (propValue['@@toStringTag'] === 'Symbol') {
              return true
            }

            // Fallback for non-spec compliant Symbols which are polyfilled.
            if (typeof Symbol === 'function' && propValue instanceof Symbol) {
              return true
            }

            return false
          }

          // Equivalent of `typeof` but with special handling for array and regexp.
          function getPropType(propValue) {
            var propType = typeof propValue
            if (Array.isArray(propValue)) {
              return 'array'
            }
            if (propValue instanceof RegExp) {
              // Old webkits (at least until Android 4.0) return 'function' rather than
              // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
              // passes PropTypes.object.
              return 'object'
            }
            if (isSymbol(propType, propValue)) {
              return 'symbol'
            }
            return propType
          }

          // This handles more types than `getPropType`. Only used for error messages.
          // See `createPrimitiveTypeChecker`.
          function getPreciseType(propValue) {
            if (typeof propValue === 'undefined' || propValue === null) {
              return '' + propValue
            }
            var propType = getPropType(propValue)
            if (propType === 'object') {
              if (propValue instanceof Date) {
                return 'date'
              } else if (propValue instanceof RegExp) {
                return 'regexp'
              }
            }
            return propType
          }

          // Returns a string that is postfixed to a warning about an invalid type.
          // For example, "undefined" or "of type array"
          function getPostfixForTypeWarning(value) {
            var type = getPreciseType(value)
            switch (type) {
              case 'array':
              case 'object':
                return 'an ' + type
              case 'boolean':
              case 'date':
              case 'regexp':
                return 'a ' + type
              default:
                return type
            }
          }

          // Returns class name of the object, if any.
          function getClassName(propValue) {
            if (!propValue.constructor || !propValue.constructor.name) {
              return ANONYMOUS
            }
            return propValue.constructor.name
          }

          ReactPropTypes.checkPropTypes = checkPropTypes
          ReactPropTypes.PropTypes = ReactPropTypes

          return ReactPropTypes
        }

        /***/
      },
      /* 26 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

        var ReactPropTypesSecret =
          'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'

        module.exports = ReactPropTypesSecret

        /***/
      },
      /* 27 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(
          46
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(
          47
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_1_invariant__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(
          11
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_2_react__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(
          67
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(
          29
        )
        /* harmony export (immutable) */ __webpack_exports__[
          'a'
        ] = connectAdvanced
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

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass
            )
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          )
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass)
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

        var hotReloadingVersion = 0
        var dummyState = {}
        function noop() {}
        function makeSelectorStateful(sourceSelector, store) {
          // wrap the selector in an object that tracks its results between runs.
          var selector = {
            run: function runComponentSelector(props) {
              try {
                var nextProps = sourceSelector(store.getState(), props)
                if (nextProps !== selector.props || selector.error) {
                  selector.shouldComponentUpdate = true
                  selector.props = nextProps
                  selector.error = null
                }
              } catch (error) {
                selector.shouldComponentUpdate = true
                selector.error = error
              }
            }
          }

          return selector
        }

        function connectAdvanced(
          /*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
          selectorFactory
        ) {
          var _contextTypes, _childContextTypes

          var _ref = arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {},
            _ref$getDisplayName = _ref.getDisplayName,
            getDisplayName = _ref$getDisplayName === undefined
              ? function(name) {
                  return 'ConnectAdvanced(' + name + ')'
                }
              : _ref$getDisplayName,
            _ref$methodName = _ref.methodName,
            methodName = _ref$methodName === undefined
              ? 'connectAdvanced'
              : _ref$methodName,
            _ref$renderCountProp = _ref.renderCountProp,
            renderCountProp = _ref$renderCountProp === undefined
              ? undefined
              : _ref$renderCountProp,
            _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
            shouldHandleStateChanges = _ref$shouldHandleStat === undefined
              ? true
              : _ref$shouldHandleStat,
            _ref$storeKey = _ref.storeKey,
            storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
            _ref$withRef = _ref.withRef,
            withRef = _ref$withRef === undefined ? false : _ref$withRef,
            connectOptions = _objectWithoutProperties(_ref, [
              'getDisplayName',
              'methodName',
              'renderCountProp',
              'shouldHandleStateChanges',
              'storeKey',
              'withRef'
            ])

          var subscriptionKey = storeKey + 'Subscription'
          var version = hotReloadingVersion++

          var contextTypes = ((_contextTypes = {}), (_contextTypes[storeKey] =
            __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__[
              'a' /* storeShape */
            ]), (_contextTypes[subscriptionKey] =
            __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__[
              'b' /* subscriptionShape */
            ]), _contextTypes)
          var childContextTypes = ((_childContextTypes = {
          }), (_childContextTypes[subscriptionKey] =
            __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__[
              'b' /* subscriptionShape */
            ]), _childContextTypes)

          return function wrapWithConnect(WrappedComponent) {
            __WEBPACK_IMPORTED_MODULE_1_invariant___default()(
              typeof WrappedComponent == 'function',
              'You must pass a component to the function returned by ' +
                ('connect. Instead received ' +
                  JSON.stringify(WrappedComponent))
            )

            var wrappedComponentName =
              WrappedComponent.displayName ||
              WrappedComponent.name ||
              'Component'

            var displayName = getDisplayName(wrappedComponentName)

            var selectorFactoryOptions = _extends({}, connectOptions, {
              getDisplayName: getDisplayName,
              methodName: methodName,
              renderCountProp: renderCountProp,
              shouldHandleStateChanges: shouldHandleStateChanges,
              storeKey: storeKey,
              withRef: withRef,
              displayName: displayName,
              wrappedComponentName: wrappedComponentName,
              WrappedComponent: WrappedComponent
            })

            var Connect = (function(_Component) {
              _inherits(Connect, _Component)

              function Connect(props, context) {
                _classCallCheck(this, Connect)

                var _this = _possibleConstructorReturn(
                  this,
                  _Component.call(this, props, context)
                )

                _this.version = version
                _this.state = {}
                _this.renderCount = 0
                _this.store = props[storeKey] || context[storeKey]
                _this.propsMode = Boolean(props[storeKey])
                _this.setWrappedInstance = _this.setWrappedInstance.bind(_this)

                __WEBPACK_IMPORTED_MODULE_1_invariant___default()(
                  _this.store,
                  'Could not find "' +
                    storeKey +
                    '" in either the context or props of ' +
                    ('"' +
                      displayName +
                      '". Either wrap the root component in a <Provider>, ') +
                    ('or explicitly pass "' +
                      storeKey +
                      '" as a prop to "' +
                      displayName +
                      '".')
                )

                _this.initSelector()
                _this.initSubscription()
                return _this
              }

              Connect.prototype.getChildContext = function getChildContext() {
                var _ref2

                // If this component received store from props, its subscription should be transparent
                // to any descendants receiving store+subscription from context; it passes along
                // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
                // Connect to control ordering of notifications to flow top-down.
                var subscription = this.propsMode ? null : this.subscription
                return (_ref2 = {}), (_ref2[subscriptionKey] =
                  subscription || this.context[subscriptionKey]), _ref2
              }

              Connect.prototype.componentDidMount = function componentDidMount() {
                if (!shouldHandleStateChanges) return

                // componentWillMount fires during server side rendering, but componentDidMount and
                // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
                // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
                // To handle the case where a child component may have triggered a state change by
                // dispatching an action in its componentWillMount, we have to re-run the select and maybe
                // re-render.
                this.subscription.trySubscribe()
                this.selector.run(this.props)
                if (this.selector.shouldComponentUpdate) this.forceUpdate()
              }

              Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(
                nextProps
              ) {
                this.selector.run(nextProps)
              }

              Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
                return this.selector.shouldComponentUpdate
              }

              Connect.prototype.componentWillUnmount = function componentWillUnmount() {
                if (this.subscription) this.subscription.tryUnsubscribe()
                this.subscription = null
                this.notifyNestedSubs = noop
                this.store = null
                this.selector.run = noop
                this.selector.shouldComponentUpdate = false
              }

              Connect.prototype.getWrappedInstance = function getWrappedInstance() {
                __WEBPACK_IMPORTED_MODULE_1_invariant___default()(
                  withRef,
                  'To access the wrapped instance, you need to specify ' +
                    ('{ withRef: true } in the options argument of the ' +
                      methodName +
                      '() call.')
                )
                return this.wrappedInstance
              }

              Connect.prototype.setWrappedInstance = function setWrappedInstance(
                ref
              ) {
                this.wrappedInstance = ref
              }

              Connect.prototype.initSelector = function initSelector() {
                var sourceSelector = selectorFactory(
                  this.store.dispatch,
                  selectorFactoryOptions
                )
                this.selector = makeSelectorStateful(sourceSelector, this.store)
                this.selector.run(this.props)
              }

              Connect.prototype.initSubscription = function initSubscription() {
                if (!shouldHandleStateChanges) return

                // parentSub's source should match where store came from: props vs. context. A component
                // connected to the store via props shouldn't use subscription from context, or vice versa.
                var parentSub = (this.propsMode ? this.props : this.context)[
                  subscriptionKey
                ]
                this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__[
                  'a' /* default */
                ](this.store, parentSub, this.onStateChange.bind(this))

                // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
                // the middle of the notification loop, where `this.subscription` will then be null. An
                // extra null check every change can be avoided by copying the method onto `this` and then
                // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
                // listeners logic is changed to not call listeners that have been unsubscribed in the
                // middle of the notification loop.
                this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(
                  this.subscription
                )
              }

              Connect.prototype.onStateChange = function onStateChange() {
                this.selector.run(this.props)

                if (!this.selector.shouldComponentUpdate) {
                  this.notifyNestedSubs()
                } else {
                  this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate
                  this.setState(dummyState)
                }
              }

              Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
                // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
                // needs to notify nested subs. Once called, it unimplements itself until further state
                // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
                // a boolean check every time avoids an extra method call most of the time, resulting
                // in some perf boost.
                this.componentDidUpdate = undefined
                this.notifyNestedSubs()
              }

              Connect.prototype.isSubscribed = function isSubscribed() {
                return (
                  Boolean(this.subscription) && this.subscription.isSubscribed()
                )
              }

              Connect.prototype.addExtraProps = function addExtraProps(props) {
                if (
                  !withRef &&
                  !renderCountProp &&
                  !(this.propsMode && this.subscription)
                )
                  return props
                // make a shallow copy so that fields added don't leak to the original selector.
                // this is especially important for 'ref' since that's a reference back to the component
                // instance. a singleton memoized selector would then be holding a reference to the
                // instance, preventing the instance from being garbage collected, and that would be bad
                var withExtras = _extends({}, props)
                if (withRef) withExtras.ref = this.setWrappedInstance
                if (renderCountProp)
                  withExtras[renderCountProp] = this.renderCount++
                if (this.propsMode && this.subscription)
                  withExtras[subscriptionKey] = this.subscription
                return withExtras
              }

              Connect.prototype.render = function render() {
                var selector = this.selector
                selector.shouldComponentUpdate = false

                if (selector.error) {
                  throw selector.error
                } else {
                  return __webpack_require__.i(
                    __WEBPACK_IMPORTED_MODULE_2_react__['createElement']
                  )(WrappedComponent, this.addExtraProps(selector.props))
                }
              }

              return Connect
            })(__WEBPACK_IMPORTED_MODULE_2_react__['Component'])

            Connect.WrappedComponent = WrappedComponent
            Connect.displayName = displayName
            Connect.childContextTypes = childContextTypes
            Connect.contextTypes = contextTypes
            Connect.propTypes = contextTypes

            if (true) {
              Connect.prototype.componentWillUpdate = function componentWillUpdate() {
                // We are hot reloading!
                if (this.version !== version) {
                  this.version = version
                  this.initSelector()

                  if (this.subscription) this.subscription.tryUnsubscribe()
                  this.initSubscription()
                  if (shouldHandleStateChanges) this.subscription.trySubscribe()
                }
              }
            }

            return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(
              Connect,
              WrappedComponent
            )
          }
        }

        /***/
      },
      /* 28 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(
          30
        )
        /* harmony export (immutable) */ __webpack_exports__[
          'b'
        ] = wrapMapToPropsConstant
        /* unused harmony export getDependsOnOwnProps */
        /* harmony export (immutable) */ __webpack_exports__[
          'a'
        ] = wrapMapToPropsFunc

        function wrapMapToPropsConstant(getConstant) {
          return function initConstantSelector(dispatch, options) {
            var constant = getConstant(dispatch, options)

            function constantSelector() {
              return constant
            }
            constantSelector.dependsOnOwnProps = false
            return constantSelector
          }
        }

        // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
        // to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
        // whether mapToProps needs to be invoked when props have changed.
        //
        // A length of one signals that mapToProps does not depend on props from the parent component.
        // A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
        // therefore not reporting its length accurately..
        function getDependsOnOwnProps(mapToProps) {
          return mapToProps.dependsOnOwnProps !== null &&
            mapToProps.dependsOnOwnProps !== undefined
            ? Boolean(mapToProps.dependsOnOwnProps)
            : mapToProps.length !== 1
        }

        // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
        // this function wraps mapToProps in a proxy function which does several things:
        //
        //  * Detects whether the mapToProps function being called depends on props, which
        //    is used by selectorFactory to decide if it should reinvoke on props changes.
        //
        //  * On first call, handles mapToProps if returns another function, and treats that
        //    new function as the true mapToProps for subsequent calls.
        //
        //  * On first call, verifies the first result is a plain object, in order to warn
        //    the developer that their mapToProps function is not returning a valid result.
        //
        function wrapMapToPropsFunc(mapToProps, methodName) {
          return function initProxySelector(dispatch, _ref) {
            var displayName = _ref.displayName

            var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
              return proxy.dependsOnOwnProps
                ? proxy.mapToProps(stateOrDispatch, ownProps)
                : proxy.mapToProps(stateOrDispatch)
            }

            // allow detectFactoryAndVerify to get ownProps
            proxy.dependsOnOwnProps = true

            proxy.mapToProps = function detectFactoryAndVerify(
              stateOrDispatch,
              ownProps
            ) {
              proxy.mapToProps = mapToProps
              proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps)
              var props = proxy(stateOrDispatch, ownProps)

              if (typeof props === 'function') {
                proxy.mapToProps = props
                proxy.dependsOnOwnProps = getDependsOnOwnProps(props)
                props = proxy(stateOrDispatch, ownProps)
              }

              if (true)
                __webpack_require__.i(
                  __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__[
                    'a' /* default */
                  ]
                )(props, displayName, methodName)

              return props
            }

            return proxy
          }
        }

        /***/
      },
      /* 29 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(
          0
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_0_prop_types__
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'b',
          function() {
            return subscriptionShape
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return storeShape
          }
        )

        var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape(
          {
            trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a
              .func.isRequired,
            tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a
              .func.isRequired,
            notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a
              .func.isRequired,
            isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a
              .func.isRequired
          }
        )

        var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape(
          {
            subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
              .isRequired,
            dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
              .isRequired,
            getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
              .isRequired
          }
        )

        /***/
      },
      /* 30 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(
          16
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(
          17
        )
        /* harmony export (immutable) */ __webpack_exports__[
          'a'
        ] = verifyPlainObject

        function verifyPlainObject(value, displayName, methodName) {
          if (
            !__webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__[
                'a' /* default */
              ]
            )(value)
          ) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_1__warning__['a' /* default */]
            )(
              methodName +
                '() in ' +
                displayName +
                ' must return a plain object. Instead received ' +
                value +
                '.'
            )
          }
        }

        /***/
      },
      /* 31 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

        // The Symbol used to tag the ReactElement type. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.

        var REACT_ELEMENT_TYPE =
          (typeof Symbol === 'function' &&
            Symbol['for'] &&
            Symbol['for']('react.element')) ||
          0xeac7

        module.exports = REACT_ELEMENT_TYPE

        /***/
      },
      /* 32 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

        /**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

        var ReactCurrentOwner = __webpack_require__(9)
        var ReactComponentTreeHook = __webpack_require__(19)
        var ReactElement = __webpack_require__(4)

        var checkReactTypeSpec = __webpack_require__(79)

        var canDefineProperty = __webpack_require__(10)
        var getIteratorFn = __webpack_require__(34)
        var warning = __webpack_require__(1)

        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = ReactCurrentOwner.current.getName()
            if (name) {
              return ' Check the render method of `' + name + '`.'
            }
          }
          return ''
        }

        function getSourceInfoErrorAddendum(elementProps) {
          if (
            elementProps !== null &&
            elementProps !== undefined &&
            elementProps.__source !== undefined
          ) {
            var source = elementProps.__source
            var fileName = source.fileName.replace(/^.*[\\\/]/, '')
            var lineNumber = source.lineNumber
            return ' Check your code at ' + fileName + ':' + lineNumber + '.'
          }
          return ''
        }

        /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
        var ownerHasKeyUseWarning = {}

        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum()

          if (!info) {
            var parentName = typeof parentType === 'string'
              ? parentType
              : parentType.displayName || parentType.name
            if (parentName) {
              info =
                ' Check the top-level render call using <' + parentName + '>.'
            }
          }
          return info
        }

        /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
        function validateExplicitKey(element, parentType) {
          if (
            !element._store ||
            element._store.validated ||
            element.key != null
          ) {
            return
          }
          element._store.validated = true

          var memoizer =
            ownerHasKeyUseWarning.uniqueKey ||
            (ownerHasKeyUseWarning.uniqueKey = {})

          var currentComponentErrorInfo = getCurrentComponentErrorInfo(
            parentType
          )
          if (memoizer[currentComponentErrorInfo]) {
            return
          }
          memoizer[currentComponentErrorInfo] = true

          // Usually the current owner is the offender, but if it accepts children as a
          // property, it may be the creator of the child that's responsible for
          // assigning it a key.
          var childOwner = ''
          if (
            element &&
            element._owner &&
            element._owner !== ReactCurrentOwner.current
          ) {
            // Give the component that originally created this child.
            childOwner =
              ' It was passed a child from ' + element._owner.getName() + '.'
          }

          true
            ? warning(
                false,
                'Each child in an array or iterator should have a unique "key" prop.' +
                  '%s%s See https://fb.me/react-warning-keys for more information.%s',
                currentComponentErrorInfo,
                childOwner,
                ReactComponentTreeHook.getCurrentStackAddendum(element)
              )
            : void 0
        }

        /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
        function validateChildKeys(node, parentType) {
          if (typeof node !== 'object') {
            return
          }
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i]
              if (ReactElement.isValidElement(child)) {
                validateExplicitKey(child, parentType)
              }
            }
          } else if (ReactElement.isValidElement(node)) {
            // This element was passed in a valid location.
            if (node._store) {
              node._store.validated = true
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node)
            // Entry iterators provide implicit keys.
            if (iteratorFn) {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node)
                var step
                while (!(step = iterator.next()).done) {
                  if (ReactElement.isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType)
                  }
                }
              }
            }
          }
        }

        /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
        function validatePropTypes(element) {
          var componentClass = element.type
          if (typeof componentClass !== 'function') {
            return
          }
          var name = componentClass.displayName || componentClass.name
          if (componentClass.propTypes) {
            checkReactTypeSpec(
              componentClass.propTypes,
              element.props,
              'prop',
              name,
              element,
              null
            )
          }
          if (typeof componentClass.getDefaultProps === 'function') {
            true
              ? warning(
                  componentClass.getDefaultProps.isReactClassApproved,
                  'getDefaultProps is only used on classic React.createClass ' +
                    'definitions. Use a static property named `defaultProps` instead.'
                )
              : void 0
          }
        }

        var ReactElementValidator = {
          createElement: function(type, props, children) {
            var validType =
              typeof type === 'string' || typeof type === 'function'
            // We warn in this case but don't throw. We expect the element creation to
            // succeed and there will likely be errors in render.
            if (!validType) {
              if (typeof type !== 'function' && typeof type !== 'string') {
                var info = ''
                if (
                  type === undefined ||
                  (typeof type === 'object' &&
                    type !== null &&
                    Object.keys(type).length === 0)
                ) {
                  info +=
                    ' You likely forgot to export your component from the file ' +
                    "it's defined in."
                }

                var sourceInfo = getSourceInfoErrorAddendum(props)
                if (sourceInfo) {
                  info += sourceInfo
                } else {
                  info += getDeclarationErrorAddendum()
                }

                info += ReactComponentTreeHook.getCurrentStackAddendum()

                true
                  ? warning(
                      false,
                      'React.createElement: type is invalid -- expected a string (for ' +
                        'built-in components) or a class/function (for composite ' +
                        'components) but got: %s.%s',
                      type == null ? type : typeof type,
                      info
                    )
                  : void 0
              }
            }

            var element = ReactElement.createElement.apply(this, arguments)

            // The result can be nullish if a mock or a custom function is used.
            // TODO: Drop this when these are no longer allowed as the type argument.
            if (element == null) {
              return element
            }

            // Skip key warning if the type isn't valid since our key validation logic
            // doesn't expect a non-string/function type and can throw confusing errors.
            // We don't want exception behavior to differ between dev and prod.
            // (Rendering will throw with a helpful message and as soon as the type is
            // fixed, the key warnings will appear.)
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type)
              }
            }

            validatePropTypes(element)

            return element
          },

          createFactory: function(type) {
            var validatedFactory = ReactElementValidator.createElement.bind(
              null,
              type
            )
            // Legacy hook TODO: Warn if this is accessed
            validatedFactory.type = type

            if (true) {
              if (canDefineProperty) {
                Object.defineProperty(validatedFactory, 'type', {
                  enumerable: false,
                  get: function() {
                    true
                      ? warning(
                          false,
                          'Factory.type is deprecated. Access the class directly ' +
                            'before passing it to createFactory.'
                        )
                      : void 0
                    Object.defineProperty(this, 'type', {
                      value: type
                    })
                    return type
                  }
                })
              }
            }

            return validatedFactory
          },

          cloneElement: function(element, props, children) {
            var newElement = ReactElement.cloneElement.apply(this, arguments)
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type)
            }
            validatePropTypes(newElement)
            return newElement
          }
        }

        module.exports = ReactElementValidator

        /***/
      },
      /* 33 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

        var ReactPropTypeLocationNames = {}

        if (true) {
          ReactPropTypeLocationNames = {
            prop: 'prop',
            context: 'context',
            childContext: 'child context'
          }
        }

        module.exports = ReactPropTypeLocationNames

        /***/
      },
      /* 34 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

        /* global Symbol */

        var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator
        var FAUX_ITERATOR_SYMBOL = '@@iterator' // Before Symbol spec.

        /**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
        function getIteratorFn(maybeIterable) {
          var iteratorFn =
            maybeIterable &&
            ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
              maybeIterable[FAUX_ITERATOR_SYMBOL])
          if (typeof iteratorFn === 'function') {
            return iteratorFn
          }
        }

        module.exports = getIteratorFn

        /***/
      },
      /* 35 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.getOptions = exports.selectLocationState = exports.updateScroll = exports.scrollBehavior = exports.history = exports.nextPath = exports.prevPath = exports.canGoForward = exports.canGoBack = exports.canGo = exports.go = exports.next = exports.back = exports.replace = exports.push = undefined

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

        var _pathToAction2 = __webpack_require__(21)

        var _pathToAction3 = _interopRequireDefault(_pathToAction2)

        var _nestAction = __webpack_require__(6)

        var _isLocationAction = __webpack_require__(37)

        var _isLocationAction2 = _interopRequireDefault(_isLocationAction)

        var _isServer = __webpack_require__(38)

        var _isServer2 = _interopRequireDefault(_isServer)

        var _isReactNative = __webpack_require__(89)

        var _isReactNative2 = _interopRequireDefault(_isReactNative)

        var _changePageTitle = __webpack_require__(87)

        var _changePageTitle2 = _interopRequireDefault(_changePageTitle)

        var _attemptCallRouteThunk = __webpack_require__(86)

        var _attemptCallRouteThunk2 = _interopRequireDefault(
          _attemptCallRouteThunk
        )

        var _createThunk = __webpack_require__(88)

        var _createThunk2 = _interopRequireDefault(_createThunk)

        var _pathnamePlusSearch = __webpack_require__(91)

        var _pathnamePlusSearch2 = _interopRequireDefault(_pathnamePlusSearch)

        var _historyCreateAction = __webpack_require__(82)

        var _historyCreateAction2 = _interopRequireDefault(_historyCreateAction)

        var _middlewareCreateAction = __webpack_require__(83)

        var _middlewareCreateAction2 = _interopRequireDefault(
          _middlewareCreateAction
        )

        var _middlewareCreateNotFoundAction = __webpack_require__(84)

        var _middlewareCreateNotFoundAction2 = _interopRequireDefault(
          _middlewareCreateNotFoundAction
        )

        var _createLocationReducer = __webpack_require__(92)

        var _createLocationReducer2 = _interopRequireDefault(
          _createLocationReducer
        )

        var _index = __webpack_require__(2)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        var __DEV__ = 'development' !== 'production'

        /** PRIMARY EXPORT - `connectRoutes(history, routeMap, options)`:
 *
 *  PURPOSE: to provide set-it-forget-it syncing of actions to the address bar and vice
 *  versa, using the pairing of action types to express-style routePaths bi-directionally.
 *
 *  EXAMPLE:
 *  with routeMap `{ FOO: '/foo/:paramName' }`,
 *
 *  pathname '/foo/bar' would become:
 *  `{ type: 'FOO', payload: { paramName: 'bar' } }`
 *
 *  AND
 *
 *  action `{ type: 'FOO', payload: { paramName: 'bar' } }`
 *  becomes: pathname '/foo/bar'
 *
 *
 *  HOW: Firstly, the middleware listens to received actions and then converts them to the
 *  pathnames it applies to the address bar (via `history.push({ pathname })`. It also formats
 *  the action to be location-aware, primarily by including a matching pathname, which the
 *  location reducer listens to, and which user reducers can also make use of.
 *
 *  However, user reducers typically only need to  be concerned with the type
 *  and payload like they are accustomed to. That's the whole purpose of this package.
 *  The idea is by matching action types to routePaths, it's set it and forget it!
 *
 *  Secondly, a history listener listens to URL changes and dispatches actions with
 *  types and payloads that match the pathname. Hurray! Browse back/next buttons now work!
 *
 *  Both the history listener and middleware are made to not get into each other's way, i.e.
 *  avoiding double dispatching and double address bar changes.
 *
 *
 *  VERY IMPORTANT NOTE ON SSR: if you're wondering, `connectRoutes()` when called returns
 *  functions in a closure that provide access to variables in a private
 *  "per instance" fashion in order to be used in SSR without leaking
 *  state between SSR requests :).
 *
 *  As much as possible has been refactored out of this file into pure or
 *  near-pure utility functions.
*/

        exports.default = function(history) {
          var routesMap = arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {}
          var options = arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {}

          if (__DEV__) {
            if (!history) {
              throw new Error(
                "[redux-first-router] invalid `history` agument. Using the 'history' package on NPM,\n        please provide a `history` object as a second parameter. The object will be the\n        return of createBrowserHistory() (or in React Native or Node: createMemoryHistory()).\n        See: https://github.com/mjackson/history"
              )
            }

            if (
              options.restoreScroll &&
              typeof options.restoreScroll !== 'function'
            ) {
              throw new Error(
                '[redux-first-router] invalid `restoreScroll` option. Using\n        https://github.com/faceyspacey/redux-first-router-restore-scroll\n        please call `restoreScroll` and assign it the option key\n        of the same name.'
              )
            }
          }

          /** INTERNAL ENCLOSED STATE (PER INSTANCE FOR SSR!) */

          // very important: used for comparison to determine address bar changes
          var currentPath = (0, _pathnamePlusSearch2.default)(history.location)

          var prevLocation = {
            // maintains previous location state in location reducer
            pathname: '',
            type: '',
            payload: {}
          }

          var _options$notFoundPath = options.notFoundPath,
            notFoundPath = _options$notFoundPath === undefined
              ? '/not-found'
              : _options$notFoundPath,
            _options$scrollTop = options.scrollTop,
            scrollTop = _options$scrollTop === undefined
              ? false
              : _options$scrollTop,
            location = options.location,
            title = options.title,
            onBeforeChange = options.onBeforeChange,
            onAfterChange = options.onAfterChange,
            onBackNext = options.onBackNext,
            restoreScroll = options.restoreScroll,
            _options$initialDispa = options.initialDispatch,
            shouldPerformInitialDispatch = _options$initialDispa === undefined
              ? true
              : _options$initialDispa,
            querySerializer = options.querySerializer

          var selectLocationState = typeof location === 'function'
            ? location
            : location
                ? function(state) {
                    return state[location]
                  }
                : function(state) {
                    return state.location
                  }

          var selectTitleState = typeof title === 'function'
            ? title
            : title
                ? function(state) {
                    return state[title]
                  }
                : function(state) {
                    return state.title
                  }

          var scrollBehavior = restoreScroll && restoreScroll(history)

          var _pathToAction = (0, _pathToAction3.default)(
            currentPath,
            routesMap
          ),
            type = _pathToAction.type,
            payload = _pathToAction.payload,
            meta = _pathToAction.meta

          var INITIAL_LOCATION_STATE = (0, _createLocationReducer.getInitialState)(
            currentPath,
            meta,
            type,
            payload,
            routesMap,
            history
          )

          var prevState = INITIAL_LOCATION_STATE // used only to pass  as 1st arg to `scrollBehavior.updateScroll` if used
          var nextState = {} // used as 2nd arg to `scrollBehavior.updateScroll` and to change `document.title`
          var prevLength = 1 // used by `historyCreateAction` to calculate if moving along history.entries track

          var reducer = (0, _createLocationReducer2.default)(
            INITIAL_LOCATION_STATE,
            routesMap
          )
          var thunk = (0, _createThunk2.default)(routesMap, selectLocationState)
          var initialDispatch = function initialDispatch() {
            return _initialDispatch && _initialDispatch()
          }

          var windowDocument = (0, _changePageTitle.getDocument)() // get plain object for window.document if server side

          var navigators = void 0
          var patchNavigators = void 0
          var actionToNavigation = void 0
          var navigationToAction = void 0

          if (options.navigators) {
            // redux-first-router-navigation reformats the `navigators` option
            // to have the navigators nested one depth deeper, so as to include
            // the various helper functions from its package
            if (__DEV__ && !options.navigators.navigators) {
              throw new Error(
                "[redux-first-router] invalid `navigators` option. Pass your map\n        of navigators to the default import from 'redux-first-router-navigation'.\n        Don't forget: the keys are your redux state keys."
              )
            }

            navigators = options.navigators.navigators
            patchNavigators = options.navigators.patchNavigators
            actionToNavigation = options.navigators.actionToNavigation
            navigationToAction = options.navigators.navigationToAction

            patchNavigators(navigators)
          }

          /** MIDDLEWARE
   *  1)  dispatches actions with location info in the `meta` key by matching the received action
   *      type + payload to express style routePaths (which also results in location reducer state updating)
   *  2)  changes the address bar url and page title if the currentPathName changes, while
   *      avoiding collisions with simultaneous browser history changes
  */

          var middleware = function middleware(store) {
            return function(next) {
              return function(action) {
                var navigationAction = void 0

                if (navigators && action.type.indexOf('Navigation/') === 0) {
                  var _navigationToAction = navigationToAction(
                    navigators,
                    store,
                    routesMap,
                    action
                  )

                  navigationAction = _navigationToAction.navigationAction
                  action = _navigationToAction.action
                }

                var route = routesMap[action.type]

                if (action.error && (0, _isLocationAction2.default)(action)) {
                  if (__DEV__) {
                    console.warn(
                      'redux-first-router: location update did not dispatch as your action has an error.'
                    )
                  }
                } else if (
                  action.type === _index.NOT_FOUND &&
                  !(0, _isLocationAction2.default)(action)
                ) {
                  // user decided to dispatch `NOT_FOUND`, so we fill in the missing location info
                  action = (0, _middlewareCreateNotFoundAction2.default)(
                    action,
                    store.getState().location,
                    prevLocation,
                    history,
                    notFoundPath
                  )
                } else if (route && !(0, _isLocationAction2.default)(action)) {
                  // THE MAGIC: dispatched action matches a connected type, so we generate a
                  // location-aware action and also as a result update location reducer state.
                  action = (0, _middlewareCreateAction2.default)(
                    action,
                    routesMap,
                    prevLocation,
                    history,
                    notFoundPath,
                    querySerializer
                  )
                }

                if (navigators) {
                  action = actionToNavigation(
                    navigators,
                    action,
                    navigationAction,
                    route
                  )
                }

                // DISPATCH LIFECYLE:
                var skip = void 0
                if (
                  (route || action.type === _index.NOT_FOUND) &&
                  action.meta
                ) {
                  // satisify flow with `action.meta` check
                  skip = _beforeRouteChange(store, next, history, action)
                }

                if (skip) return
                var nextAction = next(action) // DISPATCH

                if (route || action.type === _index.NOT_FOUND) {
                  _afterRouteChange(store, next, route)
                }

                return nextAction
              }
            }
          }

          var _beforeRouteChange = function _beforeRouteChange(
            store,
            next,
            history,
            action
          ) {
            var location = action.meta.location

            if (onBeforeChange) {
              var skip = void 0

              var dispatch = function dispatch(action) {
                if (
                  action &&
                  action.meta &&
                  action.meta.location &&
                  action.meta.location.kind === 'redirect'
                ) {
                  skip = true
                  var _nextPath = (0, _pathnamePlusSearch2.default)(
                    location.current
                  )
                  var isHistoryChange = _nextPath === currentPath

                  // In this unique scenario, the action won't in fact be treated as a
                  // redirect since the initial action is never dispatched. If it is
                  // an action resulting from pressing the browser buttons, it will
                  // do a replace just like a redirect is meant to, since the location
                  // change is unavoidable and happens before the middleware. On the
                  // server, a redirect is always dispatched since its needed to detect
                  // whether to call `res.redirect`. In that case history is irrelevant.
                  if (!isHistoryChange && !(0, _isServer2.default)()) {
                    history.push(_nextPath) // this will be replaced since it's a redirect
                  }
                }

                var dispatch = middleware(store)(next) // re-create middleware's position in chain
                dispatch(action)
              }

              onBeforeChange(dispatch, store.getState, action)
              if (skip) return true
            }

            prevState = selectLocationState(store.getState())
            prevLocation = location.current
            prevLength = history.length

            // addressbar updated before action dispatched like in history.listener
            _middlewareAttemptChangeUrl(location, history)

            // now we can finally set the history on the action since we get its
            // value from the `history` whose value only changes after `push()`
            if ((0, _isReactNative2.default)()) {
              location.history = (0, _nestAction.nestHistory)(history)
            }
          }

          var _afterRouteChange = function _afterRouteChange(
            store,
            next,
            route
          ) {
            var dispatch = middleware(store)(next) // re-create middleware's position in chain
            var state = store.getState()
            var kind = selectLocationState(state).kind
            var title = selectTitleState(state)
            nextState = selectLocationState(state)

            if (
              (typeof route === 'undefined' ? 'undefined' : _typeof(route)) ===
              'object'
            ) {
              ;(0, _attemptCallRouteThunk2.default)(
                dispatch,
                store.getState,
                route
              )
            }

            if (onAfterChange) {
              onAfterChange(dispatch, store.getState)
            }

            if (typeof window !== 'undefined' && kind) {
              if (
                typeof onBackNext === 'function' &&
                /back|next|pop/.test(kind)
              ) {
                onBackNext(dispatch, store.getState)
              }

              setTimeout(function() {
                ;(0, _changePageTitle2.default)(windowDocument, title)

                if (scrollTop) {
                  return window.scrollTo(0, 0)
                }

                _updateScroll(false)
              })
            }
          }

          var _middlewareAttemptChangeUrl = function _middlewareAttemptChangeUrl(
            location,
            history
          ) {
            // IMPORTANT: insure history hasn't already handled location change
            var nextPath = (0, _pathnamePlusSearch2.default)(location.current)
            if (nextPath !== currentPath) {
              // keep currentPath up to date for comparison to prevent double dispatches
              // between BROWSER back/forward button usage vs middleware-generated actions
              currentPath = nextPath // IMPORTANT: must happen before history.push() (to prevent double handling)

              // for React Native, in the case `back` or `next` is
              // not called directly, `middlewareCreateAction` may emulate
              // `history` backNext actions to support features such
              // as scroll restoration. In those cases, we need to prevent
              // pushing new routes on to the entries array. `stealth` is
              // a React Navigation feature for changing StackNavigators
              // without triggering other navigators (such as a TabNavigator)
              // to change as well. It allows you to reset hidden StackNavigators.
              var kind = location.kind
              var manuallyInvoked = kind && /back|next|pop|stealth/.test(kind)

              if (!manuallyInvoked) {
                var method = kind === 'redirect' ? 'replace' : 'push'
                history[method](currentPath) // change address bar corresponding to matched actions from middleware
              }
            }
          }

          /** ENHANCER
   *  1)  dispatches actions with types and payload extracted from the URL pattern
   *      when the browser history changes
   *  2)  on load of the app dispatches an action corresponding to the initial url
   */

          var enhancer = function enhancer(createStore) {
            return function(reducer, preloadedState, enhancer) {
              // routesMap stored in location reducer will be stringified as it goes from the server to client
              // and as a result functions in route objects will be removed--here's how we insure we bring them back
              if (
                typeof window !== 'undefined' &&
                preloadedState &&
                selectLocationState(preloadedState)
              ) {
                selectLocationState(preloadedState).routesMap = routesMap
              }

              var store = createStore(reducer, preloadedState, enhancer)
              var state = store.getState()
              var location = state && selectLocationState(state)

              if (!location || !location.pathname) {
                throw new Error(
                  '[redux-first-router] you must provide the key of the location\n        reducer state and properly assigned the location reducer to that key.'
                )
              }

              history.listen(_historyAttemptDispatchAction.bind(null, store))

              // dispatch the first location-aware action so initial app state is based on the url on load
              if (!location.hasSSR || (0, _isServer2.default)()) {
                // only dispatch on client before SSR is setup, which passes state on to the client
                _initialDispatch = function _initialDispatch() {
                  var action = (0, _historyCreateAction2.default)(
                    currentPath,
                    routesMap,
                    prevLocation,
                    history,
                    'load',
                    querySerializer
                  )

                  store.dispatch(action)
                }

                if (shouldPerformInitialDispatch !== false) {
                  _initialDispatch()
                }
              } else {
                // set correct prevLocation on client that has SSR so that it will be
                // assigned to `action.meta.location.prev` and the corresponding state
                prevLocation = location
              }

              // update the scroll position after initial rendering of page
              if (typeof window !== 'undefined')
                setTimeout(function() {
                  return _updateScroll(false)
                })

              return store
            }
          }

          var _historyAttemptDispatchAction = function _historyAttemptDispatchAction(
            store,
            location,
            historyAction
          ) {
            // IMPORTANT: insure middleware hasn't already handled location change:
            var nextPath = (0, _pathnamePlusSearch2.default)(location)

            if (nextPath !== currentPath) {
              // THE MAGIC: parse the address bar path into a matched action
              var kind = historyAction === 'REPLACE'
                ? 'redirect'
                : historyAction

              var action = (0, _historyCreateAction2.default)(
                nextPath,
                routesMap,
                prevLocation,
                history,
                kind.toLowerCase(),
                querySerializer,
                currentPath,
                prevLength
              )

              currentPath = nextPath // IMPORTANT: must happen before dispatch (to prevent double handling)

              store.dispatch(action) // dispatch route type + payload corresponding to browser back/forward usage
            }
          }

          /* SIDE_EFFECTS - client-only state that must escape closure */

          _history = history
          _scrollBehavior = scrollBehavior
          _selectLocationState = selectLocationState
          _options = options
          var _initialDispatch = void 0

          _updateScroll = function _updateScroll() {
            var performedByUser = arguments.length > 0 &&
              arguments[0] !== undefined
              ? arguments[0]
              : true

            if (scrollBehavior) {
              if (!scrollBehavior.manual) {
                scrollBehavior.updateScroll(prevState, nextState)
              }
            } else if (__DEV__ && performedByUser) {
              throw new Error(
                '[redux-first-router] you must set the `restoreScroll` option before\n        you can call `updateScroll`'
              )
            }
          }

          /* RETURN  */

          return {
            reducer: reducer,
            middleware: middleware,
            enhancer: enhancer,
            thunk: thunk,
            initialDispatch: initialDispatch,

            // returned only for tests (not for use in application code)
            _middlewareAttemptChangeUrl: _middlewareAttemptChangeUrl,
            _afterRouteChange: _afterRouteChange,
            _historyAttemptDispatchAction: _historyAttemptDispatchAction,
            windowDocument: windowDocument,
            history: history
          }
        }

        /** SIDE EFFECTS:
 *  Client code needs a simple `push`,`back` + `next` functions because it's convenient for
 *  prototyping. It will not harm SSR, so long as you don't use it server side. So if you use it, that means DO NOT
 *  simulate clicking links server side--and dont do that, dispatch actions to setup state instead.
 *
 *  THE IDIOMATIC WAY: instead use https://github.com/faceyspacey/redux-first-router-link 's `<Link />`
 *  component to generate SEO friendly urls. As its `href` prop, you pass it a path, array of path
 *  segments or action, and internally it will use `connectRoutes` to change the address bar and
 *  dispatch the correct final action from middleware.
 *
 *  NOTE ON BACK FUNCTIONALITY: The better way to accomplish a back button is to use your redux state to determine
 *  the previous URL. The location reducer will also contain relevant info. But if you must,
 *  this is here for convenience and it basically simulates the user pressing the browser
 *  back button, which of course the system picks up and parses into an action.
 */

        var _history = void 0
        var _scrollBehavior = void 0
        var _updateScroll = void 0
        var _selectLocationState = void 0
        var _options = void 0

        var push = (exports.push = function push(pathname) {
          return _history.push(pathname)
        })

        var replace = (exports.replace = function replace(pathname) {
          return _history.replace(pathname)
        })

        var back = (exports.back = function back() {
          return _history.goBack()
        })

        var next = (exports.next = function next() {
          return _history.goForward()
        })

        var go = (exports.go = function go(n) {
          return _history.go(n)
        })

        var canGo = (exports.canGo = function canGo(n) {
          return _history.canGo(n)
        })

        var canGoBack = (exports.canGoBack = function canGoBack() {
          return !!_history.entries[_history.index - 1]
        })

        var canGoForward = (exports.canGoForward = function canGoForward() {
          return !!_history.entries[_history.index + 1]
        })

        var prevPath = (exports.prevPath = function prevPath() {
          var entry = _history.entries[_history.index - 1]
          return entry && entry.pathname
        })

        var nextPath = (exports.nextPath = function nextPath() {
          var entry = _history.entries[_history.index + 1]
          return entry && entry.pathname
        })

        var history = (exports.history = function history() {
          return _history
        })

        var scrollBehavior = (exports.scrollBehavior = function scrollBehavior() {
          return _scrollBehavior
        })

        var updateScroll = (exports.updateScroll = function updateScroll() {
          return _updateScroll && _updateScroll()
        })

        var selectLocationState = (exports.selectLocationState = function selectLocationState(
          state
        ) {
          return _selectLocationState(state)
        })

        var getOptions = (exports.getOptions = function getOptions() {
          return _options
        })

        /***/
      },
      /* 36 */
      /***/ function(module, exports, __webpack_require__) {
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

        var _pathToRegexp = __webpack_require__(24)

        var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        exports.default = function(action, routesMap, serializer) {
          var route = routesMap[action.type]
          var routePath = (typeof route === 'undefined'
            ? 'undefined'
            : _typeof(route)) === 'object'
            ? route.path
            : route
          var params = (typeof route === 'undefined'
            ? 'undefined'
            : _typeof(route)) === 'object'
            ? _payloadToParams(route, action.payload)
            : action.payload

          var path = _pathToRegexp2.default.compile(routePath)(params || {})

          var query = action.query || (action.payload && action.payload.query)
          var search = serializer && query && serializer.stringify(query)

          return search ? path + '?' + search : path
        }

        var _payloadToParams = function _payloadToParams(route) {
          var params = arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {}
          return Object.keys(params).reduce(function(sluggifedParams, key) {
            if (typeof params[key] !== 'undefined') {
              if (typeof params[key] === 'number') {
                sluggifedParams[key] = params[key]
              } else if (route.capitalizedWords === true) {
                sluggifedParams[key] = params[key]
                  .replace(/ /g, '-')
                  .toLowerCase()
              } else if (typeof route.toPath === 'function') {
                sluggifedParams[key] = route.toPath(params[key], key)
              } else if (typeof params[key] === 'string') {
                sluggifedParams[key] = params[key]
              }
            }

            return sluggifedParams
          }, {})
        }

        /***/
      },
      /* 37 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        exports.default = function(action) {
          return !!(action.meta &&
            action.meta.location &&
            action.meta.location.current)
        }

        /***/
      },
      /* 38 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        exports.default = function() {
          return typeof window === 'undefined' || !!window.SSRtest
        }

        /***/
      },
      /* 39 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        exports.default = function(action, kind) {
          action.meta = action.meta || {}
          action.meta.location = action.meta.location || {}
          action.meta.location.kind = kind

          return action
        }

        /***/
      },
      /* 40 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony export (immutable) */ __webpack_exports__['a'] = compose
        /**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

        function compose() {
          for (
            var _len = arguments.length, funcs = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            funcs[_key] = arguments[_key]
          }

          if (funcs.length === 0) {
            return function(arg) {
              return arg
            }
          }

          if (funcs.length === 1) {
            return funcs[0]
          }

          var last = funcs[funcs.length - 1]
          var rest = funcs.slice(0, -1)
          return function() {
            return rest.reduceRight(function(composed, f) {
              return f(composed)
            }, last.apply(undefined, arguments))
          }
        }

        /***/
      },
      /* 41 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(
          16
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(
          96
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_1_symbol_observable__
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'b',
          function() {
            return ActionTypes
          }
        )
        /* harmony export (immutable) */ __webpack_exports__['a'] = createStore

        /**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
        var ActionTypes = {
          INIT: '@@redux/INIT'
        }

        /**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
        function createStore(reducer, preloadedState, enhancer) {
          var _ref2

          if (
            typeof preloadedState === 'function' &&
            typeof enhancer === 'undefined'
          ) {
            enhancer = preloadedState
            preloadedState = undefined
          }

          if (typeof enhancer !== 'undefined') {
            if (typeof enhancer !== 'function') {
              throw new Error('Expected the enhancer to be a function.')
            }

            return enhancer(createStore)(reducer, preloadedState)
          }

          if (typeof reducer !== 'function') {
            throw new Error('Expected the reducer to be a function.')
          }

          var currentReducer = reducer
          var currentState = preloadedState
          var currentListeners = []
          var nextListeners = currentListeners
          var isDispatching = false

          function ensureCanMutateNextListeners() {
            if (nextListeners === currentListeners) {
              nextListeners = currentListeners.slice()
            }
          }

          /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
          function getState() {
            return currentState
          }

          /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
          function subscribe(listener) {
            if (typeof listener !== 'function') {
              throw new Error('Expected listener to be a function.')
            }

            var isSubscribed = true

            ensureCanMutateNextListeners()
            nextListeners.push(listener)

            return function unsubscribe() {
              if (!isSubscribed) {
                return
              }

              isSubscribed = false

              ensureCanMutateNextListeners()
              var index = nextListeners.indexOf(listener)
              nextListeners.splice(index, 1)
            }
          }

          /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(
            action
          ) {
            if (
              !__webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__[
                  'a' /* default */
                ]
              )(action)
            ) {
              throw new Error(
                'Actions must be plain objects. ' +
                  'Use custom middleware for async actions.'
              )
            }
            if (typeof action.type === 'undefined') {
              throw new Error(
                'Actions may not have an undefined "type" property. ' +
                  'Have you misspelled a constant?'
              )
            }
            if (isDispatching) {
              throw new Error('Reducers may not dispatch actions.')
            }
            try {
              isDispatching = true
              currentState = currentReducer(currentState, action)
            } finally {
              isDispatching = false
            }
            var listeners = (currentListeners = nextListeners)
            for (var i = 0; i < listeners.length; i++) {
              listeners[i]()
            }
            return action
          }
          /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(
            nextReducer
          ) {
            if (typeof nextReducer !== 'function') {
              throw new Error('Expected the nextReducer to be a function.')
            }
            currentReducer = nextReducer
            dispatch({
              type: ActionTypes.INIT
            })
          }
          /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */ function observable() {
            var _ref
            var outerSubscribe = subscribe
            return (_ref = {
              /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(
                observer
              ) {
                if (typeof observer !== 'object') {
                  throw new TypeError('Expected the observer to be an object.')
                }
                function observeState() {
                  if (observer.next) {
                    observer.next(getState())
                  }
                }
                observeState()
                var unsubscribe = outerSubscribe(observeState)
                return {
                  unsubscribe: unsubscribe
                }
              }
            }), (_ref[
              __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a
            ] = function() {
              return this
            }), _ref
          } // When a store is created, an "INIT" action is dispatched so that every // reducer returns their initial state. This effectively populates // the initial state tree.
          dispatch({
            type: ActionTypes.INIT
          })
          return (_ref2 = {
            dispatch: dispatch,
            subscribe: subscribe,
            getState: getState,
            replaceReducer: replaceReducer
          }), (_ref2[
            __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a
          ] = observable), _ref2
        } /***/
      } /* 42 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict' /* harmony export (immutable) */
        __webpack_exports__['a'] = warning
        /**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning(
          message
        ) {
          /* eslint-disable no-console */ if (
            typeof console !== 'undefined' &&
            typeof console.error === 'function'
          ) {
            console.error(message)
          } /* eslint-enable no-console */
          try {
            // This error was thrown as a convenience so that if you enable
            // "break on all exceptions" in your console,
            // it would pause the execution at this line.
            throw new Error(message) /* eslint-disable no-empty */
          } catch (e) {} /* eslint-enable no-empty */
        } /***/
      } /* 43 */ /***/,
      function(module, exports) {
        var g
        // This works in non-strict mode
        g = (function() {
          return this
        })()
        try {
          // This works if eval is allowed (see CSP)
          g = g || Function('return this')() || (1, eval)('this')
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === 'object') g = window
        } // g can still be undefined, but nothing to do about it... // We return undefined, instead of nothing here, so it's // easier to handle this case. if(!global) { ...}
        module.exports = g /***/
      } /* 44 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = function(e) {
          return e && e.preventDefault && e.preventDefault()
        } /***/
      } /* 45 */ /***/,
      function(module, exports, __webpack_require__) {
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
        var _react = __webpack_require__(11)
        var _react2 = _interopRequireDefault(_react)
        var _propTypes = __webpack_require__(0)
        var _propTypes2 = _interopRequireDefault(_propTypes)
        var _reactRedux = __webpack_require__(13)
        var _reduxFirstRouter = __webpack_require__(2)
        var _toUrl = __webpack_require__(7)
        var _toUrl2 = _interopRequireDefault(_toUrl)
        var _handlePress = __webpack_require__(12)
        var _handlePress2 = _interopRequireDefault(_handlePress)
        var _preventDefault = __webpack_require__(44)
        var _preventDefault2 = _interopRequireDefault(_preventDefault)
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              }
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
          __webpack_require__(22)
            .babelPluginFlowReactPropTypes_proptype_Store ||
          __webpack_require__(0).any
        var babelPluginFlowReactPropTypes_proptype_Connector =
          __webpack_require__(13)
            .babelPluginFlowReactPropTypes_proptype_Connector ||
          __webpack_require__(0).any
        var babelPluginFlowReactPropTypes_proptype_To =
          __webpack_require__(7).babelPluginFlowReactPropTypes_proptype_To ||
          __webpack_require__(0).any
        var babelPluginFlowReactPropTypes_proptype_OnClick =
          __webpack_require__(12)
            .babelPluginFlowReactPropTypes_proptype_OnClick ||
          __webpack_require__(0).any
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
          var location = (0, _reduxFirstRouter.selectLocationState)(
            store.getState()
          )
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
          dispatch: __webpack_require__(0).func.isRequired,
          to: typeof babelPluginFlowReactPropTypes_proptype_To === 'function'
            ? babelPluginFlowReactPropTypes_proptype_To.isRequired
                ? babelPluginFlowReactPropTypes_proptype_To.isRequired
                : babelPluginFlowReactPropTypes_proptype_To
            : __webpack_require__(0).shape(
                babelPluginFlowReactPropTypes_proptype_To
              ).isRequired,
          href: typeof babelPluginFlowReactPropTypes_proptype_To === 'function'
            ? babelPluginFlowReactPropTypes_proptype_To
            : __webpack_require__(0).shape(
                babelPluginFlowReactPropTypes_proptype_To
              ),
          redirect: __webpack_require__(0).bool,
          replace: __webpack_require__(0).bool,
          children: __webpack_require__(0).any,
          onPress: typeof babelPluginFlowReactPropTypes_proptype_OnClick ===
            'function'
            ? babelPluginFlowReactPropTypes_proptype_OnClick
            : __webpack_require__(0).shape(
                babelPluginFlowReactPropTypes_proptype_OnClick
              ),
          onClick: typeof babelPluginFlowReactPropTypes_proptype_OnClick ===
            'function'
            ? babelPluginFlowReactPropTypes_proptype_OnClick
            : __webpack_require__(0).shape(
                babelPluginFlowReactPropTypes_proptype_OnClick
              ),
          down: __webpack_require__(0).bool,
          shouldDispatch: __webpack_require__(0).bool,
          target: __webpack_require__(0).string
        }
        exports.Link = Link
        Link.contextTypes = {
          store: _propTypes2.default.object.isRequired
        }
        var connector = (0, _reactRedux.connect)() // $FlowIgnore
        exports.default = connector(Link) /***/
      } /* 46 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */ var REACT_STATICS = {
          childContextTypes: true,
          contextTypes: true,
          defaultProps: true,
          displayName: true,
          getDefaultProps: true,
          mixins: true,
          propTypes: true,
          type: true
        }
        var KNOWN_STATICS = {
          name: true,
          length: true,
          prototype: true,
          caller: true,
          arguments: true,
          arity: true
        }
        var isGetOwnPropertySymbolsAvailable =
          typeof Object.getOwnPropertySymbols === 'function'
        module.exports = function hoistNonReactStatics(
          targetComponent,
          sourceComponent,
          customStatics
        ) {
          if (typeof sourceComponent !== 'string') {
            // don't hoist over string (html) components
            var keys = Object.getOwnPropertyNames(
              sourceComponent
            ) /* istanbul ignore else */
            if (isGetOwnPropertySymbolsAvailable) {
              keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent))
            }
            for (var i = 0; i < keys.length; ++i) {
              if (
                !REACT_STATICS[keys[i]] &&
                !KNOWN_STATICS[keys[i]] &&
                (!customStatics || !customStatics[keys[i]])
              ) {
                try {
                  targetComponent[keys[i]] = sourceComponent[keys[i]]
                } catch (error) {}
              }
            }
          }
          return targetComponent
        } /***/
      } /* 47 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ /**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var invariant = function(
          condition,
          format,
          a,
          b,
          c,
          d,
          e,
          f
        ) {
          if (true) {
            if (format === undefined) {
              throw new Error('invariant requires an error message argument')
            }
          }
          if (!condition) {
            var error
            if (format === undefined) {
              error = new Error(
                'Minified exception occurred; use the non-minified dev environment ' +
                  'for the full error message and additional helpful warnings.'
              )
            } else {
              var args = [a, b, c, d, e, f]
              var argIndex = 0
              error = new Error(
                format.replace(/%s/g, function() {
                  return args[argIndex++]
                })
              )
              error.name = 'Invariant Violation'
            }
            error.framesToPop = 1 // we don't care about invariant's own frame
            throw error
          }
        }
        module.exports = invariant /***/
      } /* 48 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(
          23
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(
          51
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(
          52
        )
        /** `Object#toString` result references. */ var nullTag =
          '[object Null]',
          undefinedTag = '[object Undefined]'
        /** Built-in value references. */ var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__[
          'a' /* default */
        ]
          ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__['a' /* default */]
              .toStringTag
          : undefined
        /**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(
          value
        ) {
          if (value == null) {
            return value === undefined ? undefinedTag : nullTag
          }
          return symToStringTag && symToStringTag in Object(value)
            ? __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__['a' /* default */]
              )(value)
            : __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_2__objectToString_js__[
                  'a' /* default */
                ]
              )(value)
        } /* harmony default export */
        __webpack_exports__['a'] = baseGetTag /***/
      } /* 49 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* WEBPACK VAR INJECTION */ ;(function(global) {
          /** Detect free variable `global` from Node.js. */ var freeGlobal =
            typeof global == 'object' &&
            global &&
            global.Object === Object &&
            global /* harmony default export */
          __webpack_exports__['a'] = freeGlobal /* WEBPACK VAR INJECTION */
        }.call(__webpack_exports__, __webpack_require__(43))) /***/
      } /* 50 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(
          53
        )
        /** Built-in value references. */ var getPrototype = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_0__overArg_js__['a' /* default */]
        )(Object.getPrototypeOf, Object) /* harmony default export */
        __webpack_exports__['a'] = getPrototype /***/
      } /* 51 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(
          23
        )
        /** Used for built-in method references. */ var objectProto =
          Object.prototype
        /** Used to check objects for own properties. */ var hasOwnProperty =
          objectProto.hasOwnProperty
        /**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString =
          objectProto.toString
        /** Built-in value references. */ var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__[
          'a' /* default */
        ]
          ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__['a' /* default */]
              .toStringTag
          : undefined
        /**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(
          value
        ) {
          var isOwn = hasOwnProperty.call(value, symToStringTag),
            tag = value[symToStringTag]
          try {
            value[symToStringTag] = undefined
            var unmasked = true
          } catch (e) {}
          var result = nativeObjectToString.call(value)
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag
            } else {
              delete value[symToStringTag]
            }
          }
          return result
        } /* harmony default export */
        __webpack_exports__['a'] = getRawTag /***/
      } /* 52 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /** Used for built-in method references. */ var objectProto =
          Object.prototype
        /**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString =
          objectProto.toString
        /**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(
          value
        ) {
          return nativeObjectToString.call(value)
        } /* harmony default export */
        __webpack_exports__['a'] = objectToString /***/
      } /* 53 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(
          func,
          transform
        ) {
          return function(arg) {
            return func(transform(arg))
          }
        } /* harmony default export */
        __webpack_exports__['a'] = overArg /***/
      } /* 54 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(
          49
        )
        /** Detect free variable `self`. */ var freeSelf =
          typeof self == 'object' && self && self.Object === Object && self
        /** Used as a reference to the global object. */ var root =
          __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__['a' /* default */] ||
          freeSelf ||
          Function('return this')() /* harmony default export */
        __webpack_exports__['a'] = root /***/
      } /* 55 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(
          value
        ) {
          return value != null && typeof value == 'object'
        } /* harmony default export */
        __webpack_exports__['a'] = isObjectLike /***/
      } /* 56 */ /***/,
      function(module, exports) {
        module.exports =
          Array.isArray ||
          function(arr) {
            return Object.prototype.toString.call(arr) == '[object Array]'
          } /***/
      } /* 57 */ /***/,
      function(module, exports) {
        // shim for using process in browser
        var process = (module.exports = {}) // cached from whatever global is present so that test runners that stub it // don't break things.  But we need to wrap it in a try catch in case it is // wrapped in strict mode code which doesn't define any globals.  It's inside a // function because try/catches deoptimize in certain engines.
        var cachedSetTimeout
        var cachedClearTimeout
        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined')
        }
        function defaultClearTimeout() {
          throw new Error('clearTimeout has not been defined')
        }
        ;(function() {
          try {
            if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout
            } else {
              cachedSetTimeout = defaultSetTimout
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout
          }
          try {
            if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout
            } else {
              cachedClearTimeout = defaultClearTimeout
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout
          }
        })()
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0)
          } // if setTimeout wasn't available but was latter defined
          if (
            (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
            setTimeout
          ) {
            cachedSetTimeout = setTimeout
            return setTimeout(fun, 0)
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0)
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0)
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0)
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker)
          } // if clearTimeout wasn't available but was latter defined
          if (
            (cachedClearTimeout === defaultClearTimeout ||
              !cachedClearTimeout) &&
            clearTimeout
          ) {
            cachedClearTimeout = clearTimeout
            return clearTimeout(marker)
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker)
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker)
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker)
            }
          }
        }
        var queue = []
        var draining = false
        var currentQueue
        var queueIndex = -1
        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return
          }
          draining = false
          if (currentQueue.length) {
            queue = currentQueue.concat(queue)
          } else {
            queueIndex = -1
          }
          if (queue.length) {
            drainQueue()
          }
        }
        function drainQueue() {
          if (draining) {
            return
          }
          var timeout = runTimeout(cleanUpNextTick)
          draining = true
          var len = queue.length
          while (len) {
            currentQueue = queue
            queue = []
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run()
              }
            }
            queueIndex = -1
            len = queue.length
          }
          currentQueue = null
          draining = false
          runClearTimeout(timeout)
        }
        process.nextTick = function(fun) {
          var args = new Array(arguments.length - 1)
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i]
            }
          }
          queue.push(new Item(fun, args))
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue)
          }
        } // v8 likes predictible objects
        function Item(fun, array) {
          this.fun = fun
          this.array = array
        }
        Item.prototype.run = function() {
          this.fun.apply(null, this.array)
        }
        process.title = 'browser'
        process.browser = true
        process.env = {}
        process.argv = []
        process.version = '' // empty string to avoid regexp issues
        process.versions = {}
        function noop() {}
        process.on = noop
        process.addListener = noop
        process.once = noop
        process.off = noop
        process.removeListener = noop
        process.removeAllListeners = noop
        process.emit = noop
        process.prependListener = noop
        process.prependOnceListener = noop
        process.listeners = function(name) {
          return []
        }
        process.binding = function(name) {
          throw new Error('process.binding is not supported')
        }
        process.cwd = function() {
          return '/'
        }
        process.chdir = function(dir) {
          throw new Error('process.chdir is not supported')
        }
        process.umask = function() {
          return 0
        } /***/
      } /* 58 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ if (
          true
        ) {
          var invariant = __webpack_require__(3)
          var warning = __webpack_require__(1)
          var ReactPropTypesSecret = __webpack_require__(26)
          var loggedTypeFailures = {}
        }
        /**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(
          typeSpecs,
          values,
          location,
          componentName,
          getStack
        ) {
          if (true) {
            for (var typeSpecName in typeSpecs) {
              if (typeSpecs.hasOwnProperty(typeSpecName)) {
                var error // Prop type validation may throw. In case they do, we don't want to // fail the render phase where it didn't fail before. So we log it. // After these have been cleaned up, we'll let them throw.
                try {
                  // This is intentionally an invariant that gets caught. It's the same
                  // behavior as without this statement except with a better message.
                  invariant(
                    typeof typeSpecs[typeSpecName] === 'function',
                    '%s: %s type `%s` is invalid; it must be a function, usually from ' +
                      'React.PropTypes.',
                    componentName || 'React class',
                    location,
                    typeSpecName
                  )
                  error = typeSpecs[typeSpecName](
                    values,
                    typeSpecName,
                    componentName,
                    location,
                    null,
                    ReactPropTypesSecret
                  )
                } catch (ex) {
                  error = ex
                }
                warning(
                  !error || error instanceof Error,
                  '%s: type specification of %s `%s` is invalid; the type checker ' +
                    'function must return `null` or an `Error` but returned a %s. ' +
                    'You may have forgotten to pass an argument to the type checker ' +
                    'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                    'shape all require an argument).',
                  componentName || 'React class',
                  location,
                  typeSpecName,
                  typeof error
                )
                if (
                  error instanceof Error &&
                  !(error.message in loggedTypeFailures)
                ) {
                  // Only monitor this failure once because there tends to be a lot of the
                  // same error.
                  loggedTypeFailures[error.message] = true
                  var stack = getStack ? getStack() : ''
                  warning(
                    false,
                    'Failed %s type: %s%s',
                    location,
                    error.message,
                    stack != null ? stack : ''
                  )
                }
              }
            }
          }
        }
        module.exports = checkPropTypes /***/
      } /* 59 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict' // React 15.5 references this module, and assumes PropTypes are still callable in production. // Therefore we re-export development-only version with all the PropTypes checks here. // However if one is migrating to the `prop-types` npm library, they will go through the
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ // `index.js` entry point, and it will branch depending on the environment.
        var factory = __webpack_require__(25)
        module.exports = function(isValidElement) {
          // It is still allowed in 15.5.
          var throwOnDirectAccess = false
          return factory(isValidElement, throwOnDirectAccess)
        } /***/
      } /* 60 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(
          11
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_0_react__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(
          0
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(
          __WEBPACK_IMPORTED_MODULE_1_prop_types__
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(
          29
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(
          17
        ) /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return Provider
        })
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass
            )
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          )
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass)
        }

        var didWarnAboutReceivingStore = false
        function warnAboutReceivingStore() {
          if (didWarnAboutReceivingStore) {
            return
          }
          didWarnAboutReceivingStore = true
          __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_3__utils_warning__['a' /* default */]
          )(
            '<Provider> does not support changing `store` on the fly. ' +
              'It is most likely that you see this error because you updated to ' +
              'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' +
              'automatically. See https://github.com/reactjs/react-redux/releases/' +
              'tag/v2.0.0 for the migration instructions.'
          )
        }
        var Provider = (function(_Component) {
          _inherits(Provider, _Component)
          Provider.prototype.getChildContext = function getChildContext() {
            return {
              store: this.store,
              storeSubscription: null
            }
          }
          function Provider(props, context) {
            _classCallCheck(this, Provider)
            var _this = _possibleConstructorReturn(
              this,
              _Component.call(this, props, context)
            )
            _this.store = props.store
            return _this
          }
          Provider.prototype.render = function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__['Children'].only(
              this.props.children
            )
          }
          return Provider
        })(__WEBPACK_IMPORTED_MODULE_0_react__['Component'])
        if (true) {
          Provider.prototype.componentWillReceiveProps = function(nextProps) {
            var store = this.store
            var nextStore = nextProps.store
            if (store !== nextStore) {
              warnAboutReceivingStore()
            }
          }
        }
        Provider.propTypes = {
          store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__[
            'a' /* storeShape */
          ].isRequired,
          children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element
            .isRequired
        }
        Provider.childContextTypes = {
          store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__[
            'a' /* storeShape */
          ].isRequired,
          storeSubscription: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__[
            'b' /* subscriptionShape */
          ]
        }
        Provider.displayName = 'Provider' /***/
      } /* 61 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(
          27
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(
          68
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(
          62
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(
          63
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(
          64
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(
          65
        )
        /* unused harmony export createConnect */ var _extends =
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
        function _objectWithoutProperties(obj, keys) {
          var target = {}
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
            target[i] = obj[i]
          }
          return target
        }

        /*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */ function match(
          arg,
          factories,
          name
        ) {
          for (var i = factories.length - 1; i >= 0; i--) {
            var result = factories[i](arg)
            if (result) return result
          }
          return function(dispatch, options) {
            throw new Error(
              'Invalid value of type ' +
                typeof arg +
                ' for ' +
                name +
                ' argument when connecting component ' +
                options.wrappedComponentName +
                '.'
            )
          }
        }
        function strictEqual(a, b) {
          return a === b
        } // createConnect with default args builds the 'official' connect behavior. Calling it with // different options opens up some testing and extensibility scenarios
        function createConnect() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {},
            _ref$connectHOC = _ref.connectHOC,
            connectHOC = _ref$connectHOC === undefined
              ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__[
                  'a' /* default */
                ]
              : _ref$connectHOC,
            _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
            mapStateToPropsFactories = _ref$mapStateToPropsF === undefined
              ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__[
                  'a' /* default */
                ]
              : _ref$mapStateToPropsF,
            _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
            mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined
              ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__[
                  'a' /* default */
                ]
              : _ref$mapDispatchToPro,
            _ref$mergePropsFactor = _ref.mergePropsFactories,
            mergePropsFactories = _ref$mergePropsFactor === undefined
              ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__['a' /* default */]
              : _ref$mergePropsFactor,
            _ref$selectorFactory = _ref.selectorFactory,
            selectorFactory = _ref$selectorFactory === undefined
              ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__[
                  'a' /* default */
                ]
              : _ref$selectorFactory
          return function connect(
            mapStateToProps,
            mapDispatchToProps,
            mergeProps
          ) {
            var _ref2 = arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : {},
              _ref2$pure = _ref2.pure,
              pure = _ref2$pure === undefined ? true : _ref2$pure,
              _ref2$areStatesEqual = _ref2.areStatesEqual,
              areStatesEqual = _ref2$areStatesEqual === undefined
                ? strictEqual
                : _ref2$areStatesEqual,
              _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
              areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined
                ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__[
                    'a' /* default */
                  ]
                : _ref2$areOwnPropsEqua,
              _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
              areStatePropsEqual = _ref2$areStatePropsEq === undefined
                ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__[
                    'a' /* default */
                  ]
                : _ref2$areStatePropsEq,
              _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
              areMergedPropsEqual = _ref2$areMergedPropsE === undefined
                ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__[
                    'a' /* default */
                  ]
                : _ref2$areMergedPropsE,
              extraOptions = _objectWithoutProperties(_ref2, [
                'pure',
                'areStatesEqual',
                'areOwnPropsEqual',
                'areStatePropsEqual',
                'areMergedPropsEqual'
              ])
            var initMapStateToProps = match(
              mapStateToProps,
              mapStateToPropsFactories,
              'mapStateToProps'
            )
            var initMapDispatchToProps = match(
              mapDispatchToProps,
              mapDispatchToPropsFactories,
              'mapDispatchToProps'
            )
            var initMergeProps = match(
              mergeProps,
              mergePropsFactories,
              'mergeProps'
            )
            return connectHOC(
              selectorFactory,
              _extends(
                {
                  // used in error messages
                  methodName: 'connect', // used to compute Connect's displayName from the wrapped component's displayName.
                  getDisplayName: function getDisplayName(name) {
                    return 'Connect(' + name + ')'
                  }, // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
                  shouldHandleStateChanges: Boolean(mapStateToProps), // passed through to selectorFactory
                  initMapStateToProps: initMapStateToProps,
                  initMapDispatchToProps: initMapDispatchToProps,
                  initMergeProps: initMergeProps,
                  pure: pure,
                  areStatesEqual: areStatesEqual,
                  areOwnPropsEqual: areOwnPropsEqual,
                  areStatePropsEqual: areStatePropsEqual,
                  areMergedPropsEqual: areMergedPropsEqual
                },
                extraOptions
              )
            )
          }
        } /* harmony default export */
        __webpack_exports__['a'] = createConnect() /***/
      } /* 62 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(
          22
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(
          28
        ) /* unused harmony export whenMapDispatchToPropsIsFunction */ /* unused harmony export whenMapDispatchToPropsIsMissing */ /* unused harmony export whenMapDispatchToPropsIsObject */
        function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
          return typeof mapDispatchToProps === 'function'
            ? __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__[
                  'a' /* wrapMapToPropsFunc */
                ]
              )(mapDispatchToProps, 'mapDispatchToProps')
            : undefined
        }
        function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
          return !mapDispatchToProps
            ? __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__[
                  'b' /* wrapMapToPropsConstant */
                ]
              )(function(dispatch) {
                return {
                  dispatch: dispatch
                }
              })
            : undefined
        }
        function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
          return mapDispatchToProps && typeof mapDispatchToProps === 'object'
            ? __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__[
                  'b' /* wrapMapToPropsConstant */
                ]
              )(function(dispatch) {
                return __webpack_require__.i(
                  __WEBPACK_IMPORTED_MODULE_0_redux__['bindActionCreators']
                )(mapDispatchToProps, dispatch)
              })
            : undefined
        } /* harmony default export */
        __webpack_exports__['a'] = [
          whenMapDispatchToPropsIsFunction,
          whenMapDispatchToPropsIsMissing,
          whenMapDispatchToPropsIsObject
        ] /***/
      } /* 63 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(
          28
        ) /* unused harmony export whenMapStateToPropsIsFunction */ /* unused harmony export whenMapStateToPropsIsMissing */
        function whenMapStateToPropsIsFunction(mapStateToProps) {
          return typeof mapStateToProps === 'function'
            ? __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__[
                  'a' /* wrapMapToPropsFunc */
                ]
              )(mapStateToProps, 'mapStateToProps')
            : undefined
        }
        function whenMapStateToPropsIsMissing(mapStateToProps) {
          return !mapStateToProps
            ? __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__[
                  'b' /* wrapMapToPropsConstant */
                ]
              )(function() {
                return {}
              })
            : undefined
        } /* harmony default export */
        __webpack_exports__['a'] = [
          whenMapStateToPropsIsFunction,
          whenMapStateToPropsIsMissing
        ] /***/
      } /* 64 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(
          30
        ) /* unused harmony export defaultMergeProps */ /* unused harmony export wrapMergePropsFunc */ /* unused harmony export whenMergePropsIsFunction */
        /* unused harmony export whenMergePropsIsOmitted */ var _extends =
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
        function defaultMergeProps(stateProps, dispatchProps, ownProps) {
          return _extends({}, ownProps, stateProps, dispatchProps)
        }
        function wrapMergePropsFunc(mergeProps) {
          return function initMergePropsProxy(dispatch, _ref) {
            var displayName = _ref.displayName,
              pure = _ref.pure,
              areMergedPropsEqual = _ref.areMergedPropsEqual
            var hasRunOnce = false
            var mergedProps = void 0
            return function mergePropsProxy(
              stateProps,
              dispatchProps,
              ownProps
            ) {
              var nextMergedProps = mergeProps(
                stateProps,
                dispatchProps,
                ownProps
              )
              if (hasRunOnce) {
                if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps))
                  mergedProps = nextMergedProps
              } else {
                hasRunOnce = true
                mergedProps = nextMergedProps
                if (true)
                  __webpack_require__.i(
                    __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__[
                      'a' /* default */
                    ]
                  )(mergedProps, displayName, 'mergeProps')
              }
              return mergedProps
            }
          }
        }
        function whenMergePropsIsFunction(mergeProps) {
          return typeof mergeProps === 'function'
            ? wrapMergePropsFunc(mergeProps)
            : undefined
        }
        function whenMergePropsIsOmitted(mergeProps) {
          return !mergeProps
            ? function() {
                return defaultMergeProps
              }
            : undefined
        } /* harmony default export */
        __webpack_exports__['a'] = [
          whenMergePropsIsFunction,
          whenMergePropsIsOmitted
        ] /***/
      } /* 65 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(
          66
        ) /* unused harmony export impureFinalPropsSelectorFactory */ /* unused harmony export pureFinalPropsSelectorFactory */ /* harmony export (immutable) */
        __webpack_exports__['a'] = finalPropsSelectorFactory
        function _objectWithoutProperties(obj, keys) {
          var target = {}
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
            target[i] = obj[i]
          }
          return target
        }
        function impureFinalPropsSelectorFactory(
          mapStateToProps,
          mapDispatchToProps,
          mergeProps,
          dispatch
        ) {
          return function impureFinalPropsSelector(state, ownProps) {
            return mergeProps(
              mapStateToProps(state, ownProps),
              mapDispatchToProps(dispatch, ownProps),
              ownProps
            )
          }
        }
        function pureFinalPropsSelectorFactory(
          mapStateToProps,
          mapDispatchToProps,
          mergeProps,
          dispatch,
          _ref
        ) {
          var areStatesEqual = _ref.areStatesEqual,
            areOwnPropsEqual = _ref.areOwnPropsEqual,
            areStatePropsEqual = _ref.areStatePropsEqual
          var hasRunAtLeastOnce = false
          var state = void 0
          var ownProps = void 0
          var stateProps = void 0
          var dispatchProps = void 0
          var mergedProps = void 0
          function handleFirstCall(firstState, firstOwnProps) {
            state = firstState
            ownProps = firstOwnProps
            stateProps = mapStateToProps(state, ownProps)
            dispatchProps = mapDispatchToProps(dispatch, ownProps)
            mergedProps = mergeProps(stateProps, dispatchProps, ownProps)
            hasRunAtLeastOnce = true
            return mergedProps
          }
          function handleNewPropsAndNewState() {
            stateProps = mapStateToProps(state, ownProps)
            if (mapDispatchToProps.dependsOnOwnProps)
              dispatchProps = mapDispatchToProps(dispatch, ownProps)
            mergedProps = mergeProps(stateProps, dispatchProps, ownProps)
            return mergedProps
          }
          function handleNewProps() {
            if (mapStateToProps.dependsOnOwnProps)
              stateProps = mapStateToProps(state, ownProps)
            if (mapDispatchToProps.dependsOnOwnProps)
              dispatchProps = mapDispatchToProps(dispatch, ownProps)
            mergedProps = mergeProps(stateProps, dispatchProps, ownProps)
            return mergedProps
          }
          function handleNewState() {
            var nextStateProps = mapStateToProps(state, ownProps)
            var statePropsChanged = !areStatePropsEqual(
              nextStateProps,
              stateProps
            )
            stateProps = nextStateProps
            if (statePropsChanged)
              mergedProps = mergeProps(stateProps, dispatchProps, ownProps)
            return mergedProps
          }
          function handleSubsequentCalls(nextState, nextOwnProps) {
            var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps)
            var stateChanged = !areStatesEqual(nextState, state)
            state = nextState
            ownProps = nextOwnProps
            if (propsChanged && stateChanged) return handleNewPropsAndNewState()
            if (propsChanged) return handleNewProps()
            if (stateChanged) return handleNewState()
            return mergedProps
          }
          return function pureFinalPropsSelector(nextState, nextOwnProps) {
            return hasRunAtLeastOnce
              ? handleSubsequentCalls(nextState, nextOwnProps)
              : handleFirstCall(nextState, nextOwnProps)
          }
        } // TODO: Add more comments // If pure is true, the selector returned by selectorFactory will memoize its results, // allowing connectAdvanced's shouldComponentUpdate to return false if final // props have not changed. If false, the selector will always return a new // object and shouldComponentUpdate will always return true.
        function finalPropsSelectorFactory(dispatch, _ref2) {
          var initMapStateToProps = _ref2.initMapStateToProps,
            initMapDispatchToProps = _ref2.initMapDispatchToProps,
            initMergeProps = _ref2.initMergeProps,
            options = _objectWithoutProperties(_ref2, [
              'initMapStateToProps',
              'initMapDispatchToProps',
              'initMergeProps'
            ])
          var mapStateToProps = initMapStateToProps(dispatch, options)
          var mapDispatchToProps = initMapDispatchToProps(dispatch, options)
          var mergeProps = initMergeProps(dispatch, options)
          if (true) {
            __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__[
                'a' /* default */
              ]
            )(
              mapStateToProps,
              mapDispatchToProps,
              mergeProps,
              options.displayName
            )
          }
          var selectorFactory = options.pure
            ? pureFinalPropsSelectorFactory
            : impureFinalPropsSelectorFactory
          return selectorFactory(
            mapStateToProps,
            mapDispatchToProps,
            mergeProps,
            dispatch,
            options
          )
        } /***/
      } /* 66 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(
          17
        ) /* harmony export (immutable) */
        __webpack_exports__['a'] = verifySubselectors
        function verify(selector, methodName, displayName) {
          if (!selector) {
            throw new Error(
              'Unexpected value for ' + methodName + ' in ' + displayName + '.'
            )
          } else if (
            methodName === 'mapStateToProps' ||
            methodName === 'mapDispatchToProps'
          ) {
            if (!selector.hasOwnProperty('dependsOnOwnProps')) {
              __webpack_require__.i(
                __WEBPACK_IMPORTED_MODULE_0__utils_warning__['a' /* default */]
              )(
                'The selector for ' +
                  methodName +
                  ' of ' +
                  displayName +
                  ' did not specify a value for dependsOnOwnProps.'
              )
            }
          }
        }
        function verifySubselectors(
          mapStateToProps,
          mapDispatchToProps,
          mergeProps,
          displayName
        ) {
          verify(mapStateToProps, 'mapStateToProps', displayName)
          verify(mapDispatchToProps, 'mapDispatchToProps', displayName)
          verify(mergeProps, 'mergeProps', displayName)
        } /***/
      } /* 67 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict' /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return Subscription
        })
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        } // encapsulates the subscription logic for connecting a component to the redux store, as // well as nesting subscriptions of descendant components, so that we can ensure the // ancestor components re-render before descendants
        var CLEARED = null
        var nullListeners = {
          notify: function notify() {}
        }
        function createListenerCollection() {
          // the current/next pattern is copied from redux's createStore code.
          // TODO: refactor+expose that code to be reusable here?
          var current = []
          var next = []
          return {
            clear: function clear() {
              next = CLEARED
              current = CLEARED
            },
            notify: function notify() {
              var listeners = (current = next)
              for (var i = 0; i < listeners.length; i++) {
                listeners[i]()
              }
            },
            subscribe: function subscribe(listener) {
              var isSubscribed = true
              if (next === current) next = current.slice()
              next.push(listener)
              return function unsubscribe() {
                if (!isSubscribed || current === CLEARED) return
                isSubscribed = false
                if (next === current) next = current.slice()
                next.splice(next.indexOf(listener), 1)
              }
            }
          }
        }
        var Subscription = (function() {
          function Subscription(store, parentSub, onStateChange) {
            _classCallCheck(this, Subscription)
            this.store = store
            this.parentSub = parentSub
            this.onStateChange = onStateChange
            this.unsubscribe = null
            this.listeners = nullListeners
          }
          Subscription.prototype.addNestedSub = function addNestedSub(
            listener
          ) {
            this.trySubscribe()
            return this.listeners.subscribe(listener)
          }
          Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
            this.listeners.notify()
          }
          Subscription.prototype.isSubscribed = function isSubscribed() {
            return Boolean(this.unsubscribe)
          }
          Subscription.prototype.trySubscribe = function trySubscribe() {
            if (!this.unsubscribe) {
              this.unsubscribe = this.parentSub
                ? this.parentSub.addNestedSub(this.onStateChange)
                : this.store.subscribe(this.onStateChange)
              this.listeners = createListenerCollection()
            }
          }
          Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
            if (this.unsubscribe) {
              this.unsubscribe()
              this.unsubscribe = null
              this.listeners.clear()
              this.listeners = nullListeners
            }
          }
          return Subscription
        })() /***/
      } /* 68 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict' /* harmony export (immutable) */
        __webpack_exports__['a'] = shallowEqual
        var hasOwn = Object.prototype.hasOwnProperty
        function is(x, y) {
          if (x === y) {
            return x !== 0 || y !== 0 || 1 / x === 1 / y
          } else {
            return x !== x && y !== y
          }
        }
        function shallowEqual(objA, objB) {
          if (is(objA, objB)) return true
          if (
            typeof objA !== 'object' ||
            objA === null ||
            typeof objB !== 'object' ||
            objB === null
          ) {
            return false
          }
          var keysA = Object.keys(objA)
          var keysB = Object.keys(objB)
          if (keysA.length !== keysB.length) return false
          for (var i = 0; i < keysA.length; i++) {
            if (
              !hasOwn.call(objB, keysA[i]) ||
              !is(objA[keysA[i]], objB[keysA[i]])
            ) {
              return false
            }
          }
          return true
        } /***/
      } /* 69 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */ /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(
          key
        ) {
          var escapeRegex = /[=:]/g
          var escaperLookup = {
            '=': '=0',
            ':': '=2'
          }
          var escapedString = ('' + key).replace(escapeRegex, function(match) {
            return escaperLookup[match]
          })
          return '$' + escapedString
        }
        /**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */ function unescape(
          key
        ) {
          var unescapeRegex = /(=0|=2)/g
          var unescaperLookup = {
            '=0': '=',
            '=2': ':'
          }
          var keySubstring = key[0] === '.' && key[1] === '$'
            ? key.substring(2)
            : key.substring(1)
          return ('' + keySubstring).replace(unescapeRegex, function(match) {
            return unescaperLookup[match]
          })
        }
        var KeyEscapeUtils = {
          escape: escape,
          unescape: unescape
        }
        module.exports = KeyEscapeUtils /***/
      } /* 70 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */ var _prodInvariant = __webpack_require__(
          5
        )
        var invariant = __webpack_require__(3)
        /**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */ var oneArgumentPooler = function(
          copyFieldsFrom
        ) {
          var Klass = this
          if (Klass.instancePool.length) {
            var instance = Klass.instancePool.pop()
            Klass.call(instance, copyFieldsFrom)
            return instance
          } else {
            return new Klass(copyFieldsFrom)
          }
        }
        var twoArgumentPooler = function(a1, a2) {
          var Klass = this
          if (Klass.instancePool.length) {
            var instance = Klass.instancePool.pop()
            Klass.call(instance, a1, a2)
            return instance
          } else {
            return new Klass(a1, a2)
          }
        }
        var threeArgumentPooler = function(a1, a2, a3) {
          var Klass = this
          if (Klass.instancePool.length) {
            var instance = Klass.instancePool.pop()
            Klass.call(instance, a1, a2, a3)
            return instance
          } else {
            return new Klass(a1, a2, a3)
          }
        }
        var fourArgumentPooler = function(a1, a2, a3, a4) {
          var Klass = this
          if (Klass.instancePool.length) {
            var instance = Klass.instancePool.pop()
            Klass.call(instance, a1, a2, a3, a4)
            return instance
          } else {
            return new Klass(a1, a2, a3, a4)
          }
        }
        var standardReleaser = function(instance) {
          var Klass = this
          !(instance instanceof Klass)
            ? true
                ? invariant(
                    false,
                    'Trying to release an instance into a pool of a different type.'
                  )
                : _prodInvariant('25')
            : void 0
          instance.destructor()
          if (Klass.instancePool.length < Klass.poolSize) {
            Klass.instancePool.push(instance)
          }
        }
        var DEFAULT_POOL_SIZE = 10
        var DEFAULT_POOLER = oneArgumentPooler
        /**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */ var addPoolingTo = function(
          CopyConstructor,
          pooler
        ) {
          // Casting as any so that flow ignores the actual implementation and trusts
          // it to match the type we declared
          var NewKlass = CopyConstructor
          NewKlass.instancePool = []
          NewKlass.getPooled = pooler || DEFAULT_POOLER
          if (!NewKlass.poolSize) {
            NewKlass.poolSize = DEFAULT_POOL_SIZE
          }
          NewKlass.release = standardReleaser
          return NewKlass
        }
        var PooledClass = {
          addPoolingTo: addPoolingTo,
          oneArgumentPooler: oneArgumentPooler,
          twoArgumentPooler: twoArgumentPooler,
          threeArgumentPooler: threeArgumentPooler,
          fourArgumentPooler: fourArgumentPooler
        }
        module.exports = PooledClass /***/
      } /* 71 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ var _assign = __webpack_require__(
          8
        )
        var ReactChildren = __webpack_require__(72)
        var ReactComponent = __webpack_require__(18)
        var ReactPureComponent = __webpack_require__(77)
        var ReactClass = __webpack_require__(73)
        var ReactDOMFactories = __webpack_require__(74)
        var ReactElement = __webpack_require__(4)
        var ReactPropTypes = __webpack_require__(75)
        var ReactVersion = __webpack_require__(78)
        var onlyChild = __webpack_require__(80)
        var warning = __webpack_require__(1)
        var createElement = ReactElement.createElement
        var createFactory = ReactElement.createFactory
        var cloneElement = ReactElement.cloneElement
        if (true) {
          var canDefineProperty = __webpack_require__(10)
          var ReactElementValidator = __webpack_require__(32)
          var didWarnPropTypesDeprecated = false
          createElement = ReactElementValidator.createElement
          createFactory = ReactElementValidator.createFactory
          cloneElement = ReactElementValidator.cloneElement
        }
        var __spread = _assign
        if (true) {
          var warned = false
          __spread = function() {
            true
              ? warning(
                  warned,
                  'React.__spread is deprecated and should not be used. Use ' +
                    'Object.assign directly or another helper function with similar ' +
                    'semantics. You may be seeing this warning due to your compiler. ' +
                    'See https://fb.me/react-spread-deprecation for more details.'
                )
              : void 0
            warned = true
            return _assign.apply(null, arguments)
          }
        }
        var React = {
          // Modern
          Children: {
            map: ReactChildren.map,
            forEach: ReactChildren.forEach,
            count: ReactChildren.count,
            toArray: ReactChildren.toArray,
            only: onlyChild
          },
          Component: ReactComponent,
          PureComponent: ReactPureComponent,
          createElement: createElement,
          cloneElement: cloneElement,
          isValidElement: ReactElement.isValidElement, // Classic

          PropTypes: ReactPropTypes,
          createClass: ReactClass.createClass,
          createFactory: createFactory,
          createMixin: function(mixin) {
            // Currently a noop. Will be used to validate and trace mixins.
            return mixin
          }, // This looks DOM specific but these are actually isomorphic helpers // since they are just generating DOM strings.
          DOM: ReactDOMFactories,
          version: ReactVersion, // Deprecated hook for JSX spread, don't use this for anything.
          __spread: __spread
        } // TODO: Fix tests so that this deprecation warning doesn't cause failures.
        if (true) {
          if (canDefineProperty) {
            Object.defineProperty(React, 'PropTypes', {
              get: function() {
                true
                  ? warning(
                      didWarnPropTypesDeprecated,
                      'Accessing PropTypes via the main React package is deprecated. Use ' +
                        'the prop-types package from npm instead.'
                    )
                  : void 0
                didWarnPropTypesDeprecated = true
                return ReactPropTypes
              }
            })
          }
        }
        module.exports = React /***/
      } /* 72 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ var PooledClass = __webpack_require__(
          70
        )
        var ReactElement = __webpack_require__(4)
        var emptyFunction = __webpack_require__(14)
        var traverseAllChildren = __webpack_require__(81)
        var twoArgumentPooler = PooledClass.twoArgumentPooler
        var fourArgumentPooler = PooledClass.fourArgumentPooler
        var userProvidedKeyEscapeRegex = /\/+/g
        function escapeUserProvidedKey(text) {
          return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/')
        }
        /**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */ function ForEachBookKeeping(
          forEachFunction,
          forEachContext
        ) {
          this.func = forEachFunction
          this.context = forEachContext
          this.count = 0
        }
        ForEachBookKeeping.prototype.destructor = function() {
          this.func = null
          this.context = null
          this.count = 0
        }
        PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler)
        function forEachSingleChild(bookKeeping, child, name) {
          var func = bookKeeping.func, context = bookKeeping.context
          func.call(context, child, bookKeeping.count++)
        }
        /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(
          children,
          forEachFunc,
          forEachContext
        ) {
          if (children == null) {
            return children
          }
          var traverseContext = ForEachBookKeeping.getPooled(
            forEachFunc,
            forEachContext
          )
          traverseAllChildren(children, forEachSingleChild, traverseContext)
          ForEachBookKeeping.release(traverseContext)
        }
        /**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */ function MapBookKeeping(
          mapResult,
          keyPrefix,
          mapFunction,
          mapContext
        ) {
          this.result = mapResult
          this.keyPrefix = keyPrefix
          this.func = mapFunction
          this.context = mapContext
          this.count = 0
        }
        MapBookKeeping.prototype.destructor = function() {
          this.result = null
          this.keyPrefix = null
          this.func = null
          this.context = null
          this.count = 0
        }
        PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler)
        function mapSingleChildIntoContext(bookKeeping, child, childKey) {
          var result = bookKeeping.result,
            keyPrefix = bookKeeping.keyPrefix,
            func = bookKeeping.func,
            context = bookKeeping.context
          var mappedChild = func.call(context, child, bookKeeping.count++)
          if (Array.isArray(mappedChild)) {
            mapIntoWithKeyPrefixInternal(
              mappedChild,
              result,
              childKey,
              emptyFunction.thatReturnsArgument
            )
          } else if (mappedChild != null) {
            if (ReactElement.isValidElement(mappedChild)) {
              mappedChild = ReactElement.cloneAndReplaceKey(
                mappedChild, // Keep both the (mapped) and old keys if they differ, just as // traverseAllChildren used to do for objects as children
                keyPrefix +
                  (mappedChild.key && (!child || child.key !== mappedChild.key)
                    ? escapeUserProvidedKey(mappedChild.key) + '/'
                    : '') +
                  childKey
              )
            }
            result.push(mappedChild)
          }
        }
        function mapIntoWithKeyPrefixInternal(
          children,
          array,
          prefix,
          func,
          context
        ) {
          var escapedPrefix = ''
          if (prefix != null) {
            escapedPrefix = escapeUserProvidedKey(prefix) + '/'
          }
          var traverseContext = MapBookKeeping.getPooled(
            array,
            escapedPrefix,
            func,
            context
          )
          traverseAllChildren(
            children,
            mapSingleChildIntoContext,
            traverseContext
          )
          MapBookKeeping.release(traverseContext)
        }
        /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(
          children,
          func,
          context
        ) {
          if (children == null) {
            return children
          }
          var result = []
          mapIntoWithKeyPrefixInternal(children, result, null, func, context)
          return result
        }
        function forEachSingleChildDummy(traverseContext, child, name) {
          return null
        }
        /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(
          children,
          context
        ) {
          return traverseAllChildren(children, forEachSingleChildDummy, null)
        }
        /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */ function toArray(
          children
        ) {
          var result = []
          mapIntoWithKeyPrefixInternal(
            children,
            result,
            null,
            emptyFunction.thatReturnsArgument
          )
          return result
        }
        var ReactChildren = {
          forEach: forEachChildren,
          map: mapChildren,
          mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
          count: countChildren,
          toArray: toArray
        }
        module.exports = ReactChildren /***/
      } /* 73 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ var _prodInvariant = __webpack_require__(
          5
        ),
          _assign = __webpack_require__(8)
        var ReactComponent = __webpack_require__(18)
        var ReactElement = __webpack_require__(4)
        var ReactPropTypeLocationNames = __webpack_require__(33)
        var ReactNoopUpdateQueue = __webpack_require__(20)
        var emptyObject = __webpack_require__(15)
        var invariant = __webpack_require__(3)
        var warning = __webpack_require__(1)
        var MIXINS_KEY = 'mixins' // Helper function to allow the creation of anonymous functions which do not // have .name set to the name of the variable being assigned to.
        function identity(fn) {
          return fn
        }
        /**
 * Policies that describe methods in `ReactClassInterface`.
 */ var injectedMixins = [
        ]
        /**
 * Composite components are higher-level components that compose other composite
 * or host components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */ var ReactClassInterface = {
          /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */ mixins: 'DEFINE_MANY',
          /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */ statics: 'DEFINE_MANY',
          /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */ propTypes: 'DEFINE_MANY',
          /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */ contextTypes: 'DEFINE_MANY',
          /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */ childContextTypes: 'DEFINE_MANY', // ==== Definition methods ====

          /**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */ getDefaultProps: 'DEFINE_MANY_MERGED',
          /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */ getInitialState: 'DEFINE_MANY_MERGED',
          /**
   * @return {object}
   * @optional
   */ getChildContext: 'DEFINE_MANY_MERGED',
          /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @required
   */ render: 'DEFINE_ONCE', // ==== Delegate methods ====

          /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */ componentWillMount: 'DEFINE_MANY',
          /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */ componentDidMount: 'DEFINE_MANY',
          /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */ componentWillReceiveProps: 'DEFINE_MANY',
          /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */ shouldComponentUpdate: 'DEFINE_ONCE',
          /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */ componentWillUpdate: 'DEFINE_MANY',
          /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */ componentDidUpdate: 'DEFINE_MANY',
          /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */ componentWillUnmount: 'DEFINE_MANY', // ==== Advanced methods ====

          /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */ updateComponent: 'OVERRIDE_BASE'
        }
        /**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */ var RESERVED_SPEC_KEYS = {
          displayName: function(Constructor, displayName) {
            Constructor.displayName = displayName
          },
          mixins: function(Constructor, mixins) {
            if (mixins) {
              for (var i = 0; i < mixins.length; i++) {
                mixSpecIntoComponent(Constructor, mixins[i])
              }
            }
          },
          childContextTypes: function(Constructor, childContextTypes) {
            if (true) {
              validateTypeDef(Constructor, childContextTypes, 'childContext')
            }
            Constructor.childContextTypes = _assign(
              {},
              Constructor.childContextTypes,
              childContextTypes
            )
          },
          contextTypes: function(Constructor, contextTypes) {
            if (true) {
              validateTypeDef(Constructor, contextTypes, 'context')
            }
            Constructor.contextTypes = _assign(
              {},
              Constructor.contextTypes,
              contextTypes
            )
          },
          /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */ getDefaultProps: function(
            Constructor,
            getDefaultProps
          ) {
            if (Constructor.getDefaultProps) {
              Constructor.getDefaultProps = createMergedResultFunction(
                Constructor.getDefaultProps,
                getDefaultProps
              )
            } else {
              Constructor.getDefaultProps = getDefaultProps
            }
          },
          propTypes: function(Constructor, propTypes) {
            if (true) {
              validateTypeDef(Constructor, propTypes, 'prop')
            }
            Constructor.propTypes = _assign(
              {},
              Constructor.propTypes,
              propTypes
            )
          },
          statics: function(Constructor, statics) {
            mixStaticSpecIntoComponent(Constructor, statics)
          },
          autobind: function() {}
        }
        function validateTypeDef(Constructor, typeDef, location) {
          for (var propName in typeDef) {
            if (typeDef.hasOwnProperty(propName)) {
              // use a warning instead of an invariant so components
              // don't show up in prod but only in __DEV__
              true
                ? warning(
                    typeof typeDef[propName] === 'function',
                    '%s: %s type `%s` is invalid; it must be a function, usually from ' +
                      'React.PropTypes.',
                    Constructor.displayName || 'ReactClass',
                    ReactPropTypeLocationNames[location],
                    propName
                  )
                : void 0
            }
          }
        }
        function validateMethodOverride(isAlreadyDefined, name) {
          var specPolicy = ReactClassInterface.hasOwnProperty(name)
            ? ReactClassInterface[name]
            : null // Disallow overriding of base class methods unless explicitly allowed.
          if (ReactClassMixin.hasOwnProperty(name)) {
            !(specPolicy === 'OVERRIDE_BASE')
              ? true
                  ? invariant(
                      false,
                      'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',
                      name
                    )
                  : _prodInvariant('73', name)
              : void 0
          } // Disallow defining methods more than once unless explicitly allowed.
          if (isAlreadyDefined) {
            !(specPolicy === 'DEFINE_MANY' ||
              specPolicy === 'DEFINE_MANY_MERGED')
              ? true
                  ? invariant(
                      false,
                      'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
                      name
                    )
                  : _prodInvariant('74', name)
              : void 0
          }
        }
        /**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classes.
 */ function mixSpecIntoComponent(
          Constructor,
          spec
        ) {
          if (!spec) {
            if (true) {
              var typeofSpec = typeof spec
              var isMixinValid = typeofSpec === 'object' && spec !== null
              true
                ? warning(
                    isMixinValid,
                    "%s: You're attempting to include a mixin that is either null " +
                      'or not an object. Check the mixins included by the component, ' +
                      'as well as any mixins they include themselves. ' +
                      'Expected object but got %s.',
                    Constructor.displayName || 'ReactClass',
                    spec === null ? null : typeofSpec
                  )
                : void 0
            }
            return
          }
          !(typeof spec !== 'function')
            ? true
                ? invariant(
                    false,
                    "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
                  )
                : _prodInvariant('75')
            : void 0
          !!ReactElement.isValidElement(spec)
            ? true
                ? invariant(
                    false,
                    "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
                  )
                : _prodInvariant('76')
            : void 0
          var proto = Constructor.prototype
          var autoBindPairs = proto.__reactAutoBindPairs // By handling mixins before any other properties, we ensure the same // chaining order is applied to methods with DEFINE_MANY policy, whether // mixins are listed before or after these methods in the spec.
          if (spec.hasOwnProperty(MIXINS_KEY)) {
            RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins)
          }
          for (var name in spec) {
            if (!spec.hasOwnProperty(name)) {
              continue
            }
            if (name === MIXINS_KEY) {
              // We have already handled mixins in a special case above.
              continue
            }
            var property = spec[name]
            var isAlreadyDefined = proto.hasOwnProperty(name)
            validateMethodOverride(isAlreadyDefined, name)
            if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
              RESERVED_SPEC_KEYS[name](Constructor, property)
            } else {
              // Setup methods on prototype:
              // The following member methods should not be automatically bound:
              // 1. Expected ReactClass methods (in the "interface").
              // 2. Overridden methods (that were mixed in).
              var isReactClassMethod = ReactClassInterface.hasOwnProperty(name)
              var isFunction = typeof property === 'function'
              var shouldAutoBind =
                isFunction &&
                !isReactClassMethod &&
                !isAlreadyDefined &&
                spec.autobind !== false
              if (shouldAutoBind) {
                autoBindPairs.push(name, property)
                proto[name] = property
              } else {
                if (isAlreadyDefined) {
                  var specPolicy = ReactClassInterface[name] // These cases should already be caught by validateMethodOverride.
                  !(isReactClassMethod &&
                    (specPolicy === 'DEFINE_MANY_MERGED' ||
                      specPolicy === 'DEFINE_MANY'))
                    ? true
                        ? invariant(
                            false,
                            'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',
                            specPolicy,
                            name
                          )
                        : _prodInvariant('77', specPolicy, name)
                    : void 0 // For methods which are defined more than once, call the existing // methods before calling the new property, merging if appropriate.
                  if (specPolicy === 'DEFINE_MANY_MERGED') {
                    proto[name] = createMergedResultFunction(
                      proto[name],
                      property
                    )
                  } else if (specPolicy === 'DEFINE_MANY') {
                    proto[name] = createChainedFunction(proto[name], property)
                  }
                } else {
                  proto[name] = property
                  if (true) {
                    // Add verbose displayName to the function, which helps when looking
                    // at profiling tools.
                    if (typeof property === 'function' && spec.displayName) {
                      proto[name].displayName = spec.displayName + '_' + name
                    }
                  }
                }
              }
            }
          }
        }
        function mixStaticSpecIntoComponent(Constructor, statics) {
          if (!statics) {
            return
          }
          for (var name in statics) {
            var property = statics[name]
            if (!statics.hasOwnProperty(name)) {
              continue
            }
            var isReserved = name in RESERVED_SPEC_KEYS
            !!isReserved
              ? true
                  ? invariant(
                      false,
                      'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
                      name
                    )
                  : _prodInvariant('78', name)
              : void 0
            var isInherited = name in Constructor
            !!isInherited
              ? true
                  ? invariant(
                      false,
                      'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
                      name
                    )
                  : _prodInvariant('79', name)
              : void 0
            Constructor[name] = property
          }
        }
        /**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */ function mergeIntoWithNoDuplicateKeys(
          one,
          two
        ) {
          !(one && two && typeof one === 'object' && typeof two === 'object')
            ? true
                ? invariant(
                    false,
                    'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
                  )
                : _prodInvariant('80')
            : void 0
          for (var key in two) {
            if (two.hasOwnProperty(key)) {
              !(one[key] === undefined)
                ? true
                    ? invariant(
                        false,
                        'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',
                        key
                      )
                    : _prodInvariant('81', key)
                : void 0
              one[key] = two[key]
            }
          }
          return one
        }
        /**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */ function createMergedResultFunction(
          one,
          two
        ) {
          return function mergedResult() {
            var a = one.apply(this, arguments)
            var b = two.apply(this, arguments)
            if (a == null) {
              return b
            } else if (b == null) {
              return a
            }
            var c = {}
            mergeIntoWithNoDuplicateKeys(c, a)
            mergeIntoWithNoDuplicateKeys(c, b)
            return c
          }
        }
        /**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */ function createChainedFunction(
          one,
          two
        ) {
          return function chainedFunction() {
            one.apply(this, arguments)
            two.apply(this, arguments)
          }
        }
        /**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */ function bindAutoBindMethod(
          component,
          method
        ) {
          var boundMethod = method.bind(component)
          if (true) {
            boundMethod.__reactBoundContext = component
            boundMethod.__reactBoundMethod = method
            boundMethod.__reactBoundArguments = null
            var componentName = component.constructor.displayName
            var _bind = boundMethod.bind
            boundMethod.bind = function(newThis) {
              for (
                var _len = arguments.length,
                  args = Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                args[_key - 1] = arguments[_key]
              } // User is trying to bind() an autobound method; we effectively will // ignore the value of "this" that the user is trying to use, so // let's warn.
              if (newThis !== component && newThis !== null) {
                true
                  ? warning(
                      false,
                      'bind(): React component methods may only be bound to the ' +
                        'component instance. See %s',
                      componentName
                    )
                  : void 0
              } else if (!args.length) {
                true
                  ? warning(
                      false,
                      'bind(): You are binding a component method to the component. ' +
                        'React does this for you automatically in a high-performance ' +
                        'way, so you can safely remove this call. See %s',
                      componentName
                    )
                  : void 0
                return boundMethod
              }
              var reboundMethod = _bind.apply(boundMethod, arguments)
              reboundMethod.__reactBoundContext = component
              reboundMethod.__reactBoundMethod = method
              reboundMethod.__reactBoundArguments = args
              return reboundMethod
            }
          }
          return boundMethod
        }
        /**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */ function bindAutoBindMethods(
          component
        ) {
          var pairs = component.__reactAutoBindPairs
          for (var i = 0; i < pairs.length; i += 2) {
            var autoBindKey = pairs[i]
            var method = pairs[i + 1]
            component[autoBindKey] = bindAutoBindMethod(component, method)
          }
        }
        /**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */ var ReactClassMixin = {
          /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */ replaceState: function(
            newState,
            callback
          ) {
            this.updater.enqueueReplaceState(this, newState)
            if (callback) {
              this.updater.enqueueCallback(this, callback, 'replaceState')
            }
          },
          /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function() {
            return this.updater.isMounted(this)
          }
        }
        var ReactClassComponent = function() {}
        _assign(
          ReactClassComponent.prototype,
          ReactComponent.prototype,
          ReactClassMixin
        )
        var didWarnDeprecated = false
        /**
 * Module for creating composite components.
 *
 * @class ReactClass
 */ var ReactClass = {
          /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */ createClass: function(
            spec
          ) {
            if (true) {
              true
                ? warning(
                    didWarnDeprecated,
                    '%s: React.createClass is deprecated and will be removed in version 16. ' +
                      "Use plain JavaScript classes instead. If you're not yet ready to " +
                      'migrate, create-react-class is available on npm as a ' +
                      'drop-in replacement.',
                    (spec && spec.displayName) || 'A Component'
                  )
                : void 0
              didWarnDeprecated = true
            } // To keep our warnings more understandable, we'll use a little hack here to // ensure that Constructor.name !== 'Constructor'. This makes sure we don't // unnecessarily identify a class without displayName as 'Constructor'.
            var Constructor = identity(function(props, context, updater) {
              // This constructor gets overridden by mocks. The argument is used
              // by mocks to assert on what gets mounted.
              if (true) {
                true
                  ? warning(
                      this instanceof Constructor,
                      'Something is calling a React component directly. Use a factory or ' +
                        'JSX instead. See: https://fb.me/react-legacyfactory'
                    )
                  : void 0
              } // Wire up auto-binding
              if (this.__reactAutoBindPairs.length) {
                bindAutoBindMethods(this)
              }
              this.props = props
              this.context = context
              this.refs = emptyObject
              this.updater = updater || ReactNoopUpdateQueue
              this.state = null // ReactClasses doesn't have constructors. Instead, they use the // getInitialState and componentWillMount methods for initialization.
              var initialState = this.getInitialState
                ? this.getInitialState()
                : null
              if (true) {
                // We allow auto-mocks to proceed as if they're returning null.
                if (
                  initialState === undefined &&
                  this.getInitialState._isMockFunction
                ) {
                  // This is probably bad practice. Consider warning here and
                  // deprecating this convenience.
                  initialState = null
                }
              }
              !(typeof initialState === 'object' &&
                !Array.isArray(initialState))
                ? true
                    ? invariant(
                        false,
                        '%s.getInitialState(): must return an object or null',
                        Constructor.displayName || 'ReactCompositeComponent'
                      )
                    : _prodInvariant(
                        '82',
                        Constructor.displayName || 'ReactCompositeComponent'
                      )
                : void 0
              this.state = initialState
            })
            Constructor.prototype = new ReactClassComponent()
            Constructor.prototype.constructor = Constructor
            Constructor.prototype.__reactAutoBindPairs = []
            injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor))
            mixSpecIntoComponent(Constructor, spec) // Initialize the defaultProps property after all mixins have been merged.
            if (Constructor.getDefaultProps) {
              Constructor.defaultProps = Constructor.getDefaultProps()
            }
            if (true) {
              // This is a tag to indicate that the use of these method names is ok,
              // since it's used with createClass. If it's not, then it's likely a
              // mistake so we'll warn you to use the static property, property
              // initializer or constructor respectively.
              if (Constructor.getDefaultProps) {
                Constructor.getDefaultProps.isReactClassApproved = {}
              }
              if (Constructor.prototype.getInitialState) {
                Constructor.prototype.getInitialState.isReactClassApproved = {}
              }
            }
            !Constructor.prototype.render
              ? true
                  ? invariant(
                      false,
                      'createClass(...): Class specification must implement a `render` method.'
                    )
                  : _prodInvariant('83')
              : void 0
            if (true) {
              true
                ? warning(
                    !Constructor.prototype.componentShouldUpdate,
                    '%s has a method called ' +
                      'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
                      'The name is phrased as a question because the function is ' +
                      'expected to return a value.',
                    spec.displayName || 'A component'
                  )
                : void 0
              true
                ? warning(
                    !Constructor.prototype.componentWillRecieveProps,
                    '%s has a method called ' +
                      'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
                    spec.displayName || 'A component'
                  )
                : void 0
            } // Reduce time spent doing lookups by setting these on the prototype.
            for (var methodName in ReactClassInterface) {
              if (!Constructor.prototype[methodName]) {
                Constructor.prototype[methodName] = null
              }
            }
            return Constructor
          },
          injection: {
            injectMixin: function(mixin) {
              injectedMixins.push(mixin)
            }
          }
        }
        module.exports = ReactClass /***/
      } /* 74 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ var ReactElement = __webpack_require__(
          4
        )
        /**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */ var createDOMFactory =
          ReactElement.createFactory
        if (true) {
          var ReactElementValidator = __webpack_require__(32)
          createDOMFactory = ReactElementValidator.createFactory
        }
        /**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */ var ReactDOMFactories = {
          a: createDOMFactory('a'),
          abbr: createDOMFactory('abbr'),
          address: createDOMFactory('address'),
          area: createDOMFactory('area'),
          article: createDOMFactory('article'),
          aside: createDOMFactory('aside'),
          audio: createDOMFactory('audio'),
          b: createDOMFactory('b'),
          base: createDOMFactory('base'),
          bdi: createDOMFactory('bdi'),
          bdo: createDOMFactory('bdo'),
          big: createDOMFactory('big'),
          blockquote: createDOMFactory('blockquote'),
          body: createDOMFactory('body'),
          br: createDOMFactory('br'),
          button: createDOMFactory('button'),
          canvas: createDOMFactory('canvas'),
          caption: createDOMFactory('caption'),
          cite: createDOMFactory('cite'),
          code: createDOMFactory('code'),
          col: createDOMFactory('col'),
          colgroup: createDOMFactory('colgroup'),
          data: createDOMFactory('data'),
          datalist: createDOMFactory('datalist'),
          dd: createDOMFactory('dd'),
          del: createDOMFactory('del'),
          details: createDOMFactory('details'),
          dfn: createDOMFactory('dfn'),
          dialog: createDOMFactory('dialog'),
          div: createDOMFactory('div'),
          dl: createDOMFactory('dl'),
          dt: createDOMFactory('dt'),
          em: createDOMFactory('em'),
          embed: createDOMFactory('embed'),
          fieldset: createDOMFactory('fieldset'),
          figcaption: createDOMFactory('figcaption'),
          figure: createDOMFactory('figure'),
          footer: createDOMFactory('footer'),
          form: createDOMFactory('form'),
          h1: createDOMFactory('h1'),
          h2: createDOMFactory('h2'),
          h3: createDOMFactory('h3'),
          h4: createDOMFactory('h4'),
          h5: createDOMFactory('h5'),
          h6: createDOMFactory('h6'),
          head: createDOMFactory('head'),
          header: createDOMFactory('header'),
          hgroup: createDOMFactory('hgroup'),
          hr: createDOMFactory('hr'),
          html: createDOMFactory('html'),
          i: createDOMFactory('i'),
          iframe: createDOMFactory('iframe'),
          img: createDOMFactory('img'),
          input: createDOMFactory('input'),
          ins: createDOMFactory('ins'),
          kbd: createDOMFactory('kbd'),
          keygen: createDOMFactory('keygen'),
          label: createDOMFactory('label'),
          legend: createDOMFactory('legend'),
          li: createDOMFactory('li'),
          link: createDOMFactory('link'),
          main: createDOMFactory('main'),
          map: createDOMFactory('map'),
          mark: createDOMFactory('mark'),
          menu: createDOMFactory('menu'),
          menuitem: createDOMFactory('menuitem'),
          meta: createDOMFactory('meta'),
          meter: createDOMFactory('meter'),
          nav: createDOMFactory('nav'),
          noscript: createDOMFactory('noscript'),
          object: createDOMFactory('object'),
          ol: createDOMFactory('ol'),
          optgroup: createDOMFactory('optgroup'),
          option: createDOMFactory('option'),
          output: createDOMFactory('output'),
          p: createDOMFactory('p'),
          param: createDOMFactory('param'),
          picture: createDOMFactory('picture'),
          pre: createDOMFactory('pre'),
          progress: createDOMFactory('progress'),
          q: createDOMFactory('q'),
          rp: createDOMFactory('rp'),
          rt: createDOMFactory('rt'),
          ruby: createDOMFactory('ruby'),
          s: createDOMFactory('s'),
          samp: createDOMFactory('samp'),
          script: createDOMFactory('script'),
          section: createDOMFactory('section'),
          select: createDOMFactory('select'),
          small: createDOMFactory('small'),
          source: createDOMFactory('source'),
          span: createDOMFactory('span'),
          strong: createDOMFactory('strong'),
          style: createDOMFactory('style'),
          sub: createDOMFactory('sub'),
          summary: createDOMFactory('summary'),
          sup: createDOMFactory('sup'),
          table: createDOMFactory('table'),
          tbody: createDOMFactory('tbody'),
          td: createDOMFactory('td'),
          textarea: createDOMFactory('textarea'),
          tfoot: createDOMFactory('tfoot'),
          th: createDOMFactory('th'),
          thead: createDOMFactory('thead'),
          time: createDOMFactory('time'),
          title: createDOMFactory('title'),
          tr: createDOMFactory('tr'),
          track: createDOMFactory('track'),
          u: createDOMFactory('u'),
          ul: createDOMFactory('ul'),
          var: createDOMFactory('var'),
          video: createDOMFactory('video'),
          wbr: createDOMFactory('wbr'), // SVG
          circle: createDOMFactory('circle'),
          clipPath: createDOMFactory('clipPath'),
          defs: createDOMFactory('defs'),
          ellipse: createDOMFactory('ellipse'),
          g: createDOMFactory('g'),
          image: createDOMFactory('image'),
          line: createDOMFactory('line'),
          linearGradient: createDOMFactory('linearGradient'),
          mask: createDOMFactory('mask'),
          path: createDOMFactory('path'),
          pattern: createDOMFactory('pattern'),
          polygon: createDOMFactory('polygon'),
          polyline: createDOMFactory('polyline'),
          radialGradient: createDOMFactory('radialGradient'),
          rect: createDOMFactory('rect'),
          stop: createDOMFactory('stop'),
          svg: createDOMFactory('svg'),
          text: createDOMFactory('text'),
          tspan: createDOMFactory('tspan')
        }
        module.exports = ReactDOMFactories /***/
      } /* 75 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ var _require = __webpack_require__(
          4
        ),
          isValidElement = _require.isValidElement
        var factory = __webpack_require__(59)
        module.exports = factory(isValidElement) /***/
      } /* 76 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */ var ReactPropTypesSecret =
          'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
        module.exports = ReactPropTypesSecret /***/
      } /* 77 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ var _assign = __webpack_require__(
          8
        )
        var ReactComponent = __webpack_require__(18)
        var ReactNoopUpdateQueue = __webpack_require__(20)
        var emptyObject = __webpack_require__(15)
        /**
 * Base class helpers for the updating state of a component.
 */ function ReactPureComponent(
          props,
          context,
          updater
        ) {
          // Duplicated from ReactComponent.
          this.props = props
          this.context = context
          this.refs = emptyObject // We initialize the default updater but the real one gets injected by the // renderer.
          this.updater = updater || ReactNoopUpdateQueue
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = ReactComponent.prototype
        ReactPureComponent.prototype = new ComponentDummy()
        ReactPureComponent.prototype.constructor = ReactPureComponent // Avoid an extra prototype jump for these methods.
        _assign(ReactPureComponent.prototype, ReactComponent.prototype)
        ReactPureComponent.prototype.isPureReactComponent = true
        module.exports = ReactPureComponent /***/
      } /* 78 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ module.exports =
          '15.5.4' /***/
      } /* 79 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /* WEBPACK VAR INJECTION */ ;(function(process) {
          /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ var _prodInvariant = __webpack_require__(
            5
          )
          var ReactPropTypeLocationNames = __webpack_require__(33)
          var ReactPropTypesSecret = __webpack_require__(76)
          var invariant = __webpack_require__(3)
          var warning = __webpack_require__(1)
          var ReactComponentTreeHook
          if (
            typeof process !== 'undefined' &&
            process.env &&
            'development' === 'test'
          ) {
            // Temporary hack.
            // Inline requires don't work well with Jest:
            // https://github.com/facebook/react/issues/7240
            // Remove the inline requires when we don't need them anymore:
            // https://github.com/facebook/react/pull/7178
            ReactComponentTreeHook = __webpack_require__(19)
          }
          var loggedTypeFailures = {}
          /**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */ function checkReactTypeSpec(
            typeSpecs,
            values,
            location,
            componentName,
            element,
            debugID
          ) {
            for (var typeSpecName in typeSpecs) {
              if (typeSpecs.hasOwnProperty(typeSpecName)) {
                var error // Prop type validation may throw. In case they do, we don't want to // fail the render phase where it didn't fail before. So we log it. // After these have been cleaned up, we'll let them throw.
                try {
                  // This is intentionally an invariant that gets caught. It's the same
                  // behavior as without this statement except with a better message.
                  !(typeof typeSpecs[typeSpecName] === 'function')
                    ? true
                        ? invariant(
                            false,
                            '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.',
                            componentName || 'React class',
                            ReactPropTypeLocationNames[location],
                            typeSpecName
                          )
                        : _prodInvariant(
                            '84',
                            componentName || 'React class',
                            ReactPropTypeLocationNames[location],
                            typeSpecName
                          )
                    : void 0
                  error = typeSpecs[typeSpecName](
                    values,
                    typeSpecName,
                    componentName,
                    location,
                    null,
                    ReactPropTypesSecret
                  )
                } catch (ex) {
                  error = ex
                }
                true
                  ? warning(
                      !error || error instanceof Error,
                      '%s: type specification of %s `%s` is invalid; the type checker ' +
                        'function must return `null` or an `Error` but returned a %s. ' +
                        'You may have forgotten to pass an argument to the type checker ' +
                        'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                        'shape all require an argument).',
                      componentName || 'React class',
                      ReactPropTypeLocationNames[location],
                      typeSpecName,
                      typeof error
                    )
                  : void 0
                if (
                  error instanceof Error &&
                  !(error.message in loggedTypeFailures)
                ) {
                  // Only monitor this failure once because there tends to be a lot of the
                  // same error.
                  loggedTypeFailures[error.message] = true
                  var componentStackInfo = ''
                  if (true) {
                    if (!ReactComponentTreeHook) {
                      ReactComponentTreeHook = __webpack_require__(19)
                    }
                    if (debugID !== null) {
                      componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(
                        debugID
                      )
                    } else if (element !== null) {
                      componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(
                        element
                      )
                    }
                  }
                  true
                    ? warning(
                        false,
                        'Failed %s type: %s%s',
                        location,
                        error.message,
                        componentStackInfo
                      )
                    : void 0
                }
              }
            }
          }
          module.exports = checkReactTypeSpec /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(57))) /***/
      } /* 80 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ var _prodInvariant = __webpack_require__(
          5
        )
        var ReactElement = __webpack_require__(4)
        var invariant = __webpack_require__(3)
        /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(
          children
        ) {
          !ReactElement.isValidElement(children)
            ? true
                ? invariant(
                    false,
                    'React.Children.only expected to receive a single React element child.'
                  )
                : _prodInvariant('143')
            : void 0
          return children
        }
        module.exports = onlyChild /***/
      } /* 81 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ var _prodInvariant = __webpack_require__(
          5
        )
        var ReactCurrentOwner = __webpack_require__(9)
        var REACT_ELEMENT_TYPE = __webpack_require__(31)
        var getIteratorFn = __webpack_require__(34)
        var invariant = __webpack_require__(3)
        var KeyEscapeUtils = __webpack_require__(69)
        var warning = __webpack_require__(1)
        var SEPARATOR = '.'
        var SUBSEPARATOR = ':'
        /**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */ /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false
        /**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getComponentKey(
          component,
          index
        ) {
          // Do some typechecking here since we call this blindly. We want to ensure
          // that we don't block potential future ES APIs.
          if (
            component &&
            typeof component === 'object' &&
            component.key != null
          ) {
            // Explicit key
            return KeyEscapeUtils.escape(component.key)
          } // Implicit key determined by the index in the set
          return index.toString(36)
        }
        /**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */ function traverseAllChildrenImpl(
          children,
          nameSoFar,
          callback,
          traverseContext
        ) {
          var type = typeof children
          if (type === 'undefined' || type === 'boolean') {
            // All of the above are perceived as null.
            children = null
          }
          if (
            children === null ||
            type === 'string' ||
            type === 'number' || // The following is inlined from ReactElement. This means we can optimize // some checks. React Fiber also inlines this logic for similar purposes.
            (type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE)
          ) {
            callback(
              traverseContext,
              children, // If it's the only child, treat the name as if it was wrapped in an array // so that it's consistent if the number of children grows.
              nameSoFar === ''
                ? SEPARATOR + getComponentKey(children, 0)
                : nameSoFar
            )
            return 1
          }
          var child
          var nextName
          var subtreeCount = 0 // Count of children found in the current subtree.
          var nextNamePrefix = nameSoFar === ''
            ? SEPARATOR
            : nameSoFar + SUBSEPARATOR
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i]
              nextName = nextNamePrefix + getComponentKey(child, i)
              subtreeCount += traverseAllChildrenImpl(
                child,
                nextName,
                callback,
                traverseContext
              )
            }
          } else {
            var iteratorFn = getIteratorFn(children)
            if (iteratorFn) {
              var iterator = iteratorFn.call(children)
              var step
              if (iteratorFn !== children.entries) {
                var ii = 0
                while (!(step = iterator.next()).done) {
                  child = step.value
                  nextName = nextNamePrefix + getComponentKey(child, ii++)
                  subtreeCount += traverseAllChildrenImpl(
                    child,
                    nextName,
                    callback,
                    traverseContext
                  )
                }
              } else {
                if (true) {
                  var mapsAsChildrenAddendum = ''
                  if (ReactCurrentOwner.current) {
                    var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName()
                    if (mapsAsChildrenOwnerName) {
                      mapsAsChildrenAddendum =
                        ' Check the render method of `' +
                        mapsAsChildrenOwnerName +
                        '`.'
                    }
                  }
                  true
                    ? warning(
                        didWarnAboutMaps,
                        'Using Maps as children is not yet fully supported. It is an ' +
                          'experimental feature that might be removed. Convert it to a ' +
                          'sequence / iterable of keyed ReactElements instead.%s',
                        mapsAsChildrenAddendum
                      )
                    : void 0
                  didWarnAboutMaps = true
                } // Iterator will provide entry [k,v] tuples rather than values.
                while (!(step = iterator.next()).done) {
                  var entry = step.value
                  if (entry) {
                    child = entry[1]
                    nextName =
                      nextNamePrefix +
                      KeyEscapeUtils.escape(entry[0]) +
                      SUBSEPARATOR +
                      getComponentKey(child, 0)
                    subtreeCount += traverseAllChildrenImpl(
                      child,
                      nextName,
                      callback,
                      traverseContext
                    )
                  }
                }
              }
            } else if (type === 'object') {
              var addendum = ''
              if (true) {
                addendum =
                  ' If you meant to render a collection of children, use an array ' +
                  'instead or wrap the object using createFragment(object) from the ' +
                  'React add-ons.'
                if (children._isReactElement) {
                  addendum =
                    " It looks like you're using an element created by a different " +
                    'version of React. Make sure to use only one copy of React.'
                }
                if (ReactCurrentOwner.current) {
                  var name = ReactCurrentOwner.current.getName()
                  if (name) {
                    addendum += ' Check the render method of `' + name + '`.'
                  }
                }
              }
              var childrenString = String(children)
              true
                ? true
                    ? invariant(
                        false,
                        'Objects are not valid as a React child (found: %s).%s',
                        childrenString === '[object Object]'
                          ? 'object with keys {' +
                              Object.keys(children).join(', ') +
                              '}'
                          : childrenString,
                        addendum
                      )
                    : _prodInvariant(
                        '31',
                        childrenString === '[object Object]'
                          ? 'object with keys {' +
                              Object.keys(children).join(', ') +
                              '}'
                          : childrenString,
                        addendum
                      )
                : void 0
            }
          }
          return subtreeCount
        }
        /**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */ function traverseAllChildren(
          children,
          callback,
          traverseContext
        ) {
          if (children == null) {
            return 0
          }
          return traverseAllChildrenImpl(
            children,
            '',
            callback,
            traverseContext
          )
        }
        module.exports = traverseAllChildren /***/
      } /* 82 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        var _pathToAction = __webpack_require__(21)
        var _pathToAction2 = _interopRequireDefault(_pathToAction)
        var _nestAction = __webpack_require__(6)
        var _nestAction2 = _interopRequireDefault(_nestAction)
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              }
        }
        exports.default = function(
          pathname,
          routesMap,
          prevLocation,
          history,
          kind,
          serializer,
          prevPath,
          prevLength
        ) {
          var action = (0, _pathToAction2.default)(
            pathname,
            routesMap,
            serializer
          )
          kind = getKind(!!history.entries, history, kind, prevPath, prevLength)
          return (0, _nestAction2.default)(
            pathname,
            action,
            prevLocation,
            history,
            kind
          )
        }
        var getKind = function getKind(
          isMemoryHistory,
          history,
          kind,
          prevPath,
          prevLength
        ) {
          if (!isMemoryHistory || !prevPath || kind !== 'pop') {
            return kind
          }
          if (isBack(history, prevPath)) {
            return 'back'
          } else if (isNext(history, prevPath, prevLength)) {
            return 'next'
          }
          return kind
        }
        var isBack = function isBack(hist, path) {
          var next = hist.entries[hist.index + 1]
          return next && next.pathname === path
        }
        var isNext = function isNext(hist, path, length) {
          var prev = hist.entries[hist.index - 1]
          var notPushed = length === hist.length
          return prev && prev.pathname === path && notPushed
        } /***/
      } /* 83 */ /***/,
      function(module, exports, __webpack_require__) {
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
        var _actionToPath = __webpack_require__(36)
        var _actionToPath2 = _interopRequireDefault(_actionToPath)
        var _nestAction = __webpack_require__(6)
        var _nestAction2 = _interopRequireDefault(_nestAction)
        var _index = __webpack_require__(2)
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              }
        }
        exports.default = function(
          action,
          routesMap,
          prevLocation,
          history,
          notFoundPath,
          serializer
        ) {
          try {
            var pathname = (0, _actionToPath2.default)(
              action,
              routesMap,
              serializer
            )
            var kind = getKind(!!history.entries, pathname, history, action)
            return (0, _nestAction2.default)(
              pathname,
              action,
              prevLocation,
              history,
              kind
            )
          } catch (e) {
            var payload = _extends({}, action.payload)
            return (0, _nestAction2.default)(
              notFoundPath || prevLocation.pathname || '/',
              _extends({}, action, {
                type: _index.NOT_FOUND,
                payload: payload
              }),
              prevLocation,
              history
            )
          }
        } // REACT NATIVE FEATURE: // emulate npm `history` package and `historyCreateAction`  so that actions // and state indicate the user went back or forward. The idea is if you are // going back or forward to a route you were just at, apps can determine // from `state.location.kind === 'back|next'` and `action.kind` that things like // scroll position should be restored. // NOTE: for testability, history is also returned to make this a pure function
        var getKind = function getKind(
          isMemoryHistory,
          pathname,
          history,
          action
        ) {
          var kind =
            action.meta && action.meta.location && action.meta.location.kind
          if (kind) {
            return kind
          } else if (!isMemoryHistory) {
            return 'push'
          }
          if (goingBack(history, pathname)) {
            history.index--
            return 'back'
          } else if (goingForward(history, pathname)) {
            history.index++
            return 'next'
          }
          return 'push'
        }
        var goingBack = function goingBack(hist, path) {
          var prev = hist.entries[hist.index - 1]
          return prev && prev.pathname === path
        }
        var goingForward = function goingForward(hist, path) {
          var next = hist.entries[hist.index + 1]
          return next && next.pathname === path
        } /***/
      } /* 84 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        var _nestAction = __webpack_require__(6)
        var _nestAction2 = _interopRequireDefault(_nestAction)
        var _index = __webpack_require__(2)
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              }
        }
        exports.default = function(
          action,
          location,
          prevLocation,
          history,
          notFoundPath
        ) {
          var payload = action.payload
          var meta = action.meta
          var prevPath = location.pathname
          var kind =
            (meta && meta.location && meta.location.kind) || // use case: kind === 'redirect'
            (location.kind === 'load' && 'load') ||
            'push'
          var pathname =
            (meta && meta.notFoundPath) ||
            (kind === 'redirect' && notFoundPath) ||
            prevPath ||
            '/'
          return (0, _nestAction2.default)(
            pathname,
            { type: _index.NOT_FOUND, payload: payload },
            prevLocation,
            history,
            kind
          )
        } /***/
      } /* 85 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        var _setKind = __webpack_require__(39)
        var _setKind2 = _interopRequireDefault(_setKind)
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              }
        }
        exports.default = function(action, type, payload) {
          action = (0, _setKind2.default)(action, 'redirect')
          if (type) {
            action.type = type
          }
          if (payload) {
            action.payload = payload
          }
          return action
        } /***/
      } /* 86 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        var _connectRoutes = __webpack_require__(35)
        exports.default = function(dispatch, getState, route) {
          if (typeof window !== 'undefined') {
            var thunk = route.thunk
            if (typeof thunk === 'function') {
              var _getState$location = getState().location,
                kind = _getState$location.kind,
                hasSSR = _getState$location.hasSSR // call thunks always if it's not initial load of the app or only if it's load // without SSR setup yet, so app state is setup on client when prototyping, // such as with with webpack-dev-server before server infrastructure is built
              if (kind !== 'load' || (kind === 'load' && !hasSSR)) {
                var prom = thunk(dispatch, getState)
                if (prom && typeof prom.next === 'function') {
                  prom.next(_connectRoutes.updateScroll)
                }
              }
            }
          }
        } /***/
      } /* 87 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = function(doc, title) {
          if (typeof title === 'string' && doc.title !== title) {
            return (doc.title = title)
          }
          return null
        }
        var getDocument = (exports.getDocument = function getDocument() {
          var isSSRTest = 'development' === 'test' && window.isSSR
          return typeof document !== 'undefined' && !isSSRTest ? document : {}
        }) /***/
      } /* 88 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = function(routesMap, selectLocationState) {
          return function(_ref) {
            var dispatch = _ref.dispatch, getState = _ref.getState
            var _selectLocationState = selectLocationState(getState()),
              type = _selectLocationState.type
            var route = routesMap[type]
            if (route && typeof route.thunk === 'function') {
              return Promise.resolve(route.thunk(dispatch, getState))
            }
            return Promise.resolve()
          }
        } /***/
      } /* 89 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = function() {
          return (
            typeof window !== 'undefined' &&
            typeof window.navigator !== 'undefined' &&
            window.navigator.product === 'ReactNative'
          )
        } /***/
      } /* 90 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = function(routes) {
          return Object.keys(routes).map(function(key) {
            return routes[key]
          })
        } /***/
      } /* 91 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = function(_ref) {
          var pathname = _ref.pathname, search = _ref.search
          if (search) {
            if (search.indexOf('?') !== 0) {
              search = '?' + search
            }
            return '' + pathname + search
          }
          return pathname
        } /***/
      } /* 92 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.getInitialState = undefined
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
        var _index = __webpack_require__(2)
        var _isServer = __webpack_require__(38)
        var _isServer2 = _interopRequireDefault(_isServer)
        var _nestAction = __webpack_require__(6)
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              }
        }
        exports.default = function(initialState, routesMap) {
          return function() {
            var state = arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialState
            var action = arguments[1]
            if (
              action.type === _index.NOT_FOUND ||
              (routesMap[action.type] &&
                (action.meta.location.current.pathname !== state.pathname ||
                  action.meta.location.current.search !== state.search ||
                  action.meta.location.kind === 'load'))
            ) {
              var _query =
                action.query || action.meta.query || action.payload.query
              var _search = action.meta.location.current.search // these keys wont show if undefined, which is cleaner in devtools/logging
              var querySearch = _query || _search
                ? { query: _query, search: _search }
                : {}
              return _extends(
                {
                  pathname: action.meta.location.current.pathname,
                  type: action.type,
                  payload: _extends({}, action.payload)
                },
                querySearch,
                {
                  prev: action.meta.location.prev,
                  kind: action.meta.location.kind,
                  history: action.meta.location.history,
                  hasSSR: state.hasSSR,
                  routesMap: routesMap
                }
              )
            }
            return state
          }
        }
        var getInitialState = (exports.getInitialState = function getInitialState(
          currentPathname,
          meta,
          type,
          payload,
          routesMap,
          history
        ) {
          return _extends(
            {
              pathname: currentPathname.split('?')[0],
              type: type,
              payload: payload
            },
            meta,
            {
              prev: {
                pathname: '',
                type: '',
                payload: {}
              },
              kind: undefined,
              history: (0, _nestAction.nestHistory)(history),
              hasSSR: (0, _isServer2.default)() ? true : undefined, // client uses initial server `hasSSR` state setup here
              routesMap: routesMap
            }
          )
        }) /***/
      } /* 93 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(
          40
        ) /* harmony export (immutable) */
        __webpack_exports__['a'] = applyMiddleware
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
        /**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
          for (
            var _len = arguments.length, middlewares = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            middlewares[_key] = arguments[_key]
          }
          return function(createStore) {
            return function(reducer, preloadedState, enhancer) {
              var store = createStore(reducer, preloadedState, enhancer)
              var _dispatch = store.dispatch
              var chain = []
              var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch(action) {
                  return _dispatch(action)
                }
              }
              chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI)
              })
              _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__[
                'a' /* default */
              ].apply(undefined, chain)(store.dispatch)
              return _extends({}, store, {
                dispatch: _dispatch
              })
            }
          }
        } /***/
      } /* 94 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict' /* harmony export (immutable) */
        __webpack_exports__['a'] = bindActionCreators
        function bindActionCreator(actionCreator, dispatch) {
          return function() {
            return dispatch(actionCreator.apply(undefined, arguments))
          }
        }
        /**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators(
          actionCreators,
          dispatch
        ) {
          if (typeof actionCreators === 'function') {
            return bindActionCreator(actionCreators, dispatch)
          }
          if (typeof actionCreators !== 'object' || actionCreators === null) {
            throw new Error(
              'bindActionCreators expected an object or a function, instead received ' +
                (actionCreators === null ? 'null' : typeof actionCreators) +
                '. ' +
                'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
            )
          }
          var keys = Object.keys(actionCreators)
          var boundActionCreators = {}
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i]
            var actionCreator = actionCreators[key]
            if (typeof actionCreator === 'function') {
              boundActionCreators[key] = bindActionCreator(
                actionCreator,
                dispatch
              )
            }
          }
          return boundActionCreators
        } /***/
      } /* 95 */ /***/,
      function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(
          41
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(
          16
        )
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(
          42
        ) /* harmony export (immutable) */
        __webpack_exports__['a'] = combineReducers
        function getUndefinedStateErrorMessage(key, action) {
          var actionType = action && action.type
          var actionName =
            (actionType && '"' + actionType.toString() + '"') || 'an action'
          return (
            'Given action ' +
            actionName +
            ', reducer "' +
            key +
            '" returned undefined. ' +
            'To ignore an action, you must explicitly return the previous state.'
          )
        }
        function getUnexpectedStateShapeWarningMessage(
          inputState,
          reducers,
          action,
          unexpectedKeyCache
        ) {
          var reducerKeys = Object.keys(reducers)
          var argumentName = action &&
            action.type ===
              __WEBPACK_IMPORTED_MODULE_0__createStore__['b' /* ActionTypes */]
                .INIT
            ? 'preloadedState argument passed to createStore'
            : 'previous state received by the reducer'
          if (reducerKeys.length === 0) {
            return (
              'Store does not have a valid reducer. Make sure the argument passed ' +
              'to combineReducers is an object whose values are reducers.'
            )
          }
          if (
            !__webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__[
                'a' /* default */
              ]
            )(inputState)
          ) {
            return (
              'The ' +
              argumentName +
              ' has unexpected type of "' +
              {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] +
              '". Expected argument to be an object with the following ' +
              ('keys: "' + reducerKeys.join('", "') + '"')
            )
          }
          var unexpectedKeys = Object.keys(inputState).filter(function(key) {
            return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]
          })
          unexpectedKeys.forEach(function(key) {
            unexpectedKeyCache[key] = true
          })
          if (unexpectedKeys.length > 0) {
            return (
              'Unexpected ' +
              (unexpectedKeys.length > 1 ? 'keys' : 'key') +
              ' ' +
              ('"' +
                unexpectedKeys.join('", "') +
                '" found in ' +
                argumentName +
                '. ') +
              'Expected to find one of the known reducer keys instead: ' +
              ('"' +
                reducerKeys.join('", "') +
                '". Unexpected keys will be ignored.')
            )
          }
        }
        function assertReducerSanity(reducers) {
          Object.keys(reducers).forEach(function(key) {
            var reducer = reducers[key]
            var initialState = reducer(undefined, {
              type: __WEBPACK_IMPORTED_MODULE_0__createStore__[
                'b' /* ActionTypes */
              ].INIT
            })
            if (typeof initialState === 'undefined') {
              throw new Error(
                'Reducer "' +
                  key +
                  '" returned undefined during initialization. ' +
                  'If the state passed to the reducer is undefined, you must ' +
                  'explicitly return the initial state. The initial state may ' +
                  'not be undefined.'
              )
            }
            var type =
              '@@redux/PROBE_UNKNOWN_ACTION_' +
              Math.random().toString(36).substring(7).split('').join('.')
            if (typeof reducer(undefined, { type: type }) === 'undefined') {
              throw new Error(
                'Reducer "' +
                  key +
                  '" returned undefined when probed with a random type. ' +
                  ("Don't try to handle " +
                    __WEBPACK_IMPORTED_MODULE_0__createStore__[
                      'b' /* ActionTypes */
                    ].INIT +
                    ' or other actions in "redux/*" ') +
                  'namespace. They are considered private. Instead, you must return the ' +
                  'current state for any unknown actions, unless it is undefined, ' +
                  'in which case you must return the initial state, regardless of the ' +
                  'action type. The initial state may not be undefined.'
              )
            }
          })
        }
        /**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */ function combineReducers(
          reducers
        ) {
          var reducerKeys = Object.keys(reducers)
          var finalReducers = {}
          for (var i = 0; i < reducerKeys.length; i++) {
            var key = reducerKeys[i]
            if (true) {
              if (typeof reducers[key] === 'undefined') {
                __webpack_require__.i(
                  __WEBPACK_IMPORTED_MODULE_2__utils_warning__[
                    'a' /* default */
                  ]
                )('No reducer provided for key "' + key + '"')
              }
            }
            if (typeof reducers[key] === 'function') {
              finalReducers[key] = reducers[key]
            }
          }
          var finalReducerKeys = Object.keys(finalReducers)
          if (true) {
            var unexpectedKeyCache = {}
          }
          var sanityError
          try {
            assertReducerSanity(finalReducers)
          } catch (e) {
            sanityError = e
          }
          return function combination() {
            var state = arguments.length <= 0 || arguments[0] === undefined
              ? {}
              : arguments[0]
            var action = arguments[1]
            if (sanityError) {
              throw sanityError
            }
            if (true) {
              var warningMessage = getUnexpectedStateShapeWarningMessage(
                state,
                finalReducers,
                action,
                unexpectedKeyCache
              )
              if (warningMessage) {
                __webpack_require__.i(
                  __WEBPACK_IMPORTED_MODULE_2__utils_warning__[
                    'a' /* default */
                  ]
                )(warningMessage)
              }
            }
            var hasChanged = false
            var nextState = {}
            for (var i = 0; i < finalReducerKeys.length; i++) {
              var key = finalReducerKeys[i]
              var reducer = finalReducers[key]
              var previousStateForKey = state[key]
              var nextStateForKey = reducer(previousStateForKey, action)
              if (typeof nextStateForKey === 'undefined') {
                var errorMessage = getUndefinedStateErrorMessage(key, action)
                throw new Error(errorMessage)
              }
              nextState[key] = nextStateForKey
              hasChanged = hasChanged || nextStateForKey !== previousStateForKey
            }
            return hasChanged ? nextState : state
          }
        } /***/
      } /* 96 */ /***/,
      function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(97) /***/
      } /* 97 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        /* WEBPACK VAR INJECTION */ ;(function(global, module) {
          Object.defineProperty(exports, '__esModule', {
            value: true
          })
          var _ponyfill = __webpack_require__(98)
          var _ponyfill2 = _interopRequireDefault(_ponyfill)
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule
              ? obj
              : {
                  default: obj
                }
          }
          var root /* global window */
          if (typeof self !== 'undefined') {
            root = self
          } else if (typeof window !== 'undefined') {
            root = window
          } else if (typeof global !== 'undefined') {
            root = global
          } else if (true) {
            root = module
          } else {
            root = Function('return this')()
          }
          var result = (0, _ponyfill2['default'])(root)
          exports['default'] = result /* WEBPACK VAR INJECTION */
        }.call(
          exports,
          __webpack_require__(43),
          __webpack_require__(99)(module)
        )) /***/
      } /* 98 */ /***/,
      function(module, exports, __webpack_require__) {
        'use strict'
        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports['default'] = symbolObservablePonyfill
        function symbolObservablePonyfill(root) {
          var result
          var _Symbol = root.Symbol
          if (typeof _Symbol === 'function') {
            if (_Symbol.observable) {
              result = _Symbol.observable
            } else {
              result = _Symbol('observable')
              _Symbol.observable = result
            }
          } else {
            result = '@@observable'
          }
          return result
        } /***/
      } /* 99 */ /***/,
      function(module, exports) {
        module.exports = function(module) {
          if (!module.webpackPolyfill) {
            module.deprecate = function() {}
            module.paths = [] // module.parent = undefined by default
            if (!module.children) module.children = []
            Object.defineProperty(module, 'loaded', {
              enumerable: true,
              get: function() {
                return module.l
              }
            })
            Object.defineProperty(module, 'id', {
              enumerable: true,
              get: function() {
                return module.i
              }
            })
            module.webpackPolyfill = 1
          }
          return module
        } /***/
      } /******/
    ]
  )
})
