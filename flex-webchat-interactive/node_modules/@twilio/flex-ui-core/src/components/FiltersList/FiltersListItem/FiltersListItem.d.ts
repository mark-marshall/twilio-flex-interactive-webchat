import * as React from "react";
import { FilterDefinition } from "../FiltersList";
export interface FiltersListItemProps extends FilterDefinition {
    handleChange: (newValues: Array<any> | string) => void;
    currentValue: Array<any> | string;
    showExpandToggle: boolean;
    isExpanded: boolean;
    handleExpandClick: (filterToExpand: string) => void;
}
export declare class FiltersListItem extends React.PureComponent<FiltersListItemProps> {
    render(): JSX.Element;
    renderLabel(): JSX.Element;
    renderField(): JSX.Element;
    private handleChange;
    private getOptionFromValue;
    private handleExtendClick;
    private provideIdToOption;
}
