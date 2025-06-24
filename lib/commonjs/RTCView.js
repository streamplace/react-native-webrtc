"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NativeRTCVideoView = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Native prop validation was removed from RN in:
 * https://github.com/facebook/react-native/commit/8dc3ba0444c94d9bbb66295b5af885bff9b9cd34
 *
 * So we list them here for documentation purposes.
 */

const NativeRTCVideoView = (0, _reactNative.requireNativeComponent)('RTCVideoView');
exports.NativeRTCVideoView = NativeRTCVideoView;
class RTCView extends _react.default.PureComponent {
  constructor(props) {
    super(props);
    _defineProperty(this, "ref", void 0);
    this.onPictureInPictureChange = this.onPictureInPictureChange.bind(this);
    this.ref = /*#__PURE__*/_react.default.createRef();
  }

  /**
  * Programmatically start Picture In Picture
  */
  startPictureInPicture() {
    try {
      const node = this.handle;
      _reactNative.UIManager.dispatchViewManagerCommand(node, this.getCommand('startPictureInPicture'), []);
    } catch (error) {
      console.warn(error);
    }
  }
  /**
  * Programmatically stop Picture In Picture
  * @ios
  */
  stopPictureInPicture() {
    try {
      const node = this.handle;
      _reactNative.UIManager.dispatchViewManagerCommand(node, this.getCommand('stopPictureInPicture'), []);
    } catch (error) {
      console.warn(error);
    }
  }
  getCommand(commandName) {
    const config = _reactNative.UIManager.getViewManagerConfig('RTCVideoView');
    const command = config.Commands[commandName];
    return _reactNative.Platform.OS === 'android' ? command.toString() : command;
  }
  get handle() {
    const nodeHandle = (0, _reactNative.findNodeHandle)(this.ref.current);
    if (nodeHandle === null || nodeHandle === -1) {
      throw new Error('RTCView not found in react three.');
    }
    return nodeHandle;
  }
  onPictureInPictureChange(event) {
    var _this$props$onPicture, _this$props;
    (_this$props$onPicture = (_this$props = this.props).onPictureInPictureChange) === null || _this$props$onPicture === void 0 ? void 0 : _this$props$onPicture.call(_this$props, event.nativeEvent.isInPictureInPicture);
  }
  render() {
    const {
      ...props
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(NativeRTCVideoView, _extends({}, props, {
      ref: this.ref,
      onPictureInPictureChange: this.onPictureInPictureChange
    }));
  }
}
var _default = RTCView;
exports.default = _default;
//# sourceMappingURL=RTCView.js.map