import { ThemeProps } from "../../theme";
import * as React from "react";
import { DynamicContentStore } from "../../../DynamicComponent";
import { MessageCanvasTrayProps } from "./MessageCanvasTray";
export declare const displayName = "MessageCanvasTray";
export declare const contentStore: DynamicContentStore;
export declare class MessageCanvasTrayImpl extends React.PureComponent<MessageCanvasTrayProps & ThemeProps> {
    render(): JSX.Element;
}
