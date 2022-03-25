import * as React from "react";
export interface FlexBoxProperties {
    className?: string;
    vertical?: boolean;
    noGrow?: boolean;
    noShrink?: boolean;
    allowWrap?: boolean;
    overflow?: string;
}
export declare class FlexBox extends React.PureComponent<FlexBoxProperties> {
    render(): JSX.Element;
    static css(props?: FlexBoxProperties): string;
}
