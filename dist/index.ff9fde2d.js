// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"19UaH":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "a38c857e59f998a5c75d377aff9fde2d";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4VK8G":[function(require,module,exports) {
var _index = require('../index');
require('../default-theme.css');
require('./test.css');
let $ = (...args) => document.querySelector(...args);
let firstOut = $("#first-number-out");
let first = $("#first-number");
let second = $("#second-number");
let store = [0.1, 0.5];
function update(value, pos) {
  store[pos] = value;
  display(store);
}
function display(x) {
  first.innerText = (55 * x[0] + 3).toPrecision(2);
  second.innerText = (55 * x[1] + 3).toPrecision(2);
  range.setRange(x);
}
let dragOne = _index.makeDraggable(({value}) => update(Math.min(value, store[1]), 0), first);
let dragTwo = _index.makeDraggable(({value}) => update(Math.max(value, store[0]), 1), second);
dragOne.start();
dragTwo.start();
let range = _index.rangeSlider(ev => {
  store = ev.nextRange(store);
  display(store);
}, $("#slider"));
range.start();

},{"../index":"4ee1I","../default-theme.css":"50Myq","./test.css":"3jZQi"}],"4ee1I":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "slider", function () {
  return _srcSlider.slider;
});
_parcelHelpers.export(exports, "createSlider", function () {
  return _srcSlider.createSlider;
});
_parcelHelpers.export(exports, "rangeSlider", function () {
  return _srcSlider.rangeSlider;
});
_parcelHelpers.export(exports, "makeDraggable", function () {
  return _srcDrag.makeDraggable;
});
require("./src/live-styles.css");
var _srcSlider = require('./src/slider');
var _srcDrag = require('./src/drag');

},{"./src/live-styles.css":"TO1Ja","./src/slider":"6zrPB","./src/drag":"79Wi4","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"TO1Ja":[function() {},{}],"6zrPB":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "slider", function () {
  return slider;
});
_parcelHelpers.export(exports, "rangeSlider", function () {
  return rangeSlider;
});
_parcelHelpers.export(exports, "createSlider", function () {
  return createSlider;
});
var _util = require('./util');
var _drag = require('./drag');
var _dimensions = require('./dimensions');
var _traits = require('./traits');
function slider(sendEvent, element) {
  const slider = createSlider();
  const start = _traits.fromTraits([_drag.withDraggable(sendEvent, element, 'x', element), _traits.withClass(element, '_live_group'), // add clearfix hack
  _traits.withChild(element, slider.container)]);
  return {
    start,
    ...slider
  };
}
function rangeSlider(sendEvent, element) {
  const slider = createSlider();
  let command = false;
  let handle = null;
  function next(value, store) {
    if (handle === 0 && store[1] < value) handle = 1; else if (handle === 1 && store[0] > value) handle = 0;
    let ret = store.slice();
    ret[handle] = value;
    return ret;
  }
  function nextRange(store, draw = false) {
    switch (this.type) {
      case 'start':
        if (command || draw) {
          handle = 1;
          return [this.value, this.value];
        }
        handle = 0;
        if (Math.abs(this.value - store[0]) > Math.abs(this.value - store[1])) handle = 1;
        return next(this.value, store);
      case 'move':
        return next(this.value, store);
      case 'stop':
        return next(this.value, store);
      default:
        return next(this.value, store);
    }
  }
  const start = _traits.fromTraits([_traits.withEvent(element, 'mousedown', ev => {
    command = ev.ctrlKey || ev.shiftKey || ev.metaKey || ev.button === 2;
    if (ev.button === 2 || ev.ctrlKey) window.addEventListener('contextmenu', _util.cancelEvent, {
      once: true
    });
  }), _drag.withDraggable(ev => {
    ev.nextRange = nextRange.bind(ev);
    sendEvent(ev);
  }, element, 'x', element), _traits.withEvent(window, 'mouseup', e => {
    command = false;
  }), _traits.withClass(element, '_live_group'), // add clearfix hack
  _traits.withChild(element, slider.container)]);
  return {
    start,
    ...slider
  };
}
function createSlider(axis = 'x') {
  let container = document.createElement('div');
  container.classList.add('live-slider');
  let {primary, secondary} = _dimensions.dimensions[axis];
  Object.assign(container.style, {
    position: "relative",
    display: "inline-block",
    [primary.dimension]: "100%",
    minHeight: "10px"
  });
  // let backgroundBoundary = createBoundary(container, axis)
  let background = document.createElement("span");
  background.classList.add('live-slider-background');
  Object.assign(background.style, {
    position: "absolute",
    [primary.dimension]: "100%",
    [secondary.dimension]: "100%"
  });
  // backgroundBoundary.setPrimary(0,0)
  let fill = document.createElement("span");
  fill.classList.add('live-slider-fill');
  Object.assign(fill.style, {
    position: 'absolute',
    [secondary.dimension]: "100%",
    [primary.position.start]: 0,
    [secondary.position.start]: 0
  });
  background.appendChild(fill);
  container.appendChild(background);
  function setFill(x) {
    fill.style[primary.position.end] = x * 100 + "%";
    fill.style[primary.position.start] = "0%";
    fill.style[secondary.dimension] = container[secondary.client] + "px";
  }
  function setRange([x, y]) {
    fill.style[primary.position.start] = x * 100 + "%";
    fill.style[primary.position.end] = (1 - y) * 100 + "%";
  }
  return {
    container,
    setFill,
    setRange
  };
}

},{"./util":"7eZGY","./drag":"79Wi4","./dimensions":"1Quc3","./traits":"ClXIn","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7eZGY":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "clamp", function () {
  return clamp;
});
_parcelHelpers.export(exports, "cancelEvent", function () {
  return cancelEvent;
});
function clamp(val, min, max) {
  return Math.max(min, Math.min(val, max));
}
function cancelEvent(ev) {
  ev.preventDefault();
  ev.stopPropagation();
  return cancelEvent;
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"79Wi4":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "withDraggable", function () {
  return withDraggable;
});
_parcelHelpers.export(exports, "makeDraggable", function () {
  return makeDraggable;
});
var _utilJs = require('./util.js');
var _traits = require('./traits');
var _dimensions = require('./dimensions');
function withDraggable(sendEvent, element, axis = "x", container = window) {
  const ori = new _dimensions.Orientation(axis);
  function computeValue(ev) {
    let pos = ori.getPositionOnAxis(ev);
    let zeroPos = ori.getMin(element);
    let maxPos = ori.getMax(container);
    return {
      event: ev,
      value: _utilJs.clamp((pos - zeroPos) / maxPos, 0, 1)
    };
  }
  const sendMove = ev => {
    _utilJs.cancelEvent(ev);
    sendEvent({
      type: 'move',
      ...computeValue(ev)
    });
  };
  const startDragging = _traits.fromTraits([_utilJs.cancelEvent, _traits.withClass(element, 'live-active'), _traits.withEvent(window, 'mousemove', sendMove), // withEvent(window, 'touchmove', sendMove),
  ev => {
    sendEvent({
      type: 'start',
      ...computeValue(ev)
    });
    return ev => {
      sendEvent({
        type: 'stop',
        ...computeValue(ev)
      });
    };
  }]);
  function dragStart(ev) {
    const stop = startDragging(ev);
    window.addEventListener('mouseup', stop, {
      once: true
    });
  }
  return _traits.fromTraits([_traits.withEvent(element, 'mousedown', dragStart), // withEvent(element, 'touchstart', dragStart),
  _traits.withAttribute(element, 'draggable', 'true'), _traits.withClass(element, 'live')]);
}
const makeDraggable = (...args) => {
  const start = withDraggable(...args);
  return {
    start
  };
};

},{"./util.js":"7eZGY","./traits":"ClXIn","./dimensions":"1Quc3","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"ClXIn":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "fromTraits", function () {
  return fromTraits;
});
_parcelHelpers.export(exports, "withClass", function () {
  return withClass;
});
_parcelHelpers.export(exports, "withChild", function () {
  return withChild;
});
_parcelHelpers.export(exports, "withEvent", function () {
  return withEvent;
});
_parcelHelpers.export(exports, "withAttribute", function () {
  return withAttribute;
});
const fromTraits = traits => (...args) => {
  const cleans = traits.map(f => f(...args));
  return (...args) => cleans.reverse().map(f => f(...args));
};
const withClass = (node, className) => () => {
  node.classList.add(className);
  return () => node.classList.remove(className);
};
const withChild = (node, child) => () => {
  node.appendChild(child);
  return () => node.removeChild(child);
};
const withEvent = (node, event, handler) => () => {
  node.addEventListener(event, handler);
  return () => node.removeEventListener(event, handler);
};
const withAttribute = (node, attribute, value = true) => () => {
  const oldValue = node.getAttribute(attribute);
  node.setAttribute(attribute, value);
  return () => {
    if (oldValue) node.setAttribute(attribute, oldValue); else node.removeAttribute(attribute);
  };
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1Quc3":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "dimensions", function () {
  return dimensions;
});
_parcelHelpers.export(exports, "Orientation", function () {
  return Orientation;
});
const xAxis = {
  position: {
    start: 'left',
    end: 'right'
  },
  dimension: 'width',
  client: 'clientWidth',
  inner: 'innerWidth'
};
const yAxis = {
  position: {
    start: 'top',
    end: 'bottom'
  },
  dimension: 'height',
  client: 'clientHeight',
  inner: 'innerHeight'
};
const dimensions = {
  x: {
    primary: xAxis,
    secondary: yAxis
  },
  y: {
    primary: yAxis,
    secondary: xAxis
  }
};
class Orientation {
  constructor(axis) {
    this.axis = axis;
    this.primary = dimensions[axis].primary;
  }
  getPositionOnAxis(ev) {
    return this.axis === 'x' ? ev.clientX : ev.clientY;
  }
  getMin(el) {
    if (el instanceof Window) {
      return window[this.primary.inner] / 3;
    } else return el.getBoundingClientRect()[this.primary.position.start];
  }
  getMax(el) {
    if (el instanceof Window) {
      return 2 * window[this.primary.inner] / 3;
    } else return el[this.primary.client];
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"50Myq":[function() {},{}],"3jZQi":[function() {},{}]},["19UaH","4VK8G"], "4VK8G", "parcelRequireec58")

//# sourceMappingURL=index.ff9fde2d.js.map
