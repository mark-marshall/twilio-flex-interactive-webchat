/**
 * @readonly
 * @enum {0 | 1 | 2} ErrorCode
 * @property {0} NotAllowed - Playing audio is not allowed by your system
 * @property {1} InvalidMedia - You provided an invalid media or the url is invalid
 * @property {2} Other - An unknown has occured
 * @memberof AudioPlayerManager
 */
export declare enum ErrorCode {
    NotAllowed = 0,
    InvalidMedia = 1,
    Other = 2
}
/**
 * Audio Player error. This is the error type that you receive when the {@link AudioPlayerManager.ErrorHandler ErrorHandler function} is invoked
 * @readonly
 * @typedef {Object} Error
 * @extends Error
 * @property {AudioPlayerManager.ErrorCode} code - Error code
 * @memberof AudioPlayerManager
 */
export interface AudioPlayerError extends Error {
    code: ErrorCode;
}
