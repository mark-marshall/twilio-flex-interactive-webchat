import { AudioPlayerError } from "./AudioPlayerManager.definitions";
export default class AudioPlayer {
    private audio;
    private onAudioEnd;
    private onError?;
    private isPlaying;
    constructor();
    play(url: string, repeat: boolean, onAudioEnd: () => void, onError?: (error: AudioPlayerError) => void): void;
    private playAudio;
    private handlePlayError;
    private getAudioPlayerError;
    private handleAudioEnded;
    private handlePlayNotAllowedError;
    stop(): void;
    toggleSound(mute: boolean): void;
}
