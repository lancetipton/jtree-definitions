"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cleave = _interopRequireDefault(require("../cleave"));

var _components = require("../../components");

var _jsutils = require("jsutils");

var _constants = _interopRequireDefault(require("../../constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class StringType extends _cleave.default {
  constructor(config) {
    super(_objectSpread({}, config, {
      cleave: _objectSpread({
        numeral: false,
        stripLeadingZeroes: false
      }, config && config.cleave || {})
    }));

    _defineProperty(this, "config", {
      useCleave: true
    });

    _defineProperty(this, "render", props => {
      const _props$schema = props.schema,
            id = _props$schema.id,
            key = _props$schema.key,
            value = _props$schema.value,
            mode = _props$schema.mode,
            matchType = _props$schema.matchType,
            keyType = _props$schema.keyType,
            parent = _props$schema.parent,
            error = _props$schema.error;
      const useValue = mode !== _constants.default.Schema.MODES.EDIT && (0, _jsutils.isFunc)(this.getDisplayValue) ? this.getDisplayValue(value, props) : value;
      return (0, _components.Item)(_objectSpread({
        id,
        key,
        mode,
        error,
        value: useValue,
        type: matchType,
        showLabel: true,
        showPaste: props.settings.Editor.hasTemp(),
        keyEdit: !parent || !Array.isArray(parent.value),
        keyType: keyType || 'text'
      }, this.getActions(mode), {
        config: this.config
      }));
    });
  }

}

_defineProperty(StringType, "priority", 1);

_defineProperty(StringType, "eval", value => (0, _jsutils.isStr)(value));

_defineProperty(StringType, "defaultValue", (newType, schema, settings) => '');

var _default = StringType;
exports.default = _default;