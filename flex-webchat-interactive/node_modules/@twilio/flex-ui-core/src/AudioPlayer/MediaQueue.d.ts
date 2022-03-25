export declare class MediaQueue {
    private queue;
    private currentJob;
    private jobs;
    private maxQueueSize;
    constructor(maxQueueSize?: number);
    private subscribeToEvents;
    private onCurrentJobFinished;
    private deleteJob;
    enqueue(id: string, onProcess: (onFinish: Function) => void): void;
    dequeue(id: string): void;
    isProcessing(id: string): boolean;
}
