import * as React from "react";
export interface ModalPopupProps {
    readonly alignRight?: boolean;
    readonly autoClose?: boolean;
    readonly isOpen?: boolean;
    readonly onBlur?: React.FocusEventHandler<any>;
    readonly className?: string;
}
export declare class ModalPopup extends React.PureComponent<ModalPopupProps> {
    static readonly displayName = "ModalPopup";
    private rootElementRef;
    render(): JSX.Element;
    private hide;
    setEntryControl(control: HTMLElement): void;
    handleBlur: (e: any) => void;
    private isChildOfRoot;
    private setRootElementRef;
}
