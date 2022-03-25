import * as React from "react";
import { ColumnDefinitionElement } from "./ColumnDefinition";
import { StyledTableRowProps } from "./DataTable.Components";
export interface DataTableRowProps<T, C> extends StyledTableRowProps {
    key: string;
    item: any;
    columnDefinitions: Array<ColumnDefinitionElement<T, C>>;
    columnDataCreationContext?: any;
}
export declare class DataTableRow<T, C> extends React.Component<DataTableRowProps<T, C>> {
    private ref;
    private isInViewport;
    static defaultProps: {
        selected: boolean;
        hover: boolean;
    };
    /**
     * We re-render the entire table every second. Once reconciler hits the row, sCU gets triggered.
     * It calculates if current row is in the viewport and if so, it re-renders the column. Otherwise,
     * the column is ignored.
     */
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
