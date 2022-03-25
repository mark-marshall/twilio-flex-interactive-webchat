import * as React from "react";
export interface SplitContentContainerProps {
    vertical: boolean;
    firstMinSize: string;
    firstInitialSize: string;
    secondMinSize: string;
    separator: React.ReactNode;
    onResize?: () => void;
    lastSplitterState?: LastSplitterState;
}
export interface SplitContentContainerState {
    firstPanelSize: number;
    mainContainerSize: number;
    resizing: boolean;
}
export declare class LastSplitterState {
    hasManuallyResized: boolean;
    firstPanelSize: number;
}
export declare class SplitContentContainer extends React.PureComponent<SplitContentContainerProps, SplitContentContainerState> {
    private splitterDOM;
    private container;
    private mouseDownX;
    private mouseDownY;
    private firstPanelSizeAtResize;
    private maxSize;
    private minSize;
    private hasManuallyResized;
    private onIntersection;
    private lastState;
    constructor(props: SplitContentContainerProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: SplitContentContainerProps): void;
    componentWillUnmount(): void;
    private initBasedOnLastState;
    private handleWindowResize;
    private handleMouseMove;
    private handleSplitterMouseDown;
    private handleMouseUp;
    private renderPanel;
    reInit(preferredSize?: number, container?: any): any;
    private clampSize;
    private setContainer;
    private setSplitterDOM;
    render(): JSX.Element;
}
