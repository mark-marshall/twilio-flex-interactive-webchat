import { ThemeProps } from "../../theme";
import * as React from "react";
import { NotificationOptions } from "../NotificationBar.Components";
export declare enum NotificationIcon {
    information = "Info",
    success = "Accept",
    warning = "Alert",
    error = "Alert"
}
export declare class TypeIcon extends React.PureComponent<NotificationOptions & ThemeProps> {
    render(): JSX.Element;
}
