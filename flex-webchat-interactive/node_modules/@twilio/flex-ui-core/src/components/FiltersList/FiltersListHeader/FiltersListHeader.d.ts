import * as React from "react";
export interface FiltersListHeaderProps {
    headerLabel: React.ReactChild;
    applyLabel: React.ReactChild;
    resetLabel: React.ReactChild;
    handleResetClick: (e: React.MouseEvent) => void;
    applyButtonDisabled?: boolean;
    resetButtonDisabled?: boolean;
}
export declare class FiltersListHeader extends React.PureComponent<FiltersListHeaderProps> {
    static defaultProps: Partial<FiltersListHeaderProps>;
    render(): JSX.Element;
}
