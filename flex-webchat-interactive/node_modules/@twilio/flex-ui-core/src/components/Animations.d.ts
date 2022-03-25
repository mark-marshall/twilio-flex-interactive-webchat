export declare const FADE_IN_DURATION = 0.15;
export declare const FADE_OUT_DURATION = 0.07;
export declare const SLIDE_IN_DURATION = 0.18;
export declare const SLIDE_OUT_DURATION = 0.05;
export declare const SPIN_DURATION = 1.5;
/**
 * Fade In Out Transition
 *
 * @param {boolean} fadeIn
 * @param {number} [inMs=0.15]  Fade in duration
 * @param {number} [outMs=0.07] Fade out duration
 * @param {number} [delay=0] Animation delay
 * @ignore
 */
export declare const FadeInOutTransition: (fadeIn: boolean, inMs?: number, outMs?: number, delay?: number) => string;
/**
 * Slide In Transition
 *
 * @param {boolean} fadeIn
 * @param {number} [inMs=0.18]  Slide in duration
 * @param {number} [outMs=0.05] Slide out duration
 * @ignore
 */
export declare const SlideInTransition: (fadeIn: boolean, inMs?: number, outMs?: number) => string;
/**
 * Appear KeyFrames
 * Animate from opacity 0 to opacity 1
 * @ignore
 */
export declare const AppearKeyFrames: string;
/**
 * Appear Animation
 *
 * @param {number} [duration=0.15] Fade in duration
 * @param {number} [delay=0] Animation delay
 * @ignore
 */
export declare const AppearAnimation: (duration?: number, delay?: number) => string;
export declare const SpinKeyFrames: string;
/**
 * Spin Animation
 *
 * @param {number} [duration=1.5] Spin duration
 * @ignore
 */
export declare const SpinAnimation: (duration?: number) => string;
