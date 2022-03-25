import * as React from "react";
import { ThemeSupport } from "../theme";
export declare type Alignments = "left" | "center";
export interface TabHeaderProps extends ThemeSupport {
    isActive?: boolean;
    setActive?: Function;
    label?: string | React.ReactNode;
    alignment: Alignments;
    icon?: string | React.ReactNode;
    iconActive?: string | React.ReactNode;
    showIcon?: boolean;
}
export declare class TabHeader extends React.Component<TabHeaderProps> {
    private setActive;
    renderContent(): JSX.Element;
    render(): JSX.Element;
}
