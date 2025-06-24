import { Component } from 'react';
import ReactNative from 'react-native';
import { NativeVideoViewProps } from './RTCView';
export interface RTCPIPViewProps extends NativeVideoViewProps {
    /**
   * Picture in picture options for this view. Disabled if not supplied.
   *
   * Note: this should only be generally only used with remote video tracks,
   * as the local camera may stop while in the background.
   *
   * iOS only. Requires iOS 15.0 or above, and the PIP background mode capability.
   * @deprecated
   */
    iosPIP?: RTCIOSPIPOptions & {
        fallbackView?: Component;
    };
}
export interface RTCIOSPIPOptions {
    /**
     * Whether PIP can be launched from this view.
     *
     * Defaults to true.
     */
    enabled?: boolean;
    /**
     * The preferred size of the PIP window.
     */
    preferredSize?: {
        width: number;
        height: number;
    };
    /**
     * Indicates whether Picture in Picture starts automatically
     * when the controller embeds its content inline and the app
     * transitions to the background.
     *
     * Defaults to true.
     *
     * See: AVPictureInPictureController.canStartPictureInPictureAutomaticallyFromInline
     */
    startAutomatically?: boolean;
    /**
     * Indicates whether Picture in Picture should stop automatically
     * when the app returns to the foreground.
     *
     * Defaults to true.
     */
    stopAutomatically?: boolean;
}
/**
 * A convenience wrapper around RTCView to handle the fallback view as a prop.
 * @deprecated Use RTCView instead.
 */
declare const RTCPIPView: import("react").ForwardRefExoticComponent<RTCPIPViewProps & import("react").RefAttributes<Component<NativeVideoViewProps, {}, any> & Readonly<ReactNative.NativeMethods>>>;
/**
 * @deprecated
 */
export declare function startIOSPIP(ref: any): void;
/**
 * @deprecated
 */
export declare function stopIOSPIP(ref: any): void;
export default RTCPIPView;
