import { AudioPlayerError } from "./AudioPlayerManager.definitions";
/**
 * Defines the type of the error callback function. Invoked when `play` method returns an error.
 * @typedef {Function} ErrorHandler
 * @param {AudioPlayerManager.Error} error Audio Player error
 * @returns {void}
 * @memberof AudioPlayerManager
 */
/**
 * Media data to be played
 * @typedef {Object} MediaData
 * @property {string} url - URL of the media
 * @property {boolean} repeatable - Whether the media should repeat or not
 * @memberof AudioPlayerManager
 */
export interface MediaData {
    url: string;
    repeatable: boolean;
}
declare class AudioPlayerManagerImplementation {
    private repeatableMediaManager;
    private nonRepeatableMediaManager;
    private medias;
    constructor();
    private initMediaManager;
    private getMediaManager;
    private onAudioEnd;
    /**
     * Plays the media provided
     * @name play
     * @function
     * @param {AudioPlayerManager.MediaData} mediaData Media data to be played
     * @param {AudioPlayerManager.ErrorHandler} [onError] Callback to be invoked when there is an error playing media
     * @returns {string} Unique identifier of the media
     * @memberof AudioPlayerManager
     *
     * @example
     * const mediaId = AudioPlayerManager.play(
     *     {
     *         url: "sound-url",
     *         repeatable: true
     *     },
     *     (error: AudioPlayerError) => {
     *         // handle error
     *     }
     * );
     */
    play(mediaData: MediaData, onError?: (error: AudioPlayerError) => void): string;
    /**
     * Stop media given the unique identifier of the media
     * @name stop
     * @function
     * @param {string} mediaId Id of the media to be stopped
     * @returns {void}
     * @memberof AudioPlayerManager
     *
     * @example
     * AudioPlayerManager.stop(mediaId);
     */
    stop(mediaId: string): void;
    /**
     * Mutes/unmutes sound based on the given parameter
     * @name toggleSound
     * @function
     * @param {boolean} mute Mutes the audio if true or unmutes if false
     * @returns {void}
     * @memberof AudioPlayerManager
     *
     * @example
     * AudioPlayerManager.toggleSound(true); // mutes sound
     * AudioPlayerManager.toggleSound(false); // unmutes sound
     */
    toggleSound(mute: boolean): void;
}
/**
 * @class AudioPlayerManager
 * @hideconstructor
 * @category Core / Manager
 */
export declare const AudioPlayerManager: AudioPlayerManagerImplementation;
export {};
